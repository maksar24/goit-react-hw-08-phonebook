(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{15:function(e,t,a){e.exports={form:"RegisterView_form__3W744",label:"RegisterView_label__1ds6z",labelText:"RegisterView_labelText__3ZMfb",input:"RegisterView_input__3ngNK"}},18:function(e,t,a){e.exports={form:"LoginForm_form__26oKu",label:"LoginForm_label__1Xydo",labelText:"LoginForm_labelText__2sAx9",input:"LoginForm_input__1FN1u"}},25:function(e,t,a){e.exports={link:"AuthNav_link__rQr67",activeLink:"AuthNav_activeLink__1YOI3"}},30:function(e,t,a){e.exports={container:"UserMenu_container__2vnX3",avatar:"UserMenu_avatar__hYEt7",name:"UserMenu_name__1pRVb"}},34:function(e,t,a){e.exports={link:"Navigation_link__1NJne",activeLink:"Navigation_activeLink__HCj5d"}},48:function(e,t,a){e.exports={container:"Container_container__34iIj"}},50:function(e,t,a){e.exports={header:"Appbar_header__1pdxX"}},51:function(e,t,a){e.exports={button:"Button_button__2RkNT"}},64:function(e,t,a){},65:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),s=a.n(r),o=a(17),i=a(5),u=a(47),l=(a(64),a(65),a(6)),b=a(48),d=a.n(b),j=a(1);function p(e){var t=e.children;return Object(j.jsx)("div",{className:d.a.container,children:t})}var m=a(34),h=a.n(m),O=function(){return Object(j.jsx)("nav",{children:Object(j.jsx)(o.b,{exact:!0,to:"/",className:h.a.link,activeClassName:h.a.activeLink,children:"Home"})})},f=a(25),x=a.n(f),v=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(o.b,{to:"/register",className:x.a.link,activeClassName:x.a.activeLink,children:"Sign up"}),Object(j.jsx)(o.b,{to:"/login",className:x.a.link,activeClassName:x.a.activeLink,children:"Log in"})]})},g=a(30),_=a.n(g),k=a.p+"static/media/DefaultPicture.a2822262.png",N=function(e){return e.userAuth.isLoggedIn},w=function(e){return e.userAuth.user.name},C=a(20),y=a.n(C),L=a(31),T=a(21),S=a.n(T),E=a(2);S.a.defaults.baseURL="https://connections-api.herokuapp.com";var A=function(e){S.a.defaults.headers.common.Authorization="Bearer ".concat(e)},M=function(){S.a.defaults.headers.common.Authorization=""},I=Object(E.c)("auth/register",function(){var e=Object(L.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("/users/signup",t);case 3:return a=e.sent,n=a.data,A(n.token),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),R=Object(E.c)("auth/login",function(){var e=Object(L.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("/users/login",t);case 3:return a=e.sent,n=a.data,A(n.token),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),B=Object(E.c)("auth/logout",Object(L.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("/users/logout");case 3:M(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])}))));function F(){var e=Object(i.d)(),t=Object(i.e)(w),a=k;return Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)("img",{src:a,alt:"",width:"32",className:_.a.avatar}),Object(j.jsxs)("span",{className:_.a.name,children:["Welcome, ",t]}),Object(j.jsx)("button",{type:"button",onClick:function(){return e(B())},children:"Log out"})]})}var P=a(50),D=a.n(P);function U(){var e=Object(i.e)(N);return Object(j.jsxs)("header",{className:D.a.header,children:[Object(j.jsx)(O,{}),e?Object(j.jsx)(F,{}):Object(j.jsx)(v,{})]})}var V=a.p+"static/media/Backdrop.db75e70e.png",q=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:V,width:"100%",alt:""})})},z=a(19),J=a(51),Q=a.n(J),X=function(e){var t=e.onLoadMore,a=e.contentBtn,n=e.disabled;return Object(j.jsx)("button",{disabled:n,onClick:t,className:Q.a.button,children:a})};X.defaultProps={onLoadMore:function(){return null},disabled:!1};var H=X,K=a(15),W=a.n(K);function Y(){var e=Object(i.d)(),t=Object(n.useState)(""),a=Object(z.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(z.a)(s,2),u=o[0],l=o[1],b=Object(n.useState)(""),d=Object(z.a)(b,2),p=d[0],m=d[1],h=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return r(n);case"email":return l(n);case"password":return m(n);default:return}};return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(I({name:c,email:u,password:p})),r(""),l(""),m("")},className:W.a.form,autoComplete:"off",children:[Object(j.jsxs)("label",{className:W.a.label,children:[Object(j.jsx)("span",{className:W.a.labelText,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",value:c,onChange:h,placeholder:"Enter name",className:W.a.input})]}),Object(j.jsxs)("label",{className:W.a.label,children:[Object(j.jsx)("span",{className:W.a.labelText,children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",value:u,onChange:h,placeholder:"Enter email",className:W.a.input})]}),Object(j.jsxs)("label",{className:W.a.label,children:[Object(j.jsx)("span",{className:W.a.labelText,children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",value:p,onChange:h,placeholder:"Enter password",className:W.a.input})]}),Object(j.jsx)(H,{type:"submit",contentBtn:"Sign up"})]})})}var Z=a(18),G=a.n(Z);function $(){var e=Object(i.d)(),t=Object(i.e)(N),a=Object(n.useState)(""),c=Object(z.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),u=Object(z.a)(o,2),l=u[0],b=u[1],d=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":return s(n);case"password":return b(n);default:return}};return Object(j.jsx)("div",{children:!t&&Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(R({email:r,password:l})),s(""),b("")},className:G.a.form,autoComplete:"off",children:[Object(j.jsxs)("label",{className:G.a.label,children:[Object(j.jsx)("span",{className:G.a.labelText,children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",value:r,onChange:d,placeholder:"Enter email",className:G.a.input})]}),Object(j.jsxs)("label",{className:G.a.label,children:[Object(j.jsx)("span",{className:G.a.labelText,children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",value:l,onChange:d,placeholder:"Enter password",className:G.a.input})]}),Object(j.jsx)(H,{type:"submit",contentBtn:"Sign up"})]})})}var ee=function(){return Object(j.jsx)("div",{children:Object(j.jsx)($,{})})};function te(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{children:"Contacts"})})}var ae=function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)(U,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:q}),Object(j.jsx)(l.a,{path:"/register",component:Y}),Object(j.jsx)(l.a,{path:"/login",component:ee}),Object(j.jsx)(l.a,{path:"/contacts",component:te})]})]})},ne=a(52),ce=a(55),re=a(16),se=a(53),oe=a(9),ie=Object(se.a)({reducerPath:"contactsApi",baseQuery:Object(oe.d)({baseUrl:"https://connections-api.herokuapp.com"}),tagTypes:["Contacts"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),ue=(ie.useFetchContactsQuery,ie.useDeleteContactMutation,ie.useCreateContactMutation,a(54)),le=a.n(ue),be={user:{name:null,email:null},token:null,isLoggedIn:!1},de=Object(E.d)({name:"auth",initialState:be,extraReducers:function(e){e.addCase(I.fulfilled,(function(e,t){var a=t.payload;e.token=a.token,e.user=a.user,e.isLoggedIn=!0})).addCase(R.fulfilled,(function(e,t){var a=t.payload;e.token=a.token,e.user=a.user,e.isLoggedIn=!0})).addCase(B.fulfilled,(function(e){e.user=be,e.token=be.token,e.isLoggedIn=!1}))}}).reducer,je=[].concat(Object(ce.a)(Object(E.e)({serializableCheck:{ignoredActions:[re.a,re.f,re.b,re.c,re.d,re.e]}})),[ie.middleware]),pe={key:"auth",storage:le.a,whitelist:["token"]},me=Object(E.a)({reducer:Object(ne.a)({userAuth:Object(re.g)(pe,de)},ie.reducerPath,ie.reducer),middleware:je,devTools:!1}),he=Object(re.h)(me);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{store:me,children:Object(j.jsx)(u.a,{loading:null,persistor:he,children:Object(j.jsx)(o.a,{children:Object(j.jsx)(ae,{})})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.94ae2695.chunk.js.map