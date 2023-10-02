import { Gameboard, getRandomInt } from "./gameboardModule";

test("receiveAttack func test", () => {
  const gb = new Gameboard();
  let i = getRandomInt();
  let j = getRandomInt();
  expect(gb.receiveAttack(i, j)).toBe(gb.board[i][j] === -1);
});
