"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[8332],{7037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(4848),c=n(8453);const a={},i=void 0,o={id:"web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/webpack&vite",title:"webpack&vite",description:"\u2b50\u6784\u5efa\u901f\u5ea6\u2b50",source:"@site/docs/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/webpack&vite.md",sourceDirName:"web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316",slug:"/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/webpack&vite",permalink:"/qyan-map/docs/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/webpack&vite",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/webpack&vite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vue-cli",permalink:"/qyan-map/docs/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/vue-cli/"},next:{title:"\u6839\u636evue\u7ec4\u4ef6\u81ea\u52a8\u751f\u6210uml\u56fe",permalink:"/qyan-map/docs/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/\u6839\u636evue\u7ec4\u4ef6\u81ea\u52a8\u751f\u6210uml\u56fe"}},s={},p=[];function u(e){const t={p:"p",...(0,c.R)(),...e.components};return(0,r.jsx)(t.p,{children:"\u2b50\u6784\u5efa\u901f\u5ea6\u2b50\r\nWebpack: Webpack\u7684\u6784\u5efa\u901f\u5ea6\u76f8\u5bf9\u8f83\u6162\uff0c\u5c24\u5176\u5728\u5927\u578b\u9879\u76ee\u4e2d\uff0c\u56e0\u4e3a\u5b83\u9700\u8981\u5206\u6790\u6574\u4e2a\u4f9d\u8d56\u56fe\uff0c\u8fdb\u884c\u591a\u6b21\u6587\u4ef6\u626b\u63cf\u548c\u8f6c\u8bd1\u3002\r\nVite: Vite\u4ee5\u5f00\u53d1\u6a21\u5f0f\u4e0b\u7684\u6781\u901f\u6784\u5efa\u8457\u79f0\u3002\u5b83\u5229\u7528ES\u6a21\u5757\u7684\u7279\u6027\uff0c\u53ea\u6784\u5efa\u6b63\u5728\u7f16\u8f91\u7684\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u9879\u76ee\u3002\u8fd9\u4f7f\u5f97\u5b83\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u51e0\u4e4e\u662f\u5373\u65f6\u7684\u3002\r\n\u2b50\u5f00\u53d1\u6a21\u5f0f\u2b50\r\nWebpack: Webpack\u901a\u5e38\u4f7f\u7528\u70ed\u6a21\u5757\u66ff\u6362\uff08HMR\uff09\u6765\u5b9e\u73b0\u5feb\u901f\u5f00\u53d1\u6a21\u5f0f\uff0c\u4f46\u914d\u7f6e\u76f8\u5bf9\u590d\u6742\u3002\r\nVite: Vite\u7684\u5f00\u53d1\u6a21\u5f0f\u975e\u5e38\u8f7b\u91cf\u4e14\u5feb\u901f\uff0c\u652f\u6301HMR\uff0c\u4f46\u65e0\u9700\u989d\u5916\u914d\u7f6e\uff0c\u56e0\u4e3a\u5b83\u9ed8\u8ba4\u652f\u6301\u3002\r\n\u2b50\u914d\u7f6e\u590d\u6742\u5ea6\u2b50\r\nWebpack: Webpack\u7684\u914d\u7f6e\u76f8\u5bf9\u590d\u6742\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\u548c\u52a0\u8f7d\u5668\u65f6\u3002\r\nVite: Vite\u9f13\u52b1\u96f6\u914d\u7f6e\uff0c\u4f7f\u5f97\u9879\u76ee\u8d77\u6b65\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u540c\u65f6\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u4f7f\u5176\u9002\u7528\u4e8e\u590d\u6742\u9879\u76ee\u3002\r\n\u2b50\u63d2\u4ef6\u751f\u6001\u2b50\r\nWebpack: Webpack\u62e5\u6709\u5e9e\u5927\u7684\u63d2\u4ef6\u751f\u6001\u7cfb\u7edf\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u4e0d\u540c\u7684\u9700\u6c42\u3002\r\nVite: Vite\u4e5f\u6709\u76f8\u5f53\u6570\u91cf\u7684\u63d2\u4ef6\uff0c\u4f46\u76f8\u5bf9\u8f83\u5c0f\uff0c\u56e0\u4e3a\u5b83\u7684\u5f00\u53d1\u6a21\u5f0f\u548c\u6784\u5efa\u65b9\u5f0f\u51cf\u5c11\u4e86\u5bf9\u4e00\u4e9b\u4f20\u7edf\u63d2\u4ef6\u7684\u9700\u6c42\u3002\r\n\u2b50\u7f16\u8bd1\u65b9\u5f0f\u2b50\r\nWebpack: Webpack\u4f7f\u7528\u4e86\u591a\u79cd\u52a0\u8f7d\u5668\u548c\u63d2\u4ef6\u6765\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\uff0c\u5982JavaScript\u3001CSS\u3001\u56fe\u7247\u7b49\u3002\r\nVite: Vite\u5229\u7528ES\u6a21\u5757\u539f\u751f\u652f\u6301\uff0c\u4f7f\u7528\u539f\u751f\u6d4f\u89c8\u5668\u5bfc\u5165\u6765\u5904\u7406\u6a21\u5757\uff0c\u4e0d\u9700\u8981\u5927\u89c4\u6a21\u7684\u7f16\u8bd1\u548c\u6253\u5305\u3002\r\n\u2b50\u5e94\u7528\u573a\u666f\u2b50\r\nWebpack: \u9002\u7528\u4e8e\u590d\u6742\u7684\u5927\u578b\u9879\u76ee\uff0c\u7279\u522b\u662f\u9700\u8981\u5927\u91cf\u81ea\u5b9a\u4e49\u914d\u7f6e\u548c\u590d\u6742\u6784\u5efa\u7ba1\u9053\u7684\u9879\u76ee\u3002\r\nVite: \u66f4\u9002\u7528\u4e8e\u5c0f\u5230\u4e2d\u578b\u9879\u76ee\uff0c\u6216\u8005\u9700\u8981\u5feb\u901f\u5f00\u53d1\u539f\u578b\u548c\u5c0f\u578b\u5e94\u7528\u7684\u573a\u666f\u3002\r\n\u2b50\u6253\u5305\u539f\u7406\u2b50\r\nWebpack: Webpack\u7684\u6253\u5305\u539f\u7406\u662f\u5c06\u6240\u6709\u8d44\u6e90\u6253\u5305\u6210\u4e00\u4e2a\u6216\u591a\u4e2abundle\u6587\u4ef6\uff0c\u901a\u5e38\u662f\u4e00\u4e2aJavaScript\u6587\u4ef6\u3002\r\nVite: Vite\u7684\u6253\u5305\u539f\u7406\u662f\u4fdd\u6301\u5f00\u53d1\u65f6\u7684\u6a21\u5757\u5316\u7ed3\u6784\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u539f\u751f\u7684\u5bfc\u5165\u673a\u5236\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fdb\u884c\u4ee3\u7801\u5206\u5272\u548c\u4f18\u5316"})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const c={},a=r.createContext(c);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);