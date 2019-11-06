<!-- add -->

<template>
<div>
  <router-view />

<el-form ref="form" :model="form" label-width="80px" style="margin:0 auto;width:500px">
  <el-form-item label="事项标题">
    <el-input v-model="title"></el-input>
  </el-form-item>
<el-form-item label="事项内容">
    <el-input v-model="content"></el-input>
  </el-form-item>

  <el-form-item label="截止时间">
    <el-col :span="15">
      
        <el-date-picker type="datetime" placeholder="截止时间" v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></el-date-picker>
        
        
    </el-col>
    
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="add()">立即创建</el-button>
    <el-button @click="jump()">取消</el-button>
  </el-form-item>
</el-form>


</div>

</template>

<script>
import store from '@/store'
export default {
  name: "add",
  store,
  data () {
    return {
      title:'',
      content:'',
      datetime:''
    };
  },

  components: {},

  computed: {
  },

  mounted: {},

  methods: {
    jump(){
      this.$router.push('/home/list')
    },
    add(){
      if (this.title==''){
        window.alert("标题不可为空");
        return ;
      }
      store.commit('addItem',{
        title:this.title,
        content:this.content,
        datetime:this.datetime
      })
      this.title='',
      this.content='',
      this.$router.push('/home/list')
    }
  }
}

</script>
<style lang='scss' scoped>
</style>

