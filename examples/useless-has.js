var friends = uselessHas({ 'Vanessa': 'Copycat' });
console.log('Vanessa' in friends); //=> false
console.log('Vanessa' in friends); //=> true

function uselessHas (obj) {
  return new Proxy(obj, {
    has(target, property) {
      return Math.random() > 0.5;
    },
  });
}
