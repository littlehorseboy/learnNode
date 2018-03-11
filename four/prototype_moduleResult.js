const myObject = require('./prototype_module');

const myObj = new myObject();

myObj.touch();
myObj.touch();
myObj.touch();

console.log(myObj.count);
