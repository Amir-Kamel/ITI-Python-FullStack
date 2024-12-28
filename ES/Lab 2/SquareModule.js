import { Shape } from "./ShapeModule.js";

export class Rectangle extends Shape {
  #width = 0;
  #length = 0;
  constructor(_color, _length, _width) {
    super(_color);
    this.#length = _length;
    this.#width = _width;
  }

  get length() {
    return this.#length;
  }

  set length(_length) {
    if (!isNaN(_length)) {
      this.#length = _length;
    }
  }

  get width() {
    this.#width;
  }

  set width(_width) {
    if (!isNaN(_width)) {
      this.#width = _width;
    }
  }

  getArea() {
    return `the area is ${this.#width * this.#length} and ${super.DrawShape()}`;
  }
}

export class Square extends Rectangle {
  constructor(_color, _length, _width) {
    super(_color, _length, _width);
  }

  getArea() {
    return `the area is ${this.length * this.length} and ${super.DrawShape()}`;
  }
}
