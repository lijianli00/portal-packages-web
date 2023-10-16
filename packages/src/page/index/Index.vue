<template>
  <div class="mt--20 mx--20">
    <Loading v-if="loading" class="loading"></Loading>
    <LayoutContent v-else-if="!isNoData && layout" :layout="layout" :gard-components="gardComponents"></LayoutContent>
    <NoData v-else></NoData>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance, onMounted, watch } from 'vue'
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

const prefix = computed(() => {
  const { path } = proxy.$route
  return path.slice(1).replaceAll('/', '-')
})

const portalCode = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth']
const getPortal = async id => {
  loading.value = true
  const { code, msg, data } = await $post(bbxAdminFacade.getFaceByCode, { facadeCode: id })
  loading.value = false
  if (code === 0 && data && data.jsonObject) {
    layout.value = data.jsonObject
    isNoData.value = false
  } else {
    isNoData.value = true
    layout.value = []
  }
}

const init = () => {
  const key = portalCode.find(item => {
    console.log(`${prefix.value}-${item}`, $isCode(`${prefix.value}-${item}`))
    return $isCode(`${prefix.value}-${item}`)
  })
  if (key) {
    getPortal(`${prefix.value}-${key}`)
  } else {
    getPortal(prefix.value)
  }
}

// 避免不同路由的时候页面不刷新
watch(
  () => proxy.$route,
  () => {
    init()
  },
  {
    immediate: true
  }
)
</script>

<style scoped></style>
