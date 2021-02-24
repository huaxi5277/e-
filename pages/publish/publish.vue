<template>
    <view class="page">
        <view class="feedback-body" >
            <textarea placeholder="请输入..." style="border-bottom:1px solid   #F1F1F3;" v-model="sendDate.content" class="feedback-textare" />
        </view>
        <choose :count="count"  :imgList="imgList"  @changes="fileChange"></choose>
        <compress  ref="compress" :maxwh="maxwh" :quality="quality" > </compress>


        <view class="swiper-list">
            <view class="uni-list-cell uni-list-cell-pd feedback-title">
                <view class="uni-list-cell-db ">图片是否压缩</view>
                <switch :checked="isYasuo" @change="changeIndicatorDots" />
            </view>
        </view>
        <view class='feedback-title'>
            <text>价格</text>
        </view>
        <view class="feedback-body">
            <input class="feedback-input" v-model="sendDate.price" placeholder="(请填写价格)" />
        </view>
		<view class="feedback-body">
		   <picker @change="bindPickerChange" :value="index" :range="array">
		                           <view class="uni-input">{{array[index]}}</view>
		                       </picker>
		</view>
        <button type="default" class="feedback-submit" @tap="send">提交</button>

    </view>
</template>

<script>
    import choose from "../../components/template/image/choose.vue"
    import compress from "../../components/template/image/compress.vue"
	import interfaces from '../../utils/interfaces.js'
    export default {
        name:'newsPublish',
        components:{
        	choose,
            compress
        },
        data() {
            return {
                isYasuo:true,
                count:3,
                maxwh:280,
                quality:1, 
                array : ['办公','家电','服饰','日用','蔬果','运动','书籍','文具'],
                msgContents: ["界面显示错乱", "启动缓慢，卡出翔了", "UI无法直视，丑哭了", "偶发性崩溃"],
                imgList: [],
                sendDate: {
                    content: "",
                    price: 0,
					itemize : 0
                },
				index: 0
            }
        },
        onLoad() {

        },
        methods: {
			 bindPickerChange: function(e) {
			            this.index = e.target.value
			        },
            compressImg(e){
              console.log(e)  
            },
            changeIndicatorDots(e){
            this.isYasuo = !this.isYasuo
            },
            fileChange(e){
              this.imgList=e;
            },
            previewImage() { //预览图片
                uni.previewImage({
                    urls: this.imgList
                });
            },
			toCheck(img, price) {
				if (img.length == 0 || price == "") {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的信息'
					})
					return 0
				} else if(img.length < 3 ) {
					uni.showToast({
						icon: 'none',
						title: '图片不能少于三张！'
					})
						return 0
				}
				return 1
			},
            send() { //发送提交
                this.toCheck(this.imgList , this.sendDate.price)
				let that = this
				const token = JSON.parse(uni.getStorageSync('token')).token
                function requst(imgs,data){
                        uni.uploadFile({
                        url: interfaces.userPublish,
                        filePath:imgs,
                        formData: data,
						name : 'images',
						header: {
							'Authorization': 'Bearer ' + token
						},
                        success: (res) => {
                            if (res.statusCode === 200 && JSON.parse(res.data).serverStatus == 10200 ) {
								uni.hideLoading();
                               setTimeout(()=>{
								   uni.showToast({
								       title: "发布成功!"
								   });
								   that.imgList = [];
								   that.sendDate = {
								       content: "",
								       price: ""
								   }
								   setTimeout(()=>{
									   uni.navigateBack()
								   },1000)
							   },500)
                            }
                        },
                        fail: (res) => {
                            // console.log(res)
                        }
                    });
                }
                
                if(this.toCheck(this.imgList , this.sendDate.price)) {
					if(this.isYasuo){
					    // 打开 loading
						uni.showLoading({title:"加载中..."})
					    this.$refs.compress.yasuoImg(this.imgList).then(e=>{
					        // console.log([this.imgList,e])
					          e.forEach((value, index) => {
					            //var base64= value.tempFilePath
								if(index == e.length - 1 ) {
									this.sendDate = {
										...this.sendDate,
										status :  true ,
										itemity : this.index,
										isSell : 0,
									}
								}
					             requst(value.path,this.sendDate)
					        })
					        
					    })
					}else{
					    
					    let imgs = this.imgList.map((value, index) => {
					      e.forEach((value, index) => {
					          //var base64= value.tempFilePath
					      	if(index == e.length - 1 ) {
					      		this.sendDate = {
					      			...this.sendDate,
					      			status :  true ,
					      			itemity : this.index,
									isSell : 0,
					      		}
					      	}
					           requst(value.path,this.sendDate)
					      })
					    })
					}
				}
            }
        }
    }
</script>

<style>
    page {
        background-color: #EFEFF4;
    }

    .input-view {
        font-size: 28upx;
    }
    .close-view{
        text-align: center;line-height:14px;height: 16px;width: 16px;border-radius: 50%;background: #FF5053;color: #FFFFFF;position: absolute;top: -6px;right: -4px;font-size: 12px;
    }
	.feedback-body{
		border-bottom: 20rpx;
	}
</style>
