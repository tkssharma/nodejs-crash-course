var url = require('url');
var fs = require('fs');

function render(path, res) {
    fs.readFile(path, null, (error, data) => {
        if(err){
            response.writeHead(404);
            response.write('unable to read data');
        } else {
            response.write(data);
        }
        response.end();
    })
}



module.exports = { 
    handleRequest: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        let path = url.parse(req.url).pathname;
        switch(path){
            case '/':
                render('./index.html', res);
                break;
            case '/login':
                render('./login.html', res);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();

        }
    }
}