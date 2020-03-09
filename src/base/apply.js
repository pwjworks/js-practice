// eslint-disable-next-line no-extend-native
Function.prototype.myApply = function (context) {
  var ctx = context || window
  ctx.fn = this
  var result
  if (arguments[1]) {
    result = ctx.fn(...arguments[1])
  } else {
    result = ctx.fn()
  }
  delete ctx.fn()
  return result
}
