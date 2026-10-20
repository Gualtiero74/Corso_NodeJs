const ClassCart = require('../models/cart')
const ClassProducts = require('../models/product')

exports.postAddProductCart= (req, res, next) => {
    const productID = req.body.productId
    const price = req.body.price
    ClassCart.addProduct(productID,price);
    res.redirect('/')
}

exports.postDeleteProductCart =(req,res,next) =>{
    const id = req.body.id;
    const price = req.body.price;
    ClassCart.deleteProduct(id,price);
    res.render('./shop/cart',{
                docTitle:'Cart',
        path:'/shop/cart'
    })
}

exports.getCart = (req, res, next) => {
    ClassCart.getAllProducts(products => {
        res.render('./shop/cart', {
            prod: products.products,
            price:products.totalPrice,
            path: '/shop/cart',
            docTitle: 'Your Cart',
        })
        console.log(products)
        console.log(products.products)
        console.log(products.products.length)
    })
};
