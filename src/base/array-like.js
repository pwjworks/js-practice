const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}

var arr1 = [].slice.call(arrayLike)
console.log(arr1)
const arr2 = Array.from(arrayLike)
console.log(arr2)
