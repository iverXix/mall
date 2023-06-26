<template>
	<van-search  placeholder="请输入搜索关键词" @click="toSearch"/><!-- 共同部分做成组件 -->
</template>

<script>
	export default{
		name:'MallSearchBar',
		methods:{
			toSearch(){
				this.$router.push('/search')
			}
		}
	}
</script>

<style>
</style>
