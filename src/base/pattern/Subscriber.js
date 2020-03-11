let salesOffices={}
salesOffices.books=[]

salesOffices.listen=function(fn){
  this.books.push(fn)
}
salesOffices.trigger=function(){
  for(let i=0,fn;(fn=salesOffices.books[i++]);){
    fn.apply(this,  arguments)
  }
}

salesOffices.listen(function (price, squareMeter) {
  // 购买者a
  console.log(`价格是：${price}`)
  console.log(`面积大小：${squareMeter}`)
})
salesOffices.listen(function (price, squareMeter) {
  // 购买者b
  console.log(`价格是：${price}`)
  console.log(`面积大小：${squareMeter}`)
})

salesOffices.trigger(2000000, 88)
salesOffices.trigger(3000000, 128)