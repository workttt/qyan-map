"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[8914],{3252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453);const a={title:"JS Date\u5bf9\u8c61 \u683c\u5f0f\u5316\u7684\u4e24\u5957\u51fd\u6570",tags:["js","\u65e5\u671f\u65f6\u95f4"]},o=void 0,c={permalink:"/qyan-map/blog/2023/12/06/\u56fd\u4ea7\u7cfb\u7edf\u6d4f\u89c8\u5668js\u65e5\u671f\u683c\u5f0f\u5316\u95ee\u9898",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-06/\u56fd\u4ea7\u7cfb\u7edf\u6d4f\u89c8\u5668js\u65e5\u671f\u683c\u5f0f\u5316\u95ee\u9898.md",source:"@site/blog/2023-12-06/\u56fd\u4ea7\u7cfb\u7edf\u6d4f\u89c8\u5668js\u65e5\u671f\u683c\u5f0f\u5316\u95ee\u9898.md",title:"JS Date\u5bf9\u8c61 \u683c\u5f0f\u5316\u7684\u4e24\u5957\u51fd\u6570",description:"\u8fd8\u662f\u4f7f\u7528day.js\u6bd4\u8f83\u597d",date:"2023-12-06T00:00:00.000Z",tags:[{label:"js",permalink:"/qyan-map/blog/tags/js"},{label:"\u65e5\u671f\u65f6\u95f4",permalink:"/qyan-map/blog/tags/\u65e5\u671f\u65f6\u95f4"}],readingTime:.9,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JS Date\u5bf9\u8c61 \u683c\u5f0f\u5316\u7684\u4e24\u5957\u51fd\u6570",tags:["js","\u65e5\u671f\u65f6\u95f4"]},unlisted:!1,prevItem:{title:"\u501f\u9605\u5355\u8bc1\u660e\u9644\u4ef6",permalink:"/qyan-map/blog/2023/12/25/\u501f\u9605\u5355\u8bc1\u660e\u9644\u4ef6"},nextItem:{title:"24-04/\u6863\u6848\u6a21\u677f",permalink:"/qyan-map/blog/2023/06/20/24-04/\u6863\u6848\u6a21\u677f"}},u={authorsImageUrls:[]},d=[];function i(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u8fd8\u662f\u4f7f\u7528day.js\u6bd4\u8f83\u597d"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"UTC : getUTCXxx"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u5730\u65f6\u95f4 : getXxx"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function formatTimestamp(timestamp) {\r\n    // \u624b\u52a8\u52a0\u4e1c\u516b\u533a\u7684\u65f6\u533a\u6beb\u79d2\u6570 8 * 3600 * 1000 = 28800000 \r\n    var date = new Date(timestamp + 28800000);\r\n    var year = date.getUTCFullYear();\r\n    var month = date.getUTCMonth() + 1; // getUTCMonth \u8fd4\u56de\u7684\u6708\u4efd\u4ece 0 \u5f00\u59cb\r\n    var day = date.getUTCDate();\r\n    var hours = date.getUTCHours();\r\n    var minutes = date.getUTCMinutes();\r\n    var seconds = date.getUTCSeconds();\r\n    // \u4fdd\u8bc1\u6708\u3001\u65e5\u3001\u65f6\u3001\u5206\u3001\u79d2\u90fd\u662f\u4e24\u4f4d\u6570\r\n    month = month < 10 ? '0' + month : month;\r\n    day = day < 10 ? '0' + day : day;\r\n    hours = hours < 10 ? '0' + hours : hours;\r\n    minutes = minutes < 10 ? '0' + minutes : minutes;\r\n    seconds = seconds < 10 ? '0' + seconds : seconds;\r\n    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;\r\n}\r\n\r\nconsole.log(formatTimestamp(1701881375432))\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);