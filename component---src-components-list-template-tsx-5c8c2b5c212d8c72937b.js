(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});a(28),a(24),a(12),a(45),a(121),a(23),a(217),a(85);var n=a(0),r=a.n(n),i=a(212),c=a(227),l=a(214),s=a(221),o=a(215),u=a(220),m=a(181),d=a.n(m);function g(e,t){return e.find(function(e){return e.publicURL.indexOf(Object(l.c)(t)+"_thumb")>-1})}var f="3328555298";t.default=function(e){var t=e.children,a=e.dontGroup,n=e.data,l=e.pageContext,m=l.listTypeValue,f=l.thumbnails,p=l.description,v=n.levels.edges.map(function(e){return e.node}),N=n.twitterImg&&n.twitterImg.edges[0].node.childImageSharp.fixed.src,E=Object(c.groupBy)(v,"gameNameUsa"),h=a?r.a.createElement("ul",null,v.map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(s.a,Object.assign({linkClassName:d.a.listEntryLink,className:d.a.listEntry},e,{thumbnailData:g(f,e.imageFileName)})))})):r.a.createElement("ul",null,Object.keys(E).sort(u.a).map(function(e){return r.a.createElement("li",{key:e},e!==m&&r.a.createElement("h2",{className:d.a.gameHeader},e),r.a.createElement("ul",null,E[e].sort(u.b).map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(s.a,Object.assign({linkClassName:d.a.listEntryLink,className:d.a.listEntry},e,{thumbnailData:g(f,e.imageFileName)})))})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:m+" - FGBG",description:"fighting game backgrounds website",imageUrl:N}),r.a.createElement(o.a,{logoClassName:d.a.layoutLogo},r.a.createElement("div",{className:d.a.root},r.a.createElement("h1",null,m," ",r.a.createElement("span",{className:d.a.levelCount},t||r.a.createElement("span",null,v.length," background",1!==v.length&&"s"))),p&&r.a.createElement("p",null,p),r.a.createElement("noscript",null,r.a.createElement("div",{className:d.a.noscriptWarning},"this page loads faster with JavaScript enabled")),h)))}},206:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(219),r=a.n(n);function i(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(58),c=a.n(i);a.d(t,"a",function(){return c.a});a(209),r.a.createContext({})},209:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},210:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(206);function r(e,t,a){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return t&&(r=[r,Object(n.a)(t)].join("/")),a?[r,"fullscreen"].join("/"):r}},211:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},212:function(e,t,a){"use strict";var n=a(213),r=a(0),i=a.n(r),c=a(216),l=a.n(c);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,s=e.meta,o=void 0===s?[]:s,u=e.title,m=e.imageUrl,d=n.data.site,g=a||d.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:c},title:u,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:g},{property:"og:title",content:u},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:m?"summary_large_image":"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:g},{name:"twitter:site",content:"@mattegreer"},m?{name:"twitter:image",content:"https://www.fgbg.art"+m}:{}].concat(o)})}},213:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}},214:function(e,t,a){"use strict";var n=a(206),r=a(210);function i(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/other:"+Object(n.a)(e)}function l(e){return"/system:"+Object(n.a)(e)}function s(e){return e?"/year:"+e:"/year:missing"}function o(e){return"/series:"+Object(n.a)(e)}function u(e){return"/game:"+Object(n.a)(e)}a(33);function m(e){return e.split(".")[0]}a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return i}),a.d(t,"e",function(){return c}),a.d(t,"g",function(){return l}),a.d(t,"h",function(){return s}),a.d(t,"f",function(){return o}),a.d(t,"d",function(){return u}),a.d(t,"c",function(){return m})},215:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(0),r=a.n(n),i=a(207),c=a.n(i),l=a(208),s=a(176),o=a.n(s),u=function(e){var t=e.logoClassName,a=e.children,n=c()(o.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:n})),a)}},218:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),i=a(207),c=a.n(i),l=a(222),s=a.n(l),o=a(178),u=a.n(o),m=function(e){var t=e.className,a=e.width,n=void 0===a?200:a,i=e.thumbnailData,l=e.alt,o=i.height/i.width,m=c()(u.a.root,t);return r.a.createElement("div",{className:m,style:{width:n,paddingBottom:n*o}},r.a.createElement("img",{className:u.a.lowRes,src:i.dataUrl,alt:l}),r.a.createElement("noscript",null,r.a.createElement("img",{className:u.a.highRes,src:i.publicURL,alt:l})),r.a.createElement(s.a,{className:u.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:u.a.highRes,src:i.publicURL,alt:l}))))}},220:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});a(14);function n(e,t){return e.levelName.localeCompare(t.levelName)}var r=/the /i;function i(e,t){var a=e.replace(r,""),n=t.replace(r,"");return a.localeCompare(n)}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(207),c=a.n(i),l=a(218),s=a(208),o=a(210),u=a(179),m=a.n(u),d=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,i=e.newPage,l=e.children,u=c()(m.a.root,t),d=Object(o.a)({gameNameUsa:n,levelName:a});return l=l||n+" - "+a,i?r.a.createElement("a",{className:u,href:d,target:"_blank"},l):r.a.createElement(s.a,{className:u,to:d},l)},g=a(180),f=a.n(g);a.d(t,"a",function(){return p});var p=function(e){var t=e.className,a=e.linkClassName,n=e.thumbnailData,i=e.levelName,s=e.gameNameUsa,o=e.children,u=c()(f.a.root,t),m=c()(f.a.backgroundLink,a);return r.a.createElement(d,{className:m,levelName:i,gameNameUsa:s},r.a.createElement("div",{className:u},r.a.createElement(l.a,{thumbnailData:n,alt:i+" from "+s}),r.a.createElement("div",{className:f.a.levelName},o||i)))}}}]);
//# sourceMappingURL=component---src-components-list-template-tsx-5c8c2b5c212d8c72937b.js.map