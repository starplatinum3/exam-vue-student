<template>
  <div style="margin-top: 10px">

    <el-row>
      <el-carousel :interval="5000" arrow="always" type="card">
        <el-carousel-item>
          <!-- 点击图片 去一个新的页面 ，vue  -->
           <!-- src="@/assets/carousel/1.png" -->
           <!-- src="@/assets/carousel/1.png" -->
           <!-- src="@/assets/carousel/1.png" -->
           <!-- "D:\download\books.jpg" -->
          <img
            href="https://www.bilibili.com/"
            @click="goToWeb"
         
            src="http://139.196.8.79/images/books.jpg"
            class="carousel-img"
          />
          <!-- "D:\miku_sleep.jpg" -->
        </el-carousel-item>
        <el-carousel-item>
          <!-- /home/mqp/image/images/do_homework.jpg -->
          <!-- <img src="@/assets/carousel/2.png" class="carousel-img" /> -->
          <img src="http://139.196.8.79/images/do_homework.jpg" class="carousel-img" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- "D:\download\many_tables.jpg" -->
          <img src="http://139.196.8.79/images/many_tables.jpg" class="carousel-img" />
          <!-- <img src="@/assets/carousel/3.png" class="carousel-img" /> -->
        </el-carousel-item>
        <el-carousel-item>
          <!-- "D:\download\computer_learn_book.jpg" -->
          <img src="http://139.196.8.79/images/computer_learn_book.jpg" class="carousel-img" />
          <!-- <img src="@/assets/carousel/4.png" class="carousel-img" /> -->
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <!-- IndividualPracticeList -->

    <div class="IndividualPracticeList">
      <!-- 个人联系绑定 IndividualPracticeList -->
    </div>
    <el-row class="app-item-contain">
      <h3 class="index-title-h3" style="border-left: solid 10px #3651d4">
        任务中心
      </h3>
      <div style="padding-left: 15px">
        <el-collapse
          v-loading="taskLoading"
          accordion
          v-if="taskList.length !== 0"
        >
          <el-collapse-item
            :title="taskItem.title"
            :name="taskItem.id"
            :key="taskItem.id"
            v-for="taskItem in taskList"
          >
            <table class="index-task-table">
              <tr
                v-for="paperItem in taskItem.paperItems"
                :key="paperItem.examPaperId"
              >
                <td class="index-task-table-paper">
                  {{ paperItem.examPaperName }}
                </td>
                <td width="70px">
                  <el-tag
                    :type="statusTagFormatter(paperItem.status)"
                    v-if="paperItem.status !== null"
                    size="mini"
                  >
                    {{ statusTextFormatter(paperItem.status) }}
                  </el-tag>
                </td>
                <td width="80px">
                  <router-link
                    target="_blank"
                    :to="{ path: '/do', query: { id: paperItem.examPaperId } }"
                    v-if="paperItem.status === null"
                  >
                    <el-button type="text" size="small">开始答题</el-button>
                  </router-link>
                  <router-link
                    target="_blank"
                    :to="{
                      path: '/edit',
                      query: { id: paperItem.examPaperAnswerId },
                    }"
                    v-else-if="paperItem.status === 1"
                  >
                    <el-button type="text" size="small">批改试卷</el-button>
                  </router-link>
                  <router-link
                    target="_blank"
                    :to="{
                      path: '/read',
                      query: { id: paperItem.examPaperAnswerId },
                    }"
                    v-else-if="paperItem.status === 2"
                  >
                    <el-button type="text" size="small">查看试卷</el-button>
                  </router-link>
                </td>
              </tr>
            </table>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-row>
    <el-row class="app-item-contain">
      <h3 class="index-title-h3">固定试卷</h3>
      <div style="padding-left: 15px">
        <el-col
          :span="4"
          v-for="(item, index) in fixedPaper"
          :key="index"
          :offset="index > 0 ? 1 : 0"
        >
          <el-card :body-style="{ padding: '0px' }" v-loading="loading">
            <img src="@/assets/exam-paper/show1.png" class="image" />
            <div style="padding: 14px">
              <span>{{ item.name }}</span>
              <div class="bottom clearfix">
                <router-link
                  target="_blank"
                  :to="{ path: '/do', query: { id: item.id } }"
                >
                  <el-button type="text" class="button">开始做题</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-row>
    <!--    <div v-for="(item, index) in fixedPaper" :key="index">-->
    <!--      &lt;!&ndash; <div class="radius-problem">-->
    <!--          {{item.name}}-->
    <!--        </div> &ndash;&gt;-->
    <!--      <NiuKeExam :exam="item"></NiuKeExam>-->
    <!--    </div>-->

    <!-- <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select> -->
    <!-- 
作者：毛茸茸的狗
链接：https://www.jianshu.com/p/77d7af27adc3
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 -->
    <!-- 热度 -->
  
    <!--    <div-->
    <!--      class="grid-container"-->
    <!--      v-for="(item, index) in fixedPaper"-->
    <!--      :key="index"-->
    <!--    >-->
    <!--      &lt;!&ndash; <NiuKeExam :exam="item" class="grid-item"> </NiuKeExam> &ndash;&gt;-->
    <!--      &lt;!&ndash; radius-problem  &ndash;&gt;-->
    <!--      <div class="grid-item">-->
    <!--        {{item.name}}-->
    <!--      </div>-->

    <!--    </div>-->

    <el-row class="app-item-contain">
      <h3
        class="index-title-h3"
        style="border-left: solid 10px rgb(220, 208, 65)"
      >
        时段试卷
      </h3>
      <div style="padding-left: 15px">
        <el-col
          :span="4"
          v-for="(item, index) in timeLimitPaper"
          :key="index"
          :offset="index > 0 ? 1 : 0"
        >
          <el-card :body-style="{ padding: '0px' }" v-loading="loading">
            <img src="@/assets/exam-paper/show2.png" class="image" />
            <div style="padding: 14px">
              <span>{{ item.name }}</span>
              <p class="index-limit-paper-time">
                <span>{{ item.startTime }}</span>
                <br />
                <span>{{ item.endTime }}</span>
              </p>
              <div class="bottom clearfix">
                <router-link
                  target="_blank"
                  :to="{ path: '/do', query: { id: item.id } }"
                >
                  <el-button type="text" class="button">开始做题</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>

        <a class="buttonLink" href="http://139.196.8.79/" target="_blank">做题方法</a>
      </div>
    </el-row>
  </div>
</template>

<script>
import examPaperAnswerApi from '@/api/examPaperAnswer'
import { mapState, mapGetters } from "vuex";
import indexApi from "@/api/dashboard";
// NiuK
import NiuKeExam from "@/components/NiuKeExam";
// import { log } from 'console'

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
    let _this = this;
    this.loading = true;
    indexApi.index().then((re) => {
      _this.fixedPaper = re.response.fixedPaper;
      console.log(" _this.fixedPaper  indexApi.index(");
      console.log(_this.fixedPaper);
      _this.timeLimitPaper = re.response.timeLimitPaper;
      _this.pushPaper = re.response.pushPaper;
      _this.loading = false;
    });

    this.taskLoading = true;
    indexApi.task().then((re) => {
      _this.taskList = re.response;
      _this.taskLoading = false;
    });

    this.search()
  },
  methods: {
    toHistory(){
      // D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\record
      this.$router.push({ path: "/record/index" });
    },
    test_sys_go(){
      this.$router.push({ path: "/test-sys/index" });
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

.buttonLink {
  display: inline-block;
  padding: 8px 16px;
  background-color: #3498db; /* 原始颜色为蓝色系 */
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}

.buttonLink:hover {
  background-color: #8e44ad; /* 悬停后颜色变为紫色系 */
}

</style>
<style>
/* .el-select:hover .el-input__inner {
       border-color: #14eb00!important;
       border-width: 2px;
    } */

.IndividualPracticeList {
}
</style>