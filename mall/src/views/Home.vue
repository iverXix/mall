<template>
	<div>
		<!-- 搜索框 -->
		<!-- <van-search  placeholder="请输入搜索关键词" /> -->
		<search-bar></search-bar><!-- 标签一般用小写 -->
		<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item v-for="(pic,index) in homeInfo.banner" :key="index">
			  <img :src="pic.url" style="height:230px;width: 100%;" />
		  </van-swipe-item>
		</van-swipe>
		<!-- 宫格-自定义列数-分类 -->
		<van-grid column-num="6" :border="false" square style="margin-top:10px;"><!-- border去掉边框;square格子高度保持一致 -->
		  <van-grid-item v-for="(chan,index) in homeInfo.channel" 
		  :key="index" 
		  :icon="chan.iconUrl" 
		  :text="chan.name" />
		</van-grid>
		
		<!-- cell单元格组件 -->
		<div>
			<van-cell title="团购专区" is-link value="更多团购商品"></van-cell>
		</div>
		<!-- 商品卡片组件 -->
		<div>
			<van-card v-for="(item,index) in homeInfo.grouponList" :key="index"
			  :origin-price="item.retailPrice | priceFormat"
			  :price="item.grouponPrice | priceFormat"
			  :desc="item.brief"
			  :title="item.name"
			  :thumb="item.picUrl"
			  style="background:white;"
			><!-- | priceFormat价格数字格式过滤器,对应filters -->
			  <template #tags>
			    <van-tag plain type="primary">{{item.grouponNember}}人成团</van-tag>
			    <van-tag plain type="danger">{{item.grouponDiscount}}元再减</van-tag>
			  </template>
			  </van-card>
		</div>
		<!-- cell单元格组件 -->
		<div>
			<van-cell title="品牌商直供" is-link value="更多品牌商"></van-cell>
		</div>
		<!-- 宫格-自定义列数-品牌商 -->
		<van-grid column-num="2" icon-size="150">
		  <van-grid-item v-for="(brand,index) in homeInfo.brandList" 
		  :key="index" 
		  :icon="brand.picUrl" 
		  :text="brand.name" />
		</van-grid>
		<!-- cell单元格组件-新品首发 -->
		<div>
			<van-cell title="新品首发" is-link value="更多新品首发"></van-cell>
		</div>
		<!-- 宫格-自定义列数-新品首发 -->
		<van-grid column-num="2" icon-size="50" :border="false" >
		  <van-grid-item v-for="(newGoods,index) in homeInfo.newGoodsList" 
		  :key="index" 
		  :icon="newGoods.picUrl" 
		  :text="newGoods.name"
		  />
		</van-grid>
		<!-- cell单元格组件-人气推荐 -->
		<div>
			<van-cell title="人气推荐" is-link value="更多人气推荐"></van-cell>
		</div>
		<!-- 商品卡片组件-人气推荐 -->
		<div>
			<van-card v-for="(hotGoods,index) in homeInfo.hotGoodsList" 
			  :key="index"
			  :title="hotGoods.name"
			  :desc="hotGoods.brief"
			  :thumb="hotGoods.picUrl"
			  :origin-price="hotGoods.counterPrice | priceFormat"
			  :price="hotGoods.retailPrice | priceFormat"
			  style="background:white;"
			>
			 </van-card>
		</div>
		<!-- cell单元格组件-专题精选 -->
		<div>
			<van-cell title="专题精选" is-link value="更多专题精选"></van-cell>
		</div>
		
		
	</div>
</template>

<script>
	import {getHome} from '../api/api.js'
	import SearchBar from '../components/SearchBar.vue'//引入组件
	
	export default{
		name:'MallHome',
		data(){
			return{
				homeInfo:{}
				
			}
		},
		created(){
			// axios.get('http://localhost:3000/home/index').then(res =>{
			// 	console.log(res.data.data)
			// 	this.homeInfo = res.data.data
			// })
			
		getHome().then(res =>{
			    console.log(res.data.data)
			    this.homeInfo = res.data.data
		})
		},
		components:{
			SearchBar
		}
	}
</script>

<style>
</style>
