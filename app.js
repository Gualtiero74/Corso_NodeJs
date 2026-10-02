const fs = require('fs');
const http = require('http');



fs.writeFileSync('hello.txt', 'Hello from js');

const server = http.createServer((req, res) => {
    /*
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    */
    /*
        if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify([{data: 'Hello World!', data2: 'Dato2'},{data: 'Hello World2', data2: 'Dato22'}])),
        res.end();
        }
    */
    /*
        if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> My First NodeJs App</title></head>');
        res.write('<body><h1>Hello From my first test</h1></body>');
        res.write('</html>');
        res.end();
        }
    */
   if(req.url === "/"){
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> tEST 2</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit>Send</button></form></body>');
        res.write('</html>');
        res.end();
   }
});

server.listen(3000);