(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/profile.9ddc953d.png"},19:function(n,e,t){n.exports=t(30)},30:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(14),i=t.n(a),c=t(1),l=t(3),u=t(4),s=t(6),f=t(5),d=t(7),m=t(2);function h(){var n=Object(c.a)(["\n      @media (min-width: ","px) {\n         ",";\n      }\n   "]);return h=function(){return n},n}var b={mobileS:320,mobileM:375,mobileL:425,tablet:768,laptop:1024,laptopL:1440,desktop:2560},w=Object.keys(b).reduce(function(n,e){return n[e]=function(){return Object(m.a)(h(),b[e],m.a.apply(void 0,arguments))},n},{}),v=t(8);function p(){var n=Object(c.a)(["\n        display: block;\n    "]);return p=function(){return n},n}function y(){var n=Object(c.a)(["\n    display: none;\n\n    ","\n    ","\n\n\n"]);return y=function(){return n},n}var g=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(s.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(o)))).animate=function(){t.draw()},t.drawCosineHelix=function(n,e,r,o){for(var a=0;a<50;++a){n.fillStyle="white";var i=t.cosineY(1*a,e,.025,a);n.fillRect(5*a,o/2+i,2,2),n.fillStyle="cyan",i=t.cosineY(1*a,e,.025,a+4),n.fillRect(5*a,o/2+i,2,2)}},t.drawCosineBar=function(n,e,r,o){for(var a=0;a<50;++a){n.fillStyle="white";var i=t.cosineY(1*a,e,.025,a),c=t.cosineY(1*a,e,.025,a+4);n.fillRect(5*a,o/2+i,2,c)}},t.cosineY=function(n,e,t,r){return n*Math.cos(e*t+r)},t.draw=function(){t.t++;var n=Object(v.a)(t),e=n.ctx,r=n.t,o=n.CWIDTH,a=n.CHEIGHT;switch(e.clearRect(0,0,o,a),t.props.animation){case 0:t.drawCosineHelix(e,r,o,a);break;case 1:t.drawCosineBar(e,r,o,a);break;default:t.drawCosineHelix(e,r,o,a),t.drawCosineBar(e,r,o,a)}requestAnimationFrame(t.animate)},t}return Object(d.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=document.querySelector("#".concat(this.props.id));this.ctx=n.getContext("2d"),this.CWIDTH=n.width,this.CHEIGHT=n.height,this.t=0,requestAnimationFrame(this.animate)}},{key:"render",value:function(){var n=this.props.inverted;return o.a.createElement(j,{id:this.props.id,inverted:n})}}]),e}(r.Component),j=m.b.canvas(y(),w.tablet(p()),function(n){return n.inverted&&"transform: scaleX(-1)"}),C=g;function E(){var n=Object(c.a)(["\n  cursor:pointer;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  border-bottom: 2px solid black;\n  \n  ",";\n  &:hover {\n    border-bottom: 2px solid white;\n  }\n\n  }\n"]);return E=function(){return n},n}function S(){var n=Object(c.a)(["\n  margin-top: 8rem;  \n"]);return S=function(){return n},n}function O(){var n=Object(c.a)(["\nwidth: 100%;\nbackground-color: rgba(0, 0, 0, 0.9);\n\n","\n\n  display: flex;\n  justify-content: center;\n"]);return O=function(){return n},n}function k(){var n=Object(c.a)(["\n  display: flex;\n  position: fixed;\n  width: 100%;\n"]);return k=function(){return n},n}var x=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(s.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(o)))).state={animation:Math.floor(3*Math.random())},t}return Object(d.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n=this.props,e=n.isIntroductionShown,t=n.isContactShown,r=n.isPortfolioShown,a=n.isCvShown,i=n.showIntroduction,c=n.showContact,l=n.showCv,u=n.showPortfolio,s=this.state.animation;return o.a.createElement(I,null,o.a.createElement(C,{animation:s,id:"left"}),o.a.createElement(P,null,o.a.createElement(H,{isSelected:e,onClick:i},"Who I am"),o.a.createElement(H,{isSelected:a,onClick:l},"CV"),o.a.createElement(H,{isSelected:r,onClick:u},"Portfolio"),o.a.createElement(H,{isSelected:t,onClick:c},"Contact")),o.a.createElement(C,{animation:s,inverted:!0,id:"right"}))}}]),e}(r.Component),I=m.b.div(k()),P=m.b.nav(O(),w.tablet(S())),H=m.b.div(E(),function(n){return n.isSelected&&"\n    font-style: italic;\n    border-bottom: 2px solid grey;\n  "}),M=x,V=t(12),R=t.n(V);function A(){var n=Object(c.a)(["\n    display: block;\n    width: 16rem;\n    heihgt: 16rem;\n    border-radius: 50%; \n    padding: 0.5rem;\n    border: 1px solid;\n    margin: 1rem;\n  "]);return A=function(){return n},n}function B(){var n=Object(c.a)(["\n  display: none;\n  ","\n  \n"]);return B=function(){return n},n}function Y(){var n=Object(c.a)(["\n    display:none;\n  "]);return Y=function(){return n},n}function L(){var n=Object(c.a)(["\n\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%; \n  padding: 0.5rem;\n  border: 1px solid;\n  margin: 1rem;\n  ","\n  "]);return L=function(){return n},n}function W(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%\n"]);return W=function(){return n},n}function z(){var n=Object(c.a)(["\n  font-size: 3rem;\n  "]);return z=function(){return n},n}function D(){var n=Object(c.a)(["\n  \n  font-size: 1.5rem;\n  \n  ","\n  "]);return D=function(){return n},n}function T(){var n=Object(c.a)(["\n  display: flex;\n  line-height: 1.5\n  "]);return T=function(){return n},n}function q(){var n=Object(c.a)(["\n  font-size:1.1rem;\n  font-family: monospace;\n"]);return q=function(){return n},n}var G=m.b.span(q()),N=m.b.div(T()),F=m.b.b(D(),w.tablet(z())),J=m.b.div(W()),X=m.b.img(L(),w.tablet(Y())),$=m.b.img(B(),w.tablet(A())),_=function(){return o.a.createElement(N,{id:"introduction"},o.a.createElement("span",null,o.a.createElement("div",null,"Hi there!"),o.a.createElement(J,null,o.a.createElement(X,{src:R.a})),o.a.createElement("div",null," I'm ",o.a.createElement(F,null,"Rom\xe1n Rey Pedrero")),o.a.createElement("span",null,"a computer science & engineering student from Barcelona based in Munich who loves all the science behind ",o.a.createElement(G,null,"Cognitive Systems")," such as ",o.a.createElement(G,null,"Machine Learning, Natural Language Processing, Computer Vision and Artificial Intelligence ",o.a.createElement("span",{"aria-label":"robot",role:"img"},"\ud83e\udd16"))),o.a.createElement("p",null,"I as well have a developer soul wich encourages me to be a self learner and carry out my personal projects to discover new paths.")),o.a.createElement($,{isNotMobile:!0,src:R.a}))};function K(){var n=Object(c.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n  "]);return K=function(){return n},n}function Q(){var n=Object(c.a)(["\n  display:flex;\n  justify-content:center;\n  align-items: center;\n\n  >i {color: white;}\n  background-color: #2d2d2d;\n  &:hover{\n      background-color: #4e4e4e;\n  }\n  &:active{\n      background-color: #151515;\n  }\n\n  border-radius: 25px;\n\n  text-decoration: none; \n  decoration: none; \n\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  width: 7rem;\n  height: 7rem;\n  \n\n  \n"]);return Q=function(){return n},n}function U(){var n=Object(c.a)(["\n  font-style: italic;\n  font-family: monospace;\n\n  color: white;\n  &:visited {\n      color: #b57cff;\n  }\n\n"]);return U=function(){return n},n}function Z(n){var e=n.link,t=n.iconClass,r=n.children;return o.a.createElement(tn,null,o.a.createElement(en,{href:e},o.a.createElement("i",{className:t,"aria-hidden":"true"})),o.a.createElement(nn,{href:e},"  ",r))}var nn=m.b.a(U()),en=m.b.a(Q()),tn=m.b.div(K());function rn(){var n=Object(c.a)(["\n\n  "]);return rn=function(){return n},n}function on(){var n=Object(c.a)(["\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  "]);return on=function(){return n},n}function an(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  ","\n\n\n"]);return an=function(){return n},n}function cn(){return o.a.createElement(un,null,o.a.createElement("p",null,"Let's have a talk!"),o.a.createElement(ln,null,o.a.createElement(Z,{iconClass:"fa fa-envelope-o fa-4x",link:"mailto:romanreypedrero@gmail.com?subject=Your personal website is so cool&body=Hey Rom\xe1n how are you doing?"},"romanreypedrero@gmail.com"),o.a.createElement(Z,{iconClass:"fa fa-linkedin fa-4x",link:"https://www.linkedin.com/in/roman-rey-pedrero"},"linkedin.com/in/roman-rey-pedrero"),o.a.createElement(Z,{iconClass:"fa fa-github fa-4x",link:"https://www.github.com/rooom13",target:"_blank",title:"GitHub has no chat but you can see my projects there!"},"github.com/rooom13  ")))}var ln=m.b.div(an(),w.tablet(on())),un=m.b.div(rn());function sn(){var n=Object(c.a)(["\n  line-height: 1.5\n  "]);return sn=function(){return n},n}var fn=m.b.div(sn()),dn=function(){return o.a.createElement(fn,null,o.a.createElement("div",null,o.a.createElement("b",null,"Skills:")),o.a.createElement("ul",null,o.a.createElement("li",null,"Making things public when they are not finished yer like this page"),o.a.createElement("li",null,"a"),o.a.createElement("li",null,"a")))};function mn(){var n=Object(c.a)(["\n  color: white;\n  \n"]);return mn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  \n"]);return hn=function(){return n},n}function bn(){var n=Object(c.a)([" \n    margin-top: 11rem;\n  "]);return bn=function(){return n},n}function wn(){var n=Object(c.a)(["\n  margin: 1rem;\n  margin-top: 4rem;\n  ","\n  width: 800px;\n"]);return wn=function(){return n},n}var vn=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(s.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(o)))).state={isIntroductionShown:!0,isCVShown:!1,isPortfolioShown:!1,isContactShown:!1},t.showContact=function(){t.setState({isContactShown:!0,isCVShown:!1,isIntroductionShown:!1,isPortfolioShown:!1})},t.showCv=function(){t.setState({isContactShown:!1,isCVShown:!0,isIntroductionShown:!1,isPortfolioShown:!1})},t.showPortfolio=function(){t.setState({isContactShown:!1,isCVShown:!1,isIntroductionShown:!1,isPortfolioShown:!0})},t.showIntroduction=function(){t.setState({isContactShown:!1,isCVShown:!1,isIntroductionShown:!0,isPortfolioShown:!1})},t}return Object(d.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.state,e=n.isContactShown,t=n.isCVShown,r=n.isIntroductionShown,a=n.isPortfolioShown;return o.a.createElement(gn,null,o.a.createElement(M,{isContactShown:e,isCVShown:t,isIntroductionShown:r,isPortfolioShown:a,showContact:this.showContact,showCv:this.showCv,showPortfolio:this.showPortfolio,showIntroduction:this.showIntroduction}),o.a.createElement(yn,null,o.a.createElement(pn,null,r&&o.a.createElement(_,null),e&&o.a.createElement(cn,null),t&&o.a.createElement(dn,null))))}}]),e}(r.Component),pn=m.b.section(wn(),w.tablet(bn())),yn=m.b.div(hn()),gn=m.b.div(mn()),jn=vn;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(jn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.9c856676.chunk.js.map