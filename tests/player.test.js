import { Player } from "../src/components/playerModule";
import { Gameboard } from "../src/components/gameboardModule";

test("adding ships horizontally", () => {
  let switcher = 0;
  let x = 5;
  let y = 5;
  const playerBoard = new Gameboard();
  const player = new Player();
  expect(player.fillBoard(x, y, playerBoard, switcher)).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("adding ships vertically", () => {
  let switcher = 1;
  let x = 5;
  let y = 5;
  const playerBoard = new Gameboard();
  const player = new Player();
  expect(player.fillBoard(x, y, playerBoard, switcher)).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  ]);
});

test("adding all five ships", () => {
  const playerBoard = new Gameboard();
  const player = new Player();

  // Fill the player board with ships
  player.fillBoard(5, 5, playerBoard, 1);
  player.fillBoard(3, 3, playerBoard, 0);
  player.fillBoard(0, 0, playerBoard, 0);
  player.fillBoard(1, 0, playerBoard, 0);
  player.fillBoard(2, 0, playerBoard, 0);

  // Get the resulting board after all ship placements
  const resultBoard = playerBoard.board;

  // Define the expected board state
  const expectedBoard = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  ];

  // Assert that the resulting board matches the expected board
  expect(resultBoard).toStrictEqual(expectedBoard);
});

// test("adding ships without overlapping vertically", () => {
//   let switcher = 0;
//   let x = 5;
//   let y = 5;
//   const playerBoard = new Gameboard();
//   const player = new Player();
//   playerBoard.board[9][5] = 1;
//   expect(player.fillBoard(x, y, playerBoard, switcher)).toStrictEqual([
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//   ]);
// });

// test("adding ships without overlapping horizontally", () => {
//   let switcher = 1;
//   let x = 5;
//   let y = 5;
//   const playerBoard = new Gameboard();
//   const player = new Player();
//   playerBoard.board[5][9] = 1;
//   expect(player.fillBoard(x, y, playerBoard, switcher)).toStrictEqual([
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ]);
// });
