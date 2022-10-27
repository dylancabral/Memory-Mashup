'use strict'



  
  //  create a variable to house name and score from currentUser array

let playername = currentUser.name;
let playerscore = currentUser.highScore;
let leaderboard = document.getElementById("leaderboard");



let scores = [ playername, playerscore];
console.log(scores);

// create leaderboard and add text 

function updateLeaderboardView() {
  leaderboard.innerHTML = "";
// console.log(scores);
  scores.sort(function(a, b){ return b.score - a.score  });
  for(let i=0; i< 1; i++) {
      let name = document.createElement("div");
      let score = document.createElement("div");
      name.classList.add("name");
      score.classList.add("score");
      name.textContent = `${scores[0]}`;
      // console.log(scores.name);
      score.textContent = `${scores[1]}`;
      // console.log(name, score);


      // append score and name to leaderboard id

      let scoreRow = document.createElement("div");
      scoreRow.classList.add("row");
      scoreRow.appendChild(name);
      scoreRow.appendChild(score);
      leaderboard.appendChild(scoreRow);
console.log(scoreRow);
  }
}

updateLeaderboardView();
