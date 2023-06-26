<template>
	<van-tabbar route active-color="#ee0a24"><!-- 路由模式搭配 vue-router,会匹配页面路径和标签的 to 属性并自动选中 ;active-color:改变颜色-->
	 <!-- 引入图标文件 -->
	  <van-tabbar-item v-for="(item,index) in tabbar"
	  :key="index"
	  :icon="item.icon"
	  :to="item.path">{{item.name}}</van-tabbar-item>
	  
	</van-tabbar>
</template>

<script>
	export default {
    name: 'Tabbar',
    data() {
        return {
			// 图标文件代码
            tabbar: [
                {
                name: '精选',
                path: '/home',
                pathName: 'home',
                icon: 'compass-full',
                dot: false
                },
                {
                name: '分类',
                path: '/category',
                pathName: 'class',
                icon: 'class-full',
                dot: false
                },
                {
                name: '购物车',
                path: '/cart',
                pathName: 'cart',
                icon: 'cart-full',
                dot: false
                },
                {
                name: '我的',
                path: '/user',
                pathName: 'user',
                icon: 'wode',
                dot: false
                }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
</style>
