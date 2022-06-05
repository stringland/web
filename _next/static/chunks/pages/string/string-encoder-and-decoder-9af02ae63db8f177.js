(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7659],{12212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string/string-encoder-and-decoder",function(){return t(53269)}])},53269:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(85893),s=t(67294),i=(t(27083),t(41664)),o=t.n(i),l=t(9008),a=t.n(l),c=t(97183),d=t(62799),u=t(86405),h=t(19944),p=t(84477),f=t(25934),g=t(9669),y=t.n(g),v=t(84650),j=t(69677),x=t(77362),b=t(12461),m=t(27049),C=t(42101);function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,n){return!n||"object"!==O(n)&&"function"!==typeof n?w(e):n}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=T(e);if(n){var s=T(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return Z(this,t)}}var E=v.Z.Option,I=j.Z.TextArea,P=x.Z.Title,N=x.Z.Paragraph,D=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(o,e);var n,t,s,i=_(o);function o(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,e)).state={originalValue:"encode/decode string",result:"encode/decode string",srcCode:0,dstCode:1,opType:0,showRes:!1},n.handleChange=n.handleChange.bind(w(n)),n.handleOpType=n.handleOpType.bind(w(n)),n.handleSrcCode=n.handleSrcCode.bind(w(n)),n.handleDstCode=n.handleDstCode.bind(w(n)),n.handleSubmit=n.handleSubmit.bind(w(n)),n}return n=o,(t=[{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value})}},{key:"handleOpType",value:function(e){this.setState({opType:Number(e.value)})}},{key:"handleSrcCode",value:function(e){this.setState({srcCode:Number(e.value)})}},{key:"handleDstCode",value:function(e){this.setState({dstCode:Number(e.value)})}},{key:"handleSubmit",value:function(){var e=this,n=(0,f.Z)(),t={sessionID:n,requestID:"cvt-str-"+n,userID:"default_user",str:this.state.originalValue,srcCode:this.state.srcCode,dstCode:this.state.dstCode,opType:this.state.opType};y().post("https://nifty-gasket-338410.wl.r.appspot.com/string_encodedecode",t,{"Content-Type":"application/json"}).then((function(n){return e.setState({result:n.data.str,showRes:!0})})).catch((function(e){400===e.response.status?b.ZP.error(e.response.data.errMsg):b.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(P,{style:{textAlign:"center",fontSize:"3vh"},children:"String Encoder and Decoder"}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"large"},children:"Encode/decode given string between various kinds of encoding type like UTF8, GBK, UTF16 and etc."})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsxs)(v.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%"},onChange:this.handleOpType,children:[(0,r.jsx)(E,{value:"0",children:"Encode Only"}),(0,r.jsx)(E,{value:"1",children:"Decode Only"}),(0,r.jsx)(E,{value:"2",children:"Both Encode and Decode"})]})}),(0,r.jsx)(m.Z,{}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(v.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%",display:1!==this.state.opType?"block":"none"},onChange:this.handleSrcCode,children:[(0,r.jsx)(E,{value:"0",children:"UTF8"}),(0,r.jsx)(E,{value:"1",children:"GBK"}),(0,r.jsx)(E,{value:"2",children:"BIG5"}),(0,r.jsx)(E,{value:"3",children:"EUCJP"}),(0,r.jsx)(E,{value:"4",children:"ISO2022JP"}),(0,r.jsx)(E,{value:"5",children:"ShiftJIS"}),(0,r.jsx)(E,{value:"6",children:"EUCKR"}),(0,r.jsx)(E,{value:"7",children:"UTF16"})]}),(0,r.jsxs)(v.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{marginTop:"1%",width:"25%",display:0!==this.state.opType?"block":"none"},onChange:this.handleDstCode,children:[(0,r.jsx)(E,{value:"0",children:"UTF8"}),(0,r.jsx)(E,{value:"1",children:"GBK"}),(0,r.jsx)(E,{value:"2",children:"BIG5"}),(0,r.jsx)(E,{value:"3",children:"EUCJP"}),(0,r.jsx)(E,{value:"4",children:"ISO2022JP"}),(0,r.jsx)(E,{value:"5",children:"ShiftJIS"}),(0,r.jsx)(E,{value:"6",children:"EUCKR"}),(0,r.jsx)(E,{value:"7",children:"UTF16"})]})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(I,{showCount:!0,maxLength:3e6,rows:10,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(C.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,r.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,r.jsx)(I,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&S(n.prototype,t),s&&S(n,s),o}(s.Component),U=c.Z.Header,R=c.Z.Sider;function B(){var e=(0,s.useState)(!1),n=e[0],t=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"String Encoder and Decoder"}),(0,r.jsx)("meta",{name:"description",content:"Encode/decode given string between various kinds of encoding type like UTF8, GBK, UTF16 and etc."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/web/favicon.ico"})]}),(0,r.jsxs)(c.Z,{className:"pg-site-layout-background",style:{padding:"2%",minHeight:"100vh"},children:[(0,r.jsx)(R,{className:"pg-site-layout-background",style:{minWidth:"10vh",border:"1px solid rgb(235, 237, 240)"},trigger:null,collapsible:!0,collapsed:n,children:(0,r.jsxs)(d.Z,{mode:"inline",defaultSelectedKeys:["304"],style:{height:"100%"},children:[(0,r.jsx)(d.Z.Item,{icon:(0,r.jsx)(u.Z,{}),children:(0,r.jsx)(o(),{href:"/web/string/string-base-converter",children:"Convert String Base"})},"300"),(0,r.jsx)(d.Z.Item,{icon:(0,r.jsx)(u.Z,{}),children:(0,r.jsx)(o(),{href:"/web/string/string-encoder-and-decoder",children:"En/Decode String"})},"304"),(0,r.jsx)(d.Z.Item,{icon:(0,r.jsx)(u.Z,{}),children:(0,r.jsx)(o(),{href:"/web/string/longest-palindrome-processor",children:"Longest Palindrome"})},"305"),(0,r.jsx)(d.Z.Item,{icon:(0,r.jsx)(u.Z,{}),children:(0,r.jsx)(o(),{href:"/web/string/longest-common-substring-processor",children:"Longest Common Substring"})},"306")]})}),(0,r.jsxs)(c.Z,{className:"pg-site-layout",children:[(0,r.jsx)(U,{className:"pg-site-layout-background",style:{padding:0},children:s.createElement(n?h.Z:p.Z,{className:"pg-trigger",onClick:function(){t(!n)}})}),(0,r.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,r.jsx)(D,{})})]})]})]})}}},function(e){e.O(0,[7362,9922,2135,7808,4650,2428,9774,2888,179],(function(){return n=12212,e(e.s=n);var n}));var n=e.O();_N_E=n}]);