# Summary overview

A example summary to get a better overview of what is possible using the Proxy object.
All examples can be seen in it's entirety in the [`./examples` folder](./example).

## Helping API

[Full example](./examples/api-distance/index.js)

```js
const { somemethod, foo } = require('./module');
// TypeError: somemethod is not a function. Did you mean someMethod?
```

## Transitive decorators

[Full example](./examples/apply/name.js)

```js
function decoratee () { return 3 * 1; }
let fn1 = decorator(decoratee);
console.log('fn1.name', fn1.name); //=> undefined

let fn2 = proxyDecorator(decoratee);
console.log('fn2.name', fn2.name); //=> fn2.name decoratee
```

## Case-insensitve `has`

[Full example](./examples/caseinsensitve-has.js)

```js
var foo = overrideDelete({
  someString: 1, barFoo: 2, anotherSomeString: 3
});
console.log('somestring' in foo); //=> true
console.log('someString' in foo); //=> true
```


## `frozen` polyfill

[Full example](./examples/frozen.js)

```js
let frozen = freeze([1, 2, 3, 4]);
frozen[0] = 3;
delete frozen[0];
frozen = Object.defineProperty(frozen, 0, { value: 99 });
console.log(frozen);
```


## Smart `delete`

[Full example](./examples/smart-delete.js)

```js
var friends = overrideDelete({
  Vanessa: 'Copycat', Neena: 'Domino'
});

console.log(/^van/ in friends) //=> true
console.log(delete friends[/^N\w+/]); //=> true
console.log(delete friends[/^nathan/]); //=> false
console.log(friends); //=> { Vanessa: 'Copycat' }
```

## Smarter Arrays

[Full example](./examples/array.js)

```js
const arr = betterArray([1, 2, 3, 4, 5, 6, 7]);

console.log(arr[-1]); //=> 7
console.log(arr[[2, 5]]); //=> [ 3, 6 ]
console.log(arr[[2, -2, 1]]); //=> [ 3, 6, 2 ]
console.log(arr['2:5']); //=> [ 3, 4, 5 ]
console.log(arr['-2:3']); //=> [ 6, 7, 1, 2, 3 ]
```

## Dynamically created React API

[Full example](./examples/react-api.js)

```js
const React = require('react');
const { renderToString } = require('react-dom/server');

// Dynamically created. Does not need to be predefined by React
const { div, h1 } = requireApi();
console.log(renderToString(div({
  children: h1({
    children: 'Some output'
  })
})));
//=> <div data-reactroot="" [...]><h1>Some output</h1></div>

function requireApi () {
  return new Proxy({}, {
    get (target, property) {
      return function (...args) {
        return React.createElement(property, ...args);
      };
    }
  });
}
```


## API on demand

[Full example](./examples/generate-api/math.js)

```js
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
```
