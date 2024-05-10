"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[3834],{4776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var l=s(4848),r=s(8453);const t={},a="Set",c={id:"web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Set",title:"Set",description:"\u6309\u503c\u5b58\u50a8\u7684\u96c6\u5408\uff0c\u81ea\u52a8\u53bb\u91cd.   \u2014\u2014 Array.from()\u8f6c\u6362\u6210\u6570\u7ec4",source:"@site/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Set.md",sourceDirName:"web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61",slug:"/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Set",permalink:"/qyan-map/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/qyan-map/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Map"},next:{title:"window",permalink:"/qyan-map/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/window"}},d={},i=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:".size",id:"size",level:3},{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:2},{value:"new Set()",id:"new-set",level:3},{value:"\u5b9e\u4f8b\u7684\u65b9\u6cd5",id:"\u5b9e\u4f8b\u7684\u65b9\u6cd5",level:2},{value:"<code>*</code> add( value )",id:"-add-value-",level:3},{value:"* delete( value )",id:"-delete-value-",level:3},{value:"* has( value )",id:"-has-value-",level:3},{value:"clear",id:"clear",level:3},{value:"forEach",id:"foreach",level:3},{value:"values()",id:"values",level:3},{value:"keys()",id:"keys",level:3},{value:"entries()",id:"entries",level:3}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,l.jsx)(n.p,{children:"\u6309\u503c\u5b58\u50a8\u7684\u96c6\u5408\uff0c\u81ea\u52a8\u53bb\u91cd.   \u2014\u2014 Array.from()\u8f6c\u6362\u6210\u6570\u7ec4"}),"\n",(0,l.jsx)(n.p,{children:"\u5728js\u4e2d\u662f\u5404\u4e2a\u503c\u7ec4\u6210\u7684\u4e00\u7ef4\u6570\u7ec4\uff08[val1, val2, val3, ...]\uff09"}),"\n",(0,l.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,l.jsx)(n.h3,{id:"size",children:".size"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de Set \u5bf9\u8c61\u4e2d\u7684\u503c\u7684\u4e2a\u6570"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'new Set([1,2,3]).size // 3\r\n\r\nvar s1 = new Set(["111", "222"])\r\ns1.size // 2\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u9759\u6001\u65b9\u6cd5",children:"\u9759\u6001\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.h3,{id:"new-set",children:"new Set()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u53ef\u8fed\u4ee3\u7684\u503c\u3002 \u6570\u7ec4\u3001\u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"var s1 = new Set()\r\nvar s1 = new Set([1, 2, 3])\r\nvar s1 = new Set('abcd')\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u4f8b\u7684\u65b9\u6cd5",children:"\u5b9e\u4f8b\u7684\u65b9\u6cd5"}),"\n",(0,l.jsxs)(n.h3,{id:"-add-value-",children:[(0,l.jsx)(n.code,{children:"*"})," add( value )"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728Set\u5bf9\u8c61\u5c3e\u90e8\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u3002\u8fd4\u56de\u8be5Set\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'var myset = new Set()\r\nmyset.add(123)\r\nmyset.add("\u7b2c\u4e8c")\r\nmyset.add({\r\n    a: "wwww",\r\n    b: "\u5f15\u7528\u7c7b\u578b\u5b58\u5730\u5740\uff0c\u9ed8\u8ba4\u7684\u53bb\u91cd\u5224\u65ad\u65e0\u6548\u7684"\r\n})\r\nconsole.log(myset)\r\n// Set(3)\xa0{123, "\u7b2c\u4e8c", {\u2026}}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"-delete-value-",children:"* delete( value )"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u79fb\u9664Set\u4e2d\u4e0e\u8fd9\u4e2a\u503c\u76f8\u7b49\u7684\u5143\u7d20\uff0c\u8fd4\u56deSet.prototype.has(value)\u5728\u8fd9\u4e2a\u64cd\u4f5c\u524d\u4f1a\u8fd4\u56de\u7684\u503c\uff08\u5373\u5982\u679c\u8be5\u5143\u7d20\u5b58\u5728\uff0c\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\uff09\u3002Set.prototype.has(value)\u5728\u6b64\u540e\u4f1a\u8fd4\u56defalse\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"-has-value-",children:"* has( value )"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u503c\u5728Set\u4e2d\u5b58\u5728\u4e0e\u5426\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"clear",children:"clear"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u79fb\u9664Set\u5bf9\u8c61\u5185\u7684\u6240\u6709\u5143\u7d20\u3002   myset.clear()"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"foreach",children:"forEach"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6309\u7167\u63d2\u5165\u987a\u5e8f\uff0c\u4e3aSet\u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e00\u4e2a\u503c\u8c03\u7528\u4e00\u6b21callBackFn\u3002\u5982\u679c\u63d0\u4f9b\u4e86thisArg\u53c2\u6570\uff0c\u56de\u8c03\u4e2d\u7684this\u4f1a\u662f\u8fd9\u4e2a\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"values",children:"values()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542bSet\u5bf9\u8c61\u4e2d\u7684\u6309\u63d2\u5165\u987a\u5e8f\u6392\u5217\u7684\u6240\u6709\u5143\u7d20\u7684\u503c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keys",children:"keys()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e0evalues()\u65b9\u6cd5\u76f8\u540c\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542bSet\u5bf9\u8c61\u4e2d\u7684\u6309\u63d2\u5165\u987a\u5e8f\u6392\u5217\u7684\u6240\u6709\u5143\u7d20\u7684\u503c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"entries",children:"entries()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var l=s(6540);const r={},t=l.createContext(r);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);