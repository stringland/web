(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7321],{24308:function(t,e,n){"use strict";n.d(e,{c4:function(){return a}});var r=n(4942),i=n(87462),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,c=-1,l={},u={matchHandlers:{},dispatch:function(t){return l=t,s.forEach((function(t){return t(l)})),s.size>=1},subscribe:function(t){return s.size||this.register(),c+=1,s.set(c,t),t(l),c},unsubscribe:function(t){s.delete(t),s.size||this.unregister()},unregister:function(){var t=this;Object.keys(o).forEach((function(e){var n=o[e],r=t.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),s.clear()},register:function(){var t=this;Object.keys(o).forEach((function(e){var n=o[e],a=function(n){var a=n.matches;t.dispatch((0,i.Z)((0,i.Z)({},l),(0,r.Z)({},e,a)))},s=window.matchMedia(n);s.addListener(a),t.matchHandlers[n]={mql:s,listener:a},a(s)}))}};e.ZP=u},15746:function(t,e,n){"use strict";var r=n(21584);e.Z=r.Z},27049:function(t,e,n){"use strict";var r=n(87462),i=n(4942),a=n(67294),o=n(94184),s=n.n(o),c=n(61975),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};e.Z=function(t){return a.createElement(c.C,null,(function(e){var n,o=e.getPrefixCls,c=e.direction,u=t.prefixCls,h=t.type,f=void 0===h?"horizontal":h,d=t.orientation,p=void 0===d?"center":d,m=t.className,x=t.children,y=t.dashed,v=t.plain,g=l(t,["prefixCls","type","orientation","className","children","dashed","plain"]),b=o("divider",u),Z=p.length>0?"-".concat(p):p,j=!!x,w=s()(b,"".concat(b,"-").concat(f),(n={},(0,i.Z)(n,"".concat(b,"-with-text"),j),(0,i.Z)(n,"".concat(b,"-with-text").concat(Z),j),(0,i.Z)(n,"".concat(b,"-dashed"),!!y),(0,i.Z)(n,"".concat(b,"-plain"),!!v),(0,i.Z)(n,"".concat(b,"-rtl"),"rtl"===c),n),m);return a.createElement("div",(0,r.Z)({className:w},g,{role:"separator"}),x&&a.createElement("span",{className:"".concat(b,"-inner-text")},x))}))}},99134:function(t,e,n){"use strict";var r=(0,n(67294).createContext)({});e.Z=r},21584:function(t,e,n){"use strict";var r=n(4942),i=n(87462),a=n(71002),o=n(67294),s=n(94184),c=n.n(s),l=n(99134),u=n(61975),h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};var f=["xs","sm","md","lg","xl","xxl"],d=o.forwardRef((function(t,e){var n,s=o.useContext(u.E_),d=s.getPrefixCls,p=s.direction,m=o.useContext(l.Z),x=m.gutter,y=m.wrap,v=t.prefixCls,g=t.span,b=t.order,Z=t.offset,j=t.push,w=t.pull,N=t.className,O=t.children,S=t.flex,C=t.style,T=h(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",v),E={};f.forEach((function(e){var n,o={},s=t[e];"number"===typeof s?o.span=s:"object"===(0,a.Z)(s)&&(o=s||{}),delete T[e],E=(0,i.Z)((0,i.Z)({},E),(n={},(0,r.Z)(n,"".concat(P,"-").concat(e,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(P,"-").concat(e,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(P,"-").concat(e,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(P,"-").concat(e,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(P,"-").concat(e,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===p),n))}));var k=c()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(g),void 0!==g),(0,r.Z)(n,"".concat(P,"-order-").concat(b),b),(0,r.Z)(n,"".concat(P,"-offset-").concat(Z),Z),(0,r.Z)(n,"".concat(P,"-push-").concat(j),j),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),N,E),V=(0,i.Z)({},C);return x&&(V=(0,i.Z)((0,i.Z)((0,i.Z)({},x[0]>0?{paddingLeft:x[0]/2,paddingRight:x[0]/2}:{}),x[1]>0?{paddingTop:x[1]/2,paddingBottom:x[1]/2}:{}),V)),S&&(V.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(S),"auto"!==S||!1!==y||V.minWidth||(V.minWidth=0)),o.createElement("div",(0,i.Z)({},T,{style:V,className:k,ref:e}),O)}));d.displayName="Col",e.Z=d},92820:function(t,e,n){"use strict";var r=n(87462),i=n(4942),a=n(71002),o=n(97685),s=n(67294),c=n(94184),l=n.n(c),u=n(61975),h=n(99134),f=n(93355),d=n(24308),p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},m=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),s.forwardRef((function(t,e){var n,c=t.prefixCls,f=t.justify,m=t.align,x=t.className,y=t.style,v=t.children,g=t.gutter,b=void 0===g?0:g,Z=t.wrap,j=p(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=s.useContext(u.E_),N=w.getPrefixCls,O=w.direction,S=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=(0,o.Z)(S,2),T=C[0],P=C[1],E=s.useRef(b);s.useEffect((function(){var t=d.ZP.subscribe((function(t){var e=E.current||0;(!Array.isArray(e)&&"object"===(0,a.Z)(e)||Array.isArray(e)&&("object"===(0,a.Z)(e[0])||"object"===(0,a.Z)(e[1])))&&P(t)}));return function(){return d.ZP.unsubscribe(t)}}),[]);var k=N("row",c),V=function(){var t=[0,0];return(Array.isArray(b)?b:[b,0]).forEach((function(e,n){if("object"===(0,a.Z)(e))for(var r=0;r<d.c4.length;r++){var i=d.c4[r];if(T[i]&&void 0!==e[i]){t[n]=e[i];break}}else t[n]=e||0})),t}(),_=l()(k,(n={},(0,i.Z)(n,"".concat(k,"-no-wrap"),!1===Z),(0,i.Z)(n,"".concat(k,"-").concat(f),f),(0,i.Z)(n,"".concat(k,"-").concat(m),m),(0,i.Z)(n,"".concat(k,"-rtl"),"rtl"===O),n),x),L=(0,r.Z)((0,r.Z)((0,r.Z)({},V[0]>0?{marginLeft:V[0]/-2,marginRight:V[0]/-2}:{}),V[1]>0?{marginTop:V[1]/-2,marginBottom:V[1]/2}:{}),y);return s.createElement(h.Z.Provider,{value:{gutter:V,wrap:Z}},s.createElement("div",(0,r.Z)({},j,{className:_,style:L,ref:e}),v))})));m.displayName="Row",e.Z=m},71230:function(t,e,n){"use strict";var r=n(92820);e.Z=r.Z},82831:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math/length-conversion-calculator",function(){return n(44814)}])},44814:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var r=n(85893),i=n(67294),a=(n(27083),n(9008)),o=n.n(a),s=n(97183),c=n(25934),l=n(9669),u=n.n(l),h=n(84650),f=n(77362),d=n(12461),p=n(71230),m=n(15746),x=n(90433),y=n(27049),v=n(69677);function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return!e||"object"!==N(e)&&"function"!==typeof e?g(t):e}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Z(t);if(e){var i=Z(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return j(this,n)}}var S=h.Z.Option,C=f.Z.Title,T=f.Z.Paragraph,P=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(o,t);var e,n,i,a=O(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this,t)).state={originalValue:"0",result:"0",srcType:0,dstType:0,opType:3,customFormat:!1,useScientificNotation:!1,prec:2,showRes:!1},e.optionList=["Meter","Decameter","Hectometer","Kilometer","Megameter","Gigameter","Terameter","Petameter","Exameter","Zettameter","Yottameter","Decimeter","Centimeter","Millimeter","Micrometer","Nanometer","Picometer","Femtometer","Attometer","Zeptometer","Yoctometer","Thou","Inch","Foot","Yard","Mile","League","Fathom","NauticalMile","Chain","Rod","EarthRadius","LunarDistance","AstronomicalUnit","LightYear","Parsec","HubbleLength","Furlong","Li","Verst","Pace"],e.selectOptions=[],e.opMap=new Map;for(var n=0;n<e.optionList.length;n++)e.selectOptions.push((0,r.jsx)(S,{children:e.optionList[n]},e.optionList[n])),e.opMap.set(e.optionList[n],n);return e.handleChange=e.handleChange.bind(g(e)),e.handleSrcType=e.handleSrcType.bind(g(e)),e.handleDstType=e.handleDstType.bind(g(e)),e.handleSubmit=e.handleSubmit.bind(g(e)),e.getTypeVal=e.getTypeVal.bind(g(e)),e.handleCustomFormat=e.handleCustomFormat.bind(g(e)),e.handleScientificNotation=e.handleScientificNotation.bind(g(e)),e.handlePrec=e.handlePrec.bind(g(e)),e}return e=o,n=[{key:"handleCustomFormat",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({customFormat:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,e,this.state.useScientificNotation,this.state.prec)}}},{key:"handleScientificNotation",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({useScientificNotation:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,this.state.customFormat,e,this.state.prec)}}},{key:"handlePrec",value:function(t){if(console.log(t),""!==t&&!isNaN(t)){this.setState({prec:t});var e=this.state.originalValue.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,t)}}}},{key:"handleChange",value:function(t){this.setState({originalValue:t.target.value});var e=t.target.value.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}},{key:"handleSrcType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)d.ZP.error("unknown source type");else{this.setState({srcType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,e,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleDstType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)d.ZP.error("unknown destination type");else{this.setState({dstType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,e,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleSubmit",value:function(t,e,n,r,i,a){var o=this,s=(0,c.Z)(),l={sessionID:s,requestID:"cvt-unit-"+s,userID:"default_user",customFormat:r,useScientificNotation:i,prec:a,srcVal:t,srcType:e,dstType:n,opType:this.state.opType};u().post("https://nifty-gasket-338410.wl.r.appspot.com/convert_unit",l,{"Content-Type":"application/json"}).then((function(t){return o.setState({result:t.data.str,showRes:!0})})).catch((function(t){400===t.response.status?d.ZP.error(t.response.data.errMsg):d.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"getTypeVal",value:function(t){return this.opMap.has(t)?this.opMap.get(t):-1}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(C,{style:{textAlign:"center",fontSize:"3vh"},children:"Length Conversion Calculator"}),(0,r.jsx)(T,{style:{textAlign:"center",fontSize:"large"},children:"Length Conversion Calculator unit among km, mile, inch and etc."}),(0,r.jsx)(T,{style:{textAlign:"center",fontSize:"large"},children:"Default output format is that if the value is too small or large, format uses scientific notation with 7 precision."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{xs:16,xl:1,xxl:1,children:"Format:"}),(0,r.jsx)(m.Z,{xs:24,xl:24,xxl:16,children:(0,r.jsxs)(h.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleCustomFormat,children:[(0,r.jsx)(S,{value:"0",children:"default"}),(0,r.jsx)(S,{value:"1",children:"custom"})]})})]}),(0,r.jsx)(p.Z,{style:{marginTop:"2%",display:this.state.customFormat?"block":"none"},children:(0,r.jsxs)(m.Z,{xs:12,xl:6,xxl:6,children:["precision:",(0,r.jsx)(x.Z,{defaultValue:2,min:0,max:20,onChange:this.handlePrec}),(0,r.jsxs)(h.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleScientificNotation,children:[(0,r.jsx)(S,{value:"0",children:"no scientific notation"}),(0,r.jsx)(S,{value:"1",children:"scientific notation"})]})]})}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{xs:16,xl:1,xxl:1,children:"From:"}),(0,r.jsx)(m.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(v.Z,{maxLength:305,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)(m.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(h.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Meter"},style:{width:"55%"},onChange:this.handleSrcType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{xs:16,xl:1,xxl:1,children:"To:"}),(0,r.jsx)(m.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(v.Z,{maxLength:305,value:this.state.result,readOnly:!0})}),(0,r.jsx)(m.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(h.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Meter"},style:{width:"55%"},onChange:this.handleDstType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]})]})]})}}],n&&b(e.prototype,n),i&&b(e,i),o}(i.Component),E=P;function k(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Length Conversion Calculator"}),(0,r.jsx)("meta",{name:"description",content:"a converter converts length unit among km, mile, inch and etc. allows users to set customised output format by setting number of floating digits and using scientific notation."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/web/favicon.ico"})]}),(0,r.jsx)(s.Z,{className:"pg-site-layout",style:{padding:"2% 10% 0 10%",minHeight:"100vh"},children:(0,r.jsx)("div",{children:(0,r.jsx)(E,{})})})]})}}},function(t){t.O(0,[7362,9922,9677,4650,433,9774,2888,179],(function(){return e=82831,t(t.s=e);var e}));var e=t.O();_N_E=e}]);