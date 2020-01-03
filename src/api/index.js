import axios from 'axios'
// import qs from 'qs'

const apiHost = process.env.API_HOST;
/* axios配置 */
// axios.defaults.retryDelay = 600 /* 请求延迟 */
// axios.defaults.timeout = 5000   /* 响应超时时间 */
// let token = window.sessionStorage.getItem("token")
// axios.defaults.headers.post['X-CSRF-Token'] = token

/* 配置请求头 */
axios.defaults.baseURL = apiHost /* 配置接口地址 */

/* POST传参序列化(添加请求拦截器) */
axios.interceptors.request.use((config) => {
  /* 在发送请求之前做某件事 */
  if (window.localStorage.getItem("token")) {
    /* 在header上添加token */
    // config.headers['token'] = window.localStorage.getItem("token")
    config.headers['token'] = window.localStorage.getItem("token")
  }
  // if (config.method === 'post') {
  // 	config.data = qs.stringify(config.data)
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})
let isWeiXin = () => {
  return (
    navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1
  );
};
axios.interceptors.response.use((res) => {
  /* 对响应数据做些事 */
  if (res.status == 200) {
    if(res.data.code == 503){
      window.localStorage.removeItem("token");
      window.location.href = "http://demo.oumeng.com.cn/web";
      // window.location.href = "http://web.ivydx.com/web";
      // window.location.href = "http://localhost:8088/login";
    } else {
      return res
    }
  }
  }, (error) => {
    return Promise.reject(error)
  }) 

/* 返回一个Promise(发送post请求) */
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    params.localeLang = localStorage.getItem("lang");
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/* 返回一个Promise(发送get请求) */
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    params.localeLang = localStorage.getItem("lang");
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
