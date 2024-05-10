"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[6437],{9948:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var o=r(4848),t=r(8453);const i={},s=void 0,c={id:"web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/gin\u9879\u76ee",title:"gin\u9879\u76ee",description:"\u9879\u76ee\u542f\u52a8",source:"@site/docs/web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/gin\u9879\u76ee.md",sourceDirName:"web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406",slug:"/web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/gin\u9879\u76ee",permalink:"/qyan-map/docs/web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/gin\u9879\u76ee",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/gin\u9879\u76ee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"strings-golang",permalink:"/qyan-map/docs/web\u540e\u7aef/go/\u5185\u7f6e\u5305/strings\u5b57\u7b26\u4e32\u5904\u7406/strings-golang"},next:{title:"mod",permalink:"/qyan-map/docs/web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/mod"}},a={},g=[{value:"\u9879\u76ee\u542f\u52a8",id:"\u9879\u76ee\u542f\u52a8",level:2},{value:"\u4e0b\u8f7dgin",id:"\u4e0b\u8f7dgin",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u9879\u76ee\u542f\u52a8",children:"\u9879\u76ee\u542f\u52a8"}),"\n",(0,o.jsx)(e.p,{children:"\u5728\u5df2\u7ecf\u6709go.mod\u6587\u4ef6\u7684\u9879\u76ee\u4e2d\u8fd0\u884cmain\u51fd\u6570\u7684.go\u9879\u76ee\u5165\u53e3\u6587\u4ef6\u5373\u53ef\u81ea\u52a8\u4e0b\u8f7d\u5bf9\u5e94\u7684\u4f9d\u8d56\u5305gin\r\ngo run ./api/example.go"}),"\n",(0,o.jsx)(e.h2,{id:"\u4e0b\u8f7dgin",children:"\u4e0b\u8f7dgin"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"go get -u github.com/gin-gonic/gin"})}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u5b89\u88c5\u4e0d\u4e0a,\u53ef\u4ee5\u8bd5\u8bd5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'mac\r\n# \u8bbe\u7f6egoproxy.io\u4ee3\u7406\r\nexport GOPROXY=https://goproxy.io\r\n# \u8bbe\u7f6eGO111MOUDLE\r\nexport GO111MODULE=on \r\n\r\nwin\r\n# \u6ce8\u610f\u9700\u8981\u52a0\u4e0a\u5f15\u53f7\r\n# \u8bbe\u7f6egoproxy.io\u4ee3\u7406\r\ngo env -w GOPROXY="https://goproxy.io"\r\n# \u8bbe\u7f6eGO111MOUDLE\r\ngo env -w GO111MODULE="on"\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\r\n\r\nimport (\r\n    "net/http"\r\n\r\n    "github.com/gin-gonic/gin"\r\n)\r\n\r\nfunc main() {\r\n    // 1.\u521b\u5efa\u8def\u7531\r\n   r := gin.Default()\r\n   // 2.\u7ed1\u5b9a\u8def\u7531\u89c4\u5219\uff0c\u6267\u884c\u7684\u51fd\u6570\r\n   // gin.Context\uff0c\u5c01\u88c5\u4e86request\u548cresponse\r\n   r.GET("/", func(c *gin.Context) {\r\n      c.String(http.StatusOK, "hello World!")\r\n   })\r\n   // 3.\u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u57288080\r\n   // Run("\u91cc\u9762\u4e0d\u6307\u5b9a\u7aef\u53e3\u53f7\u9ed8\u8ba4\u4e3a8080") \r\n   r.Run(":8000")\r\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>c});var o=r(6540);const t={},i=o.createContext(t);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);