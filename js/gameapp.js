'use strict'

// Global Variables
let playGame = document.querySelector('#play-gameB');
let gameAgain = document.querySelector('#play-againB');

let gameBoard = document.querySelector('#game');
let gmpieceArray = [document.querySelector('#one img'), document.querySelector('#two img'), document.querySelector('#three img'),
document.querySelector('#four img'), document.querySelector('#five img'), document.querySelector('#six img'), document.querySelector('#seven img'), document.querySelector('#eight img'), document.querySelector('#nine img'), document.querySelector('#ten img'), document.querySelector('#eleven img'), document.querySelector('#twelve img'), document.querySelector('#thirteen img'), document.querySelector('#fourteen img'), document.querySelector('#fifteen img'), document.querySelector('#sixteen img'), document.querySelector('#seventeen img'), document.querySelector('#eighteen img'), document.querySelector('#nineteen img'), document.querySelector('#twenty img')];

// Global Arrays
let maxAttempt = 3;
let attempts = 0;

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
let headphones = new Gamepiece('headphones', 'svg');
let paperPlane = new Gamepiece('paper-plane', 'svg');
let personDress = new Gamepiece('person-dress', 'svg');
let person = new Gamepiece('person', 'svg');
let phone = new Gamepiece('phone', 'svg');
let plane = new Gamepiece('plane', 'svg');
let shirt = new Gamepiece('shirt', 'svg');
let slack = new Gamepiece('slack', 'svg');
let thumbsUp = new Gamepiece('thumbs-up', 'svg');
let tiktok = new Gamepiece('tiktok', 'svg');
let trash = new Gamepiece('trash', 'svg');
let tree = new Gamepiece('tree', 'svg');

let randomPieces1 = [];
function randomize() {
    let counter = 0;
    while (counter < 10) {
        let numberPull = Math.floor(Math.random() * 22);
        if (!randomPieces1.includes(numberPull)) {
            randomPieces1.push(numberPull);
            counter++;
        }
    }
}

randomize();
let randomPieces = [];
randomPieces = [...randomPieces1, ...randomPieces1];

function shufflePieces() {
    let pieceData = [...randomPieces];
    pieceData.sort(() => Math.random() - 0.5);
    console.log(pieceData);
    return pieceData;
}

function boardSet() {
    let array = shufflePieces();
    console.log(array);
    for (let i = 0; i < 20; i++) {
        let x = array.shift();
        gmpieceArray[i].src = gamePiecesArray[x].src;
        gmpieceArray[i].name = gamePiecesArray[x].name;
        gmpieceArray[i].alt = gamePiecesArray[x].alt;
        gmpieceArray[i].id = i;
        gmpieceArray[i].addEventListener('click', gamePlays);
    }
}

boardSet();
// number of cards clicked = 0
let gameCardClicked = 0;

// name of the first card clicked
let firstCardClicked;

// name of the second card clicked
let secondCardClicked;

let domElement1;
let domElement2;


function evalPieces() {
    if (firstCardClicked === secondCardClicked) {
        currentUser.score++;
        alert("Congrats you got a match! Keep going!");
        gameCardClicked = 0;
        localStorage.setItem("profile", JSON.stringify(currentUser));
        console.log(currentUser.score);
    }

    if (firstCardClicked !== secondCardClicked) {
        attempts++;
        alert(`Sorry not a matching pair. You have ${maxAttempt - attempts} left.`);
        gameCardClicked = 0;
        domElement1.classList.remove("display");
        domElement2.classList.remove("display");
        if (maxAttempt === attempts) {
            alert(`YOU LOSE! You have no attempts left!`);
            let txtEndTitle = document.getElementById('txtEndTitle');
            let txtEndMessage = document.getElementById('txtEndMessage');
            txtEndTitle.innerHTML = 'The Computer beat YOU!';
            txtEndMessage.innerHTML = 'Sorry you lost!';
            document.getElementById('endScreen').style.display = 'flex';
        }
    }
}

function gamePlays(e) {

    // increment the number of cards clicked +1 
    gameCardClicked++;
    // at on click add class to display card
    if (gameCardClicked === gameBoard) {
        alert("Please select a card!");
    }
    if (gameCardClicked === 1) {
        firstCardClicked = e.target.name;
        domElement1 = document.querySelector(`#game img[id="${e.target.id}"]`);
        domElement1.classList.add("display");
        console.log(firstCardClicked);
    }
    if (gameCardClicked === 2) {
        secondCardClicked = e.target.name;
        domElement2 = document.querySelector(`#game img[id="${e.target.id}"]`);
        domElement2.classList.add("display");
        console.log(secondCardClicked);
        setTimeout(evalPieces, 500);
    }
}
