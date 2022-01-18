var currentGame;
//query Selectors
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.player-turn');
var cells = document.querySelectorAll('.cell');

// event Listeners
window.addEventListener('load', createCurrentGame);
gameBoard.addEventListener('click', handleTurn);

// event handlers
function createCurrentGame() {
  currentGame = new Game();
  showPlayerTurn();
}

function showPlayerTurn() {
  determineTurn();
  playerTurn.innerText = currentGame[player]['token'] +"'s Turn";
}

function determineTurn() {
  if (currentGame.player1Turn) {
    player = 'player1';
  } if (!currentGame.player1Turn) {
    player = 'player2';
  }
  return player;
}

function winGame() {
  if (currentGame.winner) {
    playerTurn.innerText = `${currentGame.winner.token} wins!`
    setTimeout(clearGame, 3000);
  } if (currentGame.draw) {
    playerTurn.innerText = "It's a draw"
    setTimeout(clearGame, 3000);
  }
}

function takeTurn() {
  for (var i = 0; i < cells.length; i++) {
    if (event.target.classList.contains(currentGame.spaces[i].name)) {
      currentGame.switchTurns(currentGame.spaces[i].name);
      cells[i].innerText = `${currentGame[player]['token']}`;
    }
  }
}

function clearGame() {
  resetDOM();
  currentGame.resetGame();
}

function resetDOM() {
  showPlayerTurn();
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}

function handleTurn(event) {
  determineTurn();
  takeTurn();
  showPlayerTurn();
  winGame();
}
