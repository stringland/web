(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{97202:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r,a=n(15671),c=n(43144),i=n(97326),o=n(32531),l=n(73568),s=n(67294),d=n(17799),u=n(32637),m=n(61975),f=n(96159);function p(e){return!e||null===e.offsetParent||e.hidden}function h(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var x=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).containerRef=s.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){if(!(!t||p(t)||t.className.indexOf("-leave")>=0)){var a=e.props.insertExtraNode;e.extraNode=document.createElement("div");var c=(0,i.Z)(e).extraNode,o=e.context.getPrefixCls;c.className="".concat(o(""),"-click-animating-node");var l=e.getAttributeName();t.setAttribute(l,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&h(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n&&(e.csp&&e.csp.nonce&&(r.nonce=e.csp.nonce),c.style.borderColor=n,r.innerHTML="\n      [".concat(o(""),"-click-animating-without-extra-node='true']::after, .").concat(o(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),a&&t.appendChild(c),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!p(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),u.Z.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=(0,u.Z)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!s.isValidElement(r))return r;var a=e.containerRef;return(0,d.Yr)(r)&&(a=(0,d.sQ)(r.ref,e.containerRef)),(0,f.Tm)(r,{ref:a})},e}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();e.setAttribute(a,"false"),r&&(r.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return s.createElement(m.C,null,this.renderWave)}}]),n}(s.Component);x.contextType=m.E_},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(4942),a=n(87462),c=n(97685),i=n(67294),o=n(94184),l=n.n(o),s=n(97435),d=n(16330),u=n.n(d),m=n(61975),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},p=function(e){var t,n=e.prefixCls,c=e.className,o=e.checked,s=e.onChange,d=e.onClick,u=f(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,i.useContext(m.E_).getPrefixCls)("tag",n),h=l()(p,(t={},(0,r.Z)(t,"".concat(p,"-checkable"),!0),(0,r.Z)(t,"".concat(p,"-checkable-checked"),o),t),c);return i.createElement("span",(0,a.Z)({},u,{className:h,onClick:function(e){s&&s(!o),d&&d(e)}}))},h=n(98787),x=n(97202),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=new RegExp("^(".concat(h.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(h.E.join("|"),")$")),y=function(e,t){var n,o=e.prefixCls,d=e.className,f=e.style,p=e.children,h=e.icon,y=e.color,j=e.onClose,E=e.closeIcon,w=e.closable,Z=void 0!==w&&w,k=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=i.useContext(m.E_),N=C.getPrefixCls,O=C.direction,S=i.useState(!0),T=(0,c.Z)(S,2),P=T[0],_=T[1];i.useEffect((function(){"visible"in k&&_(k.visible)}),[k.visible]);var L=function(){return!!y&&(g.test(y)||b.test(y))},A=(0,a.Z)({backgroundColor:y&&!L()?y:void 0},f),I=L(),R=N("tag",o),q=l()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(y),I),(0,r.Z)(n,"".concat(R,"-has-color"),y&&!I),(0,r.Z)(n,"".concat(R,"-hidden"),!P),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===O),n),d),K=function(e){e.stopPropagation(),j&&j(e),e.defaultPrevented||"visible"in k||_(!1)},M="onClick"in k||p&&"a"===p.type,G=(0,s.Z)(k,["visible"]),z=h||null,W=z?i.createElement(i.Fragment,null,z,i.createElement("span",null,p)):p,B=i.createElement("span",(0,a.Z)({},G,{ref:t,className:q,style:A}),W,Z?E?i.createElement("span",{className:"".concat(R,"-close-icon"),onClick:K},E):i.createElement(u(),{className:"".concat(R,"-close-icon"),onClick:K}):null);return M?i.createElement(x.Z,null,B):B},j=i.forwardRef(y);j.displayName="Tag",j.CheckableTag=p;var E=j},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(62473)}])},62473:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(85893),a=n(4942),c=n(87462),i=n(67294),o=n(94184),l=n.n(o),s=n(97435),d=n(61975),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e){var t=e.prefixCls,n=e.className,r=e.hoverable,o=void 0===r||r,s=u(e,["prefixCls","className","hoverable"]);return i.createElement(d.C,null,(function(e){var r=(0,e.getPrefixCls)("card",t),d=l()("".concat(r,"-grid"),n,(0,a.Z)({},"".concat(r,"-grid-hoverable"),o));return i.createElement("div",(0,c.Z)({},s,{className:d}))}))},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},p=function(e){return i.createElement(d.C,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,a=e.className,o=e.avatar,s=e.title,d=e.description,u=f(e,["prefixCls","className","avatar","title","description"]),m=n("card",r),p=l()("".concat(m,"-meta"),a),h=o?i.createElement("div",{className:"".concat(m,"-meta-avatar")},o):null,x=s?i.createElement("div",{className:"".concat(m,"-meta-title")},s):null,v=d?i.createElement("div",{className:"".concat(m,"-meta-description")},d):null,g=x||v?i.createElement("div",{className:"".concat(m,"-meta-detail")},x,v):null;return i.createElement("div",(0,c.Z)({},u,{className:p}),h,g)}))},h=n(11884),x=n(71230),v=n(15746),g=n(97647),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var y=function(e){var t,n,r,o=i.useContext(d.E_),u=o.getPrefixCls,f=o.direction,p=i.useContext(g.Z),y=e.prefixCls,j=e.className,E=e.extra,w=e.headStyle,Z=void 0===w?{}:w,k=e.bodyStyle,C=void 0===k?{}:k,N=e.title,O=e.loading,S=e.bordered,T=void 0===S||S,P=e.size,_=e.type,L=e.cover,A=e.actions,I=e.tabList,R=e.children,q=e.activeTabKey,K=e.defaultActiveTabKey,M=e.tabBarExtraContent,G=e.hoverable,z=e.tabProps,W=void 0===z?{}:z,B=b(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=u("card",y),U=0===C.padding||"0px"===C.padding?{padding:24}:void 0,D=i.createElement("div",{className:"".concat(V,"-loading-block")}),H=i.createElement("div",{className:"".concat(V,"-loading-content"),style:U},i.createElement(x.Z,{gutter:8},i.createElement(v.Z,{span:22},D)),i.createElement(x.Z,{gutter:8},i.createElement(v.Z,{span:8},D),i.createElement(v.Z,{span:15},D)),i.createElement(x.Z,{gutter:8},i.createElement(v.Z,{span:6},D),i.createElement(v.Z,{span:18},D)),i.createElement(x.Z,{gutter:8},i.createElement(v.Z,{span:13},D),i.createElement(v.Z,{span:9},D)),i.createElement(x.Z,{gutter:8},i.createElement(v.Z,{span:4},D),i.createElement(v.Z,{span:3},D),i.createElement(v.Z,{span:16},D))),Y=void 0!==q,X=(0,c.Z)((0,c.Z)({},W),(t={},(0,a.Z)(t,Y?"activeKey":"defaultActiveKey",Y?q:K),(0,a.Z)(t,"tabBarExtraContent",M),t)),$=I&&I.length?i.createElement(h.Z,(0,c.Z)({size:"large"},X,{className:"".concat(V,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),I.map((function(e){return i.createElement(h.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(N||E||$)&&(r=i.createElement("div",{className:"".concat(V,"-head"),style:Z},i.createElement("div",{className:"".concat(V,"-head-wrapper")},N&&i.createElement("div",{className:"".concat(V,"-head-title")},N),E&&i.createElement("div",{className:"".concat(V,"-extra")},E)),$));var F=L?i.createElement("div",{className:"".concat(V,"-cover")},L):null,Q=i.createElement("div",{className:"".concat(V,"-body"),style:C},O?H:R),J=A&&A.length?i.createElement("ul",{className:"".concat(V,"-actions")},function(e){return e.map((function(t,n){return i.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},i.createElement("span",null,t))}))}(A)):null,ee=(0,s.Z)(B,["onTabChange"]),te=P||p,ne=l()(V,(n={},(0,a.Z)(n,"".concat(V,"-loading"),O),(0,a.Z)(n,"".concat(V,"-bordered"),T),(0,a.Z)(n,"".concat(V,"-hoverable"),G),(0,a.Z)(n,"".concat(V,"-contain-grid"),function(){var t;return i.Children.forEach(e.children,(function(e){e&&e.type&&e.type===m&&(t=!0)})),t}()),(0,a.Z)(n,"".concat(V,"-contain-tabs"),I&&I.length),(0,a.Z)(n,"".concat(V,"-").concat(te),te),(0,a.Z)(n,"".concat(V,"-type-").concat(_),!!_),(0,a.Z)(n,"".concat(V,"-rtl"),"rtl"===f),n),j);return i.createElement("div",(0,c.Z)({},ee,{className:ne}),r,F,Q,J)};y.Grid=m,y.Meta=p;var j=y,E=n(8250),w=n(27049),Z=n(20550),k=(n(55062),n(41664)),C=E.Z.Title,N=E.Z.Paragraph,O=j.Meta;function S(){return(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)("section",{children:[(0,r.jsx)(C,{style:{textAlign:"center"},children:"Welcome to StringLand Tech"}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"x-large"},children:"StringLand Tech has various kinds of useful office/study tools, and fun games."}),(0,r.jsxs)(N,{style:{textAlign:"center",fontSize:"x-large"},children:["Learn more about StringLand Tech from ",(0,r.jsx)("a",{href:"https://stringlandtech.blogspot.com",target:"_blank",rel:"noreferrer",children:"Blog"})]}),(0,r.jsx)(N,{style:{textAlign:"center",fontSize:"x-large"},children:"Let us click the key features cards below and start the jouney!"})]}),(0,r.jsx)("br",{}),(0,r.jsx)(w.Z,{orientation:"left"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(Z.Z,{color:"black",children:"key features"}),(0,r.jsx)("div",{className:"site-card-wrapper",style:{marginTop:"1%"},children:(0,r.jsxs)(x.Z,{gutter:10,children:[(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/text/textedit",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech simple text editor",src:"https://www.linkpicture.com/q/stringland-textop.svg"}),children:(0,r.jsx)(O,{title:"Text Editor",description:"Support text search, replace and conversion"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/math/mathbase",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech calculator",src:"https://www.linkpicture.com/q/stringland-math.svg"}),children:(0,r.jsx)(O,{title:"Math Opertion",description:"Math base/unit conversion and logic calculator"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/time/timezoneconv",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech time conversion",src:"https://www.linkpicture.com/q/stringland-clock.svg"}),children:(0,r.jsx)(O,{title:"Time Operation",description:"time stamp/date/unit conversion"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/string/basestr",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech string conversion/coding",src:"https://www.linkpicture.com/q/stringland-strop_1.svg"}),children:(0,r.jsx)(O,{title:"String Operation",description:"string base conversion, encode/decode and etc"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/security/hashgen",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech security operation",src:"https://www.linkpicture.com/q/stringland-security-v2.svg"}),children:(0,r.jsx)(O,{title:"Security Operation",description:"checksum and password generation"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/color/colorconv",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech color code conversion",src:"https://www.linkpicture.com/q/stringland-color.svg"}),children:(0,r.jsx)(O,{title:"Color Operation",description:"Conversion between different color codes, like RGB, HSV, CMYK and etc"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/network/htmlstr",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech network operation",src:"https://www.linkpicture.com/q/stringland-network.svg"}),children:(0,r.jsx)(O,{title:"Network Land",description:"html/URL query (Un)escape, IP conversion and etc"})})})})]})})]}),(0,r.jsx)("br",{}),(0,r.jsx)(w.Z,{orientation:"left"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(Z.Z,{color:"black",children:"games"}),(0,r.jsx)("div",{className:"site-card-wrapper",style:{marginTop:"1%"},children:(0,r.jsxs)(x.Z,{gutter:10,children:[(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/games/guessnum",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech guess number game",src:"https://www.linkpicture.com/q/stringland-guessnum_2.svg"}),children:(0,r.jsx)(O,{title:"Guess Number Game",description:"Classic Bulls and Cows Game"})})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(k.default,{href:"/web/games/piglatin",children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech pig latin game",src:"https://www.linkpicture.com/q/stringland-piglatin_1.svg"}),children:(0,r.jsx)(O,{title:"Pig Latin Game",description:"Classic Pig Latin Game"})})})})]})})]}),(0,r.jsx)("br",{}),(0,r.jsx)(w.Z,{orientation:"left"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(Z.Z,{color:"black",children:"upcoming features"}),(0,r.jsx)("div",{className:"site-card-wrapper",style:{marginTop:"1%"},children:(0,r.jsxs)(x.Z,{gutter:10,children:[(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"example",src:"https://www.linkpicture.com/q/stringland-sdk_1.svg"}),children:(0,r.jsx)(O,{title:"SDK",description:"SDK for multiple programming languages"})})}),(0,r.jsx)(v.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(j,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"example",src:"https://www.linkpicture.com/q/stringland-game_1.svg"}),children:(0,r.jsx)(O,{title:"Game Center",description:"More simple casual games"})})})]})})]}),(0,r.jsx)("br",{})]})}},21770:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(97685),a=n(67294);function c(e,t){var n=t||{},c=n.defaultValue,i=n.value,o=n.onChange,l=n.postState,s=a.useState((function(){return void 0!==i?i:void 0!==c?"function"===typeof c?c():c:"function"===typeof e?e():e})),d=(0,r.Z)(s,2),u=d[0],m=d[1],f=void 0!==i?i:u;l&&(f=l(f));var p=a.useRef(o);p.current=o;var h=a.useCallback((function(e){m(e),f!==e&&p.current&&p.current(e,f)}),[f,p]),x=a.useRef(!0);return a.useEffect((function(){x.current?x.current=!1:void 0===i&&m(i)}),[i]),[f,h]}}},function(e){e.O(0,[8250,9367,9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);