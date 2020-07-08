var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    // HTTP GET 
    // HTTP REQUEST PATH 
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);

/*
1. CLI Apps
2. REST APIs
3. Graphql APIs
4. Server side rendering (ejs/ pug)
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!')) // HTTP GET /
app.get('/sayhello', (req, res) => res.status(200).json({ message: 'Hello World!'})) // HTTP GET /sayhello


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))