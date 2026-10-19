const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');

const shopController = require('../controllers/shop')
const cartController = require('../controllers/cart')


router.get('/shop/product_list', shopController.getProducts)
router.get('/shop/cart',shopController.getCart)
router.post('/shop/cart',cartController.postAddToCart)
router.get('/shop/product_detail/:productId',shopController.getDetails)
router.get('/', shopController.getIndex)

exports.router = router

