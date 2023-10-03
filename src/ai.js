export class AI {
  constructor() {
    this.counter = 0;
  }

  attack(x, y, playerBoard) {
    if (playerBoard.board[x][y] !== 2) {
      if (playerBoard.board[x][y] === 0) {
        playerBoard.board[x][y] = 2;
        console.log("water");
      } else if (playerBoard.board[x][y] === 1) {
        playerBoard.board[x][y] = -1;
        if (playerBoard.board[x + 1][y] === 1) {
          this.attack(x + 1, y, playerBoard);
        } else if (playerBoard.board[x - 1][y] === 1) {
          this.attack(x - 1, y, playerBoard);
        } else if (playerBoard.board[x][y + 1] === 1) {
          this.attack(x, y + 1, playerBoard);
        } else if (playerBoard.board[x][y - 1] === 1) {
          this.attack(x, y - 1, playerBoard);
        }
        console.log("ship");
      }
    } else if (playerBoard.board[x][y] === 2) {
      this.attack(this.getRandomInt(), this.getRandomInt(), playerBoard);
    }
    return playerBoard.board;
  }

  getRandomInt() {
    let max = 10;
    return Math.floor(Math.random() * max);
  }

  decideGoUpOrDown() {
    return (this.upOrDown = Math.random() < 0.5 ? -1 : 1);
  }

  checkIfTheEnd(playerBoard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (playerBoard.board[i][j] === -1) {
          this.counter++;
        }
      }
    }
    if (this.counter === 17) {
      return true;
    } else {
      return this.counter;
    }
  }
}
