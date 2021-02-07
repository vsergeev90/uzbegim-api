const express = require('express');
const menuController = require('../controllers/menuController');

const router = express();

router.param('id', menuController.checkID);

router.route('/').get(menuController.getAllMenu);

router.route('/:id').get(menuController.getMenu);

module.exports = router;
