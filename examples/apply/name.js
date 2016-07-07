function decoratee () { return 3 * 1; }
let fn1 = decorator(decoratee);
console.log('fn1.name', fn1.name); //=> undefined

let fn2 = proxyDecorator(decoratee);
console.log('fn2.name', fn2.name); //=> fn2.name decoratee

function decorator (fn) {
  return function (...args) {
    return fn(...args);
  };
}

function proxyDecorator (fn) {
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      return fn(...args);
    }
  });
}
