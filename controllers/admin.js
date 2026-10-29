const ClassProducts = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    res.render('./admin/edit_product', {
        path: 'admin/add_products',
        docTitle: 'Add New Product',
        editing: false
    })
}

exports.postNewProduct = (req, res, next) => {
    const prodId = null
    const prodData = {
        id: prodId,
        title: req.body.title,
        img: req.body.img,
        description: req.body.description,
        price: req.body.price
    }
    const product = new ClassProducts(prodData);
    product.save();
    res.redirect('/admin/products')
}

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    ClassProducts.fetchById(prodId, product => {
        if (!product) {
            return res.redirect('/')
        }
        res.render('./admin/edit_product', {
            path: 'admin/add_products',
            docTitle: 'Edit Product',
            editing: true,
            product: product
        })
    })

}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.id
    const prodData = {
        id: prodId,
        title: req.body.title,
        img: req.body.img,
        description: req.body.description,
        price: req.body.price
    }
    const product = new ClassProducts(prodData);
    product.save();
        res.redirect('/admin/products')
    }

exports.getDeleteProduct = (req, res, next) => {
    const prodId = req.params.productId;
    ClassProducts.delete(prodId);
    res.redirect('/admin/products')

} 


exports.getLogin = (req, res, next) => {
    res.render('./admin/login', {
        path: '/admin/login',
        docTitle: 'Login'
    })
}

exports.getProducts = (req, res, next) => {
    ClassProducts.fetchAllProduct(products => {
        res.render('./admin/product', {
            prod: products,
            path: '/admin/products',
            docTitle: 'Product List',
        })
    })
};

