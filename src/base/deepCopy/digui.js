function isObj (obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function deepCopy (obj) {
  const tempObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    tempObj[key] = isObj(obj[key]) ? deepCopy(obj[key]) : obj[key]
  }
  return tempObj
}

// test
const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: 2
  }
}

const obj2 = deepCopy(obj1)
console.log('obj2', obj2)
console.log('obj1===obj2', obj1 === obj2)
