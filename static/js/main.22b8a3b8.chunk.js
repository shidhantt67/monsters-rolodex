(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),o=n(3),a=n.n(o),i=(n(13),n(4)),u=n(5),h=n(7),l=n(6),d=(n(14),n(15),n(16),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{src:"https://robohash.org/".concat(e.user.id,"?set=set2&size=180x180"),alt:"user"}),Object(s.jsx)("h1",{children:e.user.name})]})}),j=function(e){return Object(s.jsx)("div",{className:"card-list",children:e.users.map((function(e){return Object(s.jsx)(d,{user:e},e.id)}))})},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={users:[],search:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.search,c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:" Monsters Rolox "}),Object(s.jsx)(f,{placeholder:"search users",handleChange:function(t){e.setState({search:t.target.value})}}),Object(s.jsx)(j,{users:c})]})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.22b8a3b8.chunk.js.map