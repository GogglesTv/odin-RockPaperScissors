"use strict";

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = function (arr) {
  const cpuChoice = Math.floor(Math.random() * arr.length);
  const choice = arr[cpuChoice];

  console.log(`CPU: ${choice}`);
  return choice;
};
const cpu = getComputerChoice(choices);

const getPlayerChoice = function () {
  //const userName = prompt("What's your name User?");
  const userPick = prompt("Choose your weapon: Rock, Paper, or Scissors.");
  console.log(`User: ${userPick}`);
  // console.log(`${userName}: ${userPick}`);
  return userPick;
};
const user = getPlayerChoice();

const RockPaperScissors = function (playerSelection, computerSelection) {
  const userWin = `you won!`;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(userWin);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(userWin);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(userWin);
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie! Go again!");
  } else {
    console.log(`You lost that one.`);
  }
};
RockPaperScissors(user, cpu);
