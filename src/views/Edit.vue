<!-- edit -->
<template>
<div style="margin-top:100px">
<el-form ref="form" :model="form" label-width="80px" style="margin:0 auto;width:500px">
  <el-form-item label="截止时间">
    <el-col :span="15">
      <el-date-picker type="datetime" placeholder="选择日期" v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss"  style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="事项标题">
    <el-input v-bind:placeholder=this.$store.state.lists[id].title v-model="title" ></el-input>
  </el-form-item>
<el-form-item label="事项内容">
    <el-input v-bind:placeholder=this.$store.state.lists[id].content v-model="content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="edit()">保存</el-button>
    <el-button @click="jump()">取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import store from '@/store';
export default {
  name: "edit",
  store,
  data () {
    return {
      id: this.$route.query.Id,
      title: '',
      content: '',
      datetime: ''
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
    edit(){
      var id=this.$route.query.Id;
      if (this.title!='')
        store.state.lists[id].title=this.title;
      if (this.content!='')
        store.state.lists[id].content=this.content;
      store.state.lists[id].datetime=this.datetime;
      this.title='',
      this.content='',
      this.$router.push('/home/list')
    },
  }
}

</script>
<style lang='scss' scoped>
</style>