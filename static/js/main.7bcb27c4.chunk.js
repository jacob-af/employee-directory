(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(13),s=n.n(a),i=(n(19),n(20),n(21),n(3)),o=n(14),l=n.n(o),d={search:function(){return l.a.get("https://randomuser.me/api/?results=500&nat=us,gb,dk,de,fr")}},u=n(0),j=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-center header",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center",children:"A randomly generated list of employees for you to sort and filter"})]})},b=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.person.name.title}),Object(u.jsx)("td",{children:e.person.name.first}),Object(u.jsx)("td",{children:e.person.name.last}),Object(u.jsx)("td",{children:e.person.dob.age}),Object(u.jsx)("td",{children:e.person.location.city}),Object(u.jsx)("td",{children:e.person.location.country}),Object(u.jsx)("td",{children:e.person.cell})]})},h=function(e){var t=e.bundle,n=t.formatPersonnel,c=t.currentPage,r=t.recordsPerPage;return Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("table",{className:"table table-bordered table-dark table-hover table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:"First Name"}),Object(u.jsx)("td",{children:"Last Name"}),Object(u.jsx)("td",{children:"Age"}),Object(u.jsx)("td",{children:"City"}),Object(u.jsx)("td",{children:"Country"}),Object(u.jsx)("td",{children:"Number"})]})}),Object(u.jsx)("tbody",{children:n()[0]?n().slice(r*(c-1),r*c).map((function(e){return Object(u.jsx)(b,{person:e},e.index)})):Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"*"}),Object(u.jsx)("td",{children:"*"}),Object(u.jsx)("td",{children:"*"}),Object(u.jsx)("td",{children:"No Results Found"}),Object(u.jsx)("td",{children:"*"}),Object(u.jsx)("td",{children:"*"}),Object(u.jsx)("td",{children:"*"})]})})]})})},O=function(e){var t=e.array,n=e.callback,c=e.children;return Object(u.jsxs)("select",{onChange:function(e){return n(e.target.value)},className:"dropdown",children:[Object(u.jsx)("option",{value:"none",children:c}),t.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))]})},x=function(e){var t=e.bundle,n=t.changePage,c=t.changeNumberOfRecords,r=t.currentPage,a=t.recordsPerPage,s=(0,t.formatPersonnel)();return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("button",{style:{opacity:r>1?1:.4},onClick:n,className:"card-btn","data-value":"back",children:"<--Back"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("p",{className:"text-center",children:["Page ",r," of ",Math.ceil(s.length/a)]})}),Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)(O,{callback:c,array:[15,20,25,50],children:"10"})}),Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("button",{style:{opacity:r<s.length/a?1:.4},onClick:n,className:"card-btn","data-value":"next",children:"Next--\x3e"})})]})};var m=function(e){return Object(u.jsxs)("div",{className:"row justify-content-center",children:[Object(u.jsx)("div",{className:"col-3",children:Object(u.jsx)("p",{className:"text-center",children:"Search by Name:"})}),Object(u.jsx)("div",{className:"col-3",children:Object(u.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"term",list:"term",type:"text",placeholder:"Type in a name",id:"term"})})]})},f=function(e){var t=e.bundle,n=t.sort,c=t.countryFilter,r=t.ageFilter,a=t.setSort,s=t.changeCountryFilter,i=t.changeAgeFilter;return Object(u.jsxs)("div",{className:"row mb-2",children:[Object(u.jsx)("div",{className:"col-3",children:Object(u.jsx)(O,{callback:a,array:["First Name (ASC)","First Name (DESC)","Last Name (ASC)","Last Name (DESC)","Age (ASC)","Age (DESC)","City (ASC)","City (DESC)"],children:"none"===n?"Sort by:":"(none)"})}),Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)(O,{callback:s,array:["United States","France","Germany","Denmark","United Kingdom"],children:"none"===c?"Filter by Country":"(none)"})}),Object(u.jsx)("div",{className:"col-4",children:Object(u.jsx)(O,{callback:i,array:["21-35","36-45","46-55","56-65","66+"],children:"none"===r?"Filter by Age":"(none)"})})]})},g=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("none"),s=Object(i.a)(a,2),o=s[0],l=s[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),g=O[0],y=O[1],p=Object(c.useState)("none"),N=Object(i.a)(p,2),C=N[0],v=N[1],S=Object(c.useState)("none"),F=Object(i.a)(S,2),P=F[0],A=F[1],k=Object(c.useState)(1),w=Object(i.a)(k,2),D=w[0],E=w[1],L=Object(c.useState)(10),I=Object(i.a)(L,2),B=I[0],R=I[1];Object(c.useEffect)((function(){d.search().then((function(e){console.log(e.data.results);var t=e.data.results.map((function(e,t){return e.index=t,e}));r(t)})).catch((function(e){return console.log(e)}))}),[]);var T=function(){return n.filter(""!==g?function(e){return e.name.first.toLowerCase().includes(g.toLowerCase())||e.name.last.toLowerCase().includes(g.toLowerCase())}:function(e){return e}).filter("none"===C?function(e){return e}:function(e){return e.location.country===C}).filter(function(){switch(P){case"21-35":return function(e){return e.dob.age>=21&&e.dob.age<=35};case"36-45":return function(e){return e.dob.age>=36&&e.dob.age<=45};case"46-55":return function(e){return e.dob.age>=46&&e.dob.age<=55};case"56-65":return function(e){return e.dob.age>=56&&e.dob.age<=65};case"66+":return function(e){return e.dob.age>=66};case"none":default:return function(e){return e}}}()).sort(function(){switch(o){case"First Name (ASC)":return function(e,t){return e.name.first>t.name.first?1:-1};case"First Name (DESC)":return function(e,t){return e.name.first<t.name.first?1:-1};case"Last Name (ASC)":return function(e,t){return e.name.last>t.name.last?1:-1};case"Last Name (DESC)":return function(e,t){return e.name.last<t.name.last?1:-1};case"Age (ASC)":return function(e,t){return e.dob.age>t.dob.age?1:-1};case"Age (DESC)":return function(e,t){return e.dob.age<t.dob.age?1:-1};case"City (ASC)":return function(e,t){return e.location.city>t.location.city?1:-1};case"City (DESC)":return function(e,t){return e.location.city<t.location.city?1:-1};case"none":default:return function(e,t){return e.index>t.index?1:-1}}}())};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(m,{search:g,handleInputChange:function(e){y(e.target.value.trim()),E(1)}}),Object(u.jsx)(f,{bundle:{sort:o,countryFilter:C,ageFilter:P,setSort:l,changeCountryFilter:function(e){v(e),E(1)},changeAgeFilter:function(e){A(e),E(1)}}}),Object(u.jsx)(x,{bundle:{changePage:function(e){"next"===e.target.getAttribute("data-value")?D<T().length/B&&E(D+1):D>1&&E(D-1)},changeNumberOfRecords:function(e){R("none"===e?10:e),E(1)},currentPage:D,recordsPerPage:B,formatPersonnel:T}}),Object(u.jsx)(h,{bundle:{currentPage:D,recordsPerPage:B,formatPersonnel:T}})]})};var y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(g,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.7bcb27c4.chunk.js.map