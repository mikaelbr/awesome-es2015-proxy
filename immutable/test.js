const Immutable = require('immutable');

var myMap = Immutable.fromJS({
  foo: {
    bar: [1, 2, 3],
    baz: {
      hello: 'world'
    }
  },
  outer: 'outer'
});

function jsify (immutableStructure) {
  function getKeyPath (str) {
    return str.includes(',') ? str.split(',') : [str];
  }
  return new Proxy(immutableStructure, {
    get (target, property) {
      if (target.hasIn(getKeyPath(property))) {
        return target.getIn(getKeyPath(property));
      }
      return Reflect.get(target, property);
    },
    has (target, property) {
      return target.hasIn(getKeyPath(property));
    },
    set (target, property, value) { },
    deleteProperty (target, property, value) { },
  });
}

var jsifiedMap = jsify(myMap);
console.log(jsifiedMap.outer); //=> outer
console.log(jsifiedMap[['foo', 'bar', 1]]); //=> 2


jsifiedMap.outer = 'foo';
console.log(jsifiedMap.outer); //=> outer

console.log('outer' in jsifiedMap); //=> true
console.log(['foo', 'bar'] in jsifiedMap); //=> true
console.log(['foo', 'bar', 5] in jsifiedMap); //=> false
