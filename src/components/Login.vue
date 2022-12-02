<template>
    <h1  style="text-align: center">登录页面</h1>
    <el-input v-model="userName" input-style="width:20%" ></el-input>
    <br>
    <el-input v-model="password" type="password" input-style="width:20%"></el-input>
    <br><br>
    <el-button type="primary" round @click="login" class="btn">登录</el-button>
</template>
<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      activeName: '',
      userName: '',
      password: '',
    }
  },
  methods: {
    login() {
      const that = this;
      axios
          .post('/api/login', {
                userName: this.userName,
                password: this.password
              }
          )
          .then(function (res) {
            if (res.data==true){
              console.log(res.data);
              that.$message({
                message: '登录成功',
                type: 'success'
              });
              that.$router.push('/list')
            }else {
              console.log(res.data);
              that.$message.error('登录失败');
              that.$router.push('/error')
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
            that.$message({
              message: '请求失败',
              type: 'warning'
            });
          });
    }
  },
}
</script>