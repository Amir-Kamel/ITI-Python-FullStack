import { Shape } from "./ShapeModule.js";

export class Circle extends Shape {
  #x = 0;
  #y = 0;
  #radius = 0;
  constructor(_color, _x, _y) {
    super(_color);
    this.#x = _x;
    this.#y = _y;
  }

  get x() {
    return this.#x;
  }

  set x(_x) {
    if (!isNaN(_x)) {
      this.#x = _x;
    }
  }

  get y() {
    return this.#y;
  }

  set y(_y) {
    if (!isNaN(_y)) {
      this.#y = _y;
    }
  }

  getArea() {
    return `the area is ${
      Math.PI * this.#x * this.#y
    } and ${super.DrawShape()}`;
  }
}
