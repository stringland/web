(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9472],{41987:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/security/pwdgen",function(){return n(45720)}])},46369:function(e,t,n){"use strict";var s=n(85893),r=n(25934),a=n(67294),i=(n(27083),n(9669)),l=n.n(i),o=n(69677),c=n(64253),h=n(12461),u=n(27049),d=n(71230),p=n(15746),f=n(87782),g=n(90433),y=n(42101);function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?x(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return C(this,n)}}var Z=o.Z.TextArea,S=c.Z.Text,L=c.Z.Title,k=c.Z.Paragraph,_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(o,e);var t,n,a,i=v(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).state={hasUpperCaseLetters:!0,hasLowerCaseLetters:!0,hasDigits:!0,hasSpecialChars:!0,len:8,showRes:!1},t.handleHasUpperCaseLetters=t.handleHasUpperCaseLetters.bind(x(t)),t.handleHasLowerCaseLetters=t.handleHasLowerCaseLetters.bind(x(t)),t.handleHasDigits=t.handleHasDigits.bind(x(t)),t.handleHasSpecialChars=t.handleHasSpecialChars.bind(x(t)),t.handleInputChange=t.handleInputChange.bind(x(t)),t.handleSubmit=t.handleSubmit.bind(x(t)),t}return t=o,(n=[{key:"handleHasUpperCaseLetters",value:function(e){this.setState({hasUpperCaseLetters:e.target.checked})}},{key:"handleHasLowerCaseLetters",value:function(e){this.setState({hasLowerCaseLetters:e.target.checked})}},{key:"handleHasDigits",value:function(e){this.setState({hasDigit:e.target.checked})}},{key:"handleHasSpecialChars",value:function(e){this.setState({hasSpecialChars:e.target.checked})}},{key:"handleInputChange",value:function(e){console.log(Number(e)),this.setState({len:Number(e)})}},{key:"handleSubmit",value:function(){var e=this,t=(0,r.Z)(),n={sessionID:t,requestID:"gen-psw-"+t,userID:"default_user",str:this.state.originalValue,len:this.state.len,hasUpperCaseLetters:this.state.hasUpperCaseLetters,hasLowerCaseLetters:this.state.hasLowerCaseLetters,hasDigits:this.state.hasDigits,hasSpecialChars:this.state.hasSpecialChars};l().post("https://nifty-gasket-338410.wl.r.appspot.com/generate_password",n,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?h.ZP.error(e.response.data.errMsg):h.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,s.jsx)(L,{style:{textAlign:"center",fontSize:"3vh"},children:"Password Generator"}),(0,s.jsx)(k,{style:{textAlign:"center",fontSize:"large"},children:"Randomly generate password with specific length, and characters."})]}),(0,s.jsx)("div",{style:{marginTop:"2%"},children:(0,s.jsx)(S,{style:{textAlign:"left",fontSize:"medium"},children:"Note: The generated password will not be saved anywhere in StringLand. Please remember to save it by yourself."})}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)("div",{style:{marginTop:"2%"},children:[(0,s.jsxs)(d.Z,{style:{width:"100%"},children:[(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasUpperCaseLetters,children:"Including Uppercase Letters"})}),(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasLowerCaseLetters,children:"Including Lower Letters"})})]}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)(d.Z,{style:{width:"100%"},children:[(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasDigits,children:"Including Digits"})}),(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasSpecialChars,children:"Including Special Characters "})})]}),(0,s.jsx)(u.Z,{})]}),(0,s.jsxs)("div",{style:{marginTop:"2%"},children:["Password Length: ",(0,s.jsx)(g.Z,{min:7,max:99,defaultValue:8,onChange:this.handleInputChange})]}),(0,s.jsx)("div",{style:{marginTop:"2%"},children:(0,s.jsx)(y.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,s.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,s.jsx)(Z,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&b(t.prototype,n),a&&b(t,a),o}(a.Component);t.Z=_},45720:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(85893),r=n(67294),a=(n(27083),n(41664)),i=n.n(a),l=n(97183),o=n(62799),c=n(94149),h=n(19944),u=n(84477),d=n(46369),p=l.Z.Header,f=l.Z.Sider;function g(){var e=(0,r.useState)(!0),t=e[0],n=e[1];return(0,s.jsxs)(l.Z,{className:"pg-site-layout-background",style:{padding:"2%",minHeight:"100vh"},children:[(0,s.jsx)(f,{className:"pg-site-layout-background",style:{minWidth:"10vh",border:"1px solid rgb(235, 237, 240)"},trigger:null,collapsible:!0,collapsed:t,children:(0,s.jsxs)(o.Z,{mode:"inline",defaultSelectedKeys:["401"],style:{height:"100%"},children:[(0,s.jsx)(o.Z.Item,{icon:(0,s.jsx)(c.Z,{}),children:(0,s.jsx)(i(),{href:"/security/hashgen",children:"Hash Generation"})},"400"),(0,s.jsx)(o.Z.Item,{icon:(0,s.jsx)(c.Z,{}),children:(0,s.jsx)(i(),{href:"/security/pwdgen",children:"Password Generation"})},"401")]})}),(0,s.jsxs)(l.Z,{className:"pg-site-layout",children:[(0,s.jsx)(p,{className:"pg-site-layout-background",style:{padding:0},children:r.createElement(t?h.Z:u.Z,{className:"pg-trigger",onClick:function(){n(!t)}})}),(0,s.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,s.jsx)(d.Z,{})})]})]})}}},function(e){e.O(0,[4253,9922,9677,433,7621,2087,6741,9774,2888,179],(function(){return t=41987,e(e.s=t);var t}));var t=e.O();_N_E=t}]);