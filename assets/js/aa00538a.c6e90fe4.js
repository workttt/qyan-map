"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[1247],{9613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,l(l({ref:e},c),{},{components:n})):r.createElement(h,l({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7610:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(8126),a=(n(9496),n(9613));const o={},l=void 0,i={unversionedId:"go/go web\u5f00\u53d1",id:"go/go web\u5f00\u53d1",title:"go web\u5f00\u53d1",description:"net/http , gin",source:"@site/docs/go/go web\u5f00\u53d1.md",sourceDirName:"go",slug:"/go/go web\u5f00\u53d1",permalink:"/qyan-map/docs/go/go web\u5f00\u53d1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/go/go web\u5f00\u53d1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",permalink:"/qyan-map/docs/go/gin\u7b14\u8bb0/\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"},next:{title:"\u4e2d\u95f4\u4ef6\u63a8\u8350",permalink:"/qyan-map/docs/go/go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6/\u4e2d\u95f4\u4ef6\u63a8\u8350"}},u={},p=[{value:"net/http , gin",id:"nethttp--gin",level:2},{value:"gin\u7684\u8def\u7531 httprouter",id:"gin\u7684\u8def\u7531-httprouter",level:2},{value:"API\u53c2\u6570",id:"api\u53c2\u6570",level:3},{value:"URL\u53c2\u6570",id:"url\u53c2\u6570",level:3},{value:"\u8868\u5355\u53c2\u6570",id:"\u8868\u5355\u53c2\u6570",level:3},{value:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",id:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5",level:2},{value:"gin\u7684\u5185\u7f6e\u5bf9\u8c61",id:"gin\u7684\u5185\u7f6e\u5bf9\u8c61",level:3},{value:"net/http  \u5305\u4e2d",id:"nethttp--\u5305\u4e2d",level:2},{value:"gin\u4e2d\u95f4\u4ef6",id:"gin\u4e2d\u95f4\u4ef6",level:2},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:3},{value:"Next()\u65b9\u6cd5",id:"next\u65b9\u6cd5",level:3},{value:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",id:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",level:3}],c={toc:p},d="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nethttp--gin"},"net/http , gin"),(0,a.kt)("p",null,"001-http.go"),(0,a.kt)("h2",{id:"gin\u7684\u8def\u7531-httprouter"},"gin\u7684\u8def\u7531 httprouter"),(0,a.kt)("p",null,"002-router.go"),(0,a.kt)("h3",{id:"api\u53c2\u6570"},"API\u53c2\u6570"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"http://localhost:8000/user/\u4f60\u7684\u540d\u5b57/asdasd")),(0,a.kt)("p",null,"Context\u7684Param\u65b9\u6cd5    ",(0,a.kt)("inlineCode",{parentName:"p"},'c.Param("paramName")')),(0,a.kt)("h3",{id:"url\u53c2\u6570"},"URL\u53c2\u6570"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"http://localhost:8000/user?name=\u4f60\u7684\u540d\u5b57")),(0,a.kt)("p",null,"DefaultQuery()  Query()  GetQueryArray()  GetPostFormArray()"),(0,a.kt)("h3",{id:"\u8868\u5355\u53c2\u6570"},"\u8868\u5355\u53c2\u6570"),(0,a.kt)("p",null,"post\u8bf7\u6c42\uff0c\u56db\u79cd\u4f20\u8f93\u683c\u5f0f\uff0cPostForm()\u83b7\u53d6-\u9ed8\u8ba4\u89e3\u6790\u7684\u662fx-www-form-urlencoded\u6216\u8005form-data\u683c\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"application/x-www-form-urlencoded\uff1a\u901a\u8fc7PostForm()\u65b9\u6cd5\u83b7\u53d6\uff0c\u9ed8\u8ba4\u89e3\u6790\u7684\u662f\u8fd9\u79cd\u683c\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ol"},"multipart/form-data\uff1a\u7528\u4e8e\u4e0a\u4f20\u6587\u4ef6\u6216\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"application/json\uff1a\u7528\u4e8e\u53d1\u9001JSON\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"application/xml\uff1a\u7528\u4e8e\u53d1\u9001xml\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"text/plain\uff1a\u7eaf\u6587\u672c\u683c\u5f0f\u63d0\u4ea4\u3002")),(0,a.kt)("h2",{id:"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"},"\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// gin\u7684\u8def\u7531\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65b9\u6cd5\n\n// \u83b7\u53d6\u8def\u7531\u53c2\u6570 "/:paramName"\nparamValue := c.Param("paramName")\n\n// \u83b7\u53d6URL\u53c2\u6570\nname := c.DefaultQuery("name", "defaultName")\nquery := c.Query("queryParam")\nqueryArray := c.GetQueryArray("arrayParam")\n\n// \u83b7\u53d6\u8868\u5355\u53c2\u6570\nformData := c.PostForm("formData")\n\n// \u83b7\u53d6POST\u8868\u5355\u6587\u4ef6\nfile, _ := c.FormFile("file")\n\n// \u83b7\u53d6\u8bf7\u6c42\u5934\u4fe1\u606f\nheaderValue := c.GetHeader("HeaderName")\n\n\nvar json Login\n/**\nc.ShouldBindJSON\u662f\u4e00\u4e2aGin\u65b9\u6cd5\uff0c\u7528\u4e8e\u5c06\u8bf7\u6c42\u7684JSON\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\u4e2d\u3002\n\u5982\u679c\u7ed1\u5b9a\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002\n */\nc.ShouldBindJSON(&json)\nc.Bind(&json)\nc.ShouldBindUri(&json)\n\n\n// \u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801\nc.Status(http.StatusOK)\n\n// \u8fd4\u56deJSON\u54cd\u5e94\nc.JSON(http.StatusOK, gin.H{"key": "value"})\n\n// \u8fd4\u56deHTML\u6a21\u677f\nc.HTML(http.StatusOK, "index.html", gin.H{"title": "Home"})\n\n// \u91cd\u5b9a\u5411\nc.Redirect(http.StatusFound, "/newPage")\n\n// \u8fd4\u56de\u5b57\u7b26\u4e32\nc.String(http.StatusOK, "Hello, World!")\n')),(0,a.kt)("h3",{id:"gin\u7684\u5185\u7f6e\u5bf9\u8c61"},"gin\u7684\u5185\u7f6e\u5bf9\u8c61"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'c.JSON(200, gin.H{"message": "use get method"})\n\n\u67e5\u770bgin\u6846\u67b6\u7684\u6e90\u7801\uff0c\u58f0\u660e\u5982\u4e0b\uff1a\n// H is a shortcut for map[string]interface{}\ntype H map[string]interface{}\n')),(0,a.kt)("h2",{id:"nethttp--\u5305\u4e2d"},"net/http  \u5305\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u4ee3\u7801\u4e2d\u7684http\u7684\u5c5e\u6027\n\n// \u5e38\u89c1\u72b6\u6001\u7801\nhttp.StatusOK // 200\nhttp.StatusFound // 302\nhttp.StatusBadRequest // 400\nhttp.StatusNotFound // 404\nhttp.StatusInternalServerError // 500\n\n// \u5e38\u89c1\u8bf7\u6c42\u65b9\u6cd5\nhttp.MethodGet\nhttp.MethodPost\nhttp.MethodPut\nhttp.MethodDelete\nhttp.MethodPatch\nhttp.MethodOptions\nhttp.MethodHead\n")),(0,a.kt)("h2",{id:"gin\u4e2d\u95f4\u4ef6"},"gin\u4e2d\u95f4\u4ef6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u6ce8\u518c\u4e2d\u95f4\u4ef6\uff0c")),(0,a.kt)("h3",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u5168\u90e8\u63a5\u53e3\u90fd\u8981\u7ecf\u8fc7\u7684\u4e2d\u95f4\u4ef6"),(0,a.kt)("h3",{id:"next\u65b9\u6cd5"},"Next()\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4e0a\u4e0b\u6587\u7684Next() \u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u5c40\u90e8\u4e2d\u95f4\u4ef6"},"\u5c40\u90e8\u4e2d\u95f4\u4ef6"))}s.isMDXComponent=!0}}]);