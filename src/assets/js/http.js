import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
// axios.defaults.retry = 4 //请求次数
// axios.defaults.retryDelay = 1000 //请求间隙

axios.interceptors.request.use(
	config => {

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