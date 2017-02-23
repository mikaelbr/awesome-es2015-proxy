# `proxy-fun`

> :goat: For learning how to use [JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), or just to see what is possible through metaprogramming in modern JavaScript. Tries to collect resources such as presentations, articles, modules and examples using Proxy, Reflect and other intercession type metaprogramming.

> The Proxy object was included in the ES2015 iteration of the standard and is available in all evergreen browsers and Node.js v6. Unfortunately as it is a big language semantic change, it cannot be polyfilled through transpilers such as Babel.

Know of any brilliant resources? [Let us know](https://github.com/mikaelbr/proxy-fun/issues/new) and we'll create a vast collection of awesomeness.

## JavaScript ES2015 Proxy

Proxies are a common pattern in both programming and networking. It often entails something interfacing with something else. Usually a proxy takes the role of the original contstruct and intercepts calls made to that construct and in some cases altering it's original behaviour. This allows you to enrich functions with more actions or operations in a transitive manner, or even intercept and cancel an action.

A proxy can be looked at as a decorator function, but with you can intercept default language semantics also, in a meta-level of programming instead of at the base-level.

TL;DR? See an overview of examples using JavaScript Proxy in [the summary](./examples-summary.md).

## Proxy Resources

### Presentations

- Slides: [Metaprogramming SUPERPOWERS](http://slides.com/elektronik/metaprogramming-via-es2015-proxies#/) by Nickolay Ribal
- Video: [Breaking the Fourth Wall With JavaScript](http://opbeat.com/community/posts/breaking-the-fourth-wall-with-javascript-by-mikael-brevik/) by Mikael Brevik

### Videos

- [Use ES6 Proxies](https://egghead.io/lessons/javascript-use-es6-proxies) by Kent C. Dodds

### Articles
- [Metaprogramming in ES6: Part 3 - Proxies](https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-3-proxies/) by Keith Cirkel
- [Exploring JS chapter 28. Metaprogramming with proxies](http://exploringjs.com/es6/ch_proxies.html) by Dr. Axel Rauschmayer
- [ES6 Proxies in Depth](https://ponyfoo.com/articles/es6-proxies-in-depth) by Nicolás Bevacqua
- [Introducing ES2015 Proxies](https://developers.google.com/web/updates/2016/02/es2015-proxies?hl=en) by Addy Osmani
- [ES6 In Depth: Proxies](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/) by Jason Orendorff
- [Object Path resolver](https://h3manth.com/new/blog/2016/path-resolver-with-javascript-proxies/) by Hemanth.HM
- [Negative Array Index in Javascript](https://h3manth.com/new/blog/2013/negative-array-index-in-javascript/) by Hemanth.HM
- [Meta-programming JavaScript Using Proxies](http://dzautner.com/meta-programming-javascript-using-proxies/) by Daniel Zautner _(Uses an old edition of the Proxy API and is outdated, but the concepts are the same.)_
- [Using ES2015 Proxy for fun and profit](https://snyk.io/blog/using-es2015-proxy-for-fun-and-profit/) by Alon Niv

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
- [allora](https://github.com/GianlucaGuarini/allora): Promisify everything in less tha ~50 lines It can be used to use promises on any javascript object.
- [stroxy](https://github.com/nilssolanki/stroxy): A simple streaming wrapper for native event functions (e.g. `addEventListener`) using ES2015 proxies.
- [Declaraoids](https://github.com/Matsemann/Declaraoids): Declarative programming on steroids. 
- [python-range](https://github.com/Gothdo/range): A JavaScript implementation of the Python's `range()` function.
- [rebridge](https://github.com/CapacitorSet/rebridge): Transparent Javascript-Redis bridge.
- [box-js](https://github.com/CapacitorSet/box-js): A tool for studying JavaScript malware.
- [v](https://github.com/DiegoRBaquero/V): Secure, Synchronized, Realtime, Cloud, Native JavaScript Variables & Events.

## Meta-programming in general

> Resources not using JavaScript Proxy, but shows different usages of creative and awesome meta-programming to be used as inspiration.

### Articles

- [Metaprogramming in ES6: Symbols and why they're awesome](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/) by Keith Cirkel
- [Metaprogramming in ES6: Part 2 - Reflect](https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-2-reflect/) by Keith Cirkel


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
