'use strict'

// Global Variables
let playGame = document.querySelector('#play-gameB');
let gameAgain = document.querySelector('#play-againB');
let userInput = document.getElementById('userInput');
let btn1 = document.getElementById('btn1');
let message = document.getElementById('greetings1')

let gameBoard = document.querySelector('#game');
let gmpiece1 = document.querySelector('#one');
let gmpiece2 = document.querySelector('#two');
let gmpiece3 = document.querySelector('#three');
let gmpiece4 = document.querySelector('#four');
let gmpiece5 = document.querySelector('#five');
let gmpiece6 = document.querySelector('#six');
let gmpiece7 = document.querySelector('#seven');
let gmpiece8 = document.querySelector('#eight');
let gmpiece9 = document.querySelector('#nine');
let gmpiece10 = document.querySelector('#ten');
let gmpiece11 = document.querySelector('#eleven');
let gmpiece12 = document.querySelector('#twelve');
let gmpiece13 = document.querySelector('#thirteen');
let gmpiece14 = document.querySelector('#fourteen');
let gmpiece15 = document.querySelector('#fifteen');
let gmpiece16 = document.querySelector('#sixteen');
let gmpiece17 = document.querySelector('#seventeen');
let gmpiece18 = document.querySelector('#eighteen');
let gmpiece19 = document.querySelector('#nineteen');
let gmpiece20 = document.querySelector('#twenty');

// Global Arrays
let userArray = [];
let maxAttempt = 3;

// Game Pieces Array in Test Now
let gamePiecesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let gpIndexArray = [];
let gameArray = [];
let cardsInPlay = [];
let cardsMatched = [];


// Generic User Constructor
function User(name) {
  this.name = name;
  // this.src = ``;
  this.score = 0;
  this.highScore = 0;
  this.gameAttempts = 0;
}

// Random number generator
function randomNum() {
  let ranNum = Math.floor(Math.random() * 40);

  if (ranNum % 2 !== 0) {
      ranNum = ranNum + 1;
      return ranNum;
  }

  while (ranNum % 2 === 0) {
      return ranNum;
  }
}

// Generic Game Piece Constructor
function Gamepiece(name, location){
  this.name = name;
  this.location = location;
  this.timesUsed = 0;
  this.timesFlipped = 0;
  gamePiecesArray.push(this);
}

function welcome(event) {
  event.preventDefault();
  let userInput = document.getElementById('userInput').value;
  let name = document.getElementById('userInput').value;

  message.innerHTML = 'Welcome ' + userInput + ' to Memory Mashup!';
  
  let newUser = new User(name);
  checkLocalStorage();
  console.log(userArray);
  userArray.push(newUser);
  // console.log(newUser);
  // userInput = '';
  // console.log(userArray);
  localStorage.setItem("profiles", JSON.stringify(userArray));
}


// local storage
let checkLocalStorage = function() {
var retrievedData = JSON.parse(localStorage.getItem("profiles"));
console.log(retrievedData);
if (retrievedData) {
  userArray = retrievedData;
  console.log(userArray);
} 
else {
// else userArray will be an empty array
  console.log(userArray);
}
}

console.log(userArray);
  
btn1.addEventListener('click', welcome);

function pieces(arr) {
    // bring in gamePieces Array
    let startArray = [];
    let endArray = [];
    for (let i = 0; i < arr.length; i++) {
        startArray[i] = arr[i];
    }
    endArray = arr.concat(startArray);
    endArray.sort();
    for (let i = 0; i < endArray.length; i++) {
        gpIndexArray.push(endArray[i]);
    }
}

 function randomize(arr) {
    let numberPull = randomNum();
    for (let i = 0; i < 20; i++) {
    gameArray.push(arr[(numberPull + i)]);
  }
}

function shuffleGamePieces (array) {
    randomize(array);
    let index = gameArray.length;
    let temp = [];
    let random = 0;
    while (index !== 0) {
        random = Math.floor(Math.random() * index);
        index -= 1;
        temp = array[index];
        array[index] = array[random];
        array[random] = temp;
    }
    return array;
}

pieces(gamePiecesArray);
randomize(gpIndexArray);

console.log(array);

function boardSet() {
    shuffleGamePieces(gameArray);


    // let product1 = indexArray.shift();
    // let product2 = indexArray.shift();
    // let product3 = indexArray.shift();

    // nestedPieces(gamePiecesArray);

// function gamePlay() {
    // if pair1a === pair1b
    
    // bring in current userObject

    // track score

    // track attempts

    // game pieces picked 

    // if a match then...

    // if not a match then....

    // event listener...
}



// gamePlay();