import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/styles/index.scss'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

// 'work.51bsi.com' 是正式发布的地址
// axios.defaults.baseURL = 'http://work.51bsi.com:7075'
// Vue.prototype.approvalUrl = 'http://work.51bsi.com:7074'
// Vue.prototype.$_previewUrl = 'http://work.51bsi.com:8012/onlinePreview?url='
// Vue.prototype.leaveUrl = 'http://192.168.6.48:4081'
axios.defaults.baseURL = 'http://192.168.7.73:7075'
Vue.prototype.approvalUrl = 'http://192.168.7.73:7074'
Vue.prototype.$_previewUrl = 'http://192.168.7.73:8012/onlinePreview?url='
Vue.prototype.leaveUrl = 'http://192.168.7.73:4081'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['token'] = ''
axios.defaults.headers.post['userid'] = ''

Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
