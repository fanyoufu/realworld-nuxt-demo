<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(item, key) in errors">{{ key }} {{ item[0] }}</li>
          </ul>

          <form @submit.prevent="onRegister">
            <fieldset class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user'

export default {
  middleware: ['notAuthenticated'],
  name: 'RegisterPage',
  components: {},
  props: {},
  asyncData () {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onRegister () {
      // 获取表单数据
      const user = this.user
      // TODO: 表单验证
      // 请求提交
      try {
        const { data } = await register({
          user
        })
        console.log('注册成功', data)
        this.errors = {}

        // 注册成功，跳转到首页
        this.$router.push('/')
      } catch (err) {
        console.log('注册失败', err)
        this.errors = err.response.data.errors
      }
      // 响应结果处理
    }
  }
}
</script>

<style scoped lang="less"></style>
