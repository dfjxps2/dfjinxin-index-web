webpackJsonp([5],{"/S6A":function(a,e){},ZGBs:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("zS+P"),r=t("j1XB"),u=t("+cKO"),n={name:"MenuMain",data:function(){return{menuDataList:[],menuDataObjs:{},tableDataUrl:"manage/datasource",currPageNum:1,eachPageNum:10,totalPage:1,showModalPage:!1,isEditModal:!1}},validations:{formData:{super_module_id:{required:u.required},module_name:{required:u.required}}},computed:{formData:function(){return this.isEditModal?this.editFormData:this.addFormData}},components:{WorkTablePager:l.a,WorkMain:r.a},methods:{getTableData:function(a){a&&""!=a?this.currPageNum=a:a=this.currPageNum;var e=this;this.BaseRequest({url:"/sys/menu/listMenuByPage",method:"get",params:{currPage:a,pageSize:this.eachPageNum}}).then(function(a){null!=a.dataList&&a.dataList.forEach(function(a){e.menuDataObjs[a.module_id]=a}),e.menuDataList=a.dataList,e.totalPage=a.totalPage})},formatterSuperName:function(a){return null!=this.menuDataObjs[a.super_module_id]?this.menuDataObjs[a.super_module_id].module_name:"无"},refreshTableList:function(a){this.dataSourceList=a}},mounted:function(){this.menuDataList=[],this.getTableData(1)}},o={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("el-row",{staticClass:"table-row"},[t("el-col",{attrs:{span:24}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.menuDataList}},[t("el-table-column",{attrs:{prop:"module_id",align:"left",label:"菜单编号"}}),a._v(" "),t("el-table-column",{attrs:{prop:"module_name",align:"left",label:"菜单名称"}}),a._v(" "),t("el-table-column",{attrs:{prop:"super_module_id",align:"left",label:"上级菜单编号"}}),a._v(" "),t("el-table-column",{attrs:{prop:"super_module_name",align:"left",label:"上级菜单名称",formatter:a.formatterSuperName}}),a._v(" "),t("el-table-column",{attrs:{prop:"module_url",align:"left",label:"菜单地址"}})],1)],1)],1),a._v(" "),t("WorkTablePager",{attrs:{pageCount:a.totalPage},on:{refreshData:a.getTableData}})],1)},staticRenderFns:[]};var s=t("VU/8")(n,o,!1,function(a){t("/S6A")},"data-v-4aba0618",null);e.default=s.exports}});
//# sourceMappingURL=5.dab6a68cc222f37436e9.js.map