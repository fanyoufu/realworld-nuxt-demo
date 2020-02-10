/**
 * 中间件：https://zh.nuxtjs.org/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6
 */

export default function ({ store, redirect }) {
  // If the user is not authenticated
  // 如果用户没有登录，则跳转到登录页面
  if (!store.state.user) {
    return redirect('/login')
  }
}
