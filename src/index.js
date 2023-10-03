import "./styles/main.scss";
import { AI } from "./ai";
import { Gameboard } from "./gameboardModule";

const playerBoard = new Gameboard();
const comp = new AI();
playerBoard.board[5][5] = 1;
playerBoard.board[5][6] = 1;
playerBoard.board[5][7] = 1;
console.log(playerBoard.board);
comp.attack(5, 5, playerBoard);
console.log(playerBoard.board);
