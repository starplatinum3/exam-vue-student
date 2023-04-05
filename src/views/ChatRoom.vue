<template>
  <div>
    <input type="text" v-model="text" />
    <button @click="sendMessage">发送消息</button>
    <div class="bubble"></div>
    <div>
      <div v-for="(data, key) in datas" :key="key">
        {{ data.content }}
      </div>
    </div>
  </div>
</template>
  <script>
import SockJS from "sockjs-client";

import Stomp from "webstomp-client";
// import WS from "../js/webscoket/WS";
import WS from "@/utils/WS";
import common from "@/utils/common";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-student\src\utils\WS.js
export default {
  name: "ChatRoom",
  data() {
    return {
      text: "",
      datas: [],
      stompClient: null,
    };
  },
  mounted() {
    if ("WebSocket" in window) {
      this.initWebSocket();
    } else {
      alert("当前浏览器 Not support websocket");
    }
  },
  methods: {
    sendMessage() {
      console.log("sendMessage");
      this.stompClient.send("/app/hello", JSON.stringify(this.text), {});
    },
    initWebSocket() {
      this.connection();
    },
    connection() {
      console.log("connection");

      //   const socket = new SockJS(this.$baseUrl + '/chat')
      // common. backendIpPort
      // common.backendHttp
      let url =    common.backendHttp + "/chat";

      // let url = WS.domainHttp + "/chat";
      console.log("链接 的 url");
      console.log(url);
      const socket = new SockJS(url);
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, (frame) => {
        this.stompClient.subscribe("/topic/greetings", (greeting) => {
          console.log("接受消息");
          console.log(JSON.parse(greeting.body));
          this.datas.push(JSON.parse(greeting.body));
        });
      });
    },
  },
};
</script>
  
  <style scoped>
</style>
  