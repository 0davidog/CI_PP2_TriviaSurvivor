// Welcome to the JavaScript Document

// Setting static global variables for
// Game cards
const titleCard = document.getElementById('title-card');
const gameCard = document.getElementById('game-card');
const infoCard = document.getElementById('info-card');
const resultsCard = document.getElementById('results-card');
const scoreCard = document.getElementById('score-card');
// Game boxes
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');
const textBox = document.getElementById('text-box');
// Answer buttons
const answerBtnA = document.getElementById('answer-btn-a');
const answerBtnB = document.getElementById('answer-btn-b');
const answerBtnC = document.getElementById('answer-btn-c');
const answerBtnD = document.getElementById('answer-btn-d');
// Sound effects
const selected = new Audio("assets/sounds/selected.wav");
const pageTurn = new Audio("assets/sounds/scroll.wav");
const violins = new Audio("assets/sounds/violins.ogg");
const creatureStep = new Audio("assets/sounds/creature-step.wav");
const correctSound = new Audio("assets/sounds/correct.wav");
// Muting sound effect by default
selected.muted = true;
pageTurn.muted = true;
violins.muted = true;
creatureStep.muted = true;
correctSound.muted = true;

// Zombie image url array
const zombieImgSrc = [
	"assets/images/zombie-approach-05.webp",
	"assets/images/zombie-approach-04.webp", 
	"assets/images/zombie-approach-03.webp", 
	"assets/images/zombie-approach-02.webp", 
	"assets/images/zombie-approach-01.webp",
	"assets/images/zombie-approach-00.webp"
]
// Array of Ids for coloured squares
const dangerColor = [
	"danger-square-05",
	"danger-square-04",
	"danger-square-03",
	"danger-square-02",
	"danger-square-01",
]
//Setting adjustable game variables
let lives = 5;
let quizLength = 10;
let questionNumber = 0;
let userScore = 0;
// Empty variable to set randomised questions in
let questionSet
// Empty variable to set game mode
let gameMode

// Setting up nav bar links
document.getElementById('home-btn').onclick = function() {
	selected.play();
	titleCard.style.display = "flex";
	gameCard.style.display = "none";
	infoCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
	document.getElementById('choose-difficulty').classList.add('hidden');
	document.getElementById('enter-name').classList.remove('hidden');
}
document.getElementById('sound-btn').onclick = function() {
	selected.play();
	let soundBtn = document.getElementById('sound-btn');
	if (soundBtn.classList.contains('fa-volume-off')) {
		soundBtn.classList.remove('fa-volume-off');
		soundBtn.classList.add('fa-volume-high');
		selected.muted = false;
		pageTurn.muted = false;
		violins.muted = false;
		creatureStep.muted = false;
		correctSound.muted = false;
		selected.play();
	} else if (soundBtn.classList.contains('fa-volume-high')) {
		soundBtn.classList.remove('fa-volume-high');
		soundBtn.classList.add('fa-volume-off');
		selected.muted = true;
		pageTurn.muted = true;
		violins.muted = true;
		creatureStep.muted = true;
		correctSound.muted = true;
	}
}
document.getElementById('info-btn').onclick = function() {
	selected.play();
	infoCard.style.display = "flex";
	gameCard.style.display = "none";
	titleCard.style.display = "none";
	resultsCard.style.display = "none";
	scoreCard.style.display = "none";
}
document.getElementById('score-btn').onclick = function() {
	selected.play();
	scoreCard.style.display = "flex";
	infoCard.style.display = "none";
	gameCard.style.display = "none";
	titleCard.style.display = "none";
	resultsCard.style.display = "none";
	document.getElementById('survivors').innerHTML = survivedList.join(``);
	document.getElementById('failures').innerHTML = failedList.join(``);
}

// Setting username variable when entered...
const userName = document.getElementById('name');

//logging username to console...
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', logName);
function logName() {
	selected.play();
	console.log(`Username: ${userName.value}`);
	textBox.innerHTML = `<p>Welcome ${userName.value}.</p>`;
}

// Taking user to difficulty selection...
function chooseDifficulty() {
	let enterName = document.getElementById('enter-name');
	let chooseDifficulty = document.getElementById('choose-difficulty');
	enterName.classList.add('hidden');
    chooseDifficulty.classList.remove('hidden');
}

// Adding variables and event listeners for difficulty selection buttons...
const easyBtn = document.getElementById('easy-btn');
const normalBtn = document.getElementById('normal-btn');
const hardBtn = document.getElementById('hard-btn');
easyBtn.addEventListener('click', modeSelected);
normalBtn.addEventListener('click', modeSelected);
hardBtn.addEventListener('click', modeSelected);

// Setting the options according to mode chosen...
function modeSelected(event) {
	selected.play();
	let mode = event.target.value;
	if (mode === "easy") {
		gameMode = "Easy";
		console.log('Easy mode started...');
		quizLength = 5;
		console.log(`Quiz length is now ${quizLength} questions`);
	}
	else if (mode === "normal") {
		gameMode = "Normal";
		console.log('Normal mode started...');
		console.log(`Quiz length remains ${quizLength} questions.`);
		console.log(`Number of lives remain at ${lives}.`);
	}
	else if (mode === "hard") {
		gameMode = "Hard";
		console.log('Hard mode started...');
		lives = 3;
		document.getElementById(dangerColor[4]).classList.remove('hidden');
		document.getElementById(dangerColor[3]).classList.remove('hidden');
		quizLength = 10;
		console.log(`Quiz length is now ${quizLength} questions`);
	}
	titleCard.style.display = "none";
	gameCard.style.display = "flex";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
	introMessage01();
}

// Adding functions for cycling through the intro messages...
function introMessage01() {
	selected.play();
	let nexBtn01 = document.getElementById('next-btn-01');
	nexBtn01.classList.remove('hidden');
    nexBtn01.addEventListener('click', introMessage02);
}
function introMessage02() {
	pageTurn.play();
	textBox.innerHTML = `<p>You have entered a world of survival trivia.</p>`;
	let nexBtn01 = document.getElementById('next-btn-01');
	nexBtn01.classList.add('hidden');
	let nexBtn02 = document.getElementById('next-btn-02');
	nexBtn02.classList.remove('hidden');
    nexBtn02.addEventListener('click', introMessage03);
}
function introMessage03() {
	pageTurn.play();
	textBox.innerHTML = `<p>Answer questions correctly to stall the creature.</p>`;
	let nexBtn02 = document.getElementById('next-btn-02');
	nexBtn02.classList.add('hidden');
	let nexBtn03 = document.getElementById('next-btn-03');
	nexBtn03.classList.remove('hidden');
    nexBtn03.onclick = introMessage04;
}
function introMessage04() {
	pageTurn.play();
	textBox.innerHTML = `<p>Good luck.</p>`;
	let nexBtn03 = document.getElementById('next-btn-03');
	nexBtn03.classList.add('hidden');
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.remove('hidden');
    nexBtn04.onclick = startQuiz;
	shuffleQuestions();
}
// Shuffling question array...
function shuffleQuestions() {
	pageTurn.play();
	questionSet = questionList.sort(() => Math.random() - 0.5);
	console.log(questionSet);
}

// Starting Quiz
function startQuiz() {
	selected.play();
	// Checking if user has reached the end of the question list or lost all their lives...
	if (questionNumber === quizLength) {
		console.log('Quiz complete.');
		win();
		return;
	} else if (lives === 0){
		console.log('Quiz lost');
		fail();
		return;
	}
	// incrementing question number...
	questionNumber++;
	// Setting danger level variable to interact with images...
	let dangerLvl = lives - 1;
	console.log(`Danger is ${dangerLvl}`);
	document.getElementById("zombie").src = zombieImgSrc[dangerLvl];
	document.getElementById(dangerColor[dangerLvl]).classList.remove('hidden');
	console.log(`Question number: ${questionNumber}.`);
	//Removing intro text and button...
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.add('hidden');
	textBox.classList.add('hidden');
	// Revealing question text and answer buttons...
	let question = document.getElementById('questions');
	let answers = document.getElementById('answers');
	questions.classList.remove('hidden');
	answers.classList.remove('hidden');
	// Building a question from array...
	for (let i = 0; i < questionList.length; i++) {
		question.innerHTML = questionSet[questionNumber].q;
		answerBtnA.innerHTML = questionSet[questionNumber].a;
		answerBtnB.innerHTML = questionSet[questionNumber].b;
		answerBtnC.innerHTML = questionSet[questionNumber].c;
		answerBtnD.innerHTML = questionSet[questionNumber].d;
		answerBtnA.onclick = checkAnswer;
		answerBtnB.onclick = checkAnswer;
		answerBtnC.onclick = checkAnswer;
		answerBtnD.onclick = checkAnswer;
    }
}

// Checking answer...
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
// Correct answer message...
function correctAnswerMessage() {
	correctSound.play();
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.classList.remove('hidden');
	textBox.innerHTML = `${rightMessage[questionNumber]}`;
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.remove('hidden');
    nexBtn04.addEventListener('click', function() {
		document.getElementById('questions').classList.remove('hidden');
		document.getElementById('answers').classList.remove('hidden');
		startQuiz;
	}) }
// Incorrect answer message..
function incorrectAnswerMessage() {
	creatureStep.play();
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.classList.remove('hidden');
	textBox.innerHTML = `${wrongMessage[lives]}`;
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.remove('hidden');
    nexBtn04.addEventListener('click', function() {
		document.getElementById('questions').classList.remove('hidden');
		document.getElementById('answers').classList.remove('hidden');
		startQuiz;
	})
}

// Displaying success screen...
function win() {
	violins.play();
	gameCard.style.display = "none";
	resultsCard.style.display = "flex";
	document.getElementById('win-state').classList.remove('hidden');
	document.getElementById('win-text').innerHTML = `Congratulations ${userName.value}, you have escaped the creature's grasp this time. <br><br>Dare you try again?<br><br>Score: ${userScore}/${quizLength}<br>Mode: ${gameMode}<br>`;
	survivedList.push(`<li>${userName.value} survived with a score of ${userScore}/${quizLength}</li>`);
}

// Displaying failure screen...
function fail() {
	violins.play();
	gameCard.style.display = "none"
	resultsCard.style.display = "flex";
	document.getElementById('fail-state').classList.remove('hidden');
	document.getElementById('fail-text').innerHTML = `<p>${userName.value}, the creature has you in it's grasp this time. But don't give up. <br><br>Please try again.<br><br>Score: ${userScore}/${quizLength}<br>Mode: ${gameMode}<br>`;
	failedList.push(`<li>${userName.value} was lost with a score of ${userScore}/${quizLength}</li>`);
}
// Setting some large arrays at the bottom here, including the questions array
const rightMessage = [
	`right answer 0`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done, keep it up!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Keep going!.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>So far so good.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>You can do it!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Woah, we're half way there!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>You're doing great!.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done.</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Looking good!</p>`,
	`<p>Correct answer.<br>The creature is stalled by your knowledge.<br>Well done, you've almost escaped!</p>`,
	`<p>Correct answer.<br>The creature has been completely stalled by your knowledge.<br>Great work, you made it!</p>`,
]
const wrongMessage = [
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Sorry, there are no more lives left.</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Don't give up!</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Hang in there!</p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br><em>It's coming to get you!</em></p>`,
	`<p>Wrong answer.<br>The creature takes a step forward.<br>Be careful.</p>`,
]
const questionList = [  
	{
    q: `<em>'They're coming to get you, Barbara' </em> is a line from which of these classic zombie movies?`,
    a: "Dawn of the Dead",
    b: "White Zombie",
    c: "Night of the Living Dead",
    d: "Shaun of the Dead",
    answer: "C",
  }, 
	{
    q: `Question 02`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 03`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 04`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 05`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 06`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 07`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 08`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 09`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, 
	{
    q: `Question 10`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  },{
    q: `Question 11`,
    a: "Answer A",
    b: "Answer B",
    c: "Answer C",
    d: "Answer D",
    answer: "A",
  }, ];

let survivedList = [
	`<li>Barry survived with a score of 8/10</li>`
]
let failedList = [
	`<li>Albert was lost with a score of 5/10</li>`
]