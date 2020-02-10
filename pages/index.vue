<template>
  <!-- 首页 -->
  <div class="home-page">
	  <div class="banner">
	    <div class="container">
	      <h1 class="logo-font">conduit</h1>
	      <p>A place to share your knowledge.</p>
	    </div>
	  </div>

	  <div class="container page">
	    <div class="row">

	      <div class="col-md-9">
	        <div class="feed-toggle">
	          <ul class="nav nav-pills outline-active">
	            <li class="nav-item">
	              <a class="nav-link disabled" href="">Your Feed</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link active" href="">Global Feed</a>
	            </li>
	          </ul>
	        </div>

	        <div class="article-preview" v-for="(article, index) in articles" :key="index">
	          <div class="article-meta">
	            <a href="profile.html"><img :src="article.author.image" /></a>
	            <div class="info">
	              <a href="" class="author">{{ article.author.username }}</a>
	              <span class="date">{{ article.createdAt }}</span>
	            </div>
	            <button class="btn btn-outline-primary btn-sm pull-xs-right">
	              <i class="ion-heart"></i> {{ article.favoritesCount }}
	            </button>
	          </div>
	          <a href="" class="preview-link">
	            <h1>{{ article.title }}</h1>
	            <p>{{ article.description }}</p>
	            <span>Read more...</span>
	          </a>
	        </div>

	      </div>

	      <div class="col-md-3">
	        <div class="sidebar">
	          <p>Popular Tags</p>

	          <div class="tag-list">
	            <a
	            	href=""
	            	class="tag-pill tag-default"
	            	v-for="(tag, index) in tags"
	            	:key="index"
	            >{{ tag }}</a>
	          </div>
	        </div>
	      </div>

	    </div>
	  </div>

	</div>
	<!-- /首页 -->
</template>

<script>
import { getArticles } from '@/api/article'
import { getTags } from '@/api/tag'

export default {
  name: 'HomePage',
  components: {},
  props: {},
  // 虽然 asyncData 和 data 中的数据会合并到一起给组件使用，但是建议保持统一，都写到 asyncData 中
  async asyncData () {
  	// await 会等待后面的异步操作执行结束然后才往下继续执行
  	const { data } = await getArticles()

  	const { data: tagData } = await getTags()

  	// Promise.all 方法：接收一个数组，数组中存储 Promise 对象，当数组中所有的 Promise 都 resolve 成功之后，Promise.all 也就 resolved 成功了
  	// 返回值：一个数组，按照任务的顺序存储任务的结果
  	// [ 任务1的结果, 任务2的结果 ]
  	// Promise 是 ECMAScript 6 的 API
  	const [articleRes, tagRes] = await Promise.all([getArticles(), getTags()])

  	return {
  		articles: articleRes.data.articles,
  		tags: tagRes.data.tags
  	}

  	// return {
  	// 	articles: data.articles,
  	// 	tags: tagData.tags
  	// }
  },
  data () {
    return {
    	message: ''
    }
  },
  computed: {},
  watch: {},
  // 结论：如果数据有 SEO 需求，则把请求写到 asyncData 中，如果没有则还是 created 中
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
