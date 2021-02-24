<template>
	<view>
		<view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="target" v-for="(target,index) in orderbyList" @tap="select(index)" :key="index" :class="[target.selected?'on':'']">
				{{target.text}}
				<view v-if="target.orderbyicon" class="icon" :class="target.orderbyicon[target.orderby]"></view>
			</view>
		</view> 
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list" v-if="goodsList.length > 0 ">
			<view class="product-list">
				<view class="product" v-for="(goods) in goodsList" :key="goods.goods_id" @tap="toGoods(goods)">
					<image mode="widthFix" :src="goods.img"></image>
					<view class="name">{{goods.name}}</view>
					<view class="info">
						<view class="price">{{goods.price}}</view>
						<view class="slogan">{{goods.slogan}}</view>
					</view>
				</view>
			</view>
			<view class="loading-text" v-if="goodsList.length > 2 ">{{loadingText}}</view>
		</view>
		<view class="goods-list" v-else>
			<view class="" style="text-align: center;">
				 暂无数据
			</view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js'
	export default {
		data() {
			return {
				goodsList:[
					// { goods_id: 0, img: '/static/img/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', slogan:'1235人付款' },
				],
				initList : [],
				loadingText:"正在加载...",
				headerTop:"0px",
				headerPosition:"fixed",
				id : 0 ,
				length : 0 , 
				primaryKey : 0,
				orderbyList:[
					{text:"销量",selected:true,orderbyicon:false,orderby:0},
					{text:"价格",selected:false,orderbyicon:['sheng','jiang'],orderby:0},
				],
				orderby:"sheng"
			};
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.cid); //打印出上个页面传递的参数。
			this.primaryKey = option.cid - 1 ;
			uni.setNavigationBarTitle({
				title: option.name
			});
			
			//兼容H5下排序栏位置
			// #ifdef H5
				//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
				let Timer = setInterval(()=>{
					let uniHead = document.getElementsByTagName('uni-page-head');
					if(uniHead.length>0){
						this.headerTop = uniHead[0].offsetHeight+'px';
						clearInterval(Timer);//清除定时器
					}
				},1);
			// #endif
			
			this.getClassifyProduction()
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(()=>{
				uni.stopPullDownRefresh();
				this.id = 0 ;
				this.goodsList = [] 
				this.getClassifyProduction()
		    }, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			let len = this.goodsList.length;
			if (len >= this.length) {
				this.loadingText = '到底了';
				return false;
			} else {
				this.id += 2  
				this.getClassifyProduction()
			}
		},
		methods:{
			//商品跳转
			toGoods(e){
				// uni.showToast({title: '商品'+e.goods_id,icon:"none"});
				uni.navigateTo({
					url: `../goods?pid=${e.goods_id}` 
				});
			},
			//排序类型
			select(index){
				let tmpTis = this.orderbyList[index].text+"排序 "
				if(this.orderbyList[index].orderbyicon){
					let type = this.orderbyList[index].orderby==0?'升序':'降序';
					if(this.orderbyList[index].selected){
						type = this.orderbyList[index].orderby==0?'降序':'升序';
						this.orderbyList[index].orderby = this.orderbyList[index].orderby==0?1:0;
					}
					tmpTis+=type
				}
				this.orderbyList[index].selected = true;
				let len = this.orderbyList.length;
				for(let i=0;i<len;i++){
					if(i!=index){
						this.orderbyList[i].selected = false;
					}
				}
				console.log(tmpTis)
				if(tmpTis.indexOf('销量排序') > -1  ) {
					this.goodsList = this.initList
				} else {
					this.goodsList.sort(function(good1 , good2){
						let v1 = +(good1['price'].slice(1,good1['price'].length));
						let v2 = +(good2['price'].slice(1,good2['price'].length));
						console.log(v1)
						console.log(v2)
						return v2-v1;
					})
					console.log(this.goodsList)
				}
			},
			// 获取商品列表
			getClassifyProduction(){
				const token = JSON.parse(uni.getStorageSync('token')).token
				uni.request({
					url : interfaces.classifyProduction,
					method: "GET",
					header: {
						'Authorization': 'Bearer ' + token
					},
					data : {
						id : this.id,
						primaryKey : this.primaryKey,
						
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
							this.goodsList.push(temp)
						    this.initList = this.goodsList
						})
					},
					fail : (err)=>{
						uni.navigateTo({
							url: '../../login/login'
						})
								
					},
				})
			},
		}
		
	}
</script>

<style lang="scss">
	.icon {
		font-size:26upx;
	}
	.header{
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;
		.target{
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;
			&.on{
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}
			
			
		}
	}
.place{
		background-color: #ffffff;
		height: 100upx;
	}
.goods-list{
		.loading-text{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}
		.product-list{
			width: 92%;
			padding: 0 4% 3vw 4%; 
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.product{
				width: 100%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0,0,0,0.1);
				image{
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}
				.name{
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}
				.info{
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;
					
					.price{
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}
					.slogan{
						color: #807c87;
						font-size: 24upx;
					}
				}
			}
			
		}
	}
</style>