(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t.p+"static/media/profile.5fb096d8.png"},31:function(e,n,t){e.exports=t(43)},42:function(e,n,t){e.exports=t.p+"static/media/CV_RomanRey_en.f499ec7e.pdf"},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(25),i=t.n(l),o=t(1),c=t(10),u=t(11),m=t(13),s=t(12),d=t(14),f=t(17),b=t(3),p=t(2);function h(){var e=Object(o.a)(["\n      @media (min-width: ","px) {\n         ",";\n      }\n   "]);return h=function(){return e},e}var v={mobileS:320,mobileM:375,mobileL:425,tablet:768,laptop:1024,laptopL:1440,desktop:2560},g=Object.keys(v).reduce(function(e,n){return e[n]=function(){return Object(p.a)(h(),v[n],p.a.apply(void 0,arguments))},e},{}),E=t(16),w="#0a845c";function y(){var e=Object(o.a)(["\n        display: block;\n    "]);return y=function(){return e},e}function j(){var e=Object(o.a)(["\n    /* If performance drops --\x3e Use react-media */\n    display: none;\n\n    ","\n    ","\n\n\n"]);return j=function(){return e},e}var x=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).animate=function(){t.draw()},t.draw3DHelix=function(e,n,a,r){for(var l=0;l<50;++l){e.fillStyle="white";var i=t.cosineY(1*l,n,.015,l*Math.PI/8);e.fillRect(5*l,r/2+i,2,2),i=t.cosineY(1*l,n,.015,(l+3)*Math.PI/8),e.fillRect(5*l,r/2+i,2,2)}},t.drawCosineHelix=function(e,n,a,r){for(var l=0;l<200;++l){var i=l%2?"white":w;e.fillStyle=i;var o=t.cosineY(.3*l,n,.015,l);e.fillRect(2*l,r/2+o,2,2)}},t.drawCosineBar=function(e,n,a,r){for(var l=0;l<50;++l){e.fillStyle="white";var i=t.cosineY(1*l,n,.015,l),o=t.cosineY(1*l,n,.015,l+4);e.fillRect(5*l,r/2+i,2,o)}},t.drawLightning=function(e,n,a,r){if(!((n/=2)>a)){var l=4*Math.random()-2,i=4*Math.random()-2;t.cumulativeValue[0]+=l;var o=t.cumulativeValue[0];t.cumulativeValue[1]+=i;var c=t.cumulativeValue[1];e.fillStyle="white",e.fillRect(n,r/2+o,2,2),e.fillRect(n,r/2-o,2,2),e.fillStyle=w,e.fillRect(n,r/2+c,2,2),e.fillRect(n,r/2-c,2,2)}},t.drawNew=function(e,n,a,r){for(var l=0;l<10;++l){var i=Math.abs(t.cosineY(1,n,-.01,Math.PI/10*l)),o=10*l;e.strokeStyle="rgba(255,255,255,".concat(1-i,")"),e.fillStyle="white",e.beginPath(),e.arc(0,0,o,0,2*Math.PI),e.stroke()}},t.cosineY=function(e,n,t,a){return e*Math.cos(n*t+a)},t.draw=function(){var e=Object(E.a)(t),n=e.ctx,a=e.t,r=e.CWIDTH,l=e.CHEIGHT;if(t.props.inverted)n.clearRect(0,0,r,l),n.drawImage(t.canvasLeft,0,0);else switch(t.t++,t.props.animation){default:case 0:n.clearRect(0,0,r,l),t.drawCosineHelix(n,a,r,l);break;case 1:n.clearRect(0,0,r,l),t.drawCosineBar(n,a,r,l);break;case 2:n.clearRect(0,0,r,l),t.draw3DHelix(n,a,r,l);break;case 3:t.drawLightning(n,a,r,l);break;case 4:n.clearRect(0,0,r,l),t.drawNew(n,a,r,l)}requestAnimationFrame(t.animate)},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector("#".concat(this.props.id));this.ctx=e.getContext("2d"),this.canvasLeft=document.querySelector("#left"),this.CWIDTH=e.width,this.CHEIGHT=e.height,this.t=0,this.cumulativeValue={0:0,1:0},requestAnimationFrame(this.animate)}},{key:"render",value:function(){var e=this.props.inverted;return r.a.createElement(O,{title:"This is a canvas animation! Refresh the page to get random ones :)",id:this.props.id,inverted:e})}}]),n}(a.Component),O=p.b.canvas(j(),g.tablet(y()),function(e){return e.inverted&&"transform: scaleX(-1)"}),k=x;function S(){var e=Object(o.a)(["\n  cursor:pointer;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  border-bottom: 2px solid ",";\n  text-decoration: none; \n\n  color: unset;\n\n  &:hover {\n    border-bottom: 2px solid ",";\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(o.a)(["\n  margin-top: 8rem;  \n"]);return C=function(){return e},e}function R(){var e=Object(o.a)(["\nwidth: 100%;\n\n","\n\n  display: flex;\n  justify-content: center;\n"]);return R=function(){return e},e}function I(){var e=Object(o.a)(["\n  z-index: 1;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n"]);return I=function(){return e},e}var M=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={animation:Math.floor(5*Math.random())},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.animation,n={fontStyle:"italic",borderBottom:"2px solid ".concat("#2d2d2d")};return r.a.createElement(L,null,r.a.createElement(k,{animation:e,id:"left"}),r.a.createElement(D,null,r.a.createElement(P,{activeStyle:n,exact:!0,to:"/"},"Who I am"),r.a.createElement(P,{activeStyle:n,to:"/cv"},"CV"),r.a.createElement(P,{activeStyle:n,to:"/portfolio"},"Portfolio"),r.a.createElement(P,{activeStyle:n,to:"/contact"},"Contact")),r.a.createElement(k,{animation:e,inverted:!0,id:"right"}))}}]),n}(a.Component),L=p.b.div(I()),D=p.b.nav(R(),g.tablet(C())),P=Object(p.b)(f.b)(S(),"black","white"),A=M,H=t(23),W=t.n(H),T=function(e){return r.a.createElement("span",{role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};function z(){var e=Object(o.a)(["\n    display: block;\n    width: 16rem;\n    height: 16rem;\n    border-radius: 50%; \n    padding: 0.5rem;\n    border: 1px solid;\n    margin: 1rem;\n  "]);return z=function(){return e},e}function B(){var e=Object(o.a)(["\n  display: none;\n  ","\n"]);return B=function(){return e},e}function V(){var e=Object(o.a)(["\n    display:none;\n  "]);return V=function(){return e},e}function Y(){var e=Object(o.a)(["\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%; \n  padding: 0.5rem;\n  border: 1px solid;\n  margin: 1rem;\n  ","\n"]);return Y=function(){return e},e}function q(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%\n"]);return q=function(){return e},e}function G(){var e=Object(o.a)(["\n    font-size: 3rem;\n  "]);return G=function(){return e},e}function _(){var e=Object(o.a)(["\n  font-size: 1.5rem;\n  ","\n"]);return _=function(){return e},e}function F(){var e=Object(o.a)(["\n  display: flex;\n  line-height: 1.5\n"]);return F=function(){return e},e}function K(){var e=Object(o.a)(["\n  // font-size:1rem;\n  font-family: monospace;\n"]);return K=function(){return e},e}p.b.span(K());var N=p.b.div(F()),J=p.b.b(_(),g.tablet(G())),Q=p.b.div(q()),U=p.b.img(Y(),g.tablet(V())),Z=p.b.img(B(),g.tablet(z())),X=function(){return r.a.createElement(N,{id:"introduction"},r.a.createElement("span",null,r.a.createElement("div",null,"Hi there!"),r.a.createElement(Q,null,r.a.createElement(U,{src:W.a})),r.a.createElement("div",null," I'm ",r.a.createElement(J,null,"Rom\xe1n Rey Pedrero")),"an AI engineer from Barcelona based in Munich who loves all the science behind Cognitive Systems.",r.a.createElement("p",null,"Since I was a kid I was asking myself what kind of black magic was going on behind such boxes called computers (when they used to be boxes). Many years later I keep turning black magic into science.",r.a.createElement(T,{symbol:" \ud83e\udd16",label:"robot"})),r.a.createElement("p",null," Check my portfolio! ",r.a.createElement(T,{symbol:"\ud83d\ude4c",label:"hands clapping"}))),r.a.createElement(Z,{isNotMobile:!0,src:W.a}))};function $(){var e=Object(o.a)(["\n  font-family: monospace;\n\n  color: ",";\n  &:visited {\n      color: ",";\n  }\n\n"]);return $=function(){return e},e}var ee=p.b.a($(),"white","#b57cff");t(42);function ne(){var e=Object(o.a)(["\n  line-height: 1.5;\n  "]);return ne=function(){return e},e}function te(){var e=Object(o.a)(["\n    padding: 0.5rem;\n    display: unset;\n  "]);return te=function(){return e},e}function ae(){var e=Object(o.a)(["\n\n  ",";\n\n  border-left: 1px solid ",";\n  border-bottom: 1px solid ",";\n  border-radius 5px;\n\n\n  ","\n"]);return ae=function(){return e},e}function re(){var e=Object(o.a)(["\n    margin-top: 1rem;\n    flex-direction: row;\n  "]);return re=function(){return e},e}function le(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  \n  ","\n"]);return le=function(){return e},e}function ie(){var e=Object(o.a)([""]);return ie=function(){return e},e}function oe(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return oe=function(){return e},e}function ce(){var e=Object(o.a)(["\n  font-style: italic;\n"]);return ce=function(){return e},e}function ue(){var e=Object(o.a)(["\n    margin: 0.8rem 0;\n  "]);return ue=function(){return e},e}function me(){var e=Object(o.a)(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  margin: 0.6rem 0;\n  ","\n"]);return me=function(){return e},e}function se(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return se=function(){return e},e}function de(){var e=Object(o.a)(["\n  font-size: 2rem;\n  color: red;\n"]);return de=function(){return e},e}var fe=Object(p.b)(T)(de()),be=p.b.span(se()),pe=p.b.h4(me(),w,"#4e4e4e",g.tablet(ue())),he=p.b.div(ce()),ve=p.b.div(oe()),ge=p.b.div(ie()),Ee=p.b.div(le(),g.tablet(re())),we=p.b.div(ae(),function(e){return e.hideMobile&&"\n    display: none;\n  "},"#151515","#151515",g.tablet(te())),ye=p.b.div(ne()),je=function(){return r.a.createElement(ye,null,r.a.createElement(he,null,"Check it on LinkedIn ",r.a.createElement(ee,{href:"https://www.linkedin.com/in/roman-rey",target:"_blank"},"here!")),r.a.createElement("h3",null,"Skills"),r.a.createElement(ge,null,r.a.createElement(Ee,null,r.a.createElement(we,null,r.a.createElement(pe,null,"Data Science"),"Anomaly detection, False positive reduction",r.a.createElement("br",null)," (Un)Supervised learning, Sklearn, Pandas, TensorFlow/Pytorch"),r.a.createElement(we,null,r.a.createElement(pe,null,"Data Engineering"),"Datalake management, Athena, parallel processing, Kafka"),r.a.createElement(we,null,r.a.createElement(pe,null,"Cloud Computing"),"Docker, Kubernetes, AWS")),r.a.createElement(Ee,null,r.a.createElement(we,null,r.a.createElement(pe,null,"Software Engineering"),"Software Design, OOP, python, testing CI/CD, Java"),r.a.createElement(we,null,r.a.createElement(pe,null,"Web Development"),"Node.js, HTML, Javascript, CSS, React.js"),r.a.createElement(we,null,r.a.createElement(pe,null,"Database Management"),"SQL & NoSQL, MySQL, Redis, MongoDB, ElasticSearh"),r.a.createElement(we,{hideMobile:!0},r.a.createElement(pe,null,"Coming soon ..."),"Who knows what I will come with"))),r.a.createElement("h3",null,"Languages (4) "),r.a.createElement(ve,null,r.a.createElement(be,null,r.a.createElement(fe,{symbol:"\ud83c\uddec\ud83c\udde7",label:"Great Britain flag"}),r.a.createElement("div",null,"English")),r.a.createElement(be,null,r.a.createElement(fe,{symbol:"\ud83c\udde9\ud83c\uddea",label:"German flag"}),r.a.createElement("div",null,"German")),r.a.createElement(be,null,r.a.createElement(fe,{symbol:"\ud83c\uddea\ud83c\uddf8",label:"Spanish flag"}),r.a.createElement("div",null,"Spanish")),r.a.createElement(be,null,r.a.createElement(fe,{symbol:"\ud83c\udff4\udb40\udc65\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",label:"Catalan flag",title:"Couldn't find a catalan flag Emoji :S"}),r.a.createElement("div",null,"Catalan"))))};function xe(){var e=Object(o.a)(["\n            left: 50%;\n        "]);return xe=function(){return e},e}function Oe(){var e=Object(o.a)(["\n    position: relative;\n    max-width: 1200px;\n    margin: 0 auto;\n    \n    &:after {\n        content: '';\n        position: absolute;\n        width: 6px;\n        border-left: 5px dashed;\n        top: 0;\n        bottom: 0;\n        left: 31px;\n        margin-left: -3px;\n        ","\n    }\n"]);return Oe=function(){return e},e}function ke(){var e=Object(o.a)(["\n\n        > div {\n            border-left: none;\n            border-right: 1px solid;\n        }\n        &:before {\n            left: unset;\n            border-width: 10px 0 10px 10px;\n            border-color: transparent transparent transparent ",";\n        }\n        &:after {\n            left: unset;\n        }\n    "]);return ke=function(){return e},e}function Se(){var e=Object(o.a)(["\n    &:before {\n        left: 60px;\n        border: medium solid;\n        border-width: 10px 10px 10px 0;\n        border-color: transparent ",' transparent transparent;\n        content: " ";\n        height: 0;\n        position: absolute;\n        top: 22px;\n        width: 0;\n        right: 30px;\n    }\n    \n    &:after {\n        left: 15px;\n    }\n    \n    ',"\n"]);return Se=function(){return e},e}function Ce(){var e=Object(o.a)(["\n        left: 50%;\n        &:before {\n            left: 30px;\n        }\n        &:after {\n            left: -16px; \n        }\n    "]);return Ce=function(){return e},e}function Re(){var e=Object(o.a)(['\n    &:before {\n        content: " ";\n        height: 0;\n        position: absolute;\n        top: 22px;\n        width: 0;\n        left: 60px;\n        border: medium solid;\n        border-width: 10px 10px 10px 0;\n        border-color: transparent '," transparent transparent;\n    }\n    \n    &:after {\n        left: 15px;\n    }\n    \n    ","\n"]);return Re=function(){return e},e}function Ie(){var e=Object(o.a)(["\n        margin-top: 0;\n        width: 50%;\n        padding: 0.6rem 2.5rem;\n    "]);return Ie=function(){return e},e}function Me(){var e=Object(o.a)(["\n    > div {\n        border-left: 1px solid;\n        border-bottom: 1px solid;\n    }\n\n    box-sizing: border-box;\n\n    z-index: 0;\n    margin-top: 1rem;\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n    position: relative;\n    left: 0%;\n\n    ","\n\n    &:after {\n        content: '';\n        position: absolute;\n        width: 1.5rem;\n        height: 1.5rem;\n        right: -1rem;\n        background-color: ",";\n        border: 4px solid ",";\n        top: 15px;\n        border-radius: 50%;\n        z-index: 1;\n    }\n"]);return Me=function(){return e},e}function Le(){var e=Object(o.a)(["\n    padding: 1rem;\n    border-radius: 10px;\n"]);return Le=function(){return e},e}function De(){var e=Object(o.a)(["\n    border-radius: 5px;\n    width: 100%;\n"]);return De=function(){return e},e}var Pe=function(){return r.a.createElement(Be,null,r.a.createElement(ze,null,r.a.createElement(He,null,r.a.createElement("h2",null,r.a.createElement(ee,{href:"https://github.com/rooom13/deutschlerne_bot"}," @dailyWord_bot")," | 2018 - ",(new Date).getFullYear()),r.a.createElement("div",null,"Telegram Bot to help expanding Germand/Spanish vocabulary.",r.a.createElement("p",null,"Developed using ",r.a.createElement("b",null,"Python")," and ",r.a.createElement("b",null,"Redis")," & deployed using ",r.a.createElement("b",null,"Cloud Computing")," techniques with ",r.a.createElement("b",null,"Docker")," as a container platform.")))),r.a.createElement(Te,null,r.a.createElement(He,null,r.a.createElement("h2",null,r.a.createElement(ee,{href:"https://github.com/rooom13/recommendation-system-thesis"},"Recommendation Systems Thesis")," | 2019"),r.a.createElement("div",null,"Evaluation of a ",r.a.createElement("b",null,"collaborative filtering")," method, ",r.a.createElement("b",null,"conten-based")," method and hybrid approach applied to musical artist recommendation."))),r.a.createElement(ze,null,r.a.createElement(He,null,r.a.createElement("h2",null,r.a.createElement(ee,{href:"https://www.youtube.com/watch?v=jMQ0V9Dbbyg"},'"In the Universe" visuals')," | 2018"),r.a.createElement("p",null," Lyric visuals for the videoclip of ",r.a.createElement("i",null,'"In the Universe"')," song. The visuals were developed using Javascript's canvas with the challenge of synchronizing the audio, lyrics and visual effects."),r.a.createElement(Ae,{src:"https://www.youtube.com/embed/jMQ0V9Dbbyg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),r.a.createElement(Te,null,r.a.createElement(He,null,r.a.createElement("h2",null," ",r.a.createElement(ee,{href:"http://www.genmagic.org/videojuegos/mates/mathicrunner"},"Mathic Runner")," | 2014"),r.a.createElement("p",null,"Web responsive videogame developed for ",r.a.createElement("i",null,"genmagic.net"),"an educational platform of research and development of interactive applications."))),r.a.createElement(ze,null,r.a.createElement(He,null,r.a.createElement("h2",null,r.a.createElement(ee,{href:"http://genmagic.org/videojuegos/mates/mathicplatformer1"},"Mathic Platformer")," | 2013"),r.a.createElement("p",null,"Web app videogame for a research project that approaches education and gamification."))),r.a.createElement(Te,null,r.a.createElement(He,null,r.a.createElement("h2",null,r.a.createElement(ee,{href:"https://www.youtube.com/playlist?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI"},"Animations")," | Long time ago"),r.a.createElement("p",null," At an early age I spent my time doing animations using ",r.a.createElement("b",null,"Adobe Flash"),".",r.a.createElement(Ae,{src:"https://www.youtube.com/embed/videoseries?list=PLZIKq90MlT8IbjRKOPOjL2AZSRRrWApLI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))},Ae=p.b.iframe(De()),He=p.b.div(Le()),We=p.b.div(Me(),g.tablet(Ie()),"white",w),Te=Object(p.b)(We)(Re(),"white",g.tablet(Ce())),ze=Object(p.b)(We)(Se(),"white",g.tablet(ke(),"white")),Be=p.b.div(Oe(),g.tablet(xe()));function Ve(){var e=Object(o.a)(["\n    display: flex;\n    line-height: 1.5;\n"]);return Ve=function(){return e},e}var Ye=function(){return r.a.createElement(qe,null,r.a.createElement("p",null),r.a.createElement(Pe,null))},qe=p.b.div(Ve());function Ge(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Ge=function(){return e},e}function _e(){var e=Object(o.a)(["\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n    >i {color: ",";}\n    background-color: ",";\n    &:hover{\n        background-color: ",";\n    }\n    &:active{\n        background-color: ",";\n    }\n\n    border-radius: 25px;\n    text-decoration: none; \n    decoration: none; \n\n    margin-top: 1rem;\n    margin-bottom: 0.5rem;\n    width: 7rem;\n    height: 7rem;\n"]);return _e=function(){return e},e}function Fe(){var e=Object(o.a)(["\n    font-style: italic;\n"]);return Fe=function(){return e},e}function Ke(e){var n=e.link,t=e.iconClass,a=e.children;return r.a.createElement(Qe,null,r.a.createElement(Je,{href:n},r.a.createElement("i",{className:t,"aria-hidden":"true"})),r.a.createElement(Ne,{href:n},"  ",a))}var Ne=Object(p.b)(ee)(Fe()),Je=p.b.a(_e(),"white","#2d2d2d","#4e4e4e","#151515"),Qe=p.b.div(Ge());function Ue(){var e=Object(o.a)(["\n\n  "]);return Ue=function(){return e},e}function Ze(){var e=Object(o.a)(["\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  "]);return Ze=function(){return e},e}function Xe(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  ","\n\n\n"]);return Xe=function(){return e},e}function $e(){return r.a.createElement(nn,null,r.a.createElement("p",null,"Let's have a talk!"),r.a.createElement(en,null,r.a.createElement(Ke,{iconClass:"fa fa-envelope-o fa-4x",link:"mailto:romanreypedrero@gmail.com?subject=Your personal website is so cool&body=Hey Rom\xe1n how are you doing?"},"romanreypedrero@gmail.com"),r.a.createElement(Ke,{iconClass:"fa fa-linkedin fa-4x",link:"https://www.linkedin.com/in/roman-rey",target:"_blank"},"linkedin.com/in/roman-rey"),r.a.createElement(Ke,{iconClass:"fa fa-github fa-4x",link:"https://www.github.com/rooom13",target:"_blank",title:"GitHub has no chat but you can see my projects there!"},"github.com/rooom13  ")))}var en=p.b.div(Xe(),g.tablet(Ze())),nn=p.b.div(Ue());function tn(){var e=Object(o.a)(["\n  color: ",";\n"]);return tn=function(){return e},e}function an(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n"]);return an=function(){return e},e}function rn(){var e=Object(o.a)([" \n    margin-top: 12rem;\n  "]);return rn=function(){return e},e}function ln(){var e=Object(o.a)(["\n  margin: 1rem;\n  margin-top: 4rem;\n  ","\n  width: 800px;\n"]);return ln=function(){return e},e}var on=function(e){function n(){return Object(c.a)(this,n),Object(m.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(mn,null,r.a.createElement(A,null),r.a.createElement(un,null,r.a.createElement(cn,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/cv",component:je}),r.a.createElement(b.a,{exact:!0,path:"/portfolio",component:Ye}),r.a.createElement(b.a,{exact:!0,path:"/contact",component:$e}),r.a.createElement(b.a,{component:X}))))))}}]),n}(a.Component),cn=p.b.section(ln(),g.tablet(rn())),un=p.b.div(an()),mn=p.b.div(tn(),"white"),sn=on;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.828afc18.chunk.js.map