const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//Importo i file delle route
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const userRoute = require("./routes/user");
const { publicDecrypt } = require('crypto');

/* 
    -------------------------------
    MOLTO IMPORTANTE 
    1)  Nella sezione dedicata alle route, quella inerente alla main "/" deve sempre essere l'ultima 
        Altrimenti il programma la prende per prima e non interroga le altre
    2) se nessuna route soddisfa l'url di richiesta, viene sempre ritornata la rooute di main "/"
    ------------------------------
*/

/*
-----------------------------------------------------
Per poter leggere il body della richiesta ho installato body-parser
una volta instalalto va richiamato e poi inizializzato "app.use(bodyParser.urlencoded({extended:false}));"
fatto questo, nella route che ci interessa basta aggiungere "console.log(req.body);"
per leggerne i valori 
-----------------------------------------------------
*/

/*
-----------------------------------------------------
app.
dopo il punto possiamo mettere use per utilizzare questa route con qualiasi tipo di chiamata "Get"-"Post"-"Delete"-"PUT"-"PATCH"
per filtrare la chiamata usare dopo app. il metodo desiderato
ad esempio "app.post".
------------------------------------------------------
*/

/*
------------------------------------------------------
ho spostato tutte le relative route nel proprio file per poi importartarle
------------------------------------------------------
*/

app.use(bodyParser.urlencoded({extended:false}));
/*
------------------------------------------------------
Per poter utilizzare file css nelle pagine html come fosse un semplice frontend, dobbiamo fare in modo che i file sia con accesso libero
Per fare questo bisogna utilizzare il metodo use.static di express come segue
------------------------------------------------------
*/
app.use(express.static(path.join(__dirname,'public')));


app.use(adminRoute.router);
app.use(shopRoute.router);
//app.use(userRoute);

/*
------------------------------------------------------
Se una chiamata non soddisfa quelle nelle route, per non far crashare il sito, si utilizza una chiamata DUMMY che da come riposta una semplice pagina HTML
ed un codice 404
------------------------------------------------------
*/

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','code404.html'))
});


app.listen(3000);

/*
Vanilla JS Style (old)

const http = require('http');
const vanillaRoutes = require('./vanillaRoutes/vanillaRoutes');


const server = http.createServer(vanillaRoutes.handler);

server.listen(3000);
*/

