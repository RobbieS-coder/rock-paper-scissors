function capitalise(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
	randNum = Math.floor(Math.random() * 3);

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
		return `You drew! You both chose ${capitalise(playerSelection)}.`
	}
	else if ((playerSelection == "rock" && computerSelection == "paper")
	|| (playerSelection == "paper" && computerSelection == "scissors")
	|| (playerSelection == "scissors" && computerSelection == "rock")) {
		return `You lost! ${capitalise(computerSelection)} beats ${capitalise(playerSelection)}.`
	} else {
		return `You won! ${capitalise(playerSelection)} beats ${capitalise(computerSelection)}.`
	}
}