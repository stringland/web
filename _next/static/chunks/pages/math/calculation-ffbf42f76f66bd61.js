(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{27049:function(e,t,n){"use strict";var r=n(87462),a=n(4942),i=n(67294),o=n(94184),l=n.n(o),s=n(61975),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.Z=function(e){return i.createElement(s.C,null,(function(t){var n,o=t.getPrefixCls,s=t.direction,u=e.prefixCls,h=e.type,d=void 0===h?"horizontal":h,f=e.orientation,p=void 0===f?"center":f,x=e.className,y=e.children,m=e.dashed,v=e.plain,j=c(e,["prefixCls","type","orientation","className","children","dashed","plain"]),g=o("divider",u),b=p.length>0?"-".concat(p):p,Z=!!y,w=l()(g,"".concat(g,"-").concat(d),(n={},(0,a.Z)(n,"".concat(g,"-with-text"),Z),(0,a.Z)(n,"".concat(g,"-with-text").concat(b),Z),(0,a.Z)(n,"".concat(g,"-dashed"),!!m),(0,a.Z)(n,"".concat(g,"-plain"),!!v),(0,a.Z)(n,"".concat(g,"-rtl"),"rtl"===s),n),x);return i.createElement("div",(0,r.Z)({className:w},j,{role:"separator"}),y&&i.createElement("span",{className:"".concat(g,"-inner-text")},y))}))}},56028:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math/calculation",function(){return n(57767)}])},23707:function(e,t,n){"use strict";var r=n(85893),a=n(25934),i=n(67294),o=(n(27083),n(9669)),l=n.n(o),s=n(99190),c=n(69677),u=n(64253),h=n(12461),d=n(90433),f=n(27049),p=n(42101);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==Z(t)&&"function"!==typeof t?y(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var O=s.Z.Option,C=c.Z.TextArea,S=u.Z.Title,N=u.Z.Paragraph,T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,i,o=w(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={originalValue:"1010101\n11",result:"",opType:1,base:2,extVal:2,showRes:!1},t.handleChange=t.handleChange.bind(y(t)),t.handleSrcBase=t.handleBase.bind(y(t)),t.handleExtVal=t.handleExtVal.bind(y(t)),t.handleDropDown=t.handleDropDown.bind(y(t)),t.handleSubmit=t.handleSubmit.bind(y(t)),t}return t=c,(n=[{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value})}},{key:"handleBase",value:function(e){this.setState({base:e})}},{key:"handleExtVal",value:function(e){this.setState({extVal:e})}},{key:"handleDropDown",value:function(e){this.setState({opType:Number(e.value)})}},{key:"handleSubmit",value:function(){var e=this,t=(0,a.Z)(),n="calculator-"+t,r=this.state.originalValue.split("\n"),i=[],o=0;for(o=0;o<r.length;o++)r[o].length>0&&(i=b(i).concat([r[o]]));var s={sessionID:t,requestID:n,userID:"default_user",base:this.state.base,vals:i,opType:this.state.opType,extVal:this.state.extVal};l().post("https://nifty-gasket-338410.wl.r.appspot.com/calculator",s,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?h.ZP.error(e.response.data.errMsg):h.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(S,{style:{textAlign:"center",fontSize:"3vh"},children:"Logic Calculator"}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"large"},children:"Calculate multiple non negative numbers' logic operation result. Operations include OR, AND, XOR, XNOR, NAND, NOT and etc."}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"large"},children:"Except NOT, Left/Right Shift operation, other operation requires multiple numbers and they should be separated in each line."}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"large"},children:"Base is between 2 and 62. A ~ Z represents 10 ~ 35. a ~ z represents 36 ~ 61."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:["Source Base:",(0,r.jsx)(d.Z,{defaultValue:2,min:2,max:62,onChange:this.handleBase})]}),(0,r.jsx)(f.Z,{}),(0,r.jsx)("div",{children:(0,r.jsxs)(s.Z,{labelInValue:!0,defaultValue:{value:"1"},style:{width:"25%"},onChange:this.handleDropDown,children:[(0,r.jsx)(O,{value:"1",children:"OR"}),(0,r.jsx)(O,{value:"2",children:"AND"}),(0,r.jsx)(O,{value:"3",children:"XOR"}),(0,r.jsx)(O,{value:"4",children:"NOT"}),(0,r.jsx)(O,{value:"5",children:"NOR"}),(0,r.jsx)(O,{value:"6",children:"NAND"}),(0,r.jsx)(O,{value:"7",children:"XNOR"}),(0,r.jsx)(O,{value:"8",children:"Left Shift"}),(0,r.jsx)(O,{value:"9",children:"Right Shift"})]})}),(0,r.jsx)(f.Z,{}),(0,r.jsx)("div",{style:{marginTop:"2%",display:this.state.opType>7&&this.state.opType<10?"block":"none"},children:(0,r.jsx)(d.Z,{defaultValue:2,min:0,max:2e3,onChange:this.handleExtVal})}),(0,r.jsx)(f.Z,{style:{display:this.state.opType>7&&this.state.opType<10?"block":"none"}}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(C,{showCount:!0,maxLength:3e6,rows:10,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(p.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,r.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,r.jsx)(C,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&m(t.prototype,n),i&&m(t,i),c}(i.Component);t.Z=T},57767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),a=n(67294),i=(n(27083),n(41664)),o=n.n(i),l=n(97183),s=n(62799),c=n(37724),u=n(19944),h=n(84477),d=n(23707),f=l.Z.Header,p=l.Z.Sider;function x(){var e=(0,a.useState)(!0),t=e[0],n=e[1];return(0,r.jsxs)(l.Z,{className:"pg-site-layout-background",style:{padding:"2%",minHeight:"100vh"},children:[(0,r.jsx)(p,{className:"pg-site-layout-background",style:{minWidth:"10vh",border:"1px solid rgb(235, 237, 240)"},trigger:null,collapsible:!0,collapsed:t,children:(0,r.jsxs)(s.Z,{mode:"inline",defaultSelectedKeys:["110"],style:{height:"100%"},children:[(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/mathbase",children:"Convert Math Base"})},"100"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/byteconv",children:"Convert Byte/Bit"})},"101"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/temperatureconv",children:"Convert Temperature"})},"102"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/speedconv",children:"Convert Speed"})},"103"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/freqconv",children:"Convert Frequency"})},"104"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/lengthconv",children:"Convert Length"})},"105"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/massconv",children:"Convert Mass"})},"106"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/areaconv",children:"Convert Area"})},"107"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/volumeconv",children:"Convert Volume"})},"108"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/angleconv",children:"Convert Angle"})},"109"),(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/math/calculation",children:"Logic Calculator"})},"110")]})}),(0,r.jsxs)(l.Z,{className:"pg-site-layout",children:[(0,r.jsx)(f,{className:"pg-site-layout-background",style:{padding:0},children:a.createElement(t?u.Z:h.Z,{className:"pg-trigger",onClick:function(){n(!t)}})}),(0,r.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,r.jsx)(d.Z,{})})]})]})}}},function(e){e.O(0,[4253,9922,9677,9190,433,7621,9469,9774,2888,179],(function(){return t=56028,e(e.s=t);var t}));var t=e.O();_N_E=t}]);