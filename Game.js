class Game {
  constructor() {
    this.player1 = new Player({name: 'Player 1', token: 'X'})
    this.player2 = new Player({name: 'Player 2', token: 'O'})
    this.spaces = [
      {name: 'q1', taken: false, claimedBy: ''},
      {name: 'q2', taken: false, claimedBy: ''},
      {name: 'q3', taken: false, claimedBy: ''},
      {name: 'q4', taken: false, claimedBy: ''},
      {name: 'q5', taken: false, claimedBy: ''},
      {name: 'q6', taken: false, claimedBy: ''},
      {name: 'q7', taken: false, claimedBy: ''},
      {name: 'q8', taken: false, claimedBy: ''},
      {name: 'q9', taken: false, claimedBy: ''},
    ]
  }
  takeTurn(target, player) {
    for (var i = 0; i < this.spaces.length; i ++) {
      if (this.spaces[i].name === target && !this.spaces[i].taken) {
        this.spaces[i].taken = true;
        this.spaces[i].claimedBy = `${player.id}`
      }
    }
  }
}


/* ################# Pseudocoding ################











*/
