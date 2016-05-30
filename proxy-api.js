return new Proxy(obj, {
  get(target, property) {
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    return Reflect.set(target, property, value);
  },

  has(target, property) {
    return Reflect.has(target, property);
  },
  deleteProperty(target, property) {
    return Reflect.deleteProperty(target, property);
  },

  defineProperty(target, property, attrs) {
    return Reflect.defineProperty(target, property, attrs);
  },
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },

  apply(target, thisArg, argumentsList) {
    return Reflect.apply(target, thisArg, argumentsList);
  },
  construct(target, argumentsList, newTarget) {
    return Reflect.construct(target, argumentsList, newTarget);
  },

  getPrototypeOf(target) {
    return Reflect.getPrototypeOf(target);
  },
  setPrototypeOf(target, prototype) {
    return Reflect.getPrototypeOf(target, prototype);
  },
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    return Reflect.preventExtensions(target);
  },
  getOwnPropertyDescriptor(target, prop) {
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
});
