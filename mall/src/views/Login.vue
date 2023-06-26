<template>
	<!-- 引用组件套用顶部格式 -->
	<div>
		<UserAvatar></UserAvatar>
	<!-- 表单组件-输入框-显示图标 -->
	<div>
	  <van-field
	    v-model="username"
	    clearable
	    left-icon="username"
		placeholder="请输入用户名"
	    />
	<van-field
		v-model="password"
		:type="passwordVisiable?'text':'password'"
		left-icon="lock"
		:right-icon="passwordVisiable?'eye-open':'eye-close'"
		@click-right-icon.prevent="passwordVisiable=!passwordVisiable"
		placeholder="请输入密码"
		  />
	</div>
	<div style="margin:10px;" class="clearfix">
		<div class="fl">免费注册</div>
		<div class="fr">忘记密码</div>
	</div>
	<van-button type="danger" style="width:95%;margin:10px;" @click="doLogin">登录</van-button>
    </div>
	</template>

<script>
	import UserAvatar from '../components/UserAvatar.vue'//引入组件
	import {login} from '../api/api.js'
	import {setToken} from '../utils/token.js'
	
	export default{
		name:'MallLogin',
		
		data(){
			return{
				username:'',
				password:'',
				passwordVisiable:false,
				}
			},
		components:{
			 UserAvatar
			},
		methods:{
			doLogin(){//方法对应line26
				let user = {
					username:this.username,
					password:this.password
				}
				login(user).then(res =>{
					console.log(res)
					setToken(res.data.token)
					//重定向
					this.$router.push(this.$route.query.redirect?this.$route.query.redirect:'/user')
				})
			}
		}	
	}
</script>

<style>
	
</style>
