/**
 * 在 Nuxt 中使用 Vuex：https://zh.nuxtjs.org/guide/vuex-store
 */

// 只有在服务端运行才加载 cookieparser 模块
const cookieparser = process.server ? require('cookieparser') : undefined

// 容器的状态
export const state = () => {
  return {
    // 用户状态
    // user: JSON.parse(window.localStorage.getItem('user'))
    user: null
  }
}

// 容器的 mutation
export const mutations = {
  setUser (state, user) {
    state.user = user

    // 之前：将 token 持久化到本地存储
    // window.localStorage.setItem('user', JSON.stringify(user))
  }
}

export const actions = {
  // Nuxt 仅在服务端渲染的时候执行 nuxtServerInit 方法
  nuxtServerInit ({ commit }, { req }) {
    let user = null

    // 如果请求请求头中有 Cookie 数据
    // Cookie 数据格式：key=value; key=value; key=value 字符串
    if (req.headers.cookie) {
      // cookieparser.parse 就是把原始的 Cookie 格式字符串转为一个对象
      // { key: value, key: value }
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        // 将 Cookie 中的 user 的值转为 JavaScript 对象
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    // 调用 mutation 更新 state 状态
    commit('setUser', user)
  }
}
