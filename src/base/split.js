function get(obj,target){
  const arr=target.split('.')
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]!==undefined){
      obj=obj[arr[i]]
    }
  }
  return obj
}
const str='a.b.c'
const obj={
  a:{
    b:{
      c:123
    }
  }
}
const obj1=Object.create(obj)
console.log("get(obj1,str)", get(obj1,str))