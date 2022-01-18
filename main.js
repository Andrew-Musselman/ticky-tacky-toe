var currentGame;
//query Selectors
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.player-turn');
var cells = document.querySelectorAll('.cell');
var playerOneDisplay = document.querySelector('.player-1');
var playerTwoDisplay = document.querySelector('.player-2');
var playerOneWinsDisplay = document.querySelector('.player-1-wins');
var playerTwoWinsDisplay = document.querySelector('.player-2-wins');
var playerOneTokenChoice = document.querySelector('#player-1-token');
var playerTwoTokenChoice = document.querySelector('#player-2-token');

// event Listeners
window.addEventListener('load', createCurrentGame);
gameBoard.addEventListener('click', handleTurn);

// event handlers
function createCurrentGame() {
  currentGame = new Game();
  setTokens();
  showPlayerTurn();
  showPlayerData();
}

function setTokens() {
  currentGame.player1.token = playerOneTokenChoice.value;
  currentGame.player2.token = playerTwoTokenChoice.value;
}

function determineTurn() {
  if (currentGame.player1Turn) {
    player = 'player1';
  } if (!currentGame.player1Turn) {
    player = 'player2';
  }
  return player;
}

function showPlayerTurn() {
  determineTurn();
  playerTurn.innerText = currentGame[player]['token'] +"'s Turn";
}

function showPlayerData() {
  playerOneDisplay.innerText += `${currentGame.player1.token}`
  playerTwoDisplay.innerText += `${currentGame.player2.token}`
  playerOneWinsDisplay.innerText += `${currentGame.player1.wins}`
  playerTwoWinsDisplay.innerText += `${currentGame.player2.wins}`
}

function winGame() {
  if (currentGame.winner) {
    playerTurn.innerText = `${currentGame.winner.token} wins!`
    setTimeout(clearGame, 2000);
  } if (currentGame.draw) {
    playerTurn.innerText = "It's a draw"
    setTimeout(clearGame, 2000);
  }
}

function takeTurn() {
  determineTurn();
  for (var i = 0; i < cells.length; i++) {
    if (event.target.classList.contains(currentGame.spaces[i].name) &&
    !currentGame.spaces[i].taken) {
      currentGame.switchTurns(currentGame.spaces[i].name);
      cells[i].innerText = `${currentGame[player]['token']}`;
    }
  }
}

function clearGame() {
  resetDOM();
  currentGame.resetGame();
  showPlayerTurn();
}

function resetDOM() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}

function handleTurn(event) {
  takeTurn();
  showPlayerTurn();
  winGame();
}
