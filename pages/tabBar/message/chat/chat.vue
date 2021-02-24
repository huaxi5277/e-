<template>
	<view>
		<view class="content">
			<scroll-view class="msg-list" scroll-y="true" :scroll-with-animation="scrollAnimation" :scroll-top="scrollTop" :scroll-into-view="scrollToView">
				<view class="row" v-for="(row,index) in msgList" :key="index" :id="'msg'+row.id">
					<!-- 自己发出的消息 -->
					<view class="my" v-if="row.uid==myuid">
						<view class="left">
							<view v-if="row.type=='text'" class="bubble">
								<rich-text :nodes="row.msg.content"></rich-text>
							</view>
							<view v-if="row.type=='voice'" class="bubble voice" @tap="playVoice(row)" :class="playMsgid == row.id?'play':''">
								<view class="length">{{row.msg.length}}</view>
								<view class="icon my-voice"></view>
							</view>
							<view v-if="row.type=='img'" class="bubble img" @tap="showPic(row)">
								<image :src="row.msg.url" :style="{'width': row.msg.w+'px','height': row.msg.h+'px'}"></image>
							</view>
						</view>
						<view class="right">
							<image :src="row.face"></image>
						</view>
					</view>
					<!-- 别人发出的消息 -->
					<view class="other" v-if="row.uid!=myuid">
						<view class="left">
							<image :src="row.face"></image>
						</view>
						<view class="right">
							<view class="user_name">
								<view class="name">{{row.user_name}}</view> <view class="time">{{row.time}}</view>
							</view>
							<view v-if="row.type=='text'" class="bubble">
								<rich-text :nodes="row.msg.content"></rich-text>
							</view>
							<view v-if="row.type=='voice'" class="bubble voice" @tap="playVoice(row)" :class="playMsgid == row.id?'play':''">
								<view class="icon other-voice"></view>
								<view class="length">{{row.msg.length}}</view>
							</view>
							<view v-if="row.type=='img'" class="bubble img" @tap="showPic(row)">
								<image :src="row.msg.url" :style="{'width': row.msg.w+'px','height': row.msg.h+'px'}"></image>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 底部输入栏 -->
		<view class="input-box" :class="showEmji" @touchmove.stop.prevent="discard">
			<!-- H5下不能录音，输入栏布局改动一下 -->
			<!-- #ifndef H5 -->
			<!-- <view class="voice">
				<view class="icon" :class="isVoice?'jianpan':'yuyin'" @tap="switchVoice"></view>
			</view> -->
			<!-- #endif -->
			<!-- #ifdef H5 -->
		<!-- 	<view class="more" @tap="chooseImage">
				<view class="icon tupian"></view>
			</view> -->
			<!-- #endif -->
			<view class="textbox">
				<view class="text-mode"  :class="isVoice?'hidden':''">
					<view class="box">
						<textarea auto-height="true" v-model="textMsg" id="textMsg" />
					</view>
					<view class="em" @tap="chooseEmoji">
						<view class="icon biaoqing"></view>
					</view>
				</view>
			</view>
			<!-- #ifndef H5 -->
			<view class="more" @tap="chooseImage">
				<view class="icon tupian"></view>
			</view>
			<!-- #endif -->
			<label for="textMsg">
			<view class="send" :class="isVoice?'hidden':''" @tap="sendText">
				<view class="btn">
					发送
				</view>
			</view>
			</label>
		</view>
	</view>
</template>

<script>
	import io from '../../../../js/socket.io-client/dist/socket.io.js'
	import socket from '../../../../js_sdk/plus-websocket/index.js'
	import interfaces from '../../../../utils/interfaces.js'
	export default {
		data() {
			return {
				//文字消息
				socketOpen : false,
				textMsg:'',
				friend_avator : "",
				pid : "",
				titleId : "",
				//消息列表
				scrollAnimation:false,
				scrollTop:0,
				scrollToView:'',
				msgList:[],
				msgImgList:[],
				chatCurrent : [],
				myuid:0,
				userInfo : {
					headPicUrl : '',
					nickName : ''
				},
				//录音相关参数
				isVoice:false,
				recording:false,
				willStop:false,
				initPoint:{identifier:0,Y:0},
				recordTimer:null,
				recordLength:0,
				playMsgid:null,
				VoiceTimer:null,
				//表情定义
				showEmji:'',
				friend_id : "",
				friend_id_current : false,
				name : '',
				current_id : "",
				current_name_who : ""
			};
		},
		onLoad(option) {
			// 传递当前的将要聊天的ID 判断用户是不是也在线
			// 不在线 存储当前消息记录 
			// 在线   与对方通信
			this.current_name_who = option.current_name
			this.init()
			const currentId = JSON.parse(uni.getStorageSync('token')).id
			this.current_id = currentId
			if(option.pid) {
				this.pid = option.pid
				this.friend_id = option.frient_id
				this.friend_avator = option.avator
				this.name = option.name
			} else {
				// 根据名字查找某个人 
				uni.getStorage({
					key : 'token',
					success : (retokens)=>{
						this.request({
							url : '/api/idle/current',
							method: "GET",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(retokens.data).token
							},
							success :(retuser)=>{
								 this.userInfo.nickName = retuser.data
								 this.userInfo.headPicUrl =  retuser.avator
								 uni.getStorage({
								 	key : 'token',
								 	success : (retoken)=>{
								 		this.request({
								 			url : '/api/idle/friend_User',
								 			method: "POST",
								 			header: {
								 				'Authorization': 'Bearer ' + JSON.parse(retoken.data).token
								 			},
								 			data : {
								 				f_name : option.name, 
								 			},
								 			success :(ret)=>{
								 				 this.name = option.name
								 				 this.friend_id = ret.entryId
								 				 this.friend_avator = ret.avator
												 this.getMsgList(this.userInfo);
								 				 // 再掉一个接口 消息变成以读
								 				if(this.userInfo.nickName != this.current_name_who){
													uni.request({
														url : '/api/idle/messageHaveRead',
														method: "POST",
														header: {
															'Authorization': 'Bearer ' + JSON.parse(retoken.data).token
														},
														data : {
																					 						user_name : this.userInfo.nickName,
															friend_name : option.name, 
														},
																					 					success: (ret) => {
																					 						console.log(ret)
																					 					}
													})
												}
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
			}
			uni.setNavigationBarTitle({
				title: 	`${option.name}-${this.friend_id_current?'在线':'离线'}`
			});
			this.titleId = setInterval(()=>{
				uni.setNavigationBarTitle({
					title: 	`${this.name}-${this.friend_id_current?'在线':'离线'}`
				});
			},100)
			
			
			
			// 连接聊天服务器 
			   socket.connectSocket({
				   url : 'ws://127.0.0.1:4000'
			   })
			   socket.onSocketOpen((res)=>{
				   this.socketOpen = true
			   })
			   socket.onSocketMessage((str)=>{
				   this.chatCurrent = JSON.parse(str.data)
				   // console.log(this.chatCurrent)
				   if(Array.isArray(this.chatCurrent)) {
					   let index = this.chatCurrent.indexOf(this.friend_id)
					    if(index > -1) {
					   						this.friend_id_current = true 
					   					}
				   } else {
					 var nowDate = new Date();
					 	let content = {'content' : this.chatCurrent.connect }
					 	let lastid = this.msgList[this.msgList.length-1].id;
					 	lastid++;
					 	let msg = {id:lastid,uid:1,user_name:option.name,face:this.friend_avator,time:nowDate.getHours()+":"+nowDate.getMinutes(),type:'text',msg:content,isChat : this.friend_id_current ? '1' : '0',friend_name : this.userInfo.nickName};
						// this.saveChatList(JSON.stringify(msg))
					 	this.msgList.push(msg);
					 	return 
				   }
				
			   })
			   
			   
			  
		},
		onShow() {
					const id = JSON.parse(uni.getStorageSync("token")).id
				  let timeId =	setInterval(()=>{
						if(this.socketOpen){
							// 发一个消息
							socket.sendSocketMessage({
								data : id
							})
							clearInterval(timeId)
						}
					},500)
				},
				destroyed() {
					clearInterval(this.titleId)
				},
		methods:{
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
			
			saveChatList(data){
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						uni.request({
							url : interfaces.userChat,
							method: "POST",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							data : {
								data : data 
							},
							success :(ret)=>{
								 console.log(ret)
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
			getMsgList(temp){
				uni.getStorage({
					key : 'token',
					success : (ret)=>{
						this.request({
							url : interfaces.getChat,
							method: "POST",
							header: {
								'Authorization': 'Bearer ' + JSON.parse(ret.data).token
							},
							data : {
								user_name : this.userInfo.nickName,
								friend_name : this.name
							},
							success :(ret)=>{
								console.log(ret)
								let temp = {}
								let list =  []
								ret.chat.filter((c,i)=>c.user_name == this.name || c.user_name == this.userInfo.nickName && c.friend_name == this.name || c.friend_name == this.userInfo.nickName).forEach((c , i )=>{
									temp = {id:i,uid:c.user_name== this.userInfo.nickName ? 0 : 1   ,user_name:c.user_name,face:c.face,time:c.time,type:c.type,msg:{content:c.msg}},
									
									list.push(temp)
								})
								this.msgList = list;
								console.log(this.msgList)
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
			// 接受消息(筛选处理)
			screenMsg(msg){
				//从长连接处转发给这个方法，进行筛选处理
				if(msg.uid!=this.myuid){
					uni.vibrateLong();
				}
				switch (msg.type){
					case 'text':
						this.addTextMsg(msg);
						break;
					case 'voice':
						this.addVoiceMsg(msg);
						break;
					case 'img':
						this.addImgMsg(msg);
						break;
				}
				this.$nextTick(function() {
					this.scrollToView = 'msg'+msg.id
				});
			},
			// 发送文字消息
			sendText(){
				if(!this.textMsg){
					return;
				}
				let msg = {content:this.textMsg}
				this.sendMsg(msg,'text');
			},
			// 发送消息
			sendMsg(content,type){
				//实际应用中，此处应该提交长连接，模板仅做本地处理。
				var nowDate = new Date();
				let lastid = this.msgList.length > 0  ? this.msgList[this.msgList.length-1].id : 0  ;
				lastid++;
				let msg = {id:lastid,uid:0,user_name:this.userInfo.nickName,face:this.userInfo.headPicUrl,time:nowDate.getHours()+":"+nowDate.getMinutes(),type:type,msg:content , isChat : this.friend_id_current ? '1' : '0',friend_name : this.name };
				this.screenMsg(msg);
			},
			
			// 处理文字消息
			addTextMsg(msg){
				if(this.socketOpen){
					socket.sendSocketMessage({
						data : "##" + this.friend_id + this.textMsg
					})
				}
				// 现在像服务器发送消息
				this.msgList.push(msg);
				this.saveChatList(JSON.stringify(msg))
				this.textMsg = ''
			},
		}
	}
</script>

<style lang="scss">
page{
	background-color: #e5e5e5;
}

	.icon {
		font-size:56upx;
		color: #333;
	}
.hidden{
	display: none !important;
}
@keyframes showEM {
	0% {transform: translateY(0);}
	100% {transform: translateY(-42vw);}
}
@keyframes hideEM {
	0% {transform: translateY(-42vw);}
	100% {transform: translateY(0);}
}
.emoji-box{
	&.hideEmoji{animation: hideEM .15s linear both;}
	&.showEmoji{animation: showEM .15s linear both;}
	width: 96%;
	height: 42vw;
	padding: 20upx 2%;
	background-color: #f3f3f3;
	border-top: solid 1upx #ddd;
	position: fixed;
	z-index: 20;
	top: 100%;
	.swiper{
		swiper-item{
			display: flex;
			flex-wrap: wrap;
			view{
				width: 12vw;
				height: 12vw;
				display: flex;
				justify-content: center;
				image{
					width: 60%;
				}
			}
		}
	}
}
.input-box{
	&.hideEmoji{animation: hideEM .15s linear both;}
	&.showEmoji{animation: showEM .15s linear both;}
	width: 98%;
	min-height: 100upx;
	padding: 0 1%;
	background-color: #f2f2f2;
	display: flex;
	position: fixed;
	z-index: 20;
	bottom: 0;
	.voice,.more{
		flex-shrink: 0;
		width: 90upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.send{
		//H5发送按钮左边距
		/* #ifdef H5 */
		margin-left: 20upx;
		/* #endif */
		flex-shrink: 0;
		width: 100upx;
		height: 100upx;
		display: flex;
		align-items: center;
		.btn{
			width: 90upx;
			height: 56upx;
			display: flex;
			justify-content: center;
			align-items: center;
			background:linear-gradient(to right,#f09b37,#eb632c);
			color: #fff;
			border-radius: 6upx;
			font-size: 24upx;
		}
	}
	.textbox{
		width: 100%;
		min-height: 70upx;
		margin-top: 15upx;
		.voice-mode{
			width: calc(100% - 2upx);
			height: 68upx;
			border-radius: 70upx;
			border:solid 1upx #cdcdcd;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			background-color: #fff;
			color: #555;
			&.recording{
				background-color: #e5e5e5;
			}
		}
		.text-mode{
			width: 100%;
			min-height: 70upx;
			display: flex;
			background-color: #fff;
			border-radius: 40upx;
			.box{
				width: 100%;
				padding-left: 30upx;
				min-height: 70upx;
				display: flex;
				align-items: center;
				textarea{
					width: 100%;
				}
			}
			.em{
				flex-shrink: 0;
				width: 80upx;
				height: 70upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
.record{
	width: 40vw;
	height: 40vw;
	position: fixed;
	top: 55%;
	left: 30%;
	background-color: rgba(0,0,0,.6);
	border-radius: 20upx;
	.ing{
		width: 100%;
		height: 30vw;
		display: flex;
		justify-content: center;
		align-items: center;
		@keyframes volatility {
			0% {background-position: 0% 130%;}
			20% {background-position: 0% 150%;}
			30% {background-position: 0% 155%;}
			40% {background-position: 0% 150%;}
			50% {background-position: 0% 145%;}
			70% {background-position: 0% 150%;}
			80% {background-position: 0% 155%;}
			90% {background-position: 0% 140%;}
			100% {background-position: 0% 135%;}
		}
		.icon{
			background-image:linear-gradient(to bottom,#f09b37,#fff 50%); 
			background-size:100% 200%;
			animation: volatility 1.5s ease-in-out -1.5s infinite alternate;
			-webkit-background-clip:text; 
			-webkit-text-fill-color:transparent; 
			font-size: 150upx;
			color: #f09b37;
		}
	}
	.cancel{
		width: 100%;
		height: 30vw;
		display: flex;
		justify-content: center;
		align-items: center;
		.icon{
			color: #fff;
			font-size: 150upx;
		}
	}
	.tis{
		width: 100%;
		height: 10vw;
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: #fff;
		&.change{
			color: #f09b37;
		}
	}
}
.content{
	width: 100%;
	.msg-list{
		width: 96%;
		padding: 0 2%;
		position: absolute;
		top: 0;
		bottom: 100upx;
		.row{
			&:first-child{
				margin-top: 20upx;
			}
			padding: 20upx 0;
			.my .left,.other .right{
				width: 100%;
				display: flex;
				.bubble{
					max-width: 70%;
					min-height: 50upx;
					border-radius: 10upx;
					padding: 15upx 20upx;
					display: flex;
					align-items: center;
					font-size: 32upx;
					word-break: break-word;
					&.img{
						background-color: transparent;
						padding:0;
						overflow: hidden;
						image{
							max-width: 350upx;
							max-height: 350upx;
						}
					}
					&.voice{
						.icon{
							font-size: 40upx;
							display: flex;
							align-items: center;
						}
						.icon:after
						{
							content:" ";
							width: 53upx;
							height: 53upx;
							border-radius: 100%;
							position: absolute;
							box-sizing: border-box;
						}
						.length{
							font-size: 28upx;
						}
					}
				}
			}
			.my .right,.other .left{
				flex-shrink: 0;
				width: 80upx;
				height: 80upx;
				image{
					width: 80upx;
					height: 80upx;
					border-radius: 10upx;
				}
			}
			.my{
				width: 100%;
				display: flex;
				justify-content: flex-end;
				.left{
					min-height: 80upx;
					
					align-items: center;
					justify-content: flex-end;
					.bubble{
						background-color: #f06c7a;
						color: #fff;
						&.voice{
							.icon{
								color: #fff;
							}
							.length{
								margin-right: 20upx;
							}
						}
						&.play{
							@keyframes my-play {
								0% {
									transform: translateX(80%);
								}
								100% {
									transform: translateX(0%);
								}
							}
							.icon:after
							{
								border-left: solid 10upx rgba(240,108,122,.5);
								animation: my-play 1s linear infinite;
							}
						}
					}
				}
				.right{
					margin-left: 15upx;
				}
			}
			.other{
				width: 100%;
				display: flex;
				.left{
					margin-right: 15upx;
				}
				.right{
					flex-wrap: wrap;
					.user_name{
						width: 100%;
						height: 45upx;
						font-size: 24upx;
						color: #999;
						display: flex;
						.name{
							margin-right: 50upx;
						}
					}
					.bubble{
						background-color: #fff;
						color: #333;
						&.voice{
							.icon{
								color: #333;
								
							}
							.length{
								margin-left: 20upx;
							}
						}
						&.play{
							@keyframes other-play {
								0% {
									transform: translateX(-80%);
								}
								100% {
									transform: translateX(0%);
								}
							}
							.icon:after
							{
								border-right: solid 10upx rgba(255,255,255,.8);
								
								animation: other-play 1s linear infinite;
							}
						}
					}
				}
			}
		}
	}
}
</style>