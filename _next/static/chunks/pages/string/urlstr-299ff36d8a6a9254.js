(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8762],{50587:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string/urlstr",function(){return n(13885)}])},13885:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),i=n(67294),s=(n(27083),n(41664)),o=n.n(s),a=n(97183),l=n(62799),c=n(86405),u=n(19944),h=n(84477),d=n(25934),p=n(9669),f=n.n(p),y=n(99190),g=n(69677),j=n(64253),v=n(12461),x=n(42101);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?b(e):t}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var i=w(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Z(this,n)}}var k=y.Z.Option,E=g.Z.TextArea,P=j.Z.Title,O=j.Z.Paragraph,T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,e);var t,n,i,s=C(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s.call(this,e)).state={originalValue:"test.com?q=abc&c=iuiolj&ui=<uui>",result:"test.com?q=abc&c=iuiolj&ui=<uui>",type:0,showRes:!1},t.handleChange=t.handleChange.bind(b(t)),t.handleDropDown=t.handleDropDown.bind(b(t)),t.handleSubmit=t.handleSubmit.bind(b(t)),t}return t=o,(n=[{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value})}},{key:"handleDropDown",value:function(e){this.setState({type:Number(e.value)})}},{key:"handleSubmit",value:function(){var e=this,t=(0,d.Z)(),n={sessionID:t,requestID:"url-str-"+t,userID:"default_user",str:this.state.originalValue,type:this.state.type};f().post("https://nifty-gasket-338410.wl.r.appspot.com/url_string",n,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?v.ZP.error(e.response.data.errMsg):v.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(P,{style:{textAlign:"center",fontSize:"3vh"},children:"URL Query/Path (Un)Escape"}),(0,r.jsx)(O,{style:{textAlign:"center",fontSize:"large"},children:"Escape or unescape query/path of URL."})]}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsxs)(y.Z,{labelInValue:!0,defaultValue:{value:"0"},style:{width:"25%"},onChange:this.handleDropDown,children:[(0,r.jsx)(k,{value:"0",children:"Escape Query"}),(0,r.jsx)(k,{value:"1",children:"Unescape Query"}),(0,r.jsx)(k,{value:"2",children:"Escape Path"}),(0,r.jsx)(k,{value:"3",children:"Unescape Path"})]})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(E,{showCount:!0,maxLength:3e6,rows:10,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)("div",{style:{marginTop:"2%"},children:(0,r.jsx)(x.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,r.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,r.jsx)(E,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&m(t.prototype,n),i&&m(t,i),o}(i.Component),D=a.Z.Header,R=a.Z.Sider;function N(){var e=(0,i.useState)(!0),t=e[0],n=e[1];return(0,r.jsxs)(a.Z,{className:"pg-site-layout-background",style:{padding:"2%",minHeight:"100vh"},children:[(0,r.jsx)(R,{className:"pg-site-layout-background",style:{minWidth:"10vh",border:"1px solid rgb(235, 237, 240)"},trigger:null,collapsible:!0,collapsed:t,children:(0,r.jsxs)(l.Z,{mode:"inline",defaultSelectedKeys:["302"],style:{height:"100%"},children:[(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/string/basestr",children:"Convert String Base"})},"300"),(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/string/htmlstr",children:"HTML (Un)Escape"})},"301"),(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/string/urlstr",children:"URL Query/Path (Un)Escape"})},"302"),(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/string/ipconv",children:"Convert IP to Base"})},"303"),(0,r.jsx)(l.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(o(),{href:"/string/edcstr",children:"En/Decode String"})},"304")]})}),(0,r.jsxs)(a.Z,{className:"pg-site-layout",children:[(0,r.jsx)(D,{className:"pg-site-layout-background",style:{padding:0},children:i.createElement(t?u.Z:h.Z,{className:"pg-trigger",onClick:function(){n(!t)}})}),(0,r.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,r.jsx)(T,{})})]})]})}}},function(e){e.O(0,[4253,9922,9677,9190,7621,6003,9774,2888,179],(function(){return t=50587,e(e.s=t);var t}));var t=e.O();_N_E=t}]);