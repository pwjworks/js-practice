function Animal(name) {
  this.name = name || 'animal'
  this.sleep = function () {
    console.log(this.name + '正在睡觉')
  }
  this.say = function () {
    console.log(this.name)
  }
}
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food)
}

function Cat(name) {
  Animal.call(this) //! important
  this.name = name || 'Tom'
}
Cat.prototype = new Animal('cat') //! important
Cat.prototype.constructor = Cat
var cat = new Cat()
console.log(cat.name)
cat.sleep()
cat.eat('fish');
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
console.log(Cat.prototype)
console.log(Cat.prototype.constructor)
