<template>
  <div>
    <sh-portal-add :gardLeft="gardLeft"></sh-portal-add>
  </div>
</template>
<script setup>
import shPortalAdd from '../../portal/add/Index.vue'
import {ref} from 'vue'
const gardLeft =ref([
  { w: 8, h: 4, type: 'Weather', name: '天气', attrs: {},}
])
</script>