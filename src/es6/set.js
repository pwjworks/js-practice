const s = new Set();

[1, 2, 2, 3, 4, 5, 4, 5].forEach(x => s.add(x));

console.log([...s]);

let arr = [1, 2, 3, 4, 4, 5];
arr = [...new Set(arr)];
console.log(arr);


console.log(s.has(1));

let a = new Set([1, 2, 3]);
let b = new Set([3, 2, 4]);

let union = new Set([...a, ...b]);
console.log(union);

let inersect = new Set([...a].filter(x => b.has(x)));
console.log(inersect);

// weakset
const foos = new WeakSet();
class Foo {
    constructor() {
        foos.add(this);
    }
    method() {
        if (!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
        }
    }
}