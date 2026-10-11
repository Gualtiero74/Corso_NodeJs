const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
const formData = [];

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
});

router.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})

router.get('/login',(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','login.html'))
    }
)
router.post('/login',(req, res, next) => { 
    console.log(req.body)
    formData.push(req.body)
    console.log(formData);

})

module.exports = {
    router : router
}
