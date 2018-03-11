const events = require('events');
const util = require('util');

const myObject = () => {
  this.count = 0;
};

//無法繼承成功, 寫法似乎已過時
util.inherits(myObject, events.EventEmitter);

myObject.prototype.touch = () => {
  this.count += 1;
  this.emit('touched', this.count);
};

const myObj = new myObject();

myObj.on('touched', (count) => {
  console.log(`Object was touched already. ${count}`);
});

myObj.touch();
myObj.touch();
myObj.touch();
