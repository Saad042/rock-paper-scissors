function getComputerChoice() {
    let num = getRandomInteger(0,2);
    let computerSelection;
    switch (num) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
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
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            validInput = true;
        }
    }
    return playerSelection; 
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


console.log(getComputerChoice());
console.log(getPlayerChoice());