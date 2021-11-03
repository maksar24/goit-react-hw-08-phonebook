(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{122:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),i=n(39),u=n.n(i),o=n(21),s=n(9),d=n(61),l=(n(78),n(6)),b=n(23),f=n(20),j=f.a.div(r||(r=Object(b.a)(["\n    width: auto;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),p=n(2);function h(t){var e=t.children;return Object(p.jsx)(j,{children:e})}var O,x,v,g=n(32),k=n.n(g),m=n(16),w=function(){var t=Object(s.c)(m.a);return Object(p.jsxs)("nav",{children:[Object(p.jsx)(o.b,{exact:!0,to:"/",className:k.a.link,activeClassName:k.a.activeLink,children:"Home"}),t&&Object(p.jsx)(o.b,{to:"/contacts",className:k.a.link,activeClassName:k.a.activeLink,children:"Contacts"})]})},y=n(33),L=n.n(y),C=function(){return Object(p.jsxs)("nav",{children:[Object(p.jsx)(o.b,{to:"/register",className:L.a.link,activeClassName:L.a.activeLink,children:"Sign up"}),Object(p.jsx)(o.b,{to:"/login",className:L.a.link,activeClassName:L.a.activeLink,children:"Log in"})]})},_=f.a.div(O||(O=Object(b.a)(["\n  display: flex;\n  padding-bottom: 10px;\n  padding-top: 10px;\n"]))),N=f.a.span(x||(x=Object(b.a)(["\n  font-weight: 700;\n  margin: 20px;\n"]))),A=n.p+"static/media/DefaultPicture.d7698ad5.png",T=n(22),z=n(48),I=n(130);function W(){var t=Object(s.b)(),e=Object(s.c)(m.c),n=A;return Object(p.jsxs)(_,{children:[Object(p.jsx)(I.a,{alt:"default",src:n,sx:{width:56,height:56}}),Object(p.jsxs)(N,{children:["Welcome, ",e]}),Object(p.jsx)(z.a,{type:"button",onClick:function(){return t(Object(T.c)())},contentBtn:"Log out"})]})}var R=f.a.header(v||(v=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 80px;\n  margin-bottom: 16px;\n  border-bottom: 5px solid #67c233;\n"])));function V(){var t=Object(s.c)(m.a);return Object(p.jsxs)(R,{children:[Object(p.jsx)(w,{}),t?Object(p.jsx)(W,{}):Object(p.jsx)(C,{})]})}var B=n(58),S=n(28),J=n(42),D=["children","redirectTo"];function E(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=Object(J.a)(t,D),a=Object(s.c)(m.a);return Object(p.jsx)(l.b,Object(S.a)(Object(S.a)({},c),{},{children:a?e:Object(p.jsx)(l.a,{to:r})}))}var F=["children","restricted","redirectTo"];function H(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,c=t.redirectTo,a=void 0===c?"/":c,i=Object(J.a)(t,F),u=Object(s.c)(m.a)&&r;return Object(p.jsx)(l.b,Object(S.a)(Object(S.a)({},i),{},{children:u?Object(p.jsx)(l.a,{to:a}):e}))}var P=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,135))})),M=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,133))})),Q=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,134))})),U=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,132))}));var Y,q,G,K=function(){var t=Object(s.b)(),e=Object(s.c)(m.b);return Object(c.useEffect)((function(){t(Object(T.a)())}),[t]),!e&&Object(p.jsxs)(h,{children:[Object(p.jsx)(V,{}),Object(p.jsx)(l.d,{children:Object(p.jsxs)(c.Suspense,{fallback:Object(p.jsx)(B.a,{}),children:[Object(p.jsx)(H,{path:"/",exact:!0,children:Object(p.jsx)(P,{})}),Object(p.jsx)(H,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(p.jsx)(M,{})}),Object(p.jsx)(H,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(E,{path:"/contacts",redirectTo:"/login",children:Object(p.jsx)(U,{})})]})})]})},X=n(17),Z=n(7),$=n(25),tt=n(68),et=n.n(tt),nt={user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1},rt=Object(Z.e)({name:"auth",initialState:nt,extraReducers:function(t){t.addCase(T.d.fulfilled,(function(t,e){var n=e.payload;t.token=n.token,t.user=n.user,t.isLoggedIn=!0})).addCase(T.b.fulfilled,(function(t,e){var n=e.payload;t.token=n.token,t.user=n.user,t.isLoggedIn=!0})).addCase(T.c.fulfilled,(function(t){t.user=nt,t.token=nt.token,t.isLoggedIn=!1})).addCase(T.a.pending,(function(t){t.isRefreshing=!0})).addCase(T.a.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.isLoggedIn=!0,t.isRefreshing=!1})).addCase(T.a.rejected,(function(t){t.isRefreshing=!1}))}}).reducer,ct=n(4),at=n(10),it=n(59),ut=n(8),ot=Object(Z.d)([],(Y={},Object(ct.a)(Y,ut.c.fulfilled,(function(t,e){return e.payload.data})),Object(ct.a)(Y,ut.a.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(X.a)(t),[n.data])})),Object(ct.a)(Y,ut.b.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Y)),st=Object(Z.d)(!1,(q={},Object(ct.a)(q,ut.c.pending,(function(){return!0})),Object(ct.a)(q,ut.c.fulfilled,(function(){return!1})),Object(ct.a)(q,ut.c.rejected,(function(){return!1})),Object(ct.a)(q,ut.b.fulfilled,(function(){return!1})),Object(ct.a)(q,ut.b.pending,(function(){return!0})),Object(ct.a)(q,ut.b.rejected,(function(){return!1})),Object(ct.a)(q,ut.a.fulfilled,(function(){return!1})),Object(ct.a)(q,ut.a.pending,(function(){return!0})),Object(ct.a)(q,ut.a.rejected,(function(){return!1})),q)),dt=Object(Z.d)(null,(G={},Object(ct.a)(G,ut.c.rejected,(function(t,e){return e.payload})),Object(ct.a)(G,ut.c.pending,(function(){return null})),Object(ct.a)(G,ut.a.pending,(function(){return null})),Object(ct.a)(G,ut.a.rejected,(function(t,e){return e.payload})),Object(ct.a)(G,ut.b.pending,(function(){return null})),Object(ct.a)(G,ut.b.rejected,(function(t,e){return e.payload})),G)),lt=Object(Z.d)("",Object(ct.a)({},it.a,(function(t,e){return e.payload}))),bt=Object(at.b)({entities:ot,isLoading:st,error:dt,filter:lt}),ft=Object(X.a)(Object(Z.f)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),jt={key:"userAuth",storage:et.a,whitelist:["token"]},pt=Object(Z.a)({reducer:{userAuth:Object($.g)(jt,rt),contacts:bt},middleware:ft,devTools:!1}),ht=Object($.h)(pt);u.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(s.a,{store:pt,children:Object(p.jsx)(d.a,{loading:null,persistor:ht,children:Object(p.jsx)(o.a,{children:Object(p.jsx)(K,{})})})})}),document.getElementById("root"))},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return a}));var r=function(t){return t.userAuth.isLoggedIn},c=function(t){return t.userAuth.user.name},a=function(t){return t.userAuth.isRefreshing}},22:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return j}));var r=n(11),c=n.n(r),a=n(24),i=n(18),u=n.n(i),o=n(7);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){u.a.defaults.headers.common.Authorization=""},l=Object(o.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/users/signup",e);case 4:return a=t.sent,i=a.data,s(i.token),t.abrupt("return",i);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0.data));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),b=Object(o.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/users/login",e);case 4:return a=t.sent,i=a.data,s(i.token),t.abrupt("return",i);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0.data));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(o.c)("auth/logout",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/users/logout");case 4:d(),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.data));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(o.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,i,o,d,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState,a=n.rejectWithValue,i=r(),null!==(o=i.userAuth.token)){t.next=5;break}return t.abrupt("return",a());case 5:return s(o),t.prev=6,t.next=9,u.a.get("/users/current");case 9:return d=t.sent,l=d.data,t.abrupt("return",l);case 14:return t.prev=14,t.t0=t.catch(6),t.abrupt("return",a(t.t0.data));case 17:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e,n){return t.apply(this,arguments)}}())},32:function(t,e,n){t.exports={link:"Navigation_link__1NJne",activeLink:"Navigation_activeLink__HCj5d"}},33:function(t,e,n){t.exports={link:"AuthNav_link__rQr67",activeLink:"AuthNav_activeLink__1YOI3"}},48:function(t,e,n){"use strict";n(0);var r,c=n(23),a=n(20).a.button(r||(r=Object(c.a)(["\n  display: block;\n  margin: 0 auto;\n  padding: 10px;\n  min-width: 120px;\n  background-color: #67c233;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border: none;\n  cursor: pointer;\n  transition-property: color, background-color, box-shadow;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n  color: #67c233;\n  background-color: #ffffff;\n  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),\n    0px 2px 2px rgba(0, 0, 0, 0.12);\n  }\n"]))),i=n(2),u=function(t){var e=t.onClick,n=t.contentBtn,r=t.disabled;return Object(i.jsx)(a,{disabled:r,onClick:e,children:n})};u.defaultProps={onClick:function(){return null},disabled:!1};e.a=u},58:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(66),c=n.n(r),a=n(67),i=n.n(a),u=n(2),o=function(){return Object(u.jsx)(c.a,{className:i.a.Loader,type:"ThreeDots",color:"#27BF2B",height:100,width:100,timeout:3e3})}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(7),c=Object(r.b)("contacts/changeFilter")},67:function(t,e,n){t.exports={Loader:"Loader_Loader__g4T21"}},78:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var r=n(11),c=n.n(r),a=n(24),i=n(18),u=n.n(i),o=n(7),s=Object(o.c)("contacts/fetchContacts",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.get("/contacts");case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.data));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(o.c)("contacts/addContacts",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/contacts",e);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.data));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(o.c)("contacts/deleteContacts",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.data));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}())}},[[122,5,6]]]);
//# sourceMappingURL=main.c37631b8.chunk.js.map