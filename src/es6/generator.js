function* HelloGenerator(){
  yield 'Hello'
  yield 'world'
  return 'ending'
}
var hw = HelloGenerator()
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

function sum(x,y,z){
  return x+y+z
}
const nums=[1,2,3];

console.log(sum(...nums));

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable]

function* f(){
  for(var i=0;true;i++){
    var reset=yield i
    if(reset){
      i=-1
    }
  }
};

var g=f();
console.log(g.next())
console.log(g.next())
console.log(g.next(true))
console.log(g.next(true))
console.log(g.next(true))
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

function* foo(x) {
  var y = 2 * (yield(x + 1));
  var z = yield(y / 3);
  return (x + y + z);
}

var a = foo(5);
console.log(a.next())
console.log(a.next(3))
console.log(a.next())
console.log(a.next())

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = {
  first: 'Jane',
  last: 'Doe'
};

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}