const myObject = function () { // 用 () => 會有問題, 原因待查
  this.count = 0;
};

myObject.prototype.touch = function () { // 用 () => 會有問題, 原因待查
  this.count += 1;
};

module.exports = myObject;
