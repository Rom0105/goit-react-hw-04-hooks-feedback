(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,c){e.exports={item:"Statistics_item__3iIiB",value:"Statistics_value__2JDyO"}},,function(e,t,c){e.exports={list:"FeedbackOptions_list__1VSjQ",item:"FeedbackOptions_item__1fkCX",button:"FeedbackOptions_button__2MBxu"}},,,function(e,t,c){e.exports={section:"Section_section__383pr",title:"Section_title__1mqLN"}},,,,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(7),i=c.n(s),r=c(4),l=c(6),o=c.n(l),j=c(0);function u(e){var t=e.title,c=e.children;return Object(j.jsxs)("section",{className:o.a.section,children:[Object(j.jsx)("h1",{className:o.a.title,children:t}),c]})}u.defaultProps={title:"",children:[]};var b=u,d=c(3),O=c.n(d);var h=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(j.jsx)("ul",{className:O.a.list,children:t.map((function(e){return Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,type:"button",onClick:function(){return c(e)},children:e})},e)}))})},x=c(1),m=c.n(x);var p=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positivePercentage;return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:m.a.item,children:Object(j.jsxs)("p",{children:["Good: ",Object(j.jsx)("span",{className:m.a.value,children:t})]})}),Object(j.jsx)("li",{className:m.a.item,children:Object(j.jsxs)("p",{children:["Neutral: ",Object(j.jsx)("span",{className:m.a.value,children:c})]})}),Object(j.jsx)("li",{className:m.a.item,children:Object(j.jsxs)("p",{children:["Bad: ",Object(j.jsx)("span",{className:m.a.value,children:n})]})}),Object(j.jsx)("li",{className:m.a.item,children:Object(j.jsxs)("p",{children:["Total: ",Object(j.jsx)("span",{className:m.a.value,children:a(t,c,n)})]})}),Object(j.jsx)("li",{className:m.a.item,children:Object(j.jsxs)("p",{children:["Positive feedback:",Object(j.jsx)("span",{className:m.a.value,children:s(t,c,n)})]})})]})})},v=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})};var f=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),l=i[0],o=i[1],u=Object(n.useState)(0),d=Object(r.a)(u,2),O=d[0],x=d[1],m=function(e,t,c){return e+t+c};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":o((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),Object(j.jsx)(b,{title:"Statistics",children:m(c,l,O)>0?Object(j.jsx)(p,{good:c,neutral:l,bad:O,total:m,positivePercentage:function(e,t,c){return Math.round(100/((e+t+c)/e))+"%"}}):Object(j.jsx)(v,{message:"No feedback given"})})]})};c(13),c(14);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f5627865.chunk.js.map