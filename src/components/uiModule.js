const computerBoard = document.getElementById("computerBoard");
const boardPlayer = document.getElementById("playerBoard");
const cellsPlayer = document.querySelectorAll(".cellPlayer");
const header = document.getElementById("header");
import { player, switcher } from "../index.js";

let y;
let x;
let runVar = 0;
export class ShowBoard {
  constructor() {
    this.ship = 0;
    this.aiToLose = 0;
    this.playerToLose = 0;
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
          cell.addEventListener("click", () => {
            runVar = cell.getAttribute("value");
            if (player.onesInBoard >= 53 && runVar == 0) {
              cell.classList.add("isWata");
              cell.setAttribute("value", 2);
              attack();
              cellsPlayer.forEach((cp) => {
                var value = cp.getAttribute("value");
                if (value == -1) {
                  this.playerToLose++;
                  if (this.playerToLose === 17) {
                    header.innerText = "Computer wins!";
                    let timerInSeconds = 0;

                    setInterval(() => {
                      timerInSeconds += 1;

                      header.innerText = `Restart game in: ${timerInSeconds}`;
                      if (timerInSeconds >= 5) {
                        window.location.reload();
                      }
                    }, 1000);
                  } else if (this.playerToLose !== 17) {
                    this.playerToLose = 0;
                  }
                }
              });
            } else {
              return;
            }
          });
        } else if (compBoard.board[i][j] === 1) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          // cell.classList.add("isShip");
          computerBoard.appendChild(cell);
          cell.setAttribute("y", i);
          cell.setAttribute("x", j);
          cell.setAttribute("value", 1);
          cell.addEventListener("click", () => {
            runVar = cell.getAttribute("value");
            if (player.onesInBoard >= 53 && runVar == 1) {
              cell.classList.add("isHit");
              this.aiToLose++;
              cell.setAttribute("value", -1);
              if (this.aiToLose === 17) {
                header.innerText = "Player wins!";
                let timerInSeconds = 0;

                setInterval(() => {
                  timerInSeconds += 1;

                  header.innerText = `Restart game in: ${timerInSeconds}`;

                  if (timerInSeconds >= 5) {
                    window.location.reload();
                  }
                }, 1000);
              }
              const cellsPlayer = document.querySelectorAll(".cellPlayer");
              attack();
              cellsPlayer.forEach((cp) => {
                var value = cp.getAttribute("value");
                if (value == -1) {
                  this.playerToLose++;
                  if (this.playerToLose === 17) {
                    header.innerText = "Computer wins!";
                    let timerInSeconds = 0;
                    setInterval(() => {
                      timerInSeconds += 1;

                      header.innerText = `Restart game in: ${timerInSeconds}`;

                      if (timerInSeconds >= 5) {
                        window.location.reload();
                      }
                    }, 1000);
                  } else if (this.playerToLose !== 17) {
                    this.playerToLose = 0;
                  }
                }
              });
            } else {
              return;
            }
          });
        } else if (compBoard.board[i][j] === 3) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          // cell.classList.add("isWata"); show borders
          computerBoard.appendChild(cell);
          cell.setAttribute("value", 3);
          cell.setAttribute("y", i);
          cell.setAttribute("x", j);
          cell.addEventListener("click", (e) => {
            runVar = cell.getAttribute("value");
            if (player.onesInBoard >= 53 && runVar == 3) {
              cell.classList.add("isWata");
              cell.setAttribute("value", 2);
              const cellsPlayer = document.querySelectorAll(".cellPlayer");
              attack();
              cellsPlayer.forEach((cp) => {
                var value = cp.getAttribute("value");
                if (value == -1) {
                  this.playerToLose++;
                  if (this.playerToLose === 17) {
                    header.innerText = "Computer wins!";
                    let timerInSeconds = 0;
                    setInterval(() => {
                      timerInSeconds += 1;

                      header.innerText = `Restart game in: ${timerInSeconds}`;

                      if (timerInSeconds >= 5) {
                        window.location.reload();
                      }
                    }, 1000);
                  } else if (this.playerToLose !== 17) {
                    this.playerToLose = 0;
                  }
                }
              });
            } else {
              return;
            }
          });
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
            if (player.onesInBoard < 53) {
              y = parseInt(e.target.getAttribute("y"));
              x = parseInt(e.target.getAttribute("x"));
              player.fillBoard(y, x, playerBoard, switcher);
              boardPlayer.innerHTML = "";
              this.showBoardPlayer(playerBoard);
              player.onesNum(playerBoard);
            } else {
              return;
            }
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
            if (player.onesInBoard < 53) {
              y = parseInt(e.target.getAttribute("y"));
              x = parseInt(e.target.getAttribute("x"));
              player.fillBoard(y, x, playerBoard, switcher);
              boardPlayer.innerHTML = "";
              this.showBoardPlayer(playerBoard);
              player.onesNum(playerBoard);
            } else {
              return;
            }
          });
        } else if (playerBoard.board[i][j] === 3) {
          const cellPlayer = document.createElement("div");
          cellPlayer.classList.add("cellPlayer");
          // cellPlayer.classList.add("isWata"); // show borders
          boardPlayer.appendChild(cellPlayer);
          cellPlayer.setAttribute("value", 3);
          cellPlayer.setAttribute("y", i);
          cellPlayer.setAttribute("x", j);
          cellPlayer.addEventListener("click", (e) => {
            if (player.onesInBoard < 53) {
              y = parseInt(e.target.getAttribute("y"));
              x = parseInt(e.target.getAttribute("x"));
              player.fillBoard(y, x, playerBoard, switcher);
              boardPlayer.innerHTML = "";
              this.showBoardPlayer(playerBoard);
              player.onesNum(playerBoard);
            } else {
              return;
            }
          });
        }
      }
    }
  }
}

function getRandomInt() {
  let max = 10;
  return Math.floor(Math.random() * max);
}

function attack() {
  let selector =
    '.cellPlayer[y="' + getRandomInt() + '"][x="' + getRandomInt() + '"]';
  let divToFind = document.querySelector(selector);
  let atr = divToFind.getAttribute("value");
  if (atr == 1) {
    divToFind.classList.add("isHit");
    divToFind.setAttribute("value", -1);
    // attack();
  } else if (atr == 2) {
    attack();
  } else if (atr == 3 || atr == 0) {
    divToFind.classList.add("isWata");
    divToFind.setAttribute("value", 2);
  }
}
