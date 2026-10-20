const express = require('express');
const router = express.Router();
const path = require('path');


const cartController = require('../controllers/cart')

router.get('/shop/cart',cartController.getCart)
router.post('/shop/AddCart',cartController.postAddProductCart)
router.post('/shop/DeleteCart',cartController.postDeleteProductCart)

exports.router = router
