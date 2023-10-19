//Computer choice is random
const choice = ["rock", "paper", "scissors"];
let scoreComputer = 0;
let scorePlayer = 0;
let roundCounter = 0;
let result = "";
let computerSelection;
let finalResult = document.createElement("p");
let pScore = document.querySelector("#player-result");
let cScore = document.querySelector("#com-result")
let round = document.querySelector("#round");
let roundResult = document.querySelector("#round-result")
let comChoice = document.querySelector("#com-choice");
let div = document.querySelector("#result")

//to get a random choice by the computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * choice.length);
    computerSelection = choice[random]
    return computerSelection;
};

let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound(getComputerChoice(), rockBtn.value));

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => playRound(getComputerChoice(), paperBtn.value));

let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => playRound(getComputerChoice(), scissorsBtn.value));

// winning conditions and check if someone has won the game
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
        finalResult.textContent = "You won 5 times! You are the winner of the Game!";
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

//for showing the result of each round
function addResult() {
    round.textContent = roundCounter;
    pScore.textContent = scorePlayer;
    cScore.textContent = scoreComputer;
    comChoice.textContent = capitalize(computerSelection);
    roundResult.textContent = result;
};

//for returning the computer choice capitalized
function capitalize(myString) {
    let firstChar = myString.charAt(0).toUpperCase();
    let newString = myString.replace(myString.charAt(0), firstChar);
    return newString;
};

//after the game ended the buttons are disabled
function disableBtn() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
};

//for reloading the page and starting a new game
function startNewGame() {
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "Play again?";
    div.appendChild(newGameBtn);
    newGameBtn.addEventListener("click", () => document.location.reload());
};