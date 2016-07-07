const multiMethod = require('./multi-method');

const fib = multiMethod();
fib[0] = 0;
fib[n => n <= 1] = 1;
fib[_ => true] = (n) => fib(n-1) + fib(n-2);
console.log(fib(20));
//=> 675
