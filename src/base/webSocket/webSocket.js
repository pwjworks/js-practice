var ws=new WebSocket('wss://echo.websocket.org')

ws.onopen=function(evt){
  ws.send('some message')
}

ws.onmessage=function(evt){
  console.log(evt.data)
}

ws.onclose=function(evt){
  console.log('连接关闭')
}