const async = require('async');

var array = ['one', 'two', 'three'];

async.each(array, (item, next) => {
  console.log(item);
  next();
}, () => {
  console.log('async執行完畢');
});
