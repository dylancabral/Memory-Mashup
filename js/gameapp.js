'use strict'

// Global Variables
let playGame = document.querySelector('#play-gameB');
let gameAgain = document.querySelector('#play-againB');

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
let maxAttempt = 3;

// Game Pieces Array in Test Now
let gamePiecesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let gpIndexArray = [];
let gameArray = [];
let piecesInPlay = [];
let piecesMatched = [];


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
function Gamepiece(name, location) {
    this.name = name;
    this.location = location;
    this.timesUsed = 0;
    this.timesFlipped = 0;
    gamePiecesArray.push(this);
}


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

function shuffleGamePieces(arr) {
    randomize(arr);
    let index = gameArray.length;
    let temp = [];
    let random = 0;
    while (index !== 0) {
        random = Math.floor(Math.random() * index);
        index -= 1;
        temp = arr[index];
        arr[index] = arr[random];
        arr[random] = temp;
    }
    return arr;
}

pieces(gamePiecesArray);
randomize(gpIndexArray);

// console.log(array);

function boardSet() {
    let array = shuffleGamePieces(gameArray);
    let piece1 = array.shift();
    piecesInPlay.unshift(piece1);
    let piece2 = array.shift();
    piecesInPlay.unshift(piece2);
    let piece3 = array.shift();
    piecesInPlay.unshift(piece3);
    let piece4 = array.shift();
    piecesInPlay.unshift(piece4);
    let piece5 = array.shift();
    piecesInPlay.unshift(piece5);
    let piece6 = array.shift();
    piecesInPlay.unshift(piece6);
    let piece7 = array.shift();
    piecesInPlay.unshift(piece7);
    let piece8 = array.shift();
    piecesInPlay.unshift(piece8);
    let piece9 = array.shift();
    piecesInPlay.unshift(piece9);
    let piece10 = array.shift();
    piecesInPlay.unshift(piece10);
    let piece11 = array.shift();
    piecesInPlay.unshift(piece11);
    let piece12 = array.shift();
    piecesInPlay.unshift(piece12);
    let piece13 = array.shift();
    piecesInPlay.unshift(piece13);
    let piece14 = array.shift();
    piecesInPlay.unshift(piece14);
    let piece15 = array.shift();
    piecesInPlay.unshift(piece15);
    let piece16 = array.shift();
    piecesInPlay.unshift(piece16);
    let piece17 = array.shift();
    piecesInPlay.unshift(piece17);
    let piece18 = array.shift();
    piecesInPlay.unshift(piece18);
    let piece19 = array.shift();
    piecesInPlay.unshift(piece19);
    let piece20 = array.shift();
    piecesInPlay.unshift(piece20);

    gmpiece1.src = gameArray[piece1].src;
    gmpiece1.name = gameArray[piece1].name;
    gmpiece2.src = gameArray[piece2].src;
    gmpiece2.name = gameArray[piece2].name;
    gmpiece3.src = gameArray[piece3].src;
    gmpiece3.name = gameArray[piece3].name;
    gmpiece4.src = gameArray[piece4].src;
    gmpiece4.name = gameArray[piece4].name;
    gmpiece5.src = gameArray[piece5].src;
    gmpiece5.name = gameArray[piece5].name;
    gmpiece6.src = gameArray[piece6].src;
    gmpiece6.name = gameArray[piece6].name;
    gmpiece7.src = gameArray[piece7].src;
    gmpiece7.name = gameArray[piece7].name;
    gmpiece8.src = gameArray[piece8].src;
    gmpiece8.name = gameArray[piece8].name;
    gmpiece9.src = gameArray[piece9].src;
    gmpiece9.name = gameArray[piece9].name;
    gmpiece10.src = gameArray[piece10].src;
    gmpiece10.name = gameArray[piece10].name;
    gmpiece11.src = gameArray[piece11].src;
    gmpiece11.name = gameArray[piece11].name;
    gmpiece12.src = gameArray[piece12].src;
    gmpiece12.name = gameArray[piece12].name;
    gmpiece13.src = gameArray[piece13].src;
    gmpiece13.name = gameArray[piece13].name;
    gmpiece14.src = gameArray[piece14].src;
    gmpiece14.name = gameArray[piece14].name;
    gmpiece15.src = gameArray[piece15].src;
    gmpiece15.name = gameArray[piece15].name;
    gmpiece16.src = gameArray[piece16].src;
    gmpiece16.name = gameArray[piece16].name;
    gmpiece17.src = gameArray[piece17].src;
    gmpiece17.name = gameArray[piece17].name;
    gmpiece18.src = gameArray[piece18].src;
    gmpiece18.name = gameArray[piece18].name;
    gmpiece19.src = gameArray[piece19].src;
    gmpiece19.name = gameArray[piece19].name;
    gmpiece20.src = gameArray[piece20].src;
    gmpiece20.name = gameArray[piece20].name;
}

const theBtn = document.getElementById('myBtn');
    theBtn.addEventListener('click', function(e) {
    console.log('The button was clicked!');
    });

/*
function gamePlays(e) {
    boardSet();
    e.preventDefault();
    bring in current userObject
    if (e.target === gameBoard) {
      alert("Please click on a game piece!");
    }
     let piecea = e.target.name;
     HOW TO FLIP OVER
     let pieceb = e.target.name;
     HOW TO FLIP OVER

    if piecea === pieceb
         message "Congrats you got a match! Keep going!"
        Score++
        Change img to celebration img
        push to piecesMatched array;
        remove piecea, pieceb from piecesInPlay array
    
    if piecea !== pieceb
        message "Sorry not a matching pair, 1 attempt gone."
        Attempt++
         RETURN CARDS FACE DOWN

    if piecesMatched array.length === gameArray.length || piecesInPlay.length === 0;
        message "Congrats you passed this round"
        gameState()

    if user.attempts = maxAttempts;
        message "Sorry you have no more clicks available!"
        gameState();

    event listener...
    Step 2: TheEvent Listener
    gameBoard.addEventListener('click', gamePlays);
}

function gameState(e) {
    if (userScore === 10) {
        message: Would you like to play another round;
        if (user === yes || user === y) {
            gamePlay();
            HOW DOES CURRENT SCORE CONTINUE - localStorage?;
        }
        if (user !== yes || user !== y) {
            message thank you for playing.
            link to high score page;
        }
    }
    if (userScore < 10) {
        message: Would you like to play a new game;
        if (user === yes || user === y) {
            gamePlay();
        }
        if (user !== yes || user !== y) {
            message thank you for playing.
            link to high score page;
        }
    }
}

gamePlay();
*/