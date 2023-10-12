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
  `bbx-index-${id}-first`, 
  `bbx-index-${id}-second`,
  `bbx-index-${id}-third`,
  `bbx-index-${id}-fourth`,
  `bbx-index-${id}-fifth`,
  `bbx-index-${id}-seventh`,
  `bbx-index-${id}-eighth`,
  `bbx-index-${id}-ninth`,
  `bbx-index-${id}-tenth`,
]
const getPortal =async (id)=>{
  const res =await $post(portal.getFaceByCode,{facadeCode:id})
  layout.value = res.data.jsonObject
  console.log(res.data.jsonObject)
}

protalCode.forEach(item => {
  if ($isCode(item)) {
    getPortal(item)
  } else {
    getPortal(`${id}`) 
  }
});

</script>

<style scoped></style>