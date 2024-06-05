"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[9116],{7849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(4848),a=t(8453);const o={},s=void 0,i={id:"web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1/api",title:"api",description:"validator\u5e93",source:"@site/docs/web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1/03-api.md",sourceDirName:"web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1",slug:"/web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1/api",permalink:"/qyan-map/docs/web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1/api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1/03-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6559\u7a0b",permalink:"/qyan-map/docs/web\u540e\u7aef/go/\u53c2\u6570\u9a8c\u8bc1/\u6559\u7a0b"},next:{title:"Go\u547d\u4ee4",permalink:"/qyan-map/docs/web\u540e\u7aef/go/\u5de5\u7a0b\u5316\u7ba1\u7406/Go\u547d\u4ee4"}},c={},l=[{value:"validator\u5e93",id:"validator\u5e93",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"validator\u5e93",children:"validator\u5e93"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b9a\u4e49\u7ed3\u6784\u4f53 validator\u6807\u7b7e"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Go",children:'type User struct {\r\n    Username string `validate:"min=6,max=10"`\r\n    Age      uint8  `validate:"gte=1,lte=10"`\r\n    Sex      string `validate:"oneof=female male"`\r\n}\r\n\r\n// Name\uff1a\u901a\u8fc7min\u548cmax\u6765\u8fdb\u884c\u7ea6\u675f\uff0cName\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u4e3a[6,10]\u4e4b\u95f4\r\n// Age\uff1a\u901a\u8fc7gte\u548clte\u5bf9\u5e74\u8f7b\u7684\u8303\u56f4\u8fdb\u884c\u7ea6\u675f\uff0cage\u7684\u5927\u5c0f\u5927\u4e8e1\uff0c\u5c0f\u4e8e10\r\n// Sex\uff1a\u901a\u8fc7oneof\u5bf9\u503c\u8fdb\u884c\u7ea6\u675f\uff0c\u53ea\u80fd\u662f\u6240\u5217\u4e3e\u7684\u503c\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u9a8c\u8bc1\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Go",children:"    v := validator.New()\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Struct()\u65b9\u6cd5\u6765\u9a8c\u8bc1\u7ed3\u6784\u5bf9\u8c61"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Go",children:'    user1 := User{Username: "asong", Age: 11, Sex: "null"}\r\n    err := v.Struct(user1)\r\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);