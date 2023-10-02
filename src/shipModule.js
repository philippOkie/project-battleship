export class Ship {
  constructor(len) {
    this.len = len;
    this.wasHit = 0;
  }

  isSunk() {
    if (this.len === this.wasHit) {
      return true;
    } else {
      return false;
    }
  }
}
