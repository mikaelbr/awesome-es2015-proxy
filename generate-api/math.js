let mathLib = math ();

let randomFn = ['add', 'div', 'pow']
  .sort(() => Math.random() > .5)[0];
let randomNr = Math.round((Math.random() * 10));

console.log(mathLib[randomFn+randomNr](4)); //=> e.g. 13

let { add2, div6, add, pow10 } = math();
console.log(add(2, 3)); //=> 5
console.log(add2(3)); //=> 5
console.log(div6(2)); //=> 3
console.log(pow10(2)); //=> 1024

function math () {
  const baseFns = {
    'add': (a, b) => a + b,
    'sub': (a, b) => a - b,
    'div': (a, b) => a / b,
    'pow': (a, b) => Math.pow(b, a)
  };
  return new Proxy({}, {
    get (target, property) { return parseFunction(property); }
  });
  function parseFunction (property) {
    let fnType = Object.keys(baseFns).find(fn => property.includes(fn));
    let potential = property.replace(fnType, '');
    if (potential === '') return baseFns[fnType];

    let number = Number(potential);
    return Number.isNaN(number)
      ? baseFns[fnType]
      : baseFns[fnType].bind(null, number);
  }
}
