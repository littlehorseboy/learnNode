const http = require('http');

const req = http.request({
    hostname: 'www.google.com',
    path: '/',
    method: 'GET'
}, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    res.on('end', (chunk) => {
        process.exit();
    });
});

req.end();
