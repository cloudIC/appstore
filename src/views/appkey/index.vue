<template>
	<div class='appkey app-container'>
		<div class='app-table'>
			<h2>AppID密钥管理</h2>
			<el-table :data="list" fit highlight-current-row @row-click='' style="width: 100%" v-loading.body="listLoading" element-loading-text="请给我点时间！" header-cell-class-name='table-head'>
			    <el-table-column align="left" label="AppID" prop='id'>
			      <template slot-scope="scope">			      	
			        	<span style='color:#1482F0'>{{scope.row.id}}</span>			       
			      </template>
			    </el-table-column>	
			    <el-table-column label="关联应用"  sortable='true' prop='author'>
			      <template slot-scope="scope">
			        <span>{{scope.row.author}}</span>
			      </template>
			    </el-table-column>
			
			    <el-table-column label="状态" sortable='true' prop='type'>
			      <template slot-scope="scope">
			      	<div v-if='scope.row.type == 1'>
			      		<i class='el-icon-success'></i>
				        <span>正常</span>
			      	</div>
			      	<div v-else-if='scope.row.type == 3'>
					    <i class='el-icon-remove'></i>
				        <span>停用</span>
			      	</div>
			      	<div v-else>				        
					    <i class='el-icon-warning'></i>					   
				        <span>异常</span>
			      	</div>
			      </template>
			    </el-table-column>
			
			    <el-table-column label="申请时间" sortable='true' prop='timestamp'>
			      <template slot-scope="scope">
			        <span>{{scope.row.timestamp}}</span>
			      </template>
			    </el-table-column>
			
			    <el-table-column prop='importance' width='100px'>
			    	<template slot-scope="scope">
			      <el-dropdown :hide-on-click="false"  placement='bottom-start' @command="handleCommand($event,scope.row)">
					  <span class="el-dropdown-link">
					    <svg-icon icon-class='more'></svg-icon>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item command="edit">修改密钥</el-dropdown-item>
					    <el-dropdown-item command="enable" v-if='scope.row.type == 3'>启用</el-dropdown-item>
					    <el-dropdown-item command="disable" v-else>停用</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
					</template>
			    </el-table-column>
			  </el-table>
			  <div class="block">
			  	 <!--<span class="demonstration">条/每页</span>-->
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      background
			      :page-sizes="[10, 20, 50, 100]"
			      :page-size="pageSize"
			      layout="sizes, prev, pager, next"
			      :total="pageNumber">
			    </el-pagination>
			  </div>
		</div>
		<el-dialog title="修改密钥" :visible.sync="editDialog" width='600px'>
		  <edit-page :row='editcheck' @closedialog='editDialog=false' @successdialog='returnSuccess'></edit-page>
		</el-dialog>
		<el-dialog title="停用" :visible.sync="disableDialog" width='450px'>
		  <disable-page :row='editcheck' @closedialog='disableDialog=false' @successdialog='returnSuccess'></disable-page>
		</el-dialog>
		<el-dialog title="启用" :visible.sync="enableDialog" width='450px'>
		  <enable-page :row='editcheck' @closedialog='enableDialog=false' @successdialog='returnSuccess'></enable-page>
		</el-dialog>
	</div>
</template>

<script>
	import EditPage from './operation/edit'
	import DisablePage from './operation/disable'
	import EnablePage from './operation/enable'
	export default {
		components:{ EditPage, DisablePage, EnablePage },
	  data() {
	  	return {
	  		pageNumber: 100,
	  		editDialog: false, 		
	  		enableDialog: false,
	  		disableDialog: false,
	  		editcheck:null,
	  		currentPage: 2,
	  		pageSize: 10,
	  		listLoading: false,
	  		list:[
	  			{"type":'1','id':'AppID_sadasabfbfbbsahwhgevdff1','author':'未关联应用','timestamp':'2018-7-8 11:30:09'},
	  			{"type":'2','id':'AppID_sadasabfbfbbsahwhgevdff2','author':'未关联应用','timestamp':'2018-7-8 11:30:09'},
	  			{"type":'1','id':'AppID_sadasabfbfbbsahwhgevdff3','author':'未关联应用','timestamp':'2018-7-8 11:30:00'},
	  			{"type":'3','id':'AppID_sadasabfbfbbsahwhgevdff4','author':'未关联应用','timestamp':'2018-7-8 11:30:09'}	
	  		]
	  	}
	  },
	  created() {
	  	this.pageNumber = this.list.length;
	  },
	  methods: {
	  		handleSizeChange(val) {
		  		//this.currentPage = val
		  		//this.fetchData()
		  	},
		  	goDetailpages(item) {
		  		//this.$router.push('/detailpages');
		  	},
		  	handleCurrentChange(val) {
		  		//this.pageSize = val
		  		//this.fetchData()
		  	},
		  	returnSuccess() {
		  		this.editDialog = false;
		  		this.disableDialog = false;
		  		this.enableDialog = false;
		  		//this.fetchData()
		  	},
		  	handleCommand(command,row) {
		  		this.editcheck = row;
		  		if(command == 'edit'){
		  			this.editDialog = true;
		  		}else if (command == 'disable'){
		  			this.disableDialog = true;
		  		}else if (command == 'enable'){
		  			this.enableDialog = true;
		  		}
		  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.appkey {
		h2 {
			font-size: 16px;
			font-weight: 400;
			margin-top: 10px;
			margin-bottom: 20px;
		}
		.app-table {
			background: #fff;
			padding: 20px;
		}
		.el-icon-success{
			color: rgb(83,176,149);
		}
		.el-icon-warning{
			color: rgb(238,175,103);
		}
		.el-icon-remove{
			color: rgb(219,106,103);
		}
		.el-dropdown-link {
		    cursor: pointer;
		    color: #409EFF;
		  }
		  .block {
		  	height: 40px;
			padding: 15px;
			font-weight: 300;
			.el-pagination {
				float: right;
			}
			.demonstration {
				float: right;
				line-height: 30px;
				font-size: 14px;
			}
		  }
	}
</style>