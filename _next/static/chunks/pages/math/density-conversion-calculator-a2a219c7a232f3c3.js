(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6427],{24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return a}});var r=n(4942),i=n(87462),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,c=-1,l={},u={matchHandlers:{},dispatch:function(e){return l=e,s.forEach((function(e){return e(l)})),s.size>=1},subscribe:function(e){return s.size||this.register(),c+=1,s.set(c,e),e(l),c},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),s.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],a=function(n){var a=n.matches;e.dispatch((0,i.Z)((0,i.Z)({},l),(0,r.Z)({},t,a)))},s=window.matchMedia(n);s.addListener(a),e.matchHandlers[n]={mql:s,listener:a},a(s)}))}};t.ZP=u},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(4942),i=n(87462),a=n(71002),o=n(67294),s=n(94184),c=n.n(s),l=n(99134),u=n(61975),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};var d=["xs","sm","md","lg","xl","xxl"],f=o.forwardRef((function(e,t){var n,s=o.useContext(u.E_),f=s.getPrefixCls,p=s.direction,m=o.useContext(l.Z),x=m.gutter,g=m.wrap,v=e.prefixCls,y=e.span,b=e.order,Z=e.offset,j=e.push,w=e.pull,C=e.className,N=e.children,S=e.flex,T=e.style,O=h(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=f("col",v),P={};d.forEach((function(t){var n,o={},s=e[t];"number"===typeof s?o.span=s:"object"===(0,a.Z)(s)&&(o=s||{}),delete O[t],P=(0,i.Z)((0,i.Z)({},P),(n={},(0,r.Z)(n,"".concat(k,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(k,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(k,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(k,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(k,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(k,"-rtl"),"rtl"===p),n))}));var V=c()(k,(n={},(0,r.Z)(n,"".concat(k,"-").concat(y),void 0!==y),(0,r.Z)(n,"".concat(k,"-order-").concat(b),b),(0,r.Z)(n,"".concat(k,"-offset-").concat(Z),Z),(0,r.Z)(n,"".concat(k,"-push-").concat(j),j),(0,r.Z)(n,"".concat(k,"-pull-").concat(w),w),n),C,P),_=(0,i.Z)({},T);return x&&(_=(0,i.Z)((0,i.Z)((0,i.Z)({},x[0]>0?{paddingLeft:x[0]/2,paddingRight:x[0]/2}:{}),x[1]>0?{paddingTop:x[1]/2,paddingBottom:x[1]/2}:{}),_)),S&&(_.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),"auto"!==S||!1!==g||_.minWidth||(_.minWidth=0)),o.createElement("div",(0,i.Z)({},O,{style:_,className:V,ref:t}),N)}));f.displayName="Col",t.Z=f},92820:function(e,t,n){"use strict";var r=n(87462),i=n(4942),a=n(71002),o=n(97685),s=n(67294),c=n(94184),l=n.n(c),u=n(61975),h=n(99134),d=n(93355),f=n(24308),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},m=((0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var n,c=e.prefixCls,d=e.justify,m=e.align,x=e.className,g=e.style,v=e.children,y=e.gutter,b=void 0===y?0:y,Z=e.wrap,j=p(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=s.useContext(u.E_),C=w.getPrefixCls,N=w.direction,S=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,o.Z)(S,2),O=T[0],k=T[1],P=s.useRef(b);s.useEffect((function(){var e=f.ZP.subscribe((function(e){var t=P.current||0;(!Array.isArray(t)&&"object"===(0,a.Z)(t)||Array.isArray(t)&&("object"===(0,a.Z)(t[0])||"object"===(0,a.Z)(t[1])))&&k(e)}));return function(){return f.ZP.unsubscribe(e)}}),[]);var V=C("row",c),_=function(){var e=[0,0];return(Array.isArray(b)?b:[b,0]).forEach((function(t,n){if("object"===(0,a.Z)(t))for(var r=0;r<f.c4.length;r++){var i=f.c4[r];if(O[i]&&void 0!==t[i]){e[n]=t[i];break}}else e[n]=t||0})),e}(),E=l()(V,(n={},(0,i.Z)(n,"".concat(V,"-no-wrap"),!1===Z),(0,i.Z)(n,"".concat(V,"-").concat(d),d),(0,i.Z)(n,"".concat(V,"-").concat(m),m),(0,i.Z)(n,"".concat(V,"-rtl"),"rtl"===N),n),x),I=(0,r.Z)((0,r.Z)((0,r.Z)({},_[0]>0?{marginLeft:_[0]/-2,marginRight:_[0]/-2}:{}),_[1]>0?{marginTop:_[1]/-2,marginBottom:_[1]/2}:{}),g);return s.createElement(h.Z.Provider,{value:{gutter:_,wrap:Z}},s.createElement("div",(0,r.Z)({},j,{className:E,style:I,ref:t}),v))})));m.displayName="Row",t.Z=m},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},85329:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/math/density-conversion-calculator",function(){return n(70663)}])},70663:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(85893),i=n(67294),a=(n(27083),n(41664)),o=n.n(a),s=n(9008),c=n.n(s),l=n(97183),u=n(62799),h=n(37724),d=n(19944),f=n(84477),p=n(25934),m=n(9669),x=n.n(m),g=n(84650),v=n(77362),y=n(12461),b=n(71230),Z=n(15746),j=n(90433),w=n(27049),C=n(69677);function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?N(e):t}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var i=T(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return O(this,n)}}var _=g.Z.Option,E=v.Z.Title,I=v.Z.Paragraph,F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(o,e);var t,n,i,a=V(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).state={originalValue:"0",result:"0",srcType:0,dstType:0,opType:12,customFormat:!1,useScientificNotation:!1,prec:2,showRes:!1},t.optionList=["kilogram per cubic metre (kg/m3)","kilogram per litre (kg/l)","gram per millilitre (g/mL)","ounce per cubic foot\t(oz/ft3)","ounce per cubic inch (oz/in3)","ounce per gallon (oz/gal)","ounce per gallon (US fluid) (oz/gal)","pound per cubic foot (lb/ft3)","pound per cubic foot (lb/in3)","pound per cubic gallon (lb/gal)","pound per cubic gallon (US fluid) (lb/gal)","slug per cubic foot (slug/ft3)"],t.selectOptions=[],t.opMap=new Map;for(var n=0;n<t.optionList.length;n++)t.selectOptions.push((0,r.jsx)(_,{children:t.optionList[n]},t.optionList[n])),t.opMap.set(t.optionList[n],n);return t.handleChange=t.handleChange.bind(N(t)),t.handleSrcType=t.handleSrcType.bind(N(t)),t.handleDstType=t.handleDstType.bind(N(t)),t.handleSubmit=t.handleSubmit.bind(N(t)),t.getTypeVal=t.getTypeVal.bind(N(t)),t.handleCustomFormat=t.handleCustomFormat.bind(N(t)),t.handleScientificNotation=t.handleScientificNotation.bind(N(t)),t.handlePrec=t.handlePrec.bind(N(t)),t}return t=o,n=[{key:"handleCustomFormat",value:function(e){var t=!1;1===Number(e.value)&&(t=!0),this.setState({customFormat:t});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,t,this.state.useScientificNotation,this.state.prec)}}},{key:"handleScientificNotation",value:function(e){var t=!1;1===Number(e.value)&&(t=!0),this.setState({useScientificNotation:t});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,this.state.dstType,this.state.customFormat,t,this.state.prec)}}},{key:"handlePrec",value:function(e){if(console.log(e),""!==e&&!isNaN(e)){this.setState({prec:e});var t=this.state.originalValue.trim();if(""!==t){var n=Number(t);isNaN(n)||this.handleSubmit(t,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,e)}}}},{key:"handleChange",value:function(e){this.setState({originalValue:e.target.value});var t=e.target.value.trim();if(""!==t){var n=Number(t);isNaN(n)||this.handleSubmit(t,this.state.srcType,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}},{key:"handleSrcType",value:function(e){var t=this.getTypeVal(e.value);if(t<0)y.ZP.error("unknown source type");else{this.setState({srcType:t});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,t,this.state.dstType,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleDstType",value:function(e){var t=this.getTypeVal(e.value);if(t<0)y.ZP.error("unknown destination type");else{this.setState({dstType:t});var n=this.state.originalValue.trim();if(""!==n){var r=Number(n);isNaN(r)||this.handleSubmit(n,this.state.srcType,t,this.state.customFormat,this.state.useScientificNotation,this.state.prec)}}}},{key:"handleSubmit",value:function(e,t,n,r,i,a){var o=this,s=(0,p.Z)(),c={sessionID:s,requestID:"cvt-unit-"+s,userID:"default_user",customFormat:r,useScientificNotation:i,prec:a,srcVal:e,srcType:t,dstType:n,opType:this.state.opType};x().post("https://nifty-gasket-338410.wl.r.appspot.com/convert_unit",c,{"Content-Type":"application/json"}).then((function(e){return o.setState({result:e.data.str,showRes:!0})})).catch((function(e){400===e.response.status?y.ZP.error(e.response.data.errMsg):y.ZP.error("sth goes wrong. please give one more try after a while.")}))}},{key:"getTypeVal",value:function(e){return this.opMap.has(e)?this.opMap.get(e):-1}},{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{border:"1px solid rgb(235, 237, 240)"},children:[(0,r.jsx)(E,{style:{textAlign:"center",fontSize:"3vh"},children:"Density Conversion Calculator"}),(0,r.jsx)(I,{style:{textAlign:"center",fontSize:"large"},children:"Density Conversion Calculator unit among kg/m3, oz/gal, lb/gal and etc."}),(0,r.jsx)(I,{style:{textAlign:"center",fontSize:"large"},children:"Default output format is that if the value is too small or large, format uses scientific notation with 7 precision."})]}),(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(Z.Z,{xs:16,xl:1,xxl:1,children:"Format:"}),(0,r.jsx)(Z.Z,{xs:24,xl:24,xxl:16,children:(0,r.jsxs)(g.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleCustomFormat,children:[(0,r.jsx)(_,{value:"0",children:"default"}),(0,r.jsx)(_,{value:"1",children:"custom"})]})})]}),(0,r.jsx)(b.Z,{style:{marginTop:"2%",display:this.state.customFormat?"block":"none"},children:(0,r.jsxs)(Z.Z,{xs:12,xl:6,xxl:6,children:["precision:",(0,r.jsx)(j.Z,{defaultValue:2,min:0,max:20,onChange:this.handlePrec}),(0,r.jsxs)(g.Z,{labelInValue:!0,defaultValue:{value:"0"},onChange:this.handleScientificNotation,children:[(0,r.jsx)(_,{value:"0",children:"no scientific notation"}),(0,r.jsx)(_,{value:"1",children:"scientific notation"})]})]})}),(0,r.jsx)(w.Z,{}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(Z.Z,{xs:16,xl:1,xxl:1,children:"From:"}),(0,r.jsx)(Z.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(C.Z,{maxLength:305,value:this.state.originalValue,onChange:this.handleChange})}),(0,r.jsx)(Z.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(g.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"kilogram per cubic metre (kg/m3)"},style:{width:"75%"},onChange:this.handleSrcType,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:this.selectOptions})})]}),(0,r.jsx)(w.Z,{}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(Z.Z,{xs:16,xl:1,xxl:1,children:"To:"}),(0,r.jsx)(Z.Z,{xs:24,xl:10,xxl:10,children:(0,r.jsx)(C.Z,{maxLength:305,value:this.state.result,readOnly:!0})}),(0,r.jsx)(Z.Z,{xs:24,xl:16,xxl:6,children:(0,r.jsx)(g.Z,{showSearch:!0,labelInValue:!0,defaultValue:{value:"kilogram per cubic metre (kg/m3)"},style:{width:"75%"},onChange:this.handleDstType,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:this.selectOptions})})]})]})]})}}],n&&S(t.prototype,n),i&&S(t,i),o}(i.Component),L=F,R=l.Z.Header,z=l.Z.Sider;function D(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"Density Conversion Calculator"}),(0,r.jsx)("meta",{name:"description",content:"a converter converts density unit among kg/m3, oz/gal, lb/gal and etc. allows users to set customised output format by setting number of floating digits and using scientific notation."})]}),(0,r.jsxs)(l.Z,{className:"pg-site-layout-background",style:{padding:"2%",minHeight:"100vh"},children:[(0,r.jsx)(z,{className:"pg-site-layout-background",style:{minWidth:"10vh",border:"1px solid rgb(235, 237, 240)"},trigger:null,collapsible:!0,collapsed:t,children:(0,r.jsxs)(u.Z,{mode:"inline",defaultSelectedKeys:["111"],style:{height:"100%"},children:[(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/number-base-conversion-calculator",children:"Number Base Conversion Calculator"})},"100"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/byte-conversion-calculator",children:"Byte Conversion Calculator"})},"101"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/temperature-conversion-calculator",children:"Temperature Conversion Calculator"})},"102"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/speed-conversion-calculator",children:"Speed Conversion Calculator"})},"103"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/frequency-conversion-calculator",children:"Frequency Conversion Calculator"})},"104"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/length-conversion-calculator",children:"Length Conversion Calculator"})},"105"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/mass-conversion-calculator",children:"Mass Conversion Calculator"})},"106"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/area-conversion-calculator",children:"Area Conversion Calculator"})},"107"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/volume-conversion-calculator",children:"Volume Conversion Calculator"})},"108"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/angle-conversion-calculator",children:"Angle Conversion Calculator"})},"109"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/force-conversion-calculator",children:"Force Conversion Calculator"})},"110"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/density-conversion-calculator",children:"Density Conversion Calculator"})},"111"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/energy-conversion-calculator",children:"Energy Conversion Calculator"})},"112"),(0,r.jsx)(u.Z.Item,{icon:(0,r.jsx)(h.Z,{}),children:(0,r.jsx)(o(),{href:"/web/math/logic-calculator",children:"Logic Calculator"})},"120")]})}),(0,r.jsxs)(l.Z,{className:"pg-site-layout",children:[(0,r.jsx)(R,{className:"pg-site-layout-background",style:{padding:0},children:i.createElement(t?d.Z:f.Z,{className:"pg-trigger",onClick:function(){n(!t)}})}),(0,r.jsx)("div",{style:{padding:"0 2%",marginTop:"1%",minHeight:"70%"},children:(0,r.jsx)(L,{})})]})]})]})}}},function(e){e.O(0,[7362,9922,2135,7808,4650,646,9778,9774,2888,179],(function(){return t=85329,e(e.s=t);var t}));var t=e.O();_N_E=t}]);