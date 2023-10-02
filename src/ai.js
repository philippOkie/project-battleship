import { Gameboard } from "./gameboardModule";

const playerBoard = new Gameboard();

export class AI {
  constructor() {
    this.counter = 0;
  }

  attack(x, y) {
    if (playerBoard.board[x][y] === 1) {
      playerBoard.board[x][y] = -1;
    }
    if (playerBoard.board[x][y] === 0) {
      playerBoard.board[x][y] = 1;
    } else {
      this.attack(getRandomInt(), getRandomInt());
    }
    return playerBoard.board;
  }

  getRandomInt() {
    let max = 10;
    return Math.floor(Math.random() * max);
  }

  decideGoUpOrDown() {
    let upOrDown;
    return (upOrDown = Math.random() < 0.5 ? -1 : 1);
  }

  checkIfTheEnd() {
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
