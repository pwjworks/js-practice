class Singleton {
}
Singleton.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()
console.log(s1 === s2)
