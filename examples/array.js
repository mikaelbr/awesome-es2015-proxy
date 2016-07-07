const arr = betterArray([1, 2, 3, 4, 5, 6, 7]);

console.log(arr[-1]); //=> 7
console.log(arr[[2, 5]]); //=> [ 3, 6 ]
console.log(arr[[2, -2, 1]]); //=> [ 3, 6, 2 ]
console.log(arr['2:5']); //=> [ 3, 4, 5 ]
console.log(arr['-2:3']); //=> [ 6, 7, 1, 2, 3 ]

function betterArray (arr) {
  return new Proxy(arr, {
    get (target, property, receiver) {
      const range = getRange(property);
      const indices = range ? range : getIndices(property);
      const values = indices.map(function (index) {
        const key = index < 0 ? String(target.length + index) : index;
        return Reflect.get(target, key, receiver);
      });
      return values.length === 1 ? values[0] : values;
    }
  });
  // ....

  function getRange (str) {
    var [start, end] = str.split(':').map(Number);
    if (typeof end === 'undefined') return false;

    let range = [];
    for(let i = start; i < end; i++) {
      range = range.concat(i);
    }
    return range;
  }

  function getIndices (str) {
    return str.split(',').map(Number);
  }
}
