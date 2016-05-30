module.exports = function multiMethod () {
  let predicates = [];
  const handler = {
    set: function (target, name, value) {
      let fn = getCompiledFunction(name);
      let regex = toRegex(name);
      if (regex) {
        fn = (n) => typeof n === 'string' && regex.test(n);
      }
      if (typeof fn !== 'function') {
        target[name] = value;
        return;
      }
      predicates = predicates.concat([{
        check: fn,
        value: value
      }]);
    }
  };

  var proxied = new Proxy(function getValue (n) {
    var val = proxied[n];
    if (typeof val === 'undefined') {
      for (var i = 0; i < predicates.length; i++) {
        const { check, value } = predicates[i];
        if (check(n)) {
          val = value;
          break;
        }
      }
    }
    if (typeof val === 'function') {
      return val(n);
    }
    return val;
  }, handler);
  return proxied;
}

function toRegex (str) {
  if (str.substr(0, 1) === '/' && str.substr(-1) === '/') {
    return new RegExp(str.substring(1, str.length - 1), 'i');
  }
  return void 0;
}

function getCompiledFunction (key) {
  try {
    return eval(key);
  } catch (ex) {
  }
}
