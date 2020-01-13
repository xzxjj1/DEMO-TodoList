<!-- login -->
<template>
<div class="login-container" style="margin-top:150px">
  <el-form :model="ruleForm2" :rules="rules2"
         status-icon
         ref="ruleForm2" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page" 
         action="" 
         v-if="!isReg">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
          <el-input type="text" 
            v-model="name" 
            auto-complete="off" 
            placeholder="用户名"
          ></el-input>
      </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" 
               v-model="password" 
               auto-complete="off" 
               placeholder="密码"
            ></el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-link @click="reg()" target="_blank">注册</el-link>
        </el-form-item>
  </el-form>
  

    <el-form :model="ruleForm" action="" v-else status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm reg-page">
  <h3 class="title">新用户注册</h3>
  <el-form-item label="用户名">
    <el-input v-model="name"></el-input>
  </el-form-item>
  <el-form-item label="密码" >
    <el-input type="password" v-model="password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" >
    <el-input type="password" v-model="repeat" autocomplete="off"></el-input>
  </el-form-item>

      <el-button type="primary" @click="addUser()">提交</el-button>
      <el-button @click="cancel()">取消</el-button>
  
</el-form>

</div>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      isReg: false,
      name:'',
      password:'',
      repeat:'',
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    login(){
      if (localStorage.getItem("name")===this.name&&localStorage.getItem("password")===this.password){
        this.$router.push('/home/list');
      }else{
        alert("用户名或密码错误，请重新输入");
      }
    },
    reg(){
      this.isReg=true;
    },
    addUser(){
      if (this.name==''||this.password==''||this.repeat==''){
        alert("请填写完整信息")
      }else if(this.name.indexOf(" ")!=-1){
        alert('用户名不可含有空格')
      }else if (this.password===this.repeat){
        localStorage.setItem("name",this.name);
        localStorage.setItem("password",this.password);
        this.name='';
        this.password='',
        this.repeat='',
        this.isReg=false;
      }else{
        alert("两次密码输入不一致")
      }
      
    },
    cancel(){
      this.isReg=false;
    }
  }

}

</script>
<style lang='scss' scoped>
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.reg-page{
  -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 100px auto;
    width: 400px;
    padding: 35px 35px 50px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>