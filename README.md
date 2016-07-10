# JavaScript Proxy

> :goat: For learning how to use [JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), or just to see what is possible through metaprogramming in modern JavaScript. Tries to collect resources such as presentations, articles, modules and examples using Proxy, Reflect and other intercession type metaprogramming.

> The Proxy object was included in the ES2015 iteration of the standard and is available in all evergreen browsers and Node.js v6. Unfortunately as it is a big language semantic change, it cannot be polyfilled through transpilers such as Babel.

Know of any brilliant resources? [Let us know](https://github.com/mikaelbr/proxy-fun/issues/new) and we'll create a vast collection of awesomeness.

TL;DR? See an overview of examples using JavaScript Proxy in [the summary](./examples-summary.md).

## Proxy Resources

### Presentations

- Slides: [Metaprogramming SUPERPOWERS](http://slides.com/elektronik/metaprogramming-via-es2015-proxies#/) by Nickolay Ribal
- Video: [Breaking the Fourth Wall With JavaScript](https://opbeat.com/events/web-rebels-2016/#breaking-the-fourth-wall-with-javascript) by Mikael Brevik

### Articles
- [Exploring JS chapter 28. Metaprogramming with proxies](http://exploringjs.com/es6/ch_proxies.html) by Dr. Axel Rauschmayer
- [ES6 Proxies in Depth](https://ponyfoo.com/articles/es6-proxies-in-depth) by Nicolás Bevacqua
- [Introducing ES2015 Proxies](https://developers.google.com/web/updates/2016/02/es2015-proxies?hl=en) by Addy Osmani
- [ES6 In Depth: Proxies](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/) by Jason Orendorff
- [Object Path resolver](https://h3manth.com/new/blog/2016/path-resolver-with-javascript-proxies/) by Hemanth.HM
- [Negative Array Index in Javascript](https://h3manth.com/new/blog/2013/negative-array-index-in-javascript/) by Hemanth.HM
- [Meta-programming JavaScript Using Proxies](http://dzautner.com/meta-programming-javascript-using-proxies/) by Daniel Zautner _(Uses an old edition of the Proxy API and is outdated, but the concepts are the same.)_

### Modules

- [zer](https://github.com/jbmusso/zer): Zer helps you serialize any JavaScript chains to String representations of any languages by leveraging ES2015 `Proxy` objects
- [negative-array](https://github.com/sindresorhus/negative-array): Negative array index support `array[-1]` using ES2015 Proxy
- [tpyo](https://github.com/mathiasbynens/tpyo): A small script that enables you to make typos in JavaScript property names. Powered by ES6 proxies + Levenshtein string distance.
- [stevia](https://github.com/traviskaufman/stevia): Experimental module providing natural sweetening for javascript objects
- [known](https://github.com/sindresorhus/known): Allow only access to known object properties using ES2015 Proxy
- [iSeries](https://github.com/anywhichway/iSeries): A set of modules that use Proxy to extend and enhance your existing JavaScript classes.
- [proxy-observe](https://github.com/anywhichway/proxy-observe): A Proxy based implementation of Object.observe
- [Experimental Safe JavaScript Navigation
](https://gist.github.com/dakaraphi/6a87168db66fd8f032d2): The purpose of this function is to provide a way to avoid deep nested conditionals when traversing a hierarchy of objects

## Meta-programming in general

> Resources not using JavaScript Proxy, but shows different usages of creative and awesome meta-programming to be used as inspiration.

### Modules

- [jsPipe](https://github.com/dzautner/jsPipe): Implementing pipes in Javascript using pseudo operator overloading.
- [JSDecorators](https://github.com/dzautner/JSDecorators): Python like decorators in Javascript with pseudo operator overloading.


---

## Examples in this repo

Run all examples in this repo by using `node@6`:

```shell
$ node ./examples/<example-file>.js
```

Examples using tracing and tests can be run using `npm`:

```shell
$ npm test
```

Remember to install all example dependencies by doing `npm i`
