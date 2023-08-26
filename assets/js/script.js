// Welcome to the JavaScript Document

// Setting variables
const titleCard = document.getElementById('title-card');
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');

// Setting username variable when entered...
const userName = document.getElementById('name');

//logging username to console...
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', logName);
function logName() {
	console.log(`Username: ${userName.value}`);
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
easyBtn.addEventListener('click', startEasyMode);
normalBtn.addEventListener('click', startNormalMode);
hardBtn.addEventListener('click', startHardMode);


function startEasyMode() {
	console.log('Easy mode started...');
	titleCard.style.display = "none";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
}

function startNormalMode() {
	console.log('Normal mode started...');
	titleCard.style.display = "none";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
}

function startHardMode() {
	console.log('Hard mode started...');
	titleCard.style.display = "none";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
}