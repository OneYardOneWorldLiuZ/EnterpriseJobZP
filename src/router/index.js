import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout/Layout'
Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: () => import('@/view/login/index'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/view/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path: '/pos',
    component: Layout,
    redirect: '/pos/position',
    name: 'pos',
    meta: {title: '招聘管理', icon: 'sms'},
    children: [
      {
        path: 'position',
        name: 'position',
        component: () => import('@/view/pos/position/index'),
        meta: {title: '职位招聘', icon: 'order'}
      },
      {
        path: 'position-info',
        name: 'position-info',
        component: () => import('@/view/pos/position/info'),
        meta: {title: '职位详情'},
        hidden: true
      },
      {
        path: 'position-add',
        name: 'position-add',
        component: () => import('@/view/pos/position/add'),
        meta: {title: '添加职位'},
        hidden: true
      },
      {
        path: 'position-update',
        name: 'position-update',
        component: () => import('@/view/pos/position/update'),
        meta: {title: '修改职位'},
        hidden: true
      },
      {
        path: 'talk',
        name: 'talk',
        component: () => import('@/view/pos/talk/index'),
        meta: {title: '宣讲计划', icon: 'sms-ad'}
      },
      {
        path: 'talk-info',
        name: 'talk-info',
        component: () => import('@/view/pos/talk/info'),
        meta: {title: '宣讲计划详情'},
        hidden: true
      },
      {
        path: 'talk-add',
        name: 'talk-add',
        component: () => import('@/view/pos/talk/add'),
        meta: {title: '添加宣讲计划'},
        hidden: true
      },
      {
        path: 'talk-update',
        name: 'talk-update',
        component: () => import('@/view/pos/talk/update'),
        meta: {title: '修改宣讲计划'},
        hidden: true
      },
      {
        path: 'advertise',
        name: 'advertise',
        component: () => import('@/view/pos/advertise/index'),
        meta: {title: '广告列表', icon: 'sms-ad'}
      },
      {
        path: 'addAdvertise',
        name: 'advertise-add',
        component: () => import('@/view/pos/advertise/add'),
        meta: {title: '添加广告'},
        hidden:true
      },
      {
        path: 'updateAdvertise',
        name: 'advertise-update',
        component: () => import('@/view/pos/advertise/update'),
        meta: {title: '编辑广告'},
        hidden:true
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('@/view/pos/company/index'),
        meta: {title: '公司介绍', icon: 'order-setting'}
      }]
  }
]

export const asyncRouterMap = [
  {
    path: '/pos',
    component: Layout,
    redirect: '/pos/position',
    name: 'pos',
    meta: {title: '招聘管理', icon: 'sms'},
    children: [
      {
        path: 'position',
        name: 'position',
        component: () => import('@/view/pos/position/index'),
        meta: {title: '职位招聘', icon: 'order'}
      },
      {
        path: 'position-info',
        name: 'position-info',
        component: () => import('@/view/pos/position/info'),
        meta: {title: '职位详情'},
        hidden: true
      },
      {
        path: 'position-add',
        name: 'position-add',
        component: () => import('@/view/pos/position/add'),
        meta: {title: '添加职位'},
        hidden: true
      },
      {
        path: 'talk',
        name: 'talk',
        component: () => import('@/view/pos/talk/index'),
        meta: {title: '宣讲计划', icon: 'sms-hot'}
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('@/view/pos/company/index'),
        meta: {title: '公司信息', icon: 'order-setting'}
      },
      {
        path: 'advertise',
        name: 'advertise',
        component: () => import('@/view/pos/advertise/index'),
        meta: {title: '广告列表', icon: 'sms-ad'}
      },
      {
        path: 'addAdvertise',
        name: 'advertise-add',
        component: () => import('@/view/pos/advertise/add'),
        meta: {title: '添加广告'},
        hidden:true
      },
      {
        path: 'updateAdvertise',
        name: 'advertise-update',
        component: () => import('@/view/pos/advertise/update'),
        meta: {title: '编辑广告'},
        hidden:true
      },]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

