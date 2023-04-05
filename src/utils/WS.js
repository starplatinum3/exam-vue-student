
// const ip='localhost';
// const port='9999';


const ip='localhost';
// const port='8084';
const port='8080';

// const ip='81.68.204.179';
// const port='8080';


const domain=`ws://${ip}${port===''||port==null?'':(':'+port)}`
const domainHttp=`http://${ip}${port===''||port==null?'':(':'+port)}`
console.log("ws domain");
console.log(domain);

let sendPrefix="app"
var WBT = function (obj) {
  /*
  websocket接口地址
  1、http请求还是https请求 前缀不一样
2、ip地址host
  3、端口号
  */
  const config = obj ? obj : {}

  //接口地址url
  this.url = config.ip || domain;
  //socket对象
  this.socket;
  //心跳状态  为false时不能执行操作 等待重连
  this.isHeartflag = false;
  //重连状态  避免不间断的重连操作
  this.isReconnect = false;
  //自定义Ws连接函数：服务器连接成功
  this.onopen = ((e) => {
    this.isHeartflag = true;
    console.log(e)
  })
  //自定义Ws消息接收函数：服务器向前端推送消息时触发
  this.onmessage = ((e) => {
    //处理各种推送消息
// console.log(message)
    this.handleEvent(message)
  })
  //自定义Ws异常事件：Ws报错后触发
  this.onerror = ((e) => {
    console.log('error')
    this.isHeartflag = false;
    this.reConnect();
  })
  //自定义Ws关闭事件：Ws连接关闭后触发
  this.onclose = ((e) => {
    this.reConnect()
    console.log('close')
  })
  //初始化websocket连接
  this.initWs()
}

WBT.prototype.initWs = function () {
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  if (!window.WebSocket) { // 检测浏览器支持
    console.error('错误: 浏览器不支持websocket');
    return;
  }
  var that = this;
  this.socket = new WebSocket(this.url); // 创建连接并注册响应函数
  this.socket.onopen = function (e) {
    that.onopen(e);
  };
  this.socket.onmessage = function (e) {
    that.onmessage(e);
  };
  this.socket.onclose = function (e) {
    that.onclose(e);
    that.socket = null; // 清理
  };
  this.socket.onerror = function (e) {
    that.onerror(e);
  }
  return this;
}
WBT.prototype.reConnect = function () {
  if (this.isReconnect) return;
  this.isReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  setTimeout(function () {
    this.initWs()
    this.isReconnect = false;
  }, 2000);
}

WBT.prototype.handleEvent = function (message) {
  const action = message.action;
  const retCode = message.params.retCode.id;
  //根据action和retCode处理事件
  // console.log(action,retCode)
  if (this.handleAction[action][retCode]) this.handleAction[action][retCode]();
}
//事务处理 根据action
WBT.prototype.handleAction = {
  //登录反馈
  'loginRsp': {
    '0': function () {
      console.log(0)
    },
    '3': function () {
      console.log(3)
    }
  }
}

let defaultParam = {
  action: "loginReq",
  tsxId: "1",
  params:{}
}
WBT.prototype.login = function (params) {
  //ws还没建立连接（发生错误）
  if (!this.isHeartflag) {
    console.log('连接中……')
    return;
  }
  let loginParam = defaultParam;
  loginParam.params = params;
  //组装json数据
  this.socket.send(JSON.stringify(loginParam))
}

let wsSuffix="/chat"

export default {
  WBT,
  getWBT(){return new WBT()},
  domain,
  ip,
  port,
  domainHttp,
  sendPrefix,
  wsSuffix
};
