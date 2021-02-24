
const  inter = "/api/idle/"
// const origin = "https://uniapp-interface.herokuapp.com/"
const interfaces = {
	//  登录 
	login:  "/api/idle/login",
	// 注册
	register :   "/api/idle/register",
	
	// 头像 
	userAvator : '/api/idle/reviewavator',
	// 用户上传
	userPublish : '/api/idle/userpublish',
	// 获取全部商品 
	getAllProduction : '/api/idle/allproduction',
	allproductionFifty : '/api/idle/allproductionFifty',
	// 根据商品分类获取商品 
	classifyProduction : '/api/idle/classifyproduction',
	
	// 根据商品id获取商品 
	pidGetProduction : '/api/idle/pidGetProduction',
	// 聊天相关的接口 
	userChat : '/api/idle/userChat',
	getChat : '/api/idle/getChat',
	getCurrentUserChat : '/api/idle/getCurrentUserChat',
	
	// 用户地址相关
	userAddress : '/api/idle/userAddress',
	getUserAddress : '/api/idle/getUserAddress',
	getUserAddressThoughtId : '/api/idle/getUserAddressThoughtId',
	userDelAddress : '/api/idle/userDelAddress',
	userUpdateAddress : '/api/idle/userUpdateAddress',
	
	
	//用户钱包相关
	createWallet : '/api/idle/createWallet',
	getUserWallet : '/api/idle/getUserWallet',
	depositUser : inter + "depositUser",
	
	// 用户订单相关
	userCreateOrder : inter + "userCreateOrder",
	userUpdateOrderStatus : inter + "userUpdateOrderStatus",
	userFindOrder : inter + "userFindOrder",
	userAllOrder : inter + "userAllOrder",
}
module.exports = interfaces;
