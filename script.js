function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
computerSelection = getComputerChoice();
playerSelection = prompt("Please choose rock, paper or scissors.").toLowerCase();
if (playerSelection == computerSelection){
    result = "draw";
    } else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            result = "loss";
            computerScore += 1;
        } else if (computerSelection == "scissors"){
            result = "win";
            playerScore += 1;
        }

    } else if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            result = "win";
            playerScore += 1;
        } else if (computerSelection == "scissors"){
            result = "loss";
            computerScore += 1;
        }

    } else if (playerSelection == "scissors"){
        if (computerSelection == "paper") {
            result = "win";
            playerScore += 1;
        } else if (computerSelection == "rock"){
            result = "loss";
            computerScore += 1;
        }
    }   
    console.log("player:" + playerSelection + " computer:" + computerSelection + " Result:" + result)
}

function game(){
    for (let i = 0; i < 5; i++){
        playRound();
    } if (playerScore == computerScore) {
        console.log("No Winner! This game ends in a draw.");
    } else if (playerScore > computerScore) {
        console.log ("You win this game! Good job.");
    } else if (playerScore < computerScore) {
        console.log("You lose. Better luck next time.");
    }
}

game();

