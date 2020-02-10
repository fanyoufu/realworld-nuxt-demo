/**
 * 必须结合 Nuxt 的插件规则才能获取到容器登录数据，所以这里把 axios 封装为一个 Nuxt 插件
 * 插件模块必须导出默认成员：一个函数
 * 还有一点：插件必须显示的注册到 nuxt.config.js 中
 */

// import request from '@/utils/request'
import axios from 'axios'

// 为了再其他地方能使用到 axios，也把 request 给导出了
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 该模块必须导出一个函数作为默认导出
export default ({ store }) => {
  // Add a request interceptor
  request.interceptors.request.use(config => {
    // Do something before request is sent
    const { user } = store.state
    if (user) {
      config.headers['Authorization'] = `Token ${user.token}`
    }
    return config
  }, error => {
    // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  request.interceptors.response.use(response => {
    // Do something with response data
    return response
  }, error => {
    // Do something with response error
    return Promise.reject(error)
  })
}
