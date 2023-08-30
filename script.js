const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const maxRounds = 5;

let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let num = getRandomInteger(0, 2);
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

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = `Draw! Both chose ${playerSelection}.`;
    }
    if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
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
    }
    return result;
}

function startRound(event) {
    const playerSelection = event.srcElement.id
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    result = `Round ${roundsPlayed + 1}: ${result}`;
    displayRoundResult(result);
    displayGameWinner();
}

function displayRoundResult(result) {
    const pEl = document.createElement("p");
    pEl.textContent = result;
    document.querySelector(".flex-column").appendChild(pEl);
    roundsPlayed++;
}

function displayGameWinner() {
    if (roundsPlayed === maxRounds) {
        const h1El = document.createElement("h1");
        h1El.textContent = checkWinner();
        document.querySelector(".flex-column").appendChild(h1El);

        removePlayerChoiceEventListeners();
        addRestartButton();
    }
}

function checkWinner() {
    let result;
    if (computerWins > playerWins) {
        result = `Computer wins by ${computerWins} to ${playerWins}.`;
    }
    else if (playerWins > computerWins) {
        result = `Player wins by ${playerWins} to ${computerWins}.`;
    }
    else if (playerWins === computerWins) {
        result = `Its a draw with both having ${playerWins} wins.`;
    }
    return result;
}

function addRestartButton() {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Restart Game"
    buttonEl.addEventListener('click', restartGame)
    document.querySelector(".flex-column").appendChild(buttonEl);
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restartGame(event) {
    roundsPlayed = 0;
    playerWins = 0;
    computerWins = 0;
    document.querySelector(".flex-column").replaceChildren();
    addPlayerChoiceEventListeners();
}
function addPlayerChoiceEventListeners() {
    const playerSelectionBtns = document.querySelectorAll("button");

    playerSelectionBtns.forEach(button => {
        button.addEventListener('click', startRound)
    })
}

function removePlayerChoiceEventListeners() {
    const playerSelectionBtns = document.querySelectorAll("button");

    playerSelectionBtns.forEach(button => {
        button.removeEventListener('click', startRound)
    })
}

addPlayerChoiceEventListeners();