import "./styles/main.scss";
import { AI } from "./ai";

const comp = new AI();
console.log(comp.attack(5, 5));
console.log(comp.checkItTheEnd());
