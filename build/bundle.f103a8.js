!function(a){function t(t){for(var e,n,r=t[0],o=t[1],u=t[2],i=0,c=[];i<r.length;i++)l[n=r[i]]&&c.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);for(p&&p(t);c.length;)c.shift()();return f.push.apply(f,u||[]),s()}function s(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,o=1;o<n.length;o++){0!==l[n[o]]&&(r=!1)}r&&(f.splice(e--,1),t=u(u.s=n[0]))}return t}function u(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}var n={},l={0:0},f=[];u.m=a,u.c=n,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="./";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=r;f.push([63,1]),s()}({123:function(t,e,n){"use strict";function r(t){return{type:"SET_RUNTIME_VARIABLE",payload:t}}n.r(e);var o,u=n(3),i=n.n(u),c=n(4),a=n.n(c),s=n(5),l=n.n(s),f=n(6),p=n.n(f),d=n(7),h=n.n(d),b=n(17),v=n.n(b),y=n(25),j=n.n(y),O=n(0),w=n(60),g=n(61);"undefined"!=typeof document&&(o=n.n(g)()());var m=o,x=n(24),M=n(16),_=n(62),k=n.n(_),T=function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return h()(e,t),a()(e,[{key:"render",value:function(){return Object(O.c)("div",{class:k.a.root},"page Home",Object(O.c)("div",{class:"test"},"test"))}}]),e}(O.a),E=function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return h()(e,t),a()(e,[{key:"render",value:function(){return Object(O.c)("div",null,"page List",Object(O.c)("img",{src:"./assets/check.png"}))}}]),e}(O.a),S=function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return h()(e,t),a()(e,[{key:"render",value:function(){return Object(O.c)("div",null,"page View")}}]),e}(O.a),R=function(t){function u(){var t,e;i()(this,u);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=l()(this,(t=p()(u)).call.apply(t,[this].concat(r))),j()(v()(v()(e)),"handleRoute",function(){}),j()(v()(v()(e)),"handleMenu",function(t){return function(){m.push(t)}}),e}return h()(u,t),a()(u,[{key:"componentDidMount",value:function(){this.props.setStore({redux:"test redux RUNTIME"})}},{key:"render",value:function(){return Object(O.c)("div",null,Object(O.c)("div",{style:"border-bottom: 1px solid #eee"},"menus:",Object(O.c)("span",{onClick:this.handleMenu("/")},"Home"),"  ",Object(O.c)("span",{onClick:this.handleMenu("/list")},"List"),"  ",Object(O.c)("span",{onClick:this.handleMenu("/view")},"View")),Object(O.c)(w.a,{history:m,onChange:this.handleRoute},Object(O.c)(T,{path:"/"}),Object(O.c)(E,{path:"/list"}),Object(O.c)(S,{path:"/view"})))}}]),u}(O.a);e.default=Object(x.b)(function(t){return t},function(t){return Object(M.a)({setStore:r},t)})(R)},124:function(t,e,n){"use strict";n.r(e);var r,o,u=n(0),i=n(24),c=n(16),a=n(59),s=n.n(a),l={sourceList:[],selected:[],currentdata:[],page:1,time:2,initDate:!1},f=function(t,e){switch(e.type){case"SET_RUNTIME_VARIABLE":return s()({},l,t,e.payload);default:return t}},p=(n(91),Object(c.b)(f,{},"function"==typeof window.devToolsExtension?window.devToolsExtension():void 0));window.onresize=function(){window.location.reload()},o=n(123).default,r=Object(u.d)(Object(u.c)(i.a,{store:p},Object(u.c)(o,null)),document.body,r)},62:function(t){t.exports={root:"_3_rzjJq5FCVbTot-0ieJTy"}},63:function(t,e,n){n(64),t.exports=n(124)},64:function(t,e,n){"use strict";n.r(e);n(65),n(68)},91:function(){}});