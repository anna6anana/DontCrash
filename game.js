// ============================================================
//  DON'T CRASH — GAME STATE & LOGIC
// ============================================================

const State = {
  screen: 'splash',        // splash | map | level | results | frenzy | frenzy_results
  // Progress: levelIndex → subLevelIndex → true/false
  progress: {
    rules:   { completed: [], unlocked: true },
    signs:   { completed: [], unlocked: false },
    signals: { completed: [], unlocked: false },
    frenzy:  { unlocked: false, bestScore: null, bestPass: false }
  },

  // Current level session
  session: {
    categoryId: null,
    subLevelIdx: 0,
    questions: [],        // shuffled question list for this sub-level
    qIdx: 0,
    wrongQueue: [],       // questions answered wrong, re-asked at end
    inRepeat: false,      // whether we're in the wrong-repeat phase
    score: 0,
    total: 0,
    selected: null,       // currently selected option index
    answered: false,
  },

  // Frenzy session
  frenzy: {
    questions: [],
    qIdx: 0,
    timeLeft: 25 * 60,   // 25 minutes in seconds
    timerHandle: null,
    rulesScore: 0,
    signsScore: 0,
    signalsScore: 0,
    selected: null,
    answered: false,
    finished: false,
  }
};

// ---- helpers ----
function getCategoryConfig(id) {
  return LEVEL_CONFIG.find(c => c.id === id);
}

function allSubLevelsComplete(catId) {
  const cfg = getCategoryConfig(catId);
  return State.progress[catId].completed.length >= cfg.subLevels.length;
}

function checkUnlocks() {
  if (allSubLevelsComplete('rules'))   State.progress.signs.unlocked = true;
  if (allSubLevelsComplete('signs'))   State.progress.signals.unlocked = true;
  if (allSubLevelsComplete('signals')) State.progress.frenzy.unlocked = true;
  saveProgress();
}

// ---- persistence ----
function saveProgress() {
  try {
    localStorage.setItem('dontcrash_progress', JSON.stringify(State.progress));
  } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem('dontcrash_progress');
    if (raw) {
      const saved = JSON.parse(raw);
      Object.assign(State.progress, saved);
    }
  } catch(e) {}
}

// ---- start a sub-level ----
function startSubLevel(categoryId, subLevelIdx) {
  const cfg = getCategoryConfig(categoryId);
  const sub = cfg.subLevels[subLevelIdx];
  const shuffled = shuffle([...sub.questions]);

  State.session = {
    categoryId,
    subLevelIdx,
    questions: shuffled,
    qIdx: 0,
    wrongQueue: [],
    inRepeat: false,
    score: 0,
    total: shuffled.length,
    selected: null,
    answered: false,
  };
  State.screen = 'level';
  render();
}

// ---- answer a question ----
function selectAnswer(idx) {
  if (State.session.answered) return;
  State.session.selected = idx;
  State.session.answered = true;

  const q = currentQuestion();
  const correct = idx === q.answer;
  if (correct) {
    State.session.score++;
  } else {
    if (!State.session.inRepeat) {
      State.session.wrongQueue.push(q);
    }
  }
  render();
}

function nextQuestion() {
  State.session.selected = null;
  State.session.answered = false;
  State.session.qIdx++;

  const q = currentQuestion();
  if (!q) {
    // Exhausted current list
    if (!State.session.inRepeat && State.session.wrongQueue.length > 0) {
      // Switch to repeat phase
      State.session.inRepeat = true;
      State.session.questions = [...State.session.wrongQueue];
      State.session.wrongQueue = [];
      State.session.qIdx = 0;
      render();
    } else {
      // Done
      markSubLevelComplete();
    }
    return;
  }
  render();
}

function currentQuestion() {
  return State.session.questions[State.session.qIdx] || null;
}

function markSubLevelComplete() {
  const { categoryId, subLevelIdx } = State.session;
  const prog = State.progress[categoryId];
  if (!prog.completed.includes(subLevelIdx)) {
    prog.completed.push(subLevelIdx);
  }
  checkUnlocks();
  State.screen = 'results';
  render();
}

// ---- frenzy ----
function startFrenzy() {
  const questions = buildFrenzyQuestions();
  // Keep category order: rules (0-19), signs (20-31), signals (32-37)
  State.frenzy = {
    questions,
    qIdx: 0,
    timeLeft: 25 * 60,
    timerHandle: null,
    rulesScore: 0,
    signsScore: 0,
    signalsScore: 0,
    selected: null,
    answered: false,
    finished: false,
  };
  State.screen = 'frenzy';
  render();
  startFrenzyTimer();
}

function startFrenzyTimer() {
  if (State.frenzy.timerHandle) clearInterval(State.frenzy.timerHandle);
  State.frenzy.timerHandle = setInterval(() => {
    State.frenzy.timeLeft--;
    if (State.frenzy.timeLeft <= 0) {
      clearInterval(State.frenzy.timerHandle);
      finishFrenzy();
    } else {
      updateFrenzyTimer();
    }
  }, 1000);
}

function selectFrenzyAnswer(val) {
  if (State.frenzy.answered || State.frenzy.finished) return;
  State.frenzy.selected = val;
  State.frenzy.answered = true;

  const q = State.frenzy.questions[State.frenzy.qIdx];
  if (val === q.answer) {
    if (q.category === 'rules')   State.frenzy.rulesScore++;
    if (q.category === 'signs')   State.frenzy.signsScore++;
    if (q.category === 'signals') State.frenzy.signalsScore++;
  }
  render();
}

function nextFrenzyQuestion() {
  State.frenzy.selected = null;
  State.frenzy.answered = false;
  State.frenzy.qIdx++;
  if (State.frenzy.qIdx >= State.frenzy.questions.length) {
    finishFrenzy();
  } else {
    render();
  }
}

function finishFrenzy() {
  if (State.frenzy.timerHandle) clearInterval(State.frenzy.timerHandle);
  State.frenzy.finished = true;

  const passed =
    State.frenzy.rulesScore >= 16 &&
    State.frenzy.signsScore >= 10 &&
    State.frenzy.signalsScore >= 5;

  const total = State.frenzy.rulesScore + State.frenzy.signsScore + State.frenzy.signalsScore;
  if (State.progress.frenzy.bestScore === null || total > State.progress.frenzy.bestScore) {
    State.progress.frenzy.bestScore = total;
    State.progress.frenzy.bestPass = passed;
    saveProgress();
  }

  State.screen = 'frenzy_results';
  render();
}

function formatTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
