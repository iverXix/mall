<template>
	<div>
		<search-bar></search-bar><!-- 标签一般用小写 -->
		<!-- 分类选择-导航组件-侧边导航 -左侧-->
		<van-sidebar v-model="activeKey" @change="onChange" class="fl">
		  <van-sidebar-item 
		  v-for="(item,index) in categoryInfo.categoryList"
		  :key="index" 
		  :title="item.name">
		  </van-sidebar-item>
		</van-sidebar>
		<!-- 右侧 -->
		<div>
			<div style="text-align:center;">
				<img :src="categoryInfo.currentCategory.picUrl" style="width:250px;">
				<p>{{categoryInfo.currentCategory.desc}}</p>
			</div>
			<!-- 导航组件-宫格-自定义内容 -->
			<van-grid :border="false" :column-num="3">
			  <van-grid-item v-for="(item,index) in categoryInfo.currentSubCategory" :key="index">
			    <van-image :src="item.picUrl"/>
				<p>{{item.name}}</p>
			  </van-grid-item>
		    </van-grid>
		</div>
		
	</div>
</template>

<script>
	import SearchBar from '../components/SearchBar.vue'//引入组件
	import {getCategory,getCurrentCategory} from '../api/api.js'
	
	export default{
		name:'MallCategory',
		components:{
			SearchBar
		},
		data(){
			return{
				 activeKey: 0,
				 categoryInfo:{
					 categoryList:[],
					 currentCategory:{},
					 currentSubCategory:[]
				 }
			}
		},
		created(){
			getCategory().then(res =>{
				console.log(res)
				this.categoryInfo = res.data.data
			})
		},
		 methods: {
		    onChange(index) {
		     console.log(index)
			 getCurrentCategory(this.categoryInfo.categoryList[index].id).then(res =>{
				 console.log(res)
				 this.categoryInfo.currentCategory = res.data.data.currentCategory
				 this.categoryInfo.currentSubCategory = res.data.data.currentSubCategory
			 })
		    },
		  },
	}
</script>

<style>
</style>
