"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[9500],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(8126),o=(n(9496),n(9613));const i={},a=void 0,c={permalink:"/qyan-map/blog/js\u5de5\u5177\u7c7b/\u5c40\u90e8\u6253\u5370",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/js\u5de5\u5177\u7c7b/\u5c40\u90e8\u6253\u5370.md",source:"@site/blog/js\u5de5\u5177\u7c7b/\u5c40\u90e8\u6253\u5370.md",title:"js\u5de5\u5177\u7c7b/\u5c40\u90e8\u6253\u5370",description:"function printDiv(divId) {",date:"2024-04-24T03:20:25.770Z",formattedDate:"April 24, 2024",tags:[],readingTime:.145,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"\u79bb\u7ebf\u91c7\u96c6\u4e0a\u4f20\u4efb\u52a1\u672c\u5730\u5217\u8868",permalink:"/qyan-map/blog/2024/03/26/\u79bb\u7ebf\u91c7\u96c6\u4e0a\u4f20\u4efb\u52a1\u672c\u5730\u5217\u8868"}},l={authorsImageUrls:[]},u=[],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"function printDiv(divId) {\nvar divContents = document.getElementById(divId).innerHTML;\nvar printWindow = window.open('', '', 'height=400,width=800');\nprintWindow.document.write('",(0,o.kt)("html",null,(0,o.kt)("head",null,(0,o.kt)("title",null,"Print DIV Content"),"');\nprintWindow.document.write('",(0,o.kt)("style",null,"body { font-family: Arial, sans-serif; }"),"');\nprintWindow.document.write('"),(0,o.kt)("body",null,"');\nprintWindow.document.write(divContents);\nprintWindow.document.write('")),"');\nprintWindow.document.close();\nprintWindow.print();\n}"))}d.isMDXComponent=!0}}]);