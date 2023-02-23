"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[732],{1732:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,i,o,s,c=t(9434),l=t(208),d=t(6916),u=function(n){return n.contacts.data},p=function(n){return n.filterQuery},x=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},f=(0,d.P1)([u,p],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),m=t(168),Z=t(4934),g=Z.Z.ul(r||(r=(0,m.Z)(["\n  list-style: none;\n  padding-left: 10px;\n\n  font-size: 20px;\n"]))),b=Z.Z.li(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n"]))),v=Z.Z.p(i||(i=(0,m.Z)(["\n  margin-right: 15px;\n"]))),j=Z.Z.a(o||(o=(0,m.Z)(["\n  text-decoration: none;\n  margin-right: 10px;\n"]))),y=Z.Z.button(s||(s=(0,m.Z)(["\n  color: red;\n  background: transparent;\n  border: 1px grey solid;\n"]))),w=t(184);function k(){var n=(0,c.I0)(),e=(0,c.v9)(f);return(0,w.jsx)("div",{children:(0,w.jsx)(g,{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,w.jsxs)(b,{children:[(0,w.jsxs)(v,{children:[r,":"]}),(0,w.jsx)(j,{href:"tel: ".concat(a),children:a}),(0,w.jsx)(y,{type:"button",onClick:function(){n((0,l.GK)(t))},children:"Delete"})]},t)}))})})}var C,z,A,L,N,F=t(9439),I=t(2791),_=Z.Z.form(C||(C=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  padding: 20px 40px;\n"]))),P=Z.Z.label(z||(z=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),S=Z.Z.p(A||(A=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),T=Z.Z.input(L||(L=(0,m.Z)(["\n  margin-top: 0;\n  margin-bottom: 10px;\n  width: 300px;\n  height: 20px;\n"]))),q=Z.Z.button(N||(N=(0,m.Z)(["\n  width: 200px;\n  height: 40px;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  background-color: white;\n  color: black;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: green;\n    color: white;\n  }\n"]))),B=t(1686),D=t.n(B);function J(){var n=(0,I.useState)(""),e=(0,F.Z)(n,2),t=e[0],r=e[1],a=(0,I.useState)(""),i=(0,F.Z)(a,2),o=i[0],s=i[1],d=(0,c.v9)(u),p=(0,c.I0)(),x=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}},h=function(){r(""),s("")};return(0,w.jsxs)(_,{onSubmit:function(n){n.preventDefault(),d.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?D().Notify.failure("".concat(t," is already exist in your contacts")):(p((0,l.uK)({name:t,number:o})),h())},children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(S,{children:"Name"}),(0,w.jsx)(T,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:x})]}),(0,w.jsxs)(P,{children:[" ",(0,w.jsx)(S,{children:"Number"}),(0,w.jsx)(T,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:x})]}),(0,w.jsx)(q,{type:"submit",children:"Add contact"})]})}var K,M,$,E,G,Q=t(6895),H=Z.Z.p(K||(K=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n"]))),O=Z.Z.input(M||(M=(0,m.Z)(["\n  margin-top: 0;\n  margin-bottom: 10px;\n  width: 300px;\n  height: 20px;\n"])));function R(){var n=(0,c.I0)(),e=(0,c.v9)(p);return(0,w.jsxs)("label",{children:[(0,w.jsx)(H,{children:"Find contacts by name"}),(0,w.jsx)(O,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(e){n((0,Q.T)(e.currentTarget.value))}})]})}var U=Z.Z.div($||($=(0,m.Z)(["\n  display: flex;\n"]))),V=Z.Z.h2(E||(E=(0,m.Z)(["\n  font-size: 42px;\n"]))),W=Z.Z.div(G||(G=(0,m.Z)(["\n  padding-left: 50px;\n"])));var X=function(){var n=(0,c.I0)(),e=(0,c.v9)(x),t=(0,c.v9)(h);return(0,I.useEffect)((function(){n((0,l.yF)())}),[n]),(0,w.jsxs)(U,{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(V,{children:"Phonebook"}),(0,w.jsx)(J,{})]}),(0,w.jsxs)(W,{children:[(0,w.jsx)(V,{children:"Contacts"}),(0,w.jsx)(R,{}),(0,w.jsx)(k,{}),e&&!t&&(0,w.jsx)("p",{children:"Loading..."})]})]})}}}]);
//# sourceMappingURL=732.9af82deb.chunk.js.map