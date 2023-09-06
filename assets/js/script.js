// Welcome to the JavaScript Document
/*jshint esversion: 6 */ 

// Setting static global variables for...

// Game cards
const titleCard = document.getElementById('title-card');
const gameCard = document.getElementById('game-card');
const infoCard = document.getElementById('info-card');
const resultsCard = document.getElementById('results-card');
const scoreCard = document.getElementById('score-card');
const commentCard = document.getElementById('comment-card');

// Game boxes
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');
const textBox = document.getElementById('text-box');

// Difficulty buttons
const easyBtn = document.getElementById('easy-btn');
const normalBtn = document.getElementById('normal-btn');
const hardBtn = document.getElementById('hard-btn');

// Next button
const nextBtn = document.getElementById('next-btn');

// Answer buttons
const answerBtnA = document.getElementById('answer-btn-a');
const answerBtnB = document.getElementById('answer-btn-b');
const answerBtnC = document.getElementById('answer-btn-c');
const answerBtnD = document.getElementById('answer-btn-d');
const failReplayBtn = document.getElementById('fail-replay-btn');
const winReplayBtn = document.getElementById('win-replay-btn');

// Sound effects
const selected = new Audio("assets/sounds/selected.wav");
const creatureStep = new Audio("assets/sounds/creature-step.wav");
const correctSound = new Audio("assets/sounds/correct.wav");

// Muting sound effect by default
selected.muted = true;
creatureStep.muted = true;
correctSound.muted = true;

// Setting username variable when entered...
let userName = document.getElementById('name');

//Setting adjustable game variables
let lives = 5;
let quizLength = 10;
let questionNumber = 0;
let userScore = 0;

// Empty variable to set randomised questions in
let questionSet;

// Empty variable to set game mode
let gameMode;

//Set variable gameState to indicate whether continue button to return to game or home 
let gameState = "home";

// Zombie image url array
const zombieImgSrc = [
	"assets/images/zombie-approach-00.webp",
	"assets/images/zombie-approach-05.webp",
	"assets/images/zombie-approach-04.webp", 
	"assets/images/zombie-approach-03.webp", 
	"assets/images/zombie-approach-02.webp", 
	"assets/images/zombie-approach-01.webp",
];

// Array of Ids for coloured squares
const dangerColor = [
	"danger-square-05",
	"danger-square-05",
	"danger-square-04",
	"danger-square-03",
	"danger-square-02",
	"danger-square-01",
];

/** @Function
* Activates when the window loads.
* Fetch screen height.
* Fetch window orientation.
* IF in landscape and height less than 500px.
* Then - ALERT Ask to rotate/unfold
*/
window.addEventListener('load', function() {
	let screenHeight = window.innerHeight;
	let orientation = screen.orientation.type;
	if (orientation == "landscape-primary") {
		if (screenHeight <= 500) {
			alert('This game is best viewed in portrait while at this screen-size.\nPlease rotate or unfold your device.');
			}
	}
}
);

/** @Function
* Activates when the window is resized.
* Fetch screen height.
* Fetch window orientation.
* IF in landscape and height less than 500px.
* Then - ALERT Ask to rotate/unfold.
*/
window.addEventListener('resize', function() {
	let screenHeight = window.innerHeight;
	let orientation = screen.orientation.type;
	if (orientation == "landscape-primary") {
		if (screenHeight <= 500) {
			alert('This game is best viewed in portrait while at this screen-size.\nPlease rotate or unfold your device.');
			}
	}
}
);

/** @Function
* This function returns user to home-screen/title-card.
* Retrieves home button element by Id.
* Activates when button id"home-btn" is clicked.
* Plays click sound. 
* Change gameState value to "home".
* Change display style of title-card to flex.
* Change display style of other cards to none.
* reset game variables to starting value.
* resets game images to starting url.
* Hides elements not needed for title-card.
*/
document.getElementById('home-btn').onclick = function() {
	selected.play();
	gameState = "home";
	titleCard.style.display = "flex";
	gameCard.style.display = "none";
	infoCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
	commentCard.style.display = "none";
	resetVar();
	resetImages();
	hideElements();
};

/** @function
* This function resets game variables to starting values.
* questionSet and gameMode are both reset to undefined.
*/
function resetVar() {
	lives = 5;
	quizLength = 10;
	questionNumber = 0;
	userScore = 0;
    questionSet = undefined;
	gameMode = undefined;
}

/** @function
* This function resets images to their starting appearance.
*/
function resetImages() {
	document.getElementById(dangerColor[0]).classList.add('hidden');
	document.getElementById(dangerColor[1]).classList.add('hidden');
	document.getElementById(dangerColor[2]).classList.add('hidden');
	document.getElementById(dangerColor[3]).classList.add('hidden');
	document.getElementById(dangerColor[4]).classList.add('hidden');
	document.getElementById("zombie").src = zombieImgSrc[5];
}

/** @function
* This function hides all elements for home-screen/title-card
*/
function hideElements() {
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	document.getElementById('text-box').classList.add('hidden');
	document.getElementById('next-btn-box').classList.add('hidden');
	document.getElementById('choose-difficulty').classList.add('hidden');
	document.getElementById('enter-name').classList.remove('hidden');
}

/** @function
* This function toggles the sound on/off.
* Retrieves sound button element by Id.
* Activates with user click on 'sound-btn'.
* IF soundbutton contains class name "fa-volume-off"
* THEN function swaps class name to "fa-volume-high" // (This changes the icons appearance also).
* Sets all available sounds to mute = false.
* plays click sound.
* ELSE IF soundbutton contains class name "fa-volume-high"
* THEN function swaps class name to "fa-volume-off" // (This changes the icons appearance also).
* Sets all available sounds to mute = true.
*/
document.getElementById('sound-btn').onclick = function() {
	selected.play();
	let soundBtn = document.getElementById('sound-btn');
	if (soundBtn.classList.contains('fa-volume-off')) {
		document.getElementById('sound-label').innerHTML = "Sound is on";
		soundBtn.classList.remove('fa-volume-off');
		soundBtn.classList.add('fa-volume-high');
		selected.muted = false;
		creatureStep.muted = false;
		correctSound.muted = false;
		selected.play();
	} else if (soundBtn.classList.contains('fa-volume-high')) {
		document.getElementById('sound-label').innerHTML = "Sound is off";
		soundBtn.classList.remove('fa-volume-high');
		soundBtn.classList.add('fa-volume-off');
		selected.muted = true;
		creatureStep.muted = true;
		correctSound.muted = true;
	}
};

/** @function
* This function takes the user to the info-card.
* Retrives info button by Id.
* Activates on user click of info button.
* Play click sound.
* Set infoCard display style to "flex".
* Set other cards display style to "none".
*/
document.getElementById('info-btn').onclick = function() {
	selected.play();
	infoCard.style.display = "flex";
	gameCard.style.display = "none";
	titleCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
	commentCard.style.display = "none";
};

/** @function
* This function takes the user to the score-card.
* Retrives score button by Id.
* Activates on user click of score button.
* Play click sound.
* Set scoreCard display style to "flex".
* Set other cards display style to "none".
*/
document.getElementById('score-btn').onclick = function() {
	selected.play();
	scoreCard.style.display = "flex";
	infoCard.style.display = "none";
	gameCard.style.display = "none";
	titleCard.style.display = "none";
	resultsCard.style.display = "none";
	commentCard.style.display = "none";
	displayScores();
};

/** @function
* This function displays the scores from the relevant arrays.
* The FOR loop dispays each item from the array by adding them with the += operator to the div referenced by id.
*/
function displayScores() {
	let survived = document.getElementById('survivors');
	survived.innerHTML = ''; 
	for (let i = 0; i < survivedList.length; i++) {
    survived.innerHTML += survivedList[i] + '<br>';
	}
	let lost = document.getElementById('failures');
	lost.innerHTML = '';
	for (let i = 0; i < failedList.length; i++) {
    lost.innerHTML += failedList[i] + '<br>';
	}
}

/** @function
* This function takes the user to the comment-card/feedback form.
* Retrives comment button by Id.
* Activates on user click of comment button.
* Play click sound.
* Set commentCard display style to "flex".
* Set other cards display style to "none".
*/
document.getElementById('comment-btn').onclick = function() {
	selected.play();
	commentCard.style.display = "flex";
	infoCard.style.display = "none";
	gameCard.style.display = "none";
	titleCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
};

/** 
* Fetching continue buttons by Id
* Setting user click event listeners for continueGame function...
*/
document.getElementById('continue-btn-info').onclick = continueGame;
document.getElementById('continue-btn-score').onclick = continueGame;
document.getElementById('continue-btn-comment').onclick = continueGame;

/** @function
* This function takes the user back to the screen/card they last visited.
* IF Checks gameState value 
* THEN reveals only the window relevant to game state.
*/
function continueGame() {
	if (gameState === "home") {
		gameCard.style.display = "none";
		commentCard.style.display = "none";
		infoCard.style.display = "none";
		titleCard.style.display = "flex";
		resultsCard.style.display = "none";
		scoreCard.style.display = "none";
	} else if (gameState === "game") {
		gameCard.style.display = "flex";
		commentCard.style.display = "none";
		infoCard.style.display = "none";
		titleCard.style.display = "none";
		resultsCard.style.display = "none";
		scoreCard.style.display = "none";
	} else if (gameState === "results") {
		gameCard.style.display = "none";
		commentCard.style.display = "none";
		infoCard.style.display = "none";
		titleCard.style.display = "none";
		resultsCard.style.display = "flex";
		scoreCard.style.display = "none";
	}
}

/** @function
* This function reveals a piece of text labeling the icon above it when the users mouse hovers over.
* Fetches button/icon by Id
* Removes 'hidden' from class list.
*/
document.getElementById('home-btn').onmouseover = function() {
	document.getElementById('home-label').classList.remove('hidden');
};

/** @function
* This function hides a piece of text labeling the icon above it when the users mouse moves out.
* Fetches button/icon by Id
* Adds 'hidden' to class list.
*/
document.getElementById('home-btn').onmouseout = function() {
	document.getElementById('home-label').classList.add('hidden');
};

/** @function
* This function reveals a piece of text labeling the icon above it when the users mouse hovers over.
* Fetches button/icon by Id
* Removes 'hidden' from class list.
*/
document.getElementById('sound-btn').onmouseover = function() {
	document.getElementById('sound-label').classList.remove('hidden');
};

/** @function
* This function hides a piece of text labeling the icon above it when the users mouse moves out.
* Fetches button/icon by Id
* Adds 'hidden' to class list.
*/
document.getElementById('sound-btn').onmouseout = function() {
	document.getElementById('sound-label').classList.add('hidden');
};

/** @function
* This function reveals a piece of text labeling the icon above it when the users mouse hovers over.
* Fetches button/icon by Id
* Removes 'hidden' from class list.
*/
document.getElementById('info-btn').onmouseover = function() {
	document.getElementById('info-label').classList.remove('hidden');
};

/** @function
* This function hides a piece of text labeling the icon above it when the users mouse moves out.
* Fetches button/icon by Id
* Adds 'hidden' to class list.
*/
document.getElementById('info-btn').onmouseout = function() {
	document.getElementById('info-label').classList.add('hidden');
};

/** @function
* This function reveals a piece of text labeling the icon above it when the users mouse hovers over.
* Fetches button/icon by Id
* Removes 'hidden' from class list.
*/
document.getElementById('score-btn').onmouseover = function() {
	document.getElementById('score-label').classList.remove('hidden');
};

/** @function
* This function hides a piece of text labeling the icon above it when the users mouse moves out.
* Fetches button/icon by Id
* Adds 'hidden' to class list.
*/

document.getElementById('score-btn').onmouseout = function() {
	document.getElementById('score-label').classList.add('hidden');
};

/** @function
* This function reveals a piece of text labeling the icon above it when the users mouse hovers over.
* Fetches button/icon by Id
* Removes 'hidden' from class list.
*/
document.getElementById('comment-btn').onmouseover = function() {
	document.getElementById('comment-label').classList.remove('hidden');
};

/** @function
* This function hides a piece of text labeling the icon above it when the users mouse moves out.
* Fetches button/icon by Id
* Adds 'hidden' to class list.
*/
document.getElementById('comment-btn').onmouseout = function() {
	document.getElementById('comment-label').classList.add('hidden');
};

/** @function
* This function removes the name entry input and reveals the choose-difficulty buttons.
* Fetches name-input form by Id.
* Activated when user submits their name in the name-input form.
* Plays click sound.
* Fetches enter-name input and choose-difficulty buttons by Id
* Adds hidden class to input while removing it from buttons.
*/
document.getElementById('name-input').addEventListener('submit', function() {
	selected.play();
	let enterName = document.getElementById('enter-name');
	let chooseDifficulty = document.getElementById('choose-difficulty');
	enterName.classList.add('hidden');
    chooseDifficulty.classList.remove('hidden');
});

/**
* Add event listeners to difficulty buttons
* On user click activate next function modeSelected()
*/
easyBtn.addEventListener('click', modeSelected);
normalBtn.addEventListener('click', modeSelected);
hardBtn.addEventListener('click', modeSelected);

/** @function
* This function sets the gameplay values according to difficulty chosen.
* Plays click sound.
* Set gameState to "game".
* Set gameMode to chosen difficulty.
* IF easy THEN the quiz length is shortened to 5.
* IF hard THEN the players lives are reduced to 3 // the first two "danger-squares" are revealed to reflect this.
* exitTitle function call.
*/
function modeSelected(event) {
	selected.play();
	gameState = "game";
	let mode = event.target.value;
	if (mode === "easy") {
		gameMode = "easy";
		quizLength = 5;
	}
	else if (mode === "normal") {
		gameMode = "normal";
	}
	else if (mode === "hard") {
		gameMode = "hard";
		lives = 3;
		document.getElementById(dangerColor[5]).classList.remove('hidden');
		document.getElementById(dangerColor[4]).classList.remove('hidden');
	} exitTitle();
}

/** @funtion
* This function removes the title screen and reveals the game screen.
* It then calls function to begin game intro.
*/
function exitTitle() {
	titleCard.style.display = "none";
	gameCard.style.display = "flex";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
	document.getElementById('text-box').classList.remove('hidden');
	document.getElementById('next-btn-box').classList.remove('hidden');
	introMessage01();
}

/** @function
* This function displays a welcome message and reveals a button leading to next message.
* Plays a click sound
* Add message to html text box
* Reveals button
* Button calls next function on click.
*/
function introMessage01() {
	selected.play();
	textBox.innerHTML = `<p>Welcome ${userName.value}.</p>`;
	nextBtn.classList.remove('hidden');
    nextBtn.addEventListener('click', introMessage02);
}

/** @function
* This function displays a welcome message and reveals a button leading to next message.
* Plays a click sound
* Add message to html text box
* Button calls next function on click.
*/
function introMessage02() {
	selected.play();
	textBox.innerHTML = `<p>You have entered a world of survival trivia.</p>`;
	nextBtn.removeEventListener('click', introMessage02);
    nextBtn.addEventListener('click', introMessage03);
}

/** @function
* This function displays a welcome message and reveals a button leading to next message.
* Plays a click sound
* Add message to html text box
* Button calls next function on click.
*/
function introMessage03() {
	selected.play();
	textBox.innerHTML = `<p>Answer questions correctly to stall the creature.</p>`;
	nextBtn.removeEventListener('click', introMessage03);
    nextBtn.addEventListener('click', introMessage04);
}

/** @function
* This function displays a welcome message and reveals a button leading to next message.
* Plays a click sound
* Add message to html text box
* Button calls next function (shuffleQuestions) on click.
*/
function introMessage04() {
	selected.play();
	textBox.innerHTML = `<p>Good luck.</p>`;
	nextBtn.removeEventListener('click', introMessage04);
    nextBtn.addEventListener('click', shuffleQuestions);
}

/** @function
* This function shuffles the question array by sorting with a random number.
* Plays click sound.
* Fills empty variable questionSet with questionList array in random order.
* Calls startQuiz function.
*/
function shuffleQuestions() {
	nextBtn.removeEventListener('click', shuffleQuestions);
	selected.play();
	questionSet = questionList.sort(() => Math.random() - 0.5);
	startQuiz();
}


/** @function
* This function sets up the quiz area ready for the first/next game.
*/
function startQuiz() {
	selected.play();
	nextBtn.removeEventListener('click', startQuiz);
	//Removing intro text and button...
	nextBtn.classList.add('hidden');
	textBox.classList.add('hidden');	
	document.getElementById("zombie").src = zombieImgSrc[lives];
	document.getElementById(dangerColor[lives]).classList.remove('hidden');
	// Revealing question text and answer buttons...
	let question = document.getElementById('questions');
	let answers = document.getElementById('answers');
	question.classList.remove('hidden');
	answers.classList.remove('hidden');
	nextQuestion();
}

/** @function
* This function checks if the user has reached the end of the quiz or loads the next question.
*/
function nextQuestion() {
	if (questionNumber === quizLength) {
		win();
		return;
	} else if (lives === 0){
		fail();
		return;
	} else {
		questionNumber++;
		buildNextQuestion();
	}
}

/** @function
* This function fills the question area and buttons with values from the question set depending on the the current question number. 
*/
function buildNextQuestion() {
	let questions = document.getElementById('questions');
	questions.innerHTML = questionSet[questionNumber].q;
	answerBtnA.innerHTML = questionSet[questionNumber].a;
	answerBtnB.innerHTML = questionSet[questionNumber].b;
	answerBtnC.innerHTML = questionSet[questionNumber].c;
	answerBtnD.innerHTML = questionSet[questionNumber].d;
	answerBtnA.onclick = checkAnswer;
	answerBtnB.onclick = checkAnswer;
	answerBtnC.onclick = checkAnswer;
	answerBtnD.onclick = checkAnswer;
}

/**
*
*/
function checkAnswer() {
	selected.play();
	// Retrieving users answer...
	let userAnswer = this.value;
	console.log(`User answered: ${userAnswer}`);
	// Retrieving correct answer...
	let correctAnswer = questionSet[questionNumber].answer;
	console.log(`Correct answer is: ${correctAnswer}`);
	// Comparing the two answers...
	if (userAnswer == correctAnswer) {
		console.log('User answered correctly.');
		console.log('The Creature is stalled.');
		console.log('No lives lost.');
		console.log(`Lives currently at ${lives}.`);
		userScore++;
		correctAnswerMessage();
	} else {
		console.log('User answered incorrectly.');
		console.log('The creature takes a step forward.');
		lives--;
		console.log('Lives reduced by 1.');
		console.log(`Lives currently at ${lives}.`);
		incorrectAnswerMessage();
	}
}

/** @function
*
*/
function correctAnswerMessage() {
	correctSound.play();
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.classList.remove('hidden');
	textBox.innerHTML = `${rightMessage[questionNumber]}`;
	nextBtn.classList.remove('hidden');
    nextBtn.addEventListener('click', startQuiz);
}

/** @function
*
*/
function incorrectAnswerMessage() {
	creatureStep.play();
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.classList.remove('hidden');
	textBox.innerHTML = `${wrongMessage[lives]}`;
	nextBtn.classList.remove('hidden');
    nextBtn.addEventListener('click', startQuiz);
}

// Displaying success screen...
function win() {
	gameState = "results";
	textBox.classList.add('hidden;');
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.innerHTML = "";
	gameCard.style.display = "none";
	resultsCard.style.display = "flex";
	document.getElementById('win-state').classList.remove('hidden');
	document.getElementById('win-text').innerHTML = `Congratulations ${userName.value}, you have escaped the creature's grasp this time. <br><br>Dare you try again?<br><br>Score: ${userScore}/${quizLength}<br>Mode: ${gameMode}<br>`;
	survivedList.push(`${userName.value} survived with a score of ${userScore}/${quizLength}<br>`);
}

// Displaying failure screen...
function fail() {
	gameState = "results";
	textBox.classList.add('hidden');
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.innerHTML = "";
	gameCard.style.display = "none";
	resultsCard.style.display = "flex";
	document.getElementById('fail-state').classList.remove('hidden');
	document.getElementById('fail-text').innerHTML = `<p>${userName.value}, the creature has you in it's grasp this time. But don't give up. <br><br>Please try again.<br><br>Score: ${userScore}/${quizLength}<br>Mode: ${gameMode}<br>`;
	failedList.push(`${userName.value} was lost with a score of ${userScore}/${quizLength}<br>`);
}

// Exiting Win/Fail screens and restarting from difficulty screen...
failReplayBtn.addEventListener('click', reStart);
winReplayBtn.addEventListener('click', reStart);

function reStart() {
	selected.play();
	gameState = "home";
	titleCard.style.display = "flex";
	gameCard.style.display = "none";
	infoCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
	//Setting adjustable game variables
	resetVar();
	// Resetting images
	resetImages();
	// Hide elements
	hideElements();
	document.getElementById('win-state').classList.add('hidden');
	document.getElementById('win-text').innerHTML = "";
	document.getElementById('fail-state').classList.add('hidden');
	document.getElementById('fail-text').innerHTML = "";

}

// Setting some large arrays at the bottom here, including the questions array
const rightMessage = [
	`right answer 0`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done, keep it up!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Keep going!.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>So far so good.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>You can do it!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>You're doing great!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Woah, we're half way there!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Looking good!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done, you've almost escaped!</p>`,
	`<p>Correct answer.<br>The creature has been completely stalled by your knowledge.<br>Great work, you made it!</p>`,
];
const wrongMessage = [
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Sorry, there are no more lives left.</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Don't give up!</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Hang in there!</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br><em>It's coming to get you!</em></p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Be careful.</p>`,
];
const questionList = [
	{
		q: `"They're coming to get you Barbra" is a line from which film?`,
		a: "Night of the Living Dead (1968)",
		b: "Shaun of the Dead (2004)",
		c: "Dawn of the Dead (1978)",
		d: "Survival of the Dead (2009)",
		answer: "A",
	}, 
	{
		q: `Which of these films was not directed by George A. Romero`,
		a: "Dawn of the Dead (1978)",
		b: "Land of the Dead (2005)",
		c: "Diary of the Dead (2007)",
		d: "City of the Living Dead (1980)",
		answer: "D",
	},
	{
		q: `"When there's no more room in hell, the dead will walk the Earth" is a line from which film?`,
		a: "Night of the Living Dead (1968)",
		b: "Dawn of the Dead (1978)",
		c: "City of the Living Dead (1980)",
		d: "Day of the Dead (1985)",
		answer: "B",
	},
	{
		q: `"SCREAM So They can Find You!!" Is a tagline from which film?`,
		a: "Day of the Dead (1985)",
		b: "Let Sleeping Corpses Lie (1974)",
		c: "Tombs of the Blind Dead (1972)",
		d: "The Return of the Living Dead (1985)",
		answer: "C",
	},
	{
		q: `Which film has the alternate title "The Living Dead at Manchester Morgue"`,
		a: "Tombs of the Blind Dead (1972)",
		b: "Return of the Livind Dead III (1993)",
		c: "City of the Living Dead (1980)",
		d: "Let Sleeping Corpses Lie (1974)",
		answer: "D",
	},
	{
		q: `"Julie, are you eating him? You should stop it." Is a line from which film?`,
		a: "Return of the Living Dead III (1993)",
		b: "Night of the Living Dead (1990)",
		c: "I Walked with a Zombie (1943)",
		d: "Diary of the Dead (2007)",
		answer: "A",
	},
	{
		q: `Which zombie film has the characters named after their home states?`,
		a: "City of the Living Dead (1980)",
		b: "Zombieland (2009)",
		c: "Return of the Living Dead: Part II (1988)",
		d: "House by the Cemetery (1981)",
		answer: "B",
	},
	{
		q: `Which film kicked off a series in which the zombies hungered specifically for brains?`,
		a: "City of the Living Dead (1980)",
		b: "The Evil Dead (1981)",
		c: "The Return of the Living Dead (1985)",
		d: "28 Days Later (2002)",
		answer: "C",
	},
	{
		q: `In which film does a zombie say the line "send more paramedics" on a CB radio?`,
		a: "Evil Dead II (1987)",
		b: "The Quick and the Dead (1995)",
		c: "Zombie for Sale (2019)",
		d: "The Return of the Living Dead (1985)",
		answer: "D",
	},
	{
		q: `"We're coming to get you, Barbara!" Is a line from which film?`,
		a: "Shaun of the Dead (2004)",
		b: "Evil Dead Rise (2023)",
		c: "Return of the Living Dead III (1993)",
		d: "Undead (2003)",
		answer: "A",
	},
	{
		q: `Which film kicked of a series in which a zombie outbreak was caused by the T-Virus`,
		a: "Island of the Dead (2000)",
		b: "Resident Evil (2002)",
		c: "Silent Hill (2006)",
		d: "House of the Dead (2003)",
		answer: "B",
	},
	{
		q: `Which of these zombie classics have not yet been remade?`,
		a: "Night of the Living Dead (1968)",
		b: "Dawn of the Dead (1978)",
		c: "The Return of the Living Dead (1985)",
		d: "Day of the Dead (1985)",
		answer: "C",
	},
	{
		q: `The awakening of Nazi Zombies on a mountain is a particular problem in which of these films?`,
		a: "Zombie Holocaust (1980)",
		b: "Army of Darkness (1992)",
		c: "Army of the Dead (2021)",
		d: "Dead Snow (2009)",
		answer: "D",
	},
	{
		q: `Which of these film featured Bub, a tamed zombie.`,
		a: "Day of the Dead (1985)",
		b: "Warm Bodies (2013)",
		c: "Fido (2006)",
		d: "Survival of the Dead (2009)",
		answer: "A",
	},
	{
		q: `Which of these films was based on the novel of the same name by author Max Brooks?`,
		a: "Pontypool (2008)",
		b: "World War Z (2013)",
		c: "Resident Evil (2003)",
		d: "Warm Bodies (2013)",
		answer: "B",
	},
	{
		q: `A zombie vs a live shark describes a scene from which film?`,
		a: "Cowboys vs. Zombies (2014)",
		b: "Braindead (2002)",
		c: "Zombie Flesh Eaters (1979)",
		d: "Re-Animator (1985)",
		answer: "C",
	},
	{
		q: `Which of these films is set primarily in the Monroeville Mall?`,
		a: "#Alive (2020)",
		b: "Return of the Living Dead: Part II (1988)",
		c: "Zom 100: Bucket List of the Dead (2023)",
		d: "Dawn of the Dead (1978)",
		answer: "D",
	},
	{
		q: `Which of these films is based on a popular zombie video game series?`,
		a: "Resident Evil (2002)",
		b: "Army of the Dead (2021)",
		c: "Tombs of the Blind Dead (1972)",
		d: "The Evil Dead (1981)",
		answer: "A",
	},
	{
		q: `Which of these films is not real? ...Yet.`,
		a: "Zombies vs. Strippers (2012)",
		b: "Clowns vs. Zombies (2014)",
		c: "Cockneys vs. Zombies (2012)",
		d: "Cowboys vs, Zombies (2014)",
		answer: "B",
	},
	{
		q: `Which of these zombie outbreak films stars actor Brad Pitt?`,
		a: "Maggie (2015)",
		b: "Pride and Prejudice and Zombies (2016)",
		c: "World War Z (2013)",
		d: "Warm Bodies (2013)",
		answer: "C",
	},
	{
		q: `Which of these films feature a zombie outbreak on a train in South Korea?`,
		a: "3:10 to Yuma (2007)",
		b: "The Midnight Meat Train (2008)",
		c: "Terror Train (1980)",
		d: "Train to Busan (2016)",
		answer: "D",
	},
	{
		q: `In which of these films is a zombie virus trasmitted through language?`,
		a: "Pontypool (2008)",
		b: "The Astro-Zombies (1968)",
		c: "The Plague of the Zombies (1966)",
		d: "Resident Evil: Death Island (2023)",
		answer: "A",
	}, ];

let survivedList = [
	`Barry survived with a score of 8/10<br>`
];
let failedList = [
	`Albert was lost with a score of 5/10<br>`
];