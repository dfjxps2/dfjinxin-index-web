<template>
  <el-row class="pager-row">
    <el-col :span="24">
      <el-pagination
        layout="prev, pager, next"
        @current-change="goToPage"
        :page-count	="pageCount" :current-page="pageNum">
      </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'WorkTablePager',
    props:{//pageSize:每页多少条 pageNum:当前页码 pageCount:共计多少页
      pageSize:{type:Number,default:10},
      pageNum:{type:Number,default:1},
      pageCount:{type:Number,default:1},
      params:{type:Object}
    },
    data() {
        return {}
    },
    methods: {
      goToPage:function(pageNum){
        //console.log(this.pageCount);
        //console.log(this.tableDataUrl);
        this.$emit('refreshData',pageNum,this.params);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-pagination{
    text-align: center;
  }
</style>
