import "./styles/main.scss";
import { AI } from "./components/ai";
import { Gameboard } from "./components/gameboardModule";
import { Player } from "./components/playerModule";
import { ShowBoard } from "./components/uiModule";

const show = new ShowBoard();
const playerBoard = new Gameboard();
const compBoard = new Gameboard();
export const comp = new AI();
export const player = new Player();
const cellsPlayer = document.querySelectorAll(".cellPlayer");
const boardPlayer = document.getElementById("playerBoard");
const cells = document.querySelectorAll(".cell");
let y;
let x;
export let switcher = 1;

// alert(
//   "To determine whether you want to place the ship vertically or horizontally, simply right-click."
// );

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
  show.showBoard(compBoard);
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
};

cells.forEach(function (cellElement) {
  cellElement.onclick = function () {
    if (cellElement.getAttribute("value") === "1") {
      cellElement.classList.add("isHit");
    } else {
      cellElement.classList.add("isWata");
    }
  };
});

cellsPlayer.forEach((cellPlayer) => {
  cellPlayer.addEventListener("click", (e) => {
    y = parseInt(e.target.getAttribute("y"));
    x = parseInt(e.target.getAttribute("x"));
    player.fillBoard(y, x, playerBoard, switcher);
    boardPlayer.innerHTML = "";
    show.showBoardPlayer(playerBoard);
  });
});
