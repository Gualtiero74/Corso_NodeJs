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

exports.postCart = (req, res, next) => {
const prodId = req.body.productId;
console.log(prodId)
/*
    ClassProducts.fetchById(prodId, product => {
        res.render('./shop/cart', {
            product: product,
            path: '/shop/cart',
            docTitle: 'Cart'
        }
    )}
)
    */
   res.redirect('/shop/cart')
}

exports.getDetails = (req, res, next) => {
    const prodId = req.params.productId;
    ClassProducts.fetchById(prodId, product => {
        res.render('./shop/product_detail', {
            product: product,
            path: '/shop/product_detail',
            docTitle: 'Product Detail'
        }
    )}
)
}
