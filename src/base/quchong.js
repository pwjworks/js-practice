var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

function unique1(arr) {
  return Array.from(new Set(arr))
}

console.log(unique1(arr))

function unique2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}

console.log(unique2(arr))

function unique3(arr) {
  let map = new Map()
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1)
      array.push(arr[i])
    }
  }
  return array
}

console.log(unique3(arr))