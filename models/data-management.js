const fs = require('fs').promises;
const path = require('path');

const productsList = path.join(__dirname, '..', 'data', 'products.json');
const cartList = path.join(__dirname, '..', 'data', 'cart.json')



module.exports = class ClassDataManagement{
static async read(type) {
        switch (type) {
            case "products":
                try {
                    const data = await fs.readFile(productsList, 'utf8');
                    const parsedData = JSON.parse(data);
                    return parsedData; // Ritorno direttamente il Json
                } catch (err) {
                    console.error('Error reading or parsing cart file:', err);
                    return []; // Ritorno Array vuoto in caso di errore
                }
            case "cart":
                try {
                    const data = await fs.readFile(cartList, 'utf8');
                    const parsedData = JSON.parse(data);
                    return parsedData; // Ritorno direttamente il Json
                } catch (err) {
                    console.error('Error reading or parsing cart file:', err);
                    return []; // Ritorno Array vuoto in caso di errore
                }
            default:
                return null;
        }
    }

    static write(type, data){
        switch(type){
            case "products":
            try{
                fs.writeFile(productsList, JSON.stringify(data), error => {
                                console.log(error)
                            })         
            } catch (err) {
                console.log(err)
                break;
            }

            case "cart":
            try{
                fs.writeFile(cartList, JSON.stringify(data), error => {
                                console.log(error)
                            })         
            } catch (err) {
                console.log(err)
                break;
            }
            default:
                console.log('Errore Class Data Manager');
                break;
            }
    }

}