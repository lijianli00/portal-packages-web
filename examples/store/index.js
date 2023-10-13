import Vuex from 'vuex'
import Vue from 'vue'
import { userStore, tagsStore, configStore } from 'blackbox-ui'

const env = import.meta.env
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    userStore: userStore(env),
    configStore: configStore(),
    tagsStore: tagsStore()
  }
})

export default store
