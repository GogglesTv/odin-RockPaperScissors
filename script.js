"use strict";

const choices = ["Rock", "Paper", "Scissors"];
const userName = prompt("What's your name User?");
const userPick = prompt("Choose your weapon: Rock, Paper, or Scissors.");

const getComputerChoice = function (arr) {
  const cpuChoice = Math.floor(Math.random() * arr.length);
  const choice = arr[cpuChoice];

  console.log(`CPU: ${choice}`);
  //return choice;
};
getComputerChoice(choices);

const getPlayerChoice = function () {
  console.log(`${userName}: ${userPick}`);
  //return userPick;
};
getPlayerChoice();
