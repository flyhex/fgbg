(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{177:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return g});t(28),t(24),t(12),t(45),t(121),t(23),t(85);var n=t(0),r=t.n(n),l=t(217),c=t(227),i=t(212),u=t(222),s=t(213),o=t(221),m=t(181),f=t.n(m);function d(e,a){return e.find(function(e){return e.publicURL.indexOf(Object(i.c)(a)+"_thumb")>-1})}var g="2522143202";a.default=function(e){var a=e.children,t=e.dontGroup,n=e.data,i=e.pageContext,m=i.listTypeValue,g=i.thumbnails,v=n.levels.edges.map(function(e){return e.node}),h=Object(c.groupBy)(v,"gameNameUsa"),p=t?r.a.createElement("ul",null,v.map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})):r.a.createElement("ul",null,Object.keys(h).sort(o.a).map(function(e){return r.a.createElement("li",{key:e},e!==m&&r.a.createElement("h2",{className:f.a.gameHeader},e),r.a.createElement("ul",null,h[e].sort(o.b).map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})))}));return r.a.createElement(s.a,{logoClassName:f.a.layoutLogo},r.a.createElement(l.Helmet,null,r.a.createElement("title",null,m," - FGBG")),r.a.createElement("div",{className:f.a.root},r.a.createElement("h1",null,m," ",r.a.createElement("span",{className:f.a.levelCount},a||r.a.createElement("span",null,v.length," background",1!==v.length&&"s"))),r.a.createElement("noscript",null,r.a.createElement("div",{className:f.a.noscriptWarning},"this page loads faster with JavaScript enabled")),p))}},202:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return i});t(215),t(23);var n=t(0),r=t.n(n),l=t(212),c=t(177);a.default=function(e){var a=e.data,t=a.latestLevels.edges.map(function(e){return e.node}),n=a.thumbnails.edges.map(function(e){return e.node}).map(function(e){return Object.assign({},e,{width:e.childImageSharp.original.width,height:e.childImageSharp.original.height,dataUrl:e.childImageSharp.fixed.base64})}),i=t.map(function(e){return{node:e}}),u={listTypeValue:"the latest",thumbnails:n.filter(function(e){return t.some(function(a){return e.relativePath.indexOf(Object(l.c)(a.imageFileName))>-1})})},s={levels:{edges:i}};return r.a.createElement(c.default,{dontGroup:!0,data:s,pageContext:u},"the 20 most recently added backgrounds")};var i="4039516452"},206:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(220),r=t.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},208:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(58),c=t.n(l);t.d(a,"a",function(){return c.a});t(209),r.a.createContext({})},209:function(e,a,t){var n;e.exports=(n=t(211))&&n.default||n},210:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(206);function r(e,a,t){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return a&&(r=[r,Object(n.a)(a)].join("/")),t?[r,"fullscreen"].join("/"):r}},211:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),r=t.n(n),l=t(84);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}},212:function(e,a,t){"use strict";var n=t(206),r=t(210);function l(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/system:"+Object(n.a)(e)}function i(e){return e?"/year:"+e:"/year:missing"}function u(e){return"/series:"+Object(n.a)(e)}function s(e){return"/game:"+Object(n.a)(e)}t(33);function o(e){return e.split(".")[0]}t.d(a,"a",function(){return r.a}),t.d(a,"b",function(){return l}),t.d(a,"f",function(){return c}),t.d(a,"g",function(){return i}),t.d(a,"e",function(){return u}),t.d(a,"d",function(){return s}),t.d(a,"c",function(){return o})},213:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(0),r=t.n(n),l=t(207),c=t.n(l),i=t(208),u=t(176),s=t.n(u),o=function(e){var a=e.logoClassName,t=e.children,n=c()(s.a.logo,a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/"},r.a.createElement("div",{className:n})),t)}},214:function(e,a,t){"use strict";t.d(a,"a",function(){return m});var n=t(0),r=t.n(n),l=t(207),c=t.n(l),i=t(223),u=t.n(i),s=t(178),o=t.n(s),m=function(e){var a=e.className,t=e.width,n=void 0===t?200:t,l=e.thumbnailData,i=e.alt,s=l.height/l.width,m=c()(o.a.root,a);return r.a.createElement("div",{className:m,style:{width:n,paddingBottom:n*s}},r.a.createElement("img",{className:o.a.lowRes,src:l.dataUrl,alt:i}),r.a.createElement("noscript",null,r.a.createElement("img",{className:o.a.highRes,src:l.publicURL,alt:i})),r.a.createElement(u.a,{className:o.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:o.a.highRes,src:l.publicURL,alt:i}))))}},215:function(e,a,t){"use strict";t(216)("fixed",function(e){return function(){return e(this,"tt","","")}})},216:function(e,a,t){var n=t(6),r=t(8),l=t(35),c=/"/g,i=function(e,a,t,n){var r=String(l(e)),i="<"+a;return""!==t&&(i+=" "+t+'="'+String(n).replace(c,"&quot;")+'"'),i+">"+r+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(i),n(n.P+n.F*r(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},221:function(e,a,t){"use strict";t.d(a,"b",function(){return n}),t.d(a,"a",function(){return l});t(14);function n(e,a){return e.levelName.localeCompare(a.levelName)}var r=/the /i;function l(e,a){var t=e.replace(r,""),n=a.replace(r,"");return t.localeCompare(n)}},222:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(207),c=t.n(l),i=t(214),u=t(208),s=t(210),o=t(179),m=t.n(o),f=function(e){var a=e.className,t=e.levelName,n=e.gameNameUsa,l=e.newPage,i=e.children,o=c()(m.a.root,a),f=Object(s.a)({gameNameUsa:n,levelName:t});return i=i||n+" - "+t,l?r.a.createElement("a",{className:o,href:f,target:"_blank"},i):r.a.createElement(u.a,{className:o,to:f},i)},d=t(180),g=t.n(d);t.d(a,"a",function(){return v});var v=function(e){var a=e.className,t=e.linkClassName,n=e.thumbnailData,l=e.levelName,u=e.gameNameUsa,s=e.children,o=c()(g.a.root,a),m=c()(g.a.backgroundLink,t);return r.a.createElement(f,{className:m,levelName:l,gameNameUsa:u},r.a.createElement("div",{className:o},r.a.createElement(i.a,{thumbnailData:n,alt:l+" from "+u}),r.a.createElement("div",{className:g.a.levelName},s||l)))}}}]);
//# sourceMappingURL=component---src-pages-newest-tsx-1ac10cd8bb57731d7f03.js.map