var friends = overrideDelete({
  Vanessa: 'Copycat', Neena: 'Domino'
});

console.log(/^van/ in friends) //=> true
console.log(delete friends[/^N\w+/]); //=> true
console.log(delete friends[/^nathan/]); //=> false
console.log(friends); //=> { Vanessa: 'Copycat' }

function overrideDelete (obj) {
  function toRegex (str) {
    return new RegExp(str.substring(1, str.length - 1), 'i');
  }
  return new Proxy(obj, {
    deleteProperty(target, property) {
      var regex = toRegex(property);
      const result = Object.keys(target).map((key) =>
        regex.test(key) ? Reflect.deleteProperty(target, key) : false
      );
      return result.some(i => !!i);
    },
    has(target, property) {
      var regex = toRegex(property);
      return Object.keys(target).some((key) => regex.test(key));
    },
  });
}
