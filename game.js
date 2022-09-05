const choices = ['rock', 'paper', 'scissors'];
const victorMap = new Map();
let playerScore = 0;
let cpuScore = 0;

victorMap.set('rock', 'paper');
victorMap.set('paper', 'scissors');
victorMap.set('scissors', 'rock');

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  return choices[n];
}

function playRound(playerChoice, computerChoice) {
  clearGameInfo();

  showInfo('You chose ' + playerChoice);
  showInfo('Computer chose ' + computerChoice);

  if (playerChoice === victorMap.get(computerChoice)) {
    showInfo('You win this round.');
    playerScore += 1;
  } else if (playerChoice === computerChoice) {
    showInfo('This round is a tie');
  } else {
    showInfo('You lost this round.');
    cpuScore += 1;
  }

  updateScoreboard();

  if ((playerScore == 5) || (cpuScore == 5)) {
    gameOver();
  }
}

function updateScoreboard() {
  playerScoreDisplay.textContent = playerScore;
  cpuScoreDisplay.textContent = cpuScore;
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

function clearGameInfo() {
  while (gameInfo.hasChildNodes()) {
    gameInfo.removeChild(gameInfo.lastChild);
  }
}

function gameOver() {
  showInfo(" ");
  if (playerScore == 5) {
    showInfo("Against all odds, you have defeated the machine.");
    showInfo("There's no way you'll do it again, though.");
  } else {
    showInfo("You are no match for the Superior Intelligence.");
    showInfo("Dare to try again, mortal?");
  }

  const replay = document.createElement('button');
  replay.classList.add('replay');
  replay.textContent = 'RESTART';
  replay.addEventListener('click', playAgain);

  gameInfo.appendChild(replay);
}

function playAgain() {
  playerScore = 0;
  cpuScore = 0;

  updateScoreboard();
  clearGameInfo();
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const gameInfo = document.querySelector('.gameinfo');
const scoreBoard = document.querySelector('.scoreboard');
const playerScoreDisplay = document.querySelector('.player-score-number');
const cpuScoreDisplay = document.querySelector('.cpu-score-number');

rockButton.addEventListener('click', selectRock);
paperButton.addEventListener('click', selectPaper);
scissorsButton.addEventListener('click', selectScissors);

updateScoreboard();