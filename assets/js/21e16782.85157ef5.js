"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[3893],{5651:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var i=r(4848),t=r(8453);const o={},s=void 0,c={id:"web\u540e\u7aef/go/go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6/\u4e2d\u95f4\u4ef6\u63a8\u8350",title:"\u4e2d\u95f4\u4ef6\u63a8\u8350",description:"\u63a8\u8350",source:"@site/docs/web\u540e\u7aef/go/3_go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6/\u4e2d\u95f4\u4ef6\u63a8\u8350.md",sourceDirName:"web\u540e\u7aef/go/3_go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6",slug:"/web\u540e\u7aef/go/go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6/\u4e2d\u95f4\u4ef6\u63a8\u8350",permalink:"/qyan-map/docs/web\u540e\u7aef/go/go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6/\u4e2d\u95f4\u4ef6\u63a8\u8350",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u540e\u7aef/go/3_go-web\u5f00\u53d1/\u4e2d\u95f4\u4ef6/\u4e2d\u95f4\u4ef6\u63a8\u8350.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b98\u7f51\u7b14\u8bb0",permalink:"/qyan-map/docs/web\u540e\u7aef/Koa2/\u5b98\u7f51\u7b14\u8bb0"},next:{title:"\u4f1a\u8bdd\u63a7\u5236",permalink:"/qyan-map/docs/web\u540e\u7aef/go/go-web\u5f00\u53d1/\u4f1a\u8bdd\u63a7\u5236/1"}},a={},g=[{value:"\u63a8\u8350",id:"\u63a8\u8350",level:2}];function d(n){const e={code:"code",h2:"h2",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63a8\u8350",children:"\u63a8\u8350"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"RestGate - REST API\u7aef\u70b9\u7684\u5b89\u5168\u8eab\u4efd\u9a8c\u8bc1\r\nstaticbin - \u7528\u4e8e\u4ece\u4e8c\u8fdb\u5236\u6570\u636e\u63d0\u4f9b\u9759\u6001\u6587\u4ef6\u7684\u4e2d\u95f4\u4ef6/\u5904\u7406\u7a0b\u5e8f\r\ngin-cors - CORS\u675c\u677e\u5b50\u9152\u7684\u5b98\u65b9\u4e2d\u95f4\u4ef6\r\ngin-csrf - CSRF\u4fdd\u62a4\r\ngin-health - \u901a\u8fc7gocraft/health\u62a5\u544a\u7684\u4e2d\u95f4\u4ef6\r\ngin-merry - \u5e26\u6709\u4e0a\u4e0b\u6587\u7684\u6f02\u4eae \u6253\u5370 \u9519\u8bef\u7684\u4e2d\u95f4\u4ef6\r\ngin-revision - \u7528\u4e8eGin\u6846\u67b6\u7684\u4fee\u8ba2\u4e2d\u95f4\u4ef6\r\ngin-jwt - \u7528\u4e8eGin\u6846\u67b6\u7684JWT\u4e2d\u95f4\u4ef6\r\ngin-sessions - \u57fa\u4e8emongodb\u548cmysql\u7684\u4f1a\u8bdd\u4e2d\u95f4\u4ef6\r\ngin-location - \u7528\u4e8e\u516c\u5f00\u670d\u52a1\u5668\u7684\u4e3b\u673a\u540d\u548c\u65b9\u6848\u7684\u4e2d\u95f4\u4ef6\r\ngin-nice-recovery - \u7d27\u6025\u6062\u590d\u4e2d\u95f4\u4ef6\uff0c\u53ef\u8ba9\u60a8\u6784\u5efa\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\r\ngin-limit - \u9650\u5236\u540c\u65f6\u8bf7\u6c42\uff1b\u53ef\u4ee5\u5e2e\u52a9\u589e\u52a0\u4ea4\u901a\u6d41\u91cf\r\ngin-limit-by-key - \u4e00\u79cd\u5185\u5b58\u4e2d\u7684\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u901a\u8fc7\u81ea\u5b9a\u4e49\u952e\u548c\u901f\u7387\u9650\u5236\u8bbf\u95ee\u901f\u7387\u3002\r\nez-gin-template - gin\u7b80\u5355\u6a21\u677f\u5305\u88c5\r\ngin-hydra - gin\u4e2d\u95f4\u4ef6Hydra\r\ngin-glog - \u65e8\u5728\u66ff\u4ee3Gin\u7684\u9ed8\u8ba4\u65e5\u5fd7\r\ngin-gomonitor - \u7528\u4e8e\u901a\u8fc7Go-Monitor\u516c\u5f00\u6307\u6807\r\ngin-oauth2 - \u7528\u4e8eOAuth2\r\nstatic gin\u6846\u67b6\u7684\u66ff\u4ee3\u9759\u6001\u8d44\u4ea7\u5904\u7406\u7a0b\u5e8f\u3002\r\nxss-mw - XssMw\u662f\u4e00\u79cd\u4e2d\u95f4\u4ef6\uff0c\u65e8\u5728\u4ece\u7528\u6237\u63d0\u4ea4\u7684\u8f93\u5165\u4e2d\u201c\u81ea\u52a8\u5220\u9664XSS\u201d\r\ngin-helmet - \u7b80\u5355\u7684\u5b89\u5168\u4e2d\u95f4\u4ef6\u96c6\u5408\u3002\r\ngin-jwt-session - \u63d0\u4f9bJWT / Session / Flash\u7684\u4e2d\u95f4\u4ef6\uff0c\u6613\u4e8e\u4f7f\u7528\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u5fc5\u8981\u7684\u8c03\r\n\u6574\u9009\u9879\u3002\u4e5f\u63d0\u4f9b\u6837\u54c1\u3002\r\ngin-template - \u7528\u4e8egin\u6846\u67b6\u7684html / template\u6613\u4e8e\u4f7f\u7528\u3002\r\ngin-redis-ip-limiter - \u57fa\u4e8eIP\u5730\u5740\u7684\u8bf7\u6c42\u9650\u5236\u5668\u3002\u5b83\u53ef\u4ee5\u4e0eredis\u548c\u6ed1\u52a8\u7a97\u53e3\u673a\u5236\u4e00\u8d77\u4f7f\r\n\u7528\u3002\r\n\r\ngin-method-override - _method\u53d7Ruby\u7684\u540c\u540d\u673a\u67b6\u542f\u53d1\u800c\u88abPOST\u5f62\u5f0f\u53c2\u6570\u8986\u76d6\u7684\u65b9\u6cd5\r\ngin-access-limit - limit-\u901a\u8fc7\u6307\u5b9a\u5141\u8bb8\u7684\u6e90CIDR\u8868\u793a\u6cd5\u7684\u8bbf\u95ee\u63a7\u5236\u4e2d\u95f4\u4ef6\u3002\r\ngin-session - \u7528\u4e8eGin\u7684Session\u4e2d\u95f4\u4ef6\r\ngin-stats - \u8f7b\u91cf\u7ea7\u548c\u6709\u7528\u7684\u8bf7\u6c42\u6307\u6807\u4e2d\u95f4\u4ef6\r\ngin-statsd - \u5411statsd\u5b88\u62a4\u8fdb\u7a0b\u62a5\u544a\u7684Gin\u4e2d\u95f4\u4ef6\r\ngin-health-check - check-\u7528\u4e8eGin\u7684\u5065\u5eb7\u68c0\u67e5\u4e2d\u95f4\u4ef6\r\ngin-session-middleware - \u4e00\u4e2a\u6709\u6548\uff0c\u5b89\u5168\u4e14\u6613\u4e8e\u4f7f\u7528\u7684Go Session\u5e93\u3002\r\nginception - \u6f02\u4eae\u7684\u4f8b\u5916\u9875\u9762\r\ngin-inspector - \u7528\u4e8e\u8c03\u67e5http\u8bf7\u6c42\u7684Gin\u4e2d\u95f4\u4ef6\u3002\r\ngin-dump - Gin\u4e2d\u95f4\u4ef6/\u5904\u7406\u7a0b\u5e8f\uff0c\u7528\u4e8e\u8f6c\u50a8\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u6807\u5934/\u6b63\u6587\u3002\u5bf9\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u975e\r\n\u5e38\u6709\u5e2e\u52a9\u3002\r\ngo-gin-prometheus - Gin Prometheus metrics exporter\r\nginprom - Gin\u7684Prometheus\u6307\u6807\u5bfc\u51fa\u5668\r\ngin-go-metrics - Gin middleware to gather and store metrics using rcrowley/go-\r\nmetrics\r\nginrpc - Gin \u4e2d\u95f4\u4ef6/\u5904\u7406\u5668\u81ea\u52a8\u7ed1\u5b9a\u5de5\u5177\u3002\u901a\u8fc7\u50cfbeego\u8fd9\u6837\u7684\u6ce8\u91ca\u8def\u7ebf\u6765\u652f\u6301\u5bf9\u8c61\u6ce8\u518c\n"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>c});var i=r(6540);const t={},o=i.createContext(t);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);