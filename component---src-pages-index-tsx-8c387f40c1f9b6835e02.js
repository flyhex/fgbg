(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{191:function(e,t,a){"use strict";a.r(t);a(122);var n=a(0),r=a.n(n),i=(a(23),a(59),a(12),a(194)),c=a(197),o=a.n(c),s=a(244),u=a(206),l=a(186),m=a.n(l),d=function(e){var t=e.levelName,a=e.gameNameUsa;return r.a.createElement("div",null,r.a.createElement(i.a,{to:Object(u.a)({levelName:t,gameNameUsa:a})},t," from ",a))},f=function(e){var t=e.className,a=e.data,n=o()(m.a.root,t);return r.a.createElement("div",{className:n},r.a.createElement(s.a,{onChange:function(e){return alert(JSON.stringify(e))}},function(e){var t,n=e.isOpen,i=e.getInputProps,c=e.inputValue;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},i(),{placeholder:"search backgrounds..."})),r.a.createElement("ul",null,n&&(t=c,t?(t=t.toLowerCase(),a.filter(function(e){return e.levelName.toLowerCase().indexOf(t)>-1||e.gameNameUsa.toLowerCase().indexOf(t)>-1||e.system.toLowerCase().indexOf(t)>-1||e.developer.toLowerCase().indexOf(t)>-1||e.year&&e.year.toString().indexOf(t)>-1||e.series.indexOf(t)>1})):[]).map(function(e){return r.a.createElement("li",null,r.a.createElement(d,e))})))}))},v=a(187),p=a.n(v),g=function(e){var t=e.className,a=o()(p.a.root,t),n=o()(p.a.titleText,p.a.fightingGameText),i=o()(p.a.titleText,p.a.backgroundsText);return r.a.createElement("div",{className:a},r.a.createElement("div",{className:p.a.logo}),r.a.createElement("div",{className:n},"fighting game"),r.a.createElement("div",{className:i},"backgrounds"))},E=(a(28),a(24),a(188)),b=a.n(E),N=function(e){return r.a.createElement("div",{className:b.a.root},r.a.createElement("h3",null,e.title),r.a.createElement("ul",null,e.values.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement(i.a,{to:e.pathFn(t)},t))})))},h=a(209),w=a(189),y=a.n(w);a.d(t,"query",function(){return O});t.default=function(e){var t=e.data,a=t.searchData.edges.map(function(e){return e.node});return r.a.createElement("div",{className:y.a.root},r.a.createElement("div",{className:y.a.content},r.a.createElement(h.a,{title:"Fighting Game Backgrounds"}),r.a.createElement(g,{className:y.a.header}),r.a.createElement(f,{className:y.a.search,data:a}),r.a.createElement("p",null,"or browse ",t.searchData.totalCount," backgrounds by"),r.a.createElement("div",{className:y.a.browseColumnContainer},r.a.createElement(N,{title:"series",pathFn:u.d,values:t.series.distinct}),r.a.createElement(N,{title:"developer",pathFn:u.b,values:t.developers.distinct}),r.a.createElement(N,{title:"system",pathFn:u.e,values:t.systems.distinct}),r.a.createElement(N,{title:"year released",pathFn:u.f,values:t.years.distinct}))))};var O="735729389"},193:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(199),r=a.n(n);function i(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(58),c=a.n(i);a.d(t,"a",function(){return c.a});a(195),r.a.createContext({})},195:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},196:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(n.a).join("/")}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/system:"+Object(n.a)(e)}},202:function(e,t,a){"use strict";function n(e){return e?"/year:"+e:"/year:missing"}a.d(t,"a",function(){return n})},203:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/game:"+Object(n.a)(e)}},204:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/developer:"+Object(n.a)(e)}},206:function(e,t,a){"use strict";var n=a(196),r=a(204),i=a(201),c=a(202),o=a(193);function s(e){return"/series:"+Object(o.a)(e)}a(203),a(33);function u(e){return e.split(".")[0]}a.d(t,"a",function(){return n.a}),a.d(t,"b",function(){return r.a}),a.d(t,"e",function(){return i.a}),a.d(t,"f",function(){return c.a}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return u})},209:function(e,t,a){"use strict";var n=a(210),r=a(0),i=a.n(r),c=a(207),o=a.n(c);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,s=e.meta,u=void 0===s?[]:s,l=e.title,m=n.data.site,d=a||m.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:c},title:l,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(u)})}},210:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8c387f40c1f9b6835e02.js.map