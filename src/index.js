import "./styles/main.scss";
import { AI } from "./components/ai";
import { Gameboard } from "./components/gameboardModule";
import { Player } from "./components/playerModule";
import { ShowBoard } from "./components/uiModule";

const show = new ShowBoard();
const playerBoard = new Gameboard();
const compBoard = new Gameboard();
const comp = new AI();
export const player = new Player();
export let switcher = 1;

function getRandom() {
  return Math.floor(Math.random() * 2);
}

function aiFill() {
  comp.fillBoard(
    comp.getRandomInt(),
    comp.getRandomInt(),
    compBoard,
    getRandom()
  );
  comp.fillBoard(
    comp.getRandomInt(),
    comp.getRandomInt(),
    compBoard,
    getRandom()
  );
  comp.fillBoard(
    comp.getRandomInt(),
    comp.getRandomInt(),
    compBoard,
    getRandom()
  );
  comp.fillBoard(
    comp.getRandomInt(),
    comp.getRandomInt(),
    compBoard,
    getRandom()
  );
  comp.fillBoard(
    comp.getRandomInt(),
    comp.getRandomInt(),
    compBoard,
    getRandom()
  );
  return "Success";
}
aiFill();
window.oncontextmenu = function (e) {
  e.preventDefault();
  if (switcher === 1) {
    switcher = 0;
  } else if (switcher === 0) {
    switcher = 1;
  }
  console.log("Right Click, Switcher: " + switcher);
};

console.log("this is player's board", playerBoard.board);
// console.log(player.threeLenShip);

// comp.fillBoard(0, 5, compBoard, 0);
// comp.fillBoard(2, 5, compBoard, 0);
// comp.fillBoard(4, 2, compBoard, 0);
// comp.fillBoard(6, 4, compBoard, 0);
// comp.fillBoard(6, 5, compBoard, 1);
show.showBoard(compBoard);
console.log("this is comp's board", compBoard.board);

const cells = document.querySelectorAll(".cell");

cells.forEach(function (cellElement) {
  cellElement.onclick = function () {
    if (cellElement.getAttribute("value") === "1") {
      cellElement.classList.add("isHit");
    } else {
      cellElement.classList.add("isWata");
    }
  };
});

const cellsPlayer = document.querySelectorAll(".cellPlayer");
const boardPlayer = document.getElementById("playerBoard");
let y;
let x;

cellsPlayer.forEach((cellPlayer) => {
  cellPlayer.addEventListener("click", (e) => {
    y = parseInt(e.target.getAttribute("y"));
    x = parseInt(e.target.getAttribute("x"));
    player.fillBoard(y, x, playerBoard, switcher);
    boardPlayer.innerHTML = "";
    show.showBoardPlayer(playerBoard);
    console.log("this is player's board", playerBoard.board);
  });
});
