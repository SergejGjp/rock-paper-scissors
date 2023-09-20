//Rock Paper Scissors Game in Browser Console.
//
//The code prompts one option from the user "rock, paper or scissors", the input is case-insensitive
//The computer choice is a random choice out of the three options.
//A single game is using two parameters, the user choice and the random computer choice. The function checks if the winning conditions is met and then returns a string and adds a point to the score.
//The game consists out of 5 rounds and tracks score, in the end the winner is announced.


//Computer choice is random
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
};

//the player selection is prompted and case insensitive
function getPlayerSelection() {
    let playerChoice = prompt("Choose one: Rock, Paper or Scissors?", "");
    return playerChoice = playerChoice.toLowerCase();
};

let scoreComputer = 0;
let scorePlayer = 0;

// winning conditions
function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper") {
        scorePlayer += 1;
        return "You win! Paper beats Rock!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        scoreComputer += 1;
        return "You lose! Rock beats Scissors!";
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        return "That's a tie! Rock vs. Rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        scorePlayer += 1;
        return "You win! Scissors beats Paper!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        scoreComputer += 1;
        return "You lose! Paper beats Rock!";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return "That's a tie! Paper vs. Paper ";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        scorePlayer += 1;
        return "You win! Rock beats Scissors!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        scoreComputer += 1;
        return "You lose! Scissors beats Paper!";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "That's a tie! Scissors vs. Scissors";
    } else {
        return "An error occured!";
    };
};

// game function for 5 rounds.
function game() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i + ":");
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerSelection();
        console.log("Computer Choice: " + computerSelection);
        console.log("Player Choice: " + playerSelection);
        console.log(playRound(computerSelection, playerSelection));
        console.log("The Computer Score is: " + scoreComputer);
        console.log("The Player Score is: " + scorePlayer);
    };
    if (scorePlayer > scoreComputer) {
        alert(`You won the game! 
                The computer score is: ${scoreComputer}
                Your score is: ${scorePlayer}`);
    } else if (scoreComputer == scorePlayer) {
        alert(`That is a tie! 
        The computer score is: ${scoreComputer}
        Your score is: ${scorePlayer}`)
    } else {
        alert(`You lose the game, sorry :(
            The computer score is: ${scoreComputer}
            Your score is: ${scorePlayer}`);
    }
};

game();