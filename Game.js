class Game {
  var player1 = new Player({name: 'Player 1', token: 'X'})
  var player2 = new Player({name: 'Player 2', token: 'O'})
  constructor() {
    this.players = [player1, player2]
    this.spaces = {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
    }
  }

}
