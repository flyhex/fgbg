(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return m});n(23),n(120),n(28),n(24),n(12),n(45);var a=n(0),r=n.n(a),l=n(191),u=n(198),c=n(196),o=n(204),i=n(193);function s(e,t){var n={};return e.forEach(function(e){if(e[t]){var a=n[e[t].id]||0;n[e[t].id]=a+1}}),t+" -- count: "+Object.keys(n).length+"\n "+JSON.stringify(n,null,2)}t.default=function(e){var t=e.data,n=t.allGoogleSheetLeveldataRow.edges.map(function(e){return e.node}),a=Object(o.groupBy)(n,"system");return r.a.createElement(c.a,null,r.a.createElement("pre",null,"FGBG (",t.allGoogleSheetLeveldataRow.totalCount," backgrounds)"),r.a.createElement("pre",null,s(t.allGoogleSheetLeveldataRow.edges,"next")),r.a.createElement("pre",null,s(t.allGoogleSheetLeveldataRow.edges,"previous")),Object.keys(a).sort().map(function(e){var t=Object(o.groupBy)(a[e],"gameNameUsa");return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:Object(i.a)(e)},r.a.createElement("h2",null,e)),r.a.createElement("ul",null,Object.keys(t).sort().map(function(e){return r.a.createElement("li",null,r.a.createElement(l.a,{to:Object(i.a)(e)},e),r.a.createElement("ul",null,t[e].map(function(e){return r.a.createElement("li",null,r.a.createElement(u.a,Object.assign({newPage:!0},e),e.levelName))})))})))}))};var m="2458759500"},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(58),u=n.n(l);n.d(t,"a",function(){return u.a});n(192),r.a.createContext({})},192:function(e,t,n){var a;e.exports=(a=n(194))&&a.default||a},193:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(197),r=n.n(a);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},195:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),l=n(191),u=n(175),c=n.n(u),o=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:c.a.logo})),t)}},198:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),l=n(191),u=n(195),c=function(e){var t=e.levelName,n=e.gameNameUsa,a=e.newPage,c=e.children,o=Object(u.a)({gameNameUsa:n,levelName:t});return c=c||n+" - "+t,a?r.a.createElement("a",{href:o,target:"_blank"},c):r.a.createElement(l.a,{to:o},c)}}}]);
//# sourceMappingURL=component---src-pages-debug-tsx-a04c046774fa98218a15.js.map