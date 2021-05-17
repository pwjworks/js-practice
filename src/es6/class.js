// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
// };



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var p = new Point(1, 2);
console.log(p.toString());

class Foo {
    constructor() {
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo)
  // false