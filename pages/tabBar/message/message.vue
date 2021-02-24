<template>
	<view>
        <view class="chat-list">
			<view class="chat" v-for="(chat,index) in chatList" :key="index">
				<view class="row" @tap="toChat(chat)">
					<view class="left">
						<image :src="chat.face"></image>
					</view>
					<view class="right">
						<view class="top">
							<view class="username">{{chat.username}}</view>
							<view class="time">{{chat.time}}</view>
						</view>
						<view class="bottom">
							<view class="msg">{{chat.msg}}</view>
							<view class="tis" v-if="chat.tisNum>0&&whoSendMsg!=userInfo.nickName">{{chat.tisNum}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="" v-if="chatList.length<=0" style="text-align: center; margin-top: 60upx;" >
				暂无消息
			</view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js'
	export default {
		data() {
			return {
				userInfo : {
					headPicUrl : '',
					nickName : ''
				},
				chatList:[],
				whoSendMsg:"",
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onShow() {
          this.init()
		},
		methods: {
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
								 console.log(this.userInfo)
								 this.getMsgList(this.userInfo);
							},
							fail : (err)=>{
								// uni.navigateTo({
								// 	url: '../../login/login'
								// })
				
							},
						})
					},
					fail : ()=>{
						// uni.navigateTo({
						// 	url:'../../login/login'
						// })
					}
				})
			},
			toChat(chat){
				uni.navigateTo({
					url: `./chat/chat?name=${chat.username}&current_name=${this.whoSendMsg}`
				})
			},
			getMsgList(temp){
				
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						this.request({
							url : interfaces.getCurrentUserChat,
							method: "POST",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							data : {
								user_name : this.userInfo.nickName,
							},
							success :(ret)=>{
								
								let temp = {}
								let list =  []
								let tempList = [] 
								let flag  = true 
								let result = [] 
								 result = ret.chat.filter((c,i)=>{
									return c.isChat != 1
								})
								console.log(result)
								if(result.length == 0) {
									let f_flag = true 
									ret.chat.forEach((c_m , i_m)=>{
										  f_flag = true
										   this.whoSendMsg = c_m.user_name
										if(tempList.length == 0) {
											tempList.push({
												friend_name : c_m.friend_name != this.userInfo.nickName ? c_m.friend_name : c_m.user_name,
												tisNum : 0 ,
												face:c_m.face,
												time:c_m.time,
												msg: c_m.msg,
											})
										}
										tempList.forEach((c_mm , i_mm)=>{
											if(c_mm.friend_name == (c_m.friend_name != this.userInfo.nickName ? c_m.friend_name : c_m.user_name) ) {
												c_mm.msg = c_m.msg
												f_flag = false
											}
										})
										
										if(f_flag) {
											tempList.push({
												friend_name : c_m.friend_name,
												tisNum : 0,
												face:c_m.face,
												time:c_m.time,
												msg: c_m.msg,
											})
										}
										
									})
									tempList.forEach((c_t , i_t)=>{
									    temp = {
												uid:i_t+1,
												username:c_t.friend_name != this.userInfo.nickName ? c_t.friend_name : c_t.user_name ,
												face:c_t.face,
												time:c_t.time,
												msg: c_t.msg,
												tisNum:0
										}
										list.push(temp)
									})
									this.chatList = list;
								} 
								else {
									result.forEach((c_m , i_m)=>{
										  flag = true 
										  this.whoSendMsg = c_m.user_name
										if(tempList.length == 0) {
											tempList.push({
												friend_name : c_m.friend_name != this.userInfo.nickName ? c_m.friend_name : c_m.user_name,
												tisNum : 1 ,
												face:c_m.face,
												time:c_m.time,
												msg: c_m.msg,
											})
										}
										tempList.forEach((c_mm , i_mm)=>{
											if(c_mm.friend_name == c_m.friend_name != this.userInfo.nickName ? c_m.friend_name : c_m.user_name ) {
												c_mm.tisNum +=1
												flag = false
											}
										})
										
										if(flag) {
											tempList.push({
												friend_name : c_m.friend_name != this.userInfo.nickName ? c_m.friend_name : c_m.user_name,
												tisNum : 1,
												face:c_m.face,
												time:c_m.time,
												msg: c_m.msg,
											})
										}
										
									})
									
									
									tempList.forEach((c_t , i_t)=>{
									    temp = {
												uid:i_t+1,
												username:c_t.friend_name != this.userInfo.nickName ? c_t.friend_name : c_t.user_name,
												face:c_t.face,
												time:c_t.time,
												msg: c_t.msg,
												tisNum:1
										}
										list.push(temp)
									})
									this.chatList = list;
									// 到此为止 未读的消息已经找到了
									 result = ret.chat.filter((c,i)=>{
										return c.isChat != 0
									})
									
									let ff_flag = true
									list = [] 
									result.forEach((c_m_m , i_m_m)=>{
										  ff_flag = true 
										tempList.forEach((c_mm , i_mm)=>{
											if(c_mm.friend_name == c_m_m.friend_name != this.userInfo.nickName ? c_m_m.friend_name : c_m_m.user_name ) {
												ff_flag = false
											}
										})
										if(ff_flag) {
											tempList.push({
												friend_name : c_m_m.friend_name != this.userInfo.nickName ? c_m_m.friend_name : c_m_m.user_name,
												tisNum : 0,
												face:c_m_m.face,
												time:c_m_m.time,
												msg: c_m_m.msg,
											})
										}
									})

									tempList.forEach((c_t_t , i_t_t)=>{
										
										this.chatList.forEach((cc,ii)=>{
											if(cc.username != c_t_t.friend_name) {
										          temp = {
										          		uid:i_t_t+1,
										          		username:c_t_t.friend_name,
										          		face:c_t_t.face,
										          		time:c_t_t.time,
										          		msg: c_t_t.msg,
										          		tisNum:0
										          }
										          list.push(temp)		
											}
										})
									    
									})
									this.chatList = this.chatList.concat(list);
									
								}
								  
								// 滚动到底部
								this.$nextTick(function() {
									this.scrollTop = 9999;
									this.scrollAnimation = true;
								});
							},
							fail : (err)=>{
								// uni.navigateTo({
								// 	url: '../../login/login'
								// })
				
							},
						})
					},
					fail : ()=>{
						// uni.navigateTo({
						// 	url:'../../login/login'
						// })
					}
				})
			},
		}
	}
</script>

<style  lang="scss">
	page{
		background-color: rgba(0,0,0,0);
	}
	.chat-list{
		width: 94%;
		padding: 0 3%;
		.chat{
			width: 100%;
			height: 100upx;
			padding: 20upx 0;
			border-bottom: solid 1upx #eaeaea;
			.row{
				display: flex;
				justify-content: flex-start;
				.left{
					flex-shrink:0;
					width: 100upx;
					height: 100upx;
					image{
						width: 100upx;
						height: 100upx;
						border-radius: 20upx;
					}
				}
				.right{
					flex-shrink:1;
					width: 98%;
					padding-left: 2%;
					.top{
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						.usernam{
							font-size: 26upx;
						}
						.time{
							font-size: 22upx;
							color: #bebebe;
						}
					}
					.bottom{
						width: 100%;
						height: 40upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.msg{
							font-size: 25upx;
							color: #777;
						}
						.tis{
							width: 35upx;
							height: 35upx;
							font-size: 22upx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: #eb4d3d;
							color: #fff;
							border-radius: 100%;
						}
					}
				}
			}
		}
	}
</style>
