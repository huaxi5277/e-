<template>
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="selectAddress">
			<view class="icon">
				<image src="../../static/img/addricon.png" mode=""></image>
			</view>
			<view class="right" v-if="!isHaveAddr">
				<view class="tel-name">
					<view class="name">
						{{recinfo.name}}
					</view>
					<view class="tel">
						{{recinfo.phone}}
					</view>
				</view>
				<view class="addres">
					{{recinfo.label}}
					{{recinfo.detailed}}
				</view>
			</view>
			<view class="" v-else>
				<view class="" style="display: flex; align-items: center;margin-top: 20upx;" @tap="goCreateAddr">
					暂无地址，马上创建
				</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row,index) in buylist" :key="index">
				<view class="goods-info">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="info">
						<view class="title">{{row.name}}</view>
						<view class="desc" style="margin-top: -40upx;">{{row.desc}}</view>
						<view class="price-number">
							<view class="price">￥{{row.price}}</view>
							<view class="number">
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示-备注 -->
		<view class="order">
			<view class="row">
				<view class="left">
					备注 :
				</view>
				<view class="right">
					<input placeholder="选填,备注内容" v-model="note" />
				</view>
			</view>
		</view>
		<!-- 明细 -->
		<view class="detail">
			<view class="row">
				<view class="nominal">
					商品金额
				</view>
				<view class="content">
					￥{{goodsPrice|toFixed}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					运费
				</view>
				<view class="content">
					￥+{{freight|toFixed}}
				</view>
			</view>
		</view>
		<view class="blck">
			
		</view>
		<view class="footer">
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{sum|toFixed}}</view></view>
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import interfaces  from '../../utils/interfaces.js'
	export default {
		data() {
			return {
				buylist:[],		//订单列表
				goodsPrice:0.0,	//商品合计价格
				sumPrice:0.0,	//用户付款价格
				freight:12.00,	//运费
				note:'',		//备注
				int:1200,		//抵扣积分
				deduction:0,	//抵扣价格
				recinfo:{},
                params : {},
				money : null,
				sum : 0.0,
				uupid : '',
				isHaveAddr : false,
				image : ""
			};
		},
		onShow() {
		},
		onLoad(e) {
			if(e.type == 'backSelect') {
				 let temp = JSON.parse(e.row)
				 let c = temp.address.split('-')
				this.recinfo = {
					id : temp.id,
					name : temp.linkMan,
					phone : temp.mobile,
					label : `${c[0]}-${c[1]}-${c[2]}`,
					detailed : `${c[3]}`,
					isDefault : temp.isDefault
				}
				let data = JSON.parse(e.params)
					this.params = data
					this.image = data.options1.item
					console.log(this.image)
					 // data = JSON.parse(data)
					let temp2 = {
						img : data.options1.item,
						name : data.name,
						price : data.price,
						desc : data.desc,
					}
					this.goodsPrice = data.price 
					this.buylist.push(temp2)
						this.sum = parseFloat(this.goodsPrice) + parseFloat(this.freight)
				
			} else {
				this.getMsgList()
				let data = JSON.parse(e.params)
				this.params = data
				this.image = data.options1.item
				console.log(this.image)
				let temp = {
					img : data.options1.item,
					name : data.name,
					price : data.price,
					desc : data.desc,
				}
				this.goodsPrice = data.price 
				this.buylist.push(temp)	
				this.sum = parseFloat(this.goodsPrice) + parseFloat(this.freight)
			}
			
			
			this.isCreateWallet()
			
		},
		onHide() {
			
		},
		filters: {
			toFixed:function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		methods: {
			goCreateAddr(){
				uni.navigateTo({
					url:"../tabBar/personal/address-list/address-list"
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
								console.log(ret)
								this.isCreate = ret.data.result
								console.log(this.isCreate)
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
													console.log(ret)
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
			getMsgList(){
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						uni.request({
							url : interfaces.getUserAddress,
							method: "GET",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							success :(ret)=>{
								if(ret.data.addr.length == 0) {
									this.isHaveAddr = true 
								}
								//recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深南大道1111号无名摩登大厦6楼A2'},isDefault:true}
								else {
									let temp = {}
									let flag = false
									ret.data.addr.forEach((c,i)=>{
										if(c.isDefault) {
											temp = c 
											flag = true
											return
										}
									})
									
									
									if(!flag) {
										temp = ret.addr[0]
									}
									this.recinfo = {
										id : temp.id,
										name : temp.name,
										phone : temp.phone,
										label : temp.region,
										detailed : temp.detailed,
										isDefault : temp.isDefault
									}
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
			toPay(){
				//商品列表
				//本地模拟订单提交UI效果
				if(this.isHaveAddr) {
					uni.showToast({
						icon:"none",
						title:"暂无收获地址",
					})
					return 
				}
				let result = {
				 isPay : false ,
				 way : 0,
				 ORDERUUID : this.params.pid,
				 price : this.params.price,
				 content : this.params.desc,
				 itemity : this.params.itemity,
				 phone : this.recinfo.phone,
				 address : `${this.recinfo.label}-${this.recinfo.detailed}`,
				 who : this.params.name,
				 money : this.sum,
				 image : this.image
				}
				// 提交订单判断是否重复
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						uni.request({
							url : interfaces.userFindOrder,
							method: "POST",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							data : {
							...result
							},
							success :(ret)=>{
								if(ret.data.callback){
									uni.showToast({
										icon:"none",
										title:"请勿重复提交订单",
									})
								} else{
									uni.showLoading({
										title:'正在提交订单...'
									})
							       setTimeout(()=>{
											let sum  = parseFloat(this.goodsPrice) + parseFloat(this.freight)
											if(sum <= this.money) {
											   // 发起订单请求 
											   uni.getStorage({
											   	key : 'token',
											   	success : (ret)=>{
											   		uni.request({
											   			url : interfaces.userCreateOrder,
											   			method: "POST",
											   			header: {
											   				'Authorization': 'Bearer ' + JSON.parse(ret.data).token
											   			},
														data : {
														...result
														},
											   			success :(ret)=>{
														
											   				setTimeout(()=>{
																uni.hideLoading();
																if(ret.data.result) {
																	uni.redirectTo({
																		url: "./amount?amount=" + sum + "&orderName=" + this.buylist[0].desc + "&result=" + JSON.stringify(result)
																	})	
																}
															}
													,300)
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
			//选择收货地址
			selectAddress(){
				uni.navigateTo({
					url:'../tabBar/personal/address-list/address-list?type=select&params=' + JSON.stringify(this.params)
				})
			},
		}
	}
</script>

<style lang="scss">
.addr{
	width: 86%;
	padding: 20upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	display: flex;
	.icon{
		width: 80upx;
		height: 80upx;
		display: flex;
		align-items: center;
		image{
			width: 60upx;
			height: 60upx;
		}
	}
	.tel-name{
		width: 100%;
		display: flex;
		font-size: 32upx;
		.tel{
			margin-left: 40upx;
		}
	}
	.addres{
		width: 100%;
		font-size: 26upx;
		color: #999;
	}
}
.buy-list{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		margin: 30upx 0;
		.goods-info{
			width: 100%;
			display: flex;
			.img{
				width: 22vw;
				height: 22vw;
				border-radius: 10upx;
				overflow: hidden;
				flex-shrink: 0;
				margin-right: 10upx;
				image{
					width: 22vw;
					height: 22vw;
				}
			}
			.info{
				width: 100%;
				height: 22vw;
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				.title{
					width: 100%;
					font-size: 28upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					// text-align: justify;
					overflow: hidden;
				}
				.spec{
					font-size: 22upx;
					background-color: #f3f3f3;
					color: #a7a7a7;
					height: 40upx;
					display: flex;
					align-items: center;
					padding: 0 10upx;
					border-radius: 20upx;
					margin-bottom: 20vw;
				}
				.price-number{
					position: absolute;
					width: 100%;
					bottom: 0upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 28upx;
					height: 40upx;
					.price{
						color: #f06c7a;
					}
					.number{
						display: flex;
						justify-content: center;
						align-items: center;
						
					}
				}
			}
		}
	}
}
.order{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		margin: 20upx 0;
		height: 40upx;
		display: flex;
		.left{
			font-size: 28upx;
		}
		.right{
			margin-left: 40upx;
			font-size: 26upx;
			color: #999;
			input{
				font-size: 26upx;
				color: #999;
			}
		}
	}
}
.blck{
	width: 100%;
	height: 100upx;
}
.footer{
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;
		
		.settlement{
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.sum{
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;
				.money{
					font-weight: 600;
				}
			}
			.btn{
				padding: 0 30upx;
				height: 60upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}
.detail{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nominal{
			font-size: 28upx;
		}
		.content{
			font-size: 26upx;
			color: #f06c7a;
		}
	}
}
</style>

