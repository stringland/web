(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5839],{34960:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/guess-number-game",function(){return n(1773)}])},1773:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var s=n(85893),r=n(67294),a=n(9008),i=n.n(a),o=(n(27083),n(49677),n(25934)),u=n(9669),l=n.n(u),c=n(77362),h=n(12461),f=n(10073);function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?p(t):e}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return y(this,n)}}var x=c.Z.Title,j=(c.Z.Paragraph,function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(u,t);var e,n,a,i=w(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),g(p(e=i.call(this,t)),"chatContainer",r.createRef()),g(p(e),"scrollToMyRef",(function(){var t=e.chatContainer.current.scrollHeight-e.chatContainer.current.clientHeight;e.chatContainer.current.scrollTo(0,t)})),e.state={originalValue:"",result:"",msgList:[{position:"left",type:"text",text:'Welcome my friend! Would you like to play guessing number (bulls and cows) game with me? To start the game, please choose a digit X between 1 and 9, I will generate a number with X digits for you to guess. To learn more about the rules, type "help".',date:new Date}],str:"",status:1,msgChan:["init"],chanFront:0,chanEnd:0},e.handleChange=e.handleChange.bind(p(e)),e.appendPlayerMsg=e.appendPlayerMsg.bind(p(e)),e.appendLilyanMsg=e.appendLilyanMsg.bind(p(e)),e.guessNumberReply=e.guessNumberReply.bind(p(e)),e}return e=u,(n=[{key:"handleChange",value:function(t){this.setState({msg:t.target.value})}},{key:"appendPlayerMsg",value:function(t){var e=this;if(this.refs.playerInput.clear(),void 0!==this.state.msg){var n=this.state.msg.trim();if(0!==n.length){var s=this.state.msgList,r=this.state.msgChan,a=this.state.chanEnd;r[0]=n,a=(a+1)%2,s.push({position:"right",type:"text",text:n,date:new Date}),this.setState({msgList:s,msgChan:r,chanEnd:a},(function(){return e.scrollToMyRef()})),t.preventDefault()}}}},{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.guessNumberReply()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"guessNumberReply",value:function(){var t=this;if(this.state.chanFront!==this.state.chanEnd){var e=this.state.sessionID;1===this.state.status&&(e=(0,o.Z)());var n={sessionID:e,requestID:"guess-num-"+e,userID:"default_user",str:this.state.str,msg:this.state.msgChan[0],status:this.state.status};l().post("https://nifty-gasket-338410.wl.r.appspot.com/guess_number",n,{"Content-Type":"application/json"}).then((function(e){t.appendLilyanMsg(e.data.resMsg),t.setState({sessionID:e.data.sessionID,str:e.data.str,status:e.data.status,chanFront:t.state.chanEnd})})).catch((function(e){400===e.response.status?(h.ZP.error(e.response.data.errMsg),t.setState({chanFront:t.state.chanEnd})):h.ZP.error("sth goes wrong. please give one more try after a while.")}))}}},{key:"appendLilyanMsg",value:function(t){var e=this,n=this.state.msgList;n.push({position:"left",type:"text",text:t,date:new Date}),this.setState({msgList:n},(function(){return e.scrollToMyRef()}))}},{key:"render",value:function(){var t=this;return(0,s.jsxs)("div",{style:{minHeight:"85vh"},children:[(0,s.jsx)("div",{style:{marginTop:"2%",border:"1px solid rgb(235, 237, 240)"},children:(0,s.jsx)(x,{style:{textAlign:"center",fontSize:"3vh"},children:"Guess Number Game"})}),(0,s.jsx)("div",{ref:this.chatContainer,style:{marginTop:"2%",minHeight:"60vh",maxHeight:"65vh",overflow:"scroll",border:"1px solid rgb(235, 237, 240)"},children:(0,s.jsx)(f.MessageList,{className:"message-list",style:{padding:"0 3%"},lockable:!1,toBottomHeight:"100%",dataSource:this.state.msgList})}),(0,s.jsx)("div",{style:{marginTop:"2%",marginBottom:"1%",border:"1px solid rgb(235, 237, 240)"},children:(0,s.jsx)(f.Input,{placeholder:"Type here...",multiline:!1,ref:"playerInput",maxlength:100,onChange:this.handleChange,onKeyPress:function(e){return!(!e.shiftKey||13!==e.charCode)||(13===e.charCode?(t.appendPlayerMsg(e),!1):void 0)},rightButtons:(0,s.jsx)(f.Button,{text:"Send",onClick:this.appendPlayerMsg})})})]})}}])&&d(e.prototype,n),a&&d(e,a),u}(r.Component));function C(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Guess Number Game (Bulls and Cows)"}),(0,s.jsx)("meta",{name:"description",content:"classic bulls and cows game. guess a number with specific number of digits within limited of time."})]}),(0,s.jsx)("div",{children:(0,s.jsx)(j,{})})]})}}},function(t){t.O(0,[6842,7362,9922,4260,9774,2888,179],(function(){return e=34960,t(t.s=e);var e}));var e=t.O();_N_E=e}]);