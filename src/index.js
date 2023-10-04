import "./styles/main.scss";
import { AI } from "./components/ai";
import { Gameboard } from "./components/gameboardModule";
import { Player } from "./components/playerModule";

function getRandom() {
  return Math.floor(Math.random() * 2);
}

function myFunction() {
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
      const result = myFunction();
      return result; // If successful, exit the loop
    } catch (error) {
      retryCount++;
    }
  }
  console.error("Function failed after multiple retries");
  return null;
}

const playerBoard = new Gameboard();
const compBoard = new Gameboard();
const comp = new AI();
const player = new Player();

// player.fillBoard(5, 5, playerBoard, 1);
// player.fillBoard(3, 6, playerBoard, 0);
// player.fillBoard(0, 0, playerBoard, 0);
// player.fillBoard(1, 0, playerBoard, 0);
// player.fillBoard(2, 0, playerBoard, 0);

// console.log("this is player's board", playerBoard.board);
// console.log(player.threeLenShip);

// retryFunctionOnFailure();
// console.log("this is comp's board", compBoard.board);
