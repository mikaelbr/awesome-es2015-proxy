
module.exports.someMethods = {
  methodOne () { return 1; },
  methodTwo () { return 2; },
  methodThree () { return 3; }
}

module.exports.someHiddenFunction = function (obj, callback) {
  obj.methodOne();
  setTimeout(function () {
    obj.methodTwo();
    obj.methodOne();
    callback();
  });
  obj.methodThree();
};
