# JavaScript Proxy

> :goat: For learning how to use [JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), or just to see what is possible. The Proxy object was included in the ES2015 iteration of the standard and is available in all evergreen browsers and Node.js v6. Unfortunately as it is a big language semantic change, it cannot be polyfilled through transpilers such as Babel.

## Resources

### Presentations

- Slides: [Metaprogramming SUPERPOWERS](http://slides.com/elektronik/metaprogramming-via-es2015-proxies#/) by [@elektronik2k5](https://github.com/elektronik2k5)
- Video: [Breaking the Fourth Wall With JavaScript](https://opbeat.com/events/web-rebels-2016/#breaking-the-fourth-wall-with-javascript) by Mikael Brevik


### Articles
- https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/
- http://www.2ality.com/2014/12/es6-proxies.html
- http://exploringjs.com/es6/ch_proxies.html
- https://ponyfoo.com/articles/es6-proxies-in-depth

### Modules/Packages

- [zer](https://github.com/jbmusso/zer): Zer helps you serialize any JavaScript chains to String representations of any languages by leveraging ES2015 `Proxy` objects
- [negative-array](https://github.com/sindresorhus/negative-array): Negative array index support `array[-1]` using ES2015 Proxy

---

## Examples in this repo

Run all examples in this repo by using `node@6`:

```shell
$ node <example-file>.js
```

Examples using tracing and tests can be run using `npm`:

```shell
$ npm test
```
