"use strict";

const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;
let draws = 0;

const getComputerChoice = function (arr) {
  let cpuPicks = Math.floor(Math.random() * arr.length);
  let cpuChoice = arr[cpuPicks];
  return cpuChoice;
};

//Specifies round win/game win messages
let playerWinRound = "User wins this round!";
let computerWinRound = "Computer wins this round!";
let draw = "Draw!";
let playerWin = "User wins the game! Congratulations!";
let computerWin = "Computer wins the game! You gotta be better than that!";

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

// Game algorithm
const game = function () {
  // Rounds go up to 1000, but game ends once user or cpu get 3 wins
  for (let i = 0; i <= 1000; i++) {
    let userPick = prompt("Rock, Paper, or Scissors.").toLowerCase();
    let cpu = getComputerChoice(choices);
    let roundResult = playRound(userPick, cpu);

    console.log(`User: ${userPick}`, `CPU: ${cpu}`);
    console.log(`Round ${i}: ${roundResult}`);

    // Keeps score
    if (roundResult === playerWinRound) {
      userScore++;
    } else if (roundResult === computerWinRound) {
      cpuScore++;
    }

    console.log(`User score: ${userScore}`);
    console.log(`CPU score: ${cpuScore}`);

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
