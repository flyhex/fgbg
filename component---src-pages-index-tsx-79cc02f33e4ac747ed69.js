(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{190:function(e,t,n){"use strict";n.r(t);n(28),n(24),n(12);var a=n(0),r=n.n(a),i=n(191),c=n(234),l=n(196),u=(n(59),n(199)),o=n.n(u),s=n(235),m=n(195),d=n(203),f=n(200),v=n(201),p=n(193);function E(e){return"/series:"+Object(p.a)(e)}n(202);var g=function(e){var t=e.levelName,n=e.gameNameUsa;return r.a.createElement("div",null,r.a.createElement(i.a,{to:Object(m.a)({levelName:t,gameNameUsa:n})},t," from ",n))},h=function(e){var t=e.className,n=e.data,a=o()(t);return r.a.createElement("div",{className:a},r.a.createElement(s.a,{onChange:function(e){return alert(JSON.stringify(e))}},function(e){var t,a=e.isOpen,i=e.getInputProps,c=e.inputValue;return r.a.createElement("div",null,r.a.createElement("input",i()),r.a.createElement("ul",null,a&&(t=c,t?(t=t.toLowerCase(),n.filter(function(e){return e.levelName.toLowerCase().indexOf(t)>-1||e.gameNameUsa.toLowerCase().indexOf(t)>-1||e.system.toLowerCase().indexOf(t)>-1||e.developer.toLowerCase().indexOf(t)>-1||e.year&&e.year.toString().indexOf(t)>-1||e.series.indexOf(t)>1})):[]).map(function(e){return r.a.createElement("li",null,r.a.createElement(g,e))})))}))},w=n(207),y=(n(187),n(188)),b=n.n(y);n.d(t,"query",function(){return N});var O=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("ul",null,e.values.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement(i.a,{to:e.pathFn(t)},t))})))},N=(t.default=function(e){var t=e.data,n=t.searchData.edges.map(function(e){return e.node});return r.a.createElement(l.a,null,r.a.createElement(w.a,{title:"Fighting Game Backgrounds"}),r.a.createElement("h1",null,"FGBG"),r.a.createElement(c.d,null,r.a.createElement(c.b,null,r.a.createElement(c.a,null,"Browse"),r.a.createElement(c.a,null,"Search")),r.a.createElement(c.c,null,r.a.createElement("h2",null,"Browse ",t.searchData.totalCount," backgrounds by"),r.a.createElement("div",{className:b.a.browseColumnContainer},r.a.createElement(O,{title:"Series",pathFn:E,values:t.series.distinct}),r.a.createElement(O,{title:"Developer",pathFn:d.a,values:t.developers.distinct}),r.a.createElement(O,{title:"System",pathFn:f.a,values:t.systems.distinct}),r.a.createElement(O,{title:"Year Released",pathFn:v.a,values:t.years.distinct}))),r.a.createElement(c.c,null,r.a.createElement("h2",null,"Search"),r.a.createElement(h,{data:n}))))},"735729389")},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(58),c=n.n(i);n.d(t,"a",function(){return c.a});n(192),r.a.createContext({})},192:function(e,t,n){var a;e.exports=(a=n(194))&&a.default||a},193:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(197),r=n.n(a);function i(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),i=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},195:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),i=n(191),c=n(175),l=n.n(c),u=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/"},r.a.createElement("div",{className:l.a.logo})),t)}},200:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/system:"+Object(a.a)(e)}},201:function(e,t,n){"use strict";function a(e){return e?"/year:"+e:"/year:missing"}n.d(t,"a",function(){return a})},202:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/game:"+Object(a.a)(e)}},203:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/developer:"+Object(a.a)(e)}},207:function(e,t,n){"use strict";var a=n(208),r=n(0),i=n.n(r),c=n(205),l=n.n(c);t.a=function(e){var t=e.description,n=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,u=e.meta,o=void 0===u?[]:u,s=e.title,m=a.data.site,d=n||m.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:c},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o)})}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-79cc02f33e4ac747ed69.js.map