(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return g});a(28),a(24),a(12),a(45),a(121),a(23),a(85);var n=a(0),r=a.n(n),l=a(216),c=a(227),i=a(212),u=a(222),s=a(213),o=a(221),m=a(181),f=a.n(m);function d(e,t){return e.find(function(e){return e.publicURL.indexOf(Object(i.c)(t)+"_thumb")>-1})}var g="2522143202";t.default=function(e){var t=e.children,a=e.dontGroup,n=e.data,i=e.pageContext,m=i.listTypeValue,g=i.thumbnails,v=i.description,h=n.levels.edges.map(function(e){return e.node}),p=Object(c.groupBy)(h,"gameNameUsa"),N=a?r.a.createElement("ul",null,h.map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})):r.a.createElement("ul",null,Object.keys(p).sort(o.a).map(function(e){return r.a.createElement("li",{key:e},e!==m&&r.a.createElement("h2",{className:f.a.gameHeader},e),r.a.createElement("ul",null,p[e].sort(o.b).map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})))}));return r.a.createElement(s.a,{logoClassName:f.a.layoutLogo},r.a.createElement(l.Helmet,null,r.a.createElement("title",null,m," - FGBG")),r.a.createElement("div",{className:f.a.root},r.a.createElement("h1",null,m," ",r.a.createElement("span",{className:f.a.levelCount},t||r.a.createElement("span",null,h.length," background",1!==h.length&&"s"))),v&&r.a.createElement("p",null,v),r.a.createElement("noscript",null,r.a.createElement("div",{className:f.a.noscriptWarning},"this page loads faster with JavaScript enabled")),N))}},202:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});a(218),a(23);var n=a(0),r=a.n(n),l=a(212),c=a(177);t.default=function(e){var t=e.data,a=t.latestLevels.edges.map(function(e){return e.node}),n=t.thumbnails.edges.map(function(e){return e.node}).map(function(e){return Object.assign({},e,{width:e.childImageSharp.original.width,height:e.childImageSharp.original.height,dataUrl:e.childImageSharp.fixed.base64})}),i=a.map(function(e){return{node:e}}),u={listTypeValue:"the latest",thumbnails:n.filter(function(e){return a.some(function(t){return e.relativePath.indexOf(Object(l.c)(t.imageFileName))>-1})})},s={levels:{edges:i}};return r.a.createElement(c.default,{dontGroup:!0,data:s,pageContext:u},"the 20 most recently added backgrounds")};var i="4039516452"},206:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(220),r=a.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58),c=a.n(l);a.d(t,"a",function(){return c.a});a(209),r.a.createContext({})},209:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},210:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(206);function r(e,t,a){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return t&&(r=[r,Object(n.a)(t)].join("/")),a?[r,"fullscreen"].join("/"):r}},211:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},212:function(e,t,a){"use strict";var n=a(206),r=a(210);function l(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/other:"+Object(n.a)(e)}function i(e){return"/system:"+Object(n.a)(e)}function u(e){return e?"/year:"+e:"/year:missing"}function s(e){return"/series:"+Object(n.a)(e)}function o(e){return"/game:"+Object(n.a)(e)}a(33);function m(e){return e.split(".")[0]}a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return l}),a.d(t,"e",function(){return c}),a.d(t,"g",function(){return i}),a.d(t,"h",function(){return u}),a.d(t,"f",function(){return s}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return m})},213:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),l=a(207),c=a.n(l),i=a(208),u=a(176),s=a.n(u),o=function(e){var t=e.logoClassName,a=e.children,n=c()(s.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/"},r.a.createElement("div",{className:n})),a)}},217:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),l=a(207),c=a.n(l),i=a(223),u=a.n(i),s=a(178),o=a.n(s),m=function(e){var t=e.className,a=e.width,n=void 0===a?200:a,l=e.thumbnailData,i=e.alt,s=l.height/l.width,m=c()(o.a.root,t);return r.a.createElement("div",{className:m,style:{width:n,paddingBottom:n*s}},r.a.createElement("img",{className:o.a.lowRes,src:l.dataUrl,alt:i}),r.a.createElement("noscript",null,r.a.createElement("img",{className:o.a.highRes,src:l.publicURL,alt:i})),r.a.createElement(u.a,{className:o.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:o.a.highRes,src:l.publicURL,alt:i}))))}},218:function(e,t,a){"use strict";a(219)("fixed",function(e){return function(){return e(this,"tt","","")}})},219:function(e,t,a){var n=a(6),r=a(8),l=a(35),c=/"/g,i=function(e,t,a,n){var r=String(l(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},221:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return l});a(14);function n(e,t){return e.levelName.localeCompare(t.levelName)}var r=/the /i;function l(e,t){var a=e.replace(r,""),n=t.replace(r,"");return a.localeCompare(n)}},222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(207),c=a.n(l),i=a(217),u=a(208),s=a(210),o=a(179),m=a.n(o),f=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,l=e.newPage,i=e.children,o=c()(m.a.root,t),f=Object(s.a)({gameNameUsa:n,levelName:a});return i=i||n+" - "+a,l?r.a.createElement("a",{className:o,href:f,target:"_blank"},i):r.a.createElement(u.a,{className:o,to:f},i)},d=a(180),g=a.n(d);a.d(t,"a",function(){return v});var v=function(e){var t=e.className,a=e.linkClassName,n=e.thumbnailData,l=e.levelName,u=e.gameNameUsa,s=e.children,o=c()(g.a.root,t),m=c()(g.a.backgroundLink,a);return r.a.createElement(f,{className:m,levelName:l,gameNameUsa:u},r.a.createElement("div",{className:o},r.a.createElement(i.a,{thumbnailData:n,alt:l+" from "+u}),r.a.createElement("div",{className:g.a.levelName},s||l)))}}}]);
//# sourceMappingURL=component---src-pages-newest-tsx-76c7c4bed8cc9a1d4be8.js.map