var arr=[3,9,4,3,6,0,9]
var sum=arr.reduce(function(prev,cur){
  return prev+cur
},0)
console.log("sum", sum)

Array.prototype.myReduce=function(callback,initialValue){
  let initialArr=this
  let arr=initialArr.concat()
  if(initialValue){
    arr.unshift(initialValue)
  }
  let index,newValue
  while(arr.length>1){
    index=initialArr.length-arr.length+1
    newValue=callback.call(null,arr[0],arr[1],index,initialArr)
    arr.splice(0,2,newValue)
  }
  return newValue
}
var sum1 = arr.myReduce(function (prev, cur) {
  return prev + cur
}, 0)
console.log("sum", sum1)
