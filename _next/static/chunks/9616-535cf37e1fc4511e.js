"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9616],{15746:function(t,e,n){var r=n(21584);e.Z=r.Z},27049:function(t,e,n){var r=n(87462),i=n(4942),a=n(67294),o=n(94184),s=n.n(o),c=n(61975),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};e.Z=function(t){return a.createElement(c.C,null,(function(e){var n,o=e.getPrefixCls,c=e.direction,u=t.prefixCls,h=t.type,f=void 0===h?"horizontal":h,p=t.orientation,d=void 0===p?"center":p,m=t.className,y=t.children,x=t.dashed,v=t.plain,b=l(t,["prefixCls","type","orientation","className","children","dashed","plain"]),g=o("divider",u),Z=d.length>0?"-".concat(d):d,j=!!y,w=s()(g,"".concat(g,"-").concat(f),(n={},(0,i.Z)(n,"".concat(g,"-with-text"),j),(0,i.Z)(n,"".concat(g,"-with-text").concat(Z),j),(0,i.Z)(n,"".concat(g,"-dashed"),!!x),(0,i.Z)(n,"".concat(g,"-plain"),!!v),(0,i.Z)(n,"".concat(g,"-rtl"),"rtl"===c),n),m);return a.createElement("div",(0,r.Z)({className:w},b,{role:"separator"}),y&&a.createElement("span",{className:"".concat(g,"-inner-text")},y))}))}},99134:function(t,e,n){var r=(0,n(67294).createContext)({});e.Z=r},21584:function(t,e,n){var r=n(4942),i=n(87462),a=n(71002),o=n(67294),s=n(94184),c=n.n(s),l=n(99134),u=n(61975),h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};var f=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef((function(t,e){var n,s=o.useContext(u.E_),p=s.getPrefixCls,d=s.direction,m=o.useContext(l.Z),y=m.gutter,x=m.wrap,v=t.prefixCls,b=t.span,g=t.order,Z=t.offset,j=t.push,w=t.pull,C=t.className,O=t.children,N=t.flex,S=t.style,T=h(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=p("col",v),V={};f.forEach((function(e){var n,o={},s=t[e];"number"===typeof s?o.span=s:"object"===(0,a.Z)(s)&&(o=s||{}),delete T[e],V=(0,i.Z)((0,i.Z)({},V),(n={},(0,r.Z)(n,"".concat(P,"-").concat(e,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(P,"-").concat(e,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(P,"-").concat(e,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(P,"-").concat(e,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(P,"-").concat(e,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===d),n))}));var E=c()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(P,"-order-").concat(g),g),(0,r.Z)(n,"".concat(P,"-offset-").concat(Z),Z),(0,r.Z)(n,"".concat(P,"-push-").concat(j),j),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),C,V),k=(0,i.Z)({},S);return y&&(k=(0,i.Z)((0,i.Z)((0,i.Z)({},y[0]>0?{paddingLeft:y[0]/2,paddingRight:y[0]/2}:{}),y[1]>0?{paddingTop:y[1]/2,paddingBottom:y[1]/2}:{}),k)),N&&(k.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(N),"auto"!==N||!1!==x||k.minWidth||(k.minWidth=0)),o.createElement("div",(0,i.Z)({},T,{style:k,className:E,ref:e}),O)}));p.displayName="Col",e.Z=p},86313:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(87462),i=n(4942),a=n(71002),o=n(97685),s=n(67294),c=n(94184),l=n.n(c),u=n(61975),h=n(99134),f=n(93355),p=["xxl","xl","lg","md","sm","xs"],d={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=new Map,y=-1,x={},v={matchHandlers:{},dispatch:function(t){return x=t,m.forEach((function(t){return t(x)})),m.size>=1},subscribe:function(t){return m.size||this.register(),y+=1,m.set(y,t),t(x),y},unsubscribe:function(t){m.delete(t),m.size||this.unregister()},unregister:function(){var t=this;Object.keys(d).forEach((function(e){var n=d[e],r=t.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),m.clear()},register:function(){var t=this;Object.keys(d).forEach((function(e){var n=d[e],a=function(n){var a=n.matches;t.dispatch((0,r.Z)((0,r.Z)({},x),(0,i.Z)({},e,a)))},o=window.matchMedia(n);o.addListener(a),t.matchHandlers[n]={mql:o,listener:a},a(o)}))}},b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},g=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),s.forwardRef((function(t,e){var n,c=t.prefixCls,f=t.justify,d=t.align,m=t.className,y=t.style,x=t.children,g=t.gutter,Z=void 0===g?0:g,j=t.wrap,w=b(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.useContext(u.E_),O=C.getPrefixCls,N=C.direction,S=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,o.Z)(S,2),P=T[0],V=T[1],E=s.useRef(Z);s.useEffect((function(){var t=v.subscribe((function(t){var e=E.current||0;(!Array.isArray(e)&&"object"===(0,a.Z)(e)||Array.isArray(e)&&("object"===(0,a.Z)(e[0])||"object"===(0,a.Z)(e[1])))&&V(t)}));return function(){return v.unsubscribe(t)}}),[]);var k=O("row",c),L=function(){var t=[0,0];return(Array.isArray(Z)?Z:[Z,0]).forEach((function(e,n){if("object"===(0,a.Z)(e))for(var r=0;r<p.length;r++){var i=p[r];if(P[i]&&void 0!==e[i]){t[n]=e[i];break}}else t[n]=e||0})),t}(),_=l()(k,(n={},(0,i.Z)(n,"".concat(k,"-no-wrap"),!1===j),(0,i.Z)(n,"".concat(k,"-").concat(f),f),(0,i.Z)(n,"".concat(k,"-").concat(d),d),(0,i.Z)(n,"".concat(k,"-rtl"),"rtl"===N),n),m),F=(0,r.Z)((0,r.Z)((0,r.Z)({},L[0]>0?{marginLeft:L[0]/-2,marginRight:L[0]/-2}:{}),L[1]>0?{marginTop:L[1]/-2,marginBottom:L[1]/2}:{}),y);return s.createElement(h.Z.Provider,{value:{gutter:L,wrap:j}},s.createElement("div",(0,r.Z)({},w,{className:_,style:F,ref:e}),x))})));g.displayName="Row";var Z=g},71230:function(t,e,n){var r=n(86313);e.Z=r.Z},9616:function(t,e,n){var r=n(85893),i=n(25934),a=n(67294),o=(n(27083),n(9669)),s=n.n(o),c=n(99190),l=n(64253),u=n(12461),h=n(71230),f=n(15746),p=n(90433),d=n(27049),m=n(69677);function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return!e||"object"!==Z(e)&&"function"!==typeof e?y(t):e}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Z=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return b(this,n)}}var w=c.Z.Option,C=l.Z.Title,O=l.Z.Paragraph,N=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(l,t);var e,n,a,o=j(l);function l(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this,t)).state={originalValue:"0",result:"0",srcType:0,dstType:0,opType:5,customFormat:!1,useScientificNotation:!1,prec:2,showRes:!1},e.optionList=["Cubic meter","Cubic decimeter","Cubic centimeter","Cubic inch","Cubic foot","Cubic yard","Litre","Gallon","Pint","Barrel"],e.selectOptions=[],e.opMap=new Map;for(var n=0;n<e.optionList.length;n++)e.selectOptions.push((0,r.jsx)(w,{children:e.optionList[n]},e.optionList[n])),e.opMap.set(e.optionList[n],n);return e.handleChange=e.handleChange.bind(y(e)),e.handleSrcType=e.handleSrcType.bind(y(e)),e.handleDstType=e.handleDstType.bind(y(e)),e.handleSubmit=e.handleSubmit.bind(y(e)),e.getTypeVal=e.getTypeVal.bind(y(e)),e.handleCustomFormat=e.handleCustomFormat.bind(y(e)),e.handleScientificNotation=e.handleScientificNotation.bind(y(e)),e.handlePrec=e.handlePrec.bind(y(e)),e}return e=l,(n=[{key:"handleCustomFormat",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({customFormat:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,e,this.state.useScientificNotation,this.state.prec)}}},{key:"handleScientificNotation",value:function(t){var e=!1;1===Number(t.value)&&(e=!0),this.setState({useScientificNotation:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,this.state.customFormat,e,this.state.prec)}}},{key:"handlePrec",value:function(t){if(console.log(t),""!==t&&!isNaN(t)){this.setState({prec:t});var e=this.state.originalValue.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,t)}}}},{key:"handleChange",value:function(t){this.setState({originalValue:t.target.value});var e=t.target.value.trim();if(""!==e){var n=Number(e);isNaN(n)||this.handleSubmit(e,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}},{key:"handleSrcType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)u.ZP.error("unknown source type");else{this.setState({srcType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,e,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleDstType",value:function(t){var e=this.getTypeVal(t.value);if(e<0)u.ZP.error("unknown destination type");else{this.setState({dstType:e});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,e,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleSubmit",value:function(t,e,n,r,a,o){var c=this,l=(0,i.Z)(),h={sessionID:l,requestID:"cvt-unit-"+l,userID:"default_user",customFormat:r,useScientificNotation:a,prec:o,srcVal:t,srcType:e,dstType:n,opType:this.state.opType};s().post("https://nifty-gasket-338410.wl.r.appspot.com/convert_unit",h,{"Content-Type":"application/json"}).then((function(t){return c.setState({result:t.data.str,showRes:!0})})).catch((function(t){400===t.response.status?u.ZP.error(t.response.data.errMsg):u.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"getTypeVal",value:function(t){return this.opMap.has(t)?this.opMap.get(t):-1}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(C,{style:{textAlign:"center",fontSize:"3vh"},children:"Volume Conversion Calculator"}),(0,r.jsx)(O,{style:{textAlign:"center",fontSize:"large"},children:"Volume Conversion Calculator unit among cubic meter, litre, gallon and etc."}),(0,r.jsx)(O,{style:{textAlign:"center",fontSize:"large"},children:"Default output format is that if the value is too small or large, format uses scientific notation with 7 precision."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{xs:16,xl:1,xxl:1,children:"Format:"}),(0,r.jsx)(f.Z,{xs:24,xl:24,xxl:16,children:(0,r.jsxs)(c.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleCustomFormat,children:[(0,r.jsx)(w,{value:"0",children:"default"}),(0,r.jsx)(w,{value:"1",children:"custom"})]})})]}),(0,r.jsx)(h.Z,{style:{marginTop:"2%",display:this.state.customFormat?"block":"none"},children:(0,r.jsxs)(f.Z,{xs:12,xl:6,xxl:6,children:["precision:",(0,r.jsx)(p.Z,{defaultValue:2,min:0,max:20,onChange:this.handlePrec}),(0,r.jsxs)(c.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleScientificNotation,children:[(0,r.jsx)(w,{value:"0",children:"no scientific notation"}),(0,r.jsx)(w,{value:"1",children:"scientific notation"})]})]})}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{xs:16,xl:1,xxl:1,children:"From:"}),(0,r.jsx)(f.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(m.Z,{maxLength:305,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)(f.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(c.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Cubic meter"},style:{width:"75%"},onChange:this.handleSrcType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{xs:16,xl:1,xxl:1,children:"To:"}),(0,r.jsx)(f.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(m.Z,{maxLength:305,value:this.state.result,readOnly:!0})}),(0,r.jsx)(f.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(c.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"Cubic meter"},style:{width:"75%"},onChange:this.handleDstType,filterOption:function(t,e){return e.children.toLowerCase().indexOf(t.toLowerCase())>=0},children:this.selectOptions})})]})]})]})}}])&&x(e.prototype,n),a&&x(e,a),l}(a.Component);e.Z=N}}]);