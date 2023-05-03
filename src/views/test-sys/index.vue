<template>
 <!-- D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\test-sys\index.vue -->

 <div>
  D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\DrawIo.vue
  <el-button type="" @click="DrawIoGo">DrawIoGo</el-button>
   <el-button type="" @click="toWebsocketPage">toWebsocketPage</el-button>
<!--   D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\WebsocketPage.vue-->
<el-button type="" @click="G6TreeTest">G6TreeTest</el-button>
<!-- testSysGo -->
<!-- G6TreeTestGetVal -->
<el-button type="" @click="G6TreeTestGetVal">G6TreeTestGetVal</el-button>

<!-- D:\proj\bishe\exam-vue-student\src\views\G6TreeTest.vue -->
<el-button type="" @click="toChatRoom">toChatRoom</el-button>
<!-- D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\ChatRoom.vue -->
  D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\test-sys\index.vue
  java
  
  <!-- http://localhost:9555/api/file/list -->
  <el-button type="" @click="file_list">file_list</el-button>
  <div>
    file_list_show
  {{file_list_show}}
  </div>

  <div  :key="file.id" @click="file_download(file.id)"
   v-for="file in  file_list_show">
    <!-- {{file}}
    {{file.id}} -->
    <a :href="file_download_url(file.id)">    {{file.fileName}}</a>
  </div>

  http://localhost:9555/api/file/download/{id}
 </div>
</template>

<script>
import examPaperAnswerApi from '@/api/examPaperAnswer'
import { mapState, mapGetters } from "vuex";
import indexApi from "@/api/dashboard";
// NiuK
import axios from 'axios'
import NiuKeExam from "@/components/NiuKeExam";
// import { log } from 'console'
import common from '@/utils/common'
export default {
  components: { NiuKeExam },
  data() {
    return {
      queryParam: {
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: false,
      tableData: [],
      total: 0,
      selectItem: {
        systemScore: '0',
        userScore: '0',
        doTime: '0',
        paperScore: '0',
        questionCorrect: 0,
        questionCount: 0
      },

      companyList: [
        {
          examName: "中兴软件类笔试试卷A",
        },
      ],
      file_list_show:[],
      fixedPaper: [],
      timeLimitPaper: [],
      pushPaper: [],
      loading: false,
      taskLoading: false,
      taskList: [],
      options: [
        {
          value: "选项1",

          label: "黄金糕",
        },
        {
          value: "选项2",

          label: "双皮奶",

          disabled: true,
        },
        {
          value: "选项3",

          label: "蚵仔煎",
        },
        {
          value: "选项4",

          label: "龙须面",
        },
        {
          value: "选项5",

          label: "北京烤鸭",
        },
      ],

      value: "",

      // 作者：毛茸茸的狗
      // 链接：https://www.jianshu.com/p/77d7af27adc3
      // 来源：简书
      // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    };
  },
  created() {

    this.file_list()

  },
  methods: {
    G6TreeTest(){
this.$router.push({ path: "/test-sys/G6TreeTest" });
    
    },
    G6TreeTestGetVal(){
this.$router.push({ path: "/test-sys/G6TreeTestGetVal" });
    },
    
    file_download_url(id){
     return  `${common.fileServerBaseUrl}/api/file/download/${id}?pageNo=${1}&pageSize=${10}`
    },
    // http://localhost:9555/api/file/download/{id}
    file_download(id){
      // http://localhost:9555/api/file/list
      // axios.get 路径 参数
      // (2条消息) axios四种方式GET/POST/DELETE/PUT的参数传递_Akimoto Hiroshi的博客-CSDN博客_axios get
// https://blog.csdn.net/dyw3390199/article/details/111401089
// let  fileServerBaseUrl= 'http://localhost:9555'

      axios.get(`${common.fileServerBaseUrl}/api/file/download/${id}?pageNo=${1}&pageSize=${10}`,
       {
            pageNo: 1,
            pageSize: 999
        },)
      // examPaperAnswerApi.pageList(this.queryParam)
      .then(data => {
        console.log("data");
        console.log(data);
        // let  file_list_show= data.data.data
        // this.file_list_show=file_list_show
        // const re = data.response
        // _this.tableData = re.list
        // _this.total = re.total
        // _this.queryParam.pageIndex = re.pageNum
        // _this.listLoading = false
      })
    },

    DrawIoGo(){

      this.$router.push({ path: "/test-sys/DrawIo" });
    },
    toChatRoom(){
      this.$router.push({ path: "/test-sys/ChatRoom" });
},
    toWebsocketPage(){
      this.$router.push({ path: "/test-sys/WebsocketPage" });
    },

    file_list(){
      // http://localhost:9555/api/file/list
      // axios.get 路径 参数
      // (2条消息) axios四种方式GET/POST/DELETE/PUT的参数传递_Akimoto Hiroshi的博客-CSDN博客_axios get
// https://blog.csdn.net/dyw3390199/article/details/111401089
let  fileServerBaseUrl= 'http://localhost:9555'
      axios.get(`http://localhost:9555/api/file/list?pageNo=${1}&pageSize=${10}`,
       {
            pageNo: 1,
            pageSize: 999
        },)
      // examPaperAnswerApi.pageList(this.queryParam)
      .then(data => {
        console.log("data");
        console.log(data);
        let  file_list_show= data.data.data
        this.file_list_show=file_list_show
        // const re = data.response
        // _this.tableData = re.list
        // _this.total = re.total
        // _this.queryParam.pageIndex = re.pageNum
        // _this.listLoading = false
      })
    },
    search () {
      this.listLoading = true
      let _this = this
      examPaperAnswerApi.pageList(this.queryParam).then(data => {
        const re = data.response
        _this.tableData = re.list
        _this.total = re.total
        _this.queryParam.pageIndex = re.pageNum
        _this.listLoading = false
      })
    },

    // record/index
    zhongxinGo() {
      console.log("zhongxinGo");
    },
    record_index_Go() {
      // console.log("zhongxinGo");
      this.$router.push({ path: "/record/index" });
    },
    goToWeb() {
      // 是相对的
      window.location = "https://www.bilibili.com/";
      // this.$router.push("https://www.bilibili.com/"  );
    },
    statusTagFormatter(status) {
      return this.enumFormat(this.statusTag, status);
    },
    statusTextFormatter(status) {
      return this.enumFormat(this.statusEnum, status);
    },
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      statusEnum: (state) => state.exam.examPaperAnswer.statusEnum,
      statusTag: (state) => state.exam.examPaperAnswer.statusTag,
    }),
  },
};
</script>

<style lang="scss" scoped>
/* 滚动条所在容器 */
.scroll-container {
  margin: 10px;
  width: 500px;
  height: 150px;
  overflow: overlay;
  background-color: #eee;
  white-space: nowrap;
}

/* 滚动条整体 */
.scroll-container::-webkit-scrollbar {
  height: 20px;
  width: 20;
}
/* 两个滚动条交接处 -- x轴和y轴 */
.scroll-container::-webkit-scrollbar-corner {
  background-color: transparent;
}

/* 滚动条滑块 */
.scroll-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

/* 滚动条轨道 */
.scroll-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}

/* 滚动条两端按钮 */
.scroll-container::-webkit-scrollbar-button {
}

.radius-problem {
  background: #fc9;
  border-radius: 15px;
  // padding:10px;
  width: 300px;
  //  height:50px;
  height: 100px;
}

.index-title-h3 {
  font-size: 22px;
  font-weight: 400;
  color: #1f2f3d;
  border-left: solid 10px #2ce8b4;
  padding-left: 10px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 50%;
  height: 80%;
  display: block;
  margin: 20px auto 10px auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
}

.exam-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.examItem {
  // width: 100%;
  // height: 100%;
  // width:200px;
  width: 400px;
  // width:150px;
  height: 150px;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  // padding: 10px;
  // border: 1px solid #ccc;
  border-radius: 10px;
  // margin: 10px;
  // cursor: pointer;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.flex-row {
  display: flex;
  direction: row;
}

.exam-name {
  text-decoration: none;
  color: black;

  margin-left: 20px;
}
/*flex垂直居中对齐*/
.align-center-vertical {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.hotNum {
  float: right;
  margin-right: 10px;
  margin-bottom: 2px;
  font-size: 10px;
}

.hoverUpShaow
// .test-shadow
{
  // background-color: rgb(180, 224, 241);
  // width: 200px;
  // height: 300px;
  // margin-top:10px;
  margin-top: 2px;
}

// hover 里面的 链接
// .test-shadow:hover
.hoverUpShaow:hover {
  margin-top: 0px; /*和hover的margin-top有对比，原无30,现在0，相当于上移了,30px*/
  box-shadow: 0 0 20px 2px #918f8f; /*盒子阴影*/
  transition: all 0.5s; /*持续时间*/
}
.hoverUpShaow:hover .exam-name {
  color: #2ce8b4;
}

// ————————————————
// 版权声明：本文为CSDN博主「ddx2019」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/ddx2019/article/details/106466491

// /deep/.el-input__inner {
//   // background-color: rgba(108,113,127,30%);
//   // border: 1px solid rgba(13, 43, 81, 0.1);
//   // color: rgba(116, 116, 116, 1);
//   padding: 0 0px 0 5px;
//   font-size: 12px;
//   border-radius: 0px;
// }

// // 找到响应的代码添加样式即可
// .el-input--suffix:hover .el-input__inner {
//       //  border: 1px solid #dcdfe6 !important;
//        border: 1px solid green !important;
//    }

// /deep/.el-select-dropdown{
//   background-color: rgb(51, 55, 64)!important;
//   /* background-color: #f0f; */
//   color: rgba(116, 116, 116, 1)!important;
//   border: none;
// }
</style>
<style>
/* .el-select:hover .el-input__inner {
       border-color: #14eb00!important;
       border-width: 2px;
    } */

.IndividualPracticeList {
}
</style>
