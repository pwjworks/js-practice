var PromiseAll = function (promises) {
  let results = [];
  let promiseCount=0;
  let promisesLength=promises.length;
  return new Promise((resolve)=>{
    for(let val of promises){
      Promise.resolve(val).then(function(res){
        promiseCount++;
        results.push(res);
        if(promiseCount===promisesLength){
          return resolve(results);
        }
      })
    }
  }).catch((err)=>{
    console.log(err);
  })
}

var p1=Promise.resolve('1');
var p2=Promise.resolve('2');
var p3=Promise.resolve('3');
PromiseAll([p1,p2,p3]).then((results)=>{
  console.log(results);
})