Array.prototype.map = function (callback) {
  const array = this
  return array.reduce((acc, cur, index) => {
    acc.push(callback(cur, index, array))
    return acc
  }, [])
}