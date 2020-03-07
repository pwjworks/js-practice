function Animal (name) {
  this.name = name || 'animal'
  this.sleep = function () {
    console.log(this.name + '正在睡觉')
  }
  this.say = function () {
    console.log(this.name)
  }
}
function Thing () {
  this.sayThing = function () {
    console.log('It is a thing')
  }
}
Animal.prototype.eat = (food) => {
  console.log(this.name + '正在吃' + food)
}

function Cat (name) {
  Animal.call(this) //! important
  Thing.call(this)
  this.name = name || 'cat'
}

var cat = new Cat()
console.log('cat', cat.sayThing())
console.log(cat.name)
console.log(cat instanceof Thing)
console.log(cat instanceof Cat)
//! 可以实现多继承
//! 只能继承父类实例的属性和方法，不能继承原型上的属性和方法
