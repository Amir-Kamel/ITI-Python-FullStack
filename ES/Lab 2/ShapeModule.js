export class Shape {
  #color = "none";

  constructor(_color) {
    if (new.target.name == "Shape") {
      throw new error("you cant get implicit exciplict");
    }
    this.#color = _color;
  }

  set Color(_color) {
    if (_color.trim().length >= 3 && isNaN(_color)) {
      this.#color = _color;
    }
  }

  get Color() {
    return this.#color;
  }

  DrawShape() {
    return `the color of the shape is ${this.#color}`;
  }
}
