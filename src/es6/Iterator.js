const obj = {
  start: [1, 3, 2],
  end: [7, 9, 8],
  [Symbol.iterator]() {
    const self = this
    let index = 0
    const arr = self.start.concat(self.end)
    const len = arr.length
    return {
      next() {
        if (index < len) {
          return {
            value: arr[index++],
            done: false
          }
        } else {
          return {
            value: arr[index++],
            done: true
          }
        }
      }
    }
  }
}

for (const key of obj) {
  console.log(key)
}

class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return { done: false, value: value };
    }
    return { done: true, value: undefined };
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
  console.log(value); // 0, 1, 2
}

function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function () {
  var iterator = { next: next };

  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return { done: false, value: value };
    }
    return { done: true };
  }
  return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one) {
  console.log(i); // 1, 2, 3
}