(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(209),o=n(205),c=(n(59),n(12),n(121),n(33),n(14),"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0);function i(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function s(e,t){for(var n=t.slice(0,t.length-1),a=0;a<n.length;a++)n[a]=e[n[a].toLowerCase()];return n}function u(e){e||(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function m(e,t){for(var n=e.length>=t.length?e:t,a=e.length>=t.length?t:e,r=!0,l=0;l<n.length;l++)-1===a.indexOf(n[l])&&(r=!1);return r}for(var d={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":c?173:189,"=":c?61:187,";":c?59:186,"'":222,"[":219,"]":221,"\\":220},f={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":c?224:91,cmd:c?224:91,command:c?224:91},p={16:"shiftKey",18:"altKey",17:"ctrlKey"},v={16:!1,18:!1,17:!1},h={},y=1;y<20;y++)d["f".concat(y)]=111+y;p[c?224:91]="metaKey",v[c?224:91]=!1;var g=[],E="all",O=[],b=function(e){return d[e.toLowerCase()]||f[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function w(e){E=e||"all"}function N(){return E||"all"}function k(e,t,n){var a;if(t.scope===n||"all"===t.scope){for(var r in a=t.mods.length>0,v)Object.prototype.hasOwnProperty.call(v,r)&&(!v[r]&&t.mods.indexOf(+r)>-1||v[r]&&-1===t.mods.indexOf(+r))&&(a=!1);(0!==t.mods.length||v[16]||v[18]||v[17]||v[91])&&!a&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function j(e){var t=h["*"],n=e.keyCode||e.which||e.charCode;if(C.filter.call(this,e)){if(-1===g.indexOf(n)&&229!==n&&g.push(n),93!==n&&224!==n||(n=91),n in v){for(var a in v[n]=!0,f)f[a]===n&&(C[a]=!0);if(!t)return}for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&(v[r]=e[p[r]]);var l=N();if(t)for(var o=0;o<t.length;o++)t[o].scope===l&&("keydown"===e.type&&t[o].keydown||"keyup"===e.type&&t[o].keyup)&&k(e,t[o],l);if(n in h)for(var c=0;c<h[n].length;c++)if(("keydown"===e.type&&h[n][c].keydown||"keyup"===e.type&&h[n][c].keyup)&&h[n][c].key){for(var i=h[n][c].key.split("+"),s=[],u=0;u<i.length;u++)s.push(b(i[u]));(s=s.sort()).join("")===g.sort().join("")&&k(e,h[n][c],l)}}}function C(e,t,n){var a=u(e),r=[],l="all",o=document,c=0,m=!1,d=!0;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(l=t.scope),t.element&&(o=t.element),t.keyup&&(m=t.keyup),t.keydown&&(d=t.keydown)),"string"==typeof t&&(l=t);c<a.length;c++)r=[],(e=a[c].split("+")).length>1&&(r=s(f,e)),(e="*"===(e=e[e.length-1])?"*":b(e))in h||(h[e]=[]),h[e].push({keyup:m,keydown:d,scope:l,mods:r,shortcut:a[c],method:n,key:a[c]});void 0!==o&&!function(e){return O.indexOf(e)>-1}(o)&&window&&(O.push(o),i(o,"keydown",function(e){j(e)}),i(window,"focus",function(){g=[]}),i(o,"keyup",function(e){j(e),function(e){var t=e.keyCode||e.which||e.charCode,n=g.indexOf(t);if(n>=0&&g.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&g.splice(0,g.length),93!==t&&224!==t||(t=91),t in v)for(var a in v[t]=!1,f)f[a]===t&&(C[a]=!1)}(e)}))}var A={setScope:w,getScope:N,deleteScope:function(e,t){var n,a;for(var r in e||(e=N()),h)if(Object.prototype.hasOwnProperty.call(h,r))for(n=h[r],a=0;a<n.length;)n[a].scope===e?n.splice(a,1):a++;N()===e&&w(t||"all")},getPressedKeyCodes:function(){return g.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=b(e)),-1!==g.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,a=!0;return!t.isContentEditable&&"TEXTAREA"!==n&&("INPUT"!==n&&"TEXTAREA"!==n||t.readOnly)||(a=!1),a},unbind:function(e,t,n){var a,r,l=u(e),o=[];"function"==typeof t&&(n=t,t="all");for(var c=0;c<l.length;c++){if(o=(a=l[c].split("+")).length>1?s(f,a):[],e="*"===(e=a[a.length-1])?"*":b(e),t||(t=N()),!h[e])return;for(var i=0;i<h[e].length;i++)r=h[e][i],(!n||r.method===n)&&r.scope===t&&m(r.mods,o)&&(h[e][i]={})}}};for(var U in A)Object.prototype.hasOwnProperty.call(A,U)&&(C[U]=A[U]);if("undefined"!=typeof window){var x=window.hotkeys;C.noConflict=function(e){return e&&window.hotkeys===C&&(window.hotkeys=x),C},window.hotkeys=C}var S=C;function I(e,t){Object(a.useEffect)(function(){return S(e,function(e,n){return t(e,n)}),function(){return S.unbind(e)}},[t])}var L=n(22),F=n(204),T=n(199),R=n(198),Y=n.n(R),z=n(200),D=n(183),P=n.n(D),J=function(e){var t=e.className,n=(e.prevLevel,e.nextLevel),a=Y()(P.a.root,t);return r.a.createElement("header",{className:a},r.a.createElement("div",{className:P.a.nextLevelContainer},r.a.createElement(T.a,{to:Object(z.a)(n)},"next up, ",r.a.createElement("span",{className:P.a.levelName},n.levelName)," from"," ",n.gameNameUsa," ",r.a.createElement(l.b,null))))},G=n(203),Z=n(184),K=n.n(Z),q=function(e){var t=e.className,n=e.levelName,a=e.gameNameUsa,l=e.developer,o=e.system,c=e.year,i=e.series,s=Y()(K.a.root,t);return r.a.createElement("table",{className:s},r.a.createElement("tbody",null,r.a.createElement("tr",{className:K.a.levelNameRow},r.a.createElement("td",{colSpan:2},n)),r.a.createElement("tr",null,r.a.createElement("td",null,"game"),r.a.createElement("td",null,r.a.createElement(T.a,{to:Object(G.c)(a)},a))),r.a.createElement("tr",null,r.a.createElement("td",null,"series"),r.a.createElement("td",null,r.a.createElement(T.a,{to:Object(G.d)(i)},i))),r.a.createElement("tr",null,r.a.createElement("td",null,"developer"),r.a.createElement("td",null,r.a.createElement(T.a,{to:Object(G.a)(l)},l))),r.a.createElement("tr",null,r.a.createElement("td",null,"system"),r.a.createElement("td",null,r.a.createElement(T.a,{to:Object(G.e)(o)},o))),r.a.createElement("tr",null,r.a.createElement("td",null,"released"),r.a.createElement("td",null,r.a.createElement(T.a,{to:Object(G.f)(c)},c||"?")))))},H=n(185),B=n.n(H),X=function(e){var t=e.className,n=e.width,a=e.height,l=e.src,o=e.alt,c=e.children,i=Y()(B.a.root,t),s=parseInt(n),u=parseInt(a)/s,m=Math.floor(100*u)+"%";return r.a.createElement("div",{className:i,style:{paddingTop:m}},r.a.createElement("img",{src:l,alt:o}),c)},M=n(220),V=n.n(M),W=(n(34),n(28),n(24),n(45),n(180)),Q=n.n(W),$={levelName:"entry.1758812684",gameName:"entry.1658808931",system:"entry.2024056467",developer:"entry.726710484",year:"entry.906557948",series:"entry.1788056905",url:"entry.89449791",siteUrl:"entry.36955456",submissionType:"entry.1271839613"},_="https://docs.google.com/forms/d/e/1FAIpQLScSRFk3nVFwV0obvwZsd6H-oAG7SCXM7FsXZ6cU-YsyiqDzAQ/formResponse?";var ee=function(e){var t=Object(a.useState)({siteUrl:e,submissionType:"correction"}),n=t[0],r=t[1],l=Object(a.useState)(!1),o=l[0],c=l[1];return{handleSubmit:function(e){e&&e.preventDefault(),fetch(function(e){var t=Object.keys(e).reduce(function(t,n){var a=$[n],r=encodeURIComponent(e[n]);return t.concat(a+"="+r)},[]).join("&");return _+t}(n),{method:"POST"}),c(!0)},handleInputChange:function(e){e.persist(),r(function(t){var n;return Object.assign({},t,((n={})[e.target.name]=e.target.value,n))})},inputs:n,hasSubmitted:o}};function te(e){return Object.keys(e).filter(function(e){return"siteUrl"!==e&&"submissionType"!==e}).some(function(t){return e[t]&&e[t].trim()})}var ne=function(e){var t=e.className,n=e.imageUrl,a=e.onClose,l=ee(window.location.pathname),o=l.handleInputChange,c=l.handleSubmit,i=l.inputs,s=l.hasSubmitted,u=Y()(Q.a.root,t),m=r.a.createElement("div",null,r.a.createElement("h3",null,"Found an error?"),"All fields are optional, just fill in whatever needs fixing."),d=r.a.createElement("div",{className:Q.a.submittedHeader},r.a.createElement("h3",null,"Thanks!"),r.a.createElement("div",null,"Thanks for improving the site! We will correct the mistake right away"),r.a.createElement("input",{type:"submit",value:"OK",onClick:function(e){a()}}));return r.a.createElement("div",{className:u},r.a.createElement("div",null,r.a.createElement("div",{className:Q.a.header},r.a.createElement("img",{src:n}),s?d:m),!s&&r.a.createElement("div",{className:Q.a.inputGrid},r.a.createElement("label",{htmlFor:"levelName"},"level name"),r.a.createElement("input",{readOnly:s,type:"text",name:"levelName",value:i.levelName,onChange:o}),r.a.createElement("label",{htmlFor:"gameName"},"game name"),r.a.createElement("input",{readOnly:s,type:"text",name:"gameName",value:i.gameName,onChange:o}),r.a.createElement("label",{htmlFor:"developer"},"developer"),r.a.createElement("input",{readOnly:s,type:"text",name:"developer",value:i.developer,onChange:o}),r.a.createElement("label",{htmlFor:"system"},"system"),r.a.createElement("input",{readOnly:s,type:"text",name:"system",value:i.system,onChange:o}),r.a.createElement("label",{htmlFor:"year"},"year released"),r.a.createElement("input",{readOnly:s,type:"text",name:"year",value:i.year,onChange:o}),r.a.createElement("label",{htmlFor:"series"},"series"),r.a.createElement("input",{readOnly:s,type:"text",name:"series",value:i.series,onChange:o}),r.a.createElement("label",{htmlFor:"image"},"URL of better image"),r.a.createElement("input",{readOnly:s,type:"text",name:"url",value:i.url,onChange:o}),r.a.createElement("input",{disabled:!te(i),type:"submit",value:"submit",onClick:function(e){c(e)}}))))},ae=n(181),re=n.n(ae),le=function(e){var t=e.className,n=e.imageUrl,a=e.isOpen,l=e.onRequestClose,o=Y()(re.a.root,t);return r.a.createElement(V.a,{className:o,isOpen:a,onRequestClose:l},r.a.createElement(ne,{imageUrl:n,onClose:l}))},oe=n(186),ce=n.n(oe);n.d(t,"query",function(){return ie});var ie="3894655990";t.default=function(e){var t=e.data,n=Object(a.useState)(!1),c=n[0],i=n[1],s=Object(a.useState)(!1),u=s[0],m=s[1],d=Object(a.useState)(!1),f=d[0],p=d[1];Object(a.useEffect)(function(){i(!0)},[]);var v=t.currentLevel,h=t.prevLevel,y=t.nextLevel;I("left",function(){return Object(L.navigate)(Object(z.a)(h))}),I("right",function(){return Object(L.navigate)(Object(z.a)(y))}),I("esc",function(){return p(!1)});var g,E=t.mainImg.publicURL,O=t.bgImg.childImageSharp.resize.src,b=v.levelName+" from "+v.gameNameUsa;return g=f?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:ce.a.exitFullscreen,onClick:function(){return p(!1)}},"exit fullscreen"),r.a.createElement(X,{className:ce.a.fullscreenLevelImage,width:t.dimensions.width,height:t.dimensions.height,src:E,alt:b})):r.a.createElement(F.a,null,r.a.createElement(le,{imageUrl:O,isOpen:u,onRequestClose:function(){return m(!1)}}),r.a.createElement("div",{className:ce.a.blur,style:{backgroundImage:"url("+O+")"}}),r.a.createElement("div",{className:ce.a.root},r.a.createElement("div",{className:ce.a.imageContainer},r.a.createElement(X,{className:ce.a.levelImage,width:t.dimensions.width,height:t.dimensions.height,src:E,alt:b}),c&&r.a.createElement("div",{className:ce.a.levelImageFooter},r.a.createElement("div",{className:ce.a.correctionLink},r.a.createElement("a",{onClick:function(){return m(!0)}},"submit a correction")),r.a.createElement("a",{className:ce.a.enterFullscreen,title:"fullscreen",onClick:function(){return p(!0)}},r.a.createElement(l.c,null))),r.a.createElement("div",{className:ce.a.metaDataContainer},r.a.createElement(q,Object.assign({className:ce.a.metaData},v))))),r.a.createElement(J,{className:ce.a.header,prevLevel:h,nextLevel:y})),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Helmet,null,r.a.createElement("title",null,b," - FGBG")),g)}},197:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(206),r=n.n(a);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},199:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(58),o=n.n(l);n.d(t,"a",function(){return o.a});n(201),r.a.createContext({})},200:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(197);function r(e){return"/game:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},201:function(e,t,n){var a;e.exports=(a=n(202))&&a.default||a},202:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(85);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},203:function(e,t,n){"use strict";var a=n(197);n(200);function r(e){return"/developer:"+Object(a.a)(e)}function l(e){return"/system:"+Object(a.a)(e)}function o(e){return e?"/year:"+e:"/year:missing"}function c(e){return"/series:"+Object(a.a)(e)}function i(e){return"/game:"+Object(a.a)(e)}n(33);function s(e){return e.split(".")[0]}n.d(t,"a",function(){return r}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s})},204:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),l=n(198),o=n.n(l),c=n(199),i=n(176),s=n.n(i),u=function(e){var t=e.logoClassName,n=e.children,a=o()(s.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{to:"/"},r.a.createElement("div",{className:a})),n)}},206:function(e,t,n){var a;n(33),n(14),n(34),a=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,n){if("string"!=typeof t)throw new Error("slugify: string argument expected");n="string"==typeof n?{replacement:n}:n||{};var a=t.split("").reduce(function(t,a){return t+(e[a]||a).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,n.replacement||"-");return n.lower?a.toLowerCase():a}return t.extend=function(t){for(var n in t)e[n]=t[n]},t},e.exports=a(),e.exports.default=a()}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-b1efe77e790cc506fc19.js.map