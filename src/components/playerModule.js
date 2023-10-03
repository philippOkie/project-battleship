export class Player {
  constructor() {
    this.counter = 0;
    this.ships = 5;
    this.threeLenShip = 0;
  }

  fillBoard(x, y, playerBoard, switcher) {
    if (switcher === 1) {
      for (let step = 0; step < this.ships; step++) {
        if (playerBoard.board[x + step][y] !== 1) {
          playerBoard.board[x + step][y] = 1;
        } else {
          playerBoard.board[x - (this.ships - step)][y] = 1;
        }
      }
      console.log(playerBoard);
      this.isSecondThree();
      return this.ships--, playerBoard.board;
    } else if (switcher === 0) {
      for (let step = 0; step < this.ships; step++) {
        if (playerBoard.board[x][y + step] !== 1) {
          playerBoard.board[x][y + step] = 1;
        } else {
          playerBoard.board[x][y - (this.ships - step)] = 1;
        }
      }
      console.log(playerBoard);
      this.isSecondThree();
      return this.ships--, playerBoard.board;
    }
  }

  isSecondThree() {
    if (this.threeLenShip === 2) {
      return this.ships++, this.threeLenShip++;
    } else {
      return this.threeLenShip++;
    }
  }

  isFit(x, y, playerBoard, switcher) {}
}
