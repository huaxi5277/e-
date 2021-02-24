<template>
	<view class="content">
        <view class="loader">
        </view>
        <view class="logoimg">
            <image class="logo" src="/static/logo.jpg"></image>
        </view>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
        <input  type="text"   placeholder="邮箱" class="inputAcc" value="" v-model="params.email" />
        <input type="password" placeholder="密码" class="input" value="" v-model="params.password" />
		<view class="goRegister">
			<text class="register" @tap="goRegister">无账号,立即注册</text>
		</view>
       <button  class="loginBtn" @tap="go">
         Go
       </button>
	</view>
</template>
<script>
	import interfaces from '../../utils/interfaces.js'
	export default {
		data() {
			return {
				title: '请使用e登录生成的安全码登录',
				params : {
					email : "",
					password : ""
				}
			}
		},
		onLoad() {
		},
		methods: {
               go(){
				   this.toCheck(this.params.email , this.params.password) 
				   if(this.toCheck(this.params.email , this.params.password) ) {
					     this.request({
					     	url:interfaces.login ,
					     	method: 'POST',
					     	data: {
					     		email: this.params.email,
					     		password: this.params.password
					     	},
					     	success: (res) => {
					     		setTimeout(()=>{
					     			uni.showToast({
					     				icon: 'none',
					     				title: res.message
					     			})
					     		},500)
					     		if (res.code == 10200) {
									uni.setStorageSync('token' , JSON.stringify(
									  { token : res.token,
										id : res.id}))
					     		    setTimeout(()=>{
					     				 uni.switchTab({
					     				 	url: "../tabBar/home/home"
					     				 })
										 this.params = {
										 	email : "",
										 	password : ""
										 }
					     			},2000)
					     		}
								 if (res.code == 10404) {
								 	setTimeout(()=>{
										this.params = {
											email : "",
											password : ""
										}
										uni.navigateTo({
											url : "../register/register"
										})
									},2000)
								 }
																
					     	}
					     })
					   }  
                },
				goRegister(){
					uni.navigateTo({
						url: "../register/register",
						animationType: 'slide-in-right',
						animationDuration: 2000
					})
				},
				toCheck(email, password) {
					if (!this.$validate.isEmail(email)) {
						uni.showToast({
							icon: 'none',
							title: '请输入正确的邮箱格式'
						})
						return 0
					}  else if (!this.$validate.isPwd(password)) {
									uni.showToast({
										icon: 'none',
										title: '正确格式的密码为6字符'
									})
									return 0
								}
					return 1
				}
		}
	}
</script>

<style lang="scss" scoped>
    page{
        background-color: #000000;
    }
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
    .input{
        margin: 20% 0rem;
        position: absolute;
        top:600rpx;
        height:70upx;
        width: 50%;
        color: #FFFFFF;
        text-align: center;
        border-bottom: 1px #007AFF solid;
        border-radius: 10upx;
        
     }
     .inputAcc{
         margin: 20% 0rem;
         position: absolute;
         top:470rpx;
         height:70upx;
         width: 50%;
         color: #FFFFFF;
         text-align: center;
         border-bottom: 1px #007AFF solid;
         border-radius: 10upx;
         
      }
	  .goRegister{
		  position: absolute;
		  top:900rpx;
		  right: 100rpx;
		  .register{
			  color: #4bb0ff;
			  font-size: 24upx;
		  }
	  }
     .loginBtn{
         background: linear-gradient(to right, #4bb0ff, #6149f6);
         border-radius: 200rpx;
         width: 200rpx;
         position: absolute;
         color: white;
         bottom:150rpx;
     }
    .logoimg{
         position: absolute;
         top:155rpx;
        z-index:10;
    }
	.logo {
		height: 200rpx;
		width: 200rpx;	
          border-radius: 100upx;
	}
	.text-area {
          position: absolute;
          top:530rpx;
		display: flex;
		justify-content: center;
	}
	.title {
          
		font-size: 25rpx;
		color: #8f8f94;
	}
    .loader {
        z-index:1;
        position: absolute;
        top:130rpx;
        width: 250rpx;
        height: 250rpx;
        border-radius: 50%;
        background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
        animation: animate 1.2s linear infinite;
    }
    @keyframes animate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .loader:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background: #f1f1f1;
        border: solid white 10px;
        border-radius: 50%;
    }
</style>