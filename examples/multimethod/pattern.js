const multiMethod = require('./multi-method');

const pattern = multiMethod();
pattern[n => Number.isInteger(n)] =
  (n) => 'Number:' + n;
pattern[/Wilson/] =
  (n) => 'Name:' + n;
pattern[n => typeof n === 'string'] =
  (n) => 'String:' + n;
pattern[({ name }) => !!name] =
  obj => 'Person:' + obj.name;
pattern[_ => true] =
  (n) => 'All:' + n;

console.log(pattern(22)); //=> Number:22
console.log(pattern('Deadpool')); //=> String:Deadpool
console.log(pattern({ name: 'Wade', age: NaN })); //=> Person:Wade
console.log(pattern('Wade Wilson')); //=> Name:Wade Wilson
