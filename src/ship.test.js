import { Ship } from "./shipModule";

test("creating a 'Carrier' ship (occupies 5 spaces), len should be 5", () => {
  const ship = new Ship(5);
  expect(ship.len).toBe(5);
});

test("creating a 'Battleship' ship (occupies 4 spaces), len should be 4", () => {
  const ship = new Ship(4);
  expect(ship.len).toBe(4);
});

test("creating a 'Cruiser' ship (occupies 3 spaces), len should be 3", () => {
  const ship = new Ship(3);
  expect(ship.len).toBe(3);
});

test("creating a 'Submarine' ship (occupies 3 spaces), len should be 3", () => {
  const ship = new Ship(3);
  expect(ship.len).toBe(3);
});

test("creating a 'Destroyer' ship (occupies 2 spaces), len should be 2", () => {
  const ship = new Ship(2);
  expect(ship.len).toBe(2);
});

test("isSunk true", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("isSunk false", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
