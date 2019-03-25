var express = require('express');
var router = express.Router();

const ItemsModel = require('../../schemas/items');
const UtilsHelpers = require('../../helpers/utils');

// List items
router.get('(/:status)?', (req, res, next) => {
	let currentStatus = req.params.status;
	let statusFilter = UtilsHelpers.createFilterStatus(currentStatus);

	ItemsModel.find({}).then((items) => {
		res.render('pages/items/list', { 
			pageTitle: 'Item List Page',
			items,
			statusFilter
		});
	});
});

router.get('/add', (req, res, next) => {
	res.render('pages/items/add', { pageTitle: 'Item Add Page' });
});

module.exports = router;