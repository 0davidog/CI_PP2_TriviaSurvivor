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
	document.getElementById(dangerColor[5]).classList.add('hidden');
	document.getElementById("zombie").src = zombieImgSrc[0];
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
* plays click sound
* removes previous event listener for next button
* hides the text box
* Displays the zombie image in accordance with the users current lives (0-5)
* Reveals question and answer divs by fetching from their Id
*/
function startQuiz() {
	selected.play();
	nextBtn.removeEventListener('click', startQuiz);
	nextBtn.classList.add('hidden');
	textBox.classList.add('hidden');	
	document.getElementById("zombie").src = zombieImgSrc[lives];
	document.getElementById(dangerColor[lives]).classList.remove('hidden');
	let question = document.getElementById('questions');
	let answers = document.getElementById('answers');
	question.classList.remove('hidden');
	answers.classList.remove('hidden');
	nextQuestion();
}

/** @function
* This function checks if the user has reached the end of the quiz before loading the next question.
* IF the question number is equal to quiz length
* THEN calls function that displays win screen.
* ELSE IF lives have reached zero
* THEN calls function to display lose screen.
* IF neither applies THEN increments question number and calls function to display next question.
*/
function nextQuestion() {
	if (questionNumber === quizLength) {
		win();
	} else if (lives === 0){
		fail();
	} else {
		questionNumber++;
		buildNextQuestion();
	}
}

/** @function
* This function fills the question area and buttons with values from the question set depending on the the current question number. 
* fetches questions div by id
* populates question div and answer buttons with questionSet
* (question set is the questionList array shuffled by math.Random)
* Sets answer buttons to respond to mouse click by calling checkAnswer function.
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

/** @function
* This function checks the answer the user has just mouse-clicked and checks it against the right answer
* retrieves the users answer through 'this.value' method
* retrives correct answer from questionList array.
* IF both match
* THEN user score incremented and function called to display correct answer message.
* ELSE lives are decremented and function called to display incorrect answer message.
*/
function checkAnswer() {
	selected.play();
	let userAnswer = this.value;
	let correctAnswer = questionSet[questionNumber].answer;
	if (userAnswer == correctAnswer) {
		userScore++;
		correctAnswerMessage();
	} else {
		lives--;
		incorrectAnswerMessage();
	}
}

/** @function
* This function displays a message after a correct answer.
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
* This function displays a message after an incorrect answer.
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

/** @function
* This function displays the win result screen.
*/
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
	winReplayBtn.addEventListener('click', reStart);
}

/** @function
* This function displays the fail result screen.
*/
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
	failReplayBtn.addEventListener('click', reStart);
}

/** @function
* This function resets the game variable and takes user to difficulty selection screen.
*/
function reStart() {
	selected.play();
	gameState = "home";
	titleCard.style.display = "flex";
	gameCard.style.display = "none";
	infoCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
	resetVar();
	resetImages();
	hideElements();
	document.getElementById('win-state').classList.add('hidden');
	document.getElementById('win-text').innerHTML = "";
	document.getElementById('fail-state').classList.add('hidden');
	document.getElementById('fail-text').innerHTML = "";
}

// Setting some large arrays at the bottom here...

//Correct Answer Messages
const rightMessage = [
	`right answer 0`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done, keep it up!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Keep going!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>So far so good.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>You can do it!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>You're doing great!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Woah, we're half way there!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Looking good!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done, you've almost escaped!</p>`,
	`<p>Correct answer.<br>The creature has been completely stalled by your knowledge.<br>Great work, you made it!</p>`,
];

//Wrong Answer Messages
const wrongMessage = [
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Sorry, there are no more lives left.</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Don't give up!</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Hang in there!</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br><em>It's coming to get you!</em></p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Be careful.</p>`,
];



// Win scores
let survivedList = [
	`Barry survived with a score of 8/10<br>`,
];

// Fail Scores
let failedList = [
	`Albert was lost with a score of 5/10<br>`,
];