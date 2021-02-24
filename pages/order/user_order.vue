<template>
	<view>
		<!-- 顶部导航 -->
		<view class="topTabBar" :style="{position:headerPosition,top:headerTop}">
			<view class="grid" v-for="(grid,tbIndex) in orderType" :key="tbIndex" @tap="showType(tbIndex)">
				<view class="text" :class="[tbIndex==tabbarIndex?'on':'']">{{grid}}</view>
			</view>
		</view>
		<!-- 考虑非APP端长列表和复杂的DOM使用scroll-view会卡顿，所以漂浮顶部选项卡使用page本身的滑动 -->
		<view class="order-list">
			<view class="list">
				<view class="onorder" v-if="list.length==0">
					<image src="../../../static/img/noorder.png"></image>
					<view class="text">
						没有相关订单
					</view>
				</view>
				<view class="row" v-for="(row,index) in list" :key="index">
					<view class="type">{{typeText[row.type]}}</view>
					<view class="order-info">
						<view class="left">
							<image :src="row.img"></image>
						</view>
						<view class="right">
							<view class="name">
								{{row.name}}
							</view>
							<view class="spec">{{row.spec}}</view>
							<view class="price-number">
								￥<view class="price">{{row.price}}</view>
								x<view class="number">{{row.numner}}</view>
							</view>
						</view>
						
					</view>
					<view class="detail">
						<view class="sum">合计￥<view class="price">{{row.payment}}</view></view><view class="nominal">(含运费 ￥{{row.freight}})</view>
					</view>
					<view class="btns">
						
						<block v-if="row.type=='unpaid'"><view class="pay" @tap="toPayment(row)">付款</view></block>
						<block v-if="row.type=='back'"><view class="default" @tap="remindDeliver(row)">提醒发货</view></block>
						<block v-if="row.type=='unreceived'"><view class="default" @tap="showLogistics(row)">查看物流</view><view class="pay">确认收货</view><view class="pay">我要退货</view></block>
						<block v-if="row.type=='received'"><view class="default">评价</view><view class="default">再次购买</view></block>
						<block v-if="row.type=='completed'"><view class="default">再次购买</view></block>
						<block v-if="row.type=='refunds'"><view class="default">查看进度</view></block>
						<block v-if="row.type=='cancelled'"><view class="default">已取消</view></block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import interfaces from '../../utils/interfaces.js'
	export default {
		data() {
			return {
				headerPosition:"fixed",
				headerTop:"0px",
				typeText:{
					unpaid:'等待付款',
					back:'等待商家发货',
					unreceived:'商家已发货',
					received:'等待用户评价',
					completed:'交易已完成',
					refunds:'商品退货处理中',
					cancelled:'订单已取消'
				},
				orderType: ['全部','待付款','待发货','待收货','待评价','退换货'],
				//订单列表 演示数据
				orderList:[[],[],[],[],[],[]],
				list:[],
				tabbarIndex:0,
				money : 0 , 
				sum : 0,
				order :{}
			};
		},
		onLoad(option) {
			//option为object类型，会序列化上个页面传递的参数
			// console.log("option: " + JSON.stringify(option));
			this.isCreateWallet()
			let tbIndex = parseInt(option.tbIndex)+1;
			this.tabbarIndex = tbIndex;
			this.getList()
			// //兼容H5下排序栏位置
			// #ifdef H5
				let Timer = setInterval(()=>{
					let uniHead = document.getElementsByTagName('uni-page-head');
					if(uniHead.length>0){
						this.headerTop = uniHead[0].offsetHeight+'px';
						clearInterval(Timer);//清除定时器
					}
				},1);
			// #endif
		},
		onPageScroll(e){
			return;
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
		},
		methods: {
			getList(){
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						uni.request({
							url : interfaces.userAllOrder,
							method: "GET",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							success :(ret)=>{
							  if(ret.data.order.length >0) {
								  // 全部订单
								  let temp = {}
								   let tempList = []
								  ret.data.order.forEach((c,i)=>{
									  temp = {
										   type: c.isPay ? "back" : "unpaid",
										   ordersn:0,
										   goods_id: i,
										   img : c.image,
										   name : c.content,
										   price : c.price,
										   payment : parseFloat(c.price)+12,
										   freight : 12.00,
										   numner : 1,
										   money : parseFloat(c.price)+12,
										   itemity : c.itemity,
									  }
									  tempList.push(temp)
								  })
								   this.sum = temp.payment
								  this.orderList[0] = tempList

								  temp = {}
								  tempList = []
								 ret.data.order.filter((c,i)=>c.isPay!=true).forEach((c,i)=>{
								  temp = {
								 type:"unpaid",
								 ordersn:0,
								 goods_id: i,
								 img : c.image,
								 name : c.content,
								 content : c.content,
								 price : c.price,
								 payment : parseFloat(c.price)+12,
								 freight : 12.00,
								 numner : 1,
								 money : parseFloat(c.price)+12,
								 itemity : c.itemity,
								 }
								 tempList.push(temp)
								  })
								  this.orderList[1] = tempList
									temp = {}
									tempList = []
									ret.data.order.filter((c,i)=>c.isPay!=false).forEach((c,i)=>{
									 temp = {
									 type:"back",
									 ordersn:0,
									 goods_id: i,
									 img : c.image,
									 name : c.content,
									 price : c.price,
									 payment :parseFloat(c.price)+12 ,
									 freight : 12.00,
									 numner : 1,
									 money :parseFloat(c.price)+12 , 
									 itemity : c.itemity,
									 }
									 tempList.push(temp)
									 })
									 this.orderList[2] = tempList
									  tempList = []
									 this.orderList[3] = tempList
									 this.orderList[4] = tempList
									 this.list = this.orderList[this.tabbarIndex]
									 console.log(this.orderList)
							  } else {
								 this.list = this.orderList[this.tbIndex];
							  } 
							},
							fail : (err)=>{
								uni.navigateTo({
									url: '../../login/login'
								})
				
							},
						})
					},
					fail : ()=>{
						uni.navigateTo({
							url:'../../login/login'
						})
					}
				})
			},
			isCreateWallet(){
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						uni.request({
							url : interfaces.getUserWallet,
							method: "GET",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							success :(ret)=>{
								this.isCreate = ret.data.result
								if(this.isCreate) {
								  	 uni.getStorage({
								  	 	key : 'token',
								  	 	success : (ret)=>{
								  	 		uni.request({
								  	 			url : interfaces.getUserWallet,
								  	 			method: "GET",
								  	 			header: {
								  	 				'Authorization': 'Bearer ' + JSON.parse(ret.data).token
								  	 			},
								  	 			success :(ret)=>{
													this.money = ret.data.result.money ? ret.data.result.money :  0
													
												},
								  	 			fail : (err)=>{
								  	 				uni.navigateTo({
								  	 					url: '../../login/login'
								  	 				})
								  	 
								  	 			},
								  	 		})
								  	 	},
								  	 	fail : ()=>{
								  	 		uni.navigateTo({
								  	 			url:'../../login/login'
								  	 		})
								  	 	}
								  	 })
								} else {
								   uni.getStorage({
								   	key : 'token',
								   	success : (ret)=>{
								   		uni.request({
								   			url : interfaces.createWallet,
								   			method: "GET",
								   			header: {
								   				'Authorization': 'Bearer ' + JSON.parse(ret.data).token
								   			},
								   			success :(ret)=>{},
								   			fail : (err)=>{
								   				uni.navigateTo({
								   					url: '../../login/login'
								   				})
								   
								   			},
								   		})
								   	},
								   	fail : ()=>{
								   		uni.navigateTo({
								   			url:'../../login/login'
								   		})
								   	}
								   })
								}
							},
							fail : (err)=>{
								uni.navigateTo({
									url: '../../login/login'
								})
				
							},
						})
					},
					fail : ()=>{
						uni.navigateTo({
							url:'../../login/login'
						})
					}
				})
			},
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			showLogistics(row){
				
			},
			remindDeliver(row){
				uni.showToast({
					title:'已提醒商家发货'
				})
			},
			cancelOrder(row){
				uni.showModal({
					title: '取消订单',
					content: '确定取消此订单？',
					success: (res)=>{
						if (res.confirm) {
							console.log('用户点击确定');
							this.doCancelOrder(row.ordersn);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			doCancelOrder(ordersn){
				let typeNum = this.orderList.length;
				for(let i=0;i<typeNum;i++){
					let list = this.orderList[i];
					let orderNum = list.length;
					if(orderNum>0 && list[0].type=='unpaid'){
						for(let j=0;j<orderNum;j++){
							if(this.orderList[i][j].ordersn == ordersn){
								this.orderList[i][j].type = 'cancelled';
								break;
							}
						}
					}
					
				}
			},
			toPayment(row){
				//本地模拟订单提交UI效果
				uni.showLoading({
					title:'正在获取订单...'
				})
			   setTimeout(()=>{
			   			if(this.sum <= this.money) {
			   			   // 发起订单请求 
			   			uni.hideLoading();
			   			   uni.redirectTo({
			   				url: "./amount?amount=" + this.sum + "&orderName=" + row.name + "&result=" + JSON.stringify(row)
			   			})	
			   	} else {
			   		 uni.hideLoading();
			   		 uni.showLoading({
			   		 	title:'余额不足'
			   		 })
			   		 setTimeout(()=>{
			   			  uni.hideLoading();
			   		 },400)
			   	}
			   },1000)
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f3f3;
}
.topTabBar{
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #f8f8f8;
	height: 80upx;
	display: flex;
	justify-content: space-around;
	.grid{
		width: 20%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #444;
		font-size: 28upx;
		.text{
			height: 76upx;
			display: flex;
			align-items: center;
			&.on{
				color: #f06c7a;
				border-bottom: solid 4upx #f06c7a;
			}
		}
		
	}
}
.order-list{
	margin-top: 80upx;
	padding-top: 20upx;
	width: 100%;
	.list{
		width: 94%;
		margin: 0 auto;
		.onorder{
			width: 100%;
			height: 50vw;
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			.text{
				width: 100%;
				height: 60upx;
				font-size: 28upx;
				color: #444;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.row{
			width: calc(100% - 40upx);
			padding: 10upx 20upx;
			border-radius: 10upx;
			background-color: #fff;
			margin-bottom: 20upx;
			.type{
				font-size: 26upx;
				color: #ec652f;
				height: 50upx;
				display: flex;
				align-items: center;
			}
			.order-info{
				width: 100%;
				display: flex;
				.left{
					flex-shrink: 0;
					width: 25vw;
					height: 25vw;
					image{
						width: 25vw;
						height: 25vw;
						border-radius: 10upx;
					}
				}
				.right{
					width: 100%;
					margin-left: 10upx;
					position: relative;
					.name{
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.spec{
						color: #a7a7a7;
						font-size: 22upx;

					}
					.price-number{
						position: absolute;
						bottom: 0;
						width: 100%;
						display: flex;
						justify-content: flex-end;
						font-size: 22upx;
						color: #333;
						display: flex;
						align-items: flex-end;
						.price{
							font-size: 24upx;
							margin-right: 5upx;
						}
						
					}
				}
			}
			.detail{
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				height: 60upx;
				font-size: 26upx;
				.sum{
					padding: 0 8upx;
					display: flex;
					align-items: flex-end;
					.price{
						font-size: 30upx;
					}
				}
				
			}
			.btns{
				height: 80upx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				view{
					min-width: 120upx;
					height: 50upx;
					padding: 0 20upx;
					border-radius: 50upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28upx;
					margin-left: 20upx;
				}
				.default{
					border: solid 1upx #ccc;
					color: #666;
				}
				.pay{
					border: solid 1upx #ec652f;
					color: #ec652f;
				}
			}
		}
	}
}
</style>

