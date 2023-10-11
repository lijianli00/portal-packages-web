import VueRouter from 'vue-router'
import routes from './module'
import Vue from 'vue'
import store from '../store'
import { setupRouterGuard } from './guard'
Vue.use(VueRouter)

// vue跳转相同路径报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  base: store.state.userStore.env.VITE_PUBLIC_PATH || '/',
  mode: 'history',
  routes
})

export function useRouter() {
  return router
}

export function useRoute() {
  return router.currentRoute
}

setupRouterGuard(router)

export default router
