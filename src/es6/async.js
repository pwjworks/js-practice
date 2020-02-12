function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
//   await timeout(ms);
//   console.log(value);
// }

// asyncPrint('hello world', 1000);
// console.log("hello")

setTimeout(() => {
  console.log("hello !!!!!")
}, 1000);