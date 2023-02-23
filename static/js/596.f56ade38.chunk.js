"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[596],{5596:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(4224),r=t(3541),s=t(9229),i=t(9434),c=t(208),l=t(6916),o=function(e){return e.contacts.data},u=function(e){return e.filterQuery},d=function(e){return e.contacts.isLoading},x=function(e){return e.contacts.error},p=(0,l.P1)([o,u],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),h=t(184);function f(){var e=(0,i.I0)(),n=(0,i.v9)(p);return(0,h.jsx)(r.QI,{px:"15px",py:"10px",spacing:"8px",children:n.map((function(n){var t=n.id,i=n.name,l=n.number;return(0,h.jsxs)(r.HC,{display:"flex",children:[(0,h.jsxs)(s.x,{mr:"5px",children:[i,":"]}),(0,h.jsx)(s.x,{mr:"10px",href:"tel: ".concat(l),children:l}),(0,h.jsx)(a.z,{size:"sm",type:"button",onClick:function(){e((0,c.GK)(t))},children:"Delete"})]},t)}))})}var m=t(9439),j=t(2791),g=t(1686),v=t.n(g),y=t(2701),b=t(4585),C=t(7886),z=t(1213);function I(){var e=(0,j.useState)(""),n=(0,m.Z)(e,2),t=n[0],r=n[1],s=(0,j.useState)(""),l=(0,m.Z)(s,2),u=l[0],d=l[1],x=(0,i.v9)(o),p=(0,i.I0)(),f=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":d(a);break;default:return}},g=function(){r(""),d("")};return(0,h.jsx)("form",{onSubmit:function(e){e.preventDefault(),x.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?v().Notify.failure("".concat(t," is already exist in your contacts")):(p((0,c.uK)({name:t,number:u})),g())},children:(0,h.jsxs)(z.g,{spacing:"10px",alignItems:"flex-start",children:[(0,h.jsxs)(y.NI,{isRequired:!0,children:[(0,h.jsx)(b.l,{children:"Name"}),(0,h.jsx)(C.I,{size:"md",placeholder:"John Doe",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:f})]}),(0,h.jsxs)(y.NI,{isRequired:!0,children:[(0,h.jsx)(b.l,{children:"Number"}),(0,h.jsx)(C.I,{size:"md",placeholder:"+380 67 111 1111",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u,onChange:f})]}),(0,h.jsx)(a.z,{type:"submit",children:"Add contact"})]})})}var w=t(6895);function k(){var e=(0,i.I0)(),n=(0,i.v9)(u);return(0,h.jsxs)(y.NI,{children:[(0,h.jsx)(b.l,{children:"Find contacts by name"}),(0,h.jsx)(C.I,{placeholder:"Type a name",type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(n){e((0,w.T)(n.currentTarget.value))}})]})}var A=t(176),N=t(5946);var Z=function(){var e=(0,i.I0)(),n=(0,i.v9)(d),t=(0,i.v9)(x);return(0,j.useEffect)((function(){e((0,c.yF)())}),[e]),(0,h.jsxs)(A.k,{justify:"center",children:[(0,h.jsxs)(z.g,{w:"full",h:"full",spacing:"10px",px:"15px",alignItems:"flex-start",children:[(0,h.jsx)(N.X,{size:"xl",children:"Phonebook"}),(0,h.jsx)(I,{})]}),(0,h.jsxs)(z.g,{bg:"gray.50",w:"full",h:"full",spacing:"10px",padding:"10px",alignItems:"flex-start",children:[(0,h.jsx)(N.X,{size:"xl",children:"Contacts"}),(0,h.jsx)(k,{}),(0,h.jsx)(f,{}),n&&!t&&(0,h.jsx)(s.x,{children:"Loading..."})]})]})}}}]);
//# sourceMappingURL=596.f56ade38.chunk.js.map