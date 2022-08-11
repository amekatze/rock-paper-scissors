function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

let playerScore = 0;
let computerScore = 0;

alert("Let's play Rock-Paper-Scissors. Best of 5!");


function playRound(playerSelection, computerSelection) {
computerSelection = getComputerChoice();
playerSelection = prompt("Please choose rock, paper or scissors.").toLowerCase();

//player win
if (playerSelection == "rock" && computerSelection == "scissors" ||
playerSelection == "scissors" && computerSelection == "paper" ||
playerSelection == "paper" && computerSelection == "rock") {
    playerScore ++;
    roundWinner = "player";
} else
//computer win
if (computerSelection == "rock" && playerSelection == "scissors" ||
computerSelection == "scissors" && playerSelection == "paper" ||
computerSelection == "paper" && playerSelection == "rock") {
    computerScore ++;
    roundWinner = "computer";
} else {
    roundWinner = "draw";
}

console.log(computerScore, playerScore, roundWinner);
}

function game() {
    let i = 0;
   while (i < 5){
    playRound();
    i++;
} 
   winner = playerScore == computerScore ? "no one, it's a draw!" :
   playerScore > computerScore ? "player" : "computer"
   console.log("The winner is " + winner);
}

game();