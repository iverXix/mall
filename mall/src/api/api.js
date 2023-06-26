import request from '../utils/request.js'

//首页API
export function getHome(){
	return request({
		url:'/home/index',
		method:'get'
	})
}

//分类页面API
export function getCategory () {
	return request({
		url:'/category/index',
		method:'get',
		})
}

export function getCurrentCategory (id) {
	return request({
		url:'/category/info',
		method:'get',
		data:{id}
		})
}

//购物车页面API
export function getCart () {
	return request({
		url:'/cart/index',
		method:'get',
		})
}

//登录API
export function login (user) {
	return request({
		url:'/login',
		method:'post',
		data:user
		})
}
