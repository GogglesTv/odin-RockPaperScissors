"use strict";
/*
// CPU choices and initialized score variables
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;

// CPU selects from "choices" array at random
const getComputerChoice = function (arr) {
  let cpuPicks = Math.floor(Math.random() * arr.length);
  let cpuChoice = arr[cpuPicks];
  return cpuChoice;
};

// Specifies round win/game win messages
let playerWinRound = "User wins this round!";
let computerWinRound = "Computer wins this round!";
let draw = "Draw!";
let playerWin = "User wins the game! Congratulations!";
let computerWin = "Computer wins the game! You gotta be better than that!";

// Returns the result of each round
const playRound = function (userPick, computerSelection) {
  if (userPick === rock && computerSelection === "scissors") {
    return playerWinRound;
  } else if (userPick === scissors && computerSelection === "paper") {
    return playerWinRound;
  } else if (userPick === paper && computerSelection === "rock") {
    return playerWinRound;
  } else if (userPick === computerSelection) {
    return draw;
  } else {
    return computerWinRound;
  }
};

// Game algorithm
const game = function () {
  // Rounds go up to 1000, but game ends once user or cpu get 3 wins
  for (let i = 0; i <= 1000; i++) {
    let userPick = prompt("Rock, Paper, or Scissors.").toLowerCase();
    let cpu = getComputerChoice(choices);
    let roundResult = playRound(userPick, cpu);

    // Logs user/cpu pick and result of each round
    console.log(`User: ${userPick}`, `CPU: ${cpu}`);
    console.log(`Round ${i}: ${roundResult}`);

    // Keeps score
    if (roundResult === playerWinRound) {
      userScore++;
    } else if (roundResult === computerWinRound) {
      cpuScore++;
    } else {
      draws++;
    }

    // Scoreboard
    console.log(`User score: ${userScore}`);
    console.log(`CPU score: ${cpuScore}`);
    console.log(`Draws: ${draws}`);

    // Game winning message
    if (userScore === 3) {
      alert(playerWin);
      break;
    } else if (cpuScore === 3) {
      alert(computerWin);
      break;
    }
  }
};
game();
*/

const user = {
  score: 0,
  scoreDisplay: document.querySelector("#user-score"),
};

const cpu = {
  score: 0,
  scoreDisplay: document.querySelector("#cpu-score"),
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#result__text");
const resetButton = document.querySelector("#reset");
const winGIF = document.querySelector("#winGIF");
const lossGIF = document.querySelector("#lossGIF");

let isGameOver = false;
let winningScore = 5;

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  let cpuChoice = Math.floor(Math.random() * choices.length);
  return choices[cpuChoice];
};

function checkScore() {
  if (user.score === winningScore) {
    isGameOver = true;
    rock.classList.toggle("hide");
    scissors.classList.toggle("hide");
    paper.classList.toggle("hide");
    winGIF.classList.toggle("hide");
    return (results.textContent = "CONGRATS! YOU WON!");
  } else if (cpu.score === winningScore) {
    isGameOver = true;
    rock.classList.toggle("hide");
    scissors.classList.toggle("hide");
    paper.classList.toggle("hide");
    lossGIF.classList.toggle("hide");
    return (results.textContent =
      "THAT'S TUFF MY GUY. YOU'LL GET 'EM NEXT TIME!");
  }
}

const playRound = function (userPick, cpuPick) {
  if (userPick === cpuPick) {
    results.textContent = "It's a draw!";
  } else if (
    (userPick === "rock" && cpuPick === "scissors") ||
    (userPick === "paper" && cpuPick === "rock") ||
    (userPick === "scissors" && cpuPick === "paper")
  ) {
    results.textContent = `YOU WON THAT ROUND! ${userPick.toUpperCase()} BEATS ${cpuPick.toUpperCase()}!`;
    user.score++;
    user.scoreDisplay.textContent = user.score;
  } else {
    results.textContent = `YOU LOST THAT ROUND! ${cpuPick.toUpperCase()} BEATS ${userPick.toUpperCase()}!`;
    cpu.score++;
    cpu.scoreDisplay.textContent = cpu.score;
  }
};

function reset() {
  isGameOver = false;
  results.textContent = "CHOOSE YOUR WEAPON!";
  user.score = 0;
  user.scoreDisplay.textContent = user.score;
  cpu.score = 0;
  cpu.scoreDisplay.textContent = cpu.score;
  rock.classList.toggle("hide");
  scissors.classList.toggle("hide");
  paper.classList.toggle("hide");
  if (!winGIF.classList.contains("hide")) winGIF.classList.toggle("hide");
  if (!lossGIF.classList.contains("hide")) lossGIF.classList.toggle("hide");
}

rock.addEventListener("click", function () {
  let userPick = "rock";
  let cpuPick = getComputerChoice();
  playRound(userPick, cpuPick);
  checkScore();
});

paper.addEventListener("click", function () {
  let userPick = "paper";
  let cpuPick = getComputerChoice();
  playRound(userPick, cpuPick);
  checkScore();
});

scissors.addEventListener("click", function () {
  let userPick = "scissors";
  let cpuPick = getComputerChoice();
  playRound(userPick, cpuPick);
  checkScore();
});

resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value) + 1;
  reset();
});
