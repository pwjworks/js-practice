function debounce(handler, delay) {
  delay = delay || 300
  var timer = null
  return function () {
    var _self = this
    var _args = arguments

    clearTimeout(timer)
    timer = setTimeout(function () {
      handler.apply(_self, _args)
    }, delay)
  }
}
// 防抖 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次