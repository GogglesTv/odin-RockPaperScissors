"use strict";

const choices = ["rock", "paper", "scissors"];
//const userName = prompt("What's your name User?");
const userWin = `you won!`;

const getComputerChoice = function (arr) {
  const cpuChoice = Math.floor(Math.random() * arr.length);
  const choice = arr[cpuChoice];

  console.log(`CPU: ${choice}`);
  return choice;
};
const cpu = getComputerChoice(choices);

const getPlayerChoice = function () {
  const userPick = prompt("Choose your weapon: Rock, Paper, or Scissors.");
  console.log(`User: ${userPick}`);
  // console.log(`${userName}: ${userPick}`);
  return userPick;
};
const user = getPlayerChoice();

const RockPaperScissors = function (playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(userWin);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(userWin);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(userWin);
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie! Go again!");
    //console.log(user, cpu);
  } else {
    console.log(`You lost that one.`);
  }
};
RockPaperScissors(user, cpu);
