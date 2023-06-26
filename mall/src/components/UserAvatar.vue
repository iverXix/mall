<template>
	<div>
		<!-- 头像部分 -->
		<div class="user-header">
		<!-- 基础组件-图标 -->
			<van-icon name="set" class="users-icon fr"></van-icon>
			<div class="user-avatar">
				<img src="../assets/images/avatar_default.png"/>
				<div style="color:white;margin-top:10px;">窗外有树影婆娑</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.user-header{
		height:130px;
		background-color:#f00000;
	}
	.users-icon{
		color:white;
		padding:10px;
		font-size:40px;
	}
	.user-avatar{
		text-align:center;
		padding-top:20px
	}
	.user-avatar img{
		width:60px;
		height:60px;
		border-radius:30px;
	}
</style>
