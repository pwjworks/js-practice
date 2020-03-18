// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

Function.prototype.myBind2 = function (that, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const func = this
  return function (..._args) {
    return func.apply(that, args.concat(_args))
  }
}