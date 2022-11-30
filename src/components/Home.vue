<template>
  <h1>首页</h1>
  <el-table
      :data="tableData"
      height="500"
      border
      style="width: 100%">
    <el-table-column
        prop="id"
        label="序号"
        width="200">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="200">
    </el-table-column>
    <el-table-column
        prop="tel"
        label="电话"
        width="200">
    </el-table-column>
    <el-table-column
        prop="job"
        label="工作">
    </el-table-column>
  </el-table>
  <br>
  <router-link to="/Login">Login</router-link>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  data() {
    return {
      tableData: []
    }
  },
  methods:{
    getData() {
      var that = this;
      axios
          .post('/api/emp')
          .then(function (res) {
            console.log(res.data);
            that.tableData = res.data;
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          })
    }
  },
  mounted:function () {   //自动触发写入的函数
    this.getData();
  },
}
</script>

<style scoped>

</style>