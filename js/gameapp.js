'use strict'

// Global Variables
let playGame = document.querySelector('#play-gameB');
let gameAgain = document.querySelector('#play-againB');


let gameBoard = document.querySelector('#game');
let gmpieceArray = [document.querySelector('#one img'), document.querySelector('#two img'), document.querySelector('#three img'),
document.querySelector('#four img'), document.querySelector('#five img'), document.querySelector('#six img'), document.querySelector('#seven img'),
document.querySelector('#eight img'), document.querySelector('#nine img'), document.querySelector('#ten img'), document.querySelector('#eleven img'),
document.querySelector('#twelve img'), document.querySelector('#thirteen img'), document.querySelector('#fourteen img'), document.querySelector('#fifteen img'),
document.querySelector('#sixteen img'), document.querySelector('#seventeen img'), document.querySelector('#eighteen img'), document.querySelector('#nineteen img'),
document.querySelector('#twenty img')];

// Global Arrays
let maxAttempt = 3;

let gamePiecesArray = [];
let piecesInPlay = [];
let piecesMatched = [];

// Generic Game Piece Constructor
function Gamepiece(name, fileExt) {
    this.name = name;
    this.src = `images/${this.name}.${fileExt}`;
    this.alt = name;
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

pieces(gamePiecesArray);
randomize(gpIndexArray);

// console.log(array);


function boardSet() {
    let array = [...randomPieces];

    for (let i = 0; i < 20; i++) {
        let x = array.shift();
        gmpieceArray[i].src = gamePiecesArray[x].src;
        gmpieceArray[i].name = gamePiecesArray[x].name;
        gmpieceArray[i].alt = gamePiecesArray[x].alt;
        gmpieceArray[i].addEventListener('click', gamePlays);
    }
}


boardSet();

function gamePlays(e) {
    boardSet();

    const theBtn = document.getElementById('myBtn');
    theBtn.addEventListener('click', function(e) {
    console.log('The button was clicked!');
    });

    gmpieceArray[0].addEventListener("click", flipPiece);

    function flipPiece() {
        gmpieceArray[0].classList.toggle("flipPiece");
    }



    /*
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
    */
}

// function gameState(e) {
//     if (userScore === 10) {
//         message: Would you like to play another round;
//         if (user === yes || user === y) {
//             gamePlay();
//             HOW DOES CURRENT SCORE CONTINUE - localStorage?;
//         }
//         if (user !== yes || user !== y) {
//             message thank you for playing.
//             link to high score page;
//         }
//     }
//     if (userScore < 10) {
//         message: Would you like to play a new game;
//         if (user === yes || user === y) {
//             gamePlay();
//         }
//         if (user !== yes || user !== y) {
//             message thank you for playing.
//             link to high score page;
//         }
//     }
// }


