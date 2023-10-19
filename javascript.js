//Rock Paper Scissors Game in Browser Console.
//
//The code prompts one option from the user "rock, paper or scissors", the input is case-insensitive
//The computer choice is a random choice out of the three options.
//A single game is using two parameters, the user choice and the random computer choice. The function checks if the winning conditions is met and then returns a string and adds a point to the score.
//The game consists out of 5 rounds and tracks score, in the end the winner is announced.


//Computer choice is random
const choice = ["rock", "paper", "scissors"];
let scoreComputer = 0;
let scorePlayer = 0;
let roundCounter = 0;
let result = "";

function getComputerChoice() {
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
};

let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound(getComputerChoice(), rockBtn.value));

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => playRound(getComputerChoice(), paperBtn.value));

let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => playRound(getComputerChoice(), scissorsBtn.value));


//the player selection is prompted and case insensitive

// function getPlayerSelection() {
//     // let playerChoice = prompt("Choose one: Rock, Paper or Scissors?", "");
//     // return playerChoice = playerChoice.toLowerCase();
// };


// winning conditions
function playRound(computerSelection, playerSelection) {
    roundCounter += 1;
    if (computerSelection === "rock" && playerSelection === "paper") {
        scorePlayer += 1;
        result = "You win! Paper beats Rock!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        scoreComputer += 1;
        result = "You lose! Rock beats Scissors!";
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        result = "That's a tie! Rock vs. Rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        scorePlayer += 1;
        result = "You win! Scissors beats Paper!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        scoreComputer += 1;
        result = "You lose! Paper beats Rock!";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        result = "That's a tie! Paper vs. Paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        scorePlayer += 1;
        result = "You win! Rock beats Scissors!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        scoreComputer += 1;
        result = "You lose! Scissors beats Paper!";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        result = "That's a tie! Scissors vs. Scissors";
    } else {
        result = "An error occured!";
    };
    addResult();
    if (scorePlayer === 5) {
        finalResult.textContent = "The player has won 5 times! You are the winner of the Game!";
        div.appendChild(finalResult);
        disableBtn();
        startNewGame();
    } else if (scoreComputer === 5) {
        finalResult.textContent = "The computer has won 5 times! You lose the Game!";
        div.appendChild(finalResult);
        disableBtn();
        startNewGame();
    };
};

let finalResult = document.createElement("p");
let pScore = document.querySelector("#player-result");
let cScore = document.querySelector("#com-result")
let round = document.querySelector("#round");
let roundResult = document.querySelector("#round-result")
let div = document.querySelector("#result")
function addResult() {
    round.textContent = roundCounter;
    pScore.textContent = scorePlayer;
    cScore.textContent = scoreComputer;
    roundResult.textContent = result;
}

function disableBtn() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function startNewGame() {
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "Play again?";
    div.appendChild(newGameBtn);
    newGameBtn.addEventListener("click", () => document.location.reload());
}


// // game function for 5 rounds.
// function game() {
//     for (let i = 1; i <= 5; i++) {
//         console.log("Round " + i + ":");
//         let computerSelection = getComputerChoice();
//         let playerSelection = getPlayerSelection();
//         console.log("Computer Choice: " + computerSelection);
//         console.log("Player Choice: " + playerSelection);
//         console.log(playRound(computerSelection, playerSelection));
//         console.log("The Computer Score is: " + scoreComputer);
//         console.log("The Player Score is: " + scorePlayer);
//     };
//     if (scorePlayer > scoreComputer) {
//         alert(`You won the game! 
//                 The computer score is: ${scoreComputer}
//                 Your score is: ${scorePlayer}`);
//     } else if (scoreComputer == scorePlayer) {
//         alert(`That is a tie! 
//         The computer score is: ${scoreComputer}
//         Your score is: ${scorePlayer}`)
//     } else {
//         alert(`You lose the game, sorry :(
//             The computer score is: ${scoreComputer}
//             Your score is: ${scorePlayer}`);
//     }
// };

//game();