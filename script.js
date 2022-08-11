function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}


let playerScore = 0;
let computerScore = 0;
let round = 0;

document.getElementById("test").innerHTML = "Let's play rock paper scissors! Best of 5!";


function playRound(playerSelection) {
computerSelection = getComputerChoice();
const comp = document.querySelector(`div #${computerSelection}`);
weapons.forEach(weapon => {weapon.classList.remove('comp')});
comp.classList.add('comp');

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
if (round < 4){
    round++;

    document.getElementById("test").innerHTML = "<b> ROUND</b>:" + round + "<br/>" + "Player: " + playerScore + " Comp: " + computerScore + "<br>" + "Player: " + playerSelection + " Comp: " + computerSelection + "<br>" + "Round winner: " + roundWinner;

    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("rounds").innerHTML = "Round: " + round;

    weapons.forEach((weapon) => { weapon.classList.remove('active');})

} else {
round++;
winner = playerScore == computerScore ? "no one, it's a draw!" :
playerScore > computerScore ? "player" : "computer";

document.getElementById("test").innerHTML = "<b> ROUND</b>:" + round + "<br>" + "Player: " + playerScore + " Comp: " + computerScore + "<br>" + "The winner is ..." + winner;
weapons.forEach((weapon) => { weapon.classList.remove('active');})

playerScore = 0;
computerScore = 0;
round = 0;
}
}


const weapons = document.querySelectorAll('div .weapon');
weapons.forEach((weapon) => {
    weapon.addEventListener("click", () =>{
        playRound(weapon.id);
        weapon.classList.add('active');
    })
})


