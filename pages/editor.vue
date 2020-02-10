<template>
  <div class="editor-page">
	  <div class="container page">
	    <div class="row">

	      <div class="col-md-10 offset-md-1 col-xs-12">
	        <form>
	          <fieldset>
	            <fieldset class="form-group">
	                <input type="text" class="form-control form-control-lg" placeholder="Article Title">
	            </fieldset>
	            <fieldset class="form-group">
	                <input type="text" class="form-control" placeholder="What's this article about?">
	            </fieldset>
	            <fieldset class="form-group">
	                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
	            </fieldset>
	            <fieldset class="form-group">
	                <input type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
	            </fieldset>
	            <button class="btn btn-lg pull-xs-right btn-primary" type="button">
	                Publish Article
	            </button>
	          </fieldset>
	        </form>
	      </div>

	    </div>
	  </div>
	</div>
</template>

<script>
export default {
	// Nuxt 提供的一个特殊的 API，在渲染页面的时候会自动调用这个中间件模块中导出的函数
	middleware: 'authenticated',
  name: 'EditorPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
