<template>
	<div class='delete-content'>
		<p>AppID 描述</p>
		<div class='textcont'>
			<el-input type="textarea" v-model="edittext" placeholder='描述内容不超过200字'></el-input>
		</div>
		<div class='btn'>
			<el-button type="primary" @click="added" size='small' :loading="loading">申 请</el-button>
	    		<el-button @click="$emit('closedialog')" size='small'>取 消</el-button>
		</div>
	</div>
</template>

<script>
	import { createKey } from '@/api/key'
	export default {
	  data() {
	  	return {
	  		loading: false,
	  		edittext: '',
	  		editcheck: {id:'0',des:'pp'},
	  		successDialog: false
	  	}
	  },
	  methods: {
	  	added() {
	  		this.loading = true;
	  		setTimeout(() => {
	  			this.loading = false;
	  			this.$emit('successdialog');
	  		},1000);
//	  		createKey(data).then(response => {
//	        		this.row = response.data.items
//	      	}).catch((err) => {
//				this.$message({
//  					message: err,
//	    				type: 'error',
//	          		center: true
//	        		});
//	      		this.loading = false
//	      	})
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.delete-content {
		.btn {
			margin-top: 30px;
			text-align: right;
			.el-button {
		    		margin-top: 10px;
		    }
		}
		.textcont {
			margin-top: 10px;
			position: relative;
			.el-textarea {
				
			}
		}
	}
</style>