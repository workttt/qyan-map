"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[1908],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(8126),a=(n(9496),n(9613));const o={},l=void 0,i={unversionedId:"go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",id:"go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",title:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",description:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",source:"@site/docs/go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5.md",sourceDirName:"go/gin\u7b14\u8bb0",slug:"/go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",permalink:"/qyan-map/docs/go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"http\u72b6\u6001\u7801",permalink:"/qyan-map/docs/go/gin\u7b14\u8bb0/http\u72b6\u6001\u7801"},next:{title:"go web\u5f00\u53d1",permalink:"/qyan-map/docs/go/go web\u5f00\u53d1"}},u={},p=[{value:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",id:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",level:2},{value:"gin\u7684\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",id:"gin\u7684\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",level:3},{value:"\u5c06\u8bf7\u6c42\u7684JSON\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61",id:"\u5c06\u8bf7\u6c42\u7684json\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61",level:3},{value:"gin\u7684\u8def\u7531\u8fd4\u56de\u54cd\u5e94\u4fe1\u606f",id:"gin\u7684\u8def\u7531\u8fd4\u56de\u54cd\u5e94\u4fe1\u606f",level:3}],c={toc:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"},"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"),(0,a.kt)("h3",{id:"gin\u7684\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"},"gin\u7684\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u8def\u7531\u53c2\u6570"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'paramValue := c.Param("paramName")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6URL\u53c2\u6570"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'name := c.DefaultQuery("name", "defaultName")\nquery := c.Query("queryParam")\nqueryArray := c.GetQueryArray("arrayParam")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u8868\u5355\u53c2\u6570"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'formData := c.PostForm("formData")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6POST\u8868\u5355\u6587\u4ef6"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'file, _ := c.FormFile("file")'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u8bf7\u6c42\u5934\u4fe1\u606f"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'headerValue := c.GetHeader("HeaderName")')))),(0,a.kt)("h3",{id:"\u5c06\u8bf7\u6c42\u7684json\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61"},"\u5c06\u8bf7\u6c42\u7684JSON\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61"),(0,a.kt)("p",null,"c.ShouldBindJSON\u662f\u4e00\u4e2aGin\u65b9\u6cd5\uff0c\u7528\u4e8e\u5c06\u8bf7\u6c42\u7684JSON\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\u4e2d\u3002\n\u5982\u679c\u7ed1\u5b9a\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"var json Login   // \u58f0\u660e\u4e00\u4e2a\u7ed3\u6784\u4f53\u5b9e\u4f8b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"c.ShouldBindJSON(&json): \u8be5\u65b9\u6cd5\u662fGin\u6846\u67b6\u63d0\u4f9b\u7684\u7528\u4e8e\u5c06\u8bf7\u6c42\u7684JSON\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\u4e2d\u7684\u65b9\u6cd5\u3002\u5982\u679c\u7ed1\u5b9a\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"c.Bind(&json): \u8fd9\u4e2a\u65b9\u6cd5\u4e0ec.ShouldBindJSON(&json)\u7c7b\u4f3c\uff0c\u4e5f\u662f\u7528\u4e8e\u5c06\u8bf7\u6c42\u7684\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\u4e2d\uff0c\u4f46\u5b83\u53ef\u4ee5\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5305\u62ecJSON\u3001XML\u3001YAML\u7b49\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"c.ShouldBindUri(&json): \u8be5\u65b9\u6cd5\u7528\u4e8e\u5c06\u8bf7\u6c42\u7684URI\u53c2\u6570\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\u4e2d\u3002\u8fd9\u5728\u9700\u8981\u4eceURL\u4e2d\u63d0\u53d6\u53c2\u6570\u5e76\u5c06\u5176\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53\u5bf9\u8c61\u65f6\u975e\u5e38\u6709\u7528\u3002"))),(0,a.kt)("h3",{id:"gin\u7684\u8def\u7531\u8fd4\u56de\u54cd\u5e94\u4fe1\u606f"},"gin\u7684\u8def\u7531\u8fd4\u56de\u54cd\u5e94\u4fe1\u606f"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"c.Status(http.StatusOK)")),(0,a.kt)("p",null,"\u8fd4\u56deJSON\u54cd\u5e94"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'c.JSON(http.StatusOK, gin.H{"key": "value"})')),(0,a.kt)("p",null,"\u8fd4\u56deHTML\u6a21\u677f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'c.HTML(http.StatusOK, "index.html", gin.H{"title": "Home"})')),(0,a.kt)("p",null,"\u91cd\u5b9a\u5411"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'c.Redirect(http.StatusFound, "/newPage")')),(0,a.kt)("p",null,"\u8fd4\u56de\u5b57\u7b26\u4e32"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'c.String(http.StatusOK, "Hello, World!")')))}k.isMDXComponent=!0}}]);