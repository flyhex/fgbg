(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(205),o=(n(59),n(12),n(121),n(33),n(14),"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0);function c(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function i(e,t){for(var n=t.slice(0,t.length-1),a=0;a<n.length;a++)n[a]=e[n[a].toLowerCase()];return n}function s(e){e||(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function u(e,t){for(var n=e.length>=t.length?e:t,a=e.length>=t.length?t:e,r=!0,l=0;l<n.length;l++)-1===a.indexOf(n[l])&&(r=!1);return r}for(var m={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":o?173:189,"=":o?61:187,";":o?59:186,"'":222,"[":219,"]":221,"\\":220},d={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":o?224:91,cmd:o?224:91,command:o?224:91},f={16:"shiftKey",18:"altKey",17:"ctrlKey"},p={16:!1,18:!1,17:!1},v={},h=1;h<20;h++)m["f".concat(h)]=111+h;f[o?224:91]="metaKey",p[o?224:91]=!1;var y=[],g="all",E=[],b=function(e){return m[e.toLowerCase()]||d[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function O(e){g=e||"all"}function w(){return g||"all"}function N(e,t,n){var a;if(t.scope===n||"all"===t.scope){for(var r in a=t.mods.length>0,p)Object.prototype.hasOwnProperty.call(p,r)&&(!p[r]&&t.mods.indexOf(+r)>-1||p[r]&&-1===t.mods.indexOf(+r))&&(a=!1);(0!==t.mods.length||p[16]||p[18]||p[17]||p[91])&&!a&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function k(e){var t=v["*"],n=e.keyCode||e.which||e.charCode;if(j.filter.call(this,e)){if(-1===y.indexOf(n)&&229!==n&&y.push(n),93!==n&&224!==n||(n=91),n in p){for(var a in p[n]=!0,d)d[a]===n&&(j[a]=!0);if(!t)return}for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&(p[r]=e[f[r]]);var l=w();if(t)for(var o=0;o<t.length;o++)t[o].scope===l&&("keydown"===e.type&&t[o].keydown||"keyup"===e.type&&t[o].keyup)&&N(e,t[o],l);if(n in v)for(var c=0;c<v[n].length;c++)if(("keydown"===e.type&&v[n][c].keydown||"keyup"===e.type&&v[n][c].keyup)&&v[n][c].key){for(var i=v[n][c].key.split("+"),s=[],u=0;u<i.length;u++)s.push(b(i[u]));(s=s.sort()).join("")===y.sort().join("")&&N(e,v[n][c],l)}}}function j(e,t,n){var a=s(e),r=[],l="all",o=document,u=0,m=!1,f=!0;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(l=t.scope),t.element&&(o=t.element),t.keyup&&(m=t.keyup),t.keydown&&(f=t.keydown)),"string"==typeof t&&(l=t);u<a.length;u++)r=[],(e=a[u].split("+")).length>1&&(r=i(d,e)),(e="*"===(e=e[e.length-1])?"*":b(e))in v||(v[e]=[]),v[e].push({keyup:m,keydown:f,scope:l,mods:r,shortcut:a[u],method:n,key:a[u]});void 0!==o&&!function(e){return E.indexOf(e)>-1}(o)&&window&&(E.push(o),c(o,"keydown",function(e){k(e)}),c(window,"focus",function(){y=[]}),c(o,"keyup",function(e){k(e),function(e){var t=e.keyCode||e.which||e.charCode,n=y.indexOf(t);if(n>=0&&y.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&y.splice(0,y.length),93!==t&&224!==t||(t=91),t in p)for(var a in p[t]=!1,d)d[a]===t&&(j[a]=!1)}(e)}))}var C={setScope:O,getScope:w,deleteScope:function(e,t){var n,a;for(var r in e||(e=w()),v)if(Object.prototype.hasOwnProperty.call(v,r))for(n=v[r],a=0;a<n.length;)n[a].scope===e?n.splice(a,1):a++;w()===e&&O(t||"all")},getPressedKeyCodes:function(){return y.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=b(e)),-1!==y.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,a=!0;return!t.isContentEditable&&"TEXTAREA"!==n&&("INPUT"!==n&&"TEXTAREA"!==n||t.readOnly)||(a=!1),a},unbind:function(e,t,n){var a,r,l=s(e),o=[];"function"==typeof t&&(n=t,t="all");for(var c=0;c<l.length;c++){if(o=(a=l[c].split("+")).length>1?i(d,a):[],e="*"===(e=a[a.length-1])?"*":b(e),t||(t=w()),!v[e])return;for(var m=0;m<v[e].length;m++)r=v[e][m],(!n||r.method===n)&&r.scope===t&&u(r.mods,o)&&(v[e][m]={})}}};for(var x in C)Object.prototype.hasOwnProperty.call(C,x)&&(j[x]=C[x]);if("undefined"!=typeof window){var L=window.hotkeys;j.noConflict=function(e){return e&&window.hotkeys===j&&(window.hotkeys=L),j},window.hotkeys=j}var S=j;function U(e,t){Object(a.useEffect)(function(){return S(e,function(e,n){return t(e,n)}),function(){return S.unbind(e)}},[t])}var F=n(22),I=n(201),R=n(196),T=n(222),A=n(197),P=n.n(A),D=n(199),K=n(181),q=n.n(K),G=function(e){var t=e.className,n=(e.prevLevel,e.nextLevel),a=P()(q.a.root,t);return r.a.createElement("header",{className:a},r.a.createElement("div",{className:q.a.nextLevelContainer},r.a.createElement(R.a,{to:Object(D.a)(n)},"next up, ",r.a.createElement("span",{className:q.a.levelName},n.levelName)," from"," ",n.gameNameUsa," ",r.a.createElement(T.a,null))))},X=n(204),B=n(182),H=n.n(B),V=function(e){var t=e.className,n=e.levelName,a=e.gameNameUsa,l=e.developer,o=e.system,c=e.year,i=e.series,s=P()(H.a.root,t);return r.a.createElement("table",{className:s},r.a.createElement("tbody",null,r.a.createElement("tr",{className:H.a.levelNameRow},r.a.createElement("td",{colSpan:2},n)),r.a.createElement("tr",null,r.a.createElement("td",null,"game"),r.a.createElement("td",null,r.a.createElement(R.a,{to:Object(X.c)(a)},a))),r.a.createElement("tr",null,r.a.createElement("td",null,"series"),r.a.createElement("td",null,r.a.createElement(R.a,{to:Object(X.d)(i)},i))),r.a.createElement("tr",null,r.a.createElement("td",null,"developer"),r.a.createElement("td",null,r.a.createElement(R.a,{to:Object(X.a)(l)},l))),r.a.createElement("tr",null,r.a.createElement("td",null,"system"),r.a.createElement("td",null,r.a.createElement(R.a,{to:Object(X.e)(o)},o))),r.a.createElement("tr",null,r.a.createElement("td",null,"released"),r.a.createElement("td",null,r.a.createElement(R.a,{to:Object(X.f)(c)},c||"?")))))},z=n(183),J=n.n(z),M=function(e){var t=e.className,n=e.width,a=e.height,l=e.src,o=e.alt,c=P()(J.a.root,t),i=parseInt(n),s=parseInt(a)/i,u=Math.floor(100*s)+"%";return r.a.createElement("div",{className:c,style:{paddingTop:u}},r.a.createElement("img",{src:l,alt:o}))},Q=n(214),Z=n.n(Q),W=(n(34),n(28),n(24),n(45),n(178)),Y=n.n(W),$={levelName:"entry.1758812684",gameName:"entry.1658808931",system:"entry.2024056467",developer:"entry.726710484",year:"entry.906557948",series:"entry.1788056905",url:"entry.89449791",siteUrl:"entry.36955456",submissionType:"entry.1271839613"},_="https://docs.google.com/forms/d/e/1FAIpQLScSRFk3nVFwV0obvwZsd6H-oAG7SCXM7FsXZ6cU-YsyiqDzAQ/formResponse?";var ee=function(e){var t=Object(a.useState)({siteUrl:e,submissionType:"correction"}),n=t[0],r=t[1],l=Object(a.useState)(!1),o=l[0],c=l[1];return{handleSubmit:function(e){e&&e.preventDefault(),fetch(function(e){var t=Object.keys(e).reduce(function(t,n){var a=$[n],r=encodeURIComponent(e[n]);return t.concat(a+"="+r)},[]).join("&");return _+t}(n),{method:"POST"}),c(!0)},handleInputChange:function(e){e.persist(),r(function(t){var n;return Object.assign({},t,((n={})[e.target.name]=e.target.value,n))})},inputs:n,hasSubmitted:o}};function te(e){return Object.keys(e).filter(function(e){return"siteUrl"!==e&&"submissionType"!==e}).some(function(t){return e[t]&&e[t].trim()})}var ne=function(e){var t=e.className,n=e.imageUrl,a=e.onClose,l=ee(window.location.pathname),o=l.handleInputChange,c=l.handleSubmit,i=l.inputs,s=l.hasSubmitted,u=P()(Y.a.root,t),m=r.a.createElement("div",null,r.a.createElement("h3",null,"Found an error?"),"All fields are optional, just fill in whatever needs fixing."),d=r.a.createElement("div",{className:Y.a.submittedHeader},r.a.createElement("h3",null,"Thanks!"),r.a.createElement("div",null,"Thanks for improving the site! We will correct the mistake right away"),r.a.createElement("input",{type:"submit",value:"OK",onClick:function(e){a()}}));return r.a.createElement("div",{className:u},r.a.createElement("div",null,r.a.createElement("div",{className:Y.a.header},r.a.createElement("img",{src:n}),s?d:m),!s&&r.a.createElement("div",{className:Y.a.inputGrid},r.a.createElement("label",{htmlFor:"levelName"},"level name"),r.a.createElement("input",{readOnly:s,type:"text",name:"levelName",value:i.levelName,onChange:o}),r.a.createElement("label",{htmlFor:"gameName"},"game name"),r.a.createElement("input",{readOnly:s,type:"text",name:"gameName",value:i.gameName,onChange:o}),r.a.createElement("label",{htmlFor:"developer"},"developer"),r.a.createElement("input",{readOnly:s,type:"text",name:"developer",value:i.developer,onChange:o}),r.a.createElement("label",{htmlFor:"system"},"system"),r.a.createElement("input",{readOnly:s,type:"text",name:"system",value:i.system,onChange:o}),r.a.createElement("label",{htmlFor:"year"},"year released"),r.a.createElement("input",{readOnly:s,type:"text",name:"year",value:i.year,onChange:o}),r.a.createElement("label",{htmlFor:"series"},"series"),r.a.createElement("input",{readOnly:s,type:"text",name:"series",value:i.series,onChange:o}),r.a.createElement("label",{htmlFor:"image"},"URL of better image"),r.a.createElement("input",{readOnly:s,type:"text",name:"url",value:i.url,onChange:o}),r.a.createElement("input",{disabled:!te(i),type:"submit",value:"submit",onClick:function(e){c(e)}}))))},ae=n(179),re=n.n(ae),le=function(e){var t=e.className,n=e.imageUrl,a=e.isOpen,l=e.onRequestClose,o=P()(re.a.root,t);return r.a.createElement(Z.a,{className:o,isOpen:a,onRequestClose:l},r.a.createElement(ne,{imageUrl:n,onClose:l}))},oe=n(184),ce=n.n(oe);n.d(t,"query",function(){return ie});var ie="3579773886";t.default=function(e){var t=e.data,n=Object(a.useState)(!1),o=n[0],c=n[1],i=Object(a.useState)(!1),s=i[0],u=i[1];Object(a.useEffect)(function(){c(!0)},[]);var m=t.currentLevel,d=t.prevLevel,f=t.nextLevel;U("left",function(){return Object(F.navigate)(Object(D.a)(d))}),U("right",function(){return Object(F.navigate)(Object(D.a)(f))});var p=t.mainImg.publicURL,v=t.bgImg.childImageSharp.resize.src,h=m.levelName+" from "+m.gameNameUsa;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{imageUrl:v,isOpen:s,onRequestClose:function(){return u(!1)}}),r.a.createElement(I.a,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,h," - FGBG")),r.a.createElement("div",{className:ce.a.blur,style:{backgroundImage:"url("+v+")"}}),r.a.createElement("div",{className:ce.a.root},r.a.createElement("div",{className:ce.a.imageContainer},r.a.createElement(M,{className:ce.a.levelImage,width:t.dimensions.width,height:t.dimensions.height,src:p,alt:h}),r.a.createElement("div",{className:ce.a.metaDataContainer},o&&r.a.createElement("div",{className:ce.a.correctionLink},r.a.createElement("a",{onClick:function(){return u(!0)}},"submit a correction")),r.a.createElement(V,Object.assign({className:ce.a.metaData},m))))),r.a.createElement(G,{className:ce.a.header,prevLevel:d,nextLevel:f})))}},195:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(202),r=n.n(a);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},196:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(58),o=n.n(l);n.d(t,"a",function(){return o.a});n(198),r.a.createContext({})},198:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},199:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(195);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},200:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},201:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),l=n(196),o=n(176),c=n.n(o),i=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:c.a.logo})),t)}},204:function(e,t,n){"use strict";n(199);var a=n(195);function r(e){return"/developer:"+Object(a.a)(e)}function l(e){return"/system:"+Object(a.a)(e)}function o(e){return e?"/year:"+e:"/year:missing"}function c(e){return"/series:"+Object(a.a)(e)}function i(e){return"/game:"+Object(a.a)(e)}n(33);function s(e){return e.split(".")[0]}n.d(t,"a",function(){return r}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s})}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-415e08af87841782c1df.js.map