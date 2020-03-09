function * f () {
  for (var i = 0; true; i++) {
    var reset = yield i
    if (reset) {
      i = -1
    }
  }
}

var g = f()

console.log('g.next()', g.next())
console.log('g.next()', g.next())
console.log('g.next(true)', g.next(true))
