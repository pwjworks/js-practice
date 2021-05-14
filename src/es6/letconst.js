// 作用域
var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[6]();

let b = []
for (let i = 0; i < 10; i++) {
    b[i] = function () {
        console.log(i);
    }
}
b[6]();

// 不存在变量提升
console.log(foo)
var foo = 2;

// console.log(bar)
let bar = 1;


// 暂时性死区
var tmp = 123;
if (true) {
    tmp = 'abc';
    // let tmp; !ERROR
}

function mybar(x = y, y = 2) {
    return [x, y];
}
// mybar(); // 报错

// 不允许重复声明
function func() {
    // let a = 10;
    var a = 1;
}


//块级作用域
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined

// 块级作用域与函数声明

function f() { console.log('I am outside!'); }

(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    // f();
}());

// 第一种写法，报错
// if (true) let x = 1;

// 第二种写法，不报错
if (true) {
    let x = 1;
}

// =======================================
const myfoo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
myfoo.prop = 123;

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((keys, i) => {
        if (typeof obj[keys] === 'object') {
            constantize(obj[keys]);
        }
    });
};
