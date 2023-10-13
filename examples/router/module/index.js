import { RouterBlackbox } from 'blackbox-ui'
import Layout from '../../layout/index.vue'

export default [
  {
    path: '/login',
    meta: { title: '登录', notLogin: true },
    component: () => import('../../views/login/index.vue')
  },
  {
    path: '/ztLogin',
    meta: { title: '重定向', notLogin: true },
    component: () => import('../../views/ztLogin/index.vue')
  },
  {
    path: '/qcLogin',
    meta: { title: '公众号登录', notLogin: true },
    component: () => import('../../views/qcLogin/index.vue')
  },
  {
    path: '/bbx/portal/add',
    meta: { title: '新增', notAuth: true },
    component: () => import('../../views/portal/add/index.vue')
  },
  {
    path: '/layout',
    meta: { title: '布局', notLogin: true },
    component: Layout,
    children: [
      {
        path: '/bbx/portal',
        meta: { title: '列表' },
        component: () => import('../../views/portal/list/index.vue')
      },
      {
        path: '/bbx/index/:id',
        meta: { title: '首页' },
        component: () => import('../../views/portal/index/index.vue')
      }
    ]
  },
  ...RouterBlackbox // 一定要放在最后面
]
