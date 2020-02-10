<template>
  <div class="article-page">

	  <div class="banner">
	    <div class="container">
	      <h1>{{ article.title }}</h1>
	      <article-meta :article="article" />
	    </div>
	  </div>

	  <div class="container page">

	    <div class="row article-content">
	      <div class="col-md-12" v-html="article.body"></div>
	    </div>

	    <hr />

	    <div class="article-actions">
	      <article-meta :article="article" />
	    </div>

	    <div class="row">

	      <div class="col-xs-12 col-md-8 offset-md-2">

	        <form class="card comment-form">
	          <div class="card-block">
	            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
	          </div>
	          <div class="card-footer">
	            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
	            <button class="btn btn-sm btn-primary">
	             Post Comment
	            </button>
	          </div>
	        </form>
	        
	        <div class="card">
	          <div class="card-block">
	            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
	          </div>
	          <div class="card-footer">
	            <a href="" class="comment-author">
	              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
	            </a>
	            &nbsp;
	            <a href="" class="comment-author">Jacob Schmidt</a>
	            <span class="date-posted">Dec 29th</span>
	          </div>
	        </div>

	        <div class="card">
	          <div class="card-block">
	            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
	          </div>
	          <div class="card-footer">
	            <a href="" class="comment-author">
	              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
	            </a>
	            &nbsp;
	            <a href="" class="comment-author">Jacob Schmidt</a>
	            <span class="date-posted">Dec 29th</span>
	            <span class="mod-options">
	              <i class="ion-edit"></i>
	              <i class="ion-trash-a"></i>
	            </span>
	          </div>
	        </div>
	        
	      </div>

	    </div>

	  </div>

	</div>
</template>

<script>
import { getArticle } from '@/api/article'
import ArticleMeta from '@/components/article-meta'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-light.css'

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})

export default {
  name: 'ArticlePage',
  components: {
  	ArticleMeta
  },
  props: {},
  async asyncData ({ params }) {
  	const { data } = await getArticle(params.slug)

  	// 将 Markdown 数据转为 HTML 标签
  	data.article.body = md.render(data.article.body)
  	return {
  		article: data.article
  	}
  },
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

<style scoped>
</style>
