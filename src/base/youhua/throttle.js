function throttle(handler, wait) {
  wait = wait || 300
  var lastTime = 0
  return function () {
    var _self = this
    var _args = arguments

    var nowTime = new Date().getTime()
    if (nowTime - lastTime > wait) {
      handler.apply(_self, _args)
      lastTime = nowTime
    }
  }
}
// 节流 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。