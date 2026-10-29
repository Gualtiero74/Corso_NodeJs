const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require('../controllers/admin')

router.post('/add_products',adminController.postNewProduct)
router.get('/admin/edit_product', adminController.getAddProducts)
router.get('/admin/login',adminController.getLogin)
router.get('/admin/products',adminController.getProducts)
router.get('/admin/edit_product/:productId',adminController.getEditProduct)
router.post('/admin/edit_product',adminController.postEditProduct)
router.get('/admin/delete_product/:productId',adminController.getDeleteProduct)

exports.router = router

