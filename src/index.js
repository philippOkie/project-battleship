import "./styles/main.scss";
import { AI } from "./components/ai";
import { Gameboard } from "./components/gameboardModule";
import { Player } from "./components/playerModule";

let switcher = 1;
let x = 5;
let y = 5;
const playerBoard = new Gameboard();
const comp = new AI();
const player = new Player();
playerBoard.board[9][5] = 1;
player.fillBoard(x, y, playerBoard, switcher);
console.log(playerBoard.board);
// playerBoard.board[5][5] = 1;
// playerBoard.board[5][6] = 1;
// playerBoard.board[5][7] = 1;
// console.log(playerBoard.board);
// comp.attack(5, 5, playerBoard);
// console.log(playerBoard.board);
