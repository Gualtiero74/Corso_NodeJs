const express = require('express');
const router = express.Router();


/*
------------------------------------
Per utilizzare i file html che compongono la parte frontend, bisogna importare un modulo di Node chiamato 
PATH
*/
const path = require('path')
router.get('/',(req, res, next) => {
    console.log("root");
    /*
    ----------------------------------------------
    nella risposta bisogna ricostruire il percorso del file da mostrare
    utilizzare il metodo join per agganciare un livello all0altro
    con Join, non si deve mettere lo / prima del nome cartella
    il primo parametro da passare è il percorso assoluto del progetto 
    lo si fa inserendo__dirname poi divisi da , inserire i vari nomi cartella, sino al nome file
    in caso in cui bisogna salire di un livello, inserire "..""
    ----------------------------------------------
    */
    res.sendFile(path.join(__dirname,'..', 'views', 'shop.html'))
});


module.exports = {
    router : router
};
