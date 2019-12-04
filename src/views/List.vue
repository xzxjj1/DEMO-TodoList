<!-- list -->
<template>
<div>
  <div id="nav">
      <router-link to="/">登陆</router-link> |
      <router-link to="/add">添加</router-link>
      
    </div>
  <el-table
      :data="pageLists"
      style="width: 80%; margin:0 auto; text-align:center">
      <el-table-column
        label="事项标题"
        width="180"
        prop="title">
      </el-table-column>

      <el-table-column
        label="截止时间"
        width="180"
        prop="datetime">
      </el-table-column>

      <el-table-column
        label="事项内容"
        prop="content">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, pageLists)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="edit(scope.$index, scope.row)"
          type="text"
          size="small">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>


</div>
</template>

<script>
import store from '@/store'
export default {
  name: "list",
  store,
  data () {
    return {
     
    };
  },

  components: {},

  computed: {
    pageLists(){
      return store.state.lists
    },
  },

  mounted: {},

  methods: {
    deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      //
    edit(index, row){
      //store.commit('getTitle',this.title)
      window.console.log(row.title);
      this.$router.push({path: '/edit',query: {Id:index}})
    }
  }
}

</script>
<style lang='scss' scoped>

</style>