import { Circle } from "./CircleModule.js";

import { Rectangle, Square } from "./SquareModule.js";

let cir = new Circle("red", 5, 6, 1);
console.log(cir.getArea());
console.log(cir.x);

let rec = new Rectangle("green", 10, 12);
console.log(rec.getArea());
console.log(rec.length);

let sq = new Square("blue", 50, 50);
console.log(sq.getArea());
console.log(rec.length);
