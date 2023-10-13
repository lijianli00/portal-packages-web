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

const id = proxy.$route.params.id

const portalCode = [`first`, `second`, `third`, `fourth`, `fifth`, `seventh`, `eighth`, `ninth`, `tenth`]
const getPortal = async id => {
  const res = await $post(bbxAdminFacade.getFaceByCode, { facadeCode: id })
  layout.value = res.data.jsonObject
  console.log(res.data.jsonObject)
}

const key = portalCode.find(item => {
  return $isCode(`bbx-index-${id}-${item}`)
})

onMounted(() => {
  if (key) {
    getPortal(`bbx-index-${id}-${key}`)
  } else {
    getPortal(`bbx-index-${id}`)
  }
})
</script>

<style scoped></style>
