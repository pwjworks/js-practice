function jsonp(url,data,callbackName){
  data.callback=callbackName?callbackName:'callback'
  let paramArr=[]
  for(let key in data){
    paramArr.push(`${data}=${data[key]}`)
  }
  let script=document.createElement('script')
  let body=document.getElementsByTagName('body')[0]
  script.src=url+'?'+paramArr.join('&')
  body.appendChild(script)
  return new Promise((resolve,reject)=>{
    window[callbackName]=(data)=>{
      resolve(data)
      document.body.removeChild(script)
    }
  })
}