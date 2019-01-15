import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import MD5 from 'js-md5'
// axios.defaults.retry = 4 //请求次数
// axios.defaults.retryDelay = 1000 //请求间隙

axios.interceptors.request.use(
	config => {
		let sign,token
		let timestamp = Math.round(new Date().getTime()/1000)
		let type = 'application/json; charset=utf-8'
		let { 2 : temp } = config.url.split('/')
		//登录成功后保存token
		//
		if(temp == 'public'){
			sign = MD5(config.url + timestamp)
			config.headers = {
				'Content-Type': type,
        'timestamp': timestamp,
        'sign': sign
			}
			return config
		}else{

		}
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	res => {

	},
	error => {
		return Promise.reject(error)
	}
)
export default axios;