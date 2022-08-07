const choices = ['rock', 'paper', 'scissors'];
const victorMap = new Map();

victorMap.set('rock', 'paper');
victorMap.set('paper', 'scissors');
victorMap.set('scissors', 'rock');

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  return choices[n];
}

function playRound(computerChoice, playerChoice) {
  console.log('Player chose ' + playerChoice);
  console.log('Computer chose ' + computerChoice);

  if (playerChoice === victorMap[computerChoice]) {
    return "You won!";
  } else if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else {
    return "You lost!";
  }
}

let computerChoice = getComputerChoice();
let playerChoice = 'rock';
console.log(playRound(computerChoice, playerChoice));