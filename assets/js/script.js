// Welcome to the JavaScript Document

// Setting static global variables
const titleCard = document.getElementById('title-card');
const gameCard = document.getElementById('game-card');
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');
const textBox = document.getElementById('text-box');
const answerBtnA = document.getElementById('answer-btn-a');
const answerBtnB = document.getElementById('answer-btn-b');
const answerBtnC = document.getElementById('answer-btn-c');
const answerBtnD = document.getElementById('answer-btn-d');
const shadowBox = document.getElementById('shadow-box');
const zombieImgSrc = [
	"assets/images/zombie-approach-05.webp",
	"assets/images/zombie-approach-04.webp", 
	"assets/images/zombie-approach-03.webp", 
	"assets/images/zombie-approach-02.webp", 
	"assets/images/zombie-approach-01.webp",
	"assets/images/zombie-approach-00.webp"
]
const dangerColor = [
	"danger-square-05",
	"danger-square-04",
	"danger-square-03",
	"danger-square-02",
	"danger-square-01",
]
//Setting adjustable game variables
let lives = 5;
let quizLength = 9;
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
		quizLength = 6;
		console.log(`Quiz length is now ${quizLength} questions`);
	}
	else if (mode === "normal") {
		console.log('Normal mode started...');
		console.log(`Quiz length remains ${quizLength} questions.`);
		console.log(`Number of lives remain at ${lives}.`);
	}
	else if (mode === "hard") {
		console.log('Hard mode started...');
		lives = 3;
		quizLength = 19;
		console.log(`Quiz length is now ${quizLength} questions`);
		console.log(`Number of lives reduced to ${lives}.`);
	}
	titleCard.style.display = "none";
	gameCard.style.display = "flex";
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
	shuffleQuestions();
}
// Shuffling question array...
function shuffleQuestions() {
	questionSet = questionList.sort(() => Math.random() - 0.5);
	console.log(questionSet);
}

// Starting Quiz
function startQuiz() {
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
	// Checking if user has reached the end of the question list...
	if (questionNumber === quizLength) {
		console.log('Quiz complete.');
		win();
	} else if (lives === 0){
		fail();
	} else {
		questionNumber++;
	}	
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
function correctAnswerMessage() {
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.classList.remove('hidden');
	textBox.innerHTML = `<p>You have answered correctly.</p>`;
	let nexBtn04 = document.getElementById('next-btn-04');
	nexBtn04.classList.remove('hidden');
    nexBtn04.addEventListener('click', function() {
		document.getElementById('questions').classList.remove('hidden');
		document.getElementById('answers').classList.remove('hidden');
		startQuiz;
	}) }
function incorrectAnswerMessage() {
	document.getElementById('questions').classList.add('hidden');
	document.getElementById('answers').classList.add('hidden');
	textBox.classList.remove('hidden');
	textBox.innerHTML = `<p>You have answered incorrectly.</p>`;
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
	shadowBox.style.display = "flex";
	document.getElementById('win-state').classList.remove('hidden');
	document.getElementById('win-text').innerHTML = `Congratulations ${userName.value}, you have escaped the creature's grasp this time.`
}
// Displaying failure screen...
function fail() {
	shadowBox.style.display = "flex";
	document.getElementById('fail-state').classList.remove('hidden');
	document.getElementById('fail-text').innerHTML = `${userName.value}, the creature has you in it's grasp this time. But don't give up. Please try again.`
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
  }, ];