export class AI {
  constructor() {
    this.counter = 0;
    this.ships = 5;
    this.threeLenShip = 0;
  }

  fillBoard(x, y, playerBoard, switcher) {
    if (switcher === 1) {
      for (let step = 0; step < this.ships; step++) {
        if (playerBoard.board[x + step][y] === 0) {
          playerBoard.board[x + step][y] = 1;
        } else if (
          playerBoard.board[x + step][y] === undefined ||
          playerBoard.board[x + step][y] === 1
        ) {
          playerBoard.board[x - (this.ships - step)][y] = 1;
        }
      }
      console.log(playerBoard);
      this.isSecondThree();
      return this.ships--, playerBoard.board;
    } else if (switcher === 0) {
      for (let step = 0; step < this.ships; step++) {
        if (playerBoard.board[x][y + step] === 0) {
          playerBoard.board[x][y + step] = 1;
        } else if (
          playerBoard.board[x][y + step] === undefined ||
          playerBoard.board[x][y + step] === 1
        ) {
          playerBoard.board[x][y - (this.ships - step)] = 1;
        }
      }
      console.log(playerBoard);
      this.isSecondThree();
      return this.ships--, playerBoard.board;
    }
  }

  attack(x, y, playerBoard) {
    if (playerBoard.board[x][y] !== 2) {
      if (playerBoard.board[x][y] === 0) {
        playerBoard.board[x][y] = 2;
        console.log("water");
      } else if (playerBoard.board[x][y] === 1) {
        playerBoard.board[x][y] = -1;
        this.decideWhereToHit(x, y, playerBoard);
        this.counter++;
        console.log("ship", this.counter);
      }
    } else if (playerBoard.board[x][y] === 2) {
      this.attack(this.getRandomInt(), this.getRandomInt(), playerBoard);
    }
    return this.counter, playerBoard.board;
  }

  isSecondThree() {
    if (this.threeLenShip === 2) {
      return this.ships++, this.threeLenShip++;
    } else {
      return this.threeLenShip++;
    }
  }

  getRandomInt() {
    let max = 10;
    return Math.floor(Math.random() * max);
  }

  decideWhereToHit(x, y, playerBoard) {
    if (playerBoard.board[x + 1][y] === 1) {
      this.attack(x + 1, y, playerBoard);
    } else if (playerBoard.board[x - 1][y] === 1) {
      this.attack(x - 1, y, playerBoard);
    } else if (playerBoard.board[x][y + 1] === 1) {
      this.attack(x, y + 1, playerBoard);
    } else if (playerBoard.board[x][y - 1] === 1) {
      this.attack(x, y - 1, playerBoard);
    }
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
