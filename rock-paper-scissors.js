function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randIndex = Math.floor( Math.random()*3 );
    return choices[randIndex];
}

// console.log(getComputerChoice())