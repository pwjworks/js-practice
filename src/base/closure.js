// 创建一个独立的环境，每个闭包里的环境都是独立的，互不干扰
// 每次外部函数执行的时候，外部函数的地址不同，会重新创建一个地址

// 避免创建全局变量
// 局部变量会常驻再内存中
// 让外部函数访问内部变量成为可能

function funA () {
  var a = 10
  return function () {
    console.log(a)
  }
}
var b = funA()
b()

function outerFn () {
  var i = 0
  function innerFn () {
    i++
    console.log(i)
  }
  return innerFn
}

var inner = outerFn()
inner()
var inner2 = outerFn()
inner2()
inner2()
