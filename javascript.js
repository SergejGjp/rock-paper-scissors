//Rock Paper Scissors Game in Browser Console.
//
//The code prompts one option from the user "rock, paper or scissors", the input is case-insensitive
//The computer choice is a random choice out of the three options.
//A single game is using two parameters, the user choice and the random computer choice. The function checks if the winning conditions is met and then returns a string.
//The game consists out of 5 rounds and tracks score, in the end the winner is announced.


//Computer choice is random
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
};

//the player selection is prompted and case insensitive
function playerSelection() {
    let playerSelection = prompt("Choose one: Rock, Paper or Scissors?", "");
    return playerSelection = playerSelection.toLowerCase();
};
