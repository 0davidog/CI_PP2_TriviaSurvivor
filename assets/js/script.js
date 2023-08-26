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