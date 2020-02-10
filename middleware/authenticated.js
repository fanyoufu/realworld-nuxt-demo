export default function ({ store, redirect }) {
  // If the user is not authenticated
  // 如果用户没有登录，则跳转到登录页面
  if (!store.state.user) {
    return redirect('/login')
  }
}
