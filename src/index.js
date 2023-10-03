import "./styles/main.scss";
import { AI } from "./components/ai";
import { Gameboard } from "./components/gameboardModule";
import { Player } from "./components/playerModule";

// let switcher = 1;
// let x
// let y
const playerBoard = new Gameboard();
const compBoard = new Gameboard();
const comp = new AI();
const player = new Player();

player.fillBoard(5, 5, playerBoard, 1);
player.fillBoard(3, 3, playerBoard, 0);
player.fillBoard(0, 0, playerBoard, 0);
player.fillBoard(1, 0, playerBoard, 0);
player.fillBoard(2, 0, playerBoard, 0);

console.log(playerBoard.board);
console.log(player.threeLenShip);
console.log(compBoard.board);

// playerBoard.board[5][5] = 1;
// playerBoard.board[5][6] = 1;
// playerBoard.board[5][7] = 1;
// console.log(playerBoard.board);
// comp.attack(5, 5, playerBoard);
// console.log(playerBoard.board);
