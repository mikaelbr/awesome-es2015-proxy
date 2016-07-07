const checkApi = require('./check-api');

function someMethod (...args) {
  console.log(args);
}
function bar (...args) {
  console.log(args);
}
function foo (...args) {
  console.log(args);
}

module.exports = checkApi({
  someMethod,
  bar,
  foo
});
