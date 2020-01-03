import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'echarts'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import store from './store/index'
/* 文本编辑器 */
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
/* 树形表格 */
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

/* 树形表格 */
Vue.use(VXETable)
/* 文本编辑器 */
Vue.use(VueQuillEditor)
/* vue-i18n注册 */
Vue.use(VueI18n)
// 设置语言项
/* 平台国际语言静态字典 */
const i18n = new VueI18n({
  locale: localStorage.getItem('lang')||'zh',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})
// import Vuex from 'vuex'
// import wx from 'weixin-js-sdk';
import 'element-ui/lib/theme-chalk/index.css' 
import './assets/css/reset.css' //公共样式
import './assets/css/elementResult.css' //公共样式
import '../theme/index.css'
import 'swiper/dist/css/swiper.css'

// 挂载全局变量
import author from './api/author'
import baseURL from './api/url.js'
import Base64 from './assets/js/base64.js' 
Vue.prototype.$author = author
Vue.prototype.URL = baseURL
Vue.prototype.$Base64 = Base64;
Vue.use(Echarts);
Vue.use(ElementUI);
// Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})
