(this["webpackJsonpsearch-film"]=this["webpackJsonpsearch-film"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),s=i.n(a),r=i(3),c=i.n(r),o=(i(14),i(6)),l=i(4),d=i(5),u=i(8),h=i(7),v=(i(15),[{id:1,title:"Jocker",info:"Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver.",isFavourite:!1},{id:2,title:"Titanic",info:"Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron.",isFavourite:!0},{id:3,title:"Butterfly effect",info:"In chaos theory, the butterfly effect is the sensitive dependence on initial conditions in which a small change in one state of a deterministic nonlinear system can result in large differences in a later state.",isFavourite:!1},{id:4,title:"Fight Club",info:"Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter.",isFavourite:!1}]),f=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).handleSubmit=function(e){n.setState({search:e.target.searchFiled.value}),e.preventDefault()},n.setFav=function(e){var t=n.state.movies.filter((function(t){return t.id===e}));t[0].isFavourite=!t[0].isFavourite,n.setState({movies:Object(o.a)(n.state.movies)})},n.state={search:null,movies:v},n}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),Object(n.jsx)(b,{state:this.state,setFav:this.setFav})]})}}]),i}(s.a.Component),m=function(e){var t=e.handleSubmit;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:t,children:[Object(n.jsx)("input",{type:"text",name:"searchFiled",placeholder:"Search for a movie..."}),Object(n.jsx)("input",{type:"submit",value:"Search"})]})})},j=function(e){var t=e.movie,i=e.setFav;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"square"}),Object(n.jsxs)("div",{className:"movieInfo",children:[Object(n.jsx)("div",{className:"title",children:t.title}),Object(n.jsx)("div",{className:"info",children:t.info})]}),Object(n.jsx)("div",{onClick:function(){i(t.id)},className:t.isFavourite?"heartFav":"heart"})]})},b=function(e){var t=e.state,i=e.setFav;return Object(n.jsx)("div",{children:t.movies.sort((function(e,t){return t.isFavourite-e.isFavourite})).filter((function(e){return null==t.search?e:e.title.toLowerCase().includes(t.search.toLowerCase())})).map((function(e){return Object(n.jsx)(j,{setFav:i,movie:e})}))})},F=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))};c.a.render(Object(n.jsx)(f,{}),document.getElementById("root")),F()}},[[16,1,2]]]);
//# sourceMappingURL=main.f5bc9e32.chunk.js.map