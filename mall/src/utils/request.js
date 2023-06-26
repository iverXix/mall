import axios from 'axios'
import {getToken} from './token'

const service = axios.create({
	baseURL:'http://localhost:3000',
	timeout:5000
})

let tokenHeaderName = "Mall-token"

//axios请求拦截器
service.interceptors.request.use(
     config => {
		 let token = getToken();
		 if(!config.headers[tokenHeaderName]){
			 config.headers[tokenHeaderName] = token;
		 }
		 return config;
	 },
	 err => Promise.reject(err)
)

 export default service 

//http://192.168.3.12:80/home/index