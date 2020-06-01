<template>
  <div class="container">
    <div class="fill-steps-wrap">
      <div class="fill-tite">
        <h3>数据填报流程说明</h3>
      </div>
      <div class="fill-steps-item">
        <div class="fill-steps-flex">
          <h4>第<span>1</span>步：定义填报指标</h4>
          <p>是指社保系统中生成的个人编号，该编号不能进行修改。该编号可向社保经办机构咨询，也可在我局网站上查询。</p>
        </div>
        <div class="fill-steps-flex"><img src="@/styles/fill-steps-img-01.png" alt=""></div>
      </div>
      <div class="fill-steps-item">
        <div class="fill-steps-flex"><img src="@/styles/fill-steps-img-02.png" alt=""></div>
        <div class="fill-steps-flex">
          <h4>第<span>2</span>步：定义填报任务</h4>
          <p>是指社保系统中生成的个人编号，该编号不能进行修改。该编号可向社保经办机构咨询，也可在我局网站上查询。</p>
        </div>
      </div>
      <div class="fill-steps-item">
        <div class="fill-steps-flex">
          <h4>第<span>3</span>步：审核填报任务</h4>
          <p>是指社保系统中生成的个人编号，该编号不能进行修改。该编号可向社保经办机构咨询，也可在我局网站上查询。</p>
        </div>
        <div class="fill-steps-flex"><img src="@/styles/fill-steps-img-03.png" alt=""></div>
      </div>
      <div class="fill-steps-item">
        <div class="fill-steps-flex"><img src="@/styles/fill-steps-img-04.png" alt=""></div>
        <div class="fill-steps-flex">
          <h4>第<span>4</span>步：数据填报</h4>
          <p>是指社保系统中生成的个人编号，该编号不能进行修改。该编号可向社保经办机构咨询，也可在我局网站上查询。</p>
        </div>
      </div>
      <div class="fill-steps-item">
        <div class="fill-steps-flex">
          <h4>第<span>5</span>步：审批填报数据</h4>
          <p>是指社保系统中生成的个人编号，该编号不能进行修改。该编号可向社保经办机构咨询，也可在我局网站上查询。</p>
        </div>
        <div class="fill-steps-flex"><img src="@/styles/fill-steps-img-05.png" alt=""></div>
      </div>
    </div>
  </div>
</template>


<script>
  import WorkTablePager from '@/models/public/WorkTablePager'
  import WorkMain from '@/models/public/WorkMain'

  export default {
    name: 'Welcome',
    data() {
        return {

        }
    },
    components: {
      WorkTablePager,
      WorkMain
    },
    methods: {

    },
    mounted() {
      // this.getSelfReportInfo()
    }

  }
</script>

<style lang="css">
  .welcome-table-context{
    height:calc(100% - 50px) !important;
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "@/styles/welcome.scss";
</style>
