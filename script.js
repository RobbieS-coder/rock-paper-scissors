let playerRoundsWon = 0;
let computerRoundsWon = 0;
let roundsDrawn = 0;

function capitalise(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
	let randNum = Math.floor(Math.random() * 3);

	if (randNum == 0) {
		return "rock";
	} else if (randNum == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		roundsDrawn++;
		return `You drew! You both chose ${capitalise(playerSelection)}.`;
	}
	else if ((playerSelection == "rock" && computerSelection == "paper")
	|| (playerSelection == "paper" && computerSelection == "scissors")
	|| (playerSelection == "scissors" && computerSelection == "rock")) {
		computerRoundsWon++;
		return `You lost! ${capitalise(computerSelection)} beats ${capitalise(playerSelection)}.`;
	} else {
		playerRoundsWon++;
		return `You won! ${capitalise(playerSelection)} beats ${capitalise(computerSelection)}.`;
	}
}

function game() {
	console.log("Welcome to Rock, Paper, Scissors! You will be playing five rounds against a computer. Let's see who wins!");
	for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
		if (roundsPlayed != 4) {
			console.log(`Round ${roundsPlayed + 1}`);
		} else {
			console.log("Final Round!");
		}
		let playerSelection = prompt("Pick Rock, Paper, or Scissors").toLowerCase();

		console.log(playRound(playerSelection, getComputerChoice()));
	}

	if (playerRoundsWon > computerRoundsWon) {
		console.log(`Well Done! You beat the computer! You won ${playerRoundsWon}, drew ${roundsDrawn} and lost ${computerRoundsWon}!`)
	} else if (playerRoundsWon < computerRoundsWon) {
		console.log(`Oh no! The computer beat you! You won ${playerRoundsWon}, drew ${roundsDrawn} and lost ${computerRoundsWon}.`)
	}
}

game()