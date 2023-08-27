// Welcome to the JavaScript Document

// Setting static global variables
const titleCard = document.getElementById('title-card');
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');
const textBox = document.getElementById('text-box');
//Setting adjustable game variables
let lives = 5;
let quizLength = 10;

// Setting username variable when entered...
const userName = document.getElementById('name');

//logging username to console...
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', logName);
function logName() {
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
	let mode = event.target.value;
	if (mode === "easy") {
		console.log('Easy mode started...');
		quizLength = 7;
		console.log(`Quiz length is now ${quizLength} questions.`);
	}
	else if (mode === "normal") {
		console.log('Normal mode started...');
		console.log(`Quiz length remains ${quizLength} questions.`);
		console.log(`Number of lives remain at ${lives}.`);
	}
	else if (mode === "hard") {
		console.log('Hard mode started...');
		lives = 3;
		quizLength = 20;
		console.log(`Quiz length is now ${quizLength} questions.`);
		console.log(`Number of lives reduced to ${lives}.`);
	}
	titleCard.style.display = "none";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
	introMessage01();
}

// Adding functions for cycling through the intro messages...
function introMessage01() {
	let nexBtn01 = document.getElementById('next-btn-01');
	nexBtn01.classList.remove('hidden');
    nexBtn01.addEventListener('click', introMessage02);
}
function introMessage02() {
	textBox.innerHTML = `<p>You have entered a world of survival trivia.</p>`;
	let nexBtn01 = document.getElementById('next-btn-01');
	nexBtn01.classList.add('hidden');
	let nexBtn02 = document.getElementById('next-btn-02');
	nexBtn02.classList.remove('hidden');
    nexBtn02.addEventListener('click', introMessage03);
}
function introMessage03() {
	textBox.innerHTML = `<p>Answer questions correctly to stall the creature.</p>`;
	let nexBtn02 = document.getElementById('next-btn-02');
	nexBtn02.classList.add('hidden');
	let nexBtn03 = document.getElementById('next-btn-03');
	nexBtn03.classList.remove('hidden');
    nexBtn03.addEventListener('click', introMessage04);
}
function introMessage04() {
	textBox.innerHTML = `<p>Good luck.</p>`;
	let nexBtn03 = document.getElementById('next-btn-03');
	nexBtn03.classList.add('hidden');
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.remove('hidden');
    nexBtn04.addEventListener('click', startQuiz);
}

// Starting Quiz
function startQuiz() {
	
}