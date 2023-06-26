import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
//引入图标文件
import '@/assets/iconfont/iconfont.css'
//引入所有的组件
import Vant from 'vant';
import 'vant/lib/index.css';
//*引入所有的过滤器文件
import * as filters from '@/filters'
//引入动画文件
import 'animate.css'

//console.log(filters)
// console.log(Object.keys(filters))
//Object.keys(filters)
Object.keys(filters).forEach(key =>{//可以输出所有过滤器不用逐个定义
	// console.log(key)
	// console.log(filters[key])
	Vue.filter(key,filters[key])
})

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
