var currentGame;
//query Selectors
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.player-turn');

// event Listeners
window.addEventListener('load', createCurrentGame);
gameBoard.addEventListener('click', takeTurn);

// event handlers
function createCurrentGame() {
  currentGame = new Game();
  showPlayerTurn();
}

function showPlayerTurn() {
  determineTurn();
  playerTurn.innerText = currentGame[player]['token'] +"'s Turn"
}

function determineTurn() {
  if (currentGame.player1) {
    player = 'player1'
  } else {
    player = 'player2'
  }
  return player;
}

function takeTurn(event) {
  determineTurn();
  console.log('hi')
  console.log(event.target.classList)
  console.log(currentGame.spaces[0].name)
  // for (var i = 0; i < currentGame.spaces; i++) {
    // console.log(currentGame.spaces[i].name)
    if (event.target.classList.contains(currentGame.spaces[0].name)) {
      event.target.innerText = `${currentGame[player]['token']}`
      console.log('hello')
    // }
  }
}
