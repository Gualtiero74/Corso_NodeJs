const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'data', 'cart.json');



module.exports = class Cart {

    addProduct(id) {
        console.log('sono nella classe Cart Add Product')
        console.log(id)
        /*
        fs.readFile(p, (error, data) => {
            let cart = {products:[], totalPrice: 0 }
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
            */

        // check if id already exist in the cart
            // if yes add 1 to existing product
            // in not add the product to the cart
    

    }

}