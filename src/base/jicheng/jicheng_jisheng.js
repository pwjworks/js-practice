function Animal (name) {
  this.name = name || 'animal'
  this.sleep = function () {
    console.log(this.name + '正在睡觉')
  }
  this.say = function () {
    console.log(this.name)
  }
}
Animal.prototype.eat = (food) => {
  console.log(this.name + '正在吃' + food)
}

function Cat (name) {
  Animal.call(this)
  this.name = name || 'Tom'
}

(function () {
  var Super = function () {}
  Super.prototype = Animal.prototype
  Cat.prototype = new Super()
})()

var cat = new Cat()
console.log(cat.name)
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
