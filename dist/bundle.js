(()=>{"use strict";var n={144:(n,t,e)=>{e.d(t,{Z:()=>d});var r=e(81),o=e.n(r),a=e(645),i=e.n(a),s=e(83),c=i()(o());c.i(s.Z),c.push([n.id,"",""]);const d=c},83:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus,\n:active {\n  outline: none;\n}\n\na:focus,\na:active {\n  outline: none;\n}\n\nnav,\nfooter,\nheader,\naside {\n  display: block;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 14px;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\nbutton {\n  cursor: pointer;\n}\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\na,\na:visited {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: none;\n}\nul,\nli {\n  list-style: none;\n}\nimg {\n  vertical-align: top;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var f=e(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var u=e(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),i=e.n(a),s=e(565),c=e.n(s),d=e(216),u=e.n(d),l=e(589),f=e.n(l),p=e(144),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const v=new class{constructor(){this.board=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}randomBoard(){}},b=new class{constructor(){this.counter=0}attack(n,t,e){return 2!==e.board[n][t]?0===e.board[n][t]?(e.board[n][t]=2,console.log("water")):1===e.board[n][t]&&(e.board[n][t]=-1,this.decideWhereToHit(n,t,e),this.counter++,console.log("ship",this.counter)):2===e.board[n][t]&&this.attack(this.getRandomInt(),this.getRandomInt(),e),this.counter,e.board}getRandomInt(){return Math.floor(10*Math.random())}decideWhereToHit(n,t,e){1===e.board[n+1][t]?this.attack(n+1,t,e):1===e.board[n-1][t]?this.attack(n-1,t,e):1===e.board[n][t+1]?this.attack(n,t+1,e):1===e.board[n][t-1]&&this.attack(n,t-1,e)}checkIfTheEnd(n){for(let t=0;t<10;t++)for(let e=0;e<10;e++)-1===n.board[t][e]&&this.counter++;return 17===this.counter||this.counter}};v.board[5][5]=1,v.board[5][6]=1,v.board[5][7]=1,console.log(v.board),b.attack(5,5,v),console.log(v.board)})()})();