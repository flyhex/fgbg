(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(e,t,n){"use strict";n.r(t);n(28),n(24),n(12);var a=n(0),r=n.n(a),i=n(190),c=n(240),u=n(194),l=(n(59),n(195)),o=n.n(l),s=n(241),m=n(202),d=function(e){var t=e.levelName,n=e.gameNameUsa;return r.a.createElement("div",null,r.a.createElement(i.a,{to:Object(m.a)({levelName:t,gameNameUsa:n})},t," from ",n))},f=function(e){var t=e.className,n=e.data,a=o()(t);return r.a.createElement("div",{className:a},r.a.createElement(s.a,{onChange:function(e){return alert(JSON.stringify(e))}},function(e){var t,a=e.isOpen,i=e.getInputProps,c=e.inputValue;return r.a.createElement("div",null,r.a.createElement("input",i()),r.a.createElement("ul",null,a&&(t=c,t?(t=t.toLowerCase(),n.filter(function(e){return e.levelName.toLowerCase().indexOf(t)>-1||e.gameNameUsa.toLowerCase().indexOf(t)>-1||e.system.toLowerCase().indexOf(t)>-1||e.developer.toLowerCase().indexOf(t)>-1||e.year&&e.year.toString().indexOf(t)>-1||e.series.indexOf(t)>1})):[]).map(function(e){return r.a.createElement("li",null,r.a.createElement(d,e))})))}))},v=n(205),p=(n(185),n(186)),E=n.n(p);n.d(t,"query",function(){return h});var g=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("ul",null,e.values.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement(i.a,{to:e.pathFn(t)},t))})))},h=(t.default=function(e){var t=e.data,n=t.searchData.edges.map(function(e){return e.node});return r.a.createElement(u.a,null,r.a.createElement(v.a,{title:"Fighting Game Backgrounds"}),r.a.createElement("h1",null,"FGBG"),r.a.createElement(c.d,null,r.a.createElement(c.b,null,r.a.createElement(c.a,null,"Browse"),r.a.createElement(c.a,null,"Search")),r.a.createElement(c.c,null,r.a.createElement("h2",null,"Browse ",t.searchData.totalCount," backgrounds by"),r.a.createElement("div",{className:E.a.browseColumnContainer},r.a.createElement(g,{title:"Series",pathFn:m.d,values:t.series.distinct}),r.a.createElement(g,{title:"Developer",pathFn:m.b,values:t.developers.distinct}),r.a.createElement(g,{title:"System",pathFn:m.e,values:t.systems.distinct}),r.a.createElement(g,{title:"Year Released",pathFn:m.f,values:t.years.distinct}))),r.a.createElement(c.c,null,r.a.createElement("h2",null,"Search"),r.a.createElement(f,{data:n}))))},"735729389")},189:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(196),r=n.n(a);function i(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(58),c=n.n(i);n.d(t,"a",function(){return c.a});n(191),r.a.createContext({})},191:function(e,t,n){var a;e.exports=(a=n(193))&&a.default||a},192:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(189);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},193:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),i=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},194:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),i=n(190),c=n(175),u=n.n(c),l=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/"},r.a.createElement("div",{className:u.a.logo})),t)}},197:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(189);function r(e){return"/system:"+Object(a.a)(e)}},198:function(e,t,n){"use strict";function a(e){return e?"/year:"+e:"/year:missing"}n.d(t,"a",function(){return a})},199:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(189);function r(e){return"/game:"+Object(a.a)(e)}},200:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(189);function r(e){return"/developer:"+Object(a.a)(e)}},202:function(e,t,n){"use strict";var a=n(192),r=n(200),i=n(197),c=n(198),u=n(189);function l(e){return"/series:"+Object(u.a)(e)}n(199),n(33);function o(e){return e.split(".")[0]}n.d(t,"a",function(){return a.a}),n.d(t,"b",function(){return r.a}),n.d(t,"e",function(){return i.a}),n.d(t,"f",function(){return c.a}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return o})},205:function(e,t,n){"use strict";var a=n(206),r=n(0),i=n.n(r),c=n(203),u=n.n(c);t.a=function(e){var t=e.description,n=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,l=e.meta,o=void 0===l?[]:l,s=e.title,m=a.data.site,d=n||m.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:c},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o)})}},206:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0c6d355b8356d6d12d2b.js.map