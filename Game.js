class Game {
  constructor() {
    this.player1 = new Player({name: 'Player 1', token: 'X'})
    this.player2 = new Player({name: 'Player 2', token: 'O'})
    this.winner = ''
    this.draw = false
    this.player1Turn = true
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
  checkWinConditions(player) {
    if (this.spaces[0].claimedBy === player.id &&
      this.spaces[1].claimedBy === player.id &&
      this.spaces[2].claimedBy === player.id) {
        this.winner = player
        player.wins ++
      }
    if (this.spaces[3].claimedBy === player.id &&
        this.spaces[4].claimedBy === player.id &&
        this.spaces[5].claimedBy === player.id) {
          this.winner = player
          player.wins ++
      }
    if (this.spaces[6].claimedBy === player.id &&
      this.spaces[7].claimedBy === player.id &&
      this.spaces[8].claimedBy === player.id) {
        this.winner = player
        player.wins ++
    }
    if (this.spaces[0].claimedBy === player.id &&
      this.spaces[3].claimedBy === player.id &&
      this.spaces[6].claimedBy === player.id) {
        this.winner = player
        player.wins ++
      }
    if (this.spaces[1].claimedBy === player.id &&
      this.spaces[4].claimedBy === player.id &&
      this.spaces[7].claimedBy === player.id) {
        this.winner = player
        player.wins ++
      }
    if (this.spaces[2].claimedBy === player.id &&
      this.spaces[5].claimedBy === player.id &&
      this.spaces[8].claimedBy === player.id) {
        this.winner = player
        player.wins ++
      }
    if (this.spaces[0].claimedBy === player.id &&
      this.spaces[4].claimedBy === player.id &&
      this.spaces[8].claimedBy === player.id) {
          this.winner = player
          player.wins ++
      }
    if (this.spaces[2].claimedBy === player.id &&
      this.spaces[4].claimedBy === player.id &&
      this.spaces[6].claimedBy === player.id) {
        this.winner = player
        player.wins ++
      }
  }
  checkDraw() {
    var valid = this.spaces.every((e) => {
      return e.taken;
      })
    if(valid && !this.winner) {
      this.draw = true;
      }
    }
  turnActivity(target, player) {
    for (var i = 0; i < this.spaces.length; i ++) {
      if (this.spaces[i].name === target && !this.spaces[i].taken) {
        this.spaces[i].taken = true;
        this.spaces[i].claimedBy = `${player.id}`
      }
    }
  }
  switchTurns(target) {
    if (this.player1Turn) {
      this.player1Turn = false;
      this.turnActivity(target, this.player1);
      this.checkWinConditions(this.player1)
      this.checkDraw();
    } else if (!this.player1Turn) {
      this.player1Turn = true;
      this.turnActivity(target, this.player2);
      this.checkWinConditions(this.player2);
      this.checkDraw();
    }
  }
  resetGame() {
    if(this.winner || this.draw) {
      this.winner = ''
      this.draw = false
      this.player1Turn = true
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
  }
}
