//get id from html
const choices = document.querySelector("choices");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const result = document.getElementById("result");
const round = document.getElementById("round");

//selected choices button
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//set game round and score to zero
let gameResult = ""
let playerScoreCount = 0
let computerScoreCount = 0
let roundCount = 0 
result.innerText = gameResult;

//player choice function
function playerChoice(selection) {
    const computerSelection = getComputerChoice();
    const winner = game(selection, computerSelection)
    result.textContent = `You Choose ${selection}. Computer Choose ${computerSelection}.`
}
//player choice by click
function userChoices (playerSelection){
    rock.addEventListener("click", ()=>{
        roundSystem.call(rock);
    })
    paper.addEventListener("click", ()=>{
        roundSystem.call(paper);
    })
    scissors.addEventListener("click", ()=>{
        roundSystem.call(scissors);
    })
}
userChoices();
// let playerSelection = playerChoice();

//computer random selection
function getComputerChoice(computerSelection){
    let rps = ["rock","paper","scissors"]
    let random = rps[Math.floor(Math.random() * rps.length)]
    return random;
}

//game logic here
function game (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "it's a tie!"
    }
    else if( (playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")){
                return "You Win!"
             }
             else{
                return "You Lose!"
             }

}

//round and score system
function roundSystem (){
    const playerChoice = this.id;
    const computerSelection = getComputerChoice();
    const winner = game(playerChoice, computerSelection);
    
    if (winner === "You Win!"){
        playerScoreCount++
    } else if (winner === "You Lose!") {
        computerScoreCount++
    }
    roundCount++
   
    playerScore.textContent = `Player: ${playerScoreCount}`;
    computerScore.textContent = `Computer: ${computerScoreCount}`;
    round.textContent = `Round: ${roundCount}`;
    result.textContent = `You Choose ${playerChoice}. Computer Choose ${computerSelection}.`
   
    if (roundCount === 5){
        declareWinner();
        resetScore();
        resetRound();
    }
}

//for score reset
function resetScore (){
    playerScoreCount = 0;
    computerScoreCount = 0;
}

//for round reset
function resetRound(){
    roundCount = 0;
}

//winner selection
function declareWinner (){
    if(playerScoreCount > computerScoreCount){
        result.textContent = "Congratulations,You Won!"
    }else if (playerScoreCount < computerScoreCount){
        result.textContent = "oops, You Lose!"
    }else {
        result.textContent = "Oh! It's Tie!"
    }
}