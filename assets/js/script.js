// Welcome to the JavaScript Document

// Setting variables
const titleCard = document.getElementById('title-card');
const creatureBox = document.getElementById('creature-box');
const questionBox = document.getElementById('question-box');
const textBox = document.getElementById('text-box');
const nextBtn = document.getElementById('next-btn');

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
easyBtn.addEventListener('click', startQuiz);
normalBtn.addEventListener('click', startQuiz);
hardBtn.addEventListener('click', startQuiz);

function startQuiz(event) {
	let mode = event.target.value;
	if (mode === "easy") {
		console.log('Easy mode started...');
	}
	else if (mode === "normal") {
		console.log('Normal mode started...');
	}
	else if (mode === "hard") {
		console.log('Hard mode started...');
	}
	titleCard.style.display = "none";
	creatureBox.classList.remove('hidden');
	questionBox.classList.remove('hidden');
	textBox.innerHTML = `<p>Welcome ${userName.value}</p>`;
}