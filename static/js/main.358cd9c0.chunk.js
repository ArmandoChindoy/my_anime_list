(this.webpackJsonpmy_anime_list=this.webpackJsonpmy_anime_list||[]).push([[0],{42:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(21),i=t.n(a),s=t(10),o=(t(40),t(15)),l=t(12),d=t.n(l),b=t(20);var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))},u=Object(o.b)("counter/fetchCount",function(){var e=Object(b.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),m=Object(o.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(u.pending,(function(e){e.status="loading"})).addCase(u.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),f=m.actions,h=(f.increment,f.decrement,f.incrementByAmount,m.reducer),O=t(22),x=function(e){return fetch("".concat("https://api.jikan.moe/v3","/search/anime?q=").concat(e)).then((function(e){return e.json()})).catch((function(e){return e}))},p=Object(o.b)("anime/fetchAnimeByQuery",function(){var e=Object(b.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:return t=e.sent,console.log("response",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),g=Object(o.c)({name:"animes",initialState:{animes:{},loading:!1},reducers:{getAnimes:function(e){e.anime={name:"Boku no hero",episodes:120}}},extraReducers:function(e){e.addCase(p.pending,(function(e){e.loading=!0,console.log("pending",e.loading)})).addCase(p.fulfilled,(function(e,n){e.animes=n.payload.results,e.loading=!1}))}}),v=(g.actions.getAnimes,function(e){return e.animes.animes}),w=function(e){return e.animes.loading},y=Object(O.a)(v,(function(e){return function(n){return e.filter((function(e){return e.id===n}))}})),q=g.reducer,N=Object(o.a)({reducer:{counter:h,animes:q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k,z,C,S,_,B,F,L,M,A,I,E,R,J,P=t(17),U=t(3),D=(t(42),t(2)),G=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"loader",children:[Object(D.jsx)("span",{children:"\u2193"}),Object(D.jsx)("span",{className:"arrow",style:{"--delay":"0.1s"},children:"\u2193"}),Object(D.jsx)("span",{className:"arrow",style:{"--delay":"0.3s"},children:"\u2193"}),Object(D.jsx)("span",{className:"arrow",style:{"--delay":"0.4s"},children:"\u2193"}),Object(D.jsx)("span",{className:"arrow",style:{"--delay":"0.5s"},children:"\u2193"})]})})},H=function(){var e=Object(U.f)().id,n=Object(s.c)(y(e));return Object(D.jsx)(D.Fragment,{children:n?Object(D.jsx)(G,{}):Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("div",{className:"col-6",children:Object(D.jsx)("img",{src:"",alt:""})}),Object(D.jsxs)("div",{className:"col-6",children:[Object(D.jsx)("span",{children:n.title}),Object(D.jsx)("span",{children:n.rate}),Object(D.jsx)("span",{children:n.score}),Object(D.jsx)("span",{children:n.start_date}),Object(D.jsx)("p",{children:n.sipnosis})]})]})})})},Q=t(4),W=t(5),Y=Object(W.d)(k||(k=Object(Q.a)(["\nfrom{\n  filter:blur(1); \n  opacity:0; \n}\nto{\n  filter:blur(0);\n  opacity:1;\n}\n"]))),T=(Object(W.d)(z||(z=Object(Q.a)(["\nfrom{\n  filter:blur(0); \n  opacity:1; \n}\nto{\n  filter:blur(1);\n  opacity:0;\n}\n"]))),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.time,t=void 0===n?"1s":n,r=e.type,c=void 0===r?"ease-in":r;return Object(W.b)(C||(C=Object(Q.a)(["\n  animation: "," "," ",";\n"])),Y,t,c)}),$=Object(W.c)(P.b)(S||(S=Object(Q.a)([""]))),K=W.c.div(_||(_=Object(Q.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n"]))),V=W.c.div(B||(B=Object(Q.a)(["\n  position: relative;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  object-fit: cover;\n  background-color: lightblue;\n  border-radius: 2rem;\n  min-height: 15rem;\n  height: 15rem;\n  transition: 1s;\n  &:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"]))),X=W.c.div(F||(F=Object(Q.a)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  & svg {\n    font-size: 1.6rem;\n    color: white;\n    align-self: flex-end;\n    margin: 1rem;\n  }\n"]))),Z=W.c.img(L||(L=Object(Q.a)(["\n  ","\n  width: 100%;\n"])),T()),ee=W.c.button(M||(M=Object(Q.a)(["\n  background-color: rgba(0, 0, 0, 0);\n"]))),ne=W.c.span(A||(A=Object(Q.a)(["\n  color: white;\n  font-weight: 700;\n  font-size: 1.4rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin: 0 auto;\n  padding: 1rem;\n"]))),te=function(e){var n=e.children;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(K,{children:n})})},re=t(11),ce=t(13),ae=t(27),ie=function(e){var n=e.anime,c=(n.url,n.image_url),a=(n.airing,n.end_date,n.episodes,n.mal_id),i=(n.members,n.rated,n.score,n.start_date,n.synopsis,n.title),s=(n.type,function(e,n){var t=Object(r.useState)((function(){try{var t=window.localStorage.getItem(e);return null!==t?JSON.parse(t):n}catch(r){return n}})),c=Object(re.a)(t,2),a=c[0],i=c[1];return[a,function(n){try{window.localStorage.setItem(e,JSON.stringify(n)),i(n)}catch(t){console.log(t)}}]}("like_".concat(a),!1)),o=Object(re.a)(s,2),l=o[0],d=o[1],b=function(){var e=Object(r.useRef)(null),n=Object(r.useState)(!1),c=Object(re.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){Promise.resolve("undefined"!==typeof window.IntersectionObserver?window.IntersectionObserver:t.e(3).then(t.t.bind(null,48,7))).then((function(){var n=new window.IntersectionObserver((function(e){e[0].isIntersecting&&(console.log("si"),i(!0),n.disconnect())}));n.observe(e.current)}))}),[e]),[a,e]}(),j=Object(re.a)(b,2),u=j[0],m=j[1],f=l?ae.a:ae.b;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(V,{ref:m,children:u&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Z,{src:c,alt:"image_url"}),Object(D.jsxs)(X,{children:[Object(D.jsx)($,{to:"/anime/".concat(a),children:Object(D.jsx)(ce.a,{})}),Object(D.jsx)(ne,{children:i}),Object(D.jsx)(ee,{style:{backgroudColor:"rgba(0,0,0,1)",border:"none",position:"absolute",color:"black"},type:"button",onClick:function(){return d(!l)},children:Object(D.jsx)(f,{})})]})]})})})},se=function(){var e=function(){var e=Object(s.c)(w),n=Object(s.b)(),t=Object(s.c)(v);return Object(r.useEffect)(Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(p("One Piece"));case 1:case"end":return e.stop()}}),e)}))),[]),{animes:t,isLoading:e}}(),n=e.animes,t=e.isLoading;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsx)("div",{className:"col text-center",children:t?Object(D.jsx)(G,{}):Object(D.jsx)(te,{children:n.length>1?n.map((function(e){return Object(D.jsx)(ie,{anime:e},e.mal_id)})):Object(D.jsx)("span",{children:"No result"})})})})})})},oe=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("footer",{className:"bg-light text-center text-white",children:[Object(D.jsx)("div",{className:"container p-4 pb-0",children:Object(D.jsxs)("section",{className:"mb-4",children:[Object(D.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{backgroundColor:"#3b5998"},href:"https://www.facebook.com/armando.chindoy",role:"button",children:Object(D.jsx)(ce.b,{size:"3rem"})}),Object(D.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{backgroundColor:"#55acee"},href:"https://twitter.com/armandochindoy",role:"button",children:Object(D.jsx)(ce.g,{size:"3rem"})}),Object(D.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{backgroundColor:"#dd4b39"},href:"#!",role:"button",children:Object(D.jsx)(ce.d,{size:"3rem"})}),Object(D.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{backgroundColor:"#ac2bac"},href:"https://www.instagram.com/armandochindoy/",role:"button",children:Object(D.jsx)(ce.e,{size:"3rem"})}),Object(D.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{backgroundColor:"#0082ca"},href:"https://www.linkedin.com/in/armandochindoy/",role:"button",children:Object(D.jsx)(ce.f,{size:"3rem"})}),Object(D.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{backgroundColor:"#333333"},href:"https://github.com/ArmandoChindoy",role:"button",children:Object(D.jsx)(ce.c,{size:"3rem"})})]})}),Object(D.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2020 Copyright:",Object(D.jsx)("a",{className:"text-white",href:"https://mdbootstrap.com/",children:"MDBootstrap.com"})]})]})})},le=t(29),de=W.c.svg(I||(I=Object(Q.a)(["\n  width: 20rem;\n  height: inherit;\n  padding: 0;\n  margin-left: -0.3rem;\n  margin-right: -0.3rem;\n"]))),be=function(e){return Object(D.jsxs)(de,Object(le.a)(Object(le.a)({width:563.04,height:122.4,xmlns:"http://www.w3.org/2000/svg",viewBox:"-31.52 13.8 563.04 122.4",style:{background:"0 0"},preserveAspectRatio:"xMidYMid"},e),{},{children:[Object(D.jsxs)("defs",{children:[Object(D.jsxs)("linearGradient",{id:"prefix__editing-gradow-gradient",x1:0,x2:1,y1:.5,y2:.5,gradientUnits:"objectBoundingBox",children:[Object(D.jsx)("stop",{offset:0,stopColor:"#f0f"}),Object(D.jsx)("stop",{offset:1,stopColor:"#0ff"})]}),Object(D.jsxs)("filter",{id:"prefix__editing-gradow-filter",x:"-100%",y:"-100%",width:"300%",height:"300%",children:[Object(D.jsx)("feFlood",{floodColor:"#fffcd9",result:"flood"}),Object(D.jsx)("feComposite",{operator:"in",in2:"SourceAlpha",in:"flood",result:"shadow"}),Object(D.jsx)("feOffset",{dx:-4,dy:-4,in:"SourceGraphic",result:"offset-1"}),Object(D.jsx)("feOffset",{dx:4,dy:4,in:"shadow",result:"offset-2"}),Object(D.jsxs)("feMerge",{children:[Object(D.jsx)("feMergeNode",{in:"offset-2"}),Object(D.jsx)("feMergeNode",{in:"offset-1"})]})]})]}),Object(D.jsx)("g",{filter:"url(#prefix__editing-gradow-filter)",children:Object(D.jsx)("path",{d:"M6.53 0H-.83l11.58-42.24h13.38l2.94 24.13 11.91-24.13h11.2l1.15 31.62q.25 6.27 3.33 8.19-.71 1.28-2.76 2.49-2.04 1.22-4.76 1.22-2.72 0-4.32-.77t-2.5-2.05q-1.6-2.3-1.6-6.72v-19.77L26.11 0h-7.93L13.7-28.74 6.53 0zm71.23-7.23q-3.33 3.45-9.41 3.45-7.61 0-9.21-5.56-.52-1.67-.52-3.52 0-1.86.39-3.78l3.01-16 12.99-1.28-3.52 18.62q-.13.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.76.99q.77.52 2.15.52 1.37 0 2.56-1.67 1.18-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15Q87.49 3.52 82.62 8.38q-2.49 2.5-5.72 3.49-3.24.99-7.4.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.99-4.13 1.98-1.5 5.05-1.5 2.69 0 4.74 1.15 1.22.7 1.79 1.6-1.47 1.28-1.47 3.39 0 2.82 2.56 2.82 4.22 0 6.66-9.73.7-2.88 1.34-5.95zm47.3 8.51q-8.2 0-8.96-11.65h-11.01q-1.28 2.95-2.18 5.51L101.25 0h-8.96l20.16-42.24h13.76l2.69 31.1q.64 6.72 3.2 8.71-1.86 3.71-7.04 3.71zm-14.47-24.45l-3.52 8.13h8.83l-.76-16.45v-1.73l-4.55 10.05zm52.29 24.45q-7.74 0-7.74-6.02.06-1.66.57-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.17-3.71-3.65 0-5.57 9.53L147.07 0l-12.86 1.28 6.65-33.98 10.5-1.22-1.02 6.27q3-6.27 12.22-6.27 4.48 0 6.37 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.86 2.46.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28zm28.42-4.8q-1.99 4.8-8.32 4.8-3.27 0-5.32-2.24-1.72-1.98-1.72-3.97 0-5.18 2.36-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.48-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.89-1.28-1.89-3.78zm61 42.82q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62L226.82 0l-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.48 0-3.08 2.17-1.6 2.18-2.49 6.66L207.74 0l-12.6 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.66-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31t5.12.74q1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28zm38.78-12.1q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11-4.41 0-7.01-.96-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07t3.75 1.12q2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.92.42-1.88 1.82-2.37 3.2-3.72 10.63zm47.94 7.93q1.22 1.54 1.22 4.52 0 2.97-2.28 4.8-2.27 1.82-6.24 1.82-2.3 0-5.88-.51-7.04-1.09-9.06-1.09-2.02 0-2.85.1-.83.09-2.17.22l7.74-42.24h14.02l-6.4 35.2q.83.13 1.6.13h1.6q5.37 0 8.7-2.95zm20.86 6.34q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.02 1.28-5.02 1.28-3.01 0-4.9-1.28-1.89-1.28-1.89-3.78zm34.05 19.08q.9-2.37.9-4.42 0-3.78-3.08-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.48 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.67-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.7 4.42-1.69 1.6-4.76 1.6-2.12 0-3.14-.7zM374.91-6.4q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.08l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63z",fill:"url(#prefix__editing-gradow-gradient)",transform:"translate(52.054 104.79)"})}),Object(D.jsx)("style",{})]}))},je=W.c.nav(E||(E=Object(Q.a)(["\n  padding: 2rem 2rem;\n  ","\n  ","\n"])),T({time:"1s"}),(function(e){return e.fixed&&Object(W.b)(R||(R=Object(Q.a)(["\n       {\n        position: fixed;\n        background-color: #fff;\n        z-index: 3;\n        top: 1rem;\n        border-radius: 3rem;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        max-width: 80rem;\n      }\n    "])))})),ue=function(){var e=Object(s.b)(),n=Object(r.useState)(""),t=Object(re.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)(!1),o=Object(re.a)(i,2),l=o[0],d=o[1];Object(r.useEffect)((function(){var e=function(e){var n=window.scrollY>100;l!==n&&d(n)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[l]);var b=function(n){n.preventDefault(),e(p(c))},j=function(e){return Object(D.jsx)(je,{fixed:e,children:Object(D.jsx)("div",{className:"container-fluid",children:Object(D.jsxs)("div",{className:"row align-items-baseline",children:[Object(D.jsx)("div",{className:"col-md-3 text-center",children:Object(D.jsx)(P.b,{to:"/",className:"navbar-brand",children:Object(D.jsx)(be,{})})}),Object(D.jsx)("div",{className:"col-md-9",children:Object(D.jsxs)("form",{className:"d-flex",onSubmit:b,children:[Object(D.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:c,onChange:function(e){return a(e.target.value)}}),Object(D.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})]})})})};return Object(D.jsxs)(D.Fragment,{children:[j(),l&&j(!0)]})},me=function(e){var n=e.children;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ue,{}),n,Object(D.jsx)(oe,{})]})},fe=function(){return Object(D.jsx)(P.a,{children:Object(D.jsx)(me,{children:Object(D.jsxs)(U.c,{children:[Object(D.jsx)(U.a,{exact:!0,path:"/",component:se}),Object(D.jsx)(U.a,{exact:!0,path:"/anime/:id",component:H}),Object(D.jsx)(U.a,{component:se})]})})})},he=Object(W.a)(J||(J=Object(Q.a)(["\nhtml {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  *, *:before, *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button: {\n    background: transparent;\n    border: 0;\n    outline: 0;\n  }\n\n  body {\n    background: #fefefe;\n    height: 100vh;\n    margin: 0 auto;\n    /* max-width: 500px; */\n    overscroll-behavior: none;\n    width: 100%;\n  }\n\n  #app {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    overflow-x: hidden;\n    min-height: 100vh;\n    padding-bottom: 10px;\n  }\n"])));i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsxs)(s.a,{store:N,children:[Object(D.jsx)(he,{}),Object(D.jsx)(fe,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.358cd9c0.chunk.js.map