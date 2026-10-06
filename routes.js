const fs = require('fs');

function requestHandler(req, res) {
    const { buffer } = require('stream/consumers');
    const url = req.url;
const method = req.method;

    /*
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    */
    /*
    if (url === "/") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify([{data: 'Hello World!', data2: 'Dato2'},{data: 'Hello World2', data2: 'Dato22'}])),
    res.end();
    }
 
 
    if(url === "/message"){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My First NodeJs App</title></head>');
    res.write('<body><h1>Hello From my first test</h1></body>');
    res.write('</html>');
    res.end();
    }
    */

    // controllo che la chiamata sia fatta direttamente alla home page


    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Test 2</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    };
    // controllo che la chiamata sia per /message e che il metodo sia POST
    if (url === "/message" && method === "POST") {
        // creo un array dove salvare tutti i tranci del pezzo del messaggio in arrivo
        const body = [];
        req.on('data', (chunk) => {
            // stampo il valore di ogni pezzo
            console.log(chunk)
            // lo aggiungo all'array
            body.push(chunk);
        });
        return req.on('end', () => {
            // conoscendo gia di dover ricevere una stringa, concateno tutto il buffer e lo trasformo in stringa
            const parsedBody = Buffer.concat(body).toString();
            // stampo il valore ricevuto
            console.log(parsedBody);
            // prendo solo la parte dopo =
            const message = parsedBody.split('=')[1];
            // stampo il messaggio ripulito
            console.log(message)
            const finalMessage = message.split('+').toString();
            console.log(finalMessage)
            // per file di piccole dimensioni si puo utilizzare il metodo writeFileSync con il seguente schema
            /*
            fs.writeFileSync('hello.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            */

            // per file di grosse quantità ed evitare di bloccare il codice, utilizzare writeFile che prende un terzo parametro "funzione di callback", per l'eventuale
            // gestione degli errori
            // questo è il modo migliore, corretto e piu performante
            fs.writeFile('hello.text', message, (err) => {
                if (!err) {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                };
            });
        });
        
    }
}

// variouse export method
// Simple for only one function
// module.exports = requestHandler;
// Simple for single function or anything else
// module.exports.handler = requestHandler;
// module.exports.text = "some hardcoded text"
// More than one function using an object
module.exports = {
    handler : requestHandler,
    text : "Hard Coded Text",
    text2 : "hard coded text2"
}
// shortcut 
// exports = requestHandler;



