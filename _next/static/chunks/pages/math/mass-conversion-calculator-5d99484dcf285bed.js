(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8312],{15746:function(t,e,n){"use strict";var r=n(21584);e.Z=r.Z},27049:function(t,e,n){"use strict";var r=n(87462),a=n(4942),i=n(67294),s=n(94184),o=n.n(s),c=n(61975),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};e.Z=function(t){return i.createElement(c.C,null,(function(e){var n,s=e.getPrefixCls,c=e.direction,u=t.prefixCls,h=t.type,f=void 0===h?"horizontal":h,d=t.orientation,p=void 0===d?"center":d,m=t.className,x=t.children,y=t.dashed,v=t.plain,g=l(t,["prefixCls","type","orientation","className","children","dashed","plain"]),b=s("divider",u),Z=p.length>0?"-".concat(p):p,j=!!x,w=o()(b,"".concat(b,"-").concat(f),(n={},(0,a.Z)(n,"".concat(b,"-with-text"),j),(0,a.Z)(n,"".concat(b,"-with-text").concat(Z),j),(0,a.Z)(n,"".concat(b,"-dashed"),!!y),(0,a.Z)(n,"".concat(b,"-plain"),!!v),(0,a.Z)(n,"".concat(b,"-rtl"),"rtl"===c),n),m);return i.createElement("div",(0,r.Z)({className:w},g,{role:"separator"}),x&&i.createElement("span",{className:"".concat(b,"-inner-text")},x))}))}},99134:function(t,e,n){"use strict";var r=(0,n(67294).createContext)({});e.Z=r},21584:function(t,e,n){"use strict";var r=n(4942),a=n(87462),i=n(71002),s=n(67294),o=n(94184),c=n.n(o),l=n(99134),u=n(61975),h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};var f=["xs","sm","md","lg","xl","xxl"],d=s.forwardRef((function(t,e){var n,o=s.useContext(u.E_),d=o.getPrefixCls,p=o.direction,m=s.useContext(l.Z),x=m.gutter,y=m.wrap,v=t.prefixCls,g=t.span,b=t.order,Z=t.offset,j=t.push,w=t.pull,O=t.className,N=t.children,S=t.flex,C=t.style,T=h(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",v),E={};f.forEach((function(e){var n,s={},o=t[e];"number"===typeof o?s.span=o:"object"===(0,i.Z)(o)&&(s=o||{}),delete T[e],E=(0,a.Z)((0,a.Z)({},E),(n={},(0,r.Z)(n,"".concat(P,"-").concat(e,"-").concat(s.span),void 0!==s.span),(0,r.Z)(n,"".concat(P,"-").concat(e,"-order-").concat(s.order),s.order||0===s.order),(0,r.Z)(n,"".concat(P,"-").concat(e,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,r.Z)(n,"".concat(P,"-").concat(e,"-push-").concat(s.push),s.push||0===s.push),(0,r.Z)(n,"".concat(P,"-").concat(e,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===p),n))}));var k=c()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(g),void 0!==g),(0,r.Z)(n,"".concat(P,"-order-").concat(b),b),(0,r.Z)(n,"".concat(P,"-offset-").concat(Z),Z),(0,r.Z)(n,"".concat(P,"-push-").concat(j),j),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),O,E),_=(0,a.Z)({},C);return x&&(_=(0,a.Z)((0,a.Z)((0,a.Z)({},x[0]>0?{paddingLeft:x[0]/2,paddingRight:x[0]/2}:{}),x[1]>0?{paddingTop:x[1]/2,paddingBottom:x[1]/2}:{}),_)),S&&(_.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(S),"auto"!==S||!1!==y||_.minWidth||(_.minWidth=0)),s.createElement("div",(0,a.Z)({},T,{style:_,className:k,ref:e}),N)}));d.displayName="Col",e.Z=d},86313:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var r=n(87462),a=n(4942),i=n(71002),s=n(97685),o=n(67294),c=n(94184),l=n.n(c),u=n(61975),h=n(99134),f=n(93355),d=["xxl","xl","lg","md","sm","xs"],p={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=new Map,x=-1,y={},v={matchHandlers:{},dispatch:function(t){return y=t,m.forEach((function(t){return t(y)})),m.size>=1},subscribe:function(t){return m.size||this.register(),x+=1,m.set(x,t),t(y),x},unsubscribe:function(t){m.delete(t),m.size||this.unregister()},unregister:function(){var t=this;Object.keys(p).forEach((function(e){var n=p[e],r=t.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),m.clear()},register:function(){var t=this;Object.keys(p).forEach((function(e){var n=p[e],i=function(n){var i=n.matches;t.dispatch((0,r.Z)((0,r.Z)({},y),(0,a.Z)({},e,i)))},s=window.matchMedia(n);s.addListener(i),t.matchHandlers[n]={mql:s,listener:i},i(s)}))}},g=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},b=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),o.forwardRef((function(t,e){var n,c=t.prefixCls,f=t.justify,p=t.align,m=t.className,x=t.style,y=t.children,b=t.gutter,Z=void 0===b?0:b,j=t.wrap,w=g(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=o.useContext(u.E_),N=O.getPrefixCls,S=O.direction,C=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,s.Z)(C,2),P=T[0],E=T[1],k=o.useRef(Z);o.useEffect((function(){var t=v.subscribe((function(t){var e=k.current||0;(!Array.isArray(e)&&"object"===(0,i.Z)(e)||Array.isArray(e)&&("object"===(0,i.Z)(e[0])||"object"===(0,i.Z)(e[1])))&&E(t)}));return function(){return v.unsubscribe(t)}}),[]);var _=N("row",c),V=function(){var t=[0,0];return(Array.isArray(Z)?Z:[Z,0]).forEach((function(e,n){if("object"===(0,i.Z)(e))for(var r=0;r<d.length;r++){var a=d[r];if(P[a]&&void 0!==e[a]){t[n]=e[a];break}}else t[n]=e||0})),t}(),F=l()(_,(n={},(0,a.Z)(n,"".concat(_,"-no-wrap"),!1===j),(0,a.Z)(n,"".concat(_,"-").concat(f),f),(0,a.Z)(n,"".concat(_,"-").concat(p),p),(0,a.Z)(n,"".concat(_,"-rtl"),"rtl"===S),n),m),L=(0,r.Z)((0,r.Z)((0,r.Z)({},V[0]>0?{marginLeft:V[0]/-2,marginRight:V[0]/-2}:{}),V[1]>0?{marginTop:V[1]/-2,marginBottom:V[1]/2}:{}),x);return o.createElement(h.Z.Provider,{value:{gutter:V,wrap:j}},o.createElement("div",(0,r.Z)({},w,{className:F,style:L,ref:e}),y))})));b.displayName="Row";var Z=b},71230:function(t,e,n){"use strict";var r=n(86313);e.Z=r.Z},47625:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math/mass-conversion-calculator",function(){return n(81841)}])},81841:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var r=n(85893),a=n(67294),i=(n(27083),n(9008)),s=n.n(i),o=n(97183),c=n(25934),l=n(9669),u=n.n(l),h=n(84650),f=n(77362),d=n(12461),p=n(71230),m=n(15746),x=n(90433),y=n(27049),v=n(69677);function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return!e||"object"!==O(e)&&"function"!==typeof e?g(t):e}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Z(t);if(e){var a=Z(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var S=h.Z.Option,C=f.Z.Title,T=f.Z.Paragraph,P=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(s,t);var e,n,a,i=N(s);function s(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).state={originalValue:"0",result:"0",srcType:0,dstType:0,opType:4,customFormat:!1,useScientificNotation:!1,prec:2,showRes:!1},e.optionList=["Kilogram","Gram","Tonne","Slug","Pound","Ounces","Planck","Dalton","Grains","Earth mass","Solar mass"],e.selectOptions=[],e.opMap=new Map;for(var n=0;n<e.optionList.length;n++)e.selectOptions.push((0,r.jsx)(S,{children:e.optionList[n]},e.optionList[n])),e.opMap.set(e.optionList[n],n);return e.handleChange=e.handleChange.bind(g(e)),e.handleSrcType=e.handleSrcType.bind(g(e)),e.handleDstType=e.handleDstType.bind(g(e)),e.handleSubmit=e.handleSubmit.bind(g(e)),e.getTypeVal=e.getTypeVal.bind(g(e)),e.handleCustomFormat=e.handleCustomFormat.bind(g(e)),e.handleScientificNotation=e.handleScientificNotation.bind(g(e)),e.handlePrec=e.handlePrec.bind(g(e)),e}return e=s,n=[{key:"handleCustomFormat",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({customFormat:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,e,this.state.useScientificNotation,this.state.prec)}}},{key:"handleScientificNotation",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({useScientificNotation:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,this.state.customFormat,e,this.state.prec)}}},{key:"handlePrec",value:function(t){if(console.log(t),""!==t&&!isNaN(t)){this.setState({prec:t});var e=this.state.originalValue.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,t)}}}},{key:"handleChange",value:function(t){this.setState({originalValue:t.target.value});var e=t.target.value.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}},{key:"handleSrcType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)d.ZP.error("unknown source type");else{this.setState({srcType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,e,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleDstType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)d.ZP.error("unknown destination type");else{this.setState({dstType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,e,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleSubmit",value:function(t,e,n,r,a,i){var s=this,o=(0,c.Z)(),l={sessionID:o,requestID:"cvt-unit-"+o,userID:"default_user",customFormat:r,useScientificNotation:a,prec:i,srcVal:t,srcType:e,dstType:n,opType:this.state.opType};u().post("https://nifty-gasket-338410.wl.r.appspot.com/convert_unit",l,{"Content-Type":"application/json"}).then((function(t){return s.setState({result:t.data.str,showRes:!0})})).catch((function(t){400===t.response.status?d.ZP.error(t.response.data.errMsg):d.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"getTypeVal",value:function(t){return this.opMap.has(t)?this.opMap.get(t):-1}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(C,{style:{textAlign:"center",fontSize:"3vh"},children:"Mass Conversion Calculator"}),(0,r.jsx)(T,{style:{textAlign:"center",fontSize:"large"},children:"Mass Conversion Calculator unit among kg, pound, ounces and etc."}),(0,r.jsx)(T,{style:{textAlign:"center",fontSize:"large"},children:"Default output format is that if the value is too small or large, format uses scientific notation with 7 precision."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{xs:16,xl:1,xxl:1,children:"Format:"}),(0,r.jsx)(m.Z,{xs:24,xl:24,xxl:16,children:(0,r.jsxs)(h.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleCustomFormat,children:[(0,r.jsx)(S,{value:"0",children:"default"}),(0,r.jsx)(S,{value:"1",children:"custom"})]})})]}),(0,r.jsx)(p.Z,{style:{marginTop:"2%",display:this.state.customFormat?"block":"none"},children:(0,r.jsxs)(m.Z,{xs:12,xl:6,xxl:6,children:["precision:",(0,r.jsx)(x.Z,{defaultValue:2,min:0,max:20,onChange:this.handlePrec}),(0,r.jsxs)(h.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleScientificNotation,children:[(0,r.jsx)(S,{value:"0",children:"no scientific notation"}),(0,r.jsx)(S,{value:"1",children:"scientific notation"})]})]})}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{xs:16,xl:1,xxl:1,children:"From:"}),(0,r.jsx)(m.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(v.Z,{maxLength:305,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)(m.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(h.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Kilogram"},style:{width:"75%"},onChange:this.handleSrcType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{xs:16,xl:1,xxl:1,children:"To:"}),(0,r.jsx)(m.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(v.Z,{maxLength:305,value:this.state.result,readOnly:!0})}),(0,r.jsx)(m.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(h.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Kilogram"},style:{width:"75%"},onChange:this.handleDstType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]})]})]})}}],n&&b(e.prototype,n),a&&b(e,a),s}(a.Component),E=P;function k(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Mass Conversion Calculator"}),(0,r.jsx)("meta",{name:"description",content:"a converter converts mass unit among kg, pound, ounces and etc. allows users to set customised output format by setting number of floating digits and using scientific notation."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/web/favicon.ico"})]}),(0,r.jsx)(o.Z,{className:"pg-site-layout",style:{padding:"2% 10% 0 10%",minHeight:"100vh"},children:(0,r.jsx)("div",{children:(0,r.jsx)(E,{})})})]})}}},function(t){t.O(0,[7362,9922,9677,4650,433,9774,2888,179],(function(){return e=47625,t(t.s=e);var e}));var e=t.O();_N_E=e}]);