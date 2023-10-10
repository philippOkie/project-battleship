import { player } from "..";

export class Player {
  constructor() {
    this.counter = 0;
    this.ships = 5;
    this.threeLenShip = 0;
    this.onesInBoard = 0;
  }

  getRandom() {
    return Math.floor(Math.random() * 2);
  }

  fillBoard(x, y, playerBoard, switcher) {
    const numRows = playerBoard.board.length;
    const numCols = playerBoard.board[0].length;

    function isValidCoordinate(row, col) {
      return row >= 0 && row < numRows && col >= 0 && col < numCols;
    }

    function hasAdjacentShip(row, col) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;
          if (
            isValidCoordinate(newRow, newCol) &&
            playerBoard.board[newRow][newCol] === 1
          ) {
            return true;
          }
        }
      }
      return false;
    }

    function placeBuffer(row, col) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;
          if (
            isValidCoordinate(newRow, newCol) &&
            playerBoard.board[newRow][newCol] === 0
          ) {
            playerBoard.board[newRow][newCol] = 3; // Place '3' around the ship
          }
        }
      }
    }

    if (switcher === 1) {
      if (x + this.ships > numRows) {
        return this.fillBoard(
          this.getRandomInt(numRows - this.ships + 1),
          this.getRandomInt(numCols),
          playerBoard,
          this.getRandom()
        );
      }

      for (let step = 0; step < this.ships; step++) {
        if (
          playerBoard.board[x + step][y] === 1 ||
          playerBoard.board[x + step][y] === undefined ||
          hasAdjacentShip(x + step, y)
        ) {
          return this.fillBoard(
            this.getRandomInt(numRows - this.ships + 1),
            this.getRandomInt(numCols),
            playerBoard,
            this.getRandom()
          );
        }
      }

      for (let j = 0; j < this.ships; j++) {
        playerBoard.board[x + j][y] = 1;
        placeBuffer(x + j, y);
      }
    } else if (switcher === 0) {
      if (y + this.ships > numCols) {
        return this.fillBoard(
          this.getRandomInt(numRows),
          this.getRandomInt(numCols - this.ships + 1),
          playerBoard,
          this.getRandom()
        );
      }

      for (let step = 0; step < this.ships; step++) {
        if (
          playerBoard.board[x][y + step] === 1 ||
          playerBoard.board[x][y + step] === undefined ||
          hasAdjacentShip(x, y + step)
        ) {
          return this.fillBoard(
            this.getRandomInt(numRows),
            this.getRandomInt(numCols - this.ships + 1),
            playerBoard,
            this.getRandom()
          );
        }
      }

      for (let j = 0; j < this.ships; j++) {
        playerBoard.board[x][y + j] = 1;
        placeBuffer(x, y + j);
      }
    }

    this.isSecondThree(playerBoard);
    this.ships--;
    return playerBoard;
  }

  getRandomInt() {
    let max = 10;
    return Math.floor(Math.random() * max);
  }

  isSecondThree() {
    if (this.threeLenShip === 2) {
      this.ships++;
      this.threeLenShip++;
    } else if (this.threeLenShip > 2 && this.ships === 2) {
      this.ships--;
    } else {
      this.threeLenShip++;
    }
  }

  attack(x, y, playerBoard) {
    if (playerBoard.board[x][y] === 0 || playerBoard.board[x][y] === 3) {
      playerBoard.board[x][y] = 2;
    }
  }

  checkIfTheEnd(playerBoard) {
    shipsNum(playerBoard);
    if (this.counter === 17) {
      return true;
    } else {
      return this.counter;
    }
  }

  shipsNum(playerBoard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (playerBoard.board[i][j] === -1) {
          this.counter++;
        }
      }
    }
  }

  onesNum(playerBoard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (playerBoard.board[i][j] === 1) {
          this.onesInBoard++;
        }
      }
    }
    console.log(this.onesInBoard);
    if (this.onesInBoard === 53) {
      console.log("Start!");
    }
  }
}
