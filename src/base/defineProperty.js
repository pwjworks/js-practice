var a={
  name:'',
  _name:'tom'
}
Object.defineProperty(a,'name',{
  writable:false
})
a.name='b'
console.log(a.name)
Object.defineProperties(a,{
  name:{
    get:function(){
      return this._name
    },
    set:function(newValue){
      console.log(newValue)
      this._name=newValue
    }
  }
})
a.name='c'
console.log(a.name)
