<template>
  <!-- record/index -->
  <div style="margin-top: 10px" class="app-contain">
     <el-row :gutter="50">
       <el-col :span="18">
         <el-table v-loading="listLoading" :data="tableData" fit highlight-current-row 
         style="width: 100%" @row-click="itemSelect">
           <el-table-column  sortable prop="id" label="序号" width="90px"/>
           <el-table-column  sortable prop="paperName" label="名称"  />
           <!-- width="70" -->
           <el-table-column sortable prop="subjectName" label="学科"  width="100" />
           <el-table-column sortable  label="状态" prop="status" width="100px">
             <template slot-scope="{row}">
               <el-tag :type="statusTagFormatter(row.status)">
                 {{ statusTextFormatter(row.status) }}
               </el-tag>
             </template>
           </el-table-column>
           <el-table-column  sortable prop="createTime" label="做题时间"  width="170" />
           <el-table-column  align="right" width="70">
             <template slot-scope="{row}">
              <!-- 学生不该有批改的权限呀 -->
               <router-link target="_blank" :to="{path:'/edit',query:{id:row.id}}" v-if="row.status === 1 ">
                 <el-button  type="text" size="small">批改</el-button>
               </router-link>
               <!-- <router-link target="_blank" :to="{path:'/read',query:{id:row.id}}" v-if="row.status === 2 ">
                 <el-button  type="text" size="small">查看试卷</el-button>
               </router-link> -->
               <!-- userInfo.role!=1  1 是student 2 teacher 3 admin -->
               <router-link target="_blank" :to="{path:'/edit',query:{id:row.id}}" 
               v-if="row.status === 1&&userInfo.role!=1 ">
                 <el-button  type="text" size="small">批改</el-button>
               </router-link>
               <router-link target="_blank" :to="{path:'/read',query:{id:row.id}}">
                 <el-button  type="text" size="small">查看试卷</el-button>
               </router-link>
             </template>
           </el-table-column>
         </el-table>
         <pagination v-show="total>0" :total="total" :background="false" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                     @pagination="search" style="margin-top: 20px"/>
       </el-col>
       <el-button type=" " @click="storeUserInfoLook">storeUserInfoLook</el-button>
       <el-col  :span="6" >
         <el-card  class="record-answer-info">
            <el-form label-width="50%" >
              <el-form-item label="系统判分：">
                <span>{{selectItem.systemScore}}</span>
              </el-form-item>
              <el-form-item label="最终得分：">
                <span>{{selectItem.userScore}}</span>
              </el-form-item>
              <el-form-item label="试卷总分：">
                <span>{{selectItem.paperScore}}</span>
              </el-form-item>
              <el-form-item label="正确题数：">
                <span>{{selectItem.questionCorrect}}</span>
              </el-form-item>
              <el-form-item label="总题数：">
                <span>{{selectItem.questionCount}}</span>
              </el-form-item>
              <el-form-item label="用时：">
                <span>{{selectItem.doTime}}</span>
              </el-form-item>
            </el-form>
         </el-card>
       </el-col>
     </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'
import examPaperAnswerApi from '@/api/examPaperAnswer'
import { scrollTo } from '@/utils/scroll-to'
export default {
  components: { Pagination },
  data () {
    return {
      userInfo:this.$store.state.user.userInfo,
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
      }
    }
  },
  created () {
    this.search()
    scrollTo(0, 800)
  },
  methods: {

    storeUserInfoLook(){
      let  storeUserInfo= this.$store.state.userInfo;
      console.log("storeUserInfo");
      console.log(storeUserInfo);
      console.log("this.userInfo state");
      console.log(this.userInfo);

      console.log("this.$store.state");
      console.log(this.$store.state);
    },
    // storeUserInfoLook(){
    //   let  storeUserInfo= this.$store.state.userInfo;
    //   console.log("storeUserInfo");
    //   console.log(storeUserInfo);
    //   console.log("this.userInfo state");
    //   console.log(this.userInfo);

    //   console.log("this.$store.state");
    //   console.log(this.$store.state);
    // },

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
    itemSelect (row, column, event) {
      this.selectItem = row
    },
    statusTagFormatter (status) {
      return this.enumFormat(this.statusTag, status)
    },
    statusTextFormatter (status) {
      return this.enumFormat(this.statusEnum, status)
    }
  },
  computed: {
    ...mapState({
      // 箭头函数使代码更简练
      testNum1: state => state.testNum1,
      // 传字符参数'testNum2' 等价于 'state => state.testNum2'
      testNum2: "testNum2",
      storeUserInfo:"userInfo",
      // 组件的局部变量与Vuex变量相加
      testNum3(state) {
        return state.testNum1 + this.localNum;
      }
    }),
      // 第一个参数是namespace命名空间，填上对应的module名称即可
    //   ...mapState("user", {
    //   testNum2: state => state.testNum2,
    //   testNum3: "testNum3",
    //   userInfo:"userInfo",
    // }),
    ...mapGetters('enumItem', [
      'enumFormat'
    ]),
    ...mapState('enumItem', {
      statusEnum: state => state.exam.examPaperAnswer.statusEnum,
      statusTag: state => state.exam.examPaperAnswer.statusTag
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
