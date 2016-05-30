function tracer (obj) {
  let trace = {};
  let order = [];
  const object = new Proxy(obj, {
    get(target, property) {
      order = order.concat(property);
      trace[property] = trace[property] ? trace[property] + 1 : 1;
      return Reflect.get(target, property);
    }
  });
  return {
    object,
    getTrace: () => trace,
    getOrder: () => order
  };
};



const assert = require('assert');

const { someMethods, someHiddenFunction }  = require('./module');
const { object, getTrace, getOrder } = tracer(someMethods);
//
// someHiddenFunction(object, function () {
//   assert.deepEqual(getOrder(), [
//     'methodOne',
//     'methodTwo',
//     'methodOne',
//     'methodThree'
//   ]);
//   assert.deepEqual(getTrace(), {
//     methodOne: 2,
//     methodThree: 1,
//     methodTwo: 1
//   });
// });




// implement test for if missing...

describe('some test', function () {
  it('should do something', function (done) {
    const { object, getTrace, getOrder } = tracer(someMethods);

    someHiddenFunction(object, function () {
      assert.deepEqual(getOrder(), [
        'methodOne',
        'methodThree',
        'methodTwo',
        'methodOne'
      ]);
      assert.deepEqual(getTrace(), {
        methodOne: 2,
        methodThree: 1,
        methodTwo: 1
      });
      done();
    });
  });
});
