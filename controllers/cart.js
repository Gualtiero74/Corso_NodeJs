const ClassCart = require('../models/cart')
const ClassProducts = require('../models/product')

exports.postAddProductCart= (req, res, next) => {
    const productID = req.body.productId
    const price = req.body.price
    const img = req.body.img;
    ClassCart.addProduct(productID,price,img);
    res.redirect('/shop/product_list')
}

exports.postDeleteProductCart =(req,res,next) =>{
    const id = req.body.backId;
    const price = req.body.backPrice;
    ClassCart.deleteProduct(id,price);
    res.redirect('/shop/cart')
}

exports.getCart = (req, res, next) => {
    ClassCart.getAllProducts(products => {
        res.render('./shop/cart', {
            prod: products.products,
            price:products.totalPrice,
            path: '/shop/cart',
            docTitle: 'Your Cart',
        })
    })
};
