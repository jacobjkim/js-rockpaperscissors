let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(options) {
    return options[Math.floor(Math.random()* options.length)]
}

const playerSelection = prompt("Choose between: Rock, Paper, Scissors")
const computerSelection = getComputerChoice(options);

function playRound (playerSelection, computerSelection){
    switch (options) {
        case playerSelection === computerSelection:
            alert ("It's a tie. Let's go again!");
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            alert ("You Win!");
            break;
        case playerSelection === "Rock" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Rock":
            alert ("You Lose :(");
            break;
        }
    }

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection))
