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
    ClassCart.getAllProducts(cart => { //carico tutti gli oggetti del carrello e li metto in cart
        ClassProducts.fetchAllProduct(products => { //carico tutti gli oggetti del negozio e li metto in products
            const cartProducts = []; 
            for (product of products){ //effettuo il loop dei prodotti del magazzino
                const cartProductData = cart.products.find(cardProd => cardProd.id === product.id) //faccio il check per vedere se il prodotto del carrello è ancora presente nel negozio
                if (cartProductData){
                    cartProducts.push({productData:product, quantity:cartProductData.qty}); // se presente lo metto nell'array
                }
            }
            // passo l'array cartProducts alla view
            res.render('./shop/cart', {
            path: '/shop/cart',
            docTitle: 'Your Cart',
            prod:cartProducts,
            price:cart.totalPrice
        })

        })
    })
}