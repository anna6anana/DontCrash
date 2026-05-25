// ============================================================
//  DON'T CRASH — DATA
// ============================================================

const ROAD_RULES = [
  { q: "At an intersection where there is a flashing amber traffic light you must:", options: ["Stop if making a left turn", "Continue at the same speed", "Slow down and proceed with caution", "Stop if making a right turn"], answer: 2 },
  { q: "Identification plates placed in front and rear of a motor vehicle must be painted in:", options: ["Yellow background with black letters", "Black background with white letters, or white luminous background with black letters", "Black background with yellow letters", "Any colour once it is large enough"], answer: 1 },
  { q: "You should under all conditions drive at a speed that will allow you to:", options: ["Stop within 150 metres (500 feet)", "Stop within 90 metres (300 feet)", "Stop within 60 metres (200 feet)", "Stop within a safe distance"], answer: 3 },
  { q: "At night when you meet another vehicle with blinding bright lights, the safest thing to do is:", options: ["Open and shut your eyes rapidly", "Look slightly to the left hand side of the roadway", "Turn your lights on high beam", "Look at the headlights of the approaching vehicle"], answer: 1 },
  { q: "When descending a steep hill, a good safe driving practice is to:", options: ["Disengage the clutch and coast", "Gear down and use motor to assist in braking", "Place the gear shift in neutral", "Turn off the ignition"], answer: 1 },
  { q: "When driving on the highway at night, you should use low beam headlights when:", options: ["Another driver dims his lights", "Blinded by headlights of an approaching vehicle", "Approaching an intersection", "Meeting or following another vehicle"], answer: 3 },
  { q: "A red signal light with a green arrow at an intersection means:", options: ["Proceed with caution in the direction of the arrow, giving way to traffic on the full green light", "Stop and wait for green light before making a turn", "Stop and then proceed", "The green arrow is a signal for pedestrians only"], answer: 0 },
  { q: "At what age will a provisional driving permit for a Private Car be granted?", options: ["21 years", "Any age", "16 years", "17 years"], answer: 3 },
  { q: "In Port-of-Spain and San Fernando it is unlawful to reverse:", options: ["Straight, for a reasonable distance", "On Frederick Street, Port-of-Spain", "Round a corner or junction", "On High Street, San Fernando"], answer: 2 },
  { q: "Before moving your car from a parked position, you should:", options: ["Signal and pull from curb", "Check other traffic, signal and pull from curb when it is safe to do so", "Sound your horn and pull from curb slowly", "Check other traffic, signal and pull from curb quickly"], answer: 1 },
  { q: "If a traffic signal changes while a pedestrian is still in the intersection, who has the right of way?", options: ["The pedestrian", "Motorists coming from the right", "Motorists coming from the left", "Motorists making turns"], answer: 0 },
  { q: "It is more dangerous to drive at the maximum speed limit at night than during the day because:", options: ["Your reaction time is slower at night", "You cannot see as far ahead at night", "Some drivers unlawfully drive with parking lights only", "The roadways are more apt to be slippery at night"], answer: 1 },
  { q: "When approaching a red traffic signal and a police officer motions you to go through, you must:", options: ["Stop to make sure the officer wants you to go through", "Call the officer's attention to the red light", "Wait for the red light to turn green", "Go through at once"], answer: 3 },
  { q: "On streets designed for two-way traffic and you hear a siren, the law requires you to:", options: ["Pull to the left and stop", "Slow down to 15 kilometres (10 miles) an hour", "Stop and then proceed", "Continue at the same speed"], answer: 0 },
  { q: "When approaching an intersection where a stop sign faces you, the law requires you to:", options: ["Slow down and proceed when it is safe to do so", "Stop and proceed when it is safe to do so", "Stop and then proceed", "Yield right of way if necessary to vehicles approaching from left or right"], answer: 1 },
  { q: "Parking lights may be used:", options: ["When driving on well-lighted streets", "When driving in heavy rain", "At any time", "For parking only"], answer: 3 },
  { q: "What brakes are required by law to be fitted on a motor vehicle?", options: ["Hand-brakes only", "Power brakes", "Two independent braking systems each capable of stopping the vehicle within a reasonable distance", "Foot brakes only"], answer: 2 },
  { q: "You are permitted to drive under a provisional permit provided:", options: ["The vehicle is covered by collision insurance", "You have a licensed driver on the seat beside you", "You practice driving in daylight hours only", "Your vehicle is equipped with a dual braking system"], answer: 1 },
  { q: "Which has the right of way over all others at an intersection when the signal light is green?", options: ["Pedestrians crossing with the light", "Pedestrians crossing against the light", "Vehicles turning left", "Vehicles turning right"], answer: 0 },
  { q: "When driving on a dual carriageway, the law requires you to:", options: ["Drive on the left side except when overtaking", "Drive on the right side next to the traffic island", "Drive in the middle of the carriageway", "Drive either right or left"], answer: 0 },
  { q: "When the driver of another vehicle is about to overtake and pass your vehicle, you must:", options: ["Speed up so that passing is not necessary", "Move to the right to prevent passing", "Signal the other driver not to pass", "Move to the left and allow the vehicle to pass and shall not speed abreast the overtaking vehicle"], answer: 3 },
  { q: "Never change lanes in traffic without:", options: ["Looking in the rear-view mirror only", "Giving proper signal and looking to make sure the move can be made safely", "Blowing your horn and looking to the rear", "Decreasing speed and giving correct signal"], answer: 1 },
  { q: "When your motor vehicle is broken down on the roadway the law requires you to:", options: ["Try repairing it", "Leave it on the roadway and look for a mechanic", "Go home and think about it later", "Immediately remove it as near to the left of the roadway as possible and indicate its presence by lighting or otherwise"], answer: 3 },
  { q: "Unless otherwise posted, the maximum speed limit in the City, Boroughs, Villages or built-up areas is:", options: ["30 kilometres (20 miles) an hour", "60 kilometres (35 miles) an hour", "40 kilometres (25 miles) an hour", "50 kilometres (30 miles) an hour"], answer: 3 },
  { q: "Except when overtaking or making a right turn, you should:", options: ["Drive in the centre of the roadway", "Always keep well to the right", "Always keep well to the left", "Drive on the shoulder of the highway"], answer: 2 },
  { q: "When driving, the law requires full control at all times, therefore a child should be carried:", options: ["On the seat left of the driver or on the rear seat", "On the seat right of the driver", "On your lap", "In your arm"], answer: 0 },
  { q: "Every accident must be reported to the police when someone is injured or property is damaged:", options: ["Within a week", "In five days", "Immediately to a police officer in uniform or the nearest police station", "Does not matter if it is trivial"], answer: 2 },
  { q: "How far from a corner or road junction must you park your motor vehicle?", options: ["Not less than 9 metres (30ft)", "3 metres (10ft)", "Any distance", "6 metres (20ft)"], answer: 0 },
  { q: "What must a driver do before entering a highway from a private road or driveway?", options: ["Give hand signal then take right of way", "Enter or cross the highway as quickly as possible", "Sound horn and proceed with caution", "Give right of way to all vehicles approaching on the highway"], answer: 3 },
  { q: "Every driver of a motor vehicle is required by law to keep their driving permit and insurance:", options: ["At home", "At office and produce same at request of police within 48 hours", "Anywhere that is convenient", "Either on their person or in the vehicle"], answer: 3 },
  { q: "Before leaving your car parked on a down-grade, you should:", options: ["Turn front wheels to the right and set parking brakes", "Set your parking brakes only", "Leave front wheels parallel to the curb", "Turn front wheels to the left and set your parking brake"], answer: 3 },
  { q: "A broken centre line on a roadway means you may:", options: ["Pass if the way is clear", "Never pass", "Pass only during daylight hours", "Pass at any time"], answer: 0 },
  { q: "Double white lines in the centre of a roadway mean:", options: ["It is unsafe to overtake and pass", "Pass only when no traffic is in sight", "It is safe to overtake and pass", "Pass at any time"], answer: 0 },
  { q: "A flashing red light at an intersection means:", options: ["Stop, proceed only when it is safe to do so", "Slow down and yield right of way to cars approaching from left or right", "Stop, proceed only when the light changes to green", "Slow down and drive with increased caution"], answer: 0 },
  { q: "In Port-of-Spain, San Fernando and Arima it is unlawful to sound your horn:", options: ["At nights", "Between the hours of 9 p.m. to 5.30 a.m.", "During the day", "Between 7.30 a.m. to 9 a.m. and 4 p.m. to 5.30 p.m."], answer: 1 },
  { q: "Most automobile skids are a result of:", options: ["Over-inflated tyres", "Driving too fast", "Under-inflated tyres", "Wet road"], answer: 1 },
  { q: "When filling petrol in the tank of a motor vehicle, the law requires you to:", options: ["Switch off the engine", "Smoke", "Keep the engine running", "Use a naked light to see the gas gets into the tank"], answer: 0 },
  { q: "If the signal light changes from green to amber as you approach an intersection you must:", options: ["Stop. If a stop cannot be made safely, proceed with caution", "Sound horn to warn pedestrians and other drivers", "Continue through the intersection without slowing or stopping", "Speed up to clear the intersection as quickly as possible"], answer: 0 },
  { q: "When towing a motor vehicle on the roadway the chain, drawbar or rope must not exceed:", options: ["3 metres (10 feet)", "6 metres (20 feet)", "4.5 metres (15 feet)", "Any length would do"], answer: 2 },
  { q: "When driving a motor vehicle, traffic or hand signals should be given by:", options: ["Anybody in the vehicle", "The passenger in the rear", "The person on the left of the driver", "The driver only"], answer: 3 },
  { q: "When a constable on point duty gives a traffic control signal to enable a vehicle to proceed, who has the right of way?", options: ["The pedestrian about to cross the current flow of traffic", "The motorist proceeding in the direction indicated", "The cyclist wanting to cross the flow of traffic", "Anybody can go"], answer: 1 },
  { q: "What offence is committed when someone changes or allows to be used by another person any identification mark or motor vehicle licence?", options: ["Larceny", "Fraud", "No offence", "Disorderly behaviour"], answer: 1 },
  { q: "In what lane should you drive when making a right-hand turn on a wide two-way street?", options: ["The centre lane", "Close to the right side of the roadway", "Close to the left side of the roadway", "Does not matter if you give proper signal"], answer: 0 },
  { q: "When travelling on a highway, the driver is not permitted to carry in a house or boat trailer:", options: ["Pets", "Persons", "Firearms", "Flammable materials"], answer: 1 },
  { q: "At 50 kilometres (30 miles) an hour you should keep at least this distance behind the vehicle in front:", options: ["Five car lengths", "One car length", "Three car lengths", "Seven car lengths"], answer: 2 },
  { q: "Who has the right of way at a roundabout?", options: ["Vehicles going straight", "Those on the left", "Who reaches there first", "Those coming from the right"], answer: 3 },
  { q: "It is in order for a driver to overtake:", options: ["Round a corner", "Where the road ahead is clear for a sufficient distance to enable overtaking and getting back to the left before meeting oncoming traffic", "On a hump-backed or narrow bridge", "At the brow of a hill"], answer: 1 },
  { q: "In one second, a car moving at 30 miles (50 kilometres) per hour travels:", options: ["9 metres (30 feet)", "10 metres (35 feet)", "17 metres (55 feet)", "13.5 metres (44 feet)"], answer: 3 },
  { q: "How close to a fire hydrant may you legally park?", options: ["1.5 metres (5 feet)", "6 metres (20 feet)", "3 metres (10 feet)", "4.5 metres (15 feet)"], answer: 2 },
  { q: "What is the law regarding the colour of your vehicle?", options: ["Paint in a colour of your choice", "It must not be in the colour of the protective services", "It can be painted blue", "It can be red or blue"], answer: 1 },
  { q: "Before making a right turn from a one-way street, you must be:", options: ["Close to the left side of the roadway", "Close to the right side of the roadway", "Close to the centre line of the roadway", "Does not matter if you give proper signal"], answer: 1 },
  { q: "When may you lend your driver's licence?", options: ["For identification purposes", "It is not permitted", "In emergencies", "To a person learning to drive"], answer: 1 },
  { q: "Unless otherwise posted, the maximum speed limit on the highway outside of built-up areas is:", options: ["80 kilometres (50 miles) an hour", "60 kilometres (40 miles) an hour", "50 kilometres (30 miles) an hour", "100 kilometres (60 miles) an hour"], answer: 3 },
  { q: "The maximum length of a combination of vehicles must not exceed:", options: ["10 metres (35 feet)", "18 metres (59 feet)", "17 metres (55 feet)", "15 metres (50 feet)"], answer: 2 },
  { q: "What projections are allowed on a Motor Vehicle or trailer?", options: ["0.91 metres (3 feet) in front", "0.3 metres (1 foot) on each side", "Any length once you carry a red flag at the end of the load", "1.5 metres (5 feet) in front and rear, and not more than 0.3 metres (1 foot) on either side beyond the plane of the wheels"], answer: 3 },
  { q: "Who is deemed the 'Owner' of a Motor Vehicle?", options: ["The person buying the vehicle", "The person for whom the vehicle was bought", "The person in whose name the vehicle is registered", "The person in possession"], answer: 2 },
  { q: "Every motor vehicle operating when lights are required must show at the rear:", options: ["A red light and stop light", "A red light and white identification plate light", "A red reflector and stop-light", "A stop light"], answer: 1 },
  { q: "In what condition should your vehicle be kept?", options: ["Clean", "Anyhow once you have good brakes and steering", "The vehicle and all fittings shall be in such a condition as not to cause danger to any person on the vehicle or on the public road", "One defective tyre does not matter"], answer: 2 },
  { q: "When carrying excess projection on a Light Motor Vehicle, what is required by law?", options: ["A red flag at both ends in the day and red light at night", "Permission must be obtained from the Commissioner of Transport", "A white flag at both ends in the day", "Permission from the Police Officer in charge of the division; and a white flag in the day and a red flag at night at the rear end of the load"], answer: 3 },
  { q: "Who else, other than a Police Officer, Transport Officer or Traffic Warden, can lawfully stop a driver on the roadway?", options: ["Any person in charge of a horse or any other animal", "A cadet in uniform", "A soldier", "A fireman"], answer: 0 },
  { q: "The load on a light goods vehicle should be:", options: ["Placed anyhow once the driver thinks it is safe", "Properly secured in such a manner to prevent displacement of any portion when in motion", "Covered with a flapping tarpaulin", "Held by one or two of the loaders"], answer: 1 },
  { q: "What does 'Tare' mean in reference to a light goods vehicle?", options: ["The actual weight of the vehicle when unladen", "The actual weight of the vehicle when unladen, inclusive of the body, accumulators, loose tools, spare wheels and a full supply of water and fuel", "The weight of the vehicle with load", "The weight of the vehicle with the driver and loaders"], answer: 1 },
  { q: "How would you determine the weight your light goods vehicle should carry?", options: ["When you see the spring touching the chassis", "When the tyres go soft", "Subtract the 'Tare' weight from the 'M.G.W.'", "Any weight if the vehicle can go with it"], answer: 2 },
  { q: "If a Transport Officer has reason to believe that a motor vehicle does not conform to the provisions of the Act or Regulations and calls up the vehicle for inspection at the Licensing Department, the owner may:", options: ["Refuse to comply having passed inspection one week before", "Come up for inspection after seeking an appointment", "Comply as instructed", "Come up when he wishes"], answer: 2 },
  { q: "What weight is considered a light motor vehicle?", options: ["M.G.W. of 2950 kilograms (6,500 lb.) and under", "Any motor vehicle of which the M.G.W. exceeds 2950 kilograms", "1,016 kilograms (1 ton)", "M.G.W. of under 2540 kilograms (5,600 lb)"], answer: 0 },
  { q: "Are you allowed to park a vehicle on a pedestrian crossing?", options: ["Yes, if no pedestrians are using it", "Yes, if it is a passenger vehicle", "No, never", "Yes, as long as there are no police around"], answer: 2 },
  { q: "What is the penalty for exceeding the speed limit by 21km to 30km per hour?", options: ["$2,500.00 and 3 Demerit Points", "$2,000.00 and 4 Demerit Points", "$3,000.00 and 6 Demerit Points", "$1,500.00 and 2 Demerit Points"], answer: 1 },
  { q: "Why should you ensure you get enough rest before you drive?", options: ["I like to sleep", "Driving tired is just as dangerous as driving drunk", "Both (a) and (b)", "None of the above"], answer: 1 },
  { q: "What is the legal limit for drinking and driving in Trinidad and Tobago?", options: ["35 micrograms", "35 millilitres per 100 micrograms of breath", "35 micrograms per 100 millilitres of breath", "36 millilitres per 100 millilitres of breath"], answer: 2 },
  { q: "What is the key characteristic of a designated driver?", options: ["Owns the vehicle", "Wears a designated driver's badge", "Abstains from drinking alcohol", "Drives a bus"], answer: 2 },
  { q: "Which action, when performed while driving, is considered distracted driving?", options: ["Texting or talking on the phone", "Adjusting the radio", "Focusing on a family problem", "All of the above"], answer: 3 },
  { q: "Children younger than 5 years of age must ________ when they travel in a vehicle:", options: ["Be secured in the front seat in the appropriate car seat or booster seat", "Be secured in the back seat in the appropriate child seat or booster seat", "Be secured in the back seat by a seatbelt", "Be held in an adult's lap in the back seat"], answer: 1 },
  { q: "Why is using your cell phone considered a distraction when driving?", options: ["You have to take your eyes off the road", "You have to take your hand off the wheel", "You have to take your mind away from driving", "All of the above"], answer: 3 },
  { q: "What is the objective of the Demerit Points System?", options: ["To teach drivers a lesson", "To encourage drivers to improve driving behaviour and refrain from abusing the privilege to hold a driving permit", "To make them pay a fine and add Demerit Points to their record", "To make sure that they don't injure themselves"], answer: 1 },
  { q: "How does the law define a new/novice driver?", options: ["A driver that has had a drivers permit for less than 3 months", "A driver that has had a drivers permit for less than 6 months", "A driver that has had a drivers permit for less than 12 months", "A driver that has had a drivers permit for less than 18 months"], answer: 2 },
  { q: "Demerit Points are applied to your driving permit record upon:", options: ["Payment of a Fixed Penalty, Conviction before a Court, Failure to pay the Fixed Penalty within the prescribed time frame", "Failure to pay the Fixed Penalty, Payment of $1,000, Conviction before a Court", "Payment of a Fixed Penalty, Conviction before a Court, Failure to submit a breath specimen", "Payment of $2,000, Payment of a Fixed Penalty, Conviction before a Court"], answer: 0 },
  { q: "A driver who is taking a non-prescription drug should:", options: ["Read the labels on the drug before driving", "Drink alcohol instead", "Continue to drive", "Drive only during daylight hours"], answer: 0 },
  { q: "When you want to overtake and pass another vehicle you should:", options: ["Wait for a signal from the other driver", "Change lanes quickly so the other driver will see you", "Signal and pass when safe to do so", "Stay close behind so you need less time to pass"], answer: 2 },
  { q: "You just sold your vehicle. You must notify the Licensing Authority within how many days?", options: ["7", "10", "14", "15"], answer: 0 },
  { q: "You have been involved in a minor collision with a parked vehicle and can't find the owner. You must:", options: ["Leave a note on the vehicle", "Report the accident without delay to the nearest police station", "Both leave a note and report to police", "Look to see if no one is looking and leave"], answer: 2 },
  { q: "If you plan to pass another vehicle, you should:", options: ["Not assume the other driver will make space for you to return to your lane", "Assume the other driver will let you pass if you use your turn signal", "Assume the other driver will maintain a constant speed", "Look in your mirror for 12 seconds then proceed"], answer: 2 },
  { q: "You are approaching a two-lane roundabout going straight. Which is the most appropriate lane?", options: ["Left Lane", "Right Lane", "Left or Right Lane", "Doesn't matter"], answer: 2 },
  { q: "When turning right at a two-lane roundabout, which is the most appropriate lane?", options: ["Left Lane", "Doesn't matter", "Middle Lane", "Right Lane"], answer: 3 },
  { q: "When turning left at a two-lane roundabout, which is the most appropriate lane?", options: ["Doesn't matter", "Left", "Middle", "Right"], answer: 1 },
  { q: "The minimum VLT for the front windscreen is:", options: ["50%", "70%", "35%", "20%"], answer: 1 },
];

const ROAD_SIGNS = [
  // Danger Warning Signs (triangular red)
  { q: "A triangular red-bordered sign with a car skidding is:", options: ["Loose Gravel", "Slippery Road", "Road Works", "Steep Descent"], answer: 1 },
  { q: "A triangular red-bordered sign with rocks falling is:", options: ["Loose Gravel", "Animals Crossing", "Falling Rocks", "Road Works"], answer: 2 },
  { q: "A triangular red-bordered sign showing a walking person is:", options: ["Children Crossing", "Pedestrian Crossing", "Road Works", "School Zone"], answer: 1 },
  { q: "A triangular red-bordered sign with swirling wind lines is:", options: ["Two-way Traffic", "Cross Wind", "Merging Traffic", "Dangerous Double Bend"], answer: 1 },
  { q: "A triangular red-bordered sign with a wavy road diversion is:", options: ["Dangerous Bend", "Diversion to the other Carriageway of a dual Carriageway", "Sharp deviation to the left", "Road Works"], answer: 1 },
  { q: "A triangular red-bordered sign with an exclamation mark is:", options: ["Road Works", "Danger", "Intersection", "Traffic Signals"], answer: 1 },
  { q: "A triangular red-bordered sign showing a road leading to water is:", options: ["Loose Gravel", "Hump Bridge", "Road Leads to quay or riverbank", "Steep Descent"], answer: 2 },
  { q: "A triangular red-bordered sign with small stones hitting a car is:", options: ["Falling Rocks", "Loose Gravel", "Animals Crossing", "Road Works"], answer: 1 },
  { q: "A triangular red-bordered sign showing a large animal (cow) is:", options: ["Animals Crossing", "Machinery Crossing", "Children Crossing", "Loose Gravel"], answer: 0 },
  { q: "A triangular red-bordered sign showing two pillars narrowing is:", options: ["Hump Bridge", "Headroom Restriction", "Carriageway Narrows (both sides)", "Lane Closed"], answer: 2 },
  { q: "A triangular red-bordered sign showing an arched bridge is:", options: ["Steep Ascent", "Hump Bridge", "Road Leads to quay or riverbank", "Roundabout"], answer: 1 },
  { q: "A triangular red-bordered sign with '4m' and a downward arrow is:", options: ["Maximum Speed Limit", "Headroom Restriction", "No entry for vehicles exceeding 2 metres", "Carriageway Narrows"], answer: 1 },
  { q: "A triangular red-bordered sign with a plus/cross shape is:", options: ["Road Works", "Intersection", "Traffic Signals", "Intersection with right-of-way road"], answer: 1 },
  { q: "A triangular red-bordered sign showing a person digging is:", options: ["Road Works", "Machinery Crossing", "Intersection", "Danger"], answer: 0 },
  { q: "A triangular red-bordered sign with a plus sign (thicker vertical) means:", options: ["Intersection", "Road Works", "Intersection with a road the users of which have the Right-of-Way", "Traffic Signals"], answer: 2 },
  { q: "A triangular red-bordered sign with a single right curve is:", options: ["Dangerous Double Bend", "Dangerous Bend", "Sharp deviation to the left", "Roundabout"], answer: 1 },
  { q: "A triangular red-bordered sign with an S-curve is:", options: ["Dangerous Bend", "Dangerous Double Bend", "Merging Traffic", "Two-way Traffic"], answer: 1 },
  { q: "A triangular red-bordered sign showing a slope with '10%' going downward is:", options: ["Steep Ascent", "Steep Descent", "Hump Bridge", "Road Works"], answer: 1 },
  { q: "A triangular red-bordered sign showing a slope with '10%' going upward is:", options: ["Steep Descent", "Steep Ascent", "Hump Bridge", "Dangerous Bend"], answer: 1 },
  { q: "A triangular red-bordered sign showing an adult and child walking is:", options: ["Pedestrian Crossing", "Children Crossing", "Road Works", "Animals Crossing"], answer: 1 },
  { q: "A triangular red-bordered sign showing an airplane is:", options: ["Traffic Signals", "Airfield", "Machinery Crossing", "Cross Wind"], answer: 1 },
  { q: "A triangular red-bordered sign showing circular arrows is:", options: ["Two-way Traffic", "Merging Traffic", "Roundabout", "Sharp deviation to the left"], answer: 2 },
  { q: "A triangular red-bordered sign with one lane blocked and an arrow detouring is:", options: ["Right-hand Lane or dual carriageway road closed to traffic", "Lane Closed", "Merging Traffic", "No Overtaking"], answer: 0 },
  { q: "A triangular red-bordered sign with two arrows pointing up and down is:", options: ["Merging Traffic", "Two-way Traffic", "Roundabout", "Lane Closed"], answer: 1 },
  { q: "A triangular red-bordered sign showing traffic lights (red, yellow, green) is:", options: ["Danger", "Traffic Signals", "Intersection", "No Entry"], answer: 1 },
  { q: "A triangular red-bordered sign showing three dark bars is:", options: ["Traffic Signals", "Lane Closed", "Merging Traffic", "Road Works"], answer: 1 },
  { q: "A triangular red-bordered sign with an arrow merging from the right is:", options: ["Two-way Traffic", "Lane Closed", "Merging Traffic", "Roundabout"], answer: 2 },
  { q: "A triangular red-bordered sign with a tractor/farm machine is:", options: ["Animals Crossing", "Road Works", "Machinery Crossing", "Children Crossing"], answer: 2 },
  { q: "A triangular red-bordered sign with three leftward pointing chevrons is:", options: ["No Left Turn", "Sharp deviation to the left", "Dangerous Double Bend", "Merging Traffic"], answer: 1 },
  // Regulatory Signs
  { q: "A round red sign with a white horizontal bar means:", options: ["No Overtaking", "No Entry", "Maximum Speed Limit", "Stopping Prohibited"], answer: 1 },
  { q: "A red circle with a truck and a cross through it means:", options: ["No Entry for goods vehicles", "No Overtaking", "No entry for vehicles 5 tonnes laden weight", "Maximum Speed Limit"], answer: 0 },
  { q: "A red circle with '5T' crossed out means:", options: ["No entry for goods vehicles", "Maximum Speed Limit 5km", "No entry for vehicles 5 tonnes laden weight", "No entry for vehicles exceeding 2 metres"], answer: 2 },
  { q: "A black 'N' with a red circle and slash means:", options: ["No Overtaking", "No U-Turn", "No Entry", "No Left Turn"], answer: 1 },
  { q: "A red circle with two cars (one crossing the other) means:", options: ["No U-Turn", "No Entry", "No Overtaking", "Lane Closed"], answer: 2 },
  { q: "A round sign with '80' in a red circle means:", options: ["Minimum Speed Limit 80 km/h", "Maximum Speed Limit 80 km/h", "No entry for vehicles over 80kg", "Road speed bump ahead"], answer: 1 },
  { q: "A blue circle crossed with an X means:", options: ["No Entry", "Parking Prohibited", "Stopping Prohibited", "No Overtaking"], answer: 2 },
  { q: "A blue circle with a diagonal slash means:", options: ["Stopping Prohibited", "Parking Prohibited", "No Entry", "No U-Turn"], answer: 1 },
  { q: "A red circle with a downward pointing triangle showing '3.5m' means:", options: ["Headroom Restriction", "No entry for vehicles having an overall height exceeding 3.5 metres", "Steep Descent", "No entry for vehicles over 2 tonnes"], answer: 1 },
  { q: "A red circle with '2T' and axle arrows crossed out means:", options: ["Maximum load 2 tonnes total", "No entry for vehicles having a weight exceeding 2 tonnes on one axle", "No entry for vehicles over 2 metres wide", "No entry for vehicles over 2 tonnes laden weight"], answer: 1 },
  { q: "A sign showing a truck with '←10m→' means:", options: ["No entry for vehicles exceeding 10 metres in length", "Keep 10 metres behind trucks", "Maximum speed for trucks is 10 km/h", "No entry for goods vehicles"], answer: 0 },
  { q: "A red circle with a left-turn arrow crossed out means:", options: ["No Right Turn", "No U-Turn", "No Left Turn", "Direction to be followed"], answer: 2 },
  { q: "A red circle with a right-turn arrow crossed out means:", options: ["No Left Turn", "No U-Turn", "No Right Turn", "Pass this side"], answer: 2 },
  { q: "A red circle with a horn/speaker crossed out means:", options: ["No Entry", "Prohibition of the use of audible warning devices", "No Overtaking", "Stopping Prohibited"], answer: 1 },
  { q: "A red octagon with the word 'STOP' means:", options: ["Give Way", "Stop", "Yield", "No Entry"], answer: 1 },
  { q: "An inverted triangle with 'GIVE WAY' means:", options: ["Stop completely", "Give Way", "Yield to vehicles from the right only", "No Entry"], answer: 1 },
  { q: "A blue circle with a left arrow means:", options: ["Pass this side (left)", "No Right Turn", "Direction to be followed (left)", "No U-Turn"], answer: 2 },
  { q: "A round red sign with a car silhouette crossed out means:", options: ["No entry for any power driven vehicle except two-wheeled motor cycles", "No Overtaking", "No entry for goods vehicles", "No parking"], answer: 0 },
  { q: "A round red sign with a tractor crossed out means:", options: ["No entry for goods vehicles", "No entry for power driven agricultural vehicles", "Machinery Crossing", "No entry for vehicles over 5 tonnes"], answer: 1 },
  { q: "A round red sign with '►2m◄' means:", options: ["Maximum speed 2 km/h", "No entry for vehicles having an overall width exceeding 2 metres", "Keep 2 metres apart", "Headroom restriction 2 metres"], answer: 1 },
  // Informative Signs
  { q: "A blue square sign with a white cross (medical) and a bed means:", options: ["Parking Permitted", "Hospital", "First Aid Station", "Direction Sign"], answer: 1 },
  { q: "A blue square sign with a white 'P' means:", options: ["Stopping Prohibited", "No Parking", "Parking Permitted", "Pay and Display"], answer: 2 },
  { q: "A sign showing a town name (e.g., TUNAPUNA) in a box means:", options: ["Direction Sign", "Informative Sign", "Speed limit zone", "No through road"], answer: 1 },
  { q: "A sign reading 'DUAL CARRIAGEWAY AHEAD' means:", options: ["Road ends ahead", "Two-way traffic begins", "Dual Carriageway Ahead", "No overtaking zone ahead"], answer: 2 },
  { q: "A blue sign showing a T-shape with a bar at the top means:", options: ["Direction Sign", "Intersection ahead", "No through road to vehicular traffic", "Keep Left"], answer: 2 },
  { q: "A blue sign showing lanes with one blocked by a bar and an arrow means:", options: ["No through road to vehicular traffic in lane indicated", "Lane Closed", "Merging Traffic", "Keep Left Except When Overtaking"], answer: 0 },
  { q: "A blue square sign reading 'Keep Left Except When Overtaking' means:", options: ["Always stay in the left lane", "Keep Left Except When Overtaking", "No overtaking on the left", "Two-way traffic"], answer: 1 },
  { q: "A blue sign with a diagonal arrow indicating a direction means:", options: ["No through road to vehicular traffic in direction indicated", "Direction to be followed", "Merging Traffic", "Sharp deviation to the left"], answer: 0 },
];

const HAND_SIGNALS = [
  { q: "To signal a RIGHT TURN, a driver should:", options: ["Extend the right hand at shoulder level with palm facing forward", "Extend the right hand at shoulder level, palm facing downward, wave it downwards and upwards", "Extend the right hand at shoulder level, palm forward, rotate anti-clockwise", "Extend the right hand with palm facing forward below shoulder, wave forward and backward"], answer: 0 },
  { q: "To signal STOPPING, a driver should:", options: ["Extend the right hand at shoulder level with palm facing forward", "Extend the right hand at shoulder level, palm facing downward, wave it downwards and upwards keeping below shoulder level", "Rotate the right hand anti-clockwise at shoulder level", "Extend the right hand with palm facing forward below shoulder, wave forward and backward"], answer: 1 },
  { q: "To signal it is UNSAFE TO OVERTAKE, a driver should:", options: ["Extend the right hand at shoulder level, palm facing downward, wave it downwards and upwards", "Extend the right hand with palm forward below shoulder, wave forward and backward", "Extend the right hand at shoulder level with palm facing forward", "Extend the right hand at shoulder level, palm forward, rotate anti-clockwise"], answer: 2 },
  { q: "To signal a LEFT TURN, a driver should:", options: ["Extend the right hand at shoulder level with palm facing forward", "Extend the right hand at shoulder level, palm facing downward, wave it downwards and upwards", "Extend the right hand at shoulder level, palm facing forward, and rotate it in an anti-clockwise direction", "Extend the right hand with palm forward below shoulder, wave forward and backward"], answer: 2 },
  { q: "To signal it is SAFE TO OVERTAKE, a driver should:", options: ["Extend the right hand at shoulder level with palm facing forward", "Extend the right hand at shoulder level, palm facing downward, wave it downwards and upwards", "Extend the right hand at shoulder level, palm forward, rotate anti-clockwise", "Extend the right hand with palm facing forward below shoulder level, and wave it forward and backward"], answer: 3 },
  { q: "To signal SLOWING DOWN, a driver should:", options: ["Extend the right hand at shoulder level with palm facing forward", "Extend the right hand at shoulder level, palm facing downward, and wave it downwards and upwards keeping below shoulder level", "Extend the right hand at shoulder level, palm forward, rotate anti-clockwise", "Extend the right hand with palm forward below shoulder, wave forward and backward"], answer: 1 },
  { q: "The hand signals for Right Turn and Unsafe to Overtake are:", options: ["Completely different", "The same", "Similar but at different heights", "Mirror images of each other"], answer: 1 },
  { q: "The hand signals for Stopping and Slowing Down are:", options: ["Completely different", "The same", "Similar but at different heights", "Used in opposite situations"], answer: 1 },
];

// ============================================================
//  LEVEL CONFIG
//  Each sub-level pulls a slice of the master arrays.
//  Rules: 85 Qs → 4 mini-levels of ~21, 21, 21, 22
//  Signs: 57 Qs → 3 mini-levels of ~19, 19, 19
//  Signals: 8 Qs → 1 mini-level
// ============================================================
const LEVEL_CONFIG = [
  {
    id: "rules",
    title: "Road Rules",
    emoji: "📋",
    color: "#FF6B6B",
    colorDark: "#c94040",
    subLevels: [
      { title: "Rules 1", questions: ROAD_RULES.slice(0, 21) },
      { title: "Rules 2", questions: ROAD_RULES.slice(21, 42) },
      { title: "Rules 3", questions: ROAD_RULES.slice(42, 63) },
      { title: "Rules 4", questions: ROAD_RULES.slice(63) },
    ]
  },
  {
    id: "signs",
    title: "Road Signs",
    emoji: "🚧",
    color: "#FFB347",
    colorDark: "#c97f00",
    subLevels: [
      { title: "Signs 1", questions: ROAD_SIGNS.slice(0, 20) },
      { title: "Signs 2", questions: ROAD_SIGNS.slice(20, 40) },
      { title: "Signs 3", questions: ROAD_SIGNS.slice(40) },
    ]
  },
  {
    id: "signals",
    title: "Hand Signals",
    emoji: "🤚",
    color: "#7EC8E3",
    colorDark: "#3a8fa8",
    subLevels: [
      { title: "Signals", questions: HAND_SIGNALS },
    ]
  }
];

// ============================================================
//  FRENZY DATA  (T/F format)
//  We'll generate T/F by taking a correct statement (TRUE)
//  or a wrong statement (FALSE) for each question.
// ============================================================
function buildFrenzyQuestions() {
  const frenzy = [];

  // --- 20 MCQ-based T/F from ROAD_RULES ---
  const rulesSample = shuffle([...ROAD_RULES]).slice(0, 20);
  rulesSample.forEach(q => {
    const isTrueVariant = Math.random() < 0.5;
    if (isTrueVariant) {
      frenzy.push({
        q: `TRUE or FALSE: "${q.options[q.answer]}" is the correct answer to: ${q.q}`,
        answer: true,
        category: "rules"
      });
    } else {
      const wrongIdx = (q.answer + 1 + Math.floor(Math.random() * 3)) % q.options.length;
      frenzy.push({
        q: `TRUE or FALSE: "${q.options[wrongIdx]}" is the correct answer to: ${q.q}`,
        answer: false,
        category: "rules"
      });
    }
  });

  // --- 12 Sign T/F ---
  const signsSample = shuffle([...ROAD_SIGNS]).slice(0, 12);
  signsSample.forEach(q => {
    const isTrueVariant = Math.random() < 0.5;
    if (isTrueVariant) {
      frenzy.push({
        q: `TRUE or FALSE: "${q.options[q.answer]}" is the correct answer to: ${q.q}`,
        answer: true,
        category: "signs"
      });
    } else {
      const wrongIdx = (q.answer + 1 + Math.floor(Math.random() * 3)) % q.options.length;
      frenzy.push({
        q: `TRUE or FALSE: "${q.options[wrongIdx]}" is the correct answer to: ${q.q}`,
        answer: false,
        category: "signs"
      });
    }
  });

  // --- 6 Signal T/F ---
  const signalsSample = shuffle([...HAND_SIGNALS]).slice(0, 6);
  signalsSample.forEach(q => {
    const isTrueVariant = Math.random() < 0.5;
    if (isTrueVariant) {
      frenzy.push({
        q: `TRUE or FALSE: "${q.options[q.answer]}" is the correct answer to: ${q.q}`,
        answer: true,
        category: "signals"
      });
    } else {
      const wrongIdx = (q.answer + 1 + Math.floor(Math.random() * 3)) % q.options.length;
      frenzy.push({
        q: `TRUE or FALSE: "${q.options[wrongIdx]}" is the correct answer to: ${q.q}`,
        answer: false,
        category: "signals"
      });
    }
  });

  return frenzy; // 38 total, in category order
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
