(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7182],{27049:function(e,t,n){"use strict";var r=n(87462),i=n(4942),s=n(67294),l=n(94184),a=n.n(l),o=n(61975),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.Z=function(e){return s.createElement(o.C,null,(function(t){var n,l=t.getPrefixCls,o=t.direction,d=e.prefixCls,u=e.type,h=void 0===u?"horizontal":u,p=e.orientation,f=void 0===p?"center":p,y=e.className,v=e.children,g=e.dashed,x=e.plain,j=c(e,["prefixCls","type","orientation","className","children","dashed","plain"]),b=l("divider",d),m=f.length>0?"-".concat(f):f,C=!!v,Z=a()(b,"".concat(b,"-").concat(h),(n={},(0,i.Z)(n,"".concat(b,"-with-text"),C),(0,i.Z)(n,"".concat(b,"-with-text").concat(m),C),(0,i.Z)(n,"".concat(b,"-dashed"),!!g),(0,i.Z)(n,"".concat(b,"-plain"),!!x),(0,i.Z)(n,"".concat(b,"-rtl"),"rtl"===o),n),y);return s.createElement("div",(0,r.Z)({className:Z},j,{role:"separator"}),v&&s.createElement("span",{className:"".concat(b,"-inner-text")},v))}))}},82134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string/edcstr",function(){return n(84074)}])},28790:function(e,t,n){"use strict";var r=n(85893),i=n(25934),s=n(67294),l=(n(27083),n(9669)),a=n.n(l),o=n(99190),c=n(69677),d=n(64253),u=n(12461),h=n(27049),p=n(42101);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?f(e):t}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}var m=o.Z.Option,C=c.Z.TextArea,Z=d.Z.Title,S=d.Z.Paragraph,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(c,e);var t,n,s,l=b(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={originalValue:"encode/decode string",result:"encode/decode string",srcCode:0,dstCode:1,opType:0,showRes:!1},t.handleChange=t.handleChange.bind(f(t)),t.handleOpType=t.handleOpType.bind(f(t)),t.handleSrcCode=t.handleSrcCode.bind(f(t)),t.handleDstCode=t.handleDstCode.bind(f(t)),t.handleSubmit=t.handleSubmit.bind(f(t)),t}return t=c,(n=[{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value})}},{key:"handleOpType",value:function(e){this.setState({opType:Number(e.value)})}},{key:"handleSrcCode",value:function(e){this.setState({srcCode:Number(e.value)})}},{key:"handleDstCode",value:function(e){this.setState({dstCode:Number(e.value)})}},{key:"handleSubmit",value:function(){var e=this,t=(0,i.Z)(),n={sessionID:t,requestID:"cvt-str-"+t,userID:"default_user",str:this.state.originalValue,srcCode:this.state.srcCode,dstCode:this.state.dstCode,opType:this.state.opType};a().post("https://nifty-gasket-338410.wl.r.appspot.com/string_encodedecode",n,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?u.ZP.error(e.response.data.errMsg):u.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(Z,{style:{textAlign:"center",fontSize:"3vh"},children:"String Encoder and Decoder"}),(0,r.jsx)(S,{style:{textAlign:"center",fontSize:"large"},children:"Encode/decode given string between various kinds of encoding type like UTF8, GBK, UTF16 and etc."})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsxs)(o.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%"},onChange:this.handleOpType,children:[(0,r.jsx)(m,{value:"0",children:"Encode Only"}),(0,r.jsx)(m,{value:"1",children:"Decode Only"}),(0,r.jsx)(m,{value:"2",children:"Both Encode and Decode"})]})}),(0,r.jsx)(h.Z,{}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(o.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%",display:1!==this.state.opType?"block":"none"},onChange:this.handleSrcCode,children:[(0,r.jsx)(m,{value:"0",children:"UTF8"}),(0,r.jsx)(m,{value:"1",children:"GBK"}),(0,r.jsx)(m,{value:"2",children:"BIG5"}),(0,r.jsx)(m,{value:"3",children:"EUCJP"}),(0,r.jsx)(m,{value:"4",children:"ISO2022JP"}),(0,r.jsx)(m,{value:"5",children:"ShiftJIS"}),(0,r.jsx)(m,{value:"6",children:"EUCKR"}),(0,r.jsx)(m,{value:"7",children:"UTF16"})]}),(0,r.jsxs)(o.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{marginTop:"1%",width:"25%",display:0!==this.state.opType?"block":"none"},onChange:this.handleDstCode,children:[(0,r.jsx)(m,{value:"0",children:"UTF8"}),(0,r.jsx)(m,{value:"1",children:"GBK"}),(0,r.jsx)(m,{value:"2",children:"BIG5"}),(0,r.jsx)(m,{value:"3",children:"EUCJP"}),(0,r.jsx)(m,{value:"4",children:"ISO2022JP"}),(0,r.jsx)(m,{value:"5",children:"ShiftJIS"}),(0,r.jsx)(m,{value:"6",children:"EUCKR"}),(0,r.jsx)(m,{value:"7",children:"UTF16"})]})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(C,{showCount:!0,maxLength:3e6,rows:10,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(p.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,r.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,r.jsx)(C,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&y(t.prototype,n),s&&y(t,s),c}(s.Component);t.Z=w},84074:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(85893),i=n(67294),s=(n(27083),n(41664)),l=n.n(s),a=n(97183),o=n(62799),c=n(86405),d=n(19944),u=n(84477),h=n(28790),p=a.Z.Header,f=a.Z.Sider;function y(){var e=(0,i.useState)(!0),t=e[0],n=e[1];return(0,r.jsxs)(a.Z,{className:"pg-site-layout-background",style:{padding:"2%",minHeight:"100vh"},children:[(0,r.jsx)(f,{className:"pg-site-layout-background",style:{minWidth:"10vh",border:"1px solid rgb(235, 237, 240)"},trigger:null,collapsible:!0,collapsed:t,children:(0,r.jsxs)(o.Z,{mode:"inline",defaultSelectedKeys:["304"],style:{height:"100%"},children:[(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(l(),{href:"/string/basestr",children:"Convert String Base"})},"300"),(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(l(),{href:"/string/htmlstr",children:"HTML (Un)Escape"})},"301"),(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(l(),{href:"/string/urlstr",children:"URL Query/Path (Un)Escape"})},"302"),(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(l(),{href:"/string/ipconv",children:"Convert IP to Base"})},"303"),(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(l(),{href:"/string/edcstr",children:"En/Decode String"})},"304")]})}),(0,r.jsxs)(a.Z,{className:"pg-site-layout",children:[(0,r.jsx)(p,{className:"pg-site-layout-background",style:{padding:0},children:i.createElement(t?d.Z:u.Z,{className:"pg-trigger",onClick:function(){n(!t)}})}),(0,r.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,r.jsx)(h.Z,{})})]})]})}}},function(e){e.O(0,[4253,9922,9677,9190,7621,6003,9774,2888,179],(function(){return t=82134,e(e.s=t);var t}));var t=e.O();_N_E=t}]);