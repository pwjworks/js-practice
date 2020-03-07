class Plug {
  getName () {
    return '插头'
  }
}
class Target {
  constructor () {
    this.plug = new Plug()
  }

  getName () {
    return this.plug.getName() + '适配器转二脚接头'
  }
}
const target = new Target()

target.getName()
console.log('target.getName()', target.getName())
