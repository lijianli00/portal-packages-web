// 布局
import Layout from '@/blackbox/layout/index.vue'

/**
 * meta： {
 *  title： 页面标题
 *  notAuth： 不需要校验权限的页面
 *  notLogin： 不需要登录就能访问的页面
 * }
 */
export const demo = {
  path: '/project',
  meta: { title: '布局', notAuth: true },
  component: Layout,
  children: [
    {
      path: '/project/index',
      meta: { title: '首页' },
      component: () => import('@/project/views/system/index/index.vue')
    },
    {
      path: '/bbx/getway',
      meta: { title: '门户管理' },
      component: () => import('@/project/views/demo/shPortalList/index.vue')
    },
    // 预览
    {
      path: '/bbx/index/:id',
      meta: { title: '自定门户首页', notAuth: true },
      component: () => import('@/project/views/portal/index/Index.vue')
    }
  ]
}

// 不需要权限的
export const demoBlank = [
  {
    path: '/bbx/portal/add',
    meta: { title: '自定门户', notAuth: true },
    component: () => import('@/project/views/demo/shPortalAdd/index.vue')
  }
]
