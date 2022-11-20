const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice() {
    let num = getRandomInteger(0,2);
    let computerSelection;
    switch (num) {
        case 0:
            computerSelection = ROCK;
            break;
        case 1:
            computerSelection = PAPER;
            break;
        case 2:
            computerSelection = SCISSORS;
            break;
    }
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection;
    let validInput = false;
    while (!validInput) {
        playerSelection = prompt("Enter your choice.");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS) {
            validInput = true;
        }
    }
    return playerSelection; 
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === ROCK) {
        if (computerSelection === ROCK) {
            result = 'Draw! Both chose Rock.';
        }
        else if (computerSelection === PAPER) {
            result = 'You lose! Paper beats Rock.';
        }
        else if (computerSelection === SCISSORS) {
            result = 'You win! Rock beats Scisscors.';
        }
    }

    else if (playerSelection === PAPER) {
        if (computerSelection === ROCK) {
            result = 'You win! Paper beats Rock.';
        }
        else if (computerSelection === PAPER) {
            result = 'Draw! Both chose Paper.';
        }
        else if (computerSelection === SCISSORS) {
            result = 'You lose! Scissors beats Paper.';
        }
    }

    else if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            result = 'You lose! Rock beats Scisscors.';
        }
        else if (computerSelection === PAPER) {
            result = 'You win! Scissors beats Paper.';
        }
        else if (computerSelection === SCISSORS) {
            result = 'Draw! Both chose Scissors.';
        }
    }
    return result;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));