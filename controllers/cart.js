const ClassCart = require('../models/cart')

exports.postAddToCart = (req, res, next) => {
    console.log('sono arrivato al controller')
    //const prodId = Date.now()
    /*
    const prodData = {
        id: req.body.productId
        id:prodId.toString(),
        title:req.body.title,
        img:req.body.img,
        description:req.body.description,
        price:req.body.price
    
    }
    */
    console.log(req.body.productId)
    const id = req.body.productId
    console.log(typeof id)
    //const product = new ClassProducts(req.body.title, req.body.img, req.body.description, req.body.price);
    const product = new ClassCart(id);
    
    product.addProduct();
    res.render('./shop/cart',{
        docTitle: 'My Cart',
        path: 'Product'
    })
    
}
