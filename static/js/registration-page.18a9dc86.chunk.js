(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(37);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(c){r=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},110:function(e,t,a){"use strict";a(0);var n=a(111),r=a.n(n),s=a(1),l=function(e){var t=e.onLoadMore,a=e.contentBtn,n=e.disabled;return Object(s.jsx)("button",{disabled:n,onClick:t,className:r.a.button,children:a})};l.defaultProps={onLoadMore:function(){return null},disabled:!1},t.a=l},111:function(e,t,a){e.exports={button:"Button_button__2RkNT"}},115:function(e,t,a){e.exports={form:"RegisterView_form__3W744",label:"RegisterView_label__1ds6z",labelText:"RegisterView_labelText__3ZMfb",input:"RegisterView_input__3ngNK"}},118:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(109),r=a(0),s=a(19),l=a(8),o=a(110),c=a(115),i=a.n(c),u=a(1);function b(){var e=Object(l.b)(),t=Object(r.useState)(""),a=Object(n.a)(t,2),c=a[0],b=a[1],d=Object(r.useState)(""),m=Object(n.a)(d,2),p=m[0],j=m[1],f=Object(r.useState)(""),h=Object(n.a)(f,2),O=h[0],x=h[1],v=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return b(n);case"email":return j(n);case"password":return x(n);default:return}};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(Object(s.d)({name:c,email:p,password:O})),b(""),j(""),x("")},className:i.a.form,autoComplete:"off",children:[Object(u.jsxs)("label",{className:i.a.label,children:[Object(u.jsx)("span",{className:i.a.labelText,children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",value:c,onChange:v,placeholder:"Enter name",className:i.a.input})]}),Object(u.jsxs)("label",{className:i.a.label,children:[Object(u.jsx)("span",{className:i.a.labelText,children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",value:p,onChange:v,placeholder:"Enter email",className:i.a.input})]}),Object(u.jsxs)("label",{className:i.a.label,children:[Object(u.jsx)("span",{className:i.a.labelText,children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",value:O,onChange:v,placeholder:"Enter password",className:i.a.input})]}),Object(u.jsx)(o.a,{type:"submit",contentBtn:"Sign up"})]})})}}}]);
//# sourceMappingURL=registration-page.18a9dc86.chunk.js.map