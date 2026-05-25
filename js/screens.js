// ============================================================
//  DON'T CRASH — SCREENS
// ============================================================

function render() {
  const app = document.getElementById('app');
  switch (State.screen) {
    case 'splash':      app.innerHTML = renderSplash(); break;
    case 'map':         app.innerHTML = renderMap(); break;
    case 'level':       app.innerHTML = renderLevel(); break;
    case 'results':     app.innerHTML = renderResults(); break;
    case 'frenzy':      app.innerHTML = renderFrenzy(); setupFrenzyKeyboard(); break;
    case 'frenzy_results': app.innerHTML = renderFrenzyResults(); break;
  }
}

// ============================================================
//  SPLASH
// ============================================================
function renderSplash() {
  return `
  <div class="screen splash-screen">
    <div class="splash-sky">
      <div class="cloud cloud1">☁️</div>
      <div class="cloud cloud2">☁️</div>
      <div class="cloud cloud3">☁️</div>
    </div>
    <div class="splash-title-wrap">
      <div class="splash-title">DON'T</div>
      <div class="splash-title splash-title-2">CRASH!</div>
      <div class="splash-sub">🇹🇹 TT Driving Test Study Buddy 🇹🇹</div>
    </div>
    <div class="road-scene">
      <div class="road">
        <div class="road-stripe"></div>
        <div class="car-wrap">
          <div class="car">🚗</div>
          <div class="car-shadow"></div>
        </div>
      </div>
    </div>
    <button class="btn btn-start" onclick="goToMap()">
      🏁 START ENGINE!
    </button>
    <div class="splash-footer">Study hard, drive safe 💪</div>
  </div>`;
}

function goToMap() {
  State.screen = 'map';
  render();
}

// ============================================================
//  MAP
// ============================================================
function renderMap() {
  const cats = LEVEL_CONFIG;
  const frenzyUnlocked = State.progress.frenzy.unlocked;

  let html = `<div class="screen map-screen">
    <div class="map-header">
      <button class="btn-back" onclick="goToMap()">🏠</button>
      <div class="map-title">Choose Your Level!</div>
    </div>
    <div class="map-path">`;

  cats.forEach((cat, ci) => {
    const prog = State.progress[cat.id];
    const totalSubs = cat.subLevels.length;
    const completedSubs = prog.completed.length;
    const catDone = completedSubs >= totalSubs;
    const catLocked = !prog.unlocked;

    html += `
    <div class="category-node ${catLocked ? 'locked' : ''}" style="--cat-color:${cat.color}; --cat-dark:${cat.colorDark}">
      <div class="cat-header">
        <span class="cat-emoji">${cat.emoji}</span>
        <span class="cat-name">${cat.title}</span>
        ${catDone ? '<span class="cat-done">✅</span>' : ''}
        ${catLocked ? '<span class="cat-lock">🔒</span>' : ''}
      </div>
      <div class="sublevel-row">`;

    cat.subLevels.forEach((sub, si) => {
      const done = prog.completed.includes(si);
      const subUnlocked = !catLocked && (si === 0 || prog.completed.includes(si - 1));
      html += `
        <button class="sublevel-btn ${done ? 'done' : ''} ${!subUnlocked ? 'sub-locked' : ''}"
          onclick="${subUnlocked ? `startSubLevel('${cat.id}', ${si})` : 'showLocked()'}"
          title="${sub.title}">
          ${done ? '⭐' : subUnlocked ? (si + 1) : '🔒'}
          <span class="sublevel-label">${sub.title}</span>
        </button>`;
    });

    html += `</div></div>`;

    // Connector arrow between categories
    if (ci < cats.length - 1) {
      html += `<div class="path-connector">↓</div>`;
    }
  });

  // Frenzy node
  html += `
    <div class="path-connector">↓</div>
    <div class="category-node frenzy-node ${!frenzyUnlocked ? 'locked' : ''}" style="--cat-color:#a855f7; --cat-dark:#7c3aed">
      <div class="cat-header">
        <span class="cat-emoji">⚡</span>
        <span class="cat-name">FRENZY MODE</span>
        ${!frenzyUnlocked ? '<span class="cat-lock">🔒</span>' : ''}
        ${State.progress.frenzy.bestPass ? '<span class="cat-done">🏆</span>' : ''}
      </div>
      ${frenzyUnlocked ? `
        <div class="frenzy-desc">The Real Deal — 38 questions, 25 minutes, T/F style!</div>
        ${State.progress.frenzy.bestScore !== null ? `<div class="frenzy-best">Best Score: ${State.progress.frenzy.bestScore}/38 ${State.progress.frenzy.bestPass ? '✅ PASSED' : '❌ Failed'}</div>` : ''}
        <button class="btn btn-frenzy" onclick="startFrenzy()">⚡ ENTER THE FRENZY!</button>
      ` : `<div class="frenzy-desc">Complete all 3 categories to unlock!</div>`}
    </div>
    </div></div>`;

  return html;
}

function showLocked() {
  // little toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = '🔒 Complete the previous level first!';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// ============================================================
//  LEVEL SCREEN
// ============================================================
function renderLevel() {
  const s = State.session;
  const q = currentQuestion();
  if (!q) return '<div class="screen"><p>Loading...</p></div>';

  const cfg = getCategoryConfig(s.categoryId);
  const sub = cfg.subLevels[s.subLevelIdx];
  const total = s.questions.length;
  const progress = ((s.qIdx) / total) * 100;

  let html = `<div class="screen level-screen" style="--cat-color:${cfg.color}; --cat-dark:${cfg.colorDark}">
    <div class="level-header">
      <button class="btn-back" onclick="confirmBack()">✕</button>
      <div class="level-title">${sub.title}</div>
      <div class="level-score">${s.score} ⭐</div>
    </div>
    <div class="progress-bar-wrap">
      <div class="progress-bar" style="width:${progress}%"></div>
    </div>
    ${s.inRepeat ? '<div class="repeat-banner">🔁 Review time! Let\'s fix those wrong answers!</div>' : ''}
    <div class="question-card">
      <div class="q-num">Q${s.qIdx + 1} of ${total}</div>
      <div class="q-text">${q.q}</div>
    </div>
    <div class="options-grid">`;

  q.options.forEach((opt, i) => {
    let cls = 'option-btn';
    if (s.answered) {
      if (i === q.answer) cls += ' correct';
      else if (i === s.selected && i !== q.answer) cls += ' wrong';
      else cls += ' dimmed';
    }
    html += `<button class="${cls}" onclick="selectAnswer(${i})">${opt}</button>`;
  });

  html += `</div>`;

  if (s.answered) {
    const correct = s.selected === q.answer;
    html += `
    <div class="feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}">
      ${correct ? '🎉 Correct! You got it!' : `😬 Not quite! The answer is: <strong>${q.options[q.answer]}</strong>`}
    </div>
    <button class="btn btn-next" onclick="nextQuestion()">
      ${s.qIdx + 1 >= total && s.wrongQueue.length === 0 ? '🏁 Finish!' : 'Next →'}
    </button>`;
  }

  html += `</div>`;
  return html;
}

function confirmBack() {
  if (confirm('Leave this level? Your progress will be saved up to completed questions.')) {
    State.screen = 'map';
    render();
  }
}

// ============================================================
//  RESULTS SCREEN
// ============================================================
function renderResults() {
  const s = State.session;
  const cfg = getCategoryConfig(s.categoryId);
  const sub = cfg.subLevels[s.subLevelIdx];
  const allCats = LEVEL_CONFIG;
  const nextSub = getNextSubLevel(s.categoryId, s.subLevelIdx);

  const pct = Math.round((s.score / s.total) * 100);
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : 1;
  const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  return `
  <div class="screen results-screen" style="--cat-color:${cfg.color}; --cat-dark:${cfg.colorDark}">
    <div class="results-confetti">${'🎊'.repeat(12)}</div>
    <div class="results-card">
      <div class="results-title">${sub.title} Complete!</div>
      <div class="results-stars">${starStr}</div>
      <div class="results-score">${s.score} / ${s.total}</div>
      <div class="results-pct">${pct}% correct</div>
      <div class="results-msg">${resultsMsg(pct)}</div>
    </div>
    <div class="results-actions">
      ${nextSub ? `<button class="btn btn-next-level" onclick="startSubLevel('${nextSub.catId}', ${nextSub.subIdx})">Next Level →</button>` : ''}
      <button class="btn btn-retry" onclick="startSubLevel('${s.categoryId}', ${s.subLevelIdx})">🔄 Retry</button>
      <button class="btn btn-map" onclick="goToMap()">🗺️ Map</button>
    </div>
  </div>`;
}

function resultsMsg(pct) {
  if (pct === 100) return "PERFECT! You're a driving legend! 🏆";
  if (pct >= 90) return "Incredible! Almost perfect! 🔥";
  if (pct >= 70) return "Great job! Keep it up! 👏";
  if (pct >= 50) return "Not bad! Try again to improve! 💪";
  return "Don't worry, practice makes perfect! 🌱";
}

function getNextSubLevel(catId, subIdx) {
  const cfg = getCategoryConfig(catId);
  if (subIdx + 1 < cfg.subLevels.length) {
    return { catId, subIdx: subIdx + 1 };
  }
  // Check next category
  const catOrder = ['rules', 'signs', 'signals'];
  const catPos = catOrder.indexOf(catId);
  if (catPos < catOrder.length - 1) {
    const nextCat = catOrder[catPos + 1];
    if (State.progress[nextCat].unlocked) {
      return { catId: nextCat, subIdx: 0 };
    }
  }
  return null;
}

// ============================================================
//  FRENZY SCREEN
// ============================================================
function renderFrenzy() {
  const f = State.frenzy;
  const q = f.questions[f.qIdx];
  if (!q) return '<div class="screen"><p>Loading...</p></div>';

  const totalQ = f.questions.length;
  const progress = (f.qIdx / totalQ) * 100;
  const timeClass = f.timeLeft <= 60 ? 'timer-red' : f.timeLeft <= 300 ? 'timer-yellow' : '';

  const catLabels = { rules: '📋 Rules', signs: '🚧 Signs', signals: '🤚 Signals' };
  const scores = [
    { label: '📋', score: f.rulesScore, pass: 16, total: 20 },
    { label: '🚧', score: f.signsScore, pass: 10, total: 12 },
    { label: '🤚', score: f.signalsScore, pass: 5, total: 6 },
  ];

  return `
  <div class="screen frenzy-screen">
    <div class="frenzy-header">
      <div class="frenzy-timer ${timeClass}" id="frenzy-timer">⏱️ ${formatTime(f.timeLeft)}</div>
      <div class="frenzy-title">⚡ FRENZY!</div>
      <div class="frenzy-qcount">${f.qIdx + 1}/${totalQ}</div>
    </div>
    <div class="frenzy-scores">
      ${scores.map(s => `<div class="fscore ${s.score >= s.pass ? 'fscore-pass' : ''}">${s.label} ${s.score}/${s.total}</div>`).join('')}
    </div>
    <div class="progress-bar-wrap">
      <div class="progress-bar frenzy-bar" style="width:${progress}%"></div>
    </div>
    <div class="frenzy-cat-badge">${catLabels[q.category]}</div>
    <div class="question-card frenzy-qcard">
      <div class="q-text frenzy-q">${q.q}</div>
    </div>
    <div class="frenzy-tf-btns">
      <button class="tf-btn true-btn ${f.answered && f.selected === true ? (q.answer === true ? 'correct' : 'wrong') : ''} ${f.answered && f.selected !== true && q.answer === true ? 'correct' : ''}"
        onclick="selectFrenzyAnswer(true)">
        ✅ TRUE
      </button>
      <button class="tf-btn false-btn ${f.answered && f.selected === false ? (q.answer === false ? 'correct' : 'wrong') : ''} ${f.answered && f.selected !== false && q.answer === false ? 'correct' : ''}"
        onclick="selectFrenzyAnswer(false)">
        ❌ FALSE
      </button>
    </div>
    ${f.answered ? `
    <div class="feedback ${f.selected === q.answer ? 'feedback-correct' : 'feedback-wrong'}">
      ${f.selected === q.answer ? '🎉 Correct!' : `😬 That's ${q.answer ? 'TRUE' : 'FALSE'}!`}
    </div>
    <button class="btn btn-next" onclick="nextFrenzyQuestion()">
      ${f.qIdx + 1 >= totalQ ? '🏁 See Results!' : 'Next →'}
    </button>` : ''}
  </div>`;
}

function setupFrenzyKeyboard() {
  document.onkeydown = (e) => {
    if (State.screen !== 'frenzy') { document.onkeydown = null; return; }
    if (e.key === 'ArrowLeft' || e.key === 't' || e.key === 'T') selectFrenzyAnswer(true);
    if (e.key === 'ArrowRight' || e.key === 'f' || e.key === 'F') selectFrenzyAnswer(false);
    if ((e.key === 'Enter' || e.key === ' ') && State.frenzy.answered) nextFrenzyQuestion();
  };
}

function updateFrenzyTimer() {
  const el = document.getElementById('frenzy-timer');
  if (!el) return;
  const f = State.frenzy;
  el.textContent = `⏱️ ${formatTime(f.timeLeft)}`;
  el.className = 'frenzy-timer ' + (f.timeLeft <= 60 ? 'timer-red' : f.timeLeft <= 300 ? 'timer-yellow' : '');
}

// ============================================================
//  FRENZY RESULTS
// ============================================================
function renderFrenzyResults() {
  const f = State.frenzy;
  const rulesPassed  = f.rulesScore >= 16;
  const signsPassed  = f.signsScore >= 10;
  const signalsPassed = f.signalsScore >= 5;
  const overallPassed = rulesPassed && signsPassed && signalsPassed;

  const sections = [
    { label: '📋 Road Rules',   score: f.rulesScore,   total: 20, pass: 16, passed: rulesPassed },
    { label: '🚧 Road Signs',   score: f.signsScore,   total: 12, pass: 10, passed: signsPassed },
    { label: '🤚 Hand Signals', score: f.signalsScore, total: 6,  pass: 5,  passed: signalsPassed },
  ];

  return `
  <div class="screen frenzy-results-screen">
    <div class="fr-hero ${overallPassed ? 'fr-pass' : 'fr-fail'}">
      <div class="fr-hero-icon">${overallPassed ? '🏆' : '😓'}</div>
      <div class="fr-hero-title">${overallPassed ? 'YOU PASSED!' : 'NOT QUITE!'}</div>
      <div class="fr-hero-sub">${overallPassed ? 'You\'re ready for the real test! 🎉' : 'Keep studying — you\'ve got this! 💪'}</div>
    </div>
    <div class="fr-sections">
      ${sections.map(s => `
      <div class="fr-section ${s.passed ? 'fr-s-pass' : 'fr-s-fail'}">
        <div class="fr-s-label">${s.label}</div>
        <div class="fr-s-score">${s.score}/${s.total}</div>
        <div class="fr-s-req">Need ${s.pass} to pass</div>
        <div class="fr-s-badge">${s.passed ? '✅ PASSED' : '❌ FAILED'}</div>
      </div>`).join('')}
    </div>
    <div class="fr-total">Total: ${f.rulesScore + f.signsScore + f.signalsScore} / 38</div>
    <div class="fr-actions">
      <button class="btn btn-frenzy" onclick="startFrenzy()">⚡ Try Again!</button>
      <button class="btn btn-map" onclick="goToMap()">🗺️ Map</button>
    </div>
  </div>`;
}
