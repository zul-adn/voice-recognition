(this["webpackJsonpvoice-recognation"]=this["webpackJsonpvoice-recognation"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(5),o=n.n(s),a=(n(10),n(3)),r=(n.p,n(11),n(4)),l=n(1);var u=function(){var e=i.a.useState(!1),t=Object(a.a)(e,2),n=(t[0],t[1]),c=i.a.useState(""),s=Object(a.a)(c,2),o=(s[0],s[1]),u=new(window.speechRecognition||window.webkitSpeechRecognition);u.onstart=function(){console.log("Voice is activated"),n(!0)},u.onresult=function(e){var t=e.resultIndex,c=e.results[t][0].transcript;o(c),d(c),n(!1)};var d=function(e){var t=new SpeechSynthesisUtterance;t.text=e,t.volume=1,t.rate=1,t.pitch=1,window.speechSynthesis.speak(t)};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"chat-box",children:"akaka"}),Object(l.jsxs)("div",{className:"text-box",children:[Object(l.jsx)("div",{className:"rec-container",children:Object(l.jsx)(r.a,{size:25,color:"red",onClick:function(){u.start()}})}),Object(l.jsx)("div",{className:"input-container",children:Object(l.jsx)("input",{type:"text",placeholder:"Input your message here"})}),Object(l.jsx)("div",{className:"button-container",children:Object(l.jsx)("button",{children:Object(l.jsx)(r.b,{size:15,color:"white"})})})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),d()}},[[13,1,2]]]);
//# sourceMappingURL=main.5f61dbd4.chunk.js.map