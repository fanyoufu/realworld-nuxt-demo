export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page

  // 如果用户已登录，则跳转到首页
  if (store.state.user) {
    return redirect('/')
  }
}
