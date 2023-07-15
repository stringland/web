"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9063],{15746:function(t,e,n){var r=n(21584);e.Z=r.Z},27049:function(t,e,n){var r=n(87462),a=n(4942),i=n(67294),s=n(94184),o=n.n(s),c=n(61975),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};e.Z=function(t){return i.createElement(c.C,null,(function(e){var n,s=e.getPrefixCls,c=e.direction,u=t.prefixCls,h=t.type,f=void 0===h?"horizontal":h,p=t.orientation,d=void 0===p?"center":p,m=t.className,x=t.children,y=t.dashed,v=t.plain,b=l(t,["prefixCls","type","orientation","className","children","dashed","plain"]),g=s("divider",u),Z=d.length>0?"-".concat(d):d,j=!!x,w=o()(g,"".concat(g,"-").concat(f),(n={},(0,a.Z)(n,"".concat(g,"-with-text"),j),(0,a.Z)(n,"".concat(g,"-with-text").concat(Z),j),(0,a.Z)(n,"".concat(g,"-dashed"),!!y),(0,a.Z)(n,"".concat(g,"-plain"),!!v),(0,a.Z)(n,"".concat(g,"-rtl"),"rtl"===c),n),m);return i.createElement("div",(0,r.Z)({className:w},b,{role:"separator"}),x&&i.createElement("span",{className:"".concat(g,"-inner-text")},x))}))}},99134:function(t,e,n){var r=(0,n(67294).createContext)({});e.Z=r},21584:function(t,e,n){var r=n(4942),a=n(87462),i=n(71002),s=n(67294),o=n(94184),c=n.n(o),l=n(99134),u=n(61975),h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};var f=["xs","sm","md","lg","xl","xxl"],p=s.forwardRef((function(t,e){var n,o=s.useContext(u.E_),p=o.getPrefixCls,d=o.direction,m=s.useContext(l.Z),x=m.gutter,y=m.wrap,v=t.prefixCls,b=t.span,g=t.order,Z=t.offset,j=t.push,w=t.pull,O=t.className,N=t.children,S=t.flex,C=t.style,T=h(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=p("col",v),V={};f.forEach((function(e){var n,s={},o=t[e];"number"===typeof o?s.span=o:"object"===(0,i.Z)(o)&&(s=o||{}),delete T[e],V=(0,a.Z)((0,a.Z)({},V),(n={},(0,r.Z)(n,"".concat(P,"-").concat(e,"-").concat(s.span),void 0!==s.span),(0,r.Z)(n,"".concat(P,"-").concat(e,"-order-").concat(s.order),s.order||0===s.order),(0,r.Z)(n,"".concat(P,"-").concat(e,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,r.Z)(n,"".concat(P,"-").concat(e,"-push-").concat(s.push),s.push||0===s.push),(0,r.Z)(n,"".concat(P,"-").concat(e,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===d),n))}));var k=c()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(P,"-order-").concat(g),g),(0,r.Z)(n,"".concat(P,"-offset-").concat(Z),Z),(0,r.Z)(n,"".concat(P,"-push-").concat(j),j),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),O,V),E=(0,a.Z)({},C);return x&&(E=(0,a.Z)((0,a.Z)((0,a.Z)({},x[0]>0?{paddingLeft:x[0]/2,paddingRight:x[0]/2}:{}),x[1]>0?{paddingTop:x[1]/2,paddingBottom:x[1]/2}:{}),E)),S&&(E.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(S),"auto"!==S||!1!==y||E.minWidth||(E.minWidth=0)),s.createElement("div",(0,a.Z)({},T,{style:E,className:k,ref:e}),N)}));p.displayName="Col",e.Z=p},86313:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(87462),a=n(4942),i=n(71002),s=n(97685),o=n(67294),c=n(94184),l=n.n(c),u=n(61975),h=n(99134),f=n(93355),p=["xxl","xl","lg","md","sm","xs"],d={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=new Map,x=-1,y={},v={matchHandlers:{},dispatch:function(t){return y=t,m.forEach((function(t){return t(y)})),m.size>=1},subscribe:function(t){return m.size||this.register(),x+=1,m.set(x,t),t(y),x},unsubscribe:function(t){m.delete(t),m.size||this.unregister()},unregister:function(){var t=this;Object.keys(d).forEach((function(e){var n=d[e],r=t.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),m.clear()},register:function(){var t=this;Object.keys(d).forEach((function(e){var n=d[e],i=function(n){var i=n.matches;t.dispatch((0,r.Z)((0,r.Z)({},y),(0,a.Z)({},e,i)))},s=window.matchMedia(n);s.addListener(i),t.matchHandlers[n]={mql:s,listener:i},i(s)}))}},b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},g=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),o.forwardRef((function(t,e){var n,c=t.prefixCls,f=t.justify,d=t.align,m=t.className,x=t.style,y=t.children,g=t.gutter,Z=void 0===g?0:g,j=t.wrap,w=b(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=o.useContext(u.E_),N=O.getPrefixCls,S=O.direction,C=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,s.Z)(C,2),P=T[0],V=T[1],k=o.useRef(Z);o.useEffect((function(){var t=v.subscribe((function(t){var e=k.current||0;(!Array.isArray(e)&&"object"===(0,i.Z)(e)||Array.isArray(e)&&("object"===(0,i.Z)(e[0])||"object"===(0,i.Z)(e[1])))&&V(t)}));return function(){return v.unsubscribe(t)}}),[]);var E=N("row",c),F=function(){var t=[0,0];return(Array.isArray(Z)?Z:[Z,0]).forEach((function(e,n){if("object"===(0,i.Z)(e))for(var r=0;r<p.length;r++){var a=p[r];if(P[a]&&void 0!==e[a]){t[n]=e[a];break}}else t[n]=e||0})),t}(),R=l()(E,(n={},(0,a.Z)(n,"".concat(E,"-no-wrap"),!1===j),(0,a.Z)(n,"".concat(E,"-").concat(f),f),(0,a.Z)(n,"".concat(E,"-").concat(d),d),(0,a.Z)(n,"".concat(E,"-rtl"),"rtl"===S),n),m),_=(0,r.Z)((0,r.Z)((0,r.Z)({},F[0]>0?{marginLeft:F[0]/-2,marginRight:F[0]/-2}:{}),F[1]>0?{marginTop:F[1]/-2,marginBottom:F[1]/2}:{}),x);return o.createElement(h.Z.Provider,{value:{gutter:F,wrap:j}},o.createElement("div",(0,r.Z)({},w,{className:R,style:_,ref:e}),y))})));g.displayName="Row";var Z=g},71230:function(t,e,n){var r=n(86313);e.Z=r.Z},19063:function(t,e,n){var r=n(85893),a=n(25934),i=n(67294),s=(n(27083),n(9669)),o=n.n(s),c=n(99190),l=n(64253),u=n(12461),h=n(71230),f=n(15746),p=n(90433),d=n(27049),m=n(69677);function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return!e||"object"!==Z(e)&&"function"!==typeof e?x(t):e}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Z=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}var w=c.Z.Option,O=l.Z.Title,N=l.Z.Paragraph,S=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(l,t);var e,n,i,s=j(l);function l(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=s.call(this,t)).state={originalValue:"0",result:"0",srcType:0,dstType:0,opType:7,customFormat:!1,useScientificNotation:!1,prec:2,showRes:!1},e.optionList=["Celsius","Fahrenheit","Kelvin","Rankine","Delisle","Newton","R\xe9aumur","R\xf8mer"],e.selectOptions=[],e.opMap=new Map;for(var n=0;n<e.optionList.length;n++)e.selectOptions.push((0,r.jsx)(w,{children:e.optionList[n]},e.optionList[n])),e.opMap.set(e.optionList[n],n);return e.handleChange=e.handleChange.bind(x(e)),e.handleSrcType=e.handleSrcType.bind(x(e)),e.handleDstType=e.handleDstType.bind(x(e)),e.handleSubmit=e.handleSubmit.bind(x(e)),e.getTypeVal=e.getTypeVal.bind(x(e)),e.handleCustomFormat=e.handleCustomFormat.bind(x(e)),e.handleScientificNotation=e.handleScientificNotation.bind(x(e)),e.handlePrec=e.handlePrec.bind(x(e)),e}return e=l,(n=[{key:"handleCustomFormat",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({customFormat:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,e,this.state.useScientificNotation,this.state.prec)}}},{key:"handleScientificNotation",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({useScientificNotation:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,this.state.customFormat,e,this.state.prec)}}},{key:"handlePrec",value:function(t){if(console.log(t),""!==t&&!isNaN(t)){this.setState({prec:t});var e=this.state.originalValue.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,t)}}}},{key:"handleChange",value:function(t){this.setState({originalValue:t.target.value});var e=t.target.value.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}},{key:"handleSrcType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)u.ZP.error("unknown source type");else{this.setState({srcType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,e,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleDstType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)u.ZP.error("unknown destination type");else{this.setState({dstType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,e,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleSubmit",value:function(t,e,n,r,i,s){var c=this,l=(0,a.Z)(),h={sessionID:l,requestID:"cvt-unit-"+l,userID:"default_user",customFormat:r,useScientificNotation:i,prec:s,srcVal:t,srcType:e,dstType:n,opType:this.state.opType};o().post("https://nifty-gasket-338410.wl.r.appspot.com/convert_unit",h,{"Content-Type":"application/json"}).then((function(t){return c.setState({result:t.data.str,showRes:!0})})).catch((function(t){400===t.response.status?u.ZP.error(t.response.data.errMsg):u.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"getTypeVal",value:function(t){return this.opMap.has(t)?this.opMap.get(t):-1}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(O,{style:{textAlign:"center",fontSize:"3vh"},children:"Temperature Conversion Calculator"}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"large"},children:"Temperature Conversion Calculator unit among Celsius, Fahrenheit, Kelvin and etc."}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"large"},children:"Default output format is that if the value is too small or large, format uses scientific notation with 7 precision."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{xs:16,xl:1,xxl:1,children:"Format:"}),(0,r.jsx)(f.Z,{xs:24,xl:24,xxl:16,children:(0,r.jsxs)(c.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleCustomFormat,children:[(0,r.jsx)(w,{value:"0",children:"default"}),(0,r.jsx)(w,{value:"1",children:"custom"})]})})]}),(0,r.jsx)(h.Z,{style:{marginTop:"2%",display:this.state.customFormat?"block":"none"},children:(0,r.jsxs)(f.Z,{xs:12,xl:6,xxl:6,children:["precision:",(0,r.jsx)(p.Z,{defaultValue:2,min:0,max:20,onChange:this.handlePrec}),(0,r.jsxs)(c.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleScientificNotation,children:[(0,r.jsx)(w,{value:"0",children:"no scientific notation"}),(0,r.jsx)(w,{value:"1",children:"scientific notation"})]})]})}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{xs:16,xl:1,xxl:1,children:"From:"}),(0,r.jsx)(f.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(m.Z,{maxLength:305,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)(f.Z,{xs:24,xl:16,xxl:4,children:(0,r.jsx)(c.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Celsius"},style:{width:"40%"},onChange:this.handleSrcType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{xs:16,xl:1,xxl:1,children:"To:"}),(0,r.jsx)(f.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(m.Z,{maxLength:305,value:this.state.result,readOnly:!0})}),(0,r.jsx)(f.Z,{xs:24,xl:16,xxl:4,children:(0,r.jsx)(c.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Celsius"},style:{width:"40%"},onChange:this.handleDstType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]})]})]})}}])&&y(e.prototype,n),i&&y(e,i),l}(i.Component);e.Z=S}}]);