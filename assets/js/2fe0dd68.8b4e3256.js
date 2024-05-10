"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[7950],{3509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(4848),l=n(8453);const a={},d="Array \u6570\u7ec4",s={id:"web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Array",title:"Array \u6570\u7ec4",description:"api\u524d\u9762\u7684 * \u8868\u793a\u5e38\u7528",source:"@site/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Array.md",sourceDirName:"web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61",slug:"/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Array",permalink:"/qyan-map/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Array",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Array.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ramda",permalink:"/qyan-map/docs/web\u524d\u7aef/Javascript/js\u5e93/ramda"},next:{title:"Map",permalink:"/qyan-map/docs/web\u524d\u7aef/Javascript/\u57fa\u7840\u5bf9\u8c61/Map"}},t={},c=[{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"Array()",id:"array",level:3},{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:2},{value:"Array.from( x ) \u7528\u7c7b\u6570\u7ec4\u521b\u5efa\u65b0\u6570\u7ec4",id:"arrayfrom-x--\u7528\u7c7b\u6570\u7ec4\u521b\u5efa\u65b0\u6570\u7ec4",level:3},{value:"Array.isArray( x ) \u662f\u4e0d\u662f\u6570\u7ec4",id:"arrayisarray-x--\u662f\u4e0d\u662f\u6570\u7ec4",level:3},{value:"Array.of ( element0 [, elementN] )",id:"arrayof--element0--elementn-",level:3},{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"Array.prototype.length",id:"arrayprototypelength",level:3},{value:"\u6539\u53d8\u539f\u6570\u7ec4 CURD",id:"\u6539\u53d8\u539f\u6570\u7ec4-curd",level:2},{value:"splice( index, num, item...)",id:"splice-index-num-item",level:3},{value:"unshift( i, ...) \u5934\u52a0",id:"unshift-i--\u5934\u52a0",level:3},{value:"shift() \u5934\u5220",id:"shift-\u5934\u5220",level:3},{value:"push( i, ...) \u5c3e\u52a0",id:"push-i--\u5c3e\u52a0",level:3},{value:"pop  \u5c3e\u5220",id:"pop--\u5c3e\u5220",level:3},{value:"reverse \u98a0\u5012",id:"reverse-\u98a0\u5012",level:3},{value:"fill( value, start=0, end )",id:"fill-value-start0-end-",level:3},{value:"\u4e0d\u6539\u53d8\u539f\u6570\u7ec4 CURD",id:"\u4e0d\u6539\u53d8\u539f\u6570\u7ec4-curd",level:2},{value:"* slice( begin, end )",id:"-slice-begin-end-",level:3},{value:"* concat( any... )",id:"-concat-any-",level:3},{value:"* join( str )",id:"-join-str-",level:3},{value:"copyWithin(target[, start[, end]])",id:"copywithintarget-start-end",level:3},{value:"keys()",id:"keys",level:3},{value:"values()",id:"values",level:3},{value:"\u67e5\u627e",id:"\u67e5\u627e",level:2},{value:"* includes( value, fromIndex )",id:"-includes-value-fromindex-",level:3},{value:"* indexOf(key, \u67e5\u8be2\u59cb\u4f4d)",id:"-indexofkey-\u67e5\u8be2\u59cb\u4f4d",level:3},{value:"lastIndexOf(key)",id:"lastindexofkey",level:3},{value:"* find( el =&gt; el &gt; 10 )",id:"-find-el--el--10-",level:3},{value:"* findIndex(callback( element, index, array ) [, thisArg])",id:"-findindexcallback-element-index-array---thisarg",level:3},{value:"\u8fed\u4ee3\u65b9\u6cd5",id:"\u8fed\u4ee3\u65b9\u6cd5",level:2},{value:"forEach( fn(), thisArg ) \u5c3d\u91cf\u6539\u7528every\u53ef\u4ee5return",id:"foreach-fn-thisarg--\u5c3d\u91cf\u6539\u7528every\u53ef\u4ee5return",level:3},{value:"* sort( [ function ( firstEl, secondEl ) ] )",id:"-sort--function--firstel-secondel---",level:3},{value:"every( fn(), thisArg )",id:"every-fn-thisarg-",level:3},{value:"some( fn(i, idx, arr), thisArg )",id:"some-fni-idx-arr-thisarg-",level:3},{value:"reduce( fn(previousValue, currentValue, idx, array) [, initialValue] )",id:"reduce-fnpreviousvalue-currentvalue-idx-array--initialvalue-",level:3},{value:"reduceRight( callback(accumulator, currentValue[, index[, array]]) [, initialValue] )",id:"reduceright-callbackaccumulator-currentvalue-index-array--initialvalue-",level:3},{value:"\u8fed\u4ee3\u65b9\u6cd5 - \u8fd4\u56de\u65b0\u6570\u7ec4",id:"\u8fed\u4ee3\u65b9\u6cd5---\u8fd4\u56de\u65b0\u6570\u7ec4",level:2}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"array-\u6570\u7ec4",children:"Array \u6570\u7ec4"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["api\u524d\u9762\u7684 ",(0,i.jsx)("code",{children:"*"})," \u8868\u793a\u5e38\u7528"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",children:"MDN Array document"})}),"\n",(0,i.jsx)(r.h2,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,i.jsx)(r.h3,{id:"array",children:"Array()"}),"\n",(0,i.jsx)(r.h2,{id:"\u9759\u6001\u65b9\u6cd5",children:"\u9759\u6001\u65b9\u6cd5"}),"\n",(0,i.jsx)(r.h3,{id:"arrayfrom-x--\u7528\u7c7b\u6570\u7ec4\u521b\u5efa\u65b0\u6570\u7ec4",children:"Array.from( x ) \u7528\u7c7b\u6570\u7ec4\u521b\u5efa\u65b0\u6570\u7ec4"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u4ece \u6570\u7ec4\u7c7b\u5bf9\u8c61 \u6216 \u53ef\u8fed\u4ee3\u5bf9\u8c61 \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Array \u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"function fn1() {\r\n  console.log(Array.from(arguments))\r\n}\r\nfn1(1,2,3) // [ 1, 2, 3 ]\n"})}),"\n",(0,i.jsx)(r.h3,{id:"arrayisarray-x--\u662f\u4e0d\u662f\u6570\u7ec4",children:"Array.isArray( x ) \u662f\u4e0d\u662f\u6570\u7ec4"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Array.isArray([]) // true\n"})}),"\n",(0,i.jsx)(r.h3,{id:"arrayof--element0--elementn-",children:"Array.of ( element0 [, elementN] )"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Array \u5b9e\u4f8b\uff0c\u5177\u6709\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\uff0c\u800c\u4e0d\u7ba1\u53c2\u6570\u7684\u6570\u91cf\u6216\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"console.log(Array.of('foo', 2, 'bar', true));\r\n// Expected output: Array [\"foo\", 2, \"bar\", true]\r\n\r\nconsole.log(Array.of());\r\n// \u9884\u671f\u7ed3\u679c: Array []\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u5b9e\u4f8b\u5c5e\u6027",children:"\u5b9e\u4f8b\u5c5e\u6027"}),"\n",(0,i.jsx)(r.h3,{id:"arrayprototypelength",children:"Array.prototype.length"}),"\n",(0,i.jsx)(r.h2,{id:"\u6539\u53d8\u539f\u6570\u7ec4-curd",children:"\u6539\u53d8\u539f\u6570\u7ec4 CURD"}),"\n",(0,i.jsx)(r.h3,{id:"splice-index-num-item",children:"splice( index, num, item...)"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u5220\u9664\u3001\u66ff\u6362\u3001\u6dfb\u52a0 - \u4fee\u6539\u4e86\u539f\u6570\u7ec4, \u5e76\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u88ab\u4fee\u6539\u7684\u5185\u5bb9(index\u5f00\u59cb\u7684\u5185\u5bb9)\u3002\r\n\u4ece\u4e0b\u6807index\u5f00\u59cb\u5220\u9664num\u4e2a\u518d\u66ff\u6362\u6210item"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"unshift-i--\u5934\u52a0",children:"unshift( i, ...) \u5934\u52a0"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5f00\u5934\uff0c\u5e76\u8fd4\u56de\u8be5\u6570\u7ec4\u7684\u65b0\u957f\u5ea6"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"shift-\u5934\u5220",children:"shift() \u5934\u5220"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"push-i--\u5c3e\u52a0",children:"push( i, ...) \u5c3e\u52a0"}),"\n",(0,i.jsx)(r.h3,{id:"pop--\u5c3e\u5220",children:"pop  \u5c3e\u5220"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c\u3002\u66f4\u6539\u6570\u7ec4\u7684\u957f\u5ea6"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"reverse-\u98a0\u5012",children:"reverse \u98a0\u5012"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u98a0\u5012, \u5e76\u8fd4\u56de\u8be5\u6570\u7ec4\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"fill-value-start0-end-",children:"fill( value, start=0, end )"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u65b9\u6cd5\u7528\u4e00\u4e2a\u56fa\u5b9a\u503c\u586b\u5145\u4e00\u4e2a\u6570\u7ec4\u4e2d\u4ece\u8d77\u59cb\u7d22\u5f15\u5230\u7ec8\u6b62\u7d22\u5f15\u5185\u7684\u5168\u90e8\u5143\u7d20\u3002\u4e0d\u5305\u62ec\u7ec8\u6b62\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u4e0d\u6539\u53d8\u539f\u6570\u7ec4-curd",children:"\u4e0d\u6539\u53d8\u539f\u6570\u7ec4 CURD"}),"\n",(0,i.jsx)(r.h3,{id:"-slice-begin-end-",children:"* slice( begin, end )"}),"\n",(0,i.jsx)(r.p,{children:"\u5207\u7247"}),"\n",(0,i.jsx)(r.h3,{id:"-concat-any-",children:"* concat( any... )"}),"\n",(0,i.jsx)(r.p,{children:"\u62fc\u63a5\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4"}),"\n",(0,i.jsx)(r.h3,{id:"-join-str-",children:"* join( str )"}),"\n",(0,i.jsxs)(r.p,{children:["\u6309str\u62fc\u63a5\u6570\u7ec4\u6bcf\u4e00\u9879\u8f6c\u6210\u5b57\u7b26\u4e32, str\u9ed8\u8ba4\u4e3a\u82f1\u6587\u9017\u53f7 ",(0,i.jsx)("span",{style:{fontSize:"20px"},children:","})]}),"\n",(0,i.jsx)(r.h3,{id:"copywithintarget-start-end",children:"copyWithin(target[, start[, end]])"}),"\n",(0,i.jsx)(r.h3,{id:"keys",children:"keys()"}),"\n",(0,i.jsx)(r.h3,{id:"values",children:"values()"}),"\n",(0,i.jsx)(r.h2,{id:"\u67e5\u627e",children:"\u67e5\u627e"}),"\n",(0,i.jsx)(r.h3,{id:"-includes-value-fromindex-",children:"* includes( value, fromIndex )"}),"\n",(0,i.jsx)(r.h3,{id:"-indexofkey-\u67e5\u8be2\u59cb\u4f4d",children:"* indexOf(key, \u67e5\u8be2\u59cb\u4f4d)"}),"\n",(0,i.jsx)(r.h3,{id:"lastindexofkey",children:"lastIndexOf(key)"}),"\n",(0,i.jsx)(r.h3,{id:"-find-el--el--10-",children:"* find( el => el > 10 )"}),"\n",(0,i.jsx)(r.h3,{id:"-findindexcallback-element-index-array---thisarg",children:"* findIndex(callback( element, index, array ) [, thisArg])"}),"\n",(0,i.jsx)(r.p,{children:"at( index ) \u5b9e\u9a8c\u6027\u65b9\u6cd5"}),"\n",(0,i.jsx)(r.h2,{id:"\u8fed\u4ee3\u65b9\u6cd5",children:"\u8fed\u4ee3\u65b9\u6cd5"}),"\n",(0,i.jsx)(r.h3,{id:"foreach-fn-thisarg--\u5c3d\u91cf\u6539\u7528every\u53ef\u4ee5return",children:"forEach( fn(), thisArg ) \u5c3d\u91cf\u6539\u7528every\u53ef\u4ee5return"}),"\n",(0,i.jsx)(r.h3,{id:"-sort--function--firstel-secondel---",children:"* sort( [ function ( firstEl, secondEl ) ] )"}),"\n",(0,i.jsx)(r.h3,{id:"every-fn-thisarg-",children:"every( fn(), thisArg )"}),"\n",(0,i.jsx)(r.h3,{id:"some-fni-idx-arr-thisarg-",children:"some( fn(i, idx, arr), thisArg )"}),"\n",(0,i.jsx)(r.h3,{id:"reduce-fnpreviousvalue-currentvalue-idx-array--initialvalue-",children:"reduce( fn(previousValue, currentValue, idx, array) [, initialValue] )"}),"\n",(0,i.jsx)(r.h3,{id:"reduceright-callbackaccumulator-currentvalue-index-array--initialvalue-",children:"reduceRight( callback(accumulator, currentValue[, index[, array]]) [, initialValue] )"}),"\n",(0,i.jsx)(r.h2,{id:"\u8fed\u4ee3\u65b9\u6cd5---\u8fd4\u56de\u65b0\u6570\u7ec4",children:"\u8fed\u4ee3\u65b9\u6cd5 - \u8fd4\u56de\u65b0\u6570\u7ec4"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"map( fn(item, idx, arr), thisArg )"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"filter( fn(), thisArg )\r\nflat( depth = 1 )\r\nflatMap()\r\nentries()"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>s});var i=n(6540);const l={},a=i.createContext(l);function d(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);