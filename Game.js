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
      }
    if (this.spaces[3].claimedBy === player.id &&
        this.spaces[4].claimedBy === player.id &&
        this.spaces[5].claimedBy === player.id) {
          this.winner = player
      }
    if (this.spaces[6].claimedBy === player.id &&
      this.spaces[7].claimedBy === player.id &&
      this.spaces[8].claimedBy === player.id) {
        this.winner = player
    }
    if (this.spaces[0].claimedBy === player.id &&
      this.spaces[3].claimedBy === player.id &&
      this.spaces[6].claimedBy === player.id) {
        this.winner = player
      }
    if (this.spaces[1].claimedBy === player.id &&
      this.spaces[4].claimedBy === player.id &&
      this.spaces[7].claimedBy === player.id) {
        this.winner = player
      }
    if (this.spaces[2].claimedBy === player.id &&
      this.spaces[5].claimedBy === player.id &&
      this.spaces[8].claimedBy === player.id) {
        this.winner = player
      }
    if (this.spaces[0].claimedBy === player.id &&
      this.spaces[4].claimedBy === player.id &&
      this.spaces[8].claimedBy === player.id) {
          this.winner = player
      }
    if (this.spaces[2].claimedBy === player.id &&
      this.spaces[4].claimedBy === player.id &&
      this.spaces[6].claimedBy === player.id) {
        this.winner = player
      }
  }
  // checkSpaces() {
  // }
  checkDraw() {
    for (var i = 0; i < this.spaces.length; i++){
      var valid = this.spaces[i].taken;
    }
    if (!this.winner && valid){
      console.log('draw')
      this.draw = true;
    }
  }
  takeTurn(target, player) {
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
      this.takeTurn(target, this.player1);
      this.checkWinConditions(this.player1)
      this.checkDraw();
    } else if (!this.player1Turn) {
      this.player1Turn = true;
      this.takeTurn(target, this.player2);
      this.checkWinConditions(this.player2);
      this.checkDraw();
    }
  }

}


/* ################# Pseudocoding ################
go through spaces array - iterate? go through each one individually?

check adjacent spaces
  q1, q2, q3, || q4, q5, q6, || q7q8q9 || q1q4q7 || q2,q5,q8 ||
  q3q6q9 || q1q5q9 || q7q5q3

if 3 adjacent spaces in a row are claimed by the same player - that player wins









*/
