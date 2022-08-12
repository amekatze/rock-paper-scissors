function getComputerChoice(){
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}


let playerScore = 0;
let computerScore = 0;
let round = 0;

let roundResult = document.getElementById('result');

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

    roundWinner == "player" ? roundResult.innerHTML = "Player wins the round!" :
    roundWinner == "computer" ? roundResult.innerHTML = "Computer wins the round!" :
    roundResult.innerHTML = "It's a draw!";

    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("rounds").innerHTML = "Round: " + round + "/ 5"

    weapons.forEach((weapon) => { weapon.classList.remove('active');})

} else {
round++;

winner = playerScore == computerScore ? "draw" :
playerScore > computerScore ? "player" : "computer";

winner == "player" ? roundResult.innerHTML = "Player wins the game!" :
winner == "computer" ? roundResult.innerHTML = "Computer wins the game!" :
roundResult.innerHTML = "It's a draw!";

document.getElementById("rounds").innerHTML = "Round: " + round + "/ 5";

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


