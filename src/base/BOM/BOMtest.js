function onclickHandler(){
  console.log(window.screenLeft)
}

function openNewWindow(){
  window.open('https://www.baidu.com/')
}

window.onload=function(){
  console.log(window.location.hash)
  console.log(window.location.href)
  console.log(window.navigator.appVersion)
  console.log(window.navigator.appCodeName)
}