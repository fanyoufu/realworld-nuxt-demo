<template>
  <div class="editor-page">
	  <div class="container page">
	    <div class="row">

	      <div class="col-md-10 offset-md-1 col-xs-12">
	        <form>
	          <fieldset>
	            <fieldset class="form-group">
	                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
	            </fieldset>
	            <fieldset class="form-group">
	                <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?">
	            </fieldset>
	            <fieldset class="form-group">
	                <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
	            </fieldset>
	            <fieldset class="form-group">
	                <input v-model="tagText" type="text" class="form-control" placeholder="Enter tags" @keyup.enter="onAddTag">
	                <div class="tag-list">
	                	<span class="tag-default tag-pill" v-for="(item, index) in article.tagList">
                  		<i class="ion-close-round" @click="article.tagList.splice(index, 1)"></i>
                  		{{ item }}
                		</span>
	                </div>
	            </fieldset>
	            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="onCreate">
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
import { createArticle } from '@/api/article'

export default {
	// Nuxt 提供的一个特殊的 API，在渲染页面的时候会自动调用这个中间件模块中导出的函数
	middleware: 'authenticated',
  name: 'EditorPage',
  components: {},
  props: {},
  data () {
    return {
    	article: {
    		title: '',
    		description: '',
    		body: '',
    		tagList: []
    	},
    	tagText: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
  	async onCreate () {
  		const { data } = await createArticle({
  			article: this.article
  		})
      this.$router.push(`/article/${data.article.slug}`)
  	},

  	onAddTag () {
  		const tagText = this.tagText
  		const { tagList } = this.article

  		// 非空校验
  		if (!tagText.length) {
  			return
  		}

  		// 如果已重复，则不做任何处理
  		if (this.article.tagList.includes(tagText)) {
  			return
  		}

  		// 将标签添加到列表中
  		tagList.push(tagText)

  		// 清空文本框
  		this.tagText = ''
  	}
  }
}
</script>

<style scoped lang="less"></style>
