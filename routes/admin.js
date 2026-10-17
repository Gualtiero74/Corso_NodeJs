const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require('../controllers/admin')

router.post('/add_products',adminController.postNewProduct)
router.get('/admin/add_products', adminController.getAddProducts)
router.get('/admin/login',adminController.getLogin)
router.get('/admin/products',adminController.getProducts)
router.get('/admin/edit_product',adminController.getEdit)

exports.router = router

