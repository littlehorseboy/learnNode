const MyBaseObject = function () { };

MyBaseObject.prototype.hit = function () {
  console.log('Hit');
};

module.exports = MyBaseObject;
