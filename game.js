const choices = ['rock', 'paper', 'scissors'];
const victorMap = new Map();

victorMap.set('rock', 'paper');
victorMap.set('paper', 'scissors');
victorMap.set('scissors', 'rock');

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  return choices[n];
}

function playRound(playerChoice, computerChoice) {
  console.log('Player chose ' + playerChoice);
  console.log('Computer chose ' + computerChoice);

  if (playerChoice === victorMap.get(computerChoice)) {
    console.log('You win this round.');
    return 1;
  } else if (playerChoice === computerChoice) {
    console.log('This round is a tie');
    return 0;
  } else {
    console.log('You lost this round.');
    return -1;
  }
}

function game() {
  //initialise score
  let score = 0;

  //play 5 rounds, getting a new player choice each time
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice)
    score += roundResult;
  }

  //check score and declare winner
  if (score > 0) {
    console.log("You are victorious!");
  } else if (score === 0) {
    console.log("It's a tie.");
  } else {
    console.log("You have been defeated.");
  }
}

game();