import Vue from 'vue'
import App from './App'
import http from './utils/http.js'
import validate from './js_sdk/fshjie-formvalidate/ys-validate.js'
Vue.config.productionTip = false
Vue.prototype.request = http
App.mpType = 'app'
Vue.prototype.$validate = validate
const app = new Vue({
    ...App
})
app.$mount()
