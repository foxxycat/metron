(this.webpackJsonpmetron=this.webpackJsonpmetron||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(20),r=a.n(c),l=(a(99),a(21)),o=a(14),s=a(15),u=a(12),p=a(17),h=a(16),m=(a(100),a(7)),d=(a(110),a(111),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).click1=new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav"),n.click2=new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav"),n.handleBPM=n.handleBPM.bind(Object(u.a)(n)),n.updateInterval=n.updateInterval.bind(Object(u.a)(n)),n.startStop=n.startStop.bind(Object(u.a)(n)),n.playClick=n.playClick.bind(Object(u.a)(n)),n.state=a.getInitState(),n}return Object(s.a)(a,[{key:"updateInterval",value:function(){var e=6e4/this.state.bpm;this.timer=setInterval(this.playClick,e)}},{key:"handleBPM",value:function(e){var t=e.target.value;this.state.playing?(clearInterval(this.timer),this.updateInterval(),this.setState({count:0,bpm:t})):this.setState({bpm:t})}},{key:"playClick",value:function(){0===this.state.count?this.click2.play():this.click1.play(),this.setState({count:this.state.count+1})}},{key:"startStop",value:function(){this.state.playing?(clearInterval(this.timer),this.setState({playing:!1})):(this.updateInterval(),this.setState({count:0,playing:!0},this.playClick))}},{key:"render",value:function(){Object(m.h)();return i.a.createElement(m.g,Object(l.a)({activePanel:"homeView"},"activePanel",this.state.activePanel),i.a.createElement(m.e,{id:"homePanel"},i.a.createElement(m.f,null,"Metron"),i.a.createElement(m.a,{className:"Main-wrapper"},i.a.createElement(v,{handleClick:this.startStop,currentState:this.state.playing}),i.a.createElement(m.c,{header:i.a.createElement(m.d,{mode:"secondary"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")},i.a.createElement(m.b,null,i.a.createElement(b,{bpm:this.state.bpm,handleChange:this.handleBPM}))))))}},{key:"openMain",value:function(){this.setState({activePanel:"homePanel"})}}],[{key:"getInitState",value:function(){return{bpm:100,playing:!1,count:0,activePanel:"homePanel"}}}]),a}(n.Component)),v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("button",{onClick:this.props.handleClick,className:"Main-button"},this.props.currentState?"Stop":"Start")}}]),a}(i.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"bpm-slider"},i.a.createElement("div",null,this.props.bpm,"BPM"),i.a.createElement("input",{type:"range",min:"60",max:"240",value:this.props.bpm,onChange:this.props.handleChange}))}}]),a}(i.a.Component),y=d,k=a(13),f=a.n(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.send("VKWebAppInit",{}),r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(112)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.a6424207.chunk.js.map