const object_module = require('./object_module');

console.log(object_module.name);
console.log(object_module.desc);
console.log(object_module.url);

for (let index in object_module.supports) {
  console.log(object_module.supports[index]);
}
