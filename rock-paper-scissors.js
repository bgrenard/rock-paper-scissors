function getComputerChoice() {
    let choices = ["Paper", "Rock", "Scissors"];
    let randIndex = Math.floor( Math.random()*3 );
    return choices[randIndex];
}

function playRound(playerSelection, computerSelection) {
    let firstLetter = playerSelection.charAt(0).toUpperCase();
    let remainingLetters = playerSelection.slice(1).toLowerCase();
    let playerCapitalized = firstLetter + remainingLetters;

    if (playerCapitalized === computerSelection) {
        return `You Tied! You and the computer both chose ${playerCapitalized}!`
    }
    else if (
            playerCapitalized === "Rock" && computerSelection === "Paper" ||
            playerCapitalized === "Paper" && computerSelection === "Scissors" ||
            playerCapitalized === "Scissors" && computerSelection === "Rock"
        ) {
        return `You Lose! ${computerSelection} beats ${playerCapitalized}.`
    }
    else {
        return `You Win! ${playerCapitalized} beats ${computerSelection}.`
    }
}

function playGame() {
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose rock, paper, or scissors.");
        let result = playRound(playerChoice, getComputerChoice());

        if (result.startsWith("You Win!")) {
            playerScore += 1;
        }
        else if (result.startsWith("You Lose!")) {
            computerScore +=1;
        }
        console.log(result)
    }

    if (playerScore > computerScore) {
        return `You Win! Score was ${playerScore} to ${computerScore}.`;
    }
    else if (playerScore < computerScore) {
        return `You Lose! Score was ${playerScore} to ${computerScore}.`
    }
    else {
        return `It's a Tie! Score was ${playerScore} to ${computerScore}.`
    }
    
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, getComputerChoice()))
    })
})