const util = require('util');

const MyBaseObject = require('./inheritsBase');

const MyChildObject = function(){};

console.log(MyBaseObject);
console.log(MyChildObject);

util.inherits(MyChildObject, MyBaseObject);

const obj = new MyChildObject();

obj.hit();
obj.hit();
obj.hit();
