function flat(arr) {
  arr.forEach((value, index, array) => {
    if (value instanceof Array) {
      array.splice(index, index + 1, ...flat(arr[index]));
    }
  })
  return arr;
}

var arr = [[1, 2], 3]
console.log(arr)