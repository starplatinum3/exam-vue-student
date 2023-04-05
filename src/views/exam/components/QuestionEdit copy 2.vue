<template>
  <!-- QuestionEdit -->
  <div style="line-height:1.8">
    <div v-if="qType==1" v-loading="qLoading">
      <div class="q-title" v-html="question.title"/>
      <div >
        <!-- class="q-content" -->
        <el-radio-group v-model="answer.content" @change="answer.completed = true" >
          <!-- el-radio   文字可以复制 -->
          <el-radio    class="subject-options optionItem subject-options-niuke" v-for="item in question.items" 
           :key="item.prefix"  :label="item.prefix" >
            <span class="question-prefix">{{item.prefix}}.</span>
            <span v-html="item.content" class="q-item-span-content"></span>
          </el-radio>
        </el-radio-group>
      </div>
    </div>
    <div v-else-if="qType==2" v-loading="qLoading">
      <div class="q-title" v-html="question.title"/>
      <div class="q-content">
        <el-checkbox-group v-model="answer.contentArray" @change="answer.completed = true" >
          <el-checkbox v-for="item in question.items" :label="item.prefix" :key="item.prefix"  >
            <span class="question-prefix">{{item.prefix}}.</span>
            <span v-html="item.content" class="q-item-span-content"></span>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div v-else-if="qType==3" v-loading="qLoading">
      <div class="q-title" v-html="question.title" style="display: inline;margin-right: 10px"/>
      <span style="padding-right: 10px;">(</span>
      <el-radio-group v-model="answer.content" @change="answer.completed = true" >
        <el-radio  v-for="item in question.items"  :key="item.prefix"  :label="item.prefix" >
          <span v-html="item.content" class="q-item-span-content"></span>
        </el-radio>
      </el-radio-group>
      <span style="padding-left: 10px;">)</span>
    </div>
    <div v-else-if="qType==4" v-loading="qLoading">
      <div class="q-title" v-html="question.title"/>
      <div>
        <el-form-item :label="item.prefix" :key="item.prefix"  v-for="item in question.items"  label-width="50px" style="margin-top: 10px;margin-bottom: 10px;">
          <el-input v-model="answer.contentArray[item.prefix-1]"  @change="answer.completed = true" />
        </el-form-item>
      </div>
    </div>
    <div v-else-if="qType==5" v-loading="qLoading">
      <div class="q-title" v-html="question.title"/>
      <div>
        <el-input v-model="answer.content" type="textarea" rows="5"  @change="answer.completed = true"/>
      </div>
    </div>
    <div v-else>
    </div>
  </div>

</template>

<script>
export default {
  name: 'QuestionShow',
  props: {
    question: {
      type: Object,
      default: function () {
        return {}
      }
    },
    answer: {
      type: Object,
      default: function () {
        return { id: null, content: '', contentArray: [] }
      }
    },
    qLoading: {
      type: Boolean,
      default: false
    },
    qType: {
      type: Number,
      default: 0
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.optionItem{
  /* width:300px; */
  width:938px;
}

.subject-options-niuke{
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