const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
const users = [];
/*
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
});
*/
router.post('/login',(req, res, next) => {
    console.log(req.body)
    users.push(req.body)
    console.log(users)
    res.redirect('/')
})

router.get('/login',(req, res, next) => {
    res.render('login',{path: '/login', docTitle:'Login Page'} )
    }
)
router.get('/',(req, res, next) => {
    res.render('shop',{users, docTitle:'Shop',path:'/'}) 
})


    exports.router = router,
    exports.users = users

