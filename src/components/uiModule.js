const computerBoard = document.getElementById("computerBoard");
const boardPlayer = document.getElementById("playerBoard");
const cellsPlayer = document.querySelectorAll(".cellPlayer");
import { player, switcher } from "../index.js";

let y;
let x;
export class ShowBoard {
  constructor() {
    this.ship = 0;
  }
  showBoard(compBoard) {
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

  showBoardPlayer(playerBoard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (playerBoard.board[i][j] === 0) {
          const cellPlayer = document.createElement("div");
          cellPlayer.classList.add("cellPlayer");
          boardPlayer.appendChild(cellPlayer);
          cellPlayer.setAttribute("y", i);
          cellPlayer.setAttribute("x", j);
          cellPlayer.setAttribute("value", 0);
          cellPlayer.addEventListener("click", (e) => {
            y = parseInt(e.target.getAttribute("y"));
            x = parseInt(e.target.getAttribute("x"));
            player.fillBoard(y, x, playerBoard, switcher);
            boardPlayer.innerHTML = "";
            this.showBoardPlayer(playerBoard);
            console.log("this is player's board", playerBoard.board);
          });
        } else if (playerBoard.board[i][j] === 1) {
          const cellPlayer = document.createElement("div");
          cellPlayer.classList.add("cellPlayer");
          cellPlayer.classList.add("isShip");
          boardPlayer.appendChild(cellPlayer);
          cellPlayer.setAttribute("y", i);
          cellPlayer.setAttribute("x", j);
          cellPlayer.setAttribute("value", 1);

          cellPlayer.addEventListener("click", (e) => {
            y = parseInt(e.target.getAttribute("y"));
            x = parseInt(e.target.getAttribute("x"));
            player.fillBoard(y, x, playerBoard, switcher);
            boardPlayer.innerHTML = "";
            this.showBoardPlayer(playerBoard);
            console.log("this is player's board", playerBoard.board);
          });
        } else if (playerBoard.board[i][j] === 3) {
          const cellPlayer = document.createElement("div");
          cellPlayer.classList.add("cellPlayer");
          cellPlayer.classList.add("isWata"); // show borders
          boardPlayer.appendChild(cellPlayer);
          cellPlayer.setAttribute("value", 3);
          cellPlayer.setAttribute("y", i);
          cellPlayer.setAttribute("x", j);
          cellPlayer.addEventListener("click", (e) => {
            y = parseInt(e.target.getAttribute("y"));
            x = parseInt(e.target.getAttribute("x"));
            player.fillBoard(y, x, playerBoard, switcher);
            boardPlayer.innerHTML = "";
            this.showBoardPlayer(playerBoard);
            console.log("this is player's board", playerBoard.board);
          });
        }
      }
    }
  }
}
