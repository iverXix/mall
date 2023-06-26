<template>
	<div>
		<UserAvatar></UserAvatar>
		<!-- cell单元格组件 -->
		<div>
			<van-cell title="我的订单" is-link value="全部订单"></van-cell>
		</div>
		<!-- 宫格-基础用法 -->
		<van-grid>
		  <van-grid-item icon="daifukuan" text="待付款" />
		  <van-grid-item icon="daifahuo" text="待发货" />
		  <van-grid-item icon="wuliu" text="待收货" />
		  <van-grid-item icon="shouhouguanli" text="已完成" />
		</van-grid>
		<!-- cell单元格组件 -->
		<div>
			<van-cell title="我的优惠卷" is-link value="全部优惠卷"></van-cell>
		</div>
		<!-- 宫格-基础用法 -->
		<van-grid :column-num="3">
		  <van-grid-item icon="coupon" text="待使用" />
		  <van-grid-item icon="coupon-used" text="已使用" />
		  <van-grid-item icon="coupon-due" text="过期关闭" />
		</van-grid>
		<!-- cell单元格组件 -->
		<div>
			<van-cell icon="shoucang" title="我的收藏" is-link ></van-cell>
			<van-cell icon="dingwei"  title="收获地址" is-link ></van-cell>
			<van-cell icon="kefu" title="服务中心" is-link ></van-cell>
		</div>
	</div>
</template>

<script>
	import UserAvatar from '../components/UserAvatar.vue'//引入组件
	
	export default{
		name:'MallUser',
		components:{
			UserAvatar
			}
		}
</script>

<style>
	
</style>
