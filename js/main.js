window.addEventListener('load', init);

//globals


// levels
const levels ={
	easy:5,
	medium:3,
	hard:1
}


const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const dificulty = document.querySelector('#dificulty');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// to change level


// init game
function init(){
	console.log(dificulty);
	// load rom array
	seconds.innerHTML=currentLevel;
	showWord(words);

	//start mathing input
	wordInput.addEventListener('input', startMatch)

	// call  countdown
	setInterval(countdown, 1000);

	// check game status
	setInterval(checkStatus, 500)
}

// start matching
function startMatch(){
	if (matchWord()) {
		console.log('Match');
		isPlaying = true;
		time = currentLevel+1;
		showWord(words);
		wordInput.value= '';
		score++;
	}
	if (score===-1) {
		scoreDisplay.innerHTML = 0;
	}else {
		scoreDisplay.innerHTML = score;
	}
	
}

function matchWord(){
	if (wordInput.value === currentWord.innerHTML) {
			message.innerHTML = 'correct';
			return true;
		}else {
			message.innerHTML = '';
			return false;
		}
}


// pick and show random words
function showWord(words){
	// generarte randoom array index
	const randIndex = Math.floor(Math.random()*words.length);
	// output random word
	currentWord.innerHTML = words[randIndex];


}


function countdown(){

	if (time > 0) {
		// decrement time
		time--;
	}else if (time === 0) {
		//game is over
		isPlaying = false;
	}
	// show time
	timeDisplay.innerHTML = time;
}

function checkStatus(){
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over';
		score = -1;
	}
}