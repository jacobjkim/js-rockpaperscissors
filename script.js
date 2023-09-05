let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(options) {
    return options[Math.floor(Math.random()* options.length)]
}

const playerSelection = prompt("Choose between: Rock, Paper, Scissors");
const computerSelection = getComputerChoice(options);

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie! Let's go again!";
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                 playerSelection === "Paper" && computerSelection === "Rock" ||
                 playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win!";
    }   else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose :(";
    }
}


console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection))
