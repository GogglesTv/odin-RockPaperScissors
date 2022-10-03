"use strict";

const choices = ["rock", "paper", "scissors"];
const userPick = prompt(
  "Choose your weapon: Rock, Paper, or Scissors."
).toLowerCase();

const getComputerChoice = function (arr) {
  const cpuChoice = Math.floor(Math.random() * arr.length);
  const choice = arr[cpuChoice];

  console.log(`CPU: ${choice}`);
  return choice;
};
const cpu = getComputerChoice(choices);

const getPlayerChoice = function () {
  //const userName = prompt("What's your name User?");
  console.log(`User: ${userPick}`);
  // console.log(`${userName}: ${userPick}`);
  return userPick;
};
const user = getPlayerChoice();

const playRound = function (playerSelection, computerSelection) {
  const userWin = `you won!`;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    alert(userWin);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert(userWin);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert(userWin);
  } else if (playerSelection === computerSelection) {
    alert("It's a tie! Go again!");
  } else {
    alert(`You lost that one.`);
  }
};
playRound(user, cpu);
