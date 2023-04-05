<template>
  <!-- QuestionEdit -->
  <div style="line-height: 1.8">
    <div v-if="qType == 1" v-loading="qLoading">
      <div class="q-title" v-html="question.title" />
      <div>
        <!-- class="q-content" -->
        <el-radio-group
          v-model="answer.content"
          @change="answer.completed = true"
        >
          <!-- el-radio   文字可以复制 -->
          <el-radio
            class="subject-options optionItem subject-options-niuke"
            v-for="item in question.items"
            :key="item.prefix"
            :label="item.prefix"
          >
            <span class="question-prefix">{{ item.prefix }}.</span>
            <span v-html="item.content" class="q-item-span-content"></span>
          </el-radio>
        </el-radio-group>
      </div>
    </div>
    <div v-else-if="qType == 2" v-loading="qLoading">
      <div class="q-title" v-html="question.title" />
      <div class="q-content">
        <el-checkbox-group
          v-model="answer.contentArray"
          @change="answer.completed = true"
        >
          <el-checkbox
            v-for="item in question.items"
            :label="item.prefix"
            :key="item.prefix"
          >
            <span class="question-prefix">{{ item.prefix }}.</span>
            <span v-html="item.content" class="q-item-span-content"></span>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div v-else-if="qType == 3" v-loading="qLoading">
      <div
        class="q-title"
        v-html="question.title"
        style="display: inline; margin-right: 10px"
      />
      <span style="padding-right: 10px">(</span>
      <el-radio-group
        v-model="answer.content"
        @change="answer.completed = true"
      >
        <el-radio
          v-for="item in question.items"
          :key="item.prefix"
          :label="item.prefix"
        >
          <span v-html="item.content" class="q-item-span-content"></span>
        </el-radio>
      </el-radio-group>
      <span style="padding-left: 10px">)</span>
    </div>
    <div v-else-if="qType == 4" v-loading="qLoading">
      <div class="q-title" v-html="question.title" />
      <div>
        <el-form-item
          :label="item.prefix"
          :key="item.prefix"
          v-for="item in question.items"
          label-width="50px"
          style="margin-top: 10px; margin-bottom: 10px"
        >
          <el-input
            v-model="answer.contentArray[item.prefix - 1]"
            @change="answer.completed = true"
          />
        </el-form-item>
      </div>
    </div>
    <!-- 简单答题 -->
    <div v-else-if="qType == 5" v-loading="qLoading">
      <!-- answer -->
      <!-- video href  -->
      <video :src="answer.videoLink"></video>
      <div class="q-title" v-html="question.title" />
      <!-- doDrawIoWork -->
      <el-button type="" @click="doDrawIoWork">进行画图</el-button>
      <el-button type="" @click="docShow">编辑答案</el-button>
      <!-- // docShow -->

      <div>
        <el-input
        disabled
          v-model="answer.content"
          type="textarea"
          rows="5"
          @change="answer.completed = true"
        />
        <div @click="docShow" v-html="answer.content"></div>
      </div>
    </div>
    <div v-else></div>

    <el-dialog
      title=""
      width="1400px"
      @open="mountIframeDoc"
      :visible.sync="iframeDocShowing"
    >
      <iframe
        ref="myframe"
        id="myframe"
        class="iframeDoc"
        rameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        allowtransparency="yes"
        :src="docUrl"
      ></iframe>
    </el-dialog>
     <!-- src="http://localhost:3001" -->
    <!-- docUrl -->

    <el-button type="" @click="sendData">sendData</el-button>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import  ObjUtil  from "@/utils/ObjUtil";
import socketPublic from '@/utils/socketVuex.js'
import  common  from "@/utils/common";

export default {
  name: "QuestionShow",
  props: {
    question: {
      type: Object,
      default: function () {
        return {};
      },
    },
    answer: {
      type: Object,
      default: function () {
        // getQuestyoe
        return { id: null, content: "", contentArray: [] };
      },
    },
    qLoading: {
      type: Boolean,
      default: false,
    },
    qType: {
      type: Number,
      default: 0,
    },
    // iframeDocShowing:{
    //   type:Boolean,
    //   default:false
    // }
  },
  mounted() {
    let  docUrl="http://43.142.150.223:2323"
    // this.iframeMounted();
  },
  methods: {
    toDoSocket: function (data) {
      console.log("data");
      console.log(data);
      data = JSON.parse(data);
      if (data.success) {
      }
    },
    sendData() {
      let data = {
        value: "backSuccess",
        id: "vue",
        success: true,
      };
      this.sendMegToIframe(data);
    },

    mountIframeDoc() {
      // this.$nextTick(()=>{
      //   this.ul_Height=this.$refs.ulheight.offsetHeight
      // })
      this.$nextTick(() => {
        let myframe = this.$refs.myframe;
        console.log("myframe mountIframeDoc");
        console.log(myframe);
        const iframeWin = myframe.contentWindow;
        this.iframeWin = iframeWin;
      });
    },
    getUlHeight() {
      this.$nextTick(() => {
        let myframe = this.$refs.myframe;
        const iframeWin = myframe.contentWindow;
        this.iframeWin = iframeWin;
      });
    },

    sendMegToIframe(data) {
      // 向iframe传值
      // console.log("this.$refs");
      // console.log(this.$refs);
      // const mapFrame = this.$refs['myframe'];
      // const iframeWin = mapFrame.contentWindow;
      // if(!this.iframeWin){

      //   this.mountIframeDoc()
      // }
      let iframeWin = this.iframeWin;
      window.top.postMessage(
   
        data,
        "*"
      );


      // iframeWin.postMessage(
      //   // {
      //   //   value: 'backSuccess',
      //   //   id: 'vue',
      //   //   success: true
      //   // },
      //   data,
      //   "*"
      // );

      // setTimeout(()=>{
      //   let iframeWin=  this.iframeWin
      // iframeWin.postMessage(
      //   // {
      //   //   value: 'backSuccess',
      //   //   id: 'vue',
      //   //   success: true
      //   // },
      //   data,
      //   '*'
      // );
      // },20)
    },

    //方法：
    //  sendMegToIframe(data) {
    //       // 向iframe传值
    //       // console.log("this.$refs");
    //       // console.log(this.$refs);
    //       // const mapFrame = this.$refs['myframe'];
    //       // const iframeWin = mapFrame.contentWindow;
    //       if(!this.iframeWin){

    //         this.mountIframeDoc()
    //       }

    //       setTimeout(()=>{
    //         let iframeWin=  this.iframeWin
    //       iframeWin.postMessage(
    //         // {
    //         //   value: 'backSuccess',
    //         //   id: 'vue',
    //         //   success: true
    //         // },
    //         data,
    //         '*'
    //       );
    //       },20)

    //     },

    // ————————————————
    // 版权声明：本文为CSDN博主「※空白记忆√」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/qq_45316181/article/details/126661671

    doDrawIoWork() {},
    docShow() {
      this.iframeDocShowing = true;
      // console.log("this.content");
      // console.log(this.content);
      let content = this.answer.content;
      console.log("content docShow");
      console.log(content);
      //   if (data.type == 'init') {
      //   return
      // // }
      setTimeout(() => {
        // let  docUrl="http://localhost:3001"
     
        let docUrl=this.docUrl
        // var url =  "/ceshi.html?id="+111;
      
        // js  obj to query string
        let  data={
          type: "init",
          content,
        }
       let queryData=  ObjUtil.objectToQueryString(data)
       console.log("queryData");
       console.log(queryData);
      //  var url =  `${docUrl}?${queryData}`;
       var url =  `${docUrl}/${queryData}`;
// aaa.location=url;
console.log("url");
console.log(url);
// console.log("url");
// console.log(url);
// this.iframeWin.location=url;
// this.iframeWin.location.href=url;
// window.location.href = "XXX"

        this.sendMegToIframe({
          type: "init",
          content,
        });
        // let  dataStr=JSON.stringify(data)
        // console.log("dataStr sendMegToIframe");
        // console.log(dataStr);
        // this.$store.dispatch('webSocketSend', dataStr)        // 不分模块
        // socketPublic.dispatch('webSocketSend',dataStr);//初始化w
      }, 20);
      // this.$nextTick(()=>{
      //   this.sendMegToIframe({
      //     type:"init",
      //     content
      //   })
      // })
    },
    iframeMounted() {
      //获取iframe元素
      // let iFrame = this.$refs.myframe;
      // vue  往 iFrame 传数据
      // let
      // iFrame = document.getElementById('myframe')

      //iframe加载完毕后再发送消息，否则子页面接收不到message
      // iFrame.onload = function(){

      //   //iframe加载完立即发送一条消息
      //   iFrame.contentWindow.postMessage('MessageFromIndex1','*');

      // }
      // iframePage.html
      let data = {
        value: "backSuccess",
        id: "vue",
        success: true,
      };
      // this.
      // sendMegToIframe(data)

      //回调函数
      const receiveMessageFromIndex = (event) => {
        // console.log("receiveMessage from  xioo-docs/ ", event);
        console.log(new Date());
        let docContent = event.data.content;
        // data
  
        if(   event.data.type=="close"){
          console.log("docContent in on close");
        console.log(docContent);
          this.iframeDocShowing = false;
          answer.content=docContent
        }

        // event. 
     
        
       
      };

      //监听message事件
          // addEventListener<K extends keyof WindowEventMap>(type: K, 
          // listener: (this: Window, ev: WindowEventMap[K]) => any, 
          // options?: boolean | AddEventListenerOptions): void;

          // 　　3、useCapture:Boolean (default = false) 
          let useCapture=true
      window.addEventListener("message", receiveMessageFromIndex, useCapture);
    },
  },
  data() {
    // com 
    
    return {
      docUrl:common.docUrl,
      iframeWin: null,
      iframeDocShowing: false,
    };
  },
  watch: {
    'socketMsgs': {
       //处理接收到的消息
       handler: function() {
    	let that = this
    	that.toDoSocket(that.socketMsgs.data)
      }
    }
},
// methods: {
//       toDoSocket: function (data) {
//       data = JSON.parse(data);
//       if (data.success) {
//       }
//     },
// }
};
</script>

<style scoped>
.iframeDoc {
  width: 90vw;
  height: 90vh;
  border: medium none;
}
.optionItem {
  /* width:300px; */
  width: 938px;
}

.subject-options-niuke {
  margin-bottom: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 12px 20px 13px;
  background: #fff;
  display: block;
  word-break: break-all;
}

.subject-options-niuke:hover {
  color: #25bb9b;
}
</style>