import "./styles/main.scss";
import { AI } from "./components/ai";
import { Gameboard } from "./components/gameboardModule";
import { Player } from "./components/playerModule";

const playerBoard = new Gameboard();
const compBoard = new Gameboard();
const comp = new AI();
const player = new Player();
let switcher = 1;

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
  // For demonstration purposes, let's say this function sometimes throws an error
  if (Math.random() < 0.5) {
    throw new Error("Simulated error");
  }

  // If the code runs successfully, return some result
  return "Success";
}

function retryFunctionOnFailure() {
  let retryCount = 0;
  const maxRetries = 10; // You can adjust the number of retries as needed
  while (retryCount < maxRetries) {
    try {
      const result = aiFill();
      return result; // If successful, exit the loop
    } catch (error) {
      retryCount++;
    }
  }
  console.error("Function failed after multiple retries");
  return null;
}

// window.oncontextmenu = function (e) {
//   e.preventDefault();
//   if (switcher === 1) {
//     switcher = 0;
//   } else if (switcher === 0) {
//     switcher = 1;
//   }
//   alert("Right Click, Switcher: " + switcher);
// };

// player.fillBoard(5, 5, playerBoard, 1);
// player.fillBoard(3, 6, playerBoard, 0);
// player.fillBoard(0, 0, playerBoard, 0);
// player.fillBoard(1, 0, playerBoard, 0);
// player.fillBoard(2, 0, playerBoard, 0);

// console.log("this is player's board", playerBoard.board);
// console.log(player.threeLenShip);

retryFunctionOnFailure();

const computerBoard = document.getElementById("computerBoard");
const cell = document.createElement("div");
cell.classList.add("cell");
computerBoard.appendChild("cell");

console.log("this is comp's board", compBoard.board);
