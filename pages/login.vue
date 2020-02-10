<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(item, key) in errors">{{ key }} {{ item[0] }}</li>
          </ul>

          <form @submit.prevent="onLogin">
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'

// js-cookie 是一个客户端模块，服务端不需要
// 对于这种只能在某个端加载使用的模块，我们要动态加载
// import Cookie from 'js-cookie'
// process.client 是 Nuxt 中特殊提供的一个 API，用于判断代码的执行环境
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      try {
        const { data } = await login({
          user: this.user
        })
        console.log('登录成功', data)

        // 清空错误消息
        this.errors = {}

        // 将用户信息存储到 Vuex 容器中
        this.$store.commit('setUser', data.user)

        // 为了防止页面刷新数据丢失，我们将用户登录状态持久化到 Cookie 中
        Cookie.set('user', data.user)

        // 跳转到首页
        this.$router.push('/')
      } catch (err) {
        this.errors = err.response.data.errors
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
