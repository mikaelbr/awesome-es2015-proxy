const React = require('react');
const { renderToString } = require('react-dom/server');

const { div, h1 } = requireApi();
console.log(renderToString(div({
  children: h1({
    children: `I don't play defence`
  })
})));
//=> <div data-reactroot="" [...]><h1>I don't play defence</h1></div>

function requireApi () {
  return new Proxy({}, {
    get (target, property) {
      return function (...args) {
        return React.createElement(property, ...args);
      };
    }
  });
}
