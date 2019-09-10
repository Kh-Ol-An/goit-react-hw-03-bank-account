(window["webpackJsonpgoit-react-hw-02-bank-account"]=window["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{2:function(t,e,a){t.exports={balance:"Balance_balance__30Dlf",text:"Balance_text__27HS9",iconUp:"Balance_iconUp__Tmyom",iconDown:"Balance_iconDown__14Gkd"}},21:function(t,e,a){t.exports=a(39)},39:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(3),c=a.n(o),l=a(10),i=a(8),s=a(13),u=a(14),m=a(19),b=a(15),p=a(20),f=a(16),d=a.n(f),h=a(6),y=a(4),E=a.n(y),w=function(t){var e=t.onChange,a=t.onClick,n=t.amount;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{type:"number",name:"amount",value:n,onChange:e,className:E.a.input}),r.a.createElement("button",{type:"submit",name:"deposit",onClick:a,className:E.a.button},"Deposit"),r.a.createElement("button",{type:"submit",name:"withdraw",onClick:a,className:E.a.button},"Withdraw"))};w.defaultProps={amount:""};var O=w,_=a(2),v=a.n(_),g=function(t){var e=t.balanceUp,a=t.balanceDown,n=t.balance;return r.a.createElement("section",{className:v.a.balance},r.a.createElement("p",{className:v.a.text},r.a.createElement("span",{className:v.a.iconUp,role:"img","aria-label":"deposit-up"},"\u2b06"),e,"$"),r.a.createElement("p",{className:v.a.text},r.a.createElement("span",{className:v.a.iconDown,role:"img","aria-label":"deposit-down"},"\u2b07"),a,"$"),r.a.createElement("span",null,"Balance: ",n,"$"))},j=a(9),D=a.n(j),N=function(t){var e=t.transactions;return r.a.createElement("table",{className:D.a.history},r.a.createElement("thead",null,r.a.createElement("tr",{className:D.a.htr},r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))};a(34);function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(a,!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0,balanceUp:0,balanceDown:0,amount:""},a.handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(i.a)({},n,r))},a.handleClick=function(t){var e=t.target.name;a.addTransaction(C({},a.state),e)},a.addTransaction=function(t,e){if(0===+t.amount)return a.notifyWarn(),void a.reset();var n=C({},t,{id:d.a.generate(),type:e,amount:+t.amount,date:(new Date).toLocaleString()});if("deposit"===e)a.setState((function(e){return{transactions:[].concat(Object(l.a)(e.transactions),[n]),balance:t.balance+Number(t.amount),balanceUp:t.balanceUp+Number(t.amount)}}));else{if(+t.amount>t.balance)return a.notifyError(),void a.reset();a.setState((function(e){return{transactions:[].concat(Object(l.a)(e.transactions),[n]),balance:t.balance-Number(t.amount),balanceDown:t.balanceDown+Number(t.amount)}}))}a.reset()},a.reset=function(){a.setState({amount:""})},a.notifyWarn=function(){return h.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},a.notifyError=function(){return h.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:h.b.POSITION.TOP_LEFT})},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("state");if(t){var e=JSON.parse(t);this.setState(e)}}},{key:"componentDidUpdate",value:function(t,e){var a=this.state.transactions;e.transactions!==a&&localStorage.setItem("state",JSON.stringify(this.state))}},{key:"render",value:function(){var t=this.state,e=t.transactions,a=t.balance,n=t.balanceUp,o=t.balanceDown,c=t.amount;return r.a.createElement("div",null,r.a.createElement(O,{onChange:this.handleChange,onClick:this.handleClick,amount:c}),r.a.createElement(h.a,null),r.a.createElement(g,{balanceUp:n,balanceDown:o,balance:a}),e.length>0&&r.a.createElement(N,{transactions:e}))}}]),e}(n.Component);var P=function(){return r.a.createElement(S,null)};c.a.render(r.a.createElement(P,null),document.getElementById("root"))},4:function(t,e,a){t.exports={controls:"Controls_controls__BY2-d",input:"Controls_input__1zU3F",button:"Controls_button__31jsY"}},9:function(t,e,a){t.exports={history:"TransactionHistory_history__3SkB0",htr:"TransactionHistory_htr__1Od_P"}}},[[21,1,2]]]);
//# sourceMappingURL=main.923729ef.chunk.js.map