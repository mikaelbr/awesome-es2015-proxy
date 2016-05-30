let traced = trace({
  pow (n) {
    return Math.pow(this.value, n);
  },
  value: 4
});
console.log(traced.pow(2));
// get›pow›function
// get›value›number
// 16

function trace (obj) {
  return new Proxy(obj, {
    get (target, prop) {
      let result = Reflect.get(target, prop);
      console.log(`get›${prop}›${typeof result}`);
      return result;
    }
  });
}
