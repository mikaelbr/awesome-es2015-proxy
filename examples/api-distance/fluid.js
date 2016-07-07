const checkApi = require('./check-api');

console.log(Number(fluidAPI(4).add(14).sub(5).div(2)));
//=> 6.5

console.log(Number(fluidAPI(4).add(14).sub(5).dib(2)));
//=> TypeError: dib is not a function. Did you mean div?
//=> Or maybe any of the following: sub,add?

function fluidAPI (initial) {
  let obj = Object.create({
    number: initial,
    valueOf () { return this.number },
    add: chainable(function add (n) {
      this.number += n;
    }),
    sub: chainable(function sub (n) {
      this.number -= n;
    }),
    div: chainable(function div (n) {
      this.number /= n;
    })
  });
  return checkApi(obj);

  function chainable (fn) {
    return function (...args) {
      fn.apply(this, args);
      return this;
    };
  }
};
