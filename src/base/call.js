// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (context) {
  var ctx = context || window
  ctx.fn = this
  var args = [...arguments].slice(1)
  var result = ctx.fn(...args)
  delete context.fn
  return result
}
