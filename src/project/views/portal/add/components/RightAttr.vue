<template>

    <div class="right"  >
    </div>
</template>

<script>
export default {
  props: {
    list: Array,
    activeItem: Number,
    form: Object
  }
}
</script>

<style lang="scss" scoped>
.right{
  float: right;
  width: 300px;
  height: 100vh;
  padding: 80px 10px 0 0;
  box-sizing: border-box;
  background-color: #fff;
  text-align: left;
  &-container{
    padding: 0 0px 10px 10px;
  }
  ::v-deep .el-tabs__content{
    overflow: inherit;
    padding: 0 10px;
  }
  .input-option{
    padding-left: 30px;
    box-sizing: border-box;
  }
  .del-option{
    line-height: 30px;
    font-size: 18px;
    color: #f56c6c;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{
      color: red;
    }
  }
  .add-option{
    i {
      margin: 0 10px;
    }
  }
  ::v-deep.el-divider__text{
    background-color: #f0f2f5;
  }
}
</style>
