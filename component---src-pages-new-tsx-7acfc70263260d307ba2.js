(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return g});a(28),a(24),a(12),a(45),a(121),a(23),a(85);var n=a(0),r=a.n(n),l=a(217),i=a(227),c=a(212),u=a(222),o=a(213),s=a(221),m=a(181),f=a.n(m);function d(e,t){return e.find(function(e){return e.publicURL.indexOf(Object(c.c)(t)+"_thumb")>-1})}var g="2522143202";t.default=function(e){var t=e.children,a=e.dontGroup,n=e.data,c=e.pageContext,m=c.listTypeValue,g=c.thumbnails,v=n.levels.edges.map(function(e){return e.node}),p=Object(i.groupBy)(v,"gameNameUsa"),h=a?r.a.createElement("ul",null,v.map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})):r.a.createElement("ul",null,Object.keys(p).sort(s.a).map(function(e){return r.a.createElement("li",{key:e},e!==m&&r.a.createElement("h2",{className:f.a.gameHeader},e),r.a.createElement("ul",null,p[e].sort(s.b).map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})))}));return r.a.createElement(o.a,{logoClassName:f.a.layoutLogo},r.a.createElement(l.Helmet,null,r.a.createElement("title",null,m," - FGBG")),r.a.createElement("div",{className:f.a.root},r.a.createElement("h1",null,m," ",r.a.createElement("span",{className:f.a.levelCount},t||r.a.createElement("span",null,v.length," background",1!==v.length&&"s"))),r.a.createElement("noscript",null,r.a.createElement("div",{className:f.a.noscriptWarning},"this page loads faster with JavaScript enabled")),h))}},201:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(215),a(23);var n=a(0),r=a.n(n),l=a(212),i=a(230),c=a(177);t.default=function(e){var t=e.data,a=t.newLevelData.edges.map(function(e){return e.node}),n=t.thumbnails.edges.map(function(e){return e.node}).map(function(e){return Object.assign({},e,{width:e.childImageSharp.original.width,height:e.childImageSharp.original.height,dataUrl:e.childImageSharp.fixed.base64})}),u=Object(i.a)(a),o=u.map(function(e){return{node:e}}),s={listTypeValue:"new backgrounds",thumbnails:n.filter(function(e){return u.some(function(t){return e.relativePath&&e.relativePath.indexOf(Object(l.c)(t.imageFileName))>-1})})},m={levels:{edges:o}};return r.a.createElement(c.default,{data:m,pageContext:s})};var u="3576408606"},206:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(220),r=a.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58),i=a.n(l);a.d(t,"a",function(){return i.a});a(209),r.a.createContext({})},209:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},210:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(206);function r(e,t,a){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return t&&(r=[r,Object(n.a)(t)].join("/")),a?[r,"fullscreen"].join("/"):r}},211:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},212:function(e,t,a){"use strict";var n=a(206),r=a(210);function l(e){return"/developer:"+Object(n.a)(e)}function i(e){return"/system:"+Object(n.a)(e)}function c(e){return e?"/year:"+e:"/year:missing"}function u(e){return"/series:"+Object(n.a)(e)}function o(e){return"/game:"+Object(n.a)(e)}a(33);function s(e){return e.split(".")[0]}a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return l}),a.d(t,"f",function(){return i}),a.d(t,"g",function(){return c}),a.d(t,"e",function(){return u}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return s})},213:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),l=a(207),i=a.n(l),c=a(208),u=a(176),o=a.n(u),s=function(e){var t=e.logoClassName,a=e.children,n=i()(o.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{to:"/"},r.a.createElement("div",{className:n})),a)}},214:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),l=a(207),i=a.n(l),c=a(223),u=a.n(c),o=a(178),s=a.n(o),m=function(e){var t=e.className,a=e.width,n=void 0===a?200:a,l=e.thumbnailData,c=e.alt,o=l.height/l.width,m=i()(s.a.root,t);return r.a.createElement("div",{className:m,style:{width:n,paddingBottom:n*o}},r.a.createElement("img",{className:s.a.lowRes,src:l.dataUrl,alt:c}),r.a.createElement("noscript",null,r.a.createElement("img",{className:s.a.highRes,src:l.publicURL,alt:c})),r.a.createElement(u.a,{className:s.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:s.a.highRes,src:l.publicURL,alt:c}))))}},215:function(e,t,a){"use strict";a(216)("fixed",function(e){return function(){return e(this,"tt","","")}})},216:function(e,t,a){var n=a(6),r=a(8),l=a(35),i=/"/g,c=function(e,t,a,n){var r=String(l(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},221:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return l});a(14);function n(e,t){return e.levelName.localeCompare(t.levelName)}var r=/the /i;function l(e,t){var a=e.replace(r,""),n=t.replace(r,"");return a.localeCompare(n)}},222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(207),i=a.n(l),c=a(214),u=a(208),o=a(210),s=a(179),m=a.n(s),f=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,l=e.newPage,c=e.children,s=i()(m.a.root,t),f=Object(o.a)({gameNameUsa:n,levelName:a});return c=c||n+" - "+a,l?r.a.createElement("a",{className:s,href:f,target:"_blank"},c):r.a.createElement(u.a,{className:s,to:f},c)},d=a(180),g=a.n(d);a.d(t,"a",function(){return v});var v=function(e){var t=e.className,a=e.linkClassName,n=e.thumbnailData,l=e.levelName,u=e.gameNameUsa,o=e.children,s=i()(g.a.root,t),m=i()(g.a.backgroundLink,a);return r.a.createElement(f,{className:m,levelName:l,gameNameUsa:u},r.a.createElement("div",{className:s},r.a.createElement(c.a,{thumbnailData:n,alt:l+" from "+u}),r.a.createElement("div",{className:g.a.levelName},o||l)))}},230:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(62),a(125),a(59),a(12),a(46),a(36),a(28);var n=a(0);function r(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){var t=Object(n.useState)(!1),a=t[0],l=t[1];if(Object(n.useEffect)(function(){l(!0)},[]),!a)return[];var i=Math.max.apply(Math,r(e.map(function(e){return e.levelId||0}))),c=!isNaN(sessionStorage.lastMaxLevelId)&&sessionStorage.lastMaxLevelId||localStorage.lastMaxLevelId||i;return localStorage.lastMaxLevelId=i,isNaN(sessionStorage.lastMaxLevelId)&&(sessionStorage.lastMaxLevelId=c),c?e.filter(function(e){return e.levelId&&e.levelId>c}):[]}}}]);
//# sourceMappingURL=component---src-pages-new-tsx-7acfc70263260d307ba2.js.map