// eslint-disable-next-line no-extend-native
Function.prototype.bind = function (obj, arg) {
  var arg = Array.prototype.slice.call(arguments, 1)
  var context = this
  var bound = function (newArg) {
    arg = arg.concat(Array.prototype.slice.call(newArg))
    return context.apply(obj, arg)
  }
}
