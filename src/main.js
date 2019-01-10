// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $http from './assets/js/http.js'
import url from './api/api.js'
// import MD5 from 'js-md5'
// import './style/global.css'
import './assets/css/common/global.css'
// import './style/theme.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.url = url
Vue.prototype.$http = $http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
