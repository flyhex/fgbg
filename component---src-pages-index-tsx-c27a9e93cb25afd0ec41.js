(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{188:function(t,e,M){"use strict";M.r(e);M(28),M(24),M(12);var I=M(0),g=M.n(I),a=M(190),c=M(234),N=M(193),i=(M(59),M(199)),n=M.n(i),A=M(235),D=M(196),j=M(208),u=M(205),l=M(206),C=M(192);function r(t){return"/series:"+Object(C.a)(t)}M(207);var z=function(t){var e=t.levelName,M=t.gameNameUsa;return g.a.createElement("div",null,g.a.createElement(a.a,{to:Object(D.a)({levelName:e,gameNameUsa:M})},e," from ",M))},m=function(t){var e=t.className,M=t.data,I=n()(e);return g.a.createElement("div",{className:I},g.a.createElement(A.a,{onChange:function(t){return alert(JSON.stringify(t))}},function(t){var e,I=t.isOpen,a=t.getInputProps,c=t.inputValue;return g.a.createElement("div",null,g.a.createElement("input",a()),g.a.createElement("ul",null,I&&(e=c,e?(e=e.toLowerCase(),M.filter(function(t){return t.levelName.toLowerCase().indexOf(e)>-1||t.gameNameUsa.toLowerCase().indexOf(e)>-1||t.system.toLowerCase().indexOf(e)>-1||t.developer.toLowerCase().indexOf(e)>-1||t.year&&t.year.toString().indexOf(e)>-1||t.series.indexOf(e)>1})):[]).map(function(t){return g.a.createElement("li",null,g.a.createElement(z,t))})))}))},o=M(202),y=(M(186),M(187)),T=M.n(y);M.d(e,"query",function(){return d});var O=function(t){return g.a.createElement("div",null,g.a.createElement("h3",null,t.title),g.a.createElement("ul",null,t.values.map(function(e){return g.a.createElement("li",{key:e},g.a.createElement(a.a,{to:t.pathFn(e)},e))})))},d=(e.default=function(t){var e=t.data,M=e.searchData.edges.map(function(t){return t.node});return g.a.createElement(N.a,null,g.a.createElement(o.a,{title:"Fighting Game Backgrounds"}),g.a.createElement("h1",null,"FGBG"),g.a.createElement(c.d,null,g.a.createElement(c.b,null,g.a.createElement(c.a,null,"Browse"),g.a.createElement(c.a,null,"Search")),g.a.createElement(c.c,null,g.a.createElement("h2",null,"Browse ",e.searchData.totalCount," backgrounds by"),g.a.createElement("div",{className:T.a.browseColumnContainer},g.a.createElement(O,{title:"Series",pathFn:r,values:e.series.distinct}),g.a.createElement(O,{title:"Developer",pathFn:j.a,values:e.developers.distinct}),g.a.createElement(O,{title:"System",pathFn:u.a,values:e.systems.distinct}),g.a.createElement(O,{title:"Year Released",pathFn:l.a,values:e.years.distinct}))),g.a.createElement(c.c,null,g.a.createElement("h2",null,"Search"),g.a.createElement(m,{data:M}))))},"735729389")},190:function(t,e,M){"use strict";var I=M(0),g=M.n(I),a=M(58),c=M.n(a);M.d(e,"a",function(){return c.a});M(191),g.a.createContext({})},191:function(t,e,M){var I;t.exports=(I=M(194))&&I.default||I},192:function(t,e,M){"use strict";M.d(e,"a",function(){return a});var I=M(197),g=M.n(I);function a(t){return g()(t,{remove:/[*+~.()'"!:@]/g,lower:!0})}},193:function(t,e,M){"use strict";M.d(e,"a",function(){return A});var I=M(0),g=M.n(I),a=M(190),c=M(195),N=M.n(c),i=M(175),n=M.n(i),A=function(t){var e=t.children;return g.a.createElement(g.a.Fragment,null,e,g.a.createElement("div",{className:n.a.logo},g.a.createElement(a.a,{to:"/"},g.a.createElement("img",{src:N.a}))))}},194:function(t,e,M){"use strict";M.r(e);M(23);var I=M(0),g=M.n(I),a=M(84);e.default=function(t){var e=t.location,M=t.pageResources;return M?g.a.createElement(a.a,Object.assign({location:e,pageResources:M},M.json)):null}},195:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjEwbW0iCiAgIGhlaWdodD0iMjk3bW0iCiAgIHZpZXdCb3g9IjAgMCAyMTAgMjk3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iMjM2Ljk5ODYiCiAgICAgaW5rc2NhcGU6Y3k9IjY3NS4yMTAxOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIyIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAzMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iODE5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIHNob3dndWlkZXM9ImZhbHNlIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIyIgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAyIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eTowLjUxMDYzODM7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSA0NjAuNjI4OTEgMjUyLjc3OTMgQyA0NjAuNjI4OTEgMjUyLjc3OTMgNDc3LjgwMTM5IDI3NS4wMDA3OCA0MjUuMjczNDQgMjcyLjk4MDQ3IEMgMzgzLjY5NTY1IDI3MS4zODEzMyAzNzkuNDc5MjkgMzE3LjE0MTAzIDM3OS41MTk1MyAzMzYuMzMzOTggQyAzNjMuNjc5MTkgMzQ4LjUxNTY2IDM0NS45MzQ1MSAzNjIuMjI0MzggMzI2Ljg0Mzc1IDM3Ny4wODM5OCBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAyOTQuODk2NDggMzU1LjUyMzQ0IEMgMjkxLjA3OTg2IDM0My42MDU4NiAyODIuNTU3NzYgMzI0Ljg2NzU1IDI2Ni4xNzU3OCAzMjIuNDc4NTIgQyAyNjQuNjYwNTUgMzIyLjI1NzU0IDI2My4xNzIzNiAzMjIuMTQxMjMgMjYxLjcxNDg0IDMyMi4xMTcxOSBDIDI0NC42MTU5NCAzMjEuODM1MSAyMzEuNjkyNjUgMzM0LjIzNjAyIDIyNi44NTc0MiAzMzkuNjY2MDIgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgOTUuMTY5OTIyIDQxOC45Mzc1IEMgODguODIxMTk3IDQyMS40NTg1NyA3Ny4zMzMwOCA0MjcuMzYyMTEgNzMuNzQwMjM0IDQzOC4xNDA2MiBDIDcwLjUwNzA3NyA0NDcuODQwMTIgNzYuMzczNjA0IDQ1OS4zNzk3NiA4MS4wMTk1MzEgNDY2LjQ0NTMxIEEgMTQ2Ljk3NzIgMTQwLjQxMTIzIDAgMCAwIDgwLjMwNjY0MSA0ODAuMDYyNSBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAxMDQuNjI1IDU1Ny4yMzgyOCBDIDUwLjI2MDI0NyA2MDQuNDg5NjggMTMuNjU5NDA1IDY0MS4wOTUyMiAyMC43MDg5ODQgNjQ4Ljc1NzgxIEMgMzcuMDIyMzM1IDY2Ni40ODk3MiAxMDAuNTI2MDggNjIwLjA1NjA0IDEzNi45ODA0NyA1OTAuNzc1MzkgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgMjI3LjI4NTE2IDYyMC40NzQ2MSBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAzNzQuMjYxNzIgNDgwLjA2MjUgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgMzQyLjUzOTA2IDM5My4zMTI1IEMgMzU5Ljc5OTA4IDM3NS42NzgzNiAzNzUuODA0MDcgMzU5LjE5MzcgMzkwLjExMTMzIDM0NC4zOTY0OCBDIDQxOS43MjI2NyAzNDMuMzgzODUgNDc2LjE4NTYyIDMzOC43ODMzMSA0NzAuNjA3NDIgMjk3LjMyODEyIEMgNDc4LjAwMTQgMjkxLjYyNzg2IDQ4MS43ODI0OCAyODUuNTYwMTYgNDc4Ljc1IDI3NS4xOTkyMiBDIDQ3Ni42NDQxNiAyODMuNDExOTkgNDcwLjUwMTU5IDI4Mi4xNTA0MyA0NjUuODA0NjkgMjc5Ljc0MDIzIEMgNDcwLjUzMzIxIDI3NC4xMDcwNSA0NzYuMjUyNjggMjU4LjI1NDA5IDQ2MC42Mjg5MSAyNTIuNzc5MyB6ICIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiCiAgICAgICBpZD0icGF0aDM3ODUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDMxLjgwNTA3MywxMDguODQyMjUgLTkuODg4OTcyLDUuODc5OTMgYyAwLDAgLTEuMDY5MDc4LDEuODcwODkgMCw0LjI3NjMxIDEuMDY5MDc4LDIuNDA1NDMgMTYuODM3OTgsMjQuODU2MDcgMTYuODM3OTgsMjQuODU2MDcgbCAxMC45NTgwNSwtNi4xNDcyIHoiCiAgICAgICBpZD0icGF0aDM3MjkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAzNC44Nzg2NzQsMTA3LjM3MjI3IDEwLjAyMjYwNywtNi4wMTM1NyAxMi40MjgwMzIsMjAuMDQ1MjIgYyAwLDAgLTIuNTg2MTA2LDAuODkzMDggMy43NDE3NzQsOS43NTUzNCBsIC04LjQxODk5MSw0Ljk0NDQ4IHoiCiAgICAgICBpZD0icGF0aDM3MzEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDQ3LjcwNzYxLDk5Ljg4ODcyMSA1OS4zMzM4MzYsOTMuMjA2OTg0IDcwLjY5Mjc5LDExNC4wNTQwMSA2MC4yNjkyNzgsMTE5LjkzMzk0IFoiCiAgICAgICBpZD0icGF0aDM3MzMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA2Mi4yNzM3OTgsOTEuNjAzMzY2IDExLjM1ODk1NywyMC44NDcwMjQgNy43NTA4MTUsLTQuNDA5OTUgLTcuMjE2Mjc3LC0xNy4xMDUyNDggYyAwLDAgLTMuMDczNTk5LC02LjgxNTM3MyAtMTEuODkzNDk1LDAuNjY4MTc0IHoiCiAgICAgICBpZD0icGF0aDM3MzUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA0My4xNjQwMjksMTUwLjUzNjMgMzkuODIzMTYsLTIzLjUxOTcyIC0yLjgwNjMzMywtMy42MDgxNCAtMTQuMTY1MjgzLDguMDE4MDkgLTUuMDc4MTIyLC03Ljg4NDQ2IDIwLjcxMzM4OCwtMTEuNjI2MjIgYyAwLDAgNy4yMTYyNzcsLTUuNDc5MDIgOC4yODUzNTYsMS43MzcyNSAxLjA2OTA3OCw3LjIxNjI4IDEuNjAzNjE4LDE4Ljg0MjUgMS42MDM2MTgsMTguODQyNSAwLDAgLTcuNDgzNTQ2LDMuNzQxNzggLTQuNjc3MjE3LDguNTUyNjMgMi44MDYzMyw0LjgxMDg1IDIuNjcyNjk0LDUuNjEyNjYgMi42NzI2OTQsNS42MTI2NiAwLDAgLTQuNTQzNTgxLDEyLjgyODk0IC0yMi45ODUxNzksMTUuMTAwNzMgMCwwIC0xLjczNzI1MSwtMC45MzU0NCAtNC44MTA4NSwtNy4zNDk5MSAtMy4wNzM2LC02LjQxNDQ3IC04LjU1MjYyNSwxLjMzNjM0IC04LjU1MjYyNSwxLjMzNjM0IDAsMCAtNS42MTI2NTksMS40Njk5OSAtMTAuMDIyNjA3LC01LjIxMTc1IHoiCiAgICAgICBpZD0icGF0aDM3MzciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDwvZz4KPC9zdmc+Cg=="},196:function(t,e,M){"use strict";M.d(e,"a",function(){return g});var I=M(192);function g(t){return"/bg:"+[t.gameNameUsa,t.levelName].map(I.a).join("/")}},202:function(t,e,M){"use strict";var I=M(203),g=M(0),a=M.n(g),c=M(204),N=M.n(c);e.a=function(t){var e=t.description,M=void 0===e?"":e,g=t.lang,c=void 0===g?"en":g,i=t.meta,n=void 0===i?[]:i,A=t.title,D=I.data.site,j=M||D.siteMetadata.description;return a.a.createElement(N.a,{htmlAttributes:{lang:c},title:A,titleTemplate:"%s | "+D.siteMetadata.title,meta:[{name:"description",content:j},{property:"og:title",content:A},{property:"og:description",content:j},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:D.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:j}].concat(n)})}},203:function(t){t.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}},205:function(t,e,M){"use strict";M.d(e,"a",function(){return g});var I=M(192);function g(t){return"/system:"+Object(I.a)(t)}},206:function(t,e,M){"use strict";function I(t){return t?"/year:"+t:"/year:missing"}M.d(e,"a",function(){return I})},207:function(t,e,M){"use strict";M.d(e,"a",function(){return g});var I=M(192);function g(t){return"/game:"+Object(I.a)(t)}},208:function(t,e,M){"use strict";M.d(e,"a",function(){return g});var I=M(192);function g(t){return"/developer:"+Object(I.a)(t)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c27a9e93cb25afd0ec41.js.map