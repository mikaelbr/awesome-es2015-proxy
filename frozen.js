let frozen = freeze([1, 2, 3, 4]);
frozen[0] = 3;
delete frozen[0];
frozen = Object.defineProperty(frozen, 0, { value: 99 });
console.log(frozen);

function freeze (obj) {
  return new Proxy(obj, {
    set () { return true; },
    deleteProperty () { return false; },
    defineProperty () { return true; },
    setPrototypeOf () { return true; }
  });
}
