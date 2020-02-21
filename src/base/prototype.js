// 每个函数对象都有一个prototype属性，指向该函数的原型对象
function Person (age) {
  this.age = age
}
Person.prototype.name = 'Tom'
Person.prototype.age = 25
var person1 = new Person()
var person2 = new Person()
console.log(person1.name)
console.log(person2.name)

// __proto__
// 除了null以外每个对象都有的属性，指向该对象的原型
// eslint-disable-next-line no-proto
console.log(person1.__proto__ === Person.prototype)

// constructor
// 每个原型对象都有一个constructor属性，指向该关联的构造函数
console.log(Person === Person.prototype.constructor)
// getPrototypeOf
console.log(Object.getPrototypeOf(person1) === Person.prototype)

// 当读取属性读取不到的时候，如果找不到，就会查找与对象关联的原型中的属性，一直到最顶层为止
var person3 = new Person(20)
console.log(person3.age)
delete person3.age
console.log(person3.age)
person3.age = 20
console.log(person3.age)
delete person3.age
console.log(person3.age)
// eslint-disable-next-line no-proto
console.log(Object.prototype.__proto__ === null)
