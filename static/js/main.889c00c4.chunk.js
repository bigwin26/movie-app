(this.webpackJsonpdsflix=this.webpackJsonpdsflix||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},47:function(e,t,n){e.exports=n.p+"static/media/loading.3d035a55.gif"},53:function(e,t,n){e.exports=n(89)},88:function(e,t,n){e.exports=n.p+"static/media/youtube_icon.8a6f52a2.png"},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(44),l=n.n(i),c=n(13),u=n(4),o=n.n(u),s=n(8),p=n(3),m=n(2),d=n(1),f=n(10),g=n.n(f);function b(){var e=Object(m.a)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 20px;\n  text-align: center;\n  /*   img {\n    width: 150px;\n    height: 150px;\n  }\n  span {\n    margin-top: 10px;\n    display: inline-block;\n  } */\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n  font-size: 14px;\n  font-weight: bold;\n"]);return v=function(){return e},e}function h(){var e=Object(m.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n  :first-child {\n    margin-top: 15px;\n  }\n"]);return h=function(){return e},e}var x=d.default.div(h()),E=d.default.span(v()),j=d.default.div(b()),O=function(e){var t=e.title,n=e.children;return r.a.createElement(x,null,r.a.createElement(E,null,t),r.a.createElement(j,null,n))},y=n(47),_=n.n(y);function w(){var e=Object(m.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  img {\n    width: 50px;\n    height: 50px;\n  }\n"]);return w=function(){return e},e}var k=d.default.div(w()),S=function(){return r.a.createElement(k,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},r.a.createElement("img",{src:_.a,alt:"loading-icon"})))};function U(){var e=Object(m.a)(["\n  color: ",";\n"]);return U=function(){return e},e}function z(){var e=Object(m.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return z=function(){return e},e}var R=d.default.div(z()),T=d.default.span(U(),(function(e){return e.color})),D=function(e){var t=e.text,n=e.color;return console.log("\uc0c9\uc0c1",n),r.a.createElement(R,null,r.a.createElement(T,{color:n},t))},C=n(12);function M(){var e=Object(m.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return M=function(){return e},e}function F(){var e=Object(m.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return F=function(){return e},e}function P(){var e=Object(m.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.5;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return P=function(){return e},e}function I(){var e=Object(m.a)(["\n  bottom: 10px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n"]);return I=function(){return e},e}function B(){var e=Object(m.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n"]);return B=function(){return e},e}function V(){var e=Object(m.a)(["\n  font-size: 12px;\n"]);return V=function(){return e},e}var L=d.default.div(V()),N=d.default.div(B(),(function(e){return e.bgUrl})),q=d.default.span(I()),H=d.default.div(P(),N,q),J=d.default.span(F()),A=d.default.span(M()),G=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,c=e.year,u=e.isMovie,o=void 0!==u&&u;return r.a.createElement(C.b,{to:o?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(H,null,r.a.createElement(N,{bgUrl:a?"https://image.tmdb.org/t/p/original".concat(a):n(32)}),r.a.createElement(q,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2605"),"",l,"/10")),r.a.createElement(J,null,i.length>11?"".concat(i.substring(0,11),"..."):i),r.a.createElement(A,null,c)))};function K(){var e=Object(m.a)(["\n  padding: 0px 10px;\n"]);return K=function(){return e},e}var Q=d.default.div(K()),W=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,l=e.error;return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"Loading... | DSflix")),r.a.createElement(S,null)):r.a.createElement(Q,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"Movies | DSflix")),t&&t.length>0&&r.a.createElement(O,{title:"Now Playing"},t.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(O,{title:"Up Coming"},a.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(O,{title:"Popular"},n.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),l&&r.a.createElement(D,{text:l}))},X=n(49),Y=n.n(X).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"248a52d680518fd97f6e7be12c21157d",language:"ko"}}),Z={nowPlaying:function(){return Y.get("movie/now_playing")},upcoming:function(){return Y.get("movie/upcoming")},popular:function(){return Y.get("movie/popular")},movieDetail:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("movie/".concat(t),{params:{append_to_response:"videos"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("search/movie",{params:{query:encodeURIComponent(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$={topRated:function(){return Y.get("tv/top_rated")},popular:function(){return Y.get("tv/popular")},airingToday:function(){return Y.get("tv/airing_today")},tvDetail:function(e){return Y.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("search/tv",{params:{query:encodeURIComponent(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(null),c=Object(p.a)(l,2),u=c[0],m=c[1],d=Object(a.useState)(null),f=Object(p.a)(d,2),g=f[0],b=f[1],v=Object(a.useState)(!1),h=Object(p.a)(v,2),x=h[0],E=h[1],j=Object(a.useState)(null),O=Object(p.a)(j,2),y=O[0],_=O[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t,n,a,r,l,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,Z.nowPlaying();case 4:return t=e.sent,n=t.data.results,i(n),e.next=9,Z.popular();case 9:return a=e.sent,r=a.data.results,m(r),e.next=14,Z.upcoming();case 14:l=e.sent,c=l.data.results,b(c),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),_("\uc601\ud654\uc815\ubcf4\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");case 22:E(!1);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(W,{nowPlaying:n,popular:u,upcoming:g,loading:x,error:y})},te=function(){return r.a.createElement(ee,null)};function ne(){var e=Object(m.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return ne=function(){return e},e}function ae(){var e=Object(m.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return ae=function(){return e},e}function re(){var e=Object(m.a)(["\n  padding: 0px 20px;\n"]);return re=function(){return e},e}var ie=d.default.div(re()),le=d.default.form(ae()),ce=d.default.input(ne()),ue=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.error,l=e.handleSubmit,c=e.searchTerm,u=e.updateTerm;return r.a.createElement(ie,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"Search | DSflix")),r.a.createElement(le,{onSubmit:l},r.a.createElement(ce,{placeholder:"Search Movies or TV Show!",value:c,onChange:u})),a?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(O,{title:"Movie Results"},t.map((function(e){return r.a.createElement(G,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(O,{title:"Show Results"},n.map((function(e){return r.a.createElement(G,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(D,{text:i,color:"#e74c3c"}),t&&n&&0===t.length&&0===n.length&&r.a.createElement(D,{text:"Not Found",color:"#bdc3c7"})))},oe=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(null),c=Object(p.a)(l,2),u=c[0],m=c[1],d=Object(a.useState)(null),f=Object(p.a)(d,2),g=f[0],b=f[1],v=Object(a.useState)(!1),h=Object(p.a)(v,2),x=h[0],E=h[1],j=Object(a.useState)(null),O=Object(p.a)(j,2),y=O[0],_=O[1],w=Object(a.useCallback)(Object(s.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,Z.search(g);case 4:return t=e.sent,n=t.data.results,i(n),e.next=9,$.search(g);case 9:a=e.sent,r=a.data.results,m(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),_("\ud574\ub2f9 \uc815\ubcf4\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.");case 17:E(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])}))),[g]),k=Object(a.useCallback)((function(e){var t=e.target.value;b(t)}),[]);return r.a.createElement(ue,{movieResults:n,tvResults:u,handleSubmit:function(e){e.preventDefault(),void 0!==g&&(b(e.target.value),w())},updateTerm:k,loading:x,error:y})},se=function(){return r.a.createElement(oe,null)};function pe(){var e=Object(m.a)(["\n  padding: 0px 10px;\n"]);return pe=function(){return e},e}var me=d.default.div(pe()),de=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"Loading... | DSflix")),r.a.createElement(S,null)):l?r.a.createElement(D,{text:l,color:"red"}):r.a.createElement(me,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"TV Show | DSflix")),t&&t.length>0&&r.a.createElement(O,{title:"Top Rated"},t.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(O,{title:"Airing Today"},a.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(O,{title:"Popular"},n.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),l&&r.a.createElement(D,{text:l,color:"#e74c3c"}))},fe=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(null),c=Object(p.a)(l,2),u=c[0],m=c[1],d=Object(a.useState)(null),f=Object(p.a)(d,2),g=f[0],b=f[1],v=Object(a.useState)(!1),h=Object(p.a)(v,2),x=h[0],E=h[1],j=Object(a.useState)(null),O=Object(p.a)(j,2),y=O[0],_=O[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t,n,a,r,l,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,$.topRated();case 4:return t=e.sent,n=t.data.results,i(n),e.next=9,$.popular();case 9:return a=e.sent,r=a.data.results,m(r),e.next=14,$.airingToday();case 14:l=e.sent,c=l.data.results,b(c),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),_("TV\uc815\ubcf4\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");case 22:E(!1);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(de,{topRated:n,popular:u,airingToday:g,loading:x,error:y})},ge=function(){return r.a.createElement(fe,null)},be=n(50),ve=n.n(be),he=function(e){var t=e.url;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{url:t,controls:!0}))};function xe(){var e=Object(m.a)(["\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  src: ",";\n"]);return xe=function(){return e},e}function Ee(){var e=Object(m.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  width: 50%;\n  line-height: 2;\n"]);return Ee=function(){return e},e}function je(){var e=Object(m.a)(["\n  margin: 0 10px;\n"]);return je=function(){return e},e}function Oe(){var e=Object(m.a)(["\n  margin-bottom: 10px;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(m.a)(["\n  font-size: 13px;\n  margin-bottom: 20px;\n"]);return ye=function(){return e},e}function _e(){var e=Object(m.a)(["\n  font-size: 40px;\n  margin-bottom: 20px;\n"]);return _e=function(){return e},e}function we(){var e=Object(m.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return we=function(){return e},e}function ke(){var e=Object(m.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n"]);return ke=function(){return e},e}function Se(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return Se=function(){return e},e}function Ue(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: calc(100% - 50px);\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 1;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(m.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n  z-index: 0;\n"]);return ze=function(){return e},e}var Re=d.default.div(ze()),Te=d.default.div(Ue(),(function(e){return e.Bgimg})),De=d.default.div(Se()),Ce=d.default.div(ke(),(function(e){return e.Bgimg})),Me=d.default.div(we()),Fe=d.default.h3(_e()),Pe=d.default.div(ye()),Ie=d.default.span(Oe()),Be=d.default.span(je()),Ve=d.default.p(Ee()),Le=d.default.img(xe(),(function(e){return e.src})),Ne=function(e){var t=e.result,a=(e.error,e.loading),i=e.handleImgClick,l=e.trVisible;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"Loading... | DSflix")),r.a.createElement(S,null)):r.a.createElement(Re,null,r.a.createElement(g.a,null,r.a.createElement("title",null,t.title?t.title:t.name," | DSflix")),r.a.createElement(Te,{Bgimg:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(De,null,r.a.createElement(Ce,{Bgimg:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(32)}),r.a.createElement(Me,null,r.a.createElement(Fe,null,t.title?t.title:t.name),r.a.createElement(Pe,null,r.a.createElement(Ie,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Be,null,"\u318d"),r.a.createElement(Ie,null,t.runtime?t.runtime:t.episode_run_time[0],"min"),r.a.createElement(Be,null,"\u318d"),r.a.createElement(Ie,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),t.videos.results.length>0&&r.a.createElement(Le,{src:n(88),onClick:i}),l&&r.a.createElement(he,{url:"https://www.youtube.com/watch?v=".concat(t.videos.results[0].key)}),r.a.createElement(Ve,null,t.overview))))},qe=Object(c.g)((function(e){var t=e.history,n=e.location,i=e.match.params.id,l=t.push,c=n.pathname,u=Object(a.useState)(null),m=Object(p.a)(u,2),d=m[0],f=m[1],g=Object(a.useState)(null),b=Object(p.a)(g,2),v=b[0],h=b[1],x=Object(a.useState)(!0),E=Object(p.a)(x,2),j=E[0],O=E[1],y=Object(a.useState)(!1),_=Object(p.a)(y,2),w=_[0],k=_[1],S=Object(a.useCallback)(Object(s.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O(!0),!c.includes("/movie/")){e.next=10;break}return e.next=5,Z.movieDetail(i);case 5:t=e.sent,n=t.data,f(n),e.next=16;break;case 10:if(!c.includes("/show/")){e.next=16;break}return e.next=13,$.tvDetail(i);case 13:a=e.sent,r=a.data,f(r);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),h("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc815\ubcf4\uc785\ub2c8\ub2e4.");case 21:O(!1);case 22:case"end":return e.stop()}}),e,null,[[0,18]])}))),[i,c]);return Object(a.useEffect)((function(){isNaN(parseInt(i))&&l("/"),null===d&&S()}),[i,l,d,S]),r.a.createElement(Ne,{result:d,error:v,loading:j,handleImgClick:function(){console.log("click"),k(!0)},trVisible:w})})),He=function(){return r.a.createElement(qe,null)},Je=function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:te}),r.a.createElement(c.b,{exact:!0,path:"/show",component:ge}),r.a.createElement(c.b,{exact:!0,path:"/search",component:se}),r.a.createElement(c.b,{exact:!0,path:"/movie/:id",component:He}),r.a.createElement(c.b,{exact:!0,path:"/show/:id",component:He}),r.a.createElement(c.a,{from:"*",to:"/"}))};function Ae(){var e=Object(m.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(m.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(m.a)(["\n  display: flex;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(m.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  /*background-color: rgba(20, 20, 20, 0.6);*/\n  background-color: black;\n  z-index: 2;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return Qe=function(){return e},e}var We=d.default.header(Qe()),Xe=d.default.ul(Ke()),Ye=d.default.li(Ge(),(function(e){return e.current?"#c0392b":"transparent"})),Ze=Object(d.default)(C.b)(Ae()),$e=Object(c.g)((function(e){var t=e.location.pathname;return r.a.createElement(We,null,r.a.createElement(Xe,null,r.a.createElement(Ye,{current:"/"===t},r.a.createElement(Ze,{to:"/"},"Home")),r.a.createElement(Ye,{current:"/show"===t},r.a.createElement(Ze,{to:"/show"},"TV")),r.a.createElement(Ye,{current:"/search"===t},r.a.createElement(Ze,{to:"/search"},"Search"))))})),et=n(51),tt=n.n(et);function nt(){var e=Object(m.a)(["\n",";\na{\n    text-decoration:none;\n    color:inherit;\n}\n*{\n    box-sizing:border-box;\n}\nbody{\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size:12px;\n    background-color:rgba(20,20,20,1);\n    color:white;\n    padding-top:50px;\n}\n"]);return nt=function(){return e},e}var at=Object(d.createGlobalStyle)(nt(),tt.a);var rt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null),r.a.createElement(Je,null),r.a.createElement(at,null))};l.a.render(r.a.createElement(C.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(rt,null))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.889c00c4.chunk.js.map