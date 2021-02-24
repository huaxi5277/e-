<template>
	<view class="content">
        <view class="loader">
        </view>
        <view class="logoimg">
            <image class="logo" src="/static/logo.jpg"></image>
        </view>
		<input  type="text"   placeholder="用户名" class="inputUser" value="" v-model="params.username" />
        <input  type="text"   placeholder="邮箱" class="inputAcc" value="" v-model="params.email" />
        <input type="password" placeholder="密码" class="input" value="" v-model="params.password" />
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
				params : {
					email : "",
					password : "",
					username : ""
				}
			}
		},
		onLoad() {
                //this.go()
		},
		methods: {
               go(){
                       this.toCheck(this.params.email , this.params.password,this.params.username)
                       if (this.toCheck(this.params.email,  this.params.password,this.params.username)) {
                       	// 将要发起请求 
                       	this.request({
                       		url:interfaces.register ,
                       		method: 'POST',
                       		data: {
                       			username : this.params.username,
                       			email: this.params.email,
                       			password: this.params.password
                       		},
                       		success: (res) => {
								setTimeout(()=>{
									uni.showToast({
										icon: 'none',
										title: res.message
									})
									this.params = {
										email : "",
										username : "",
										password : ""
									}
								},500)
                       			if (res.code == 10200) {
                       			    setTimeout(()=>{
										 uni.navigateTo({
										 	url: "../login/login"
										 })
									},2000)
                       			}                       			
                       		}
                       	})
                       }
                   },
               toCheck(eamil, password,username) {
				   console.log(eamil)
               	if (!this.$validate.isEmail(eamil)) {
               		uni.showToast({
               			icon: 'none',
               			title: '请输入正确的邮箱格式'
               		})
               		return 0
               	} 
               	else if (!this.$validate.isName(username)) {
               		uni.showToast({
               			icon: 'none',
               			title: '正确格式的用户名为3-6字符'
               		})
               		return 0
               	}
				else if (!this.$validate.isPwd(password)) {
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

<style>
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
        
     },
	 .inputUser{
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
     .inputAcc{
         margin: 20% 0rem;
         position: absolute;
         top:340rpx;
         height:70upx;
         width: 50%;
         color: #FFFFFF;
         text-align: center;
         border-bottom: 1px #007AFF solid;
         border-radius: 10upx;
         
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