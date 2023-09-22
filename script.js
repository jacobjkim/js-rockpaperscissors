const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
let computerScore =0
let playerScore = 0
const playerScoreCount = document.querySelector('.playerscorecount')
const computerScoreCount = document.querySelector('.computerscorecount')
const p = document.createElement('p')
const h2 = document.createElement('h2')
const playerbuttons = document.querySelectorAll('.playerbuttons')
const playAgainButton = document.createElement('button')



let options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random()* options.length)]
}


//This code plays one round and diplays the result of each game
function playRound (playerSelection, computerSelection) {
    const tie = `It\s a tie! You both picked ${playerSelection}! Let's go again!`
    const win = `You won! ${playerSelection} beats ${computerSelection}!`
    const lose = `You lost! ${computerSelection} beats ${playerSelection}`
    if (playerSelection === computerSelection) {
        p.innerText = tie
        outcomeDiv.appendChild(p)
    }   else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        p.innerText = win
        outcomeDiv.appendChild(p)
    }   else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        computerScore ++;
        p.innerText = lose
        outcomeDiv.appendChild(p)
    }
}

const checkForWinner = (playerScore,computerScore) => {
    console.log('1',playerScore, '2', computerScore)
    if (playerScore === 5 ) {
        h2.classList.add('player-won')
        h2.innerText = `You won the Game ${playerScore} to ${computerScore}! Congrats!!!`
        outcomeDiv.append(h2)
    } else if (computerScore === 5) {
        h2.classList.add('computer-won')
        h2.innerText = `You lost the game ${computerScore} to ${playerScore}! Better luck next time!`
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreCount.innerText =  `player score:  ${playerScore}   `
    computerScoreCount.innerText = `computer score:  ${computerScore}`
}

const endgame = (playerScore, computerScore) => {
    if (playerScore === 5 || computerScore === 5) {
        
        const playAgainButton = document.createElement('button')
        playAgainButton.innerHTML = "play again?"
        outcomeDiv.appendChild(playAgainButton);
        }
}

function resetGame () {
    playAgainButton.addEventListener('click', () => {
    window.location.reload()
    })
}
// These codes are for the buttons 

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice ()
    const playerSelection = 'rock'
    playRound(playerSelection,computerSelection)
    playerScore
    updateScores(playerScore,computerScore)
    endgame(playerScore,computerScore)
    checkForWinner(playerScore,computerScore)
    resetGame()
})
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice ()
    const playerSelection = 'paper'
    playRound(playerSelection,computerSelection)
    updateScores(playerScore,computerScore)
    endgame(playerScore,computerScore)
    checkForWinner(playerScore,computerScore)
    resetGame()
})
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice ()
    const playerSelection = 'scissors'
    playRound(playerSelection,computerSelection)
    updateScores(playerScore,computerScore)
    endgame(playerScore,computerScore)
    checkForWinner(playerScore,computerScore)
    resetGame()
})

// function getPlayerChoice(){
//     let validatedInput = false;
//     while(validatedInput == false){
//         const choice = prompt("Choose between: rock, paper, scissors");
//         if(choice ==null){
//             continue;    
//         }    
//         const choiceInLower = choice.toLowerCase();
//         if (options.includes(choiceInLower)){
//             validatedInput = true;
//             return choiceInLower;
//         }    
//     }    
// }    




// function game() {
    //     let playerScore = 0;
    //     let computerScore = 0;
    //     console.log ("welcome!")
    //     for (let i = 1; i <=5; i++) {
        //         const playerSelection = getPlayerChoice();
        //         const computerSelection = getComputerChoice();
        //         console.log(playRound(playerSelection,computerSelection));
        //         console.log("--------------------------------------");
        //         const tie = `It\s a tie! You both picked ${playerSelection}! Let's go again!`
        //         const win = `You won! ${playerSelection} beats ${computerSelection}!`
        //         const lose = `You lost! ${computerSelection} beats ${playerSelection}`
        //         if (playRound(playerSelection,computerSelection) == win){
            //             playerScore++;
            //         } else if (playRound(playerSelection,computerSelection) == lose){
                //             computerScore++;
                //         }
                //     }
                //     console.log("Game Over")
                //     if(playerScore > computerScore){
                    //         console.log("Player is the winner!Congrats!")
                    //     } else if (playerScore < computerScore) {
                        //         console.log("Computer is the winner! Better luck next time!")
                        //     } else {
                            //         console.log ("Player tied with the computer! Play again?")
                            //     }
                            // }
                            
                            // game()
