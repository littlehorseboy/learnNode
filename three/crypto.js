const crypto = require('crypto');

var encrypted = crypto.createHmac('sha256', 'myPassword');

console.log(encrypted);

console.log(encrypted.digest('hex'));
