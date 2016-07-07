var foo = overrideDelete({
  someString: 1, barFoo: 2, anotherSomeString: 3
});
console.log('somestring' in foo); //=> true
console.log('someString' in foo); //=> true

function overrideDelete (obj) {
  return new Proxy(obj, {
    has(target, property) {
      return Object.keys(target).some((key) =>
        key.toLowerCase() === property.toLowerCase());
    },
  });
}
