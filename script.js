"use strict";

const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function (arr) {
  const cpuChoice = Math.floor(Math.random() * arr.length);
  const choice = arr[cpuChoice];

  console.log(choice);
};
getComputerChoice(choices);
