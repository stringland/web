(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1983],{91275:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/security/password-generator",function(){return n(90458)}])},46369:function(e,t,n){"use strict";var s=n(85893),r=n(25934),a=n(67294),i=(n(27083),n(9669)),o=n.n(i),l=n(69677),h=n(64253),c=n(12461),u=n(27049),d=n(71230),p=n(15746),f=n(87782),g=n(90433),y=n(42101);function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?w(e):t}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return b(this,n)}}var L=l.Z.TextArea,S=h.Z.Text,Z=h.Z.Title,k=h.Z.Paragraph,_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(l,e);var t,n,a,i=m(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={hasUpperCaseLetters:!0,hasLowerCaseLetters:!0,hasDigits:!0,hasSpecialChars:!0,len:8,showRes:!1},t.handleHasUpperCaseLetters=t.handleHasUpperCaseLetters.bind(w(t)),t.handleHasLowerCaseLetters=t.handleHasLowerCaseLetters.bind(w(t)),t.handleHasDigits=t.handleHasDigits.bind(w(t)),t.handleHasSpecialChars=t.handleHasSpecialChars.bind(w(t)),t.handleInputChange=t.handleInputChange.bind(w(t)),t.handleSubmit=t.handleSubmit.bind(w(t)),t}return t=l,(n=[{key:"handleHasUpperCaseLetters",value:function(e){this.setState({hasUpperCaseLetters:e.target.checked})}},{key:"handleHasLowerCaseLetters",value:function(e){this.setState({hasLowerCaseLetters:e.target.checked})}},{key:"handleHasDigits",value:function(e){this.setState({hasDigit:e.target.checked})}},{key:"handleHasSpecialChars",value:function(e){this.setState({hasSpecialChars:e.target.checked})}},{key:"handleInputChange",value:function(e){console.log(Number(e)),this.setState({len:Number(e)})}},{key:"handleSubmit",value:function(){var e=this,t=(0,r.Z)(),n={sessionID:t,requestID:"gen-psw-"+t,userID:"default_user",str:this.state.originalValue,len:this.state.len,hasUpperCaseLetters:this.state.hasUpperCaseLetters,hasLowerCaseLetters:this.state.hasLowerCaseLetters,hasDigits:this.state.hasDigits,hasSpecialChars:this.state.hasSpecialChars};o().post("https://nifty-gasket-338410.wl.r.appspot.com/generate_password",n,{"Content-Type":"application/json"}).then((function(t){return e.setState({result:t.data.str,showRes:!0})})).catch((function(e){400===e.response.status?c.ZP.error(e.response.data.errMsg):c.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,s.jsx)(Z,{style:{textAlign:"center",fontSize:"3vh"},children:"Password Generator"}),(0,s.jsx)(k,{style:{textAlign:"center",fontSize:"large"},children:"Randomly generate password with specific length, and characters."})]}),(0,s.jsx)("div",{style:{marginTop:"2%"},children:(0,s.jsx)(S,{style:{textAlign:"left",fontSize:"medium"},children:"Note: The generated password will not be saved anywhere in StringLand. Please remember to save it by yourself."})}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)("div",{style:{marginTop:"2%"},children:[(0,s.jsxs)(d.Z,{style:{width:"100%"},children:[(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasUpperCaseLetters,children:"Including Uppercase Letters"})}),(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasLowerCaseLetters,children:"Including Lower Letters"})})]}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)(d.Z,{style:{width:"100%"},children:[(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasDigits,children:"Including Digits"})}),(0,s.jsx)(p.Z,{span:8,children:(0,s.jsx)(f.Z,{defaultChecked:!0,onChange:this.handleHasSpecialChars,children:"Including Special Characters "})})]}),(0,s.jsx)(u.Z,{})]}),(0,s.jsxs)("div",{style:{marginTop:"2%"},children:["Password Length: ",(0,s.jsx)(g.Z,{min:7,max:99,defaultValue:8,onChange:this.handleInputChange})]}),(0,s.jsx)("div",{style:{marginTop:"2%"},children:(0,s.jsx)(y.Z,{style:{float:"right"},type:"primary",value:"Submit",onClick:this.handleSubmit,children:"Submit"})}),(0,s.jsx)("div",{style:{marginTop:"6%",display:this.state.showRes?"block":"none"},children:(0,s.jsx)(L,{showCount:!0,value:this.state.result,rows:10,readOnly:!0})})]})}}])&&C(t.prototype,n),a&&C(t,a),l}(a.Component);t.Z=_},90458:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(85893),r=(n(67294),n(27083),n(9008)),a=n.n(r),i=n(97183),o=n(46369);function l(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Password Generator"}),(0,s.jsx)("meta",{name:"description",content:"randomly generate password with specific length and characters."}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/web/favicon.ico"})]}),(0,s.jsx)(i.Z,{className:"pg-site-layout",style:{padding:"2% 10% 0 10%",minHeight:"100vh"},children:(0,s.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,s.jsx)(o.Z,{})})})]})}}},function(e){e.O(0,[4253,9922,9677,433,2087,9774,2888,179],(function(){return t=91275,e(e.s=t);var t}));var t=e.O();_N_E=t}]);