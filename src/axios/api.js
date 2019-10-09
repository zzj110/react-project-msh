import axios from 'axios'
import { resolve } from 'url';


axios.defaults.headers.post['Content-Type']='appcation/x-www-form-urlencoded'

//请求拦截器
axios.interceptors.request.use(function(config){
  config.headers['Content-Type']='application/json,text/plain';
  return config;
},function(error){
  return Promise.reject(error);
})
//响应拦截器
axios.interceptors.response.use(function(res){
    if(res.data.statusCode == 401){
      alert('暂无权限，请重新登录');
      window.location.href='./login';
      return false;
    }
    return res; 
},function(error){
    switch (error && error.response && error.response.status) {
      case 400:
        error.message = '请求错误'
        break
      case 401:
        error.message = '未授权，请登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '未找到访问地址'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '网关错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
    }
    return Promise.reject(error);
})
//封装axios的post请求
export const post=(url,params)=>{
    return new Promise((resolve, reject) => {
        axios.post(url, params)
          .then(response => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          })
      })   
}
//封装axios的get请求
export const get=(url,params)=>{
    return new Promise((resolve, reject) => {
        axios.get(url, params)
          .then(response => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          })
      })   
}