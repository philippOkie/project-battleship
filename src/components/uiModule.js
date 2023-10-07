const computerBoard = document.getElementById("computerBoard");
export class ShowBoard {
  constructor() {
    this.ship = 0;
  }
  showAIBoard(compBoard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (compBoard.board[i][j] === 0) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          computerBoard.appendChild(cell);
        } else if (compBoard.board[i][j] === 1) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.classList.add("isShip");
          computerBoard.appendChild(cell);
        } else if (compBoard.board[i][j] === 3) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.classList.add("isWata");
          computerBoard.appendChild(cell);
        }
      }
    }
  }
}
