<template>
	<div class="tab-cart">
		<!-- 顶部编辑 -->
		<div class="cart-header">
			<!-- 编辑按钮操作-对应方法line64 -->
			<van-icon :name="isEditor?'success':'editor'"></van-icon>
			<!-- <span @click="isEditor=!isEditor">{{isEditor?'完成':'编辑'}}</span> -->
		    <span @click="editChange">{{isEditor?'完成':'编辑'}}</span>
			<!-- @click="editChange"对应method中的editChange方法 -->
		</div>
		<!-- 购物车商品列表 -->
		<!-- 表单组件-复选框-复选框组 -->
		<van-checkbox-group v-model="checkedGoods" @change="groupChange"><!--  @change="groupChange对应methods中的groupChange -->
		<!-- 反馈组件-滑动单元格-自定义内容 -->
		<van-swipe-cell v-for="(item,index) in cartInfo.cartList" :key="index" :disabled="!isEditor">
			<div class="goods-item">
				<van-checkbox :name="item.id"></van-checkbox>
				<van-card style="width:100%;background:white;font-size:16px;"
				  :num="item.number"
				  :price="item.price | priceFormat"
				  :title="item.goodsName"
				  :thumb="item.picUrl"
				>
				<!-- 业务组件-商品卡片-自定义内容-标签 -->
				 <template #tags>
				    <van-tag plain v-for="(s,index) in item.specifications" :key="index">{{s}}</van-tag>
				 </template>
				 <!-- 业务组件-商品卡片-自定义内容-按钮 -->
				   <template #footer>
				     <div v-if="!isEditor">添加日期:{{item.addTime}}</div>
				<!-- 表单组件-步进器-基础用法 -->
				     <van-stepper v-else v-model="item.number" />
				   </template>
				</van-card>
			</div>
		 
		  <template #right>
		    <van-button square text="删除" type="danger" style="height:100%;" @click="delItem(index)" />
			<!-- @click="delItem(index)"对应method中的delItem(index)方法 -->
		  </template>
		</van-swipe-cell>
		</van-checkbox-group>
		<template v-if="!cartInfo.cartList.length">购物车为空</template>
		<!-- 底部结算 -->
		<!-- 业务组件-提交订单栏-高级用法 -->
		<!-- totalPrice计算总价，对应line73-computed方法 -->
		<van-submit-bar 
		:price="totalPrice" 
		:button-text="isEditor?'删除':'结算'" 
		@submit="cartSubmit" style="bottom:50px;"
		:loading="loading">
		<van-checkbox v-model="checkedAll" @click="checkedAllChange">全选</van-checkbox>
		<!-- @click='checkedAllChange'对应method中的checkedAllChange方法 -->
		</van-submit-bar>
	</div>
</template>

<script>
	import {getCart} from '../api/api.js'
	
	export default {
		name:'MallCart',
	    data() { 
	    return {
	        checkedGoods:[],//line11,存放的是选中商品的id
			checkedAll:true,//定义checkedAll
	        cartInfo:{
				 cartList:[],
				 cartTotal:{
					" checkedGoodsAmount": 0,
					 "checkedGoodsCount": 0,
					 "goodsAmount": 0,
					 "goodsCount": 0
				 }
			 },
			 isEditor:false,//是否编辑状态
			 loading:false//加载状态
		};
	  },
	  computed:{//计算方法
		  totalPrice(){//对应line43
			  let total = 0;
			 //方法一
			 // for(let i = 0;i<this.cartInfo.cartList.length;i++){
				//   total += this.cartInfo.cartList[i].number * this.cartInfo.cartList[i].price
			 //  }
			 //  return total*100
			  
			  //方法2-foreach方法
			  // this.cartInfo.cartList.forEach(p =>{
				 //  total += p.number*p.price
			  // })
			  // return total*100
			  
			  //方法3-ES6 reduce方法
			  return this.cartInfo.cartList.reduce((total,item)=>{
				  return total += this.checkedGoods.indexOf(item.id)!==-1?item.number * item.price*100:0
				  //this.checkedGoods.indexOf(item.id)==-1?取消选中商品引起价格变化
			  },0)
		  }
	  },
	  created(){//生命周期函数
		  getCart().then((res)=>{
			  console.log(res.data.data)
			  this.cartInfo = res.data.data
			  this.getCheckedList()//对应methods中的getCheckedList
		  })
	  },
	  methods:{
		  getCheckedList(){
			  this.cartInfo.cartList.forEach(p =>{
				  if(p.checked){
					  this.checkedGoods.push(p.id)
				  }
			  })
			  console.log(this.checkedGoods)
		  },
		  groupChange(checkedData){//控制是否全选
			  // console.log(checkedData)
			  //checkedGoods和cartlist长度一样，表示全选
			  this.checkedAll = (this.checkedGoods.length == this.cartInfo.cartList.length)
			  //上一行语句的else写法
			  // if(this.checkedGoods.length == this.cartInfo.cartList.length){
			  // 				  this.checkedAll = true
			  // }else{
			  // 				  this.checkedAll = false
			  // }
		  },
		  checkedAllChange(){//全选按钮控制全选
			  if(this.checkedGoods.length == this.cartInfo.cartList.length){
				  this.checkedGoods = []
				  }else{
				  this.cartInfo.cartList.forEach(p =>{
					  if(this.checkedGoods.indexOf(p.id)===-1){
					  this.checkedGoods.push(p.id)
					 	}
					 }) 
				  }
		  },
		  delItem(index){//滑动点击删除
			  this.cartInfo.cartList.splice(index,1)
		  },
		  cartSubmit(){//底部删除窗口弹窗提示
		  if(this.isEditor){
			//反馈组件-弹出框-消息确认
			this.$dialog.confirm({
			  cancelButtonText: '再想想',
			  message: '确定删除所选商品吗',
			})
			  .then(() => {//确认删除购物车为空
							  this.cartInfo.cartList = []
							  this.isEditor = false
			  })
			  .catch(() => {
			    // on cancel
			  });  
		  }else{
			  this.loading = true
		  }
		},
		editChange(){
			this.isEditor=!this.isEditor
			if(this.isEditor)
			this.loading = false
		}
	  }
	};
</script>

<style>
	.tab-cart{
		padding-bottom:50px;
		box-sazing:border box;
	}
	.cart-header{
		text-align:right;
		height:46px;
		line-height:46px;
		margin-right:15px;
	}
	.goods-item{
		display:flex;
		align-items:center;
	}
</style>
