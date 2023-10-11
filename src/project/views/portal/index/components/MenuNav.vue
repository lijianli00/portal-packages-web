<template>
  <div class="nav">
    <div class="title">{{ title }}</div>
    <el-row :gutter="8" ref="list">
      <el-col :style="{width: width}" v-for="(item, index) in list" :key="index">
        <div class="item" :style="{'background-image': `url(${require(`../img/menu${index % 2 + 1}.png`)})`}" @click="onLink(item.url)">
          <p class="name">{{ item.name }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '业务导航'
    },
    list: {
      type: Array,
      default: () => {
        return [
          {name: '首页', url: '/index'},
          {name: '快捷方式1', url: '/1'},
          {name: '快捷方式2', url: '/2'},
          {name: '快捷方式3', url: '/3'},
        ]
      }
    },
    rowNum: {
      type: Number,
      default: 5
    }
  },
  computed: {
    width() {
      return `${100 / this.rowNum}%`
    }
  },
  methods: {
    onLink(url) {
      if (url && url.indexOf('http') !== -1) {
        window.open(url, '_blank');
      } else if (window.qiankunStarted && url) { // 微前端
        this.$store.state.router.push(url)
      } else if (url) {
        this.$router.push(url)
      } else {
        this.$message.warning('功能正在开发中...')
      }
    }
  },
  created() {
    this.$emit('loaded')
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  height: 100%;
  box-sizing: border-box;
}
.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}
.item {
  width: 100%;
  height: 58px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
  background: url(../img/menu1.png) no-repeat;
  background-size: 100% 100%;
  .name {
    text-align: center;
    padding: 0 5px;
  }
  &:hover {
    color: #4A86FF;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
}
</style>