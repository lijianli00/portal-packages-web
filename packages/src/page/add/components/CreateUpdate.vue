<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <sh-form ref="form" :model="form" label-width="120px" class-name="xy-form">
      <sh-form-item label="所属应用" prop="appId" rules="required">
        <el-select v-model="form.appId" placeholder="请选择">
          <el-option v-for="item in getData" :key="item.id" :label="item.appName" :value="item.appId"> </el-option>
        </el-select>
      </sh-form-item>
      <sh-form-item label="门户名称" prop="facadeName" rules="required">
        <el-input v-model="form.facadeName" placeholder="请输入门户名称"></el-input>
      </sh-form-item>
      <sh-form-item
        label="门户编码"
        prop="facadeCode"
        :rules="[
          'required',
          { pattern: /^[a-zA-Z][a-zA-Z-]*[a-zA-Z]$/, message: '以字母开头结尾且只包含字母或者中划线', trigger: 'blur' }
        ]"
      >
        <el-input v-model="form.facadeCode" placeholder="请输入门户编码"></el-input>
      </sh-form-item>

      <sh-form-item label="排序" prop="sort" rules="required">
        <el-input-number v-model="form.sort" controls-position="right" :min="0"></el-input-number>
      </sh-form-item>
      <sh-form-item label="是否启用" prop="status" rules="required">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0"></el-switch>
      </sh-form-item>
      <sh-form-item label="备注" prop="appName" rules="remarks" type="textarea">
        <el-input v-model="form.remarks" type="textarea" placeholder="请输入备注"></el-input>
      </sh-form-item>
    </sh-form>
  </div>
</template>

<script>
import { bbxAppClient } from '../../../apis/portal.js'
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      getData: []
    }
  },
  created() {
    this.getData = []
    this.$post(bbxAppClient.list, { appId: '', appName: '', limit: 99, page: 1 }, res => {
      this.getData = res.data
    })
  },
  methods: {
    validate(callback) {
      this.$refs.form.validate(valid => {
        if (valid) {
          callback()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.upload) {
  background-color: #2263e8;
  border-color: #2263e8;
}
</style>
