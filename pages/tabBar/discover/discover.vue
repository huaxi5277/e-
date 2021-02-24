<template>
		<view class="product-list">
			<view
				class="product"
				v-for="(product,index) in productList"
				:key="index"
				@tap="toGoods(product)"
				ref="pro_item"
			>
				<image mode="widthFix" :src="product.img"></image>
				<view class="name">{{ product.name }}</view>
				<view class="info">
					<view class="price">{{ product.price }}</view>
					<view class="slogan">{{ product.slogan }}</view>
				</view>
			</view>
			</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js'
	export default {
		data() {
			return {
				productList : [],
				id : 0 ,
				length : 0,
			}
		},
		methods: {
			// 获取商品列表
			getAllProduction(){
				const token = JSON.parse(uni.getStorageSync('token')).token
				uni.request({
					url : interfaces.allproductionFifty,
					method: "GET",
					header: {
						'Authorization': 'Bearer ' + token
					},
					data : {
						id : this.id
					},
					success :(ret)=>{
						this.length = ret.data.len
						// {
						// 	goods_id: 0,
						// 	img: '/static/img/goods/p1.jpg',
						// 	name: '商品名称商品名称商品名称商品名称商品名称',
						// 	price: '￥168',
						// 	slogan: '1235人付款'
						// },
						let temp = {}
						
						ret.data.publish.forEach((c,i)=>{
							temp = {
									goods_id: c.id,
									img: c.images1,
									name: c.content,
									price: `￥${c.price}`,
									slogan: c.name
							}
							this.productList.push(temp)
						
						})
					},
					fail : (err)=>{
						uni.navigateTo({
							url: '../../login/login'
						})
								
					},
				})
			},
			toGoods(e) {
				uni.navigateTo({
					url: `../../goods/goods?pid=${e.goods_id}`
				});
			},
		},
		onLoad() {
			console.log('load')
		},
		onShow() {
			this.productList = []
			this.length = 0 ;
			this.id = 0 ;
			this.getAllProduction()
		},
		onPullDownRefresh() {
			setTimeout(()=> {
				uni.stopPullDownRefresh();
				this.productList = []
				this.id = 0
				this.length = 0 
				this.getAllProduction()
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			let len = this.productList.length;
			if (len >= this.length) {
				// this.loadingText = '到底了';
				return false;
			} else {
				this.id+=5; 
				this.getAllProduction()
			}
		},
	}
</script>

<style lang="scss">
	.product-list {
		width: 92%;
		padding: 0 4% 3vw 4%;
		// display: flex;
		// justify-content: space-between;
		// flex-wrap: wrap;
		column-count: 2;
		column-gap: 20rpx;
		.product {
			break-inside: avoid;
			width: 100%;
			border-radius: 20upx;
			background-color: #fff;
			margin: 0 0 15upx 0;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
			image {
				width: 100%;
				border-radius: 20upx 20upx 0 0;
			}
			.name {
				width: 92%;
				padding: 10upx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 30upx;
			}
			.info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;
	
				.price {
					color: #e65339;
					font-size: 30upx;
					font-weight: 600;
				}
				.slogan {
					color: #807c87;
					font-size: 24upx;
				}
			}
		}
	}
</style>
