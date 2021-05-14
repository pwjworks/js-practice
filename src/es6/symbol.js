let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"

let mySymbol = Symbol();

let a = {};
a[mySymbol] = 'Hello!';

console.log(a[mySymbol]);

const obj = {};
const foo = Symbol('foo');

obj[foo] = 'bar';
obj[a] = 'hello';

for (let i in obj) {
    console.log(i);
}


let mys1 = Symbol.for('foo');
let mys2 = Symbol.for('foo');

console.log(mys1 === mys2) // true