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

          cell.setAttribute("y", i);
          cell.setAttribute("x", j);
          cell.setAttribute("value", 0);
        } else if (compBoard.board[i][j] === 1) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.classList.add("isShip");
          computerBoard.appendChild(cell);

          cell.setAttribute("y", i);
          cell.setAttribute("x", j);
          cell.setAttribute("value", 1);
        } else if (compBoard.board[i][j] === 3) {
          const cell = document.createElement("div");
          cell.classList.add("cell");

          // cell.classList.add("isWata"); show borders
          computerBoard.appendChild(cell);
          cell.setAttribute("value", 3);
          cell.setAttribute("y", i);
          cell.setAttribute("x", j);
        }
      }
    }
  }
}
