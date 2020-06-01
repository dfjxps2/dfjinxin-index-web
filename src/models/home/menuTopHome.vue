
<template>
  <el-container class="home" >

    <el-header style="display: flex;">
      <div class="header-titles">
        <icon-svg name="logo" class="top-logo"></icon-svg>
        <div  class="header-tile">{{sysName}}</div>
      </div>
      <div class="header-options">
        <div style="width: auto;float: left">
          <el-menu active-text-color="#FFFFFF" :default-active="activeIndex" mode="horizontal" @select="select">
            <!--<el-menu-item index="1">首页</el-menu-item>-->

            <el-submenu v-if="menu.name" v-for="(menu, index) in menuList" :index="menu.id+''" :key="index">
              <template slot="title">{{menu.name}}</template>
              <el-menu-item v-if="menu.children.length > 0" v-for="(item,ind) in menu.children" :index="item.id+''" :key="ind" @click="toLink(item.url)" >{{item.name}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <div class="header-user">
        <el-popover :visible-arrow="false"
                    placement="bottom" popper-class="header-toolip-cust"
                    trigger="click">
          <div class="header-user-info" >{{loginUserInfo.user_name_cn}}</div>
          <div class="header-user-options-split"></div>
          <div @click="logout()" class="header-user-options">退出</div>
          <!--<div style="text-align: center;font-size:14px !important;" @click="logout()">退出</div>-->
          <div style="flex: none;display: flex;align-items: center" slot="reference">
            <icon-svg name="account" class="login-account-icon"></icon-svg>
            <div style="font-size: 14px !important;" >{{loginUserInfo.user_name}}</div>
          </div>
        </el-popover>
        <!--<div style="width: auto;margin-left:auto;">-->
          <!--<el-menu  mode="horizontal" @select="select">-->
            <!--<el-submenu class="logout-menu" index="2">-->
              <!--<template  slot="title">-->
                <!--<icon-svg name="account" class="login-account-icon"></icon-svg>-->
                <!--<span style="font-size: 14px !important;" >{{loginUserInfo.user_name_cn}}</span></template>-->
              <!--<el-menu-item style="padding: 0 !important;margin: 0 !important;">-->
                <!--<div style="text-align: center;font-size:14px !important;padding: 0 !important;margin: 0 !important;" @click="logout()">退出</div></el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-menu>-->
        <!--</div>-->
      </div>

    </el-header>
    <el-container style="background-color: #f5f4f9;">
      <el-main >
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
  import WorkTopMenu from "@/models/menu/top-menu"
  import { MessageBox } from 'element-ui'

  export default {
    name:"MenuTopHome",
    props:{
      menuList:{
        type:Array
      },
      sysName:{
        type:String
      },
      loginUserInfo:{
        type:Object
      }
    },
    data() {
      return {
        activeIndex:''
      }
    },
    components: {
      WorkTopMenu
    },
    methods:{
      mainPageChange:function(pageName){
        //console.log(pageName);
      },
      logout:function(commound){
        MessageBox.confirm('退出系统将丢失当前未保存的相关操作，确定退出？', '提示', {
          confirmButtonText: '退出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const $this = this

          this.$http.post(process.env.BASE_API+"/sys/login/logout.do",{},{withCredentials: true}).then(res => {
            let responseData = res.data ;
            try{
              responseData = JSON.parse(responseData)
            }catch(e){}
            if (responseData.result != 'SUCCESS') {
              if(responseData.faild_reason === 'FORWARD_CAS'){
                let forwardUrl = responseData.resultData
                window.location = forwardUrl
              }else{
                $this.Message.success("登出成功")
                $this.$router.push({'path':'/'})
              }
            }else{
              if(responseData.faild_reason === 'FORWARD_CAS'){
                let forwardUrl = responseData.resultData
                window.location = forwardUrl
              }else{
                $this.Message.success("登出成功")
                $this.$router.push({'path':'/'})
              }
            }
          })
        })


      },
      getActiveTab(){
        this.checkActiveTab(location.href, this.menuList)
      },
      checkActiveTab(url, menuList){
        for(let i = 0; i < menuList.length; i++){
          let m = menuList[i]
          if(m.url && url.indexOf(m.url)>-1){
            this.activeIndex = m.id+''
            return
          }
          if(m.children && m.children.length>0){
            this.checkActiveTab(url, m.children)
          }
        }
      },
      select(index){
        this.activeIndex = index;
      },
      toLink(url) {
        top.location.href = '#' + url
      }
    },
    watch:{
      menuList: function (val) {
        this.getActiveTab()
      },
    },
    mounted:function(){
      if(this.$route.fullPath=='/home'){
        this.$router.push({"path":"welcome"})
      }
    }
  };
</script>


<style rel="stylesheet/scss" lang="scss">
  .home{
    width:100%;
    height:100%;


    .work-menu-group{
      width:calc(100% - 300px);
      height:100%;
      float: left;
    }

    .personal-infos{
      width:280px;
      height:100%;
      float:left;
      color:white;
      text-align: left;
    }

    .menu{
      background-color: rgb(238, 241, 246);
    }

    .el-header {
      /*background-color: #2b5ca9;*/
      padding: 0 24px 0 24px !important;
      /*color: #333;*/
      height:50px !important;
      /*background-image: url("/static/image/header_backgroud.png");*/
      /*background-image: url("/nlp/static/image/header_backgroud.png");*/
      /*background: #1a3275;*/
      background: #1A3275;
    }

    .el-aside {
      color: #333;
    }

    .el-container{
      background-color: #ffffff;
    }

    .fa-icon {
      width:30px;
      height:20px;
      padding:18px 0 0 0;
    }

    .logout-font{
      float: right;
      font-size: 14px;
      line-height: 54px;
    }

    .login-user{
      float: right;
      margin:0 44px 0 0;
      width:178px;
      height:54px;
      line-height: 54px;
      font-size: 14px;
      color:#ffffff;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;

    }

    .login-user-infomation{
      width:178px;
      height:54px;
      line-height: 54px;
      font-size: 14px;
      color:#ffffff;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    }

    .logout-icon{
      float: right;
      cursor: pointer;
      width:58px;
    }

    .loginUserInfoRow{
      margin:0 !important;
    }
    .header-tile{
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      margin:13px 0 0 0;
      float: left;
    }
    .el-menu{
      background: #1a3275;
    }
    .el-menu--popup{
      /*background-color:#1F2E4D;*/
      background-color:red;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
      height: 50px;
      line-height: 50px;
      /*color: #fff;*/
      background: #1A3275;
    }
    .el-menu--popup-bottom-start{
      margin-top: 0;
    }
    .el-menu--popup{
      border-radius:0;
    }
    .el-submenu{
      width: 120px;
    }
    .el-submenu__title{
      font-weight: 700 !important;
      font-size: 16px !important;
    }
    /*.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{*/
      /*display: none;*/
    /*}*/
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
      /*color: #fff;*/
      background-color: rgba(255,255,255,0.1);
      /*border-bottom:none;*/
      border-bottom: 2px solid rgba(255,255,255,0.1);

    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
      float: none;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      color: #909399;
    }
    .el-menu-item{
      background: #1a3275;
    }
    /*.el-submenu.is-active .el-submenu__title{*/
    /*  border-bottom-color: rgba(255,255,255,0.1);*/
    /*}*/
    /*.el-submenu.is-active .el-submenu__title{*/
    /*  border-bottom-color: rgba(255,255,255,0.1);*/
    /*}*/
    .quit{
      width: 80px;
      height: 32px;
      letter-spacing: 1px;
      border-radius: 4px;
      font-size: 14px;
      color:#fff;
    }
  }
  .el-menu--horizontal .el-menu .el-menu-item,.el-menu{
    background: #1a3275;
    /*color:#fff;*/
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover,.el-menu--horizontal .el-menu .el-menu-item.is-active{
    color:#fff;
  }

  .el-menu--horizontal>.el-submenu:focus .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
    color:#fff;
  }

  .el-submenu:not(.is-disabled):hover{
    color:#FFFFFF !important;
  }

  .top-logo-root{
    text-align: left;
    float: left;
    display: inline-block;
    font-size:1.2rem;
    color:#fff;
    width:auto;
    margin:0 39px 0 0;
  }

  .top-logo{
    margin:10px 24px 0 0;
    flex: none;
    width:26px !important;
    height:28px !important;
  }

  .login-account-icon{
    margin-right:.5rem;
    background-color: #ffffff;
    border-radius: 99999px;
    color:#ffffff;
    width:26px !important;
    height:26px !important;
    flex: none;
  }

  .el-menu-item{
    padding:0 10px 0 24px !important;
  }

  .header-titles{
    margin-right:100px;
    display: flex;
    flex: none;
  }

  .header-options{
    margin:0 0 0 175px;
    display: flex;
    flex: none;
  }

  .header-user{
    border-left:1px solid rgba(255,255,255,0.08);
    padding-left:26px;
    margin-left: auto;
    color:#ffffff;;
    display: flex;
    flex: none;
    align-items: center;
    cursor: pointer;
  }

  .header-toolip-cust{
    margin-top:10px;
    background: #1a3275;
    color: #ffffff;
    padding: 6px 0 6px 0 !important;
  }

  .header-user-info{
    padding:7.5px 24px 7.5px 24px;
    color:#477de9;
  }

  .header-user-options{
    padding:7.5px 24px 7.5px 24px;
    cursor: pointer;
  }

  .header-user-options:hover{
    background-color: #477de9;
  }

  .header-user-options-split{
    background-color: #2c3a57;
    width: 100%;
    height: 1px;
  }

  .logout-menu>.el-submenu__title{
    line-height: 45px !important;
  }

  .loguser-img{
    width: 24px;
    height: 24px;
    margin:12px 10px 0 0 ;
    border-radius: 12px;
    background: #d4d7d9;
    float: left;
  }
</style>
