<template>
  <div class="layout">
    <div class="header">
      <div class="header-left">门户设计预览</div>
    </div>
    <div class="main">
      <LayoutContent :layout="layout" :gard-components="gardComponents"></LayoutContent>
    </div>

    <div class="shade" @click="back"></div>
  </div>
</template>

<script>
import LayoutContent from './LayoutContent.vue'
export default {
  components: {
    LayoutContent
  },
  props: {
    layout: {
      type: Array,
      default: () => []
    },
    gardComponents: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    back() {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  background-image: url(./img/hy_top_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1999;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  line-height: 60px;
  &-left {
    float: left;
    margin-left: 90px;
    font-size: 25px;

    color: #fff;
  }
  &-right {
    float: right;
    margin-right: 20px;
    text-align: right;
  }
  &-center {
    width: 300px;
    margin: auto;
    overflow: hidden;
    .el-steps--simple {
      padding: 0;
      background: transparent;
    }
    :deep(.el-step__icon) {
      vertical-align: middle;
    }
  }
}
.layout {
  position: fixed;
  z-index: 2999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f7f9fd;
}
.main {
  padding: 0px 20px 0 20px;
  margin-top: 60px;
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
