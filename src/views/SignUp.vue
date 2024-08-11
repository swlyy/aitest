<template>
  <div class="signUp">
    <h1>注册</h1>
    <v-text-field v-model="username" label="用户名"></v-text-field>
    <v-text-field v-model="password" type="password" label="密码"></v-text-field>
    <v-text-field v-modle="email" label="邮箱"></v-text-field>
    <v-btn color="primary" @click="signUp()">注册</v-btn>
    <v-btn depressed text>返回登录</v-btn>
  </div>
</template>

<script>
import Login from './Login.vue';

  export default {
    data(){
      return{
        username:'',
        password:'',
        email:''
      }
    },
    methods:{
      signUp(){
        let params = {
          username:this.username,
          password:this.password,
          email:this.email
        }
        this.$api.user.signUp(params).then(res=>{
          console.log(res)
          this.$router.push({
            name:Login,
          })
        })
      }
    }
  }
</script>

<style>
  .signUp{
    width: 400px;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    font-size: 12px;
  }
</style>