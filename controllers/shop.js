const ClassProducts = require('../models/product')


exports.getCart = (req, res, next) => {
    res.render('./shop/cart', {
        path: '/shop/cart',
        docTitle: 'Your Cart'
    })
}

// a fetchAllProduct passo direttamente il render
exports.getProducts = (req, res, next) => {
    ClassProducts.fetchAllProduct(products => {
        res.render('./shop/product_list', {
            prod: products,
            path: '/shop/product_list',
            docTitle: 'Product List',
        })
    })
};

exports.getIndex = (req, res, next) => {
    res.render('./shop/index', {
        path: '/',
        docTitle: 'Main Page'
    })
}
