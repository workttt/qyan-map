"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[4500],{7684:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=c(4848),r=c(8453);const a={},s=void 0,o={id:"web\u524d\u7aef/React/\u8bcd\u8bed\u89e3\u91ca",title:"\u8bcd\u8bed\u89e3\u91ca",description:'react\u4e2d\u7684"\u526f\u4f5c\u7528"\u662f\u4ec0\u4e48\u610f\u601d',source:"@site/docs/web\u524d\u7aef/React/\u8bcd\u8bed\u89e3\u91ca.md",sourceDirName:"web\u524d\u7aef/React",slug:"/web\u524d\u7aef/React/\u8bcd\u8bed\u89e3\u91ca",permalink:"/qyan-map/docs/web\u524d\u7aef/React/\u8bcd\u8bed\u89e3\u91ca",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u524d\u7aef/React/\u8bcd\u8bed\u89e3\u91ca.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6458\u8981",permalink:"/qyan-map/docs/web\u524d\u7aef/React/\u6458\u8981"},next:{title:"\u5165\u95e8",permalink:"/qyan-map/docs/web\u524d\u7aef/TypeScript/\u5165\u95e8"}},i={},d=[{value:"react\u4e2d\u7684&quot;\u526f\u4f5c\u7528&quot;\u662f\u4ec0\u4e48\u610f\u601d",id:"react\u4e2d\u7684\u526f\u4f5c\u7528\u662f\u4ec0\u4e48\u610f\u601d",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"react\u4e2d\u7684\u526f\u4f5c\u7528\u662f\u4ec0\u4e48\u610f\u601d",children:'react\u4e2d\u7684"\u526f\u4f5c\u7528"\u662f\u4ec0\u4e48\u610f\u601d'}),"\n",(0,n.jsx)(t.p,{children:'\u5728React 18\u4e2d\uff0c"\u526f\u4f5c\u7528"\uff08Side Effects\uff09\u8fd9\u4e2a\u672f\u8bed\u7279\u6307\u90a3\u4e9b\u9664\u4e86\u7ec4\u4ef6\u6e32\u67d3UI\u4e4b\u5916\uff0c\u8fd8\u4f1a\u5bf9\u5e94\u7528\u7a0b\u5e8f\u6216\u5916\u90e8\u7cfb\u7edf\u4ea7\u751f\u5f71\u54cd\u7684\u64cd\u4f5c\u3002\u8fd9\u4e9b\u64cd\u4f5c\u4e0d\u76f4\u63a5\u6539\u53d8\u7ec4\u4ef6\u7684\u8f93\u51fa\uff0c\u4f46\u53ef\u80fd\u4f1a\u5f71\u54cd\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u6216\u4e0e\u5916\u90e8\u4e16\u754c\u4ea4\u4e92\uff0c\u6bd4\u5982\u8bfb\u53d6\u6216\u5199\u5165\u6d4f\u89c8\u5668\u7684localStorage\u3001\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\u3001\u4fee\u6539DOM\u3001\u8bbe\u7f6e\u5b9a\u65f6\u5668\u3001\u8ba2\u9605\u4e8b\u4ef6\u7b49\u3002'}),"\n",(0,n.jsxs)(t.p,{children:["React\u901a\u8fc7useEffect Hook\u6765\u7ba1\u7406\u8fd9\u4e9b\u526f\u4f5c\u7528\u3002useEffect\u5141\u8bb8\u4f60\u5728\u7ec4\u4ef6\u6e32\u67d3\u4e4b\u540e\u6267\u884c\u4e00\u4e9b\u989d\u5916\u7684\u903b\u8f91\uff0c\u800c\u4e14\u80fd\u591f\u63d0\u4f9b\u4e00\u4e2a\u6e05\u7406\u51fd\u6570\uff08cleanup function\uff09\u6765\u5728",(0,n.jsx)(t.code,{children:"\u7ec4\u4ef6\u5378\u8f7d"}),"\u6216",(0,n.jsx)(t.code,{children:"\u4e0b\u6b21\u6e32\u67d3\u524d"}),"\u6e05\u7406\u526f\u4f5c\u7528\uff0c\u6bd4\u5982\u53d6\u6d88\u7f51\u7edc\u8bf7\u6c42\u6216\u79fb\u9664\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u4ee5\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\u548c\u4fdd\u6301\u5e94\u7528\u7684\u5065\u5eb7\u72b6\u6001\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u5728React 18\u4e2d\uff0c\u5173\u4e8e\u526f\u4f5c\u7528\u7684\u4e00\u4e9b\u5173\u952e\u70b9\u548c\u65b0\u7279\u6027\u53ef\u80fd\u5305\u62ec\uff1a"}),"\n",(0,n.jsx)(t.p,{children:"\u5e76\u53d1\u6a21\u5f0f\uff08Concurrent Mode\uff09\u7684\u5f71\u54cd\uff1aReact 18\u5f15\u5165\u4e86\u5e76\u53d1\u6e32\u67d3\uff0c\u8fd9\u610f\u5473\u7740\u7ec4\u4ef6\u7684\u6e32\u67d3\u548c\u526f\u4f5c\u7528\u6267\u884c\u53ef\u4ee5\u88ab\u6253\u65ad\uff0c\u56e0\u6b64useEffect\u7684\u884c\u4e3a\u9700\u8981\u8003\u8651\u5230\u8fd9\u4e00\u70b9\u3002\u5f00\u53d1\u8005\u53ef\u80fd\u9700\u8981\u66f4\u52a0\u6ce8\u610f\u526f\u4f5c\u7528\u7684\u5e42\u7b49\u6027\uff08idempotency\uff09\uff0c\u4ee5\u786e\u4fdd\u5373\u4f7f\u591a\u6b21\u8c03\u7528\u4e5f\u4e0d\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u81ea\u52a8\u6279\u5904\u7406\uff08Automatic Batching\uff09\uff1aReact 18\u4f18\u5316\u4e86\u72b6\u6001\u66f4\u65b0\u7684\u6279\u5904\u7406\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u4f9d\u8d56\u4e8e\u7279\u5b9a\u66f4\u65b0\u987a\u5e8f\u7684\u526f\u4f5c\u7528\u903b\u8f91\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\uff1aReact 18\u7ee7\u7eed\u652f\u6301\u901a\u8fc7\u4f9d\u8d56\u6570\u7ec4\u6765\u63a7\u5236useEffect\u7684\u6267\u884c\u65f6\u673a\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7cbe\u786e\u5730\u7ba1\u7406\u526f\u4f5c\u7528\u4f55\u65f6\u91cd\u65b0\u6267\u884c\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u603b\u7684\u6765\u8bf4\uff0c\u7406\u89e3\u5e76\u6b63\u786e\u7ba1\u7406\u526f\u4f5c\u7528\u5bf9\u4e8e\u6784\u5efa\u9ad8\u6027\u80fd\u4e14\u53ef\u7ef4\u62a4\u7684React\u5e94\u7528\u81f3\u5173\u91cd\u8981\uff0c\u5c24\u5176\u662f\u5728React 18\u53ca\u5176\u65b0\u7279\u6027\u80cc\u666f\u4e0b\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\u5728 React \u4e2d\uff0c\u526f\u4f5c\u7528\u6307\u7684\u662f\u4e0e\u7ec4\u4ef6\u6e32\u67d3\u7ed3\u679c\u65e0\u5173\u7684\u4efb\u4f55\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\r\n\r\n\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\r\n\u4fee\u6539 DOM \u5143\u7d20\r\n\u8bbf\u95ee\u672c\u5730\u5b58\u50a8\r\n\u8ba2\u9605\u6216\u53d6\u6d88\u8ba2\u9605\u4e8b\u4ef6\r\n\u6539\u53d8\u7ec4\u4ef6\u72b6\u6001\u5916\u7684\u53d8\u91cf\u7b49\r\n\u8fd9\u4e9b\u64cd\u4f5c\u4f1a\u5f71\u54cd\u7ec4\u4ef6\u7684\u884c\u4e3a\u548c\u72b6\u6001\uff0c\u4f46\u662f\u5e76\u4e0d\u4f1a\u76f4\u63a5\u5f71\u54cd\u6e32\u67d3\u7ed3\u679c\u3002\u5728 React \u4e2d\uff0c\u5e94\u8be5\u5c06\u526f\u4f5c\u7528\u5206\u79bb\u51fa\u6765\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u63a7\u5236\u7ec4\u4ef6\u7684\u884c\u4e3a\u548c\u72b6\u6001\u3002\r\n\r\n\u901a\u5e38\uff0cReact \u4f7f\u7528\u94a9\u5b50\u51fd\u6570\uff08\u5982 useEffect\uff09\u6765\u5904\u7406\u526f\u4f5c\u7528\u3002\u5728 useEffect \u4e2d\uff0c\u53ef\u4ee5\u6267\u884c\u4e00\u4e9b\u526f\u4f5c\u7528\u64cd\u4f5c\uff0c\u4f8b\u5982\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u6216\u8ba2\u9605\u4e8b\u4ef6\uff0c\u4ee5\u53ca\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u6e05\u9664\u8fd9\u4e9b\u64cd\u4f5c\u3002\u8fd9\u53ef\u4ee5\u4fdd\u6301\u7ec4\u4ef6\u7684\u4e00\u81f4\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002\r\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,c)=>{c.d(t,{R:()=>s,x:()=>o});var n=c(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);