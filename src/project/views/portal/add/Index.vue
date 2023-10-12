<template>
  <div class="draggable">
    <!-- 预览 -->
    <layoutView v-if="isView" :layout="layout" @back="isView = false"></layoutView>
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">门户设计</div>
      <div class="header-right">
        <el-button :disabled="active === 1" @click="active = 1">上一步</el-button>
        <el-button :disabled="active === 2" @click="next">下一步</el-button>
        <el-button :disabled="active === 1" type="success" @click="isView = true">预览</el-button>
        <el-button :disabled="active === 1" type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="back">取消</el-button>
      </div>
      <div class="header-center">
        <el-steps :active="active" simple>
          <el-step title="基础设计" icon="el-icon-edit"></el-step>
          <el-step title="门户设计" icon="el-icon-setting"></el-step>
        </el-steps>
      </div>
    </div>
    <!-- 新增表单 -->
    <div v-show="active === 1" class="add">
      <CreateUpdate ref="form" :form="form"></CreateUpdate>
    </div>
    <!-- 门户设计 -->
    <div v-show="active === 2">
      <div class="left">
        <el-scrollbar class="scrollbar">
          <div class="left-container">
            <ul>
              <li @drag="drag(item)" @dragend="dragend(item)" @mousedown="mousedown" class="left-item components-item"
                v-for="item in gardLeft" :key="item.i" :draggable="true" unselectable="on">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </el-scrollbar>
      </div>
      <div class="center">
        <div id="content" class="center-container">
          <grid-layout ref="gridlayout" :layout.sync="layout" :col-num="layoutConfig.colNum"
            :row-height="layoutConfig.rowHeight" :is-draggable="isDraggable" :is-resizable="isDraggable"
            :is-mirrored="false" :vertical-compact="true" :margin="layoutConfig.margin" :use-css-transforms="true">
            <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
              <component :is="item.type" :isDraggable.sync="isDraggable" v-bind="item.attrs" :modelType="modelType"
                :setting="item.setting"></component>
              <i v-if="item.setting" class="el-icon-setting settting" @click="setItem(item)"></i>
              <i class="el-icon-close remove" @click="removeItem(item.i)"></i>
            </grid-item>
          </grid-layout>
          <div v-show="!layout.length" class="empty-info">从左侧拖入组件进行门户设计</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { cloneDeep } from 'lodash'
import layoutConfig from './js/config'
import { GridLayout, GridItem } from 'vue-grid-layout'
import { portal } from '@/project/apis/getway.js'
import CreateUpdate from './components/CreateUpdate.vue'
import layoutView from './components/LayoutView.vue'
let mouseXY = { x: null, y: null }
let DragPos = { x: null, y: null, w: 1, h: 1, i: null }
export default {
  components: {
    GridLayout,
    GridItem,
    CreateUpdate,
    layoutView

  },
  props:{
    gardLeft:{
      type:Array,
      default:()=>[]
    }
  },
  data () {
    return {
      isView: false,
      active: 1,
      isDraggable: true,
      itemKey: '',
      layout: [],
      layoutConfig,
      form: {
        id: '',
        systemCode: '',
        appName: '',
        facadeName: '',
        facadeCode: '',
        facadeType: '',
        sort: 0,
        status: 1,
        remarks: '',
        jsonObject: [],
        content: ''
      },
      modelType: []
    }
  },
  methods: {
    // 获取信息
    getDetail (facadeCode) {
      this.$post(
        portal.getFaceByCode,
        {
          facadeCode: facadeCode //门户编码
        },
        data => {
          this.form = { ...data.data }
          this.layout = data.data.jsonObject || []
        }
      )
    },
    // 提交设置
    onSubmit () {
      this.form.jsonObject = this.layout
      this.$post(
        this.form.id ? portal.updateFace : portal.addFacadeAssembly,
        this.form,
        data => {
          this.$notify.success(data.msg)
          this.$router.push('/bbx/getway')
        },
        error => {
          this.$notify.error(error.msg)
        }
      )
    },
    // 下一步
    next () {
      this.$refs.form.validate(() => {
        this.active = 2
      })
    },
    // 取消
    back () {
      this.$router.go(-1)
    },
    // 清楚已经选中
    removeItem (val) {
      const index = this.layout.map(item => item.i).indexOf(val)
      // 如果是文件下载模板，清除已选中
      if (
        this.layout[index].attrs &&
        this.layout[index].attrs.selectList &&
        this.layout[index].attrs.selectList.length
      ) {
        this.layout[index].attrs.selectList = []
      }
      this.layout.splice(index, 1)
    },
    // 从左侧 移动出来组件
    mousedown () {
      this.itemKey = this.$dayjs().valueOf()
    },
    calcXY (top, left, el, item) {
      const colWidth = el.calcColWidth()
      let x = Math.round((left - el.margin[0]) / (colWidth + el.margin[0]))
      let y = Math.round((top - el.margin[1]) / (el.rowHeight + el.margin[1]))
      // Capping
      x = Math.max(Math.min(x, el.cols - item.w), 0)
      y = Math.max(Math.min(y, el.maxRows - item.h), 0)

      return { x, y }
    },
    drag (item) {
      let parentRect = document.getElementById('content').getBoundingClientRect()

      let mouseInGrid = false
      // 计算是否在画布内
      if (
        mouseXY.x > parentRect.left &&
        mouseXY.x < parentRect.right &&
        mouseXY.y > parentRect.top &&
        mouseXY.y < parentRect.bottom
      ) {
        mouseInGrid = true
      }
      // 添加到画布
      if (mouseInGrid === true && this.layout.findIndex(item => item.i === this.itemKey) === -1) {
        this.layout.push({
          x: (this.layout.length * 2) % this.layoutConfig.colNum,
          y: this.layout.length + this.layoutConfig.colNum, // puts it at the bottom
          i: this.itemKey,
          ...cloneDeep(item)
        })
      }
      let index = this.layout.findIndex(item => item.i === this.itemKey)
      if (index !== -1) {
        try {
          // 半隐样式
          this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = 'none'
        } catch { }
        let el = this.$refs.gridlayout.$children[index]
        el.dragging = { top: mouseXY.y - parentRect.top, left: mouseXY.x - parentRect.left }
        let new_pos = this.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left, el, item)
        if (mouseInGrid === true) {
          this.$refs.gridlayout.dragEvent('dragstart', this.itemKey, new_pos.x, new_pos.y, item.h, item.w)
          DragPos.i = String(index)
          DragPos.x = this.layout[index].x
          DragPos.y = this.layout[index].y
        }
        if (mouseInGrid === false) {
          this.$refs.gridlayout.dragEvent('dragend', this.itemKey, new_pos.x, new_pos.y, 1, 1)
          this.layout = this.layout.filter(obj => obj.i !== this.itemKey)
        }
      }
    },
    dragend: function (item) {
      let parentRect = document.getElementById('content').getBoundingClientRect()
      let mouseInGrid = false
      if (
        mouseXY.x > parentRect.left &&
        mouseXY.x < parentRect.right &&
        mouseXY.y > parentRect.top &&
        mouseXY.y < parentRect.bottom
      ) {
        mouseInGrid = true
      }
      if (mouseInGrid === true) {
        this.$refs.gridlayout.dragEvent('dragend', this.itemKey, DragPos.x, DragPos.y, 1, 1)
        try {
          // 重新显示
          this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = 'block'
        } catch { }
      }
    }
  },
  mounted () {
    document.addEventListener(
      'dragover',
      function (e) {
        mouseXY.x = e.clientX
        mouseXY.y = e.clientY
      },
      false
    )
    const id = this.$route.query.id
    if (id) {
      this.getDetail(id)
    }
  },
  beforeDestroy () { }
}
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  :deep(.vue-grid-item) {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 2%);
  }
}

.add {
  padding: 100px 40px 40px;
  margin: auto;
  width: 800px;
  height: 100vh;
  background: #fff;
  box-sizing: border-box;
}

.form-title {
  font-size: 24px;
  font-weight: 600;
}

.header {
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
    margin-left: 40px;
    font-size: 20px;
    font-weight: 600;
    color: #00afff;
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

:deep(.el-input) {
  width: 60%;
}

:deep(.el-button) {
  margin-left: 20px;
}

.center {
  height: 100vh;
  padding: 60px 0px 0 250px;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

  &-container {
    margin: 20px;
    height: 100%;
    overflow: auto;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #eee;
      position: absolute;
      top: 800px;
    }
  }

  :deep(.el-form-item) {
    cursor: move;
    position: relative;

    &:hover .copy,
    &:hover .delete {
      display: block;
    }
  }

  .active {
    position: relative;

    &:before {
      content: '';
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      border: 1px solid red;
      position: absolute;
      top: -5px;
      left: 0;
      cursor: move;
    }

    :deep(.el-form-item) {

      .copy,
      .delete {
        display: block;
      }
    }
  }

  .drawing-board {
    min-height: calc(100vh - 110px);
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 10px;

    .components-item {
      font-size: 0;
      width: 100%;
      margin: 1px 0 0 0;
      line-height: 50px;
      border: none;
      border-top: 3px solid blue;
      background: #f6f7ff;
      float: left;
    }
  }

  .empty-info {
    position: absolute;
    top: 46%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 18px;
    color: #ccb1ea;
    letter-spacing: 4px;
  }
}

:deep(.el-form-item__label) {
  cursor: move;
}

.left {
  width: 250px;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  height: 100vh;
  float: left;
  background-color: #fff;

  &-container {
    padding: 60px 10px 10px 10px;
  }

  &-title {
    font-weight: 600;
    line-height: 30px;
  }

  &-item {
    width: 100px;
    line-height: 30px;
    background-color: #f5f5f7;
    border: 1px dashed #b8cdda;
    margin: 10px 5px;
    text-align: center;
    display: inline-block;

    &:hover {
      cursor: pointer;
      border: 1px dashed #787be8;
    }
  }
}

.condition {
  font-size: 12px;
  color: #666;
}

.settting,
.remove {
  position: absolute;
  right: 4px;
  top: 2px;
  cursor: pointer;
  color: #c0c4cc;

  &:hover {
    color: #409eff;
  }
}

.settting {
  right: 24px;
}
</style>
