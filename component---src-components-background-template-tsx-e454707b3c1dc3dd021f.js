(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(e,t,a){"use strict";a.r(t);a(23);var M=a(0),I=a.n(M),g=a(206),c=a(238),N=a(22),l=a(194),n=a(191),j=a(237),A=a(200),i=a.n(A),D=a(197),u=a(176),m=a.n(u),C=function(e){var t=e.className,a=e.prevLevel,M=e.nextLevel,g=i()(m.a.root,t);return I.a.createElement("header",{className:g},I.a.createElement("div",{className:m.a.prevLevelContainer},I.a.createElement(n.a,{to:Object(D.a)(a)},I.a.createElement(j.a,null),I.a.createElement("span",{className:m.a.levelName},a.levelName)," from ",a.gameNameUsa)),I.a.createElement("div",{className:m.a.nextLevelContainer},I.a.createElement(n.a,{to:Object(D.a)(M)},I.a.createElement("span",{className:m.a.levelName},M.levelName)," from ",M.gameNameUsa," ",I.a.createElement(j.b,null))))},r=a(202),z=a(203),y=a(204),o=a(205),O=a(177),T=a.n(O),s=function(e){var t=e.className,a=e.levelName,M=e.gameNameUsa,g=e.developer,c=e.system,N=e.year,l=i()(T.a.root,t);return I.a.createElement("table",{className:l},I.a.createElement("tbody",null,I.a.createElement("tr",{className:T.a.levelNameRow},I.a.createElement("td",{colSpan:2},a)),I.a.createElement("tr",null,I.a.createElement("td",null,"game"),I.a.createElement("td",null,I.a.createElement(n.a,{to:Object(y.a)(M)},M))),I.a.createElement("tr",null,I.a.createElement("td",null,"developer"),I.a.createElement("td",null,I.a.createElement(n.a,{to:Object(o.a)(g)},g))),I.a.createElement("tr",null,I.a.createElement("td",null,"system"),I.a.createElement("td",null,I.a.createElement(n.a,{to:Object(r.a)(c)},c))),I.a.createElement("tr",null,I.a.createElement("td",null,"released"),I.a.createElement("td",null,I.a.createElement(n.a,{to:Object(z.a)(N)},N||"?")))))},b=a(178),d=a.n(b),L=function(e){var t=e.className,a=e.width,g=e.height,c=e.src,N=i()(d.a.root,t),l=Object(M.useState)(null),n=l[0],j=l[1],A=Object(M.useState)(!0),D=A[0],u=A[1],m=Object(M.useState)(!1),C=m[0],r=m[1],z=Object(M.useState)(!1),y=z[0],o=z[1];return Object(M.useEffect)(function(){var e=parseInt(a),t=parseInt(g)/e,M=window.innerWidth,I=M<401?Math.floor(.96*M):Math.floor(.75*M),c=Math.floor(I*t);j({width:I,height:c})}),Object(M.useEffect)(function(){var e=setTimeout(function(){o(!0)},250);return clearTimeout.bind(null,e)},[]),n?I.a.createElement("div",{className:N,style:n},C?I.a.createElement(I.a.Fragment,null,I.a.createElement("div",{className:d.a.errorContainer},"an error occurred, try reloading the page"),I.a.createElement("img",null)):D?I.a.createElement(I.a.Fragment,null,I.a.createElement("div",{className:d.a.loadingContainer},y&&"loading&hellip;"),I.a.createElement("img",{width:"1",height:"1",src:c,onLoad:function(){return u(!1)},onError:function(){return r(!0)}})):I.a.createElement(I.a.Fragment,null,I.a.createElement("div",null),I.a.createElement("img",Object.assign({},n,{src:c})))):null},w=a(179),Z=a.n(w);a.d(t,"query",function(){return E});var E="1508642787";t.default=function(e){var t=e.data,a=t.currentLevel,M=t.prevLevel,n=t.nextLevel;Object(c.a)("left",function(){return Object(N.navigate)(Object(D.a)(M))}),Object(c.a)("right",function(){return Object(N.navigate)(Object(D.a)(n))});var j=t.mainImg.publicURL,A=t.bgImg.childImageSharp.resize.src;return I.a.createElement(l.a,null,I.a.createElement(g.Helmet,null,I.a.createElement("title",null,a.levelName," from ",a.gameNameUsa," - FGBG")),I.a.createElement("div",{className:Z.a.blur,style:{backgroundImage:"url("+A+")"}}),I.a.createElement("div",{className:Z.a.root},I.a.createElement(C,{className:Z.a.header,prevLevel:M,nextLevel:n}),I.a.createElement("div",{className:Z.a.imageContainer},I.a.createElement(L,{className:Z.a.levelImage,width:t.dimensions.width,height:t.dimensions.height,src:j}),I.a.createElement("div",{className:Z.a.metaDataContainer},I.a.createElement(s,Object.assign({className:Z.a.metaData},a))))))}},191:function(e,t,a){"use strict";var M=a(0),I=a.n(M),g=a(58),c=a.n(g);a.d(t,"a",function(){return c.a});a(192),I.a.createContext({})},192:function(e,t,a){var M;e.exports=(M=a(195))&&M.default||M},193:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var M=a(198),I=a.n(M);function g(e){return I()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,t,a){"use strict";a.d(t,"a",function(){return j});var M=a(0),I=a.n(M),g=a(191),c=a(196),N=a.n(c),l=a(175),n=a.n(l),j=function(e){var t=e.children;return I.a.createElement(I.a.Fragment,null,t,I.a.createElement("div",{className:n.a.logo},I.a.createElement(g.a,{to:"/"},I.a.createElement("img",{src:N.a}))))}},195:function(e,t,a){"use strict";a.r(t);a(23);var M=a(0),I=a.n(M),g=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?I.a.createElement(g.a,Object.assign({location:t,pageResources:a},a.json)):null}},196:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjEwbW0iCiAgIGhlaWdodD0iMjk3bW0iCiAgIHZpZXdCb3g9IjAgMCAyMTAgMjk3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iMjM2Ljk5ODYiCiAgICAgaW5rc2NhcGU6Y3k9IjY3NS4yMTAxOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIyIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAzMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iODE5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIHNob3dndWlkZXM9ImZhbHNlIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIyIgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAyIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eTowLjUxMDYzODM7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSA0NjAuNjI4OTEgMjUyLjc3OTMgQyA0NjAuNjI4OTEgMjUyLjc3OTMgNDc3LjgwMTM5IDI3NS4wMDA3OCA0MjUuMjczNDQgMjcyLjk4MDQ3IEMgMzgzLjY5NTY1IDI3MS4zODEzMyAzNzkuNDc5MjkgMzE3LjE0MTAzIDM3OS41MTk1MyAzMzYuMzMzOTggQyAzNjMuNjc5MTkgMzQ4LjUxNTY2IDM0NS45MzQ1MSAzNjIuMjI0MzggMzI2Ljg0Mzc1IDM3Ny4wODM5OCBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAyOTQuODk2NDggMzU1LjUyMzQ0IEMgMjkxLjA3OTg2IDM0My42MDU4NiAyODIuNTU3NzYgMzI0Ljg2NzU1IDI2Ni4xNzU3OCAzMjIuNDc4NTIgQyAyNjQuNjYwNTUgMzIyLjI1NzU0IDI2My4xNzIzNiAzMjIuMTQxMjMgMjYxLjcxNDg0IDMyMi4xMTcxOSBDIDI0NC42MTU5NCAzMjEuODM1MSAyMzEuNjkyNjUgMzM0LjIzNjAyIDIyNi44NTc0MiAzMzkuNjY2MDIgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgOTUuMTY5OTIyIDQxOC45Mzc1IEMgODguODIxMTk3IDQyMS40NTg1NyA3Ny4zMzMwOCA0MjcuMzYyMTEgNzMuNzQwMjM0IDQzOC4xNDA2MiBDIDcwLjUwNzA3NyA0NDcuODQwMTIgNzYuMzczNjA0IDQ1OS4zNzk3NiA4MS4wMTk1MzEgNDY2LjQ0NTMxIEEgMTQ2Ljk3NzIgMTQwLjQxMTIzIDAgMCAwIDgwLjMwNjY0MSA0ODAuMDYyNSBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAxMDQuNjI1IDU1Ny4yMzgyOCBDIDUwLjI2MDI0NyA2MDQuNDg5NjggMTMuNjU5NDA1IDY0MS4wOTUyMiAyMC43MDg5ODQgNjQ4Ljc1NzgxIEMgMzcuMDIyMzM1IDY2Ni40ODk3MiAxMDAuNTI2MDggNjIwLjA1NjA0IDEzNi45ODA0NyA1OTAuNzc1MzkgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgMjI3LjI4NTE2IDYyMC40NzQ2MSBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAzNzQuMjYxNzIgNDgwLjA2MjUgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgMzQyLjUzOTA2IDM5My4zMTI1IEMgMzU5Ljc5OTA4IDM3NS42NzgzNiAzNzUuODA0MDcgMzU5LjE5MzcgMzkwLjExMTMzIDM0NC4zOTY0OCBDIDQxOS43MjI2NyAzNDMuMzgzODUgNDc2LjE4NTYyIDMzOC43ODMzMSA0NzAuNjA3NDIgMjk3LjMyODEyIEMgNDc4LjAwMTQgMjkxLjYyNzg2IDQ4MS43ODI0OCAyODUuNTYwMTYgNDc4Ljc1IDI3NS4xOTkyMiBDIDQ3Ni42NDQxNiAyODMuNDExOTkgNDcwLjUwMTU5IDI4Mi4xNTA0MyA0NjUuODA0NjkgMjc5Ljc0MDIzIEMgNDcwLjUzMzIxIDI3NC4xMDcwNSA0NzYuMjUyNjggMjU4LjI1NDA5IDQ2MC42Mjg5MSAyNTIuNzc5MyB6ICIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiCiAgICAgICBpZD0icGF0aDM3ODUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDMxLjgwNTA3MywxMDguODQyMjUgLTkuODg4OTcyLDUuODc5OTMgYyAwLDAgLTEuMDY5MDc4LDEuODcwODkgMCw0LjI3NjMxIDEuMDY5MDc4LDIuNDA1NDMgMTYuODM3OTgsMjQuODU2MDcgMTYuODM3OTgsMjQuODU2MDcgbCAxMC45NTgwNSwtNi4xNDcyIHoiCiAgICAgICBpZD0icGF0aDM3MjkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAzNC44Nzg2NzQsMTA3LjM3MjI3IDEwLjAyMjYwNywtNi4wMTM1NyAxMi40MjgwMzIsMjAuMDQ1MjIgYyAwLDAgLTIuNTg2MTA2LDAuODkzMDggMy43NDE3NzQsOS43NTUzNCBsIC04LjQxODk5MSw0Ljk0NDQ4IHoiCiAgICAgICBpZD0icGF0aDM3MzEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDQ3LjcwNzYxLDk5Ljg4ODcyMSA1OS4zMzM4MzYsOTMuMjA2OTg0IDcwLjY5Mjc5LDExNC4wNTQwMSA2MC4yNjkyNzgsMTE5LjkzMzk0IFoiCiAgICAgICBpZD0icGF0aDM3MzMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA2Mi4yNzM3OTgsOTEuNjAzMzY2IDExLjM1ODk1NywyMC44NDcwMjQgNy43NTA4MTUsLTQuNDA5OTUgLTcuMjE2Mjc3LC0xNy4xMDUyNDggYyAwLDAgLTMuMDczNTk5LC02LjgxNTM3MyAtMTEuODkzNDk1LDAuNjY4MTc0IHoiCiAgICAgICBpZD0icGF0aDM3MzUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA0My4xNjQwMjksMTUwLjUzNjMgMzkuODIzMTYsLTIzLjUxOTcyIC0yLjgwNjMzMywtMy42MDgxNCAtMTQuMTY1MjgzLDguMDE4MDkgLTUuMDc4MTIyLC03Ljg4NDQ2IDIwLjcxMzM4OCwtMTEuNjI2MjIgYyAwLDAgNy4yMTYyNzcsLTUuNDc5MDIgOC4yODUzNTYsMS43MzcyNSAxLjA2OTA3OCw3LjIxNjI4IDEuNjAzNjE4LDE4Ljg0MjUgMS42MDM2MTgsMTguODQyNSAwLDAgLTcuNDgzNTQ2LDMuNzQxNzggLTQuNjc3MjE3LDguNTUyNjMgMi44MDYzMyw0LjgxMDg1IDIuNjcyNjk0LDUuNjEyNjYgMi42NzI2OTQsNS42MTI2NiAwLDAgLTQuNTQzNTgxLDEyLjgyODk0IC0yMi45ODUxNzksMTUuMTAwNzMgMCwwIC0xLjczNzI1MSwtMC45MzU0NCAtNC44MTA4NSwtNy4zNDk5MSAtMy4wNzM2LC02LjQxNDQ3IC04LjU1MjYyNSwxLjMzNjM0IC04LjU1MjYyNSwxLjMzNjM0IDAsMCAtNS42MTI2NTksMS40Njk5OSAtMTAuMDIyNjA3LC01LjIxMTc1IHoiCiAgICAgICBpZD0icGF0aDM3MzciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDwvZz4KPC9zdmc+Cg=="},197:function(e,t,a){"use strict";a.d(t,"a",function(){return I});var M=a(193);function I(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(M.a).join("/")}},202:function(e,t,a){"use strict";a.d(t,"a",function(){return I});var M=a(193);function I(e){return"/system:"+Object(M.a)(e)}},203:function(e,t,a){"use strict";function M(e){return e?"/year:"+e:"/year:missing"}a.d(t,"a",function(){return M})},204:function(e,t,a){"use strict";a.d(t,"a",function(){return I});var M=a(193);function I(e){return"/game:"+Object(M.a)(e)}},205:function(e,t,a){"use strict";a.d(t,"a",function(){return I});var M=a(193);function I(e){return"/developer:"+Object(M.a)(e)}}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-e454707b3c1dc3dd021f.js.map