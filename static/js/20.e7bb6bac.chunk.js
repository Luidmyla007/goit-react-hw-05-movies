"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[20],{20:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r=t(439),i=t(791),o=t(861),a=t(757),c=t.n(a);function p(){return p=(0,o.Z)(c().mark((function n(e){var t,r,i,o,a,p=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="https://api.themoviedb.org/3/search/movie",i="?api_key=".concat("51114562faac57108ae3113fba230ec4","&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"),n.next=6,fetch("".concat(r).concat(i));case 6:return o=n.sent,n.next=9,o.json();case 9:return a=n.sent,n.abrupt("return",a.results);case 11:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}var s,u,l,d=function(n){return p.apply(this,arguments)},f=t(689),h=t(522),x=t(87),g=t(168),b=t(444),m=b.ZP.ul(s||(s=(0,g.Z)([" \npadding: 15px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 60px;\n  justify-content: center;\n  list-style-type: none; \n"]))),y=b.ZP.p(u||(u=(0,g.Z)([" \n font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: rgba(9, 60, 61, 1);\n   text-shadow: 2px 2px 4px rgba(143, 199, 201, 1);\n   margin: 0;\n"]))),v=b.ZP.li(l||(l=(0,g.Z)([" \n width: calc((100%-80px) / 5);\n  transform: scale(1);\n  border-radius: 12px;\n\n  &:hover {\n    transform: scale(1.01);\n  }\n  &:hover > p {\n    opacity: 1;\n  }\n \n  img {  \n    border-radius: 5px;\n    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);\n    height: 100%;\n    width: 100%;\n"]))),w=t(184);var j=function(n){var e=n.query,t=n.movies;return(0,w.jsx)(m,{children:t&&t.map((function(n){return(0,w.jsx)(v,{children:(0,w.jsxs)(x.rU,{to:"/movies/".concat(n.id),state:{from:"/movies?name=".concat(e)},children:[(0,w.jsx)(y,{children:n.title}),null===n.poster_path?(0,w.jsx)("img",{src:h,alt:n.title}):(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title})]})},n.id)}))})};function P(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function O(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){P(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k,_,q,S,z,D=t(820),E=b.ZP.header(k||(k=(0,g.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #fff;\n  background-color: rgba(184, 216, 217, 1);\n"]))),C=b.ZP.form(_||(_=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),U=(b.ZP.label(q||(q=(0,g.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),b.ZP.input(S||(S=(0,g.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])))),F=b.ZP.button(z||(z=(0,g.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"])));var H=function(){var n=(0,f.TH)(),e=(0,f.s0)();return(0,w.jsx)(E,{children:(0,w.jsxs)(C,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.target.elements.query.value;e(O(O({},n),{},{search:"query=".concat(r)}))},children:[(0,w.jsx)(F,{type:"submit",children:(0,w.jsx)("span",{children:(0,w.jsx)(D.RB5,{width:"12",height:"12"})})}),(0,w.jsx)(U,{type:"text",name:"query",autoFocus:!0,placeholder:"Search images and photos",size:40})]})})},R=function(){var n,e=(0,f.TH)().search,t=null!==(n=new URLSearchParams(e).get("query"))&&void 0!==n?n:"",o=(0,i.useState)(null),a=(0,r.Z)(o,2),c=a[0],p=a[1];return(0,i.useEffect)((function(){t&&d(t).then(p).catch((function(n){console.log("Error: "+n)}))}),[t]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(H,{}),c&&(0,w.jsx)("div",{children:(0,w.jsx)(j,{query:t,movies:c})})]})}},522:function(n,e,t){n.exports=t.p+"static/media/no_image.5cd5c759ad26a0ad8878.png"},861:function(n,e,t){function r(n,e,t,r,i,o,a){try{var c=n[o](a),p=c.value}catch(s){return void t(s)}c.done?e(p):Promise.resolve(p).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var a=n.apply(e,t);function c(n){r(a,i,o,c,p,"next",n)}function p(n){r(a,i,o,c,p,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=20.e7bb6bac.chunk.js.map