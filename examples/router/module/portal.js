export const portalAdd = {
  path: '/portal/add',
  meta: { title: '新增', notAuth: true },
  component: () => import('../../views/portal/add/index.vue')
}

export const portalList = {
  path: '/portal/list',
  meta: { title: '列表' },
  component: () => import('../../views/portal/list/index.vue')
}

export const portalIndex = {
  path: '/portal/index/:id',
  meta: { title: '列表' },
  component: () => import('../../views/portal/index/index.vue')
}
