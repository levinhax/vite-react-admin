var webSocket = null
var globalCallback = null
var lockReconnect = false // 避免重复连接

// 初始化websocket
function initWebSocket(url) {
  if ('WebSocket' in window) {
    console.log('创建socket对象')
    webSocket = new WebSocket(url)
  } else {
    console.log('该浏览器不支持websocket!')
  }
  // 打开
  webSocket.onopen = function () {
    webSocketOpen()
  }
  // 收信
  webSocket.onmessage = function (e) {
    webSocketOnMessage(e)
  }
  // 关闭
  webSocket.onclose = function () {
    webSocketClose()
    reconnect(url)
  }
  // 连接发生错误的回调方法
  webSocket.onerror = function () {
    console.log('WebSocket连接发生错误')
    reconnect(url)
  }
}

// 连接socket建立时触发
function webSocketOpen() {
  console.log('WebSocket连接成功')
}

// 客户端接收服务端数据时触发,e为接收的数据对象
function webSocketOnMessage(e) {
  const data = JSON.parse(e.data)
  globalCallback(data)

  /*在此函数中还可以继续根据项目需求来写其他东西。 比如判断用户登录是否失效*/
}

// 发送数据
function webSocketSend(data, callback) {
  webSocket.send(JSON.stringify(data)) //在这里根据自己的需要转换数据格式
  callback()
}

// 关闭socket
function webSocketClose() {
  if (webSocket.readyState === 1) {
    webSocket.close()
    console.log('对话连接已关闭')
  }
}

// 在其他需要socket地方调用的函数，用来发送数据及接受数据
async function sendSock(agentData, callback) {
  globalCallback = callback
  // 考虑到socket连接可能中断或者其他的因素，可以重新发送此条消息
  switch (webSocket.readyState) {
    // CONNECTING：值为0，表示正在连接
    case webSocket.CONNECTING:
      console.log(' webSocket.CONNECTING: ', webSocket.CONNECTING)
      setTimeout(() => {
        webSocketSend(agentData, callback)
      }, 1000)
      break
    // OPEN：值为1，表示连接成功
    case webSocket.OPEN:
      console.log('webSocket.OPEN: ', webSocket.OPEN)
      webSocketSend(agentData, callback)
      break
    // CLOSING：值为2，表示连接正在关闭
    case webSocket.CLOSING:
      console.log('webSocket.CLOSING: ', webSocket.CLOSING)
      setTimeout(() => {
        webSocketSend(agentData, callback)
      }, 1000)
      break
    // CLOSED：值为3，表示连接已经关闭，或者打开连接失败
    case webSocket.CLOSED:
      // do something
      break
    default:
      // this never happens
      break
  }
}

function reconnect(url) {
  if (lockReconnect) {
    return
  }
  let tt
  lockReconnect = true
  //没连接上会一直重连，设置延迟避免请求过多
  tt && clearTimeout(tt)
  tt = setTimeout(function () {
    initWebSocket(url)
    lockReconnect = false
  }, 4000)
}

// 将初始化socket函数、发送（接收）数据的函数、关闭连接的函数export出去
export default {
  initWebSocket,
  webSocketClose,
  sendSock,
}
