(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(13),c(8)),n=c(2),l=c(1),r=c.n(l),d=(c(14),c(15),c(16),c(0)),o=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(d.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(o,{movie:e},e.imdbId)}))})},m=c(6),b=c.n(m);c(18);var u=r.a.memo((function(e){var t=e.onMovieAdd,c=Object(l.useState)(null),i=Object(n.a)(c,2),s=i[0],a=i[1],r=Object(l.useState)(""),j=Object(n.a)(r,2),m=j[0],u=j[1],v=Object(l.useState)(null),h=Object(n.a)(v,2),O=h[0],x=h[1],f=Object(l.useState)(!1),p=Object(n.a)(f,2),N=p[0],g=p[1];Object(l.useEffect)((function(){m&&x(null)}),[m]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),g(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=f78d0155","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(m).then((function(e){if("Error"in e)x(e.Error),a(null);else{var t="N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,c={title:e.Title,description:e.Plot,imgUrl:t,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID};a(c)}})).finally((function(){g(!1)}))},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:b()("input",{"is-danger":O}),value:m,onChange:function(e){u(e.target.value),x(null)}})}),O&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{"data-cy":"searchButton",type:"submit",className:b()("button","is-link",{"is-loading":N}),disabled:!m,children:"Find a movie"})}),s&&Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",disabled:!s,onClick:function(){s&&(t(s),a(null),u(""))},children:"Add to the list"})})]})]}),s&&Object(d.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),Object(d.jsx)(o,{movie:s})]})]})})),v=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(j,{movies:c})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(u,{onMovieAdd:function(e){i((function(t){return t.some((function(t){return t.imdbId===e.imdbId}))?t:[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.86f41c18.chunk.js.map