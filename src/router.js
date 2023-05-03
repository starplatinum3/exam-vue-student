import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/login', name: 'Login', component: () => import('@/views/login/index'), meta: { title: '登录', bodyBackground: '#fbfbfb' } },
    { path: '/register', name: 'Register', component: () => import('@/views/register/index'), meta: { title: '注册', bodyBackground: '#fbfbfb' } },
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/dashboard/index'),
          name: 'Dashboard',
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '/paper',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/paper/index'),
          name: 'PaperIndex',
          meta: { title: '试卷中心' }
        }
      ]
    },
    {
      path: '/record',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/record/index'),
          name: 'RecordIndex',
          meta: { title: '考试记录' }
        }
      ]
    },
    // D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\test-sys\index.vue
    {
      path: '/test-sys',
      component: Layout,
      children: [
        // D:\proj\bishe\exam-vue-student\src\views\G6TreeTest.vue
        {
          path: 'G6TreeTest',
          component: () => import('@/views/G6TreeTest'),
          name: 'G6TreeTest',
          meta: { title: 'G6TreeTest' }
        },
        {
          path: 'G6TreeTestGetVal',
          component: () => import('@/views/G6TreeTestGetVal'),
          name: 'G6TreeTestGetVal',
          meta: { title: 'G6TreeTestGetVal' }
        },
        // D:\proj\bishe\exam-vue-student\src\views\G6TreeTestGetVal.vue
        {
          path: 'index',
          component: () => import('@/views/test-sys/index'),
          name: 'test-sys',
          meta: { title: 'test-sys' }
        },
        {
          path: 'DrawIo',
          component: () => import('@/views/DrawIo'),
          name: 'DrawIo',
          meta: { title: 'DrawIo' }
        },
        {
          path: 'WebsocketPage',
          component: () => import('@/views/WebsocketPage'),
          name: 'WebsocketPage',
          meta: { title: 'WebsocketPage' }
        },
        {
          path: 'ChatRoom',
          component: () => import('@/views/ChatRoom'),
          name: 'ChatRoom',
          meta: { title: 'ChatRoom' }
        },
        
        // D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\WebsocketPage.vue
        // D:\proj\springBoot\exam-vue-student\source\vue\exam-vue-student\src\views\DrawIo.vue
      ]
    },

    {
      path: '/question',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/question-error/index'),
          name: 'QuestionErrorIndex',
          meta: { title: '错题本' }
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/user-info/index'),
          name: 'UserInfo',
          meta: { title: '个人中心' }
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      children: [
        {
          path: 'message',
          component: () => import('@/views/user-info/message'),
          name: 'UserMessage',
          meta: { title: '消息中心' }
        }
      ]
    },
    { 
      path: '/do', name: 'ExamPaperDo', component: () => import('@/views/exam/paper/do'),
       meta: { title: '试卷答题' } },
        { 
      path: '/test/summary', name: 'test_summary', component: () => import('@/views/test/summary/index'),
       meta: { title: '试卷答题' } },
      //  src\views\test\summary
    { path: '/edit', name: 'ExamPaperEdit', component: () => import('@/views/exam/paper/edit'), meta: { title: '试卷批改' } },
    { path: '/read', name: 'ExamPaperRead', component: () => import('@/views/exam/paper/read'), meta: { title: '试卷查看' } },
    { path: '*', component: () => import('@/views/error-page/404'), meta: { title: '404' }
    }
  ]
})

export { router }
