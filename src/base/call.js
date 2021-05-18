// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (context) {
  var ctx = context || window
  ctx.fn = this
  var args = [...arguments].slice(1)
  var result = ctx.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myCall = function (context) {
  let ctx = context || window;
  ctx.fn = this;
  let args = [...arguments].slice(1);
  let res = ctx.fn(...args);
  delete context.fn;
  return res;
}