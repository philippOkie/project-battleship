import "./styles/main.scss";
import { Gameboard } from "./gameboardModule";
import { Ship } from "./shipModule";
import { AI } from "./ai";

const comp = new AI();
const playerBoard = new Gameboard();

console.log(comp.attack(5, 5));
