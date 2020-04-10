window.postMessage('data','http://A.com')
window.addEventListener('message',function(event){
  console.log(event.origin)
  console.log(event.source)
})