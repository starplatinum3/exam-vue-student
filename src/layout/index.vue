<template>
  <el-container>
    <el-header height="61" class="student-header">
      <div class="head-user">
        <el-dropdown trigger="click" placement="bottom">
          <el-badge :is-dot="messageCount!==0" >
            <el-avatar  class="el-dropdown-avatar" size="medium"  
            :src="userInfo.imagePath === null ? require('@/assets/avatar.png') : userInfo.imagePath"></el-avatar>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push({path:'/user/index'})">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="$router.push({path:'/user/message'})">
              <el-badge :value="messageCount" v-if="messageCount!==0">
                <span>消息中心</span>
              </el-badge>
              <span  v-if="messageCount===0">消息中心</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-menu class="el-menu-title" mode="horizontal" :default-active="defaultUrl" :router="true">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/paper/index">试卷中心</el-menu-item>
        <el-menu-item index="/record/index">考试记录</el-menu-item>
        <el-menu-item index="/question/index">错题本</el-menu-item>
      </el-menu>
      <div class="logo">
        <!-- http://139.196.8.79/images/0194ea5ac1fc33a8012062e3f66904.jpg -->
        <a href="/">
        <!-- <img src="@/assets/logo.png" height="56"/> -->
          <img src="http://139.196.8.79/images/0194ea5ac1fc33a8012062e3f66904.jpg" height="56"/>
          </a>
      </div>
    </el-header>
    <el-main class="student-main">
      <router-view/>
    </el-main>
    <el-footer height="340" class="student-footer">
      <div class="foot-container">
        <!-- <div class="footer-main">
          <h4>产品介绍</h4>
          <a href="https://www.mindskip.net/sdd.html" target="_blank" class="footer-main-link">思多多智能考试系统</a>
          <a href="https://www.mindskip.net/wdd.html" target="_blank" class="footer-main-link">维多多培训考试系统</a>
          <a href="https://www.mindskip.net/xzs.html" target="_blank" class="footer-main-link">考试系统</a>
        </div>
        <div class="footer-main">
          <h4>微信小程序</h4>
          <img src="@/assets/code/3.jpg" style="width: 100px;height: 100px;margin-right: 30px"/>
          <img src="@/assets/code/7.jpg" style="width: 100px;height: 100px;margin-right: 30px"/>
          <img src="@/assets/code/1.jpg" style="width: 100px;height: 100px;"/>
        </div>
        <div class="footer-main">
          <h4>关于我们</h4>
          <img src="@/assets/4.jpg" style="width: 100px;height: 100px;"/>
        </div>
        <div class="footer-main">
          <h4>文档中心</h4>
          <a href="https://gitee.com/mindskip" target="_blank" class="footer-main-link">学之思仓库地址</a>
          <a href="https://www.mindskip.net:999" target="_blank" class="footer-main-link">学之思开发文档</a>
          <a href="https://ke.qq.com/course/3614230" target="_blank" class="footer-main-link">学之思视频教程</a>
        </div> -->
      </div>
    </el-footer>
    <div class="foot-copyright">
      <!-- <span>Copyright © 2021 starplatinumora 版权所有</span> -->
    </div>
  </el-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import loginApi from '@/api/login'
import userApi from '@/api/user'
export default {
  name: 'Layout',
  data () {
    return {
      defaultUrl: '/index',
      userInfo: {
        imagePath: null
      }
    }
  },
  created () {
    let _this = this
    this.defaultUrl = this.routeSelect(this.$route.path)
    this.getUserMessageInfo()
    console.log(" _this.$store.state alyout getCurrentUser " );
      console.log( _this.$store.state );
    userApi.getCurrentUser().then(re => {
      console.log("re getCurrentUser e.state alyout");
      console.log(re);
      _this.userInfo = re.response
      console.log(  " _this.userInfo");
      console.log(   _this.userInfo);
      // this.$store.commit ( 'setUserInfo ' , _this.userInfo )
      // let  storeUserInfo= this.$store.state.userInfo;
      // console.log("storeUserInfo");
      // _this.setUserInfo(_this.userInfo)
      // console.log(storeUserInfo);
      // _this.$store.state 
      console.log(" _this.$store.state alyout " );
      console.log( _this.$store.state );
      console.log("_this.$store.state.user.userInfo");
      console.log(_this.$store.state.user.userInfo);
      _this.$store.state.user.userInfo=  _this.userInfo
    }).catch(e => {
      console.log("e getCurrentUser e.state alyout");
      console.log(e);
    })
  },
  watch: {
    $route (to, from) {
      this.defaultUrl = this.routeSelect(to.path)
    }
  },
  methods: {
    routeSelect (path) {
      let topPath = ['/', '/index', '/paper/index', '/record/index', '/question/index']
      if (topPath.indexOf(path)) {
        return path
      }
      return null
    },
    logout () {
      let _this = this
      loginApi.logout().then(function (result) {
        if (result && result.code === 1) {
          _this.clearLogin()
          _this.$router.push({ path: '/login' })
        }
      })
    },
    ...mapActions('user', ['getUserMessageInfo']),
    ...mapMutations('user', ['clearLogin'])
  },
  computed: {
    ...mapState('user', {
      messageCount: state => state.messageCount
    }),
    // ,"setUserInfo"
    ...mapMutations('user', ['setUserName'])
  }
}
</script>

<style lang="scss" scoped>

</style>
