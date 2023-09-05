const roundNumber = document.querySelector("#round-number");
const buttons = document.querySelector("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const msg = document.querySelector("#msg");
const score = document.querySelector("#score");

let playerRoundsWon = 0;
let computerRoundsWon = 0;
let roundsDrawn = 0;
let roundResult;

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);

  if (randNum === 0) {
    return "rock";
  } else if (randNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  rock.addEventListener("click", () => {
    roundResult = playRound("rock", getComputerChoice());
    displayResult();
    updateScore();
  });
  paper.addEventListener("click", () => {
    roundResult = playRound("paper", getComputerChoice());
    displayResult();
    updateScore();
  });
  scissors.addEventListener("click", () => {
    roundResult = playRound("scissors", getComputerChoice());
    displayResult();
    updateScore();
  });
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundsDrawn++;
    updateScore();
    return `You drew! You both chose ${capitalise(playerSelection)}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerRoundsWon++;
    updateScore();
    return `You lost! ${capitalise(computerSelection)} beats ${capitalise(
      playerSelection
    )}.`;
  } else {
    playerRoundsWon++;
    updateScore();
    return `You won! ${capitalise(playerSelection)} beats ${capitalise(
      computerSelection
    )}.`;
  }
}

function displayResult() {
  msg.textContent = roundResult;
}

function endGame() {
  if (playerRoundsWon > computerRoundsWon) {
    msg.textContent = "Well Done! You beat the computer!";
  } else if (playerRoundsWon < computerRoundsWon) {
    msg.textContent = "Oh no! The computer beat you!";
  }
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
}

function updateScore() {
  score.textContent = `${playerRoundsWon} - ${roundsDrawn} - ${computerRoundsWon}`;

  if (playerRoundsWon === 5 || computerRoundsWon === 5) {
    endGame();
  }
}

function startGame() {
  if (playerRoundsWon === 0 && roundsDrawn === 0 && computerRoundsWon === 0) {
    updateScore();
    msg.textContent =
      "Welcome to Rock, Paper, Scissors! You will be playing the first to five rounds against a computer. Let's see who wins!";
    getPlayerChoice();
  }
}

startGame();
