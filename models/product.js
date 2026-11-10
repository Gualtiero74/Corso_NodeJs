const { error } = require('console');
const fs = require('fs');
const { get } = require('https');
const path = require('path');

const productsList = path.join(__dirname, '..', 'data', 'products.json');
const cartList = path.join(__dirname, '..', 'data', 'cart.json')

const ClassCart = require('../models/cart');
const { json } = require('body-parser');

const getProductFromFile = (cb) => {
    fs.readFile(productsList, (error, data) => {
        try {
            cb(JSON.parse(data))
        } catch (error) {
            return cb([])
        }
    })
}


module.exports = class Product {
    constructor(prod) {
        this.id = prod.id;
        this.title = prod.title,
        this.img = prod.img;
        this.description = prod.description;
        this.price = prod.price;
    }

    save() {
        getProductFromFile(products => {
            if (this.id) {
                    const existingProdutIndex = products.findIndex(prod => prod.id === this.id)
                    const updatedProduct = [...products];
                    updatedProduct[existingProdutIndex] = this;
                    fs.writeFile(productsList, JSON.stringify(updatedProduct), (err) => {
                        console.log(err);
                    })
            } else {
                    const prodId = Date.now()
                    this.id = prodId.toString();
                    products.push(this);
                    fs.writeFile(productsList, JSON.stringify(products), (err) => {
                        console.log(err);
                    });
                    }
            }
        );
    }

    static delete(id) {
        let cart = {};
        getProductFromFile(products => {
            const findProductIndex = products.findIndex(prod => prod.id === id)
            fs.readFile(cartList, (err, data)=>{
            cart = JSON.parse(data)
            console.log(cart.products)})
            
            // const isProductInCart = products.find(prod => prod.id === cart.id)
            products.splice(findProductIndex, 1)
            fs.writeFile(productsList,JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    // questa funzione riceve come parametro il render proveniente dal controller
    static fetchAllProduct(cb) {
        getProductFromFile(cb)
    }

    static fetchById(id, cb) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product)
        })

    }

}