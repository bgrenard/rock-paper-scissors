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

console.log(playRound("paper", "Rock"))