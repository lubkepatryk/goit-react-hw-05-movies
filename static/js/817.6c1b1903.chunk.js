/*! For license information please see 817.6c1b1903.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[817],{197:function(t,r,e){e.d(r,{Aj:function(){return s},IQ:function(){return p},Tn:function(){return v},XT:function(){return m},s_:function(){return h}});var n=e(861),o=e(243);function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(S){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:j(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==r&&e.call(g,a)&&(y=g);var x=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function j(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return d.prototype=v,n(x,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var a="https://api.themoviedb.org/3/",c="?api_key=13ad78b66804523865aeb0ffdb1d8c9f",u="&language=en-US";function s(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)(a+"trending/all/day"+c);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)(a+"movie/"+r+c+u);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)(a+"movie/"+r+"/credits"+c+u);case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)(a+"movie/"+r+"/reviews"+c+u);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)(a+"search/movie"+c+u+"/&query="+r+"&page=1&include_adult=false");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},24:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e.p+"static/media/search.910a11adfec7c3d3e881.jpeg",o=e(184);var i=function(t){var r=t.url,e=t.alt,i=t.width;return(0,o.jsx)("img",{width:i,src:r?"https://image.tmdb.org/t/p/w500"+r:n,alt:e})}},929:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n,o=e(439),i=e(689),a=e(87),c=e(791),u=e(168),s=e(867).ZP.div(n||(n=(0,u.Z)(["\nbox-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);\n  article {\n    display: flex;\n    gap: 20px;\n    align-items: start;\n    box-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);\n  }\n\n  h2 {\n    margin: 0 20px 20px 0;\n    font-size: 1.5rem;\n    span {\n      font-size: 1.3rem;\n    }\n  }\n  h3 {\n    margin: 30px 0 0;\n    font-size: 1.3rem;\n    span {\n      font-size: 1rem;\n      font-weight: 400;\n    }\n  }\n"]))),l=e(197),h=e(24),f=e(184);var p=function(){var t,r=(0,c.useState)(null),e=(0,o.Z)(r,2),n=e[0],u=e[1],p=null!==n&&void 0!==n?n:{},d=p.poster_path,v=void 0===d?"":d,y=p.original_title,m=void 0===y?"":y,g=p.name,x=void 0===g?"":g,w=p.release_date,b=void 0===w?"":w,j=p.genres,L=void 0===j?"":j,_=p.overview,E=void 0===_?"":_,k=(0,i.TH)(),O=(0,c.useRef)((null===(t=k.state)||void 0===t?void 0:t.from)||"/"),Z=(0,i.UO)().id;return(0,c.useEffect)((function(){(0,l.s_)(Z).then(u)}),[Z]),n?(0,f.jsxs)(s,{children:[(0,f.jsx)("p",{children:(0,f.jsx)(a.rU,{to:O.current,children:"Go back"})}),(0,f.jsxs)("article",{className:"card",children:[(0,f.jsx)(h.Z,{width:200,url:v,alt:x}),(0,f.jsxs)("div",{className:"subscribe",children:[(0,f.jsxs)("h2",{children:[m,(0,f.jsxs)("span",{children:[" (",b.substring(0,4),")"]})]}),(0,f.jsx)("span",{children:"User Score:"}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:E}),(0,f.jsxs)("h3",{children:["Genres",(0,f.jsxs)("span",{children:[" ",L.map((function(t){return t.name})).join(", ")]})]})]})]}),(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(c.Suspense,{children:(0,f.jsx)(i.j3,{})})]}):(0,f.jsx)("p",{children:"Movie not found"})}}}]);
//# sourceMappingURL=817.6c1b1903.chunk.js.map