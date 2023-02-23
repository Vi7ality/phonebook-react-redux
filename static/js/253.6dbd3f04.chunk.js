"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{4585:function(e,r,n){n.d(r,{l:function(){return v}});var i=n(1413),a=n(4925),l=n(2701),t=n(7872),o=n(9219),s=n(2996),d=n(2952),u=n(6992),c=n(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,r){var n,t=(0,o.mq)("FormLabel",e),v=(0,s.Lr)(e),p=(v.className,v.children),h=v.requiredIndicator,g=void 0===h?(0,c.jsx)(f,{}):h,b=v.optionalIndicator,x=void 0===b?null:b,Z=(0,a.Z)(v,m),y=(0,l.NJ)(),k=null!=(n=null==y?void 0:y.getLabelProps(Z,r))?n:(0,i.Z)({ref:r},Z);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},k),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[p,(null==y?void 0:y.isRequired)?g:x]}))}));v.displayName="FormLabel";var f=(0,t.G)((function(e,r){var n=(0,l.NJ)(),a=(0,l.e)();if(!(null==n?void 0:n.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:a.requiredIndicator,className:t}))}));f.displayName="RequiredIndicator"},2701:function(e,r,n){n.d(r,{NI:function(){return N},NJ:function(){return _},e:function(){return Z}});var i=n(1413),a=n(4925),l=n(9439),t=n(9886),o=n(4591),s=n(7872),d=n(9219),u=n(2996),c=n(2952),m=n(6992),v=n(2791),f=n(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],g=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(g,2),x=b[0],Z=b[1],y=(0,t.k)({strict:!1,name:"FormControlContext"}),k=(0,l.Z)(y,2),I=k[0],_=k[1];var N=(0,s.G)((function(e,r){var n=(0,d.jC)("Form",e),t=function(e){var r=e.id,n=e.isRequired,t=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,p),c=(0,v.useId)(),f=r||"field-".concat(c),h="".concat(f,"-label"),g="".concat(f,"-feedback"),b="".concat(f,"-helptext"),x=(0,v.useState)(!1),Z=(0,l.Z)(x,2),y=Z[0],k=Z[1],I=(0,v.useState)(!1),_=(0,l.Z)(I,2),N=_[0],R=_[1],q=(0,v.useState)(!1),j=(0,l.Z)(q,2),F=j[0],C=j[1],B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,o.lq)(r,(function(e){e&&R(!0)}))})}),[b]),P=(0,v.useCallback)((function(){var e,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},n),{},{ref:a,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d),id:null!=(e=n.id)?e:h,htmlFor:null!=(r=n.htmlFor)?r:f})}),[f,s,F,t,d,h]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},e),{},{ref:(0,o.lq)(r,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[g]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!s,isFocused:!!F,onFocus:function(){return C(!0)},onBlur:function(){return C(!1)},hasFeedbackText:y,setHasFeedbackText:k,hasHelpText:N,setHasHelpText:R,id:f,labelId:h,feedbackId:g,helpTextId:b,htmlProps:u,getHelpTextProps:B,getErrorMessageProps:T,getRootProps:S,getLabelProps:P,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),s=t.getRootProps,g=(t.htmlProps,(0,a.Z)(t,h)),b=(0,m.cx)("chakra-form-control",e.className);return(0,f.jsx)(I,{value:g,children:(0,f.jsx)(x,{value:n,children:(0,f.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},s({},r)),{},{className:b,__css:n.container}))})})}));N.displayName="FormControl",(0,s.G)((function(e,r){var n=_(),a=Z(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:a.helperText,className:l}))})).displayName="FormHelperText"},7886:function(e,r,n){n.d(r,{I:function(){return h}});var i=n(1413),a=n(4925),l=n(2701),t=n(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,n,o,d=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,f=e.isRequired,p=e.isInvalid,h=e.isReadOnly,g=e.isDisabled,b=e.onFocus,x=e.onBlur,Z=(0,a.Z)(e,s),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:g)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=m?m:h)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=v?v:f)?o:null==d?void 0:d.isRequired,isInvalid:null!=p?p:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,x)})}(e),n=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,a.Z)(r,o);return(0,i.Z)((0,i.Z)({},m),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=n(7872),c=n(9219),m=n(2996),v=n(2952),f=n(184),p=["htmlSize"],h=(0,u.G)((function(e,r){var n=e.htmlSize,l=(0,a.Z)(e,p),o=(0,c.jC)("Input",l),s=d((0,m.Lr)(l)),u=(0,t.cx)("chakra-input",e.className);return(0,f.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:n},s),{},{__css:o.field,ref:r,className:u}))}));h.displayName="Input",h.id="Input"},1213:function(e,r,n){n.d(r,{g:function(){return g}});var i=n(1413),a=n(4942),l=n(4925),t=n(2952),o=n(184),s=function(e){return(0,o.jsx)(t.m.div,(0,i.Z)((0,i.Z)({className:"chakra-stack__item"},e),{},{__css:(0,i.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};s.displayName="StackItem";var d=n(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,r){return Array.isArray(e)?e.map((function(e){return null===e?null:r(e)})):(0,d.Kn)(e)?Object.keys(e).reduce((function(n,i){return n[i]=r(e[i]),n}),{}):null!=e?r(e):null}var c="& > *:not(style) ~ *:not(style)";var m=n(7872),v=n(7200),f=n(2791),p=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],h=(0,m.G)((function(e,r){var n=e.isInline,m=e.direction,h=e.align,g=e.justify,b=e.spacing,x=void 0===b?"0.5rem":b,Z=e.wrap,y=e.children,k=e.divider,I=e.className,_=e.shouldWrapChildren,N=(0,l.Z)(e,p),R=n?"row":null!=m?m:"column",q=(0,f.useMemo)((function(){return function(e){var r=e.spacing,n=e.direction,i={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(0,a.Z)({flexDirection:n},c,u(n,(function(e){return i[e]})))}({direction:R,spacing:x})}),[R,x]),j=(0,f.useMemo)((function(){return function(e){var r=e.spacing,n=e.direction,i={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":u(n,(function(e){return i[e]}))}}({spacing:x,direction:R})}),[x,R]),F=!!k,C=!_&&!F,B=(0,f.useMemo)((function(){var e=(0,v.W)(y);return C?e:e.map((function(r,n){var i="undefined"!==typeof r.key?r.key:n,a=n+1===e.length,l=_?(0,o.jsx)(s,{children:r},i):r;if(!F)return l;var t=(0,f.cloneElement)(k,{__css:j}),d=a?null:t;return(0,o.jsxs)(f.Fragment,{children:[l,d]},i)}))}),[k,j,F,C,_,y]),P=(0,d.cx)("chakra-stack",I);return(0,o.jsx)(t.m.div,(0,i.Z)((0,i.Z)({ref:r,display:"flex",alignItems:h,justifyContent:g,flexDirection:q.flexDirection,flexWrap:Z,className:P,__css:F?{}:(0,a.Z)({},c,q[c])},N),{},{children:B}))}));h.displayName="Stack";var g=(0,m.G)((function(e,r){return(0,o.jsx)(h,(0,i.Z)((0,i.Z)({align:"center"},e),{},{direction:"column",ref:r}))}));g.displayName="VStack"},7200:function(e,r,n){n.d(r,{W:function(){return a}});var i=n(2791);function a(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}}}]);
//# sourceMappingURL=253.6dbd3f04.chunk.js.map