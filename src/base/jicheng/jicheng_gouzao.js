function Animal(name) {
  this.name = name || 'animal'
  this.sleep = function () {
    console.log(this.name + '正在睡觉')
  }
  this.say = function () {
    console.log(this.name)
  }
}
function Thing() {
  this.sayThing = function () {
    console.log('It is a thing')
  }
}
Animal.prototype.eat = (food) => {
  console.log(this.name + '正在吃' + food)
}

function Cat(name) {
  Animal.call(this); //! important
  Thing.call(this);
  this.name = name || 'cat'
}

var cat = new Cat()
console.log('cat', cat.sayThing())
console.log(cat.name)
console.log(cat instanceof Thing)
console.log(cat instanceof Cat)
//! 可以实现多继承
//! 只能继承父类实例的属性和方法，不能继承原型上的属性和方法

// 　　　　重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
// 　　　　特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
// 　　　　　　　2、解决了原型链继承缺点1、2、3。
// 　　　　　　　3、可以继承多个构造函数属性（call多个）。
// 　　　　　　　4、在子实例中可向父实例传参。
// 　　　　缺点：1、只能继承父类构造函数的属性。
// 　　　　　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
// 　　　　　　　3、每个新实例都有父类构造函数的副本，臃肿。