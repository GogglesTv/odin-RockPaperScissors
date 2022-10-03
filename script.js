"use strict";

const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;
let draws = 0;

const getComputerChoice = function (arr) {
  const cpuPicks = Math.floor(Math.random() * arr.length);
  const cpuChoice = arr[cpuPicks];
  return cpuChoice;
};
let cpu = getComputerChoice(choices);

//Specifies round win/game win messages
let playerWinRound = "Player wins this round!";
let computerWinRound = "Computer wins this round!";
let draw = "Draw!";
let playerWin = "Player wins the game! Congratulations!";
let computerWin = "Computer wins the game! Congratulations!";

const playRound = function (userPick, computerSelection) {
  if (userPick === "rock" && computerSelection === "scissors") {
    return playerWinRound;
  } else if (userPick === "scissors" && computerSelection === "paper") {
    return playerWinRound;
  } else if (userPick === "paper" && computerSelection === "rock") {
    return playerWinRound;
  } else if (userPick === computerSelection) {
    return draw;
  } else {
    return computerWinRound;
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    let userPick = prompt(
      "Choose your weapon: Rock, Paper, or Scissors."
    ).toLowerCase();
    let computerSelection = cpu;
    let roundResult = playRound(userPick, computerSelection);
    console.log(roundResult);
  }

  if (userScore === 3) {
    alert("YOU WIN!");
  } else {
    alert("YOU LOSE");
  }
};
game();
