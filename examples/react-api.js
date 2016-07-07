const React = require('react');
const { renderToString } = require('react-dom/server');

// Dynamically created. Does not need to be predefined by React
const { div, h1 } = requireApi();
console.log(renderToString(div({
  children: h1({
    children: 'Some output'
  })
})));
//=> <div data-reactroot="" [...]><h1>Some output</h1></div>

function requireApi () {
  return new Proxy({}, {
    get (target, property) {
      return function (...args) {
        return React.createElement(property, ...args);
      };
    }
  });
}
