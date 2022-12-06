"use strict";

// User object
const user = {
  score: 0,
  scoreDisplay: document.querySelector("#user-score"),
};

// CPU object
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

// CPU chooses weapon based on random number corresponding with choices array
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  let cpuChoice = Math.floor(Math.random() * choices.length);
  return choices[cpuChoice];
};

function checkScore() {
  // Results after User has won
  if (user.score === winningScore) {
    isGameOver = true;
    rock.classList.toggle("hide");
    scissors.classList.toggle("hide");
    paper.classList.toggle("hide");
    winGIF.classList.toggle("hide");
    return (results.textContent = "CONGRATS! YOU WON!");

    //Results after CPU has won
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
  // Checks user/cpu weapon
  if (userPick === cpuPick) {
    results.textContent = "It's a draw!";
  } else if (
    (userPick === "rock" && cpuPick === "scissors") ||
    (userPick === "paper" && cpuPick === "rock") ||
    (userPick === "scissors" && cpuPick === "paper")
  ) {
    // User won round
    results.textContent = `YOU WON THAT ROUND! ${userPick.toUpperCase()} BEATS ${cpuPick.toUpperCase()}!`;
    user.score++;
    user.scoreDisplay.textContent = user.score;
  } else {
    // CPU won round
    results.textContent = `YOU LOST THAT ROUND! ${cpuPick.toUpperCase()} BEATS ${userPick.toUpperCase()}!`;
    cpu.score++;
    cpu.scoreDisplay.textContent = cpu.score;
  }
};

// Resets game and UI
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
