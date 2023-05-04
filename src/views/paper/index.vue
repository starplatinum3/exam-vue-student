<template>
  <div style="margin-top: 10px" class="app-contain">
    <el-tabs tab-position="left"  v-model="tabId"  @tab-click="subjectChange" >
      <el-tab-pane :label="item.name"  :key="item.id" :name="item.id" v-for="item in subjectList" style="margin-left: 20px;" >
        <el-row  style="float: right">
          <el-radio-group v-model="queryParam.paperType" size="mini" @change="paperTypeChange" >
            <el-radio v-for="item in paperTypeEnum" size="mini" :key="item.key" :label="item.key">{{item.value}}</el-radio>
          </el-radio-group>
        </el-row>
        <el-table v-loading="listLoading" :data="tableData" fit highlight-current-row style="width: 100%">
          <el-table-column prop="id" label="序号" width="90px"/>
          <el-table-column prop="name" label="名称"  />
          <el-table-column align="right">
            <template slot-scope="{row}">
              <router-link target="_blank" :to="{path:'/do',query:{id:row.id}}">
                <el-button  type="text" size="small">开始答题</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <pagination v-show="total>0" :total="total" :background="false" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                    @pagination="search" style="margin-top: 20px"/>

                    searchBatch
                    <el-button type="" @click="searchBatch">searchBatch</el-button>
                    <a href="http://139.196.8.79/">做题方法 </a>
      </el-tab-pane>
      <a class="buttonLink" href="http://139.196.8.79/">做题方法 </a>
    </el-tabs>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from '@/components/Pagination'
import examPaperApi from '@/api/examPaper'
import subjectApi from '@/api/subject'

export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        paperType: 1,
        subjectId: 0,
        pageIndex: 1,
        pageSize: 10
      },
      tabId: '',
      listLoading: true,
      subjectList: [],
      tableData: [],
      total: 0
    }
  },
  created () {
    this.initSubject()
  },
  methods: {
    initSubject () {
      let _this = this
      subjectApi.list().then(re => {
        _this.subjectList = re.response
        let subjectId = _this.subjectList[0].id
        _this.queryParam.subjectId = subjectId
        _this.tabId = subjectId.toString()
        _this.search()
      })
    },
    search () {
      this.listLoading = true
      examPaperApi.pageList(this.queryParam).then(data => {
        const re = data.response
        this.tableData = re.list
        this.total = re.total
        this.queryParam.pageIndex = re.pageNum
        this.listLoading = false
      })
    },
    searchBatch () {
      // this.listLoading = true
      let  startTime=new Date()
      let records=[]
      let reqCnt=1000
      for(let i=0;i<reqCnt;i++){
        let startTimeI=new Date()
        examPaperApi.pageList(this.queryParam).then(data => {

        const re = data.response
        let endTimeI=new Date()
        records.push({index:i,startTime:startTimeI,endTime:endTimeI})
        // this.tableData = re.list
        // this.total = re.total
        // this.queryParam.pageIndex = re.pageNum
        // this.listLoading = false
        // if(i>=110){
          if(i==reqCnt-1){
          console.log("all end");
          console.log("records");
          console.log(records);
          let endTime=new Date()
          console.log("startTime",startTime)
          console.log("endTime",endTime)
          // console.log("records",records)
          console.log("一共多少 毫秒")
          console.log(endTime-startTime);
           console.log("reqCnt");
           console.log(reqCnt);
           let resObj={
              records:records,
              startTime:startTime,
              endTime:endTime,
              reqCnt:reqCnt,
              wasteTimeMs: endTime-startTime

           }

           console.log(resObj);
        }
      })
      }

      // console.log(records);
     
    },
    paperTypeChange (val) {
      this.search()
    },
    subjectChange (tab, event) {
      this.queryParam.subjectId = Number(this.tabId)
      this.search()
    }
  },
  computed: {
    ...mapState('enumItem', {
      paperTypeEnum: state => state.exam.examPaper.paperTypeEnum
    })
  }
}
</script>

<style scoped>
/* a {
  text-decoration: none;
  position: relative;
}

a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: #000;
  position: absolute;
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
} */

/* .buttonLink {
  display: inline-block;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
} */


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



/* a {
  text-decoration: none;
  color: #000;
  position: relative;
}

a::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  bottom: -2px;
  left: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a:hover {
  color: #fff;
}

a:hover::after {
  background-color: #fff;
} */

</style>