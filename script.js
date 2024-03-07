function getComputerChoice(){
    let rps = ["rock","paper","scissors"]
    let random = rps[Math.floor(Math.random() * rps.length)]
    return random;
}
function playRound (playerSelection, computerSelection){
if (playerSelection === computerSelection){
return("It's Draw");
} else if ((playerSelection === "rock") && (computerSelection === "scissors")){
return("You Won! Rock beats scissors");
} else if ( playerSelection === "paper" && computerSelection === "rock"){
    return("You Won! Paper beats Rock");
} else if (playerSelection === "scissors" && computerSelection === "rock"){
    return("You Won! Scissors beats Rock");
} else if (playerSelection === "rock" && computerSelection === "paper"){
    return("You Won! Rock beats Paper");
} else if (playerSelection === "paper" && computerSelection === "scissors"){
    return("You Won! Paper beats Scissors");
} else if (playerSelection === "scissors" && computerSelection === "rock"){
    return("You Won! Scissors beats Rock");
}
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("choose between: Rock, Paper, Scissors");
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));