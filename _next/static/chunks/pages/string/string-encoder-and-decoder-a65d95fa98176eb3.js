(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7659],{27049:function(e,t,n){"use strict";var r=n(87462),o=n(4942),i=n(67294),a=n(94184),l=n.n(a),s=n(61975),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.Z=function(e){return i.createElement(s.C,null,(function(t){var n,a=t.getPrefixCls,s=t.direction,d=e.prefixCls,u=e.type,h=void 0===u?"horizontal":u,p=e.orientation,f=void 0===p?"center":p,v=e.className,y=e.children,g=e.dashed,x=e.plain,j=c(e,["prefixCls","type","orientation","className","children","dashed","plain"]),b=a("divider",d),m=f.length>0?"-".concat(f):f,C=!!y,w=l()(b,"".concat(b,"-").concat(h),(n={},(0,o.Z)(n,"".concat(b,"-with-text"),C),(0,o.Z)(n,"".concat(b,"-with-text").concat(m),C),(0,o.Z)(n,"".concat(b,"-dashed"),!!g),(0,o.Z)(n,"".concat(b,"-plain"),!!x),(0,o.Z)(n,"".concat(b,"-rtl"),"rtl"===s),n),v);return i.createElement("div",(0,r.Z)({className:w},j,{role:"separator"}),y&&i.createElement("span",{className:"".concat(b,"-inner-text")},y))}))}},12212:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string/string-encoder-and-decoder",function(){return n(53269)}])},53269:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(85893),o=n(67294),i=(n(27083),n(9008)),a=n.n(i),l=n(97183),s=n(25934),c=n(9669),d=n.n(c),u=n(84650),h=n(69677),p=n(77362),f=n(12461),v=n(27049),y=n(42101);function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?g(e):t}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}var O=u.Z.Option,T=h.Z.TextArea,S=p.Z.Title,E=p.Z.Paragraph,_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,i=w(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={originalValue:"encode/decode string",result:"encode/decode string",srcCode:0,dstCode:1,opType:0,showRes:!1},t.handleChange=t.handleChange.bind(g(t)),t.handleOpType=t.handleOpType.bind(g(t)),t.handleSrcCode=t.handleSrcCode.bind(g(t)),t.handleDstCode=t.handleDstCode.bind(g(t)),t.handleSubmit=t.handleSubmit.bind(g(t)),t}return t=a,(n=[{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value})}},{key:"handleOpType",value:function(e){this.setState({opType:Number(e.value)})}},{key:"handleSrcCode",value:function(e){this.setState({srcCode:Number(e.value)})}},{key:"handleDstCode",value:function(e){this.setState({dstCode:Number(e.value)})}},{key:"handleSubmit",value:function(){var e=this,t=(0,s.Z)(),n={sessionID:t,requestID:"cvt-str-"+t,userID:"default_user",str:this.state.originalValue,srcCode:this.state.srcCode,dstCode:this.state.dstCode,opType:this.state.opType};d().post("https://nifty-gasket-338410.wl.r.appspot.com/string_encodedecode",n,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?f.ZP.error(e.response.data.errMsg):f.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(S,{style:{textAlign:"center",fontSize:"3vh"},children:"String Encoder and Decoder"}),(0,r.jsx)(E,{style:{textAlign:"center",fontSize:"large"},children:"Encode/decode given string between various kinds of encoding type like UTF8, GBK, UTF16 and etc."})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsxs)(u.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%"},onChange:this.handleOpType,children:[(0,r.jsx)(O,{value:"0",children:"Encode Only"}),(0,r.jsx)(O,{value:"1",children:"Decode Only"}),(0,r.jsx)(O,{value:"2",children:"Both Encode and Decode"})]})}),(0,r.jsx)(v.Z,{}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(u.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%",display:1!==this.state.opType?"block":"none"},onChange:this.handleSrcCode,children:[(0,r.jsx)(O,{value:"0",children:"UTF8"}),(0,r.jsx)(O,{value:"1",children:"GBK"}),(0,r.jsx)(O,{value:"2",children:"BIG5"}),(0,r.jsx)(O,{value:"3",children:"EUCJP"}),(0,r.jsx)(O,{value:"4",children:"ISO2022JP"}),(0,r.jsx)(O,{value:"5",children:"ShiftJIS"}),(0,r.jsx)(O,{value:"6",children:"EUCKR"}),(0,r.jsx)(O,{value:"7",children:"UTF16"})]}),(0,r.jsxs)(u.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{marginTop:"1%",width:"25%",display:0!==this.state.opType?"block":"none"},onChange:this.handleDstCode,children:[(0,r.jsx)(O,{value:"0",children:"UTF8"}),(0,r.jsx)(O,{value:"1",children:"GBK"}),(0,r.jsx)(O,{value:"2",children:"BIG5"}),(0,r.jsx)(O,{value:"3",children:"EUCJP"}),(0,r.jsx)(O,{value:"4",children:"ISO2022JP"}),(0,r.jsx)(O,{value:"5",children:"ShiftJIS"}),(0,r.jsx)(O,{value:"6",children:"EUCKR"}),(0,r.jsx)(O,{value:"7",children:"UTF16"})]})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(T,{showCount:!0,maxLength:3e6,rows:10,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(y.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,r.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,r.jsx)(T,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&x(t.prototype,n),o&&x(t,o),a}(o.Component);function k(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"String Encoder and Decoder"}),(0,r.jsx)("meta",{name:"description",content:"Encode/decode given string between various kinds of encoding type like UTF8, GBK, UTF16 and etc."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/web/favicon.ico"})]}),(0,r.jsx)(l.Z,{className:"pg-site-layout",style:{padding:"2% 10% 0 10%",minHeight:"100vh"},children:(0,r.jsx)("div",{children:(0,r.jsx)(_,{})})})]})}}},function(e){e.O(0,[7362,9922,9677,4650,9774,2888,179],(function(){return t=12212,e(e.s=t);var t}));var t=e.O();_N_E=t}]);