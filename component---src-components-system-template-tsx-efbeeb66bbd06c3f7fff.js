(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(e,a,n){"use strict";n.r(a),n.d(a,"query",function(){return i});n(28),n(24),n(12),n(45),n(120);var t=n(0),r=n.n(t),u=n(200),c=n(198),l=n(194);function o(e,a){return e.gameNameUsa.localeCompare(a.gameNameUsa)}var i="1343515458";a.default=function(e){var a=e.data.allGoogleSheetLeveldataRow.edges.map(function(e){return e.node}).sort(o),n=Object(u.groupBy)(a,"gameNameUsa"),t=a[0].system;return r.a.createElement(l.a,null,r.a.createElement("pre",null,t),r.a.createElement("ul",null,Object.keys(n).map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,e),r.a.createElement("ul",null,n[e].map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(c.a,e,e.levelName))})))})))}},191:function(e,a,n){"use strict";var t=n(0),r=n.n(t),u=n(58),c=n.n(u);n.d(a,"a",function(){return c.a});n(192),r.a.createContext({})},192:function(e,a,n){var t;e.exports=(t=n(195))&&t.default||t},193:function(e,a,n){"use strict";n.d(a,"a",function(){return u});var t=n(197),r=n.n(t);function u(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,a,n){"use strict";n.d(a,"a",function(){return o});var t=n(0),r=n.n(t),u=n(191),c=n(175),l=n.n(c),o=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{to:"/"},r.a.createElement("div",{className:l.a.logo})),a)}},195:function(e,a,n){"use strict";n.r(a);n(23);var t=n(0),r=n.n(t),u=n(84);a.default=function(e){var a=e.location,n=e.pageResources;return n?r.a.createElement(u.a,Object.assign({location:a,pageResources:n},n.json)):null}},196:function(e,a,n){"use strict";n.d(a,"a",function(){return r});var t=n(193);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(t.a).join("/")}},198:function(e,a,n){"use strict";n.d(a,"a",function(){return l});var t=n(0),r=n.n(t),u=n(191),c=n(196),l=function(e){var a=e.levelName,n=e.gameNameUsa,t=e.newPage,l=e.children,o=Object(c.a)({gameNameUsa:n,levelName:a});return l=l||n+" - "+a,t?r.a.createElement("a",{href:o,target:"_blank"},l):r.a.createElement(u.a,{to:o},l)}}}]);
//# sourceMappingURL=component---src-components-system-template-tsx-efbeeb66bbd06c3f7fff.js.map