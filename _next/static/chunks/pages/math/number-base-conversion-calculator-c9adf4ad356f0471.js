(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9997],{72652:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},27049:function(e,t,n){"use strict";var r=n(87462),a=n(4942),o=n(67294),s=n(94184),i=n.n(s),l=n(61975),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.Z=function(e){return o.createElement(l.C,null,(function(t){var n,s=t.getPrefixCls,l=t.direction,u=e.prefixCls,f=e.type,d=void 0===f?"horizontal":f,h=e.orientation,p=void 0===h?"center":h,y=e.className,v=e.children,b=e.dashed,m=e.plain,g=c(e,["prefixCls","type","orientation","className","children","dashed","plain"]),x=s("divider",u),j=p.length>0?"-".concat(p):p,w=!!v,_=i()(x,"".concat(x,"-").concat(d),(n={},(0,a.Z)(n,"".concat(x,"-with-text"),w),(0,a.Z)(n,"".concat(x,"-with-text").concat(j),w),(0,a.Z)(n,"".concat(x,"-dashed"),!!b),(0,a.Z)(n,"".concat(x,"-plain"),!!m),(0,a.Z)(n,"".concat(x,"-rtl"),"rtl"===l),n),y);return o.createElement("div",(0,r.Z)({className:_},g,{role:"separator"}),v&&o.createElement("span",{className:"".concat(x,"-inner-text")},v))}))}},43529:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(26909))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},26909:function(e,t,n){"use strict";var r=n(20862),a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(81109)),s=r(n(67294)),i=a(n(72652)),l=a(n(26545)),c=function(e,t){return s.createElement(l.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:i.default}))};c.displayName="DownOutlined";var u=s.forwardRef(c);t.default=u},60609:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math/number-base-conversion-calculator",function(){return n(70797)}])},70797:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(85893),a=n(67294),o=(n(27083),n(9008)),s=n.n(o),i=n(97183),l=n(25934),c=n(9669),u=n.n(c),f=n(69677),d=n(77362),h=n(12461),p=n(90433),y=n(27049),v=n(42101);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?m(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var B=f.Z.TextArea,C=d.Z.Title,Z=d.Z.Paragraph,P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,e);var t,n,a,o=S(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,e)).state={originalValue:"1010101",result:"1010101",type:0,srcBase:10,dstBase:10,showRes:!1},t.handleChange=t.handleChange.bind(m(t)),t.handleSrcBase=t.handleSrcBase.bind(m(t)),t.handleDstBase=t.handleDstBase.bind(m(t)),t.handleSubmit=t.handleSubmit.bind(m(t)),t}return t=s,(n=[{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value})}},{key:"handleSrcBase",value:function(e){this.setState({srcBase:e})}},{key:"handleDstBase",value:function(e){this.setState({dstBase:e})}},{key:"handleSubmit",value:function(){var e=this,t=(0,l.Z)(),n="math-base-"+t,r=this.state.originalValue.split("\n"),a=[],o=0;for(o=0;o<r.length;o++)r[o].length>0&&(a=_(a).concat([r[o]]));var s={sessionID:t,requestID:n,userID:"default_user",srcBase:this.state.srcBase,dstBase:this.state.dstBase,str:a,type:this.state.type};u().post("https://nifty-gasket-338410.wl.r.appspot.com/math_base",s,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?h.ZP.error(e.response.data.errMsg):h.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(C,{style:{textAlign:"center",fontSize:"3vh"},children:"Number Base Conversion Calculator"}),(0,r.jsx)(Z,{style:{textAlign:"center",fontSize:"large"},children:"Convert given number from source base to target base. Base is between 2 and 62. A ~ Z represents 10 ~ 35. a ~ z represents 36 ~ 61."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:["Source Base:",(0,r.jsx)(p.Z,{defaultValue:10,min:2,max:62,onChange:this.handleSrcBase})]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)("div",{children:["Destination Base:",(0,r.jsx)(p.Z,{defaultValue:10,min:2,max:62,onChange:this.handleDstBase})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(B,{showCount:!0,maxLength:3e3,rows:10,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(v.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,r.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,r.jsx)(B,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&g(t.prototype,n),a&&g(t,a),s}(a.Component);function k(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Number Base Conversion Calculator"}),(0,r.jsx)("meta",{name:"description",content:"a converter converts given number from source base to target base. Base is between 2 and 62. A ~ Z represents 10 ~ 35. a ~ z represents 36 ~ 61. allows users to set customised output format by setting number of floating digits and using scientific notation."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/web/favicon.ico"})]}),(0,r.jsx)(i.Z,{className:"pg-site-layout",style:{padding:"2% 10% 0 10%",minHeight:"100vh"},children:(0,r.jsx)("div",{children:(0,r.jsx)(P,{})})})]})}}},function(e){e.O(0,[7362,9922,9677,433,9774,2888,179],(function(){return t=60609,e(e.s=t);var t}));var t=e.O();_N_E=t}]);