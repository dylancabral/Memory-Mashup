'use strict'

// Global Variables
let userInput = document.getElementById('userInput');
let btn1 = document.getElementById('btn1');
let message = document.getElementById('greetings1')

// let userArray = [];
let currentUser = {};

// Generic User Constructor
function User(name) {
  this.name = name;
  // this.src = ``;
  this.score = 0;
  this.highScore = 0;
  this.gameAttempts = 0;
}

function welcome(event) {
  event.preventDefault();

  // let userInput = document.getElementById('userInput').value;
  let name = userInput.value;
  
  message.innerHTML = 'Welcome ' + name + ' to Memory Mashup!';
  
  currentUser = new User(name);
  // console.log(newUser);
  // userInput = '';
  // console.log(userArray);
  localStorage.setItem("profile", JSON.stringify(currentUser));
}


// local storage
let checkLocalStorage = function() {
  var retrievedData = JSON.parse(localStorage.getItem("profile"));
  currentUser = retrievedData;
  // console.log(retrievedData);
  if ('profile' in localStorage) {
    btn1.disabled = true;
    message.innerHTML = "Welcome back " + currentUser.name + '! You want to play again?';
} else {
  btn1.disabled = false;
   message.innerHTML = "Please create a user profile";
}
// if (retrievedData) {
//   console.log(currentUser);
// } 
// else {
//   // else userArray will be an empty array
//   console.log(currentUser);
// }
}

checkLocalStorage();

console.log(currentUser);

btn1.addEventListener('click', welcome);
console.log(userArray);

// btn1.addEventListener('click', welcome);

const myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', function (e) {
  console.log('The button was clicked!');
});

// const playBtn = document.getElementById('playBtn');
// playBtn.addEventListener('click', function(e) {
// playBtn.style.display = 'none';
// });


let instructionBtn = document.getElementById('instruction').style.display = 'none';
let howToBtn = document.getElementById('howTo');
howToBtn.addEventListener('click', showInstructions)
function showInstructions() {
instructionBtn = document.getElementById('instruction').style.display = 'block';
}

