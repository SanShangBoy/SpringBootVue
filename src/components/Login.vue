<template>
    <h1>登录页面</h1>
    <el-input v-model="userName" input-style="width:30%"></el-input>
    <br>
    <el-input v-model="password" type="password" input-style="width:30%"></el-input>
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
              that.$router.push('/home')
            }else {
              console.log(res.data);
              that.$router.push('/error')
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
    }
  },
}
</script>