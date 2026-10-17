const ClassProducts = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    res.render('./admin/add_products', {
        path: 'admin/add_products',
        docTitle: 'Add Product'
    })
}

exports.postNewProduct = (req, res, next) => {
    const prodData = {
        title:req.body.title,
        img:req.body.img,
        description:req.body.description,
        price:req.body.price
    }
    //const product = new ClassProducts(req.body.title, req.body.img, req.body.description, req.body.price);
    const product = new ClassProducts(prodData);

    product.save();
    res.redirect('/')
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

exports.getEdit = (req, res, next) => {

}

exports.getDelete = (req, res, next) => {

}
