<script>
	export default {
		onLaunch: function() {
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
							uni.switchTab({
								url:'../../../pages/tabBar/home/home'
							})
						},
						fail : (err)=>{
							uni.navigateTo({
								url: './pages/login/login'
							})

						},
					})
				},
				fail : ()=>{
					uni.navigateTo({
						url:"./pages/login/login"
					})
				}
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/common/css/iconfont.css";
	@import "/common/uni.css";
</style>
