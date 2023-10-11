<template>
  <div class="layout">

      <div class="main">
        <LayoutContent :layout="layout"></LayoutContent>
      </div>

    <div class="shade" @click="back"></div>
  </div>
</template>

<script>

import LayoutContent from './LayoutContent.vue'
export default {
  props: {
    layout: Array
  },
  components: {

    LayoutContent
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: fixed;
  z-index: 2999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f7f9fd;
  :deep(.sh-hybrid){
    height: 122px;
  }
  :deep(.sh-hybrid-header-menu) {
    display: none;
  }
}
.main {
  padding: 0px 20px 0 20px;
  margin-top: -10px;
}
.shade {
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
}
</style>