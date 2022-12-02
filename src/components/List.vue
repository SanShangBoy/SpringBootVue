<template>
  <h3 style="text-align: center">结构料电子料急料看板</h3>
  <el-table
      :data="tableData"
      :row-class-name="tableRowClassName"
      height="700px"
      width="100%"
      border>
<!--      :default-sort = "{prop: 'date', order: 'descending'}"  默认按date列排序-->
    <el-table-column type="expand">
      <template v-slot="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="创建人">
            <span>{{ props.row.attribute2 }}</span>
          </el-form-item>
          <el-form-item label="供应商">
            <span>{{ props.row.attribute2 }}</span>
          </el-form-item>
          <el-form-item label="接收数">
            <span>{{ props.row.attribute2 }}</span>
          </el-form-item>
          <el-form-item label="合格数">
            <span>{{ props.row.attribute2 }}</span>
          </el-form-item>
          <el-form-item label="不合格数">
            <span>{{ props.row.attribute2 }}</span>
          </el-form-item>
          <el-form-item label="是否承认">
            <span>{{ props.row.attribute2 }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
        type="index"
        label="序号"
        :index="indexMethod">
    </el-table-column>
    <el-table-column
        prop=""
        label="仓管员">
    </el-table-column>
    <el-table-column
        prop="item_num"
        label="物料编码">
    </el-table-column>
    <el-table-column
        prop="item_desc"
        label="物料描述">
    </el-table-column>
    <el-table-column
        prop=""
        label="送货单号">
    </el-table-column>
    <el-table-column
        prop="wip_complete_date"
        label="接收时间"
        sortable>
    </el-table-column>
    <el-table-column
        prop=""
        label="检验时间"
        sortable>
    </el-table-column>
  </el-table>
<!--  <br>-->
<!--  <router-link to="/login">Login</router-link>&nbsp;&nbsp;-->
<!--  <router-link to="/list">List</router-link>&nbsp;&nbsp;-->
<!--  <router-link to="/home">Home</router-link>&nbsp;&nbsp;-->
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  methods:{
    getData() {
      var that = this;
      axios
          .post('/api/board')
          .then(function (res) {
            console.log(res.data);
            that.tableData = res.data;
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          })
    },
    indexMethod(index) {
      return index + 1;
    },
    tableRowClassName({rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
  },
  mounted:function () {   //自动触发写入的函数
    this.getData();
  },
  data() {
    return {
      tableData: []
    }
  },
}
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table-column .warning-row {
  background: oldlace;
}

.el-table-column .success-row {
  background: #f0f9eb;
}
</style>
