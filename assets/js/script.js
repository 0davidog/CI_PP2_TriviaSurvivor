// Welcome to the JavaScript Document

// Setting static global variables
const titleCard = document.getElementById('title-card');
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');
const textBox = document.getElementById('text-box');
const answerBtnA = document.getElementById('answer-btn-a');
const answerBtnB = document.getElementById('answer-btn-b');
const answerBtnC = document.getElementById('answer-btn-c');
const answerBtnD = document.getElementById('answer-btn-d');
//Setting adjustable game variables
let lives = 5;
let quizLength = 10;
let questionNumber = 0;
let questionSet

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
    nexBtn03.onclick = introMessage04;
}
function introMessage04() {
	textBox.innerHTML = `<p>Good luck.</p>`;
	let nexBtn03 = document.getElementById('next-btn-03');
	nexBtn03.classList.add('hidden');
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.remove('hidden');
    nexBtn04.onclick = startQuiz;
}

// Starting Quiz
function startQuiz() {
	creatureBox.style.backgroundImage = "url('../images/zombie-approach-02.webp')";
	//Removing intro text and button...
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.add('hidden');
	textBox.classList.add('hidden');
	// Shuffling question array...
	questionSet = questionList.sort(() => Math.random() - 0.5);
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
	// Retrieving users answer...
	let userAnswer = this.value;
	console.log(`User answered: ${userAnswer}`);
	// Retrieving correct answer...
	let correctAnswer = questionSet[questionNumber].answer;
	console.log(`Correct answer is: ${correctAnswer}`);
	// Comparing the two answers...
	if (userAnswer === correctAnswer) {
		console.log('User answered correctly.');
		console.log('The Creature is stalled.')
		console.log('No lives lost.');
		console.log(`Lives currently at ${lives}.`);
	} else {
		console.log('User answered incorrectly.');
		console.log('The creature takes a step forward.')
		lives--;
		console.log('Lives reduced by 1.');
		console.log(`Lives currently at ${lives}.`);
	}
	
}

const questionList = [  
	{
    q: `<em>'They're coming to get you, Barbara' </em> is a line from which of these classic zombie movies?`,
    a: "Dawn of the Dead",
    b: "White Zombie",
    c: "Night of the Living Dead",
    d: "Shaun of the Dead",
    answer: "C",
  },
];