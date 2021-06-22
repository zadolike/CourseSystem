import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import StudentInfo from '../views/studentInfo.vue'
import adminManageUser from '../views/admin/adminManageUser.vue'
import Home from '../views/Home.vue'
import teacherManage from '../views/admin/teacherManage'
import newsList from '../views/admin/newsList'
import newsEdit from '../views/admin/newsEdit'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
    //管理员模块
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Index',
        redirect: {name: 'Index'}
      },
      {
        path: '/student/info',
        name: 'StudentInfo',
        component: StudentInfo
      },
      {
        path: '/admin/stuManage',
        name: 'adminManageUser',
        component: adminManageUser
      },
      {
        path: '/admin/teacherManage',
        name: 'teacherManage',
        component: teacherManage
      },
      {
        path: '/admin/newsList',
        name: 'newsList',
        component: newsList
      },
      {
        path: '/admin/newsEdit',
        name: 'newsEdit',
        component: newsEdit
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
