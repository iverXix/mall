import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import {getToken} from '../utils/token.js'

Vue.use(VueRouter)

const routes = [
  {

    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
	meta:{//页面跳转显示底部导航
		showTab:true
	}
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
	meta:{
		showTab:true
	}
  },
  {
    path: '/cart',
    name: 'Cart ',
    component:Cart ,meta:{
		showTab:true,
		login:true
	}
  },
  {
    path: '/user',
    name: 'User',
    component: User,
	meta:{
		showTab:true,
		login:true
	}
  },
  {
    path: '/search',
    name: 'Search',
    component:Search
  },
  {
    path: '/login',
    name: 'Login',
    component:Login,
	meta:{//默认出现底部导航
		showTab:true
	}
  }
   
 
]

//解决vue-router升级导致地via a navigation guard.问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// vue-router全局前置守卫
router.beforeEach((to, from, next) => {
	let token = getToken()
	if(!token){
		if (to.meta.login){
			  next({ name: 'Login' ,query:{redirect:to.path}})
			  return
		}
	}
   //不需要登录页面或已登录页面
   next()
})

export default router
