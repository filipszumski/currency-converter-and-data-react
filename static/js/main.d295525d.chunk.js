(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{37:function(e,n,t){e.exports=t.p+"static/media/dollar-5360047_1920.60d3c8b2.jpg"},38:function(e,n,t){e.exports=t(65)},65:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(31),o=t.n(c),l=t(1),u=t(14),i=t(3),s=t(2);function m(){var e=Object(s.a)(["\n&.active {\n    font-weight: bold;\n}\ncolor: ",";\ntext-decoration: none;\n"]);return m=function(){return e},e}function f(){var e=Object(s.a)(["\nmargin: 20px 10px 20px 10px;\n"]);return f=function(){return e},e}function d(){var e=Object(s.a)(["\ndisplay: flex;\njustify-content: center;\nmargin: 0;\npadding: 0;\nlist-style-type: none;\n"]);return d=function(){return e},e}function p(){var e=Object(s.a)(["\nflex: 1 0 100%;\nbackground-color: ",";\n"]);return p=function(){return e},e}var b=l.d.nav(p(),(function(e){return e.theme.colors.buttonBackground})),g=l.d.ul(d()),E=l.d.li(f()),v=Object(l.d)(u.b).attrs((function(){return{activeClassName:"active"}}))(m(),(function(e){return e.theme.colors.background})),x=function(){return a.a.createElement(b,null,a.a.createElement(g,null,a.a.createElement(E,null,a.a.createElement(v,{to:"/converter"},"Kalkulator walut")),a.a.createElement(E,null,a.a.createElement(v,{to:"/latest-rates"},"Ostatnie stawki")),a.a.createElement(E,null,a.a.createElement(v,{to:"/chart"},"Ostatnie 30 dni")),a.a.createElement(E,null,a.a.createElement(v,{to:"/top-rates"},"TOP 5"))))},h=t(8);function j(){var e=Object(s.a)(["\n    flex: 0 0 300px;\n\n    @media (max-width: ","px) {\n        flex: 0 1 auto;\n    }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n    flex: 1;\n    background-color: ",";\n    border-radius: 5px;\n    color: ",";\n    padding: 8px;\n    border: none;\n    transition: filter 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return O=function(){return e},e}function w(){var e=Object(s.a)(["\n    flex: 0 1 100%;\n    border-radius: 10px;\n    border: 1px solid teal;\n    padding: 8px;\n"]);return w=function(){return e},e}function y(){var e=Object(s.a)(["\n    flex: 1 0 100%;\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n            flex-wrap: wrap;\n        }\n    "]);return y=function(){return e},e}function k(){var e=Object(s.a)(["\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        font-size: 28px;\n        color: ",";\n    "]);return k=function(){return e},e}function z(){var e=Object(s.a)(["\n        text-align: center;\n        display: inline;\n        color: ",";\n        font-size: 18px;\n    "]);return z=function(){return e},e}function S(){var e=Object(s.a)(["\n        text-align: center;\n        display: inline;\n        color: ",";\n        font-size: 18px;\n    "]);return S=function(){return e},e}function T(){var e=Object(s.a)(["\n        color: ",";\n        font-size: 14px;\n        text-align: center;\n        justify-content: center;\n    "]);return T=function(){return e},e}function C(){var e=Object(s.a)(["\n    display: flex;\n    margin: 0px;\n\n    ","\n\n    ","\n\n    ","\n    \n    ","\n"]);return C=function(){return e},e}function F(){var e=Object(s.a)(["\n    display: grid;\n    grid-auto-columns: 1fr;\n    grid-gap: 20px;\n"]);return F=function(){return e},e}var B=l.d.form(F()),P=l.d.p(C(),(function(e){return e.info&&Object(l.c)(T(),(function(e){return e.theme.colors.info}))}),(function(e){return e.loadingState&&Object(l.c)(S(),(function(e){return e.theme.colors.info}))}),(function(e){return e.errorState&&Object(l.c)(z(),(function(e){return e.theme.colors.error}))}),(function(e){return e.styledResult&&Object(l.c)(k(),(function(e){return e.theme.colors.result}))})),R=l.d.label(y(),(function(e){return e.theme.breakpoints.mobile})),W=l.d.input(w()),A=l.d.button(O(),(function(e){return e.theme.colors.buttonBackground}),(function(e){return e.theme.colors.buttonText})),D=l.d.span(j(),(function(e){return e.theme.breakpoints.mobile})),L=function(e){var n=e.result;return a.a.createElement(P,{styledResult:!0},!!n&&a.a.createElement(a.a.Fragment,null,n.amountPossessed.toFixed(2),"\xa0",n.possessedCurrency,"\xa0=\xa0",a.a.createElement("strong",null,n.amountRecived.toFixed(2),"\xa0",n.wantedCurrency)))};function K(){var e=Object(s.a)(["\n    font-family: ",";\n    font-size: 14px;\n    margin: 0;\n    text-align: end;\n"]);return K=function(){return e},e}var N=l.d.p(K(),(function(e){return e.theme.fonts.clockFont})),I=function(){var e=function(){var e=Object(r.useState)(new Date),n=Object(h.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return a.a.createElement(N,null,"Dzi\u015b jest"," ",function(e){return e.toLocaleString(void 0,{year:"numeric",month:"long",weekday:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}(e))};function J(){var e=Object(s.a)(["\n    flex: 0 1 800px;\n    font-size: 18px;\n    background-color: ",";\n    padding: 40px;\n    border-radius: 50px;\n    box-shadow: 0px 0px 8px 1px;\n    opacity: 0.90;\n    margin: 20px;\n"]);return J=function(){return e},e}var M=l.d.div(J(),(function(e){return e.theme.colors.background})),_=function(e){var n=e.children;return a.a.createElement(M,null,a.a.createElement(I,null),n)};function U(){var e=Object(s.a)(["\n    text-align: center;\n    color: ",";\n    font-size: 40px;\n"]);return U=function(){return e},e}var q=l.d.h1(U(),(function(e){return e.theme.colors.title})),G=function(e){var n=e.title;return a.a.createElement(q,null,n)},Y=t(19),$=t.n(Y),H=t(35),Q=t(36),V=t.n(Q),X=function(){var e=function(){var e=Object(r.useState)({state:"loading"}),n=Object(h.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){setTimeout(function(){var e=Object(H.a)($.a.mark((function e(){var n,t,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("https://api.exchangeratesapi.io/latest?base=PLN");case 3:return n=e.sent,e.next=6,n.data;case 6:t=e.sent,r=t.rates,c=t.date,a({rates:r,date:c,state:"success"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),a({state:"failure"});case 16:case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),1e3)}),[]),[t.rates,t.date,t.state]}(),n=Object(h.a)(e,3),t=n[0],c=n[1],o=n[2],l=Object(r.useState)("PLN"),u=Object(h.a)(l,2),i=u[0],s=u[1],m=Object(r.useState)("EUR"),f=Object(h.a)(m,2),d=f[0],p=f[1],b=Object(r.useState)(""),g=Object(h.a)(b,2),E=g[0],v=g[1],x=Object(r.useState)(),j=Object(h.a)(x,2),O=j[0],w=j[1],y=Object(r.useRef)(null);return a.a.createElement(_,null,a.a.createElement(G,{title:"Kalkulator walut"}),a.a.createElement(B,{action:"",method:"GET",onSubmit:function(e){e.preventDefault(),function(){var e=t[i],n=t[d];w({amountPossessed:+E,amountRecived:E*n/e,possessedCurrency:i,wantedCurrency:d})}(),v(""),y.current.focus()}},"loading"===o?a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{loadingState:!0},"Trwa pobieranie kurs\xf3w walut z \xa0",a.a.createElement("strong",null,"Europejskiego Banku Centralnego...",a.a.createElement("span",{role:"img","aria-label":"smiling face with sunglasses"},"\ud83d\ude0e")))):"failure"===o?a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{errorState:!0},"Upps...Co\u015b posz\u0142o nie tak. Sprawd\u017a, czy masz po\u0142\u0105czenie z internetem.\xa0 Je\u015bli masz, to wygl\u0105da na to, \u017ce to nasz wina. Mo\u017ce spr\xf3buj p\xf3\u017aniej ? ",a.a.createElement("span",{role:"img","aria-label":"smiling face with smiling eyes"},"\ud83d\ude0a"))):"success"===o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(R,null,a.a.createElement(D,{className:"form__labelText"},"Wymieniasz z (wybierz walut\u0119):"),a.a.createElement(W,{as:"select",placeholder:"Wybierz walut\u0119...",value:i,onChange:function(e){return s(e.target.value)}},Object.keys(t).map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))),a.a.createElement(P,null,a.a.createElement(R,null,a.a.createElement(D,null,"Kwota:"),a.a.createElement(W,{ref:y,type:"number",name:"amount",step:"0.01",placeholder:"Wpisz kwot\u0119",min:"0",required:!0,value:E,onChange:function(e){return v(e.target.value)}}))),a.a.createElement(P,null,a.a.createElement(R,null,a.a.createElement(D,null,"Wymieniasz na (wybierz walut\u0119):"),a.a.createElement(W,{as:"select",value:d,onChange:function(e){return p(e.target.value)}},Object.keys(t).map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))),a.a.createElement(P,null,a.a.createElement(A,null,"Przelicz")),a.a.createElement(P,{info:!0},"Kursy walut pobierane s\u0105 z Europejskiego Banku Centralnego.",a.a.createElement("br",null),"Aktualne na dzie\u0144: ",c),a.a.createElement(L,{result:O}))))},Z=function(){return a.a.createElement(_,null,a.a.createElement(G,{title:"Ostatnie stawki"}),"LATEST RATES")},ee=function(){return a.a.createElement(_,null,a.a.createElement(G,{title:"Ostatnie stawki"}),"TOP 5")},ne=function(){return a.a.createElement(_,null,a.a.createElement(G,{title:"Ostatnie 30 dni"}),"LAST 30 DAYS")};var te=function(){return a.a.createElement(u.a,{basename:"currency-converter-react"},a.a.createElement(x,null),a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/converter"},a.a.createElement(X,null)),a.a.createElement(i.b,{path:"/latest-rates"},a.a.createElement(Z,null)),a.a.createElement(i.b,{path:"/chart"},a.a.createElement(ne,null)),a.a.createElement(i.b,{path:"/top-rates"},a.a.createElement(ee,null)),a.a.createElement(i.b,null,a.a.createElement(i.a,{to:"/converter"}))))},re=t(37),ae=t.n(re);function ce(){var e=Object(s.a)(['\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    #root {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: center;\n    min-height: 100vh;\n    background-image: url("','");\n    background-size: cover;\n    background-position: center;\n    font-family: ',"\n    }\n"]);return ce=function(){return e},e}var oe=Object(l.b)(ce(),ae.a,(function(e){return e.theme.fonts.primaryFont}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{theme:{colors:{background:"white",buttonBackground:"teal",buttonText:"white",title:"teal",info:"rgb(107, 107, 107)",result:"teal",error:"crimson"},breakpoints:{mobile:767},fonts:{primaryFont:"'Montserrat', sans-serif;",clockFont:"monospace;"}}},a.a.createElement(oe,null),a.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.d295525d.chunk.js.map