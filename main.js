var currentGame;
//query Selectors
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.player-turn');

// event Listeners
window.addEventListener('load', createCurrentGame);

// event handlers
function createCurrentGame() {
  currentGame = new Game();
  showPlayerTurn();
}

function showPlayerTurn() {
  if (currentGame.player1Turn) {
    playerTurn.innerText = `${currentGame.player1.token}'s Turn`
  }
  if (!currentGame.player1Turn) {
    playerTurn.innerText = `${currentGame.player2.token}'s Turn`
  }
}
