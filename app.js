const express = require ('express');
const app = express();
app.set('view engine','ejs');
app.set('views','views')

const bodyParser = require('body-parser');
const path = require('path');

//Importo i file delle route
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const { publicDecrypt } = require('crypto');
const errotController = require('./controllers/error')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoute.router);
app.use(shopRoute.router);

app.use(errotController.error404);

app.listen(3000);

