<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      size="small"
      label-width="100px"
    >
      <el-form-item label="类型" prop="type">
        <el-select
          v-model="queryParams.type"
          clearable
          placeholder="请选择类型"
        >
          <el-option value="1" label="全服执行SQL"></el-option>
          <el-option value="2" label="查看日志"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SQL语句">
        <el-input
          type="textarea"
          :rows="3"
          v-model="queryParams.msg"
          placeholder="请输入SQL语句"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="submit"
          >提 交</el-button
        >
      </el-form-item>
    </el-form>
    <el-button type="" @click="init">initWs</el-button>
  </div>
</template>
  <script>
// import { getToken } from "@/utils/auth";
import common from "@/utils/common";
export default {
  data() {
    // Common
    // common.backendUrl
    // common. backendIpPort
    // backendUrl
    return {
      // 此处为websocket地址, 8080是springboot监听的web端口
      // /websocket/execute与controller中的 ServerEndpoint 的value值保持一致
    //   WebsocketPage
    // /webSocket/addOrder/
      // path: `ws://${common. backendIpPort}/websocket/execute`,
        //  path: `ws://${common. backendIpPort}/webSocket/addOrder/1`,
           path: `ws://${common. backendIpPort}/webSocket/1`,
          //  path: `ws://${common. backendIpPort}/webSocket`,
          //  path: `http://${common. backendIpPort}/webSocket/1`,
      socket: "",
      loading: false,
      queryParams: {},
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    initWs(){

      this.init()
    },
    init: function () {
      if (typeof WebSocket === "undefined") {
        console.log("浏览器不支持websocket");
      } else {
        //涉及到spring security鉴权，此处加上token (正常的http请求可以设置请求头，
        // websocket无法设置，只好把token放在Sec-WebSocket-Protocol中)
        // let token = getToken();
        // this.socket = new WebSocket(this.path, [token]);
        this.socket = new WebSocket(this.path);
        this.socket.onopen = this.open;
        this.socket.onerror = this.error;
        this.socket.onmessage = this.getMessage;
      }
    },
    open: function () {
      console.log("websocket连接成功");
    },
    error: function (error) {
      console.log("websocket连接错误", error);
    },
    getMessage: function (msg) {
      console.log("收到消息,", msg);
    },
    send: function (params) {
      this.socket.send(params);
    },
    close: function (e) {
      console.log("websocket连接关闭");
    },
    submit: function () {
      this.loading = true;
      let params = JSON.stringify(this.queryParams);
      this.send(params);
      console.log("发送消息,", params);
      this.loading = false;
    },
  },
  destroyed() {
    this.socket.onclose = this.close;
  },
};
</script>
