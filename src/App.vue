<template>
  <div id="app">
    <router-view />
    <back-to-top :visibility-height="100" :back-position="0" transition-name="fade" ref="backTop"/>
  </div>

</template>

<script>
//引入
import socketPublic from '@/utils/socketVuex.js'
 
 
//挂载
// Vue.prototype.$socketPublic = socketPublic
import BackToTop from '@/components/BackToTop'

export default {
  name: 'App',
  components: {
    BackToTop
  }
  ,created(){
    console.log("App created");
    socketPublic.dispatch('webSocketInit');//初始化ws
  }
}
</script>
