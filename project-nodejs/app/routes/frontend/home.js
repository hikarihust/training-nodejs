var express = require('express');
var router = express.Router();

const ArticleModel 	= require(__path_models + '/article');

const folderView = __path_views_blog + '/pages/home';
const layoutBlog = __path_views_blog + '/frontend';

/* GET home page. */
router.get('/', async (req, res, next) => {
	let itemsSpecial = [];
	let itemsNews    = [];

	await ArticleModel.listItemsFrontend({}, {'task': 'items-special'}).then((items) => {
		itemsSpecial = items;
	})

	await ArticleModel.listItemsFrontend({}, {'task': 'items-news'}).then((items) => {
		itemsNews = items;
	})

	res.render(folderView + '/index', {
		layout: layoutBlog,
		top_post: true,
		itemsSpecial,
		itemsNews
	});
});

module.exports = router;
