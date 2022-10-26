'use strict'

// Global Variables
let userInput = document.getElementById('userInput');
let btn1 = document.getElementById('btn1');
let message = document.getElementById('greetings1')

let userArray = [];

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
