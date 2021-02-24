<template>
   <view class="goods">
	    <view class="goods-detail">
	    	<view class="img-box">
	    		<image :src="avator" mode="" @tap="goChat"></image>
	    	</view>
			<view class="name-box">
				<view class="name">
					{{name}}
					<view class="my_self" v-if="flag">
						自己
					</view>
				</view>
			</view>
			<view class="name-box" style="margin-left: 30upx;margin-top: 50upx;" v-if="isSell == 1 ">
				<view class="name">
					<view class="my_self" style="background-color: #babdc0;">
						卖掉了
					</view>
				</view>
			</view>
	    </view>
		<view class="desc-detail">
			<view class="price">
				￥{{price}}
			</view>
			<view class="desc">
				{{desc}}
			</view>
		</view>
		<view class="itemify">
			{{itemify}}
		</view>
   	    <view class="test-component">
   	        <hm-commodity-display-card :options="options1"></hm-commodity-display-card>
			 <hm-commodity-display-card :options="options2"></hm-commodity-display-card>
			 <hm-commodity-display-card :options="options3"></hm-commodity-display-card>
   	      </view>
		 <view class="atOnce-bug" v-if="!flag">
			 <view class="atOnce-bug-btn" @tap="buy">
			 	立即购买
			 </view>
		 </view> 
   </view>
</template>

<script>
	import HmCommodityDisplayCard from '../../components/hm-commodity-display-card/index.vue'
	import interfaces from '../../utils/interfaces.js'
    export default {
		components: {
			HmCommodityDisplayCard
		},
		data() {
			return {
				pid : "",
				flag : false,
				uupid : null,
				options1: {
				          item: ""
				  },
				  options2: {
				            item : ""
				    },
					options3: {
					          item :""
					  },
						avator : "",
						desc : "",
						price : "",
						name : "",
						item : [],
						itemify : "",
						isSell : null
			}
		},
		onLoad(e) {
			// 发起请求获取特定的id商品 
			const token = JSON.parse(uni.getStorageSync('token')).token
			this.uupid = e.pid
			uni.request({
				url : interfaces.pidGetProduction,
				method: "GET",
				header: {
					'Authorization': 'Bearer ' + token
				},
				data : {
					pid : e.pid,
					
				},
				success :(ret)=>{
					this.itemity = ret.data.production.itemity
					this.price = ret.data.production.price
					this.desc = ret.data.production.content
					this.name = ret.data.production.name 
					this.avator = ret.data.user.avator 
					this.options1.item = ret.data.production.images1
                    this.options2.item = ret.data.production.images2
				    this.options3.item = ret.data.production.images3
					this.entryId = ret.data.entryId
					this.isSell = ret.data.isSell
					const currentId = JSON.parse(uni.getStorageSync('token')).id
					if(currentId == this.entryId) {
						this.flag = true
					}
				},
				fail : (err)=>{
					uni.navigateTo({
						url: '../../login/login'
					})
							
				},
			})
		},
		methods:{
			goChat(){
				if(this.flag) return 
				uni.navigateTo({
					url: `../tabBar/message/chat/chat?pid=${this.pid}&name=${this.name}&frient_id=${this.entryId}&avator=${this.avator}`
				})
			},
			buy(){
				let params = {
					name : this.name,
					price : this.price,
					desc : this.desc,
					options1 : this.options1,
					pid : this.uupid,
					itemity : this.itemity,
					isSell : this.isSell
				}
				uni.navigateTo({
					url:"/pages/order/order?params=" + JSON.stringify(params)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods{
		.goods-detail{
			width: 92%;
			padding: 2% 4%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #F2F2F2;
			.img-box{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50% ;
				margin-right: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.name-box{
				.name {
					font-size: 36rpx;
					font-weight: 600;
					.my_self{
						
						width: 100rpx;
						border-radius: 10rpx;
						height: 40rpx;
						background-color: #007AFF;
						color: #FFFFFF;
						text-align: center;
						line-height: 40rpx;
					}
				}
			}
		}
		.desc-detail{
			width: 92%;
			padding: 2% 4%;
			.price{
				color: red;
				font-size: 40rpx;
				margin-bottom: 20rpx;
			}
			.desc{
				color: #8f969d;
				font-size: 28rpx;
			}
		}
		.atOnce-bug{
			width: 100%;
			height: 120upx;
			position: fixed;
			bottom: 0px;
			background-color: #FFFFFF;
			opacity: 0.9;
			border-top: 1px solid #e1dfd0 ;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			
			&-btn{
				width: 180upx;
				height: 60upx;
				border-radius: 40upx ;
				color: #FFFFFF;
				background-color: #e81a27;
				text-align: center;
				line-height: 60upx;
				margin-right: 20upx;
			}
		}
	}
</style>
