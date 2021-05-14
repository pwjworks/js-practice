// 默认值
function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

function foo({ x, y = 5 } = {}) {
    console.log(x, y);
}

foo() // undefined 5

// 箭头函数
let f = () => 5;
console.log(f())

// 正常函数写法
// [1, 2, 3].map(function (x) {
//     return x * x;
// });

// 箭头函数写法
console.log([1, 2, 3].map(x => x * x));

// 没有this对象
// 不可以对箭头函数使用new
// 不可以使用arguments对象
// 不可用作generator
function foo1() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
foo1.call({ id: 42 });
