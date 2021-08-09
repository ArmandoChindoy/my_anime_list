(this.webpackJsonpmy_anime_list=this.webpackJsonpmy_anime_list||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),i=(n(27),n(8)),o=(n(31),n(7)),l=n(12),d=n.n(l),b=n(16);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))},j=Object(o.b)("counter/fetchCount",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(o.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.status="loading"})).addCase(j.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),h=m.actions,f=(h.increment,h.decrement,h.incrementByAmount,m.reducer),x=function(e){return fetch("".concat("https://api.jikan.moe/v3","/search/anime?q=").concat(e)).then((function(e){return e.json()})).catch((function(e){return e}))},O=Object(o.b)("anime/fetchAnimeByQuery",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,console.log("response",n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(o.c)({name:"anime",initialState:{anime:{},loading:!1},reducers:{getAnime:function(e){e.anime={name:"Boku no hero",episodes:120}}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.loading=!0,console.log("pending",e.loading)})).addCase(O.fulfilled,(function(e,t){e.anime=t.payload.results,e.loading=!1}))}}),g=(p.actions.getAnime,function(e){return e.anime.anime}),_=function(e){return e.anime.loading},v=p.reducer,y=Object(o.a)({reducer:{counter:f,anime:v}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(21),w=n(2),k=n(9),S=n.n(k),C=n(1),B=function(e){var t=e.children;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:S.a.card__container,children:t})})},F=function(e){var t=e.anime,n=(t.url,t.image_url),a=(t.airing,t.end_date,t.episodes,t.mal_id,t.members,t.rated,t.score,t.start_date,t.synopsis,t.title);t.type;return Object(C.jsxs)("div",{className:S.a.card,children:[Object(C.jsx)("img",{className:S.a.card__img,src:n,alt:"image_url"}),Object(C.jsxs)("div",{className:S.a.card__overlay,children:[Object(C.jsx)("i",{className:"fas fa-play"}),Object(C.jsx)("span",{className:S.a.card__name,children:a})]})]})},A=(n(34),function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"loader",children:[Object(C.jsx)("span",{children:"\u2193"}),Object(C.jsx)("span",{className:"arrow",style:{"--delay":"0.1s"},children:"\u2193"}),Object(C.jsx)("span",{className:"arrow",style:{"--delay":"0.3s"},children:"\u2193"}),Object(C.jsx)("span",{className:"arrow",style:{"--delay":"0.4s"},children:"\u2193"}),Object(C.jsx)("span",{className:"arrow",style:{"--delay":"0.5s"},children:"\u2193"})]})})}),J=function(){var e=Object(i.c)(g),t=Object(i.c)(_);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col text-center",children:t?Object(C.jsx)(A,{}):Object(C.jsx)(B,{children:e.length>1?e.map((function(e){return Object(C.jsx)(F,{anime:e},e.mal_id)})):Object(C.jsx)("span",{children:"No result"})})})})})})},M=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("footer",{className:"bg-light text-center text-white",children:[Object(C.jsx)("div",{className:"container p-4 pb-0",children:Object(C.jsxs)("section",{className:"mb-4",children:[Object(C.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{"background-color":"#3b5998"},href:"#!",role:"button",children:Object(C.jsx)("i",{className:"fab fa-facebook-f"})}),Object(C.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{"background-color":"#55acee"},href:"#!",role:"button",children:Object(C.jsx)("i",{className:"fab fa-twitter"})}),Object(C.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{"background-color":"#dd4b39"},href:"#!",role:"button",children:Object(C.jsx)("i",{className:"fab fa-google"})}),Object(C.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{"background-color":"#ac2bac"},href:"#!",role:"button",children:Object(C.jsx)("i",{className:"fab fa-instagram"})}),Object(C.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{"background-color":"#0082ca"},href:"#!",role:"button",children:Object(C.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(C.jsx)("a",{className:"btn btn-primary btn-floating m-1",style:{"background-color":"#333333"},href:"#!",role:"button",children:Object(C.jsx)("i",{className:"fab fa-github"})})]})}),Object(C.jsxs)("div",{className:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"},children:["\xa9 2020 Copyright:",Object(C.jsx)("a",{className:"text-white",href:"https://mdbootstrap.com/",children:"MDBootstrap.com"})]})]})})},R=n(22),q=function(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(R.a)(t,2),c=n[0],r=n[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(C.jsxs)("div",{className:"container-fluid",children:[Object(C.jsx)("a",{className:"navbar-brand",children:"My anime list"}),Object(C.jsxs)("form",{className:"d-flex",onSubmit:function(t){t.preventDefault(),e(O(c))},children:[Object(C.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return r(e.target.value)}}),Object(C.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})})})},D=function(e){var t=e.children;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(q,{}),t,Object(C.jsx)(M,{})]})},P=function(){return Object(C.jsx)(N.a,{children:Object(C.jsx)(D,{children:Object(C.jsxs)(w.c,{children:[Object(C.jsx)(w.a,{exact:!0,path:"/",component:J}),Object(C.jsx)(w.a,{component:J})]})})})};s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(i.a,{store:y,children:Object(C.jsx)(P,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports={card__container:"cards_card__container__2yPRe",card:"cards_card__1CqLb",card__overlay:"cards_card__overlay__3sx4G",card__img:"cards_card__img__2StJc",card__name:"cards_card__name__3OgZS"}}},[[37,1,2]]]);
//# sourceMappingURL=main.d797d2d9.chunk.js.map