<template>
  <div class="login">
    <h1>登录</h1>
    <v-text-field v-model="username" label="用户名"></v-text-field>
    <v-text-field v-model="password" type="password" label="密码"></v-text-field>
    <v-btn color="primary" @click="signIn()">登录</v-btn>
    <v-btn depressed text>注册新用户</v-btn>
  </div>
</template>

<script>

export default {
  data(){
    return{
      username:'',
      password:'',
    }
  },
  methods:{
    signIn(){
      let params = {
        username:this.username,
        password:this.password
      }
      this.$api.user.signIn(params).then(res=>{
        print(res)
      })
    }
  }
}
</script>

<style>
  .login{
    width: 400px;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    font-size: 12px;
  }
</style>