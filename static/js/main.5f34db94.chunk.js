(this["webpackJsonpcrypto-rate"]=this["webpackJsonpcrypto-rate"]||[]).push([[0],{18:function(t,e,a){t.exports=a(42)},23:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(11),o=a.n(c),s=(a(23),a(12)),i=a(13),l=a(16),u=a(14),p=a(17),y=function(t){var e=t.cryptoArray.map((function(t){return n.a.createElement("li",{className:"list",key:t.currency},"Last rate: ",n.a.createElement("span",{className:t.class},t.last)," ",t.currency," ",t.symbol)}));return n.a.createElement("ul",{className:"crypto-list"},e)},f=a(15),m=a.n(f),h=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).getCryptoData=function(){m.a.get("https://blockchain.info/pl/ticker").then((function(e){var a=e.data,r=[],n=0;for(var c in a){var o=a[c],s=t.state.cryptoArray[n];void 0!==s?s.last>o.last?o.class="blue":s.last<o.last?o.class="green":o.class="blue":o.class="blue",o.currency=c,r.push(o),n++}t.setState({cryptoArray:r,filteredCrypto:r})}))},t.filter=function(e){var a=t.filterInput.value.trim().toUpperCase(),r=t.state.cryptoArray;console.log(a);var n=r.filter((function(t){return t.currency.includes(a)}));t.setState({filteredCrypto:n})},t.state={cryptoArray:[],filteredCrypto:[]},t}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.getCryptoData(),setInterval((function(){t.getCryptoData()}),5e3)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"crypto"},n.a.createElement("input",{className:"input",type:"text",placeholder:"Wpisz skr\xf3t",onChange:this.filter,ref:function(e){return t.filterInput=e}}),n.a.createElement(y,{cryptoArray:this.state.filteredCrypto}))}}]),e}(n.a.Component);a(41);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header"},"Bitcoin"),n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5f34db94.chunk.js.map