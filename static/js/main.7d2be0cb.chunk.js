(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"nl":[{"level":"Secundair Onderwijs","period":"2014 - 2017","specialization":"Toegepaste Beeldende Kunsten","school":"Secundair Kunstinstituut Gent"},{"level":"Hoger Onderwijs","period":"2018 - 2021","specialization":"Bachelor Grafische en Digitale Media - Multimediaproductie - New Media Development","school":"Arteveldehogeschool"}],"en":[{"level":"Secondary Education","period":"2014 - 2017","specialization":"Applied Visual Arts","school":"Secundair Kunstinstituut Gent"},{"level":"College","period":"2018 - 2021","specialization":"Bachelor Graphic and Digital Media - Multimedia production - New Media Development","school":"Artevelde University of Applied Sciences"}]}')},33:function(e){e.exports=JSON.parse('{"nl":{"languages":{"title":"Talen","list":["Nederlands (moedertaal)","Engels (goed)","Frans (noties)"]},"programmingLanguages":{"title":"Programmeertalen","list":["JavaScript (+ HTML & SCSS)","TypeScript","PHP","C#","Python","SQL"]},"frameworksTools":{"title":"Frameworks & tools","list":["React","Laravel","Git","GitHub","MySQL","MongoDG","Firebase"]},"programs":{"title":"Programma\'s","list":["Visual Studio Code","XD","Illustrator","Photoshop","After Effects & Premiere Pro","Unity"]}},"en":{"languages":{"title":"Languages","list":["Dutch (native)","English (good)","French (basic)"]},"programmingLanguages":{"title":"Programming languages","list":["JavaScript (+ HTML & SCSS)","TypeScript","PHP","C#","Python","SQL"]},"frameworksTools":{"title":"Frameworks & tools","list":["React","Laravel","Git","GitHub","MySQL","MongoDG","Firebase"]},"programs":{"title":"Programs","list":["Visual Studio Code","XD","Illustrator","Photoshop","After Effects & Premiere Pro","Unity"]}}}')},34:function(e){e.exports=JSON.parse('{"nl":["Web development","Game development","Grafische vormgeving","Nieuwe media & toekomstige technologie","Gitaar"],"en":["Web development","Game development","Graphic design","New media & future technology","Guitar"]}')},36:function(e){e.exports=JSON.parse('{"home":"home","work":"work","about":"about","contact":"contact"}')},37:function(e){e.exports=JSON.parse('{"introTyper":"I am Thomas","introParagraph":"... a 21 years old student <span class=\'text__emphasis text__emphasis--primary\'>New Media Development</span> at Artevelde University of Applied Sciences.","aboutIntro":"I am Thomas. A 21 years old student who loves programming and graphic design.","aboutBackgroundTitle":"Background","aboutEducationTitle":"Education","aboutSkillsTitle":"Skills","aboutInterestsTitle":"Interests"}')},38:function(e){e.exports=JSON.parse('{"moreInfo":"More info"}')},39:function(e){e.exports=JSON.parse('{"assignment":"Assignment","client":"Client","learnings":"What I\'ve learned"}')},40:function(e){e.exports=JSON.parse('{"home":"home","work":"werk","about":"over","contact":"contact"}')},41:function(e){e.exports=JSON.parse('{"introTyper":"Ik ben Thomas","introParagraph":"... een 21-jarige student <span class=\'text__emphasis text__emphasis--primary\'>New Media Development</span> aan de Arteveldehogeschool.","aboutIntro":"Ik ben Thomas. Een 21-jarige student die houdt van programmeren en grafische vormgeving.","aboutBackgroundTitle":"Achtergrond","aboutEducationTitle":"Opleiding","aboutSkillsTitle":"Vaardigheden","aboutInterestsTitle":"Interesses"}')},42:function(e){e.exports=JSON.parse('{"moreInfo":"Meer"}')},43:function(e){e.exports=JSON.parse('{"assignment":"Opdracht","client":"Opdrachtgever","learnings":"Wat ik heb geleerd"}')},52:function(e,t,a){e.exports=a(71)},57:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(45),s=a.n(r),c=(a(57),a(13)),l=a(3),o=a(73),u=a(32),m=a(33),d=a(34),h=a(4),p=a.n(h),f=a(6),g=function(e){var t=e.classes;return(i.a.createElement("a",{href:"https://github.com/Thomva",className:p()("link social__link",t)},i.a.createElement(f.d,null)))},_=function(e){var t=e.classes;return(i.a.createElement("a",{href:"https://www.linkedin.com/in/thomva/",className:p()("link social__link",t)},i.a.createElement(f.f,null)))},v=function(){var e=Object(o.a)(),t=e.t,a=e.i18n,n=u[a.language],r=m[a.language],s=d[a.language];return i.a.createElement("div",{className:"page page--centered aboutPage"},i.a.createElement("div",{className:"page__content"},i.a.createElement("h1",{className:"page__title"},t("pages:about")),i.a.createElement("div",{className:"aboutPage__intro"},t("content:aboutIntro")),i.a.createElement("div",{className:"aboutPage__links"},i.a.createElement(g,{classes:"aboutPage__link"}),i.a.createElement(_,{classes:"aboutPage__link"})),i.a.createElement("div",{className:"aboutPage__education education__container"},i.a.createElement("h2",{className:"page__paragraphTitle education__title"},t("content:aboutEducationTitle")),i.a.createElement("ul",{className:"education__list"},n&&n.map((function(e){return i.a.createElement("li",{key:e.specialization,className:"education__item"},i.a.createElement("h3",{className:"education__subTitle"},e.level," ",e.period),i.a.createElement("p",{className:"education__paragraph"},i.a.createElement("span",{className:"education__specialization"},e.specialization),i.a.createElement("br",null),"@ ",e.school))})))),i.a.createElement("div",{className:"aboutPage__skills skills__container"},i.a.createElement("h2",{className:"page__paragraphTitle skills__title"},t("content:aboutSkillsTitle")),r&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"skills__list"},r.programmingLanguages&&i.a.createElement("ul",{className:"skills__programmingLanguages"},i.a.createElement("h3",{className:"skills__subTitle"},r.programmingLanguages.title),r.programmingLanguages.list.map((function(e){return i.a.createElement("li",{className:"skills__skill"},e)})))),i.a.createElement("p",{className:"skills__list"},r.programmingLanguages&&i.a.createElement("ul",{className:"skills__frameworksTools"},i.a.createElement("h3",{className:"skills__subTitle"},r.frameworksTools.title),r.frameworksTools.list.map((function(e){return i.a.createElement("li",{className:"skills__skill"},e)})))),i.a.createElement("p",{className:"skills__list"},r.programs&&i.a.createElement("ul",{className:"skills__programs"},i.a.createElement("h3",{className:"skills__subTitle"},r.programs.title),r.programs.list.map((function(e){return i.a.createElement("li",{className:"skills__skill"},e)})))),i.a.createElement("p",{className:"skills__list"},r.languages&&i.a.createElement("ul",{className:"skills__languages"},i.a.createElement("h3",{className:"skills__subTitle"},r.languages.title),r.languages.list.map((function(e){return i.a.createElement("li",{className:"skills__skill"},e)})))))),i.a.createElement("div",{className:"aboutPage__interests interests__container"},i.a.createElement("h2",{className:"page__paragraphTitle interests__title"},t("content:aboutInterestsTitle")),i.a.createElement("ul",{className:"skill__list"},s&&i.a.createElement("ul",{className:"skills__languages"},s.map((function(e){return i.a.createElement("li",{className:"skills__skill"},e)})))))))},w=function(){return i.a.createElement("div",{className:"page contactPage"})},b=a(1),E=a(49),k=function(e){var t=e.className,a=e.labelOff,r=e.labelOn,s=e.id,c=e.onChange,l=e.defaultValue,o=void 0===l||l,u=Object(n.useState)(o),m=Object(b.a)(u,2),d=m[0],h=m[1],f=Object(n.useState)({}),g=Object(b.a)(f,2),_=g[0],v=g[1],w=Object(n.useRef)(),E=Object(n.useRef)();Object(n.useEffect)((function(){w&&E&&v(d?{width:"".concat(w.current.offsetWidth,"px"),marginLeft:"".concat(E.current.offsetWidth,"px")}:{width:"".concat(E.current.offsetWidth,"px"),marginLeft:"0"})}),[w,E,d]);return Object(n.useEffect)((function(){c&&c(d)}),[d,c]),i.a.createElement("div",{className:p()("input input--switch switch",t)},i.a.createElement("input",{type:"hidden",name:s,id:s,value:d}),i.a.createElement("div",{className:"switch__container",onClick:function(e){h(!d)}},w&&E&&i.a.createElement("div",{className:"switch__handle",style:_}),i.a.createElement("div",{className:p()("switch__label",!d&&"switch__label--active"),ref:E},a),i.a.createElement("div",{className:p()("switch__label",d&&"switch__label--active"),ref:w},r)))},N=a(7),O=a(17),y=a(18),j=function(e,t,a){return e<=t?t:e>=a?a:e},S=function(e,t,a,n,i){return(e-t)*(i-n)/(a-t)+n},x=function(e,t){return Intl.DateTimeFormat(t,{year:"numeric",month:"long"}).format(e)},C=function(){function e(){var t=this;Object(O.a)(this,e),this.caretAnimationDone=!1,this.hasScrolled=!1,this.finishedTyping=!1,this.stopTyperCaretCB=null,this.windowSize={width:window.innerWidth,height:window.innerHeight},this.initialScrollPos=window.addEventListener("resize",(function(){t.windowSize={width:window.innerWidth,height:window.innerHeight},t.onWindowSizeChange&&t.onWindowSizeChange()}))}return Object(y.a)(e,[{key:"setCaret",value:function(e){this.caret=e}},{key:"setStopTyperCaretCB",value:function(e){this.stopTyperCaretCB=e}},{key:"initializeCaretPosition",value:function(){var e=this;if(this.windowSize){this.windowSize.width<1360?setTimeout((function(){e.caret.style.right="".concat(e.windowSize.width/2-50,"px"),e.caret.style.width="100px"}),10):setTimeout((function(){e.caret.style.right="100px",e.caret.style.width="100px"}),10),this.updateCaretPosition();setTimeout((function(){e.caretAnimationDone=!0}),1e3)}}},{key:"updateCaretPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.windowSize&&this.finishedTyping){this.windowSize.height;if(this.windowSize.width<1360){this.caret.style.display="none";var t=this.windowSize.width/2-this.caret.offsetWidth/2;this.caret.style.right="".concat(t,"px"),this.caret.style.position="fixed"}else{this.caret.style.display="initial",this.caret.style.position="fixed";var a=this.windowSize.height/2-this.caret.offsetHeight/2;this.caret.style.top="".concat(a,"px")}if(e)if(this.windowSize.width<1360){var n=this.windowSize.height/2-this.caret.offsetHeight/2,i=this.windowSize.height-150-this.caret.offsetHeight/2,r=e.position+n,s=j(r,n,i);s=S(s,n,i,i,n),this.caret.style.top="".concat(s,"px")}else{var c=this.windowSize.width/2-this.caret.offsetWidth/2,l=j(e.position+100,100,c);(this.caretAnimationDone||this.hasScrolled)&&(this.caret.style.transition="right 200ms ease-out",this.caret.style.right="".concat(l,"px"))}}}},{key:"stopTyperCaret",value:function(){if(this.stopTyperCaretCB&&this.stopTyperCaretCB(),this.windowSize){this.caret.style.width="100px",this.caret.style.height="100px";var e=this.caret.getBoundingClientRect(),t=this.windowSize.width-e.left-9.6;this.caret.style.right="".concat(t,"px"),this.caret.style.top="".concat(e.top,"px"),this.initializeCaretPosition()}}},{key:"onFinishTyping",value:function(){this.finishedTyping||this.caret&&(this.stopTyperCaret(),this.finishedTyping=!0)}},{key:"onWindowSizeChange",value:function(){this.updateCaretPosition()}},{key:"onWheel",value:function(e){this.caret&&(this.initialScrollPos||(this.initialScrollPos=e.position),this.hasScrolled=e.position!==this.initialScrollPos,this.hasScrolled&&!this.finishedTyping&&(console.log(this.hasScrolled,this.finishedTyping),this.onFinishTyping()),this.updateCaretPosition(e))}}]),e}(),P=a(51),T=function(e){var t=e.component,a=e.layout,n=Object(P.a)(e,["component","layout"]);return(i.a.createElement(l.b,Object.assign({},n,{render:function(e){return function(e,t,a){return t?i.a.createElement(t,a,i.a.createElement(e,a)):i.a.createElement(e,a)}(t,a,e)}})))},L=a(25),D=a(21),z=a(36),I=a(37),W=a(38),A=a(39),B=a(40),M=a(41),R=a(42),H=a(43),G=Object(n.createContext)(),F=function(e){var t=e.children,a={en:{pages:z,content:I,general:W,work:A},nl:{pages:B,content:M,general:R,work:H}};L.a.use(D.e).init({resources:a,lng:"nl",fallbackLng:["nl","en","dev"],keySeparator:!1,interpolation:{escapeValue:!1}});var n={setLocale:function(e){L.a.changeLanguage(e)},i18n:L.a};return i.a.createElement(G.Provider,{value:n},t)},J=a(24),U=a(2),V=a.n(U),K=a(8),Q=a(14),Y=(a(68),{apiKey:"AIzaSyDBxtLU8nK0vH0AAYimj2bdmkGi9ROARj8",authDomain:"portfolio-thomva.firebaseapp.com",databaseURL:"https://portfolio-thomva.firebaseio.com",projectId:"portfolio-thomva",storageBucket:"portfolio-thomva.appspot.com",messagingSenderId:"269264548989"}),X=function(){function e(){Object(O.a)(this,e),Q.apps.length||Q.initializeApp(Y),this.firestoreDB=Q.firestore()}return Object(y.a)(e,[{key:"getCollection",value:function(){var e=Object(K.a)(V.a.mark((function e(t){var a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firestoreDB.collection(t).get();case 2:return a=e.sent,e.abrupt("return",a.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),$=(a(72),function(){function e(){Object(O.a)(this,e),Q.apps.length||Q.initializeApp(Y),this.firestoreStorage=Q.storage()}return Object(y.a)(e,[{key:"getCollection",value:function(){var e=Object(K.a)(V.a.mark((function e(t,a){var n,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firestoreStorage.ref("".concat(t,"/").concat(a)).listAll();case 2:return n=e.sent,e.next=5,Promise.all(n.items.map(function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N.a,e.t1=N.a,e.t2={},e.next=5,t.getMetadata();case 5:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.t5={},e.next=10,t.getDownloadURL();case 10:return e.t6=e.sent,e.t7={src:e.t6},e.abrupt("return",(0,e.t0)(e.t4,e.t5,e.t7));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),q=Object(n.createContext)(),Z=function(){return Object(n.useContext)(q)},ee=function(e){var t=e.children,a=Object(n.useState)(),r=Object(b.a)(a,2),s=r[0],c=r[1],l=Object(n.useState)(),o=Object(b.a)(l,2),u=o[0],m=o[1],d=Object(n.useState)(!1),h=Object(b.a)(d,2),p=h[0],f=h[1],g=Object(n.useState)([]),_=Object(b.a)(g,2),v=_[0],w=_[1],E=Object(n.useState)({}),k=Object(b.a)(E,2),O=k[0],y=k[1],j=function(){var e=Object(K.a)(V.a.mark((function e(){var t,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new X,a=new $,c(t),m(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(K.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getCollection("work");case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){j()}),[]),Object(n.useEffect)((function(){s&&S()}),[s]),Object(n.useEffect)((function(){s&&u&&v.length>0&&f(!0)}),[s,u,v]);var x=function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(K.a)(V.a.mark((function e(a,n){var i,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return",n("Firebase Storage not yet loaded."));case 2:return e.next=4,u.getCollection("work",t);case 4:return i=e.sent,r={media:i},y((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(J.a)({},t,r))})),e.abrupt("return",a(r));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={getAllWork:function(){return v},getWorkById:function(e){return v.find((function(t){return t.id===e}))},getWorkMediaById:function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(K.a)(V.a.mark((function e(a,n){var i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O||!O[t]){e.next=2;break}return e.abrupt("return",a(O[t]));case 2:return e.prev=2,e.next=5,x(t);case 5:return i=e.sent,e.abrupt("return",a(i));case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",n(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),isStorageLoaded:p};return i.a.createElement(q.Provider,{value:C},t)},te=Object(n.createContext)(),ae=function(e){var t=e.children,a=Z().getAllWork,r=Object(n.useState)(),s=Object(b.a)(r,2),c=s[0],l=s[1];Object(n.useEffect)((function(){l(a())}),[a]);var o={allWork:c};return(i.a.createElement(te.Provider,{value:o},t))},ne=Object(n.createContext)(),ie=function(){return Object(n.useContext)(ne)},re=function(e){var t=e.children,a=Object(n.useState)(),r=Object(b.a)(a,2),s=r[0],c=r[1],l=function(){c({height:window.innerHeight,width:window.innerWidth})};Object(n.useEffect)((function(){l();var e=window.addEventListener("resize",(function(){l()}));return function(){return window.removeEventListener("resize",e)}}),[]);var o={windowSize:s};return(i.a.createElement(ne.Provider,{value:o},t))},se=i.a.forwardRef((function(e,t){var a=e.children,r=e.classes,s=e.scrollSpeed,c=void 0===s?1:s,l=e.onWheel,o=e.onLoad,u=Object(n.useRef)(null),m=Object(n.useState)(0),d=Object(b.a)(m,2),h=d[0],f=d[1],g=Object(n.useState)({position:"absolute"}),_=Object(b.a)(g,2),v=_[0],w=_[1],E=Object(n.useState)(1e3),k=Object(b.a)(E,2),O=k[0],y=k[1],S=ie().windowSize,x=Object(n.useCallback)((function(e){f(window.scrollY)}),[l]);Object(n.useEffect)((function(){if(window){var e=window.addEventListener("scroll",x);return function(){return window.removeEventListener("scroll",e)}}}),[window]);var C=Object(n.useCallback)((function(){S&&(t.current.style.height="".concat(u.current.getBoundingClientRect().height+S.height,"px"))}),[u,t,S]),P=Object(n.useCallback)((function(){if(S){if(S.width<1360)return w((function(e){return Object(N.a)(Object(N.a)({},e),{},{left:0})})),C(),t.current.style.height="".concat(u.current.getBoundingClientRect().height,"px"),void y(t.current.getBoundingClientRect().height-S.height);t.current.style.width="".concat(u.current.getBoundingClientRect().width,"px"),y(t.current.getBoundingClientRect().width)}}),[u,t,S,C]);Object(n.useEffect)((function(){S&&(l&&l({position:h,min:0,max:O}),S.width<1360||w((function(e){return Object(N.a)(Object(N.a)({},e),{},{left:-h})})))}),[h,O,l]),Object(n.useEffect)((function(){P()}),[u,t,P]);var T=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deltaY:0};if(S)if(S.width<1360);else{var t=c*e.deltaY;f((function(e){return j(e+t,0,O)}))}}),[O,c,S]);Object(n.useEffect)((function(){T()}),[O,T]);return i.a.createElement("div",{className:p()("horizontalScroll",r),onWheel:T,ref:t},i.a.createElement("div",{className:"horizontalScroll__content",ref:u,style:v,onLoad:function(){P(),o&&o()}},a))})),ce=function(e){var t=e.mediaList,a=e.className,r=Object(n.useState)(),s=Object(b.a)(r,2),c=s[0],l=s[1];return i.a.createElement("div",{className:p()("mediaList",a)},Array.isArray(t)&&t.map((function(e){return e.src&&i.a.createElement("div",{key:e.src,className:"mediaList__element",onClick:function(){return l(e)}},i.a.createElement("img",{src:e.src,alt:e.title}),i.a.createElement("div",{className:"mediaList__elementTitle"},e.title))})),c&&c.src&&i.a.createElement("div",{className:"mediaList__display"},i.a.createElement("div",{className:"mediaList__displayContent"},i.a.createElement(f.g,{className:"mediaList__icon mediaList__icon--close",onClick:function(){return l(null)}}),i.a.createElement("div",{className:"mediaList__displayTitle"},c.title),i.a.createElement("img",{src:c.src,alt:c.title}),i.a.createElement("div",{className:"mediaNav"},i.a.createElement(f.b,{className:"mediaNav__arrow mediaNav__arrow--prev",onClick:function(){var e=t.indexOf(c)-1;e<0||l(t[e])}}),Array.isArray(t)&&t.map((function(e){return i.a.createElement("div",{key:"".concat(e.src,"-display"),className:p()("mediaNav__link",e.src===c.src&&"mediaNav__link--selected"),onClick:function(){return l(e)}})})),i.a.createElement(f.c,{className:"mediaNav__arrow mediaNav__arrow--next",onClick:function(){var e=t.indexOf(c)+1;e>=t.length||l(t[e])}})))))},le=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(l.g)().pathname,u=Object(o.a)().t,m=[{route:"/",text:u("pages:home")},{route:"/about",text:u("pages:about")},{route:"/work",text:u("pages:work")}],d=function(){r(!1)};return i.a.createElement("aside",{className:"menu"},i.a.createElement("div",{className:p()("menu__icon",!a&&"menu__icon--closed"),onClick:function(){r((function(e){return!e}))}},a?i.a.createElement(f.g,null):i.a.createElement(f.a,null)),i.a.createElement("div",{className:p()("menu__content",!a&&"menu__content--closed")},i.a.createElement("div",{className:"menu__navigation"},m&&m.map((function(e){return i.a.createElement(c.b,{to:e.route,key:e.route,className:p()("navLink","menu__navLink",e.route===s&&"menu__navLink--selected"),onClick:d},e.text)}))),i.a.createElement("div",{className:"menu__links"},i.a.createElement(g,{classes:"menu__link"}),i.a.createElement(_,{classes:"menu__link"}))))},oe=function(e){var t=e.classes,a=e.data,r=e.globalInfo,s=Object(o.a)(),l=s.t,u=s.i18n,m=Object(n.useState)(),d=Object(b.a)(m,2),h=d[0],g=d[1],_=a.media,v=u.language;return Object(n.useEffect)((function(){if(a&&a.date){var e=new Date(1e3*a.date.seconds);e=x(e,v),g(e)}}),[a,v]),i.a.createElement("div",{className:p()("showcase",t)},i.a.createElement("img",{src:_&&_.main,alt:a&&a.name,className:"showcase__image"}),i.a.createElement("div",{className:"showcase__index"},r.index+1," / ",r.total),i.a.createElement("div",{className:"showcase__infoContainer"},i.a.createElement("div",{className:"showcase__info"},i.a.createElement("h2",{className:"showcase__name"},a.name||""),i.a.createElement("h3",{className:"showcase__type"},a.type?a.type[v]:""),i.a.createElement("div",{className:"showcase__synopsis"},a.synopsis?a.synopsis[v]:""),i.a.createElement("div",{className:"showcase__date"},h)),i.a.createElement("div",{className:"showcase__actions"},i.a.createElement("div",{className:"showcase__links"},a.links&&i.a.createElement(i.a.Fragment,null,a.links.github&&i.a.createElement("a",{href:a.links.github,className:"link showcase__link",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.d,null)),a.links.demo&&i.a.createElement("a",{href:a.links.demo,className:"link showcase__link",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.e,null)))),i.a.createElement(c.b,{to:"/work-detail/:id".replace(":id",a.id),className:"button showcase__moreInfo"},l("general:moreInfo")))))},ue=function(){var e=Object(n.useContext)(te).allWork;return(i.a.createElement("div",{className:"showcaseGroup"},e&&e.map((function(t,a){return i.a.createElement(oe,{key:t.id,data:t,globalInfo:{index:a,total:e.length}})}))))},me=function(e){var t=e.classes,a=e.size,n=e.tileName,r=e.tileImageURL,s=e.id;return(i.a.createElement(c.b,{to:"/work-detail/:id".replace(":id",s),className:p()("tile",a&&"tile--".concat(a),t)},i.a.createElement("div",{className:"tile__title"},n),i.a.createElement("img",{className:"tile__image",src:r,alt:n})))},de=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!0),c=Object(b.a)(s,2),l=c[0],u=c[1],m=ie().windowSize,d=Object(o.a)().t,h=Object(n.useState)(!1),f=Object(b.a)(h,2),g=f[0],_=f[1],v=Object(n.useRef)(null),w=Object(n.useRef)(null),k=Object(n.useRef)(null),N=Object(n.useRef)(null),O=Object(n.useState)(),y=Object(b.a)(O,2),x=y[0],P=y[1];Object(n.useEffect)((function(){P(new C)}),[]),Object(n.useEffect)((function(){v&&v.current&&x&&(x.setCaret(v.current),x.setStopTyperCaretCB((function(){r(!1),u(!0),_(!0)})))}),[v,x]);var T=Object(n.useCallback)((function(){x&&x.onFinishTyping()}),[x]),L=Object(n.useCallback)((function(){if(m)if(m.width<1360){if(N&&N.current){var e=N.current.clientHeight;w.current.style.height="calc(".concat(e,"px - 140vh)"),w.current.style.width="10px",k.current.style.width="100%"}}else w.current.style.width="calc(100% - (100vw - 150px) + 50vw)",w.current.style.height="10px",k.current.style.height="100%"}),[m,N]);Object(n.useEffect)(L,[m]);return i.a.createElement("div",{className:"page homePage"},i.a.createElement(se,{onWheel:function(e){x&&(x.onWheel(e),function(e){if(m){var t=v.current;if(m.width<1360){var a=w.current.offsetHeight,n=m.height/2-150,i=e.position-n+t.offsetHeight/2,r=e.max-m.height/2+150,s=S(i,e.min,r,0,a);s-=t.offsetHeight,s=j(s,0,a),k.current.style.height="".concat(s,"px")}else{var c=w.current.offsetWidth,l=m.width/2-150,o=e.position-l+t.offsetWidth/2,u=S(o,e.min,e.max-m.width/2+150,0,c);u-=t.offsetWidth/2,u=j(u,0,c),k.current.style.width="".concat(u,"px")}}}(e))},ref:N,onLoad:L},i.a.createElement("div",{className:"homePage__introContainer"},i.a.createElement("div",{className:"homePage__introText"},i.a.createElement(E.a,{text:d("content:introTyper"),classes:"introTyper",blink:a,onFinish:T,showCaret:l,getCaretRef:function(e){return v=e},useDefaultStyle:!1}),i.a.createElement("p",{className:p()("homePage__introParagraph",!g&&"homePage__introParagraph--hide"),dangerouslySetInnerHTML:{__html:d("content:introParagraph")}}))),i.a.createElement(ue,null),i.a.createElement("div",{className:"homePage__outroContainer"}),i.a.createElement("div",{className:"scrollTrack",ref:w},i.a.createElement("div",{className:"scrollTrack__fill",ref:k}))))},he=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Z(),c=s.isStorageLoaded,u=s.getWorkById,m=s.getWorkMediaById,d=Object(l.h)().id,h=Object(o.a)(),p=h.t,g=h.i18n.language,_=Object(n.useState)(),v=Object(b.a)(_,2),w=v[0],E=v[1],k=Object(n.useCallback)((function(){d&&Object(K.a)(V.a.mark((function e(){var t,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u(d);case 4:return t=e.sent,e.next=7,m(d);case 7:a=(a=e.sent).media.map((function(e){var t=e.name.split(".")[0];return{src:e.src,title:t}})),r(Object(N.a)(Object(N.a)({},t),{},{media:Object(N.a)(Object(N.a)({},t.media),{},{all:a})}));case 10:case"end":return e.stop()}}),e)})))()}),[d,u,m,c]);return Object(n.useEffect)((function(){c&&k()}),[c]),Object(n.useEffect)((function(){if(a&&a.date){var e=new Date(1e3*a.date.seconds);e=x(e,g),E(e)}}),[a,g]),a?i.a.createElement("div",{className:"page page--centered workDetailPage"},i.a.createElement("h1",{className:"page__title workDetailPage__title"},a.name),i.a.createElement("h3",{className:"workDetailPage__type"},a.type&&a.type[g]),i.a.createElement("div",{className:"workDetailPage__tagContainer"},a.tags&&a.tags.map((function(e){return i.a.createElement("div",{key:e,className:"workDetailPage__tag"},e)}))),i.a.createElement("div",{className:"workDetailPage__intro"},i.a.createElement("img",{src:a.media&&a.media.main,alt:a.name,className:"workDetailPage__image"}),i.a.createElement("div",{className:"workDetailPage__descriptionContainer"},i.a.createElement("div",{className:"workDetailPage__introText"},i.a.createElement("p",{className:"workDetailPage__description",dangerouslySetInnerHTML:{__html:a.description&&a.description[g]}}),i.a.createElement("div",{className:"workDetailPage__date"},w)),i.a.createElement("div",{className:"workDetailPage__links"},a.links&&i.a.createElement(i.a.Fragment,null,a.links.github&&i.a.createElement("a",{href:a.links.github,className:"link showcase__link",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.d,null)),a.links.demo&&i.a.createElement("a",{href:a.links.demo,className:"link showcase__link",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.e,null)))))),i.a.createElement("div",{className:"page__content workDetailPage__content"},a.assignment&&i.a.createElement("div",{className:"workDetailPage__dataElement"},i.a.createElement("h3",{className:"workDetailPage__dataTitle"},p("work:assignment")),i.a.createElement("p",{className:"workDetailPage__dataContent",dangerouslySetInnerHTML:{__html:a.assignment[g]}})),a.client&&i.a.createElement("div",{className:"workDetailPage__dataElement"},i.a.createElement("h3",{className:"workDetailPage__dataTitle"},p("work:client")),a.client[g]),a.learnings&&i.a.createElement("div",{className:"workDetailPage__dataElement"},i.a.createElement("h3",{className:"workDetailPage__dataTitle"},p("work:learnings")),a.learnings[g]),a.media&&Array.isArray(a.media.all)&&i.a.createElement(ce,{className:"workDetailPage__mediaContainer",mediaList:a.media.all}))):i.a.createElement(i.a.Fragment,null)},pe=function(){var e=Z().getAllWork,t=Object(o.a)().t,a=[],n=[];return e().forEach((function(e){"0"!==e.id?a.push(e):n.push(e)})),i.a.createElement("div",{className:"page page--centered workPage"},i.a.createElement("h1",{className:"page__title"},t("pages:work")),i.a.createElement("div",{className:"page__content page__content--large"},i.a.createElement("div",{className:"tileContainer workPage__tileContainer"},e()&&e().map((function(e){return i.a.createElement(me,{key:e.id,classes:"workPage__tile",size:n.includes(e)&&"2x1",tileImageURL:e.media.main,tileName:e.name,id:e.id})})))))},fe=function(e){var t=e.children,a=Object(n.useContext)(G),r=a.setLocale,s=a.i18n;return i.a.createElement("div",{className:"layout baseLayout"},i.a.createElement(le,null),i.a.createElement(k,{labelOff:"NL",labelOn:"EN",defaultValue:"en"===s.language,onChange:function(e){return r(e?"en":"nl")},className:"langSelector"}),t)};var ge=function(){return i.a.createElement("div",{className:"app overlayTexture"},i.a.createElement(re,null,i.a.createElement(ee,null,i.a.createElement(F,null,i.a.createElement(ae,null,i.a.createElement(c.a,{basename:"/"},i.a.createElement(l.d,null,i.a.createElement(T,{exact:!0,path:"/",component:de,layout:fe}),i.a.createElement(l.a,{from:"/home",to:"/"}),i.a.createElement(T,{exact:!0,path:"/about",component:v,layout:fe}),i.a.createElement(T,{exact:!0,path:"/work",component:pe,layout:fe}),i.a.createElement(T,{exact:!0,path:"/contact",component:w,layout:fe}),i.a.createElement(T,{exact:!0,path:"/work-detail/:id",component:he,layout:fe}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.7d2be0cb.chunk.js.map