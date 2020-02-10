// import request from '@/utils/request'

import { request } from '@/plugins/request'

export const getArticles = (params = {}) => {
	return request({
		method: 'GET',
		url: '/api/articles',
		params
	})
}

export const createArticle = data => {
	return request({
		method: 'POST',
		url: '/api/articles',
		data
	})
}

export const getArticle = slug => {
	return request({
		method: 'GET',
		url: `/api/articles/${slug}`
	})
}
