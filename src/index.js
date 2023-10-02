import "./styles/main.scss";
import { Gameboard, getRandomInt } from "./gameboardModule";

const gb = new Gameboard();
let i = getRandomInt();
let j = getRandomInt();
gb.receiveAttack(i, j);
