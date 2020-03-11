const obj = {
  start: [1, 3, 2],
  end: [7, 9, 8],
  [Symbol.iterator] () {
    const self = this
    let index = 0
    const arr = self.start.concat(self.end)
    const len = arr.length
    return {
      next () {
        if (index < len) {
          return {
            value: arr[index++],
            done: false
          }
        } else {
          return {
            value: arr[index++],
            done: true
          }
        }
      }
    }
  }
}

for (const key of obj) {
  console.log(key)
}
