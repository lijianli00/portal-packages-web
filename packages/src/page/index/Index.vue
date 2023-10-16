<template>
  <div class="mt--20 mx--20">
    <Loading v-if="loading" class="loading"></Loading>
    <LayoutContent v-else-if="!isNoData && layout" :layout="layout" :gard-components="gardComponents"></LayoutContent>
    <NoData v-else></NoData>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
import { bbxAdminFacade } from '../../apis/portal.js'
import { ref } from 'vue'
import NoData from './components/NoData.vue'
import Loading from './components/Loading.vue'
import LayoutContent from '../add/components/layoutcontent.vue'

const props = defineProps({
  gardComponents: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const layout = ref([])
const isNoData = ref(false)
const loading = ref(false)

// 获取实例
const { proxy } = getCurrentInstance()

const { path } = proxy.$route
const prefix = path.slice(1).replaceAll('/', '-')

const portalCode = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth']
const getPortal = async id => {
  loading.value = true
  const { code, msg, data } = await $post(bbxAdminFacade.getFaceByCode, { facadeCode: id })
  loading.value = false
  if (code === 0) {
    layout.value = data.jsonObject
  } else {
    isNoData.value = true
  }
}

const key = portalCode.find(item => {
  return $isCode(`${prefix}-${item}`)
})

if (key) {
  getPortal(`${prefix}-${key}`)
} else {
  getPortal(prefix)
}
</script>

<style scoped></style>
