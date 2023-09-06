
let options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random()* options.length)]
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


const tie = `It\s a tie! You both picked ${playerSelection}! Let's go again!`
const win = `You won! ${playerSelection} beats ${computerSelection}!`
const lose = `You lost! ${computerSelection} beats ${playerSelection}`


//This code plays one round and diplays the result of each game
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tie
    }   else if (playerSelection === "rock" && computerSelection === "scissors" ||
                 playerSelection === "paper" && computerSelection === "rock" ||
                 playerSelection === "scissors" && computerSelection === "paper") {
            return win;
    }   else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
            return lose;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Choose between: rock, paper, scissors");
        if(choice ==null){
            continue;    
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log ("welcome!")
    for (let i = 0; i <5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("--------------------------------------");
        if (playRound(playerSelection,computerSelection) == win){
            playerScore++;
        } else if (playRound(playerSelection,computerSelection) == lose){
            computerScore++;
        }
    }
    console.log("Game Over")
    if(playerScore > computerScore){
        console.log("Player is the winner!Congrats!")
    } else if (playerScore < computerScore) {
        console.log("Computer is the winner! Better luck next time!")
    } else {
        console.log ("Player tied with the computer! Play again?")
    }
}

game()
