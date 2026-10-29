const { prependOnceListener } = require('cluster');
const { error } = require('console');
const fs = require('fs');
const fs_promise = require('fs').promises
const { get } = require('https');
const path = require('path');

const p = path.join(__dirname, '..', 'data', 'cart.json');


const getProductFromFile = (cb) => {
    fs.readFile(p, (error, data) => {
        try {
            cb(JSON.parse(data))
        } catch (error) {
            console.log(error)
                cart = { products: [], totalPrice: 0 };
                fs.writeFile(p, JSON.stringify(cart), error => {
                    console.log(error)
                })
        }
    })
}

module.exports = class Cart {
    // i'll get for this function the ID and product price
    static addProduct(id, price, img) {
        // fetch all existing product
        fs.readFile(p, (error, data) => {
            let cart = { products: [], totalPrice: 0 };
            if (!error) {
                cart = JSON.parse(data);
            }
            // cart analisis if product already exist
            // check if ID alreayd exist ed save the index position
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
            // copy the value of that index in the existin production variable
            const existingProduct = cart.products[existingProductIndex];
            // set variable for updatedProduct
            let updatedProduct;
            // if id exist
            if (existingProduct) {
                // copy the existing product in the updated Product
                updatedProduct = { ...existingProduct };
                // ad 1 to the updater product quantity
                updatedProduct.qty = (updatedProduct.qty + 1);
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct
            } else {
                // if id id not exist i get the id
                updatedProduct = { id: id, singlePrice: price,img:img, qty: 1 };
                // add to the existing the cart.products the new product 
                cart.products = [...cart.products, updatedProduct];
            }
            // total price is always the actual price + product price
            cart.totalPrice = Number(cart.totalPrice) + Number(price);
            // write all the information back in the cart.json
            fs.writeFile(p, JSON.stringify(cart), error => {
                console.log(error)
            })
        });
    }
    static deleteProduct(id, price) {
        fs.readFile(p, (error, data) => {
            let cart = { products: [], totalPrice: 0 };
            cart = JSON.parse(data);
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
            cart.products.splice(existingProductIndex, 1)
            cart.totalPrice = Number(cart.totalPrice) - Number(price)
            if (cart.products.length > 0) {
                fs.writeFile(p, JSON.stringify(cart), error => {
                    console.log(error)
                })
            } else if (cart.products.length === 0) {
                cart = { products: [], totalPrice: 0 };
                fs.writeFile(p, JSON.stringify(cart), error => {
                    console.log(error)
                })
            }
        })
    }
    
    static getAllProducts(cb) {
        getProductFromFile(cb)
    };
}