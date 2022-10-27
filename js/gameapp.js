'use strict'

// Global Variables
let playGame = document.querySelector('#play-gameB');
let gameAgain = document.querySelector('#play-againB');

let gameBoard = document.querySelector('#game');
let gmpiece1 = document.querySelector('#one img');
let gmpiece2 = document.querySelector('#two img');
let gmpiece3 = document.querySelector('#three img');
let gmpiece4 = document.querySelector('#four img');
let gmpiece5 = document.querySelector('#five img');
let gmpiece6 = document.querySelector('#six img');
let gmpiece7 = document.querySelector('#seven img');
let gmpiece8 = document.querySelector('#eight img');
let gmpiece9 = document.querySelector('#nine img');
let gmpiece10 = document.querySelector('#ten img');
let gmpiece11 = document.querySelector('#eleven img');
let gmpiece12 = document.querySelector('#twelve img');
let gmpiece13 = document.querySelector('#thirteen img');
let gmpiece14 = document.querySelector('#fourteen img');
let gmpiece15 = document.querySelector('#fifteen img');
let gmpiece16 = document.querySelector('#sixteen img');
let gmpiece17 = document.querySelector('#seventeen img');
let gmpiece18 = document.querySelector('#eighteen img');
let gmpiece19 = document.querySelector('#nineteen img');
let gmpiece20 = document.querySelector('#twenty img');


// Global Arrays
let maxAttempt = 3;

let gamePiecesArray = [];
let piecesInPlay = [];
let piecesMatched = [];

// Generic Game Piece Constructor
function Gamepiece(name, fileExt) {
    this.name = name;
    this.src = `images/${this.name}.${fileExt}`;
    this.timesUsed = 0;
    this.timesFlipped = 0;
    gamePiecesArray.push(this);
}
let bike = new Gamepiece('bicycle-solid', 'svg');
let book = new Gamepiece('book-solid', 'svg');
let car = new Gamepiece('car-solid', 'svg');
let fish = new Gamepiece('fish-solid', 'svg');
let gear = new Gamepiece('gear-solid', 'svg');
let film = new Gamepiece('film-solid', 'svg');
let face = new Gamepiece('face-smile-solid', 'svg');
let eye = new Gamepiece('eye-solid', 'svg');
let camera = new Gamepiece('camera-solid', 'svg');
let check = new Gamepiece('check-solid', 'svg');

let randomPieces1 = [];
function randomize() {
    let counter = 0;
    while (counter < 10) {
        let numberPull = Math.floor(Math.random() * 10);
        if (!randomPieces1.includes(numberPull)) {
            randomPieces1.push(numberPull);
            counter++;
        }
    }
}


randomize();
let randomPieces = [];
randomPieces = [...randomPieces1, ...randomPieces1];
=======
pieces(gamePiecesArray);
randomize(gpIndexArray);

// console.log(array);


function boardSet() {
    let array = [...randomPieces];
    let piece1 = array.shift();
    let piece2 = array.shift();
    let piece3 = array.shift();
    let piece4 = array.shift();
    let piece5 = array.shift();
    let piece6 = array.shift();
    let piece7 = array.shift();
    let piece8 = array.shift();
    let piece9 = array.shift();
    let piece10 = array.shift();
    let piece11 = array.shift();
    let piece12 = array.shift();
    let piece13 = array.shift();
    let piece14 = array.shift();
    let piece15 = array.shift();
    let piece16 = array.shift();
    let piece17 = array.shift();
    let piece18 = array.shift();
    let piece19 = array.shift();
    let piece20 = array.shift();

    gmpiece1.src = gamePiecesArray[piece1].src;
    gmpiece1.name = gamePiecesArray[piece1].name;
    gmpiece2.src = gamePiecesArray[piece2].src;
    gmpiece2.name = gamePiecesArray[piece2].name;
    gmpiece3.src = gamePiecesArray[piece3].src;
    gmpiece3.name = gamePiecesArray[piece3].name;
    gmpiece4.src = gamePiecesArray[piece4].src;
    gmpiece4.name = gamePiecesArray[piece4].name;
    gmpiece5.src = gamePiecesArray[piece5].src;
    gmpiece5.name = gamePiecesArray[piece5].name;
    gmpiece6.src = gamePiecesArray[piece6].src;
    gmpiece6.name = gamePiecesArray[piece6].name;
    gmpiece7.src = gamePiecesArray[piece7].src;
    gmpiece7.name = gamePiecesArray[piece7].name;
    gmpiece8.src = gamePiecesArray[piece8].src;
    gmpiece8.name = gamePiecesArray[piece8].name;
    gmpiece9.src = gamePiecesArray[piece9].src;
    gmpiece9.name = gamePiecesArray[piece9].name;
    gmpiece10.src = gamePiecesArray[piece10].src;
    gmpiece10.name = gamePiecesArray[piece10].name;
    gmpiece11.src = gamePiecesArray[piece11].src;
    gmpiece11.name = gamePiecesArray[piece11].name;
    gmpiece12.src = gamePiecesArray[piece12].src;
    gmpiece12.name = gamePiecesArray[piece12].name;
    gmpiece13.src = gamePiecesArray[piece13].src;
    gmpiece13.name = gamePiecesArray[piece13].name;
    gmpiece14.src = gamePiecesArray[piece14].src;
    gmpiece14.name = gamePiecesArray[piece14].name;
    gmpiece15.src = gamePiecesArray[piece15].src;
    gmpiece15.name = gamePiecesArray[piece15].name;
    gmpiece16.src = gamePiecesArray[piece16].src;
    gmpiece16.name = gamePiecesArray[piece16].name;
    gmpiece17.src = gamePiecesArray[piece17].src;
    gmpiece17.name = gamePiecesArray[piece17].name;
    gmpiece18.src = gamePiecesArray[piece18].src;
    gmpiece18.name = gamePiecesArray[piece18].name;
    gmpiece19.src = gamePiecesArray[piece19].src;
    gmpiece19.name = gamePiecesArray[piece19].name;
    gmpiece20.src = gamePiecesArray[piece20].src;
    gmpiece20.name = gamePiecesArray[piece20].name;
}


boardSet();

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