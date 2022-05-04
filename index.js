const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (request, response) => {
    let { url, method, headers } = request;
    if(url === '/') {
        let html = readFile('./pages/home.html');
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    }
    else if(url === '/about') {
        let html = readFile('./pages/about.html');
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    }
    else {
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.end('Page does not exist');
    }
    
});

function readFile(path) {
    return fs.readFileSync(path, (error, data) => {
        if(error) {
            throw error;
        }
        return data;
    });
}

server.listen(8080, 'localhost');