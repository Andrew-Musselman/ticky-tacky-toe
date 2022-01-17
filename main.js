var currentGame;
//query Selectors
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.player-turn');

// event Listeners
window.addEventListener('load', createCurrentGame);

// event handlers
function createCurrentGame() {
  currentGame = new Game();
}
