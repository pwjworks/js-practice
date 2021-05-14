// 扩展运算符
console.log(...[1, 2, 3]);
console.log([1, 2, 3]);
const a1 = [1, 2];
// 写法一
// const a2 = [...a1];
// 写法二
const [...a2] = a1;
console.log(a2);

console.log([...'hello'])

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

console.log(Array.from(arrayLike));

let test = new Array(10).fill(0);
console.log(test);

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}

console.log([...['a', 'b'].keys()]);