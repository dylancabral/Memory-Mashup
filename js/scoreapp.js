'use strict'




// function scores(playername, playerscore){
//   let playername = JSON.parse(localStorage.getItem("profiles").name);
//   let playerscore = JSON.parse(localStorage.getItem("profiles").score);
// }

let scores = userArray.score
console.log(scores);

// [
//   {name:  , score: 300},
//   {name: "Player 2", score: 370},
//   {name: "mike", score: 500},
//   {name: "Player 4", score: 430},
//   {name: "Player 5", score: 340},
// ];


function updateLeaderboardView() {
  let leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";

  scores.sort(function(a, b){ return b.score - a.score  });
  let elements = []; // we'll need created elements to update colors later on
  // create elements for each player
  for(let i=0; i<scores.length; i++) {
      let name = document.createElement("div");
      let score = document.createElement("div");
      name.classList.add("name");
      score.classList.add("score");
      name.innerText = scores[i].name;
      score.innerText = scores[i].score;

      let scoreRow = document.createElement("div");
      scoreRow.classList.add("row");
      scoreRow.appendChild(name);
      scoreRow.appendChild(score);
      leaderboard.appendChild(scoreRow);

      elements.push(scoreRow);

  }

  let colors = ["gold", "silver", "#cd7f32"];
  for(let i=0; i < 3; i++) {
      elements[i].style.color = colors[i];
  }
}

updateLeaderboardView();
function randomize() {
    for(var i=0; i<scores.length; i++) {
        scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    }
    // when your data changes, call updateLeaderboardView
    updateLeaderboardView();
}







// const hiscores = JSON.parse(localStorage.getItem('profiles').score) || [];
// const scoreList = document.querySelector('.scoretable');



// function populateTable() {
//   scoreList.innerHTML = hiscores.map((row) => {
//     return `<tr><td>${row.player}</td><td>${row.score}</tr>`;
//   }).join('');
// }


// function checkScore() {
//   let worstScore = 0;
//   if (hiscores.length > 4) {
//     worstScore = hiscores[hiscores.length - 1].score;
//   }
//   if (score > worstScore) {
//     const user = JSON.parse(localStorage.getItem('profiles').name);
//     hiscores.push({score, user});
//   }
//   hiscores.sort((a, b) => a.score > b.score ? -1 : 1);
//   if (hiscores.length > 5) {
//     hiscores.pop();
//   }
//   populateTable();
//   localStorage.setItem('hiscores', JSON.stringify(hiscores));
// }

// function clearScores() {
//   hiscores.splice(0, hiscores.length);
//   localStorage.setItem('hiscores', JSON.stringify(hiscores));
//   populateTable();
// }
