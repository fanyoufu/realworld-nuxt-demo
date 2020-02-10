<template>
  <div class="settings-page">
	  <div class="container page">
	    <div class="row">

	      <div class="col-md-6 offset-md-3 col-xs-12">
	        <h1 class="text-xs-center">Your Settings</h1>

	        <form>
	          <fieldset>
	              <fieldset class="form-group">
	                <input class="form-control" type="text" placeholder="URL of profile picture">
	              </fieldset>
	              <fieldset class="form-group">
	                <input class="form-control form-control-lg" type="text" placeholder="Your Name">
	              </fieldset>
	              <fieldset class="form-group">
	                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
	              </fieldset>
	              <fieldset class="form-group">
	                <input class="form-control form-control-lg" type="text" placeholder="Email">
	              </fieldset>
	              <fieldset class="form-group">
	                <input class="form-control form-control-lg" type="password" placeholder="Password">
	              </fieldset>
	              <button class="btn btn-lg btn-primary pull-xs-right">
	                Update Settings
	              </button>
	          </fieldset>
	        </form>

	        <hr>

	        <button class="btn btn-outline-danger" @click="onLogout">
	          Or click here to logout.
	        </button>
	      </div>

	    </div>
	  </div>
	</div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
	middleware: 'authenticated',
  name: 'SettingsPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
  	onLogout () {
  		// 删除 Cookie 中的用户登录状态
  		Cookie.remove('user')

  		// 删除容器中的用户登录状态
  		this.$store.commit('setUser', null)

  		// 回到首页
  		this.$router.push('/')
  	}
  }
}
</script>

<style scoped lang="less"></style>
