const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');

const shopController = require('../controllers/shop')


router.get('/shop/product_list', shopController.getProducts)
router.get('/shop/product_detail/:productId',shopController.getDetails)
router.get('/', shopController.getIndex)

exports.router = router

