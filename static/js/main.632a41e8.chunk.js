(this["webpackJsonpreact-listing"]=this["webpackJsonpreact-listing"]||[]).push([[0],{32:function(e,t,n){e.exports=n(46)},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"LIST_ACTION_TYPES",(function(){return g})),n.d(a,"listAction",(function(){return m})),n.d(a,"edit",(function(){return _})),n.d(a,"list",(function(){return v})),n.d(a,"getPostById",(function(){return T})),n.d(a,"updatePost",(function(){return b}));var o=n(0),i=n.n(o),r=n(15),c=n.n(r),s=n(9),l=n(12),u=n(4),d=n(28),p=n(26),f=n(8),O=n(31),E=n(3),g={LIST_ACTION:"LIST_ACTION",LIST_ACTION_IN_PROGRESS:"LIST_ACTION_IN_PROGRESS",LIST_ACTION_SUCCESS:"LIST_ACTION_SUCCESS",LIST_ACTION_ERROR:"LIST_ACTION_ERROR",GET_POST_BY_ID:"GET_POST_BY_ID",UPDATE_POST:"UPDATE_POST"},m=function(e){return function(t){t(function(e){return{type:g.LIST_ACTION_IN_PROGRESS,payload:e}}(e)),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){t(function(e){return{type:g.LIST_ACTION_SUCCESS,payload:e}}(e))})).catch((function(e){t(function(e){return{type:g.LIST_ACTION_ERROR,payload:e}}(e))}))}},_=function(e){return function(t){t(Object(E.d)("/edit/"+e))}},v=function(e){return function(e){e(Object(E.d)("/"))}},T=function(e){return function(t){t(function(e){return{type:g.GET_POST_BY_ID,payload:e}}(e))}},b=function(e){return function(t){t(function(e){return{type:g.UPDATE_POST,payload:e}}(e))}},I=Object(u.c)({values:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.LIST_ACTION:return[].concat(Object(O.a)(e),[t.payload]);case g.LIST_ACTION_IN_PROGRESS:return Object.assign({},e,{listingInProgress:!0});case g.LIST_ACTION_SUCCESS:return Object.assign({},e,{listingInProgress:!1,updated:!1,posts:t.payload});case g.LIST_ACTION_ERROR:return Object.assign({},e,{listingInProgress:!1,error:t.payload});case g.GET_POST_BY_ID:var n=e.posts?e.posts.find((function(e){return e.id===t.payload})):void 0;return Object.assign({},e,{selectedPost:n,updated:!1});case g.UPDATE_POST:var a=t.payload.id,o=e.posts.map((function(e){return Object.assign({},e)})),i=o?o.find((function(e){return e.id===a})):void 0,r=o.indexOf(i);return i?(i.title=t.payload.title,i.body=t.payload.body,o.splice(r,1,i),Object.assign({},e,{posts:o,updated:!0})):Object.assign({},e,{updated:!1});default:return e}}}),S=Object(f.a)({basename:"/ReactList/"}),h=Object(u.c)({list:I,router:Object(l.b)(S)}),y=[Object(p.a)(S),d.a],j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,C=Object(u.e)(h,j(u.a.apply(void 0,y))),P=n(10),w=n(18),N=n(29),R=n(30),A={header:{display:"flex",width:"100%",padding:"20px",flexDirection:"column",alignItems:"center"},container:{width:"100%",height:"100%"},centralize:{margin:"auto",paddingTop:"10%",paddingLeft:"45%",width:"50%"},row:{display:"flex",borderBottom:"1px solid",padding:"5px"},column:{flex:1},action:{margin:"15px"}},L=Object(u.d)(Object(s.c)((function(e){return{posts:e.list.values.posts,listingInProgress:e.list.values.listingInProgress}}),(function(e){return Object(u.b)(Object(w.a)({},a),e)})))((function(e){var t=e.listAction,n=e.edit,a=e.listingInProgress,r=e.posts;return Object(o.useEffect)((function(){r||t()}),[]),i.a.createElement("div",{style:A.container},i.a.createElement("div",{style:A.header},"Posts"),a?i.a.createElement("div",{style:A.centralize},i.a.createElement(N.a,{icon:R.a,spin:!0,size:"6x"})):"",r?r.map((function(e){return i.a.createElement("div",{style:A.row,key:e.id},i.a.createElement("div",{style:A.column},e.title),i.a.createElement("div",{style:A.column},e.body),i.a.createElement("div",{style:A.column},i.a.createElement("button",{style:A.action,onClick:function(){return n(e.id)}},"Edit")))})):"")})),x=n(23),k=Object(u.d)(Object(s.c)((function(e){return console.log(e),{post:e.list.values.selectedPost,updated:e.list.values.updated}}),(function(e){return Object(u.b)(Object(w.a)({},a),e)})))((function(e){console.log(e),console.log(e.match.params.id);var t=Object(o.useState)(e.post?e.post.title:""),n=Object(x.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(e.post?e.post.body:""),s=Object(x.a)(c,2),l=s[0],u=s[1];return Object(o.useEffect)((function(){e.getPostById(parseInt(e.match.params.id)),e.post&&(r(e.post.title),u(e.post.body)),e.updated&&e.list()}),[e]),e.post&&e.post?i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,"Edit"),i.a.createElement("div",{className:"label_css"},i.a.createElement("label",null,"Title")),i.a.createElement("div",null," ",i.a.createElement("textarea",{value:a,onChange:function(e){return r(e.target.value)}})),i.a.createElement("div",{className:"label_css"},i.a.createElement("label",null,"Body")),i.a.createElement("div",null," ",i.a.createElement("textarea",{value:l,onChange:function(e){return u(e.target.value)}})),i.a.createElement("div",{className:"center"},i.a.createElement("button",{onClick:function(){e.updatePost({id:e.post.id,title:a,body:l})}},"Save"),i.a.createElement("button",{onClick:function(){return e.list()}},"Cancel"))):""})),D=function(){return i.a.createElement(P.c,null,i.a.createElement(P.a,{exact:!0,path:"/",component:L}),i.a.createElement(P.a,{path:"/edit/:id",component:k}),i.a.createElement(P.a,{render:function(){return i.a.createElement("div",null,"DEFAULT")}}))},U=function(){return i.a.createElement(s.a,{store:C},i.a.createElement(l.a,{history:S},i.a.createElement(D,null)))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(45);c.a.render(i.a.createElement(U,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ReactList",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ReactList","/service-worker.js");B?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):G(e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.632a41e8.chunk.js.map