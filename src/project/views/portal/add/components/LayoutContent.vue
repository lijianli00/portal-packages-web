<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="layoutConfig.colNum"
      :row-height="layoutConfig.rowHeight"
      :is-draggable="isDraggable"
      :is-resizable="isDraggable"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="layoutConfig.margin"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <component :is="item.type" :isDraggable.sync="isDraggable" v-bind="item.attrs" @preview-img="previewImg" @openImgArrView="openImgArrView" @loaded="loaded"></component>
      </grid-item>

    </grid-layout>
  </div>
</template>


<script>
import VueGridLayout from 'vue-grid-layout'
import layoutConfig from '../js/config'
export default {
  props: {
    layout: Array
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      layoutConfig,
      isDraggable: false,
      imgId: '',
      previewSrcList: [],
      loadItemCount: 0
    }
  },
  methods: {
    loaded() {
      this.loadItemCount += 1
      if (this.loadItemCount === this.layout.length) {
        this.$emit('update:loading', false)
      }
    },
    previewImg(id) { // 单张图片通过id预览
      this.imgId = id
      this.$nextTick(()=>{
        this.$refs.previewImg.getImg(id)
      })
    },
    openImgArrView(arr) { // 多张图片预览
      this.previewSrcList = arr
      this.$nextTick(item => {
        this.$refs.img.clickHandler()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  :deep(.vue-grid-item) {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 2%);
  }
}
</style>