webpackJsonp([0x67ef26645b2a,60335399758886],{103:function(e,t){e.exports={layoutContext:{}}},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(5),r=a(o),u=n(206),c=a(u),i=n(103),s=a(i);t.default=function(e){return r.default.createElement(c.default,l({},e,s.default))},e.exports=t.default},316:function(e,t){},204:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(5),c=a(u),i=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return c.default.createElement("section",{id:"footer"},c.default.createElement("ul",{className:"icons"},c.default.createElement("li",null,c.default.createElement("a",{href:"https://twitter.com/hackwitus",target:"_blank",className:"icon alt fa-twitter"},c.default.createElement("span",{className:"label"},"Twitter"))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://www.facebook.com/hackwitus/",className:"icon alt fa-facebook"},c.default.createElement("span",{className:"label"},"Facebook"))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://github.com/hackwitus",className:"icon alt fa-github"},c.default.createElement("span",{className:"label"},"GitHub"))),c.default.createElement("li",null,c.default.createElement("a",{href:"mailto:contact@hackwit.us",target:"_blank",className:"icon alt fa-envelope"},c.default.createElement("span",{className:"label"},"Email"))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://www.eventbrite.com/e/hackwitus-2018-tickets-46911355126",target:"_blank",className:"icon alt fa-ticket"},c.default.createElement("span",{className:"label"},"Eventbrite")))),c.default.createElement("ul",{className:"copyright"},c.default.createElement("li",null,"© HackWITus"),c.default.createElement("li",null,"Design: ",c.default.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))},t}(c.default.Component);t.default=i,e.exports=t.default},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(5),c=a(u),i=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return c.default.createElement("section",{id:"header"},c.default.createElement("div",{className:"inner"},c.default.createElement("span",{className:"icon major fa-code"}),c.default.createElement("h1",null,"HackWITus 2018"),c.default.createElement("p",null,"For Students by Students -- 24 Hours -- Free Admission",c.default.createElement("br",null)," Wentworth Institute of Technology",c.default.createElement("br",null)," Ira Allen Building, Parker St.",c.default.createElement("br",null)," Boston, Massachusetts 02120",c.default.createElement("br",null)," November 10th-11th"),"/"===this.props.location.pathname?null:c.default.createElement("a",{href:"/"},"Home")))},t}(c.default.Component);t.default=i,e.exports=t.default},206:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(5),c=a(u);n(316);var i=n(205),s=a(i),f=n(204),p=a(f),d=function(e){function t(n){l(this,t);var a=o(this,e.call(this,n));return a.state={loading:"is-loading"},a}return r(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",{className:"body "+this.state.loading},c.default.createElement(s.default,{location:this.props.location}),e(),c.default.createElement(p.default,null))},t}(c.default.Component);d.propTypes={children:c.default.PropTypes.func},t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-8b9ef7945ed03c139530.js.map