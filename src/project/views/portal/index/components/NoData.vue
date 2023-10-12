<template>
  <div class="bg">
    <img src="../img/empty.png" alt="" class="img">
    <p>首页暂未配置，请联系管理员</p>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {}


}

</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  background-color: #f1f6fe;
  .img {
    display: block;
    position: absolute;
    margin-top: calc(50vh - 200px);
    margin-left: calc(50vw - 150px);
  }
  p {
    display: block;
    position: absolute;
    margin-top: calc(50vh + 10px);
    margin-left: calc(50vw - 100px);
    font-size: 16px;
    text-align: center;
    color: #8996af;
  }
}
</style>
