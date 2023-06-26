<template>
  <div id="app">
	  <transition enter-active-class="animate__bounceInRight" fade="out-in"><!-- 添加transition动画 -->
		  <router-view/>
	  </transition>
	  <tab-bar v-if="$route.meta.showTab"></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar.vue'	
  export default{
	  name:'MallApp',
	  data(){
		  return{
			  
		  }
	  },
	  components:{
		  TabBar
	  }
  }
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
