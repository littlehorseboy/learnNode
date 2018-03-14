const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
    const filename = url.parse(req.url).pathname;
    const filepath = path.join(__dirname, filename);

    fs.exists(filepath, (exists) => {
        if (!exists) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found\n');
            return;
        }

        fs.readFile(filepath, (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(content);
        });
    });
}).listen(12345);

console.log('Server running at http://localhost:12345');
