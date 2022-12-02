<template>
  <router-view></router-view>
<!--  <router-link to="/login">login</router-link>-->
<!--  <router-link to="/Home">Home</router-link>&nbsp;&nbsp;-->
</template>

<script>
export default {
  name: 'App',
  mounted:function () {   //自动触发写入的函数
    this.$router.push('/list')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
