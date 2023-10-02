import { Gameboard } from "./gameboardModule";

const playerBoard = new Gameboard();

export class AI {
  constructor() {}

  attack(x, y) {
    playerBoard.board[x][y] = -0;
    return playerBoard.board;
  }
}

// function changeCordsToAttack(i, j) {
//   i = getRandomInt();
//   j = getRandomInt();
//   if (playerBoard.board[i][j] !== -1) {
//     return i, j;
//   } else {
//     changeCordsToAttack(i, j);
//   }
// }

export function getRandomInt() {
  let max = 10;
  return Math.floor(Math.random() * max);
}
