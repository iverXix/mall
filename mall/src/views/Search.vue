<template>
	<div class="animate__animated"><!-- 添加transition动画 -->
		<!-- 表单组件-事件监听 -->
		  <van-search
		    v-model="value"
		    show-action
		    placeholder="请输入搜索关键词"
		    @search="onSearch"
		    @cancel="onCancel"
		  >
		  <template #left>
			  <van-icon name="arrow-left" style="margin-right:6px;"
			  @click="$router.go(-1)"
			  ></van-icon><!-- 添加返回箭头 -->
		  </template>
		  </van-search>
		  <van-cell title="搜索历史">
			  <template>
				  <span @click="clear">清除</span>
			  </template>
		  </van-cell><!-- 搜索历史清除 -->
		  <div><!-- 搜索历史 -->
			<van-tag plain v-for="(tag,index) in searchHistory" :key="index" size="large" 
			style="margin:0 10px 10px 5px"
			>{{tag}}</van-tag><!-- 展示组件-标签-空心样式 -->
		  </div>
	</div>
</template>

<script>
	import { Toast } from 'vant';//轻提示，点击取消提示"取消"
	
	export default{
		name:'MallSearch',
		data(){
			return{
				value:'',
				searchHistory:["手机","电视机","四件套","华为笔记本","苹果笔记本","华为笔记本","苹果"]
			}
		},
	methods: {
		onSearch(val) {
		Toast(val);
		this.searchHistory.push(val)//添加搜索历史
		},
		onCancel() {
		Toast('取消');
		},
		clear(){
			this.searchHistory=[]
		},
	},
	}
</script>

<style>
</style>
