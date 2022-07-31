import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/hospSet',
    component: Layout,
    redirect: '/example/table',
    name: 'Main Page',//医院设置管理
    meta: { title: 'Main Page', icon: 'example' },
    children: [
      // {
      //   path: 'list',
      //   name: '医院设置管理',
      //   component: () => import('@/views/hospset/list'),
      //   meta: { title: '医院设置列表', icon: 'table' }
      // },
      {
        path: 'list',
        name: 'MainTest',
        component: () => import('@/views/mainpage/mainproject'),
        meta: { title: 'Main Test', icon: 'table' }
      }
        
    ]
  },
//数据管理，数据字典
  {
    path: '/cmn',
    component: Layout,
    redirect: '/cmn/list',
    name: 'Sort Algorithm',//数据管理
    alwaysShow:true,
    meta: { title: 'Sort Algorithm', icon: 'example' },
    children: [
      // {
      //   path: 'list',
      //   name: '数据字典',
      //   component: () => import('@/views/dict/list'),
      //   meta: { title: '数据字典', icon: 'table' }
      // },
      {
        path: 'Bubble',
        name: 'Bubble Sort',
        component: () => import('@/views/algorithm/bubble'),
        meta: { title: 'Bubble Sort', icon: 'table' }
      },
      {
        path: 'Quick',
        name: 'Quick Sort',
        component: () => import('@/views/algorithm/quick'),
        meta: { title: 'Quick Sort', icon: 'table' }
      },
      {
        path: 'Shell',
        name: 'Shell Sort',
        component: () => import('@/views/algorithm/shell'),
        meta: { title: 'Shell Sort', icon: 'table' }
      },
      {
        path: 'Selection',
        name: 'Selection Sort',
        component: () => import('@/views/algorithm/selection'),
        meta: { title: 'Selection Sort', icon: 'table' }
      }
    ]
  },
  //动画展示
  {
    path: '/animation',
    component: Layout,
    redirect: '/animation/list',
    name: 'Sort Animation ',//数据管理
    alwaysShow:true,
    meta: { title: 'Sort Animation', icon: 'example' },
    children: [
      {
        path: 'Bubble',
        name: 'Bubble',
        component: () => import('@/views/animation/bubbleanimation'),
        meta: { title: 'Bubble', icon: 'table' }
      },
      {
        path: 'Quick',
        name: 'Quick ',
        component: () => import('@/views/animation/quickanimation'),
        meta: { title: 'Quick', icon: 'table' }
      },
      {
        path: 'Shell',
        name: 'Shell',
        component: () => import('@/views/animation/shellanimation'),
        meta: { title: 'Shell', icon: 'table' }
      },
      {
        path: 'Selection',
        name: 'Selection',
        component: () => import('@/views/animation/selectionanimation'),
        meta: { title: 'Selection', icon: 'table' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/Dennisjiao',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
