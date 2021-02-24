<template>
	<view class="user">
		<!-- 头部 -->
		<view class="user-wrap">
			<view class="setting iconfont icon31shezhi"></view>
			<view class="info">
				<image class="avatar" mode="aspectFill" :src="userInfo.headPicUrl" @tap="selectImg"></image>
				<view class="nickname" @tap="selectImg">{{ userInfo.nickName }}</view>
			</view>
		</view>
	
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status-wrap">
				<!-- 单元格 -->
				<!-- <view class="cell">
					<view class="cell-left">
						<image class="cell-icon" src="/static/images/user/icon-order.png" mode="aspectFill"></image>
						<view class="cell-text">全部订单</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view> -->
	
				<!-- 订单状态 -->
				<view class="status-list">
					<view class="status-item" hover-class="btn-hover" v-for="(item, index) in orderStatusList" :key="index" @tap="goOrder(index)">
						<view class="item-icon" :class="item.icon"></view>
						<view class="item-text">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>
	
		<!-- 滑动导航 -->
		<view style="border-radius: 20rpx; overflow: hidden; margin: 0 20rpx;">
			<com-nav :list="list" :col="4"></com-nav>
		</view>
	
		<!-- 用户功能 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in userList" :key="index" @tap="userSelect(index)">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>
	
		<!-- 用户服务 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in serverList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import comNav from './components/com-nav.vue'
	import interfaces from '../../../utils/interfaces.js'
	import {
		pathToBase64,
		base64ToPath
	} from '../../../js_sdk/gsq-image-tools/image-tools/index.js'
	export default {
		data(){
			return {
				userInfo: {
					headPicUrl: '/static/images/user/avatar.jpg',
					nickName: '登录'
				},
				orderStatusList: [
					{ name: '待付款', icon: 'iconfont icon31daifukuan', status: 10 },
					{ name: '待发货', icon: 'iconfont icon31daifahuo', status: 30 },
					{ name: '待收货', icon: 'iconfont icon31daishouhuo', status: 40 },
					{ name: '待评价', icon: 'iconfont icon31daipingjia', status: 50 },
					{ name: '已完成', icon: 'iconfont icon31yiguanzhudianpu', status: 55 }
				],
				currentIndex: 0,
				list: [
					{
						icon: '/static/images/user/class-01.png',
						text: '我的电子券'
					},
					{
						icon: '/static/images/user/class-02.png',
						text: '退换/售后'
					},
					{
						icon: '/static/images/user/class-03.png',
						text: '我的积分'
					},
					{
						icon: '/static/images/user/class-04.png',
						text: '送礼提醒'
					}
				],
				userList: [
					{
						title: '收货地址',
						icon: '/static/images/user/icon-address.png',
						path: 'address-list'
					},
					{
						title: '我的收藏',
						icon: '/static/images/user/icon-collect.png',
						path: 'collect-list'
					},
					{
						title: '充值与余额',
						icon: '/static/images/user/icon-foot.png',
						path: 'browse-list'
					}
				],
				serverList: [
					{
						title: '客服中心',
						icon: '/static/images/user/icon-kefu.png',
						path: 'kefu'
					},
					{
						title: '帮助中心',
						icon: '/static/images/user/icon-help.png',
						path: 'help'
					},
					{
						title: '版本',
						icon: '/static/images/user/icon-about.png',
						text: '1.0.0'
					}
				]
			}
		},
		components: {
			comNav
		},
		onShow() {
		},
		onLoad()  {
			this.init()
		},
		watch: {
			// '$route'(to , from ){
			// 	if(to.path == '/pages/tabBar/personal/personal'){
			// 		 	this.init()
			// 	}
			// }
		},
		methods: {
			userSelect(e){
				if(e.path == "address-list"){
					uni.navigateTo({
						url: "./address-list/address-list"
					})
				}else if (e.path == "browse-list"){
					uni.navigateTo({
						url : "./deposit/deposit"
					})
				}
			},
			goOrder(index){
				uni.navigateTo({
					url:"../../order/user_order?tbIndex="+index 
				})
			},
			init(){
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						this.request({
							url : '/api/idle/current',
							method: "GET",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							success :(ret)=>{
								 this.userInfo.nickName = ret.data
								 this.userInfo.headPicUrl =  ret.avator
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
			selectImg() {
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						let path = res.tempFilePaths[0] 
							const token = JSON.parse(uni.getStorageSync('token')).token 
						uni.uploadFile({
							url: interfaces.userAvator,
							method : "POST",
						    filePath:path,
							name:'avatar',	
							formData: {
								'username' : that.userInfo.nickName
							},
						    header: {
						 			'Authorization': 'Bearer ' + token
						 	},
							success: (ret) => {
								uni.showToast({
									icon: 'none',
									title: JSON.parse(ret.data).message
								})
								that.userInfo.headPicUrl = JSON.parse(ret.data).avator
							}
						})
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '上传失败'
						})
					}
				})
			
			}
		}
	}
	
</script>
<style lang="scss">
page {
	background: #f2f2f2;
}
.btn-hover {
	background: #f2f2f2 !important;
}
.user {
	.user-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vw;
		padding: 30rpx;
		z-index: 9;
		border-radius: 0 0 20% 20%;
		background: url('https://handsel.oss-cn-shenzhen.aliyuncs.com/1588938371592.jpg') no-repeat;
		background-size: cover;
		.setting {
			color: #fff;
			position: absolute;
			top: 60rpx;
			left: 60rpx;
			font-size: 50rpx;
		}
		.info {
			position: absolute;
			text-align: center;
			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}
			.nickname {
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
	.order-status {
		padding: 0 20rpx;
		margin-top: -10vw;
		.status-wrap {
			border-radius: 25rpx;
			overflow: hidden;
			.status-list {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				background: #fff;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				.status-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item-icon {
						line-height: 1;
						font-size: 65rpx;
						color: #bbb;
					}
					.item-text {
						font-size: 28rpx;
						color: #666;
						margin-top: 5rpx;
					}
				}
			}
		}
	}
	.com-item {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 20rpx;
		.com-wrap {
			border-radius: 25rpx;
			overflow: hidden;
		}
	}
	.cell {
		height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
}
</style>