(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t.p+"static/media/profile.9ddc953d.png"},17:function(e,n,t){e.exports=t.p+"static/media/CV_RomanRey_en.2ea6d9a9.pdf"},20:function(e,n,t){e.exports=t(31)},31:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),l=t(1),c=t(3),u=t(4),s=t(6),m=t(5),d=t(7),f=t(2);function b(){var e=Object(l.a)(["\n      @media (min-width: ","px) {\n         ",";\n      }\n   "]);return b=function(){return e},e}var h={mobileS:320,mobileM:375,mobileL:425,tablet:768,laptop:1024,laptopL:1440,desktop:2560},p=Object.keys(h).reduce(function(e,n){return e[n]=function(){return Object(f.a)(b(),h[n],f.a.apply(void 0,arguments))},e},{}),v=t(8),w="#0a845c";function g(){var e=Object(l.a)(["\n        display: block;\n    "]);return g=function(){return e},e}function E(){var e=Object(l.a)(["\n    /* If performance drops --\x3e Use react-media */\n    display: none;\n\n    ","\n    ","\n\n\n"]);return E=function(){return e},e}var y=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).animate=function(){t.draw()},t.draw3DHelix=function(e,n,r,a){for(var o=0;o<50;++o){e.fillStyle="white";var i=t.cosineY(1*o,n,.015,o*Math.PI/8);e.fillRect(5*o,a/2+i,2,2),i=t.cosineY(1*o,n,.015,(o+3)*Math.PI/8),e.fillRect(5*o,a/2+i,2,2)}},t.drawCosineHelix=function(e,n,r,a){for(var o=0;o<200;++o){var i=o%2?"white":w;e.fillStyle=i;var l=t.cosineY(.3*o,n,.015,o);e.fillRect(2*o,a/2+l,2,2)}},t.drawCosineBar=function(e,n,r,a){for(var o=0;o<50;++o){e.fillStyle="white";var i=t.cosineY(1*o,n,.015,o),l=t.cosineY(1*o,n,.015,o+4);e.fillRect(5*o,a/2+i,2,l)}},t.drawNew=function(e,n,r,a){if(!(n>r)){e.fillStyle="white";var o=4*Math.random()-2,i=4*Math.random()-2;t.cumulativeValue[0]+=o;var l=t.cumulativeValue[0];t.cumulativeValue[1]+=i;var c=t.cumulativeValue[1];e.fillRect(n,a/2+l,2,2),e.fillRect(n,a/2+c,2,2),e.fillRect(n,a/2-l,2,2),e.fillRect(n,a/2-c,2,2)}},t.cosineY=function(e,n,t,r){return e*Math.cos(n*t+r)},t.draw=function(){var e=Object(v.a)(t),n=e.ctx,r=e.t,a=e.CWIDTH,o=e.CHEIGHT;if(t.props.inverted)n.clearRect(0,0,a,o),n.drawImage(t.canvasLeft,0,0);else switch(t.t++,t.props.animation){default:case 0:n.clearRect(0,0,a,o),t.drawCosineHelix(n,r,a,o);break;case 1:n.clearRect(0,0,a,o),t.drawCosineBar(n,r,a,o);break;case 2:n.clearRect(0,0,a,o),t.draw3DHelix(n,r,a,o);break;case 3:t.drawNew(n,r,a,o)}requestAnimationFrame(t.animate)},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector("#".concat(this.props.id));this.ctx=e.getContext("2d"),this.canvasLeft=document.querySelector("#left"),this.CWIDTH=e.width,this.CHEIGHT=e.height,this.t=0,this.cumulativeValue={0:0,1:0},requestAnimationFrame(this.animate)}},{key:"render",value:function(){var e=this.props.inverted;return a.a.createElement(j,{id:this.props.id,inverted:e})}}]),n}(r.Component),j=f.b.canvas(E(),p.tablet(g()),function(e){return e.inverted&&"transform: scaleX(-1)"}),x=y;function O(){var e=Object(l.a)(["\n  cursor:pointer;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n   border-bottom: 2px solid ",";\n\n  \n  ",";\n  &:hover {\n    border-bottom: 2px solid ",";\n  }\n\n  }\n"]);return O=function(){return e},e}function S(){var e=Object(l.a)(["\n  margin-top: 8rem;  \n"]);return S=function(){return e},e}function C(){var e=Object(l.a)(["\nwidth: 100%;\n\n","\n\n  display: flex;\n  justify-content: center;\n"]);return C=function(){return e},e}function k(){var e=Object(l.a)(["\n  z-index: 1;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n"]);return k=function(){return e},e}var I=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={animation:Math.floor(3*Math.random())},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,n=e.isIntroductionShown,t=e.isContactShown,r=e.isPortfolioShown,o=e.isCVShown,i=e.showIntroduction,l=e.showContact,c=e.showCv,u=e.showPortfolio,s=this.state.animation;return a.a.createElement(R,null,a.a.createElement(x,{animation:s,id:"left"}),a.a.createElement(P,null,a.a.createElement(M,{isSelected:n,onClick:i},"Who I am"),a.a.createElement(M,{isSelected:o,onClick:c},"CV"),a.a.createElement(M,{isSelected:r,onClick:u},"Portfolio"),a.a.createElement(M,{isSelected:t,onClick:l},"Contact")),a.a.createElement(x,{animation:s,inverted:!0,id:"right"}))}}]),n}(r.Component),R=f.b.div(k()),P=f.b.nav(C(),p.tablet(S())),M=f.b.div(O(),"black",function(e){return e.isSelected&&"\n    font-style: italic;\n    border-bottom: 2px solid ".concat("#2d2d2d",";\n  ")},"white"),L=I,V=t(12),D=t.n(V),A=function(e){return a.a.createElement("span",{role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};function H(){var e=Object(l.a)(["\n    display: block;\n    width: 16rem;\n    heihgt: 16rem;\n    border-radius: 50%; \n    padding: 0.5rem;\n    border: 1px solid;\n    margin: 1rem;\n  "]);return H=function(){return e},e}function W(){var e=Object(l.a)(["\n  display: none;\n  ","\n"]);return W=function(){return e},e}function T(){var e=Object(l.a)(["\n    display:none;\n  "]);return T=function(){return e},e}function z(){var e=Object(l.a)(["\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%; \n  padding: 0.5rem;\n  border: 1px solid;\n  margin: 1rem;\n  ","\n"]);return z=function(){return e},e}function B(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%\n"]);return B=function(){return e},e}function N(){var e=Object(l.a)(["\n    font-size: 3rem;\n  "]);return N=function(){return e},e}function q(){var e=Object(l.a)(["\n  font-size: 1.5rem;\n  ","\n"]);return q=function(){return e},e}function G(){var e=Object(l.a)(["\n  display: flex;\n  line-height: 1.5\n"]);return G=function(){return e},e}function Y(){var e=Object(l.a)(["\n  // font-size:1rem;\n  font-family: monospace;\n"]);return Y=function(){return e},e}var _=f.b.span(Y()),F=f.b.div(G()),J=f.b.b(q(),p.tablet(N())),K=f.b.div(B()),Q=f.b.img(z(),p.tablet(T())),Z=f.b.img(W(),p.tablet(H())),U=function(){return a.a.createElement(F,{id:"introduction"},a.a.createElement("span",null,a.a.createElement("div",null,"Hi there!"),a.a.createElement(K,null,a.a.createElement(Q,{src:D.a})),a.a.createElement("div",null," I'm ",a.a.createElement(J,null,"Rom\xe1n Rey Pedrero")),a.a.createElement("span",null,"a computer science & engineering student from Barcelona based in Munich who loves all the science behind ",a.a.createElement(_,null,"Cognitive Systems")," such as ",a.a.createElement(_,null,"Machine Learning, Natural Language Processing, Computer Vision and Artificial Intelligence",a.a.createElement(A,{symbol:" \ud83e\udd16",label:"robot"}))),a.a.createElement("p",null,"I as well have a developer soul wich encourages me to be a self learner and carry out my personal projects to discover new paths."),a.a.createElement("div",null,a.a.createElement("i",null,a.a.createElement("b",null,"*** Please note that I'm still developing this website ",a.a.createElement(A,{symbol:"\ud83d\udd1c",label:"coming soon"})," *** ")))),a.a.createElement(Z,{isNotMobile:!0,src:D.a}))};function X(){var e=Object(l.a)(["\n  font-family: monospace;\n\n  color: ",";\n  &:visited {\n      color: ",";\n  }\n\n"]);return X=function(){return e},e}var $=f.b.a(X(),"white","#b57cff"),ee=t(17),ne=t.n(ee);function te(){var e=Object(l.a)(["\n  line-height: 1.5;\n  "]);return te=function(){return e},e}function re(){var e=Object(l.a)(["\n  padding: 0.5rem;\n  "]);return re=function(){return e},e}function ae(){var e=Object(l.a)(["\n\n  border-left: 1px solid ",";\n  border-bottom: 1px solid ",";\n  border-radius 5px;\n  ","\n"]);return ae=function(){return e},e}function oe(){var e=Object(l.a)(["\n    margin-top: 1rem;\n    flex-direction: row;\n  "]);return oe=function(){return e},e}function ie(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  \n  ","\n"]);return ie=function(){return e},e}function le(){var e=Object(l.a)([""]);return le=function(){return e},e}function ce(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return ce=function(){return e},e}function ue(){var e=Object(l.a)(["\n  font-style: italic;\n"]);return ue=function(){return e},e}function se(){var e=Object(l.a)(["\n    margin: 0.8rem 0;\n  "]);return se=function(){return e},e}function me(){var e=Object(l.a)(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  margin: 0.6rem 0;\n  ","\n"]);return me=function(){return e},e}function de(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n"]);return de=function(){return e},e}function fe(){var e=Object(l.a)(["\n  font-size: 2rem;\n  color: red;\n"]);return fe=function(){return e},e}var be=Object(f.b)(A)(fe()),he=f.b.span(de()),pe=f.b.h4(me(),w,"#4e4e4e",p.tablet(se())),ve=f.b.div(ue()),we=f.b.div(ce()),ge=f.b.div(le()),Ee=f.b.div(ie(),p.tablet(oe())),ye=f.b.div(ae(),"#151515","#151515",p.tablet(re())),je=f.b.div(te()),xe=function(){return a.a.createElement(je,null,a.a.createElement(ve,null,"Check and download a ",a.a.createElement("b",null,"PDF version")," of my CV ",a.a.createElement($,{href:ne.a,target:"_blank"},"here!")),a.a.createElement("h3",null,"Skills"),a.a.createElement(ge,null,a.a.createElement(Ee,null,a.a.createElement(ye,null,a.a.createElement(pe,null,"Machine Learning & Data Mining"),"Python, Sklearn, Pandas, TensorFlow - Keras"),a.a.createElement(ye,null,a.a.createElement(pe,null,"Cloud Computing"),"Docker, AWS"),a.a.createElement(ye,null,a.a.createElement(pe,null,"Software Engineering"),"Software Design, Object oriented, C++, Java")),a.a.createElement(Ee,null,a.a.createElement(ye,null,a.a.createElement(pe,null,"Web Development"),"Node.js, HTML, Javascript, CSS, React.js"),a.a.createElement(ye,null,a.a.createElement(pe,null,"Database Management"),"SQL & NoSQL, MySQL, Redis, MongoDB"),a.a.createElement(ye,null,a.a.createElement(pe,null,"Coming soon ..."),"Always learning"))),a.a.createElement("h3",null,"Languages (4) "),a.a.createElement(we,null,a.a.createElement(he,null,a.a.createElement(be,{symbol:"\ud83c\uddec\ud83c\udde7",label:"Great Britain flag"}),a.a.createElement("div",null,"English")),a.a.createElement(he,null,a.a.createElement(be,{symbol:"\ud83c\udde9\ud83c\uddea",label:"German flag"}),a.a.createElement("div",null,"German")),a.a.createElement(he,null,a.a.createElement(be,{symbol:"\ud83c\uddea\ud83c\uddf8",label:"Spanish flag"}),a.a.createElement("div",null,"Spanish")),a.a.createElement(he,null,a.a.createElement(be,{symbol:"\ud83c\udff4\udb40\udc65\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",label:"Catalan flag",title:"Couldn't find a catalan flag Emoji :S"}),a.a.createElement("div",null,"Catalan"))))};function Oe(){var e=Object(l.a)(["\n            left: 50%;\n        "]);return Oe=function(){return e},e}function Se(){var e=Object(l.a)(["\n    position: relative;\n    max-width: 1200px;\n    margin: 0 auto;\n    \n    &:after {\n        content: '';\n        position: absolute;\n        width: 6px;\n        border-left: 5px dashed;\n        top: 0;\n        bottom: 0;\n        left: 31px;\n        margin-left: -3px;\n        ","\n    }\n"]);return Se=function(){return e},e}function Ce(){var e=Object(l.a)(["\n\n        > div {\n            border-left: none;\n            border-right: 1px solid;\n        }\n        &:before {\n            left: unset;\n            border-width: 10px 0 10px 10px;\n            border-color: transparent transparent transparent ",";\n        }\n        &:after {\n            left: unset;\n        }\n    "]);return Ce=function(){return e},e}function ke(){var e=Object(l.a)(["\n    &:before {\n        left: 60px;\n        border: medium solid;\n        border-width: 10px 10px 10px 0;\n        border-color: transparent ",' transparent transparent;\n        content: " ";\n        height: 0;\n        position: absolute;\n        top: 22px;\n        width: 0;\n        right: 30px;\n    }\n    \n    &:after {\n        left: 15px;\n    }\n    \n    ',"\n"]);return ke=function(){return e},e}function Ie(){var e=Object(l.a)(["\n        left: 50%;\n        &:before {\n            left: 30px;\n        }\n        &:after {\n            left: -16px; \n        }\n    "]);return Ie=function(){return e},e}function Re(){var e=Object(l.a)(['\n    &:before {\n        content: " ";\n        height: 0;\n        position: absolute;\n        top: 22px;\n        width: 0;\n        left: 60px;\n        border: medium solid;\n        border-width: 10px 10px 10px 0;\n        border-color: transparent '," transparent transparent;\n    }\n    \n    &:after {\n        left: 15px;\n    }\n    \n    ","\n"]);return Re=function(){return e},e}function Pe(){var e=Object(l.a)(["\n        margin-top: 0;\n        width: 50%;\n        padding: 0.6rem 2.5rem;\n    "]);return Pe=function(){return e},e}function Me(){var e=Object(l.a)(["\n    > div {\n        border-left: 1px solid;\n        border-bottom: 1px solid;\n    }\n\n    box-sizing: border-box;\n\n    z-index: 0;\n    margin-top: 1rem;\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n    position: relative;\n    left: 0%;\n\n    ","\n\n    &:after {\n        content: '';\n        position: absolute;\n        width: 1.5rem;\n        height: 1.5rem;\n        right: -1rem;\n        background-color: ",";\n        border: 4px solid darkred;\n        top: 15px;\n        border-radius: 50%;\n        z-index: 1;\n    }\n"]);return Me=function(){return e},e}function Le(){var e=Object(l.a)(["\n    padding: 1rem;\n    border-radius: 10px;\n"]);return Le=function(){return e},e}function Ve(){var e=Object(l.a)(["\n    border-radius: 5px;\n    width: 100%;\n"]);return Ve=function(){return e},e}var De=function(){return a.a.createElement(Be,null,a.a.createElement(ze,null,a.a.createElement(He,null,a.a.createElement("h2",null,a.a.createElement($,{href:"https://github.com/rooom13/recommendation-system-thesis"},"Recommendation Systems Thesis")," | 2019"),a.a.createElement("div",null,"Evaluation of a ",a.a.createElement("b",null,"collaborative filtering")," method, ",a.a.createElement("b",null,"conten-based")," method and hybrid approach applied to musical artist recommendation."))),a.a.createElement(Te,null,a.a.createElement(He,null,a.a.createElement("h2",null,a.a.createElement($,{href:"https://github.com/rooom13/deutschlerne_bot"}," @dailyWord_bot")," | 2018"),a.a.createElement("div",null,"Telegram Bot to help Spanish speakers learn German & vice-versa.",a.a.createElement("p",null,"Developed using ",a.a.createElement("b",null,"Node.js")," and ",a.a.createElement("b",null,"Redis")," & deployed using ",a.a.createElement("b",null,"Cloud Computing")," techniques with ",a.a.createElement("b",null,"Docker")," as a container platform.")))),a.a.createElement(ze,null,a.a.createElement(He,null,a.a.createElement("h2",null,a.a.createElement($,{href:"https://www.youtube.com/watch?v=jMQ0V9Dbbyg"},'"In the Universe" visuals')," | 2018"),a.a.createElement("p",null," Lyric visuals for the videoclip of ",a.a.createElement("i",null,'"In the Universe"')," song. The visuals were developed using Javascript's canvas with the challenge of synchronizing the audio, lyrics and visual effects."),a.a.createElement(Ae,{src:"https://www.youtube.com/embed/jMQ0V9Dbbyg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),a.a.createElement(Te,null,a.a.createElement(He,null,a.a.createElement("h2",null," ",a.a.createElement($,{href:"http://www.genmagic.org/videojuegos/mates/mathicrunner"},"Mathic Runner")," | 2014"),a.a.createElement("p",null,"Web responsive videogame developed for ",a.a.createElement("i",null,"genmagic.net"),"an educational platform of research and development of interactive applications."))),a.a.createElement(ze,null,a.a.createElement(He,null,a.a.createElement("h2",null,a.a.createElement($,{href:"http://genmagic.org/videojuegos/mates/mathicplatformer1"},"Mathic Platformer")," | 2013"),a.a.createElement("p",null,"Web app videogame for a research project that approaches education and gamification."))),a.a.createElement(Te,null,a.a.createElement(He,null,a.a.createElement("h2",null,a.a.createElement($,{href:"https://www.youtube.com/playlist?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI"},"Animations")," | Long time ago"),a.a.createElement("p",null," At an early age I spent my time doing animations using ",a.a.createElement("b",null,"Adobe Flash"),".",a.a.createElement(Ae,{src:"https://www.youtube.com/embed/videoseries?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))},Ae=f.b.iframe(Ve()),He=f.b.div(Le()),We=f.b.div(Me(),p.tablet(Pe()),"white"),Te=Object(f.b)(We)(Re(),"white",p.tablet(Ie())),ze=Object(f.b)(We)(ke(),"white",p.tablet(Ce(),"white")),Be=f.b.div(Se(),p.tablet(Oe()));function Ne(){var e=Object(l.a)(["\n    display: flex;\n    line-height: 1.5;\n"]);return Ne=function(){return e},e}var qe=function(){return a.a.createElement(Ge,null,a.a.createElement("p",null),a.a.createElement(De,null))},Ge=f.b.div(Ne());function Ye(){var e=Object(l.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n  "]);return Ye=function(){return e},e}function _e(){var e=Object(l.a)(["\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n    >i {color: ",";}\n    background-color: ",";\n    &:hover{\n        background-color: ",";\n    }\n    &:active{\n        background-color: ",";\n    }\n\n    border-radius: 25px;\n\n    text-decoration: none; \n    decoration: none; \n\n    margin-top: 1rem;\n    margin-bottom: 0.5rem;\n    width: 7rem;\n    height: 7rem;\n  \n\n  \n"]);return _e=function(){return e},e}function Fe(){var e=Object(l.a)(["\n    font-style: italic;\n"]);return Fe=function(){return e},e}function Je(e){var n=e.link,t=e.iconClass,r=e.children;return a.a.createElement(Ze,null,a.a.createElement(Qe,{href:n},a.a.createElement("i",{className:t,"aria-hidden":"true"})),a.a.createElement(Ke,{href:n},"  ",r))}var Ke=Object(f.b)($)(Fe()),Qe=f.b.a(_e(),"white","#2d2d2d","#4e4e4e","#151515"),Ze=f.b.div(Ye());function Ue(){var e=Object(l.a)(["\n\n  "]);return Ue=function(){return e},e}function Xe(){var e=Object(l.a)(["\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  "]);return Xe=function(){return e},e}function $e(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  ","\n\n\n"]);return $e=function(){return e},e}function en(){return a.a.createElement(tn,null,a.a.createElement("p",null,"Let's have a talk!"),a.a.createElement(nn,null,a.a.createElement(Je,{iconClass:"fa fa-envelope-o fa-4x",link:"mailto:romanreypedrero@gmail.com?subject=Your personal website is so cool&body=Hey Rom\xe1n how are you doing?"},"romanreypedrero@gmail.com"),a.a.createElement(Je,{iconClass:"fa fa-linkedin fa-4x",link:"https://www.linkedin.com/in/roman-rey",target:"_blank"},"linkedin.com/in/roman-rey"),a.a.createElement(Je,{iconClass:"fa fa-github fa-4x",link:"https://www.github.com/rooom13",target:"_blank",title:"GitHub has no chat but you can see my projects there!"},"github.com/rooom13  ")))}var nn=f.b.div($e(),p.tablet(Xe())),tn=f.b.div(Ue());function rn(){var e=Object(l.a)(["\n  color: ",";\n"]);return rn=function(){return e},e}function an(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return an=function(){return e},e}function on(){var e=Object(l.a)([" \n    margin-top: 12rem;\n  "]);return on=function(){return e},e}function ln(){var e=Object(l.a)(["\n  margin: 1rem;\n  margin-top: 4rem;\n  ","\n  width: 800px;\n"]);return ln=function(){return e},e}var cn=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={isIntroductionShown:!1,isCVShown:!0,isPortfolioShown:!1,isContactShown:!1},t.showContact=function(){t.setState({isContactShown:!0,isCVShown:!1,isIntroductionShown:!1,isPortfolioShown:!1})},t.showCv=function(){t.setState({isContactShown:!1,isCVShown:!0,isIntroductionShown:!1,isPortfolioShown:!1})},t.showPortfolio=function(){t.setState({isContactShown:!1,isCVShown:!1,isIntroductionShown:!1,isPortfolioShown:!0})},t.showIntroduction=function(){t.setState({isContactShown:!1,isCVShown:!1,isIntroductionShown:!0,isPortfolioShown:!1})},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state,n=e.isContactShown,t=e.isCVShown,r=e.isIntroductionShown,o=e.isPortfolioShown;return a.a.createElement(mn,null,a.a.createElement(L,{isIntroductionShown:r,isCVShown:t,isPortfolioShown:o,isContactShown:n,showIntroduction:this.showIntroduction,showCv:this.showCv,showPortfolio:this.showPortfolio,showContact:this.showContact}),a.a.createElement(sn,null,a.a.createElement(un,null,r&&a.a.createElement(U,null),t&&a.a.createElement(xe,null),o&&a.a.createElement(qe,null),n&&a.a.createElement(en,null))))}}]),n}(r.Component),un=f.b.section(ln(),p.tablet(on())),sn=f.b.div(an()),mn=f.b.div(rn(),"white"),dn=cn;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.3f1720ac.chunk.js.map