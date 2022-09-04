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
  showInfo('You chose ' + playerChoice);
  showInfo('Computer chose ' + computerChoice);

  if (playerChoice === victorMap.get(computerChoice)) {
    showInfo('You win this round.');
    return 1;
  } else if (playerChoice === computerChoice) {
    showInfo('This round is a tie');
    return 0;
  } else {
    showInfo('You lost this round.');
    return -1;
  }
}

function selectRock() {
  let computerChoice = getComputerChoice();
  playRound('rock', computerChoice);
}

function selectPaper() {
  let computerChoice = getComputerChoice();
  playRound('paper', computerChoice);
}

function selectScissors() {
  let computerChoice = getComputerChoice();
  playRound('scissors', computerChoice);
}

function showInfo(info) {
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = info;

  gameInfo.appendChild(content);
}

// function game() {
//   //initialise score
//   let score = 0;

//   //play 5 rounds, getting a new player choice each time
//   for (let i = 0; i < 5; i++) {
//     let playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
//     let computerChoice = getComputerChoice();

//     let roundResult = playRound(playerChoice, computerChoice)
//     score += roundResult;
//   }

//   //check score and declare winner
//   if (score > 0) {
//     console.log("You are victorious!");
//   } else if (score === 0) {
//     console.log("It's a tie.");
//   } else {
//     console.log("You have been defeated.");
//   }
// }

// game();

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const gameInfo = document.querySelector('.gameinfo');
const scoreBoard = document.querySelector('.scoreboard');

rockButton.addEventListener('click', selectRock);
paperButton.addEventListener('click', selectPaper);
scissorsButton.addEventListener('click', selectScissors);