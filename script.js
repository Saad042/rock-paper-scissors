const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
let playerWins = 0;
let computerWins = 0;

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
            computerWins++;
        }
        else if (computerSelection === SCISSORS) {
            result = 'You win! Rock beats Scisscors.';
            playerWins++;
        }
    }

    else if (playerSelection === PAPER) {
        if (computerSelection === ROCK) {
            result = 'You win! Paper beats Rock.';
            playerWins++;
        }
        else if (computerSelection === PAPER) {
            result = 'Draw! Both chose Paper.';
        }
        else if (computerSelection === SCISSORS) {
            result = 'You lose! Scissors beats Paper.';
            computerWins++;
        }
    }

    else if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            result = 'You lose! Rock beats Scisscors.';
            computerWins++;
        }
        else if (computerSelection === PAPER) {
            result = 'You win! Scissors beats Paper.';
            playerWins++;
        }
        else if (computerSelection === SCISSORS) {
            result = 'Draw! Both chose Scissors.';
        }
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice(); 
        console.log(playRound(playerSelection, computerSelection));
    }

    if (computerWins > playerWins) {
        console.log(`Computer wins by ${computerWins} to ${playerWins}.`);
    }
    else if (playerWins > computerWins) {
        console.log(`Player wins by ${playerWins} to ${computerWins}.`);
    }
    else if (playerWins === computerWins) {
        console.log(`Its a draw with both having ${playerWins} wins.`);
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

game();