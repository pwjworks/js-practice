class Man {
  constructor (name) {
    this.name = name
  }

  alertName () {
    console.log(this.name)
  }
}
class Factory {
  static create (name) {
    return new Man(name)
  }
}
Factory.create('man').alertName()
