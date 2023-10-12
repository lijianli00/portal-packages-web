<template>
  <div>
    <Loading class="loading" v-if="loading"></Loading>
    <LayoutContent :layout="layout" v-else-if="!isNoData&&layout"></LayoutContent>
    <NoData v-else></NoData>
  </div>
</template>

<script setup>
import { portal } from '@/project/apis/getway.js'
import { ref } from 'vue'
import NoData from './components/NoData.vue'
import Loading from './components/Loading.vue'
import LayoutContent from '../add/components/layoutcontent.vue'
import router from '@/blackbox/router'
const layout = ref([])
const isNoData = ref(false)
const loading = ref(false)
const id =  router.currentRoute.params.id

const protalCode = [
  `first`, 
  `second`,
  `third`,
  `fourth`,
  `fifth`,
  `seventh`,
  `eighth`,
  `ninth`,
  `tenth`,
]
const getPortal =async (id)=>{
  const res =await $post(portal.getFaceByCode,{facadeCode:id})
  layout.value = res.data.jsonObject
  console.log(res.data.jsonObject)
}

const key = protalCode.find(item => {
  return $isCode(`bbx-index-${id}-${item}`)
})

if (key) {
    getPortal(`bbx-index-${id}-${key}`)
  } else {
    getPortal(`bbx-index-${id}`) 
  }

</script>

<style scoped></style>