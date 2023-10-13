<template>
  <div>
    <sh-search-area :form="form" :dropdown-list="dropdownList" @loadList="loadList">
      <sh-form-item :span="12" label="门户名称" path="facadeName">
        <sh-input v-model="form.facadeName"></sh-input>
      </sh-form-item>
      <sh-form-item :span="12" label="应用名称" path="appName">
        <sh-input v-model="form.appName"></sh-input>
      </sh-form-item>
      <template #btn>
        <el-button type="primary" @click="onCreate">新增</el-button>
      </template>
    </sh-search-area>
    <sh-table ref="tableRef" class-name="xy-table" :api="tableApi" :param="form">
      <sh-table-column type="index" label="序号" width="60" />
      <sh-table-column prop="facadeName" label="门户名" min-width="120" align="left" />
      <sh-table-column prop="appName" label="应用名称" min-width="120" align="left" />
      <sh-table-column prop="facadeCode" label="门户编码" min-width="120" align="left" />
      <sh-table-column prop="sort" label="排序" min-width="80" align="left" />
      <sh-table-column prop="status" label="门户状态" min-width="80" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.status" class="color-st2">正常</span>
          <span v-else class="color-st">停用</span>
        </template>
      </sh-table-column>
      <sh-table-column label="操作" width="180">
        <template slot-scope="scope">
          <div class="table-btn">
            <el-button type="text" @click="onUpdate(scope.row)">编辑</el-button>
            <el-button class="del-btn" type="text" @click="onDelete(scope.row)">删除</el-button>
          </div>
        </template>
      </sh-table-column>
    </sh-table>
    <layoutView v-if="isView" :layout="layout" @back="isView = false"></layoutView>
  </div>
</template>

<script>
import { bbxAdminFacade } from '../../apis/portal.js'
import layoutView from '../add/components/LayoutView.vue'
const dropdownList = [
  { label: '门户名称', key: 'facadeName' },
  { label: '应用名称', key: 'appName' }
]
export default {
  components: { layoutView },
  data() {
    return {
      dropdownList,
      tableApi: bbxAdminFacade.list,
      form: {
        facadeName: '',
        appName: '',
        type: 1
      },
      tableData: [],
      loading: false,
      isView: false,
      layout: []
    }
  },
  methods: {
    onCreate() {
      this.$router.push({ path: '/bbx/portal/add' })
    },
    onUpdate(row) {
      this.$router.push({ path: '/bbx/portal/add', query: { id: row.facadeCode } })
    },
    onViews(row) {
      this.layout = JSON.parse(row.content)
      this.isView = true
    },
    onDelete(row) {
      this.$delete(
        bbxAdminFacade.delete,
        {
          id: row.id
        },
        this.loadList,
        `确定删除【${row.appName}】应用？删除后不能恢复！`
      )
    },
    loadList() {
      this.$refs.tableRef.loadList()
    }
  }
}
</script>

<style lang="scss" scoped>
.guide-btn {
  padding: 0 15px;
  line-height: 32px;
  color: #2263e8;
  svg {
    font-size: 16px;
  }
}

.color-st {
  color: red;
  font-weight: bold;
}

.color-st2 {
  color: #66b1ff;
  font-weight: bold;
}
</style>
