"use strict";(self.webpackChunkapi_doc_docusaurus=self.webpackChunkapi_doc_docusaurus||[]).push([[1395],{7269:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(4848),s=r(8453);const l={},i=void 0,o={id:"web\u524d\u7aef/VUE3/\u5b98\u7f51\u6458\u5f55",title:"\u5b98\u7f51\u6458\u5f55",description:"\u6a21\u677f\u8bed\u6cd5",source:"@site/docs/web\u524d\u7aef/VUE3/\u5b98\u7f51\u6458\u5f55.md",sourceDirName:"web\u524d\u7aef/VUE3",slug:"/web\u524d\u7aef/VUE3/\u5b98\u7f51\u6458\u5f55",permalink:"/qyan-map/docs/web\u524d\u7aef/VUE3/\u5b98\u7f51\u6458\u5f55",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u524d\u7aef/VUE3/\u5b98\u7f51\u6458\u5f55.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"setup",permalink:"/qyan-map/docs/web\u524d\u7aef/VUE3/setup"},next:{title:"1",permalink:"/qyan-map/docs/web\u524d\u7aef/\u524d\u7aef\u5de5\u7a0b\u5316/QYan-\u7ec4\u4ef6\u56fe\u751f\u6210\u5de5\u5177\u6784\u601d/1"}},c={},d=[{value:"\u6a21\u677f\u8bed\u6cd5",id:"\u6a21\u677f\u8bed\u6cd5",level:3},{value:"\u54cd\u5e94\u5f0f",id:"\u54cd\u5e94\u5f0f",level:3},{value:"\u8ba1\u7b97\u5c5e\u6027",id:"\u8ba1\u7b97\u5c5e\u6027",level:3},{value:"\u53ef\u5199\u8ba1\u7b97\u5c5e\u6027",id:"\u53ef\u5199\u8ba1\u7b97\u5c5e\u6027",level:3},{value:"Class \u4e0e Style \u7ed1\u5b9a",id:"class-\u4e0e-style-\u7ed1\u5b9a",level:3},{value:"\u5217\u8868\u6e32\u67d3",id:"\u5217\u8868\u6e32\u67d3",level:3},{value:"\u4e8b\u4ef6\u5904\u7406",id:"\u4e8b\u4ef6\u5904\u7406",level:3},{value:"\u8868\u5355\u8f93\u5165\u7ed1\u5b9a",id:"\u8868\u5355\u8f93\u5165\u7ed1\u5b9a",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"\u4fa6\u542c\u5668!!",id:"\u4fa6\u542c\u5668",level:3},{value:"\u6a21\u677f\u5f15\u7528",id:"\u6a21\u677f\u5f15\u7528",level:3},{value:"\u7ec4\u4ef6\u57fa\u7840",id:"\u7ec4\u4ef6\u57fa\u7840",level:3},{value:"\u63d2\u69fd",id:"\u63d2\u69fd",level:3},{value:"\u52a8\u6001\u7ec4\u4ef6",id:"\u52a8\u6001\u7ec4\u4ef6",level:3},{value:"\u7ec4\u4ef6\u4e8b\u4ef6",id:"\u7ec4\u4ef6\u4e8b\u4ef6",level:3},{value:"\u7ec4\u4ef6 v-model",id:"\u7ec4\u4ef6-v-model",level:3},{value:"nextTick() \u5168\u5c40 API",id:"nexttick-\u5168\u5c40-api",level:3}];function a(e){const n={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u6a21\u677f\u8bed\u6cd5",children:"\u6a21\u677f\u8bed\u6cd5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"v-bind\u7ed1\u5b9a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  <div v-bind:id="dynamicId"></div>\r\n\r\n  \x3c!-- same as :id="id" --\x3e\r\n  <div :id></div>\r\n\r\n  <div :id="`list-${id}`"></div>\r\n\r\n  <a v-bind:[attributeName]="url"> ... </a>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"v-on\u4e8b\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  <a @[eventName]="doSomething">\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u54cd\u5e94\u5f0f",children:"\u54cd\u5e94\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  ref()             \u5176\u5b9e\u5c31\u662f\u5305\u88c5\u6210\u4e00\u5c42 { value: \u521b\u5efa\u7684\u53d8\u91cf } \u5bf9\u8c61\u7684\u7ed3\u6784, \u4f46\u662f\u5177\u6709\u6df1\u5c42\u54cd\u5e94\u6027, \u6240\u6709\u5b57\u6bb5\u90fd\u662f\u54cd\u5e94\u5f0f\u7684\r\n  shallowRef()      shallow ref \u6765\u653e\u5f03\u6df1\u5c42\u54cd\u5e94\u6027\r\n  reactive()        \u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u4ee3\u7406, \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u539f\u59cb\u5bf9\u8c61\u7684 Proxy\uff0c\u5b83\u548c\u539f\u59cb\u5bf9\u8c61\u662f\u4e0d\u76f8\u7b49\u7684\r\n  shallowReactive() API \u53ef\u4ee5\u9009\u62e9\u9000\u51fa\u6df1\u5c42\u54cd\u5e94\u6027\u3002\r\n\r\n    reactive() \u7684\u5c40\u9650\u6027: \u6709\u9650\u7684\u503c\u7c7b\u578b, \u4e0d\u80fd\u66ff\u6362\u6574\u4e2a\u5bf9\u8c61, \u5bf9\u89e3\u6784\u64cd\u4f5c\u4e0d\u53cb\u597d\r\n    ref \u89e3\u5305, ref\u5bf9\u8c61\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\u7684\u5b9e\u9645\u60c5\u51b5\r\n\r\n\u6ce8: ref\u5bf9\u8c61\u7684\u5f15\u7528\u95ee\u9898\u5f52\u6839\u7ed3\u5e95\u5c31\u662fjs\u5f15\u7528\u7c7b\u578b\u7684\u5730\u5740\u95ee\u9898\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8ba1\u7b97\u5c5e\u6027",children:"\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import { computed } from 'vue'\r\n\r\nconst author = reactive({\r\n  name: 'John Doe',\r\n  books: [\r\n    'Vue 2 - Advanced Guide',\r\n    'Vue 3 - Basic Guide',\r\n    'Vue 4 - The Mystery'\r\n  ]\r\n})\r\n\r\n// \u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027 ref\r\nconst publishedBooksMessage = computed(() => {\r\n  return author.books.length > 0 ? 'Yes' : 'No'\r\n})\r\n\r\nVue \u7684\u8ba1\u7b97\u5c5e\u6027\u4f1a\u81ea\u52a8\u8ffd\u8e2a\u54cd\u5e94\u5f0f\u4f9d\u8d56\u3002\u5b83\u4f1a\u68c0\u6d4b\u5230 publishedBooksMessage \u4f9d\u8d56\u4e8e author.books\uff0c\r\n\u6240\u4ee5\u5f53 author.books \u6539\u53d8\u65f6\uff0c\u4efb\u4f55\u4f9d\u8d56\u4e8e publishedBooksMessage \u7684\u7ed1\u5b9a\u90fd\u4f1a\u540c\u65f6\u66f4\u65b0\u3002\r\n\r\n\u8ba1\u7b97\u5c5e\u6027\u503c\u4f1a\u57fa\u4e8e\u5176\u54cd\u5e94\u5f0f\u4f9d\u8d56\u88ab\u7f13\u5b58\u3002\u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027\u4ec5\u4f1a\u5728\u5176\u54cd\u5e94\u5f0f\u4f9d\u8d56\u66f4\u65b0\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97\u3002\r\n\u8fd9\u610f\u5473\u7740\u53ea\u8981 author.books \u4e0d\u6539\u53d8\uff0c\u65e0\u8bba\u591a\u5c11\u6b21\u8bbf\u95ee publishedBooksMessage \u90fd\u4f1a\u7acb\u5373\u8fd4\u56de\u5148\u524d\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u800c\u4e0d\u7528\u91cd\u590d\u6267\u884c getter \u51fd\u6570\u3002\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u53ef\u5199\u8ba1\u7b97\u5c5e\u6027",children:"\u53ef\u5199\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"const fullName = computed({\r\n  // getter\r\n  get() {\r\n    return firstName.value + ' ' + lastName.value\r\n  },\r\n  // setter\r\n  set(newValue) {\r\n    // \u6ce8\u610f\uff1a\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u7684\u662f\u89e3\u6784\u8d4b\u503c\u8bed\u6cd5\r\n    [firstName.value, lastName.value] = newValue.split(' ')\r\n  }\r\n})\r\n\r\n\u4e0d\u8981\u6539\u53d8\u5176\u4ed6\u72b6\u6001\u3001\u5728 getter \u4e2d\u505a\u5f02\u6b65\u8bf7\u6c42\u6216\u8005\u66f4\u6539 DOM\uff01\n"})}),"\n",(0,t.jsx)(n.h3,{id:"class-\u4e0e-style-\u7ed1\u5b9a",children:"Class \u4e0e Style \u7ed1\u5b9a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\x3c!-- \u5b50\u7ec4\u4ef6\u6a21\u677f --\x3e\r\n<p class="foo bar">Hi!</p>\r\n\x3c!-- \u5728\u4f7f\u7528\u7ec4\u4ef6\u65f6 --\x3e\r\n<MyComponent class="baz boo" />   ==>   <p class="foo bar baz boo">Hi!</p>\r\n\r\n\x3c!-- MyComponent \u6a21\u677f\u4f7f\u7528 $attrs \u65f6 --\x3e\r\n<p :class="$attrs.class">Hi!</p>   ==>  \u7b49\u540c\u4e8e\u4e0a\u9762\u7684\u6548\u679c\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5217\u8868\u6e32\u67d3",children:"\u5217\u8868\u6e32\u67d3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<li v-for="value in myObject">\r\n<span v-for="n in 10" :key="n">{{ n }}</span>      \u57fa\u4e8e 1...n \u7684\u53d6\u503c\u8303\u56f4\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8b\u4ef6\u5904\u7406",children:"\u4e8b\u4ef6\u5904\u7406"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'v-on \u6307\u4ee4 (\u7b80\u5199\u4e3a @) \u6765\u76d1\u542c DOM \u4e8b\u4ef6\uff0c\u7528\u6cd5\uff1av-on:click="handler" \u6216 @click="handler"\u3002\r\n\r\n\x3c!-- \u4f7f\u7528\u7279\u6b8a\u7684 $event \u53d8\u91cf --\x3e\r\n<button @click="warn(\'Form cannot be submitted yet.\', $event)">\r\n  Submit\r\n</button>\r\n\r\n\x3c!-- \u4f7f\u7528\u5185\u8054\u7bad\u5934\u51fd\u6570 --\x3e\r\n<button @click="(event) => warn(\'Form cannot be submitted yet.\', event)">\r\n  Submit\r\n</button>\r\n\r\n\r\n.stop           \u4e8b\u4ef6\u5c06\u505c\u6b62\u4f20\u9012\r\n.prevent        \u63d0\u4ea4\u4e8b\u4ef6\u5c06\u4e0d\u518d\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\r\n.self           \u4ec5\u5f53 event.target \u662f\u5143\u7d20\u672c\u8eab\u65f6\u624d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u5904\u7406\u5668\r\n.capture\r\n.once\r\n.passive\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u8868\u5355\u8f93\u5165\u7ed1\u5b9a",children:"\u8868\u5355\u8f93\u5165\u7ed1\u5b9a"}),"\n",(0,t.jsx)(n.h3,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,t.jsx)(n.h3,{id:"\u4fa6\u542c\u5668",children:"\u4fa6\u542c\u5668!!"}),"\n",(0,t.jsx)(n.p,{children:"// \u53ef\u4ee5\u76f4\u63a5\u4fa6\u542c\u4e00\u4e2a ref"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"watch(question, async (newQuestion, oldQuestion) => {\r\n  if (newQuestion.includes('?')) {\r\n    loading.value = true\r\n    answer.value = 'Thinking...'\r\n    try {\r\n      const res = await fetch('https://yesno.wtf/api')\r\n      answer.value = (await res.json()).answer\r\n    } catch (error) {\r\n      answer.value = 'Error! Could not reach the API. ' + error\r\n    } finally {\r\n      loading.value = false\r\n    }\r\n  }\r\n})\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"const x = ref(0)\r\nconst y = ref(0)\r\n\r\n// \u5355\u4e2a ref\r\nwatch(x, (newX) => {\r\n  console.log(`x is ${newX}`)\r\n})\r\n\r\n// getter \u51fd\u6570\r\nwatch(\r\n  () => x.value + y.value,\r\n  (sum) => {\r\n    console.log(`sum of x + y is: ${sum}`)\r\n  }\r\n)\r\n\r\n// \u591a\u4e2a\u6765\u6e90\u7ec4\u6210\u7684\u6570\u7ec4\r\nwatch([x, () => y.value], ([newX, newY]) => {\r\n  console.log(`x is ${newX} and y is ${newY}`)\r\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u80fd\u76f4\u63a5\u4fa6\u542c\u54cd\u5e94\u5f0f\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\r\nwatchEffect()"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u677f\u5f15\u7528",children:"\u6a21\u677f\u5f15\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<input ref="input">\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<template>\r\n  <input ref=\"input\" />\r\n</template>\r\n<script setup>\r\nimport { ref, onMounted } from 'vue'\r\n\r\n// \u58f0\u660e\u4e00\u4e2a ref \u6765\u5b58\u653e\u8be5\u5143\u7d20\u7684\u5f15\u7528\r\n// \u5fc5\u987b\u548c\u6a21\u677f\u91cc\u7684 ref \u540c\u540d\r\nconst input = ref(null)\r\n\r\nonMounted(() => {\r\n  input.value.focus()\r\n})\r\n<\/script>\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"\u7ec4\u4ef6\u57fa\u7840",children:"\u7ec4\u4ef6\u57fa\u7840"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"defineProps(['title'])\r\ndefineProps({\r\n  propA: Number,\r\n  propB: [String, Number],\r\n  propC: { type: Number, required: true, default: 100 },\r\n  // \u5bf9\u8c61\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\r\n  propE: {\r\n    type: Object,\r\n    // \u5bf9\u8c61\u6216\u6570\u7ec4\u7684\u9ed8\u8ba4\u503c // \u5fc5\u987b\u4ece\u4e00\u4e2a\u5de5\u5382\u51fd\u6570\u8fd4\u56de\u3002 // \u8be5\u51fd\u6570\u63a5\u6536\u7ec4\u4ef6\u6240\u63a5\u6536\u5230\u7684\u539f\u59cb prop \u4f5c\u4e3a\u53c2\u6570\u3002\r\n    default(rawProps) {\r\n      return { message: 'hello' }\r\n    }\r\n  },\r\n  // \u81ea\u5b9a\u4e49\u7c7b\u578b\u6821\u9a8c\u51fd\u6570\r\n  // \u5728 3.4+ \u4e2d\u5b8c\u6574\u7684 props \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\r\n  propF: {\r\n    validator(value, props) {\r\n      // The value must match one of these strings\r\n      return ['success', 'warning', 'danger'].includes(value)\r\n    }\r\n  },\r\n  // \u51fd\u6570\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\r\n  propG: {\r\n    type: Function,\r\n    // \u4e0d\u50cf\u5bf9\u8c61\u6216\u6570\u7ec4\u7684\u9ed8\u8ba4\uff0c\u8fd9\u4e0d\u662f\u4e00\u4e2a // \u5de5\u5382\u51fd\u6570\u3002\u8fd9\u4f1a\u662f\u4e00\u4e2a\u7528\u6765\u4f5c\u4e3a\u9ed8\u8ba4\u503c\u7684\u51fd\u6570\r\n    default() {\r\n      return 'Default function'\r\n    }\r\n  }\r\n})\r\n\r\n<script setup>\r\nconst emit = defineEmits(['enlarge-text'])\r\nemit('enlarge-text')\r\n<\/script>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u63d2\u69fd",children:"\u63d2\u69fd"}),"\n",(0,t.jsx)(n.h3,{id:"\u52a8\u6001\u7ec4\u4ef6",children:"\u52a8\u6001\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"!!!\u5f53\u5bf9\u8c61\u6216\u6570\u7ec4\u4f5c\u4e3a props \u88ab\u4f20\u5165\u65f6\uff0c\u867d\u7136\u5b50\u7ec4\u4ef6\u65e0\u6cd5\u66f4\u6539 props \u7ed1\u5b9a\uff0c\u4f46\u4ecd\u7136\u53ef\u4ee5\u66f4\u6539\u5bf9\u8c61\u6216\u6570\u7ec4\u5185\u90e8\u7684\u503c\u3002\u8fd9\u662f\u56e0\u4e3a JavaScript \u7684\u5bf9\u8c61\u548c\u6570\u7ec4\u662f\u6309\u5f15\u7528\u4f20\u9012\uff0c\u800c\u5bf9 Vue \u6765\u8bf4\uff0c\u7981\u6b62\u8fd9\u6837\u7684\u6539\u52a8\uff0c\u867d\u7136\u53ef\u80fd\u751f\u6548\uff0c\u4f46\u6709\u5f88\u5927\u7684\u6027\u80fd\u635f\u8017\uff0c\u6bd4\u8f83\u5f97\u4e0d\u507f\u5931\u3002\r\n\r\n\u8fd9\u79cd\u66f4\u6539\u7684\u4e3b\u8981\u7f3a\u9677\u662f\u5b83\u5141\u8bb8\u4e86\u5b50\u7ec4\u4ef6\u4ee5\u67d0\u79cd\u4e0d\u660e\u663e\u7684\u65b9\u5f0f\u5f71\u54cd\u7236\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u53ef\u80fd\u4f1a\u4f7f\u6570\u636e\u6d41\u5728\u5c06\u6765\u53d8\u5f97\u66f4\u96be\u4ee5\u7406\u89e3\u3002\u5728\u6700\u4f73\u5b9e\u8df5\u4e2d\uff0c\u4f60\u5e94\u8be5\u5c3d\u53ef\u80fd\u907f\u514d\u8fd9\u6837\u7684\u66f4\u6539\uff0c\u9664\u975e\u7236\u5b50\u7ec4\u4ef6\u5728\u8bbe\u8ba1\u4e0a\u672c\u6765\u5c31\u9700\u8981\u7d27\u5bc6\u8026\u5408\u3002\u5728\u5927\u591a\u6570\u573a\u666f\u4e0b\uff0c\u5b50\u7ec4\u4ef6\u5e94\u8be5\u629b\u51fa\u4e00\u4e2a\u4e8b\u4ef6\u6765\u901a\u77e5\u7236\u7ec4\u4ef6\u505a\u51fa\u6539\u53d8\u3002\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7ec4\u4ef6\u4e8b\u4ef6",children:"\u7ec4\u4ef6\u4e8b\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<button @click="$emit(\'someEvent\', 1111, {canshu2: 123})">click me</button>\r\n<MyComponent @some-event="callback" />\r\n<MyComponent @some-event.once="callback" />\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u7ec4\u4ef6-v-model",children:"\u7ec4\u4ef6 v-model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Vue 3.4 \u5f00\u59cb\uff0c\u63a8\u8350\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u4f7f\u7528 defineModel() \u5b8f"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<script setup>\r\nconst props = defineProps(['modelValue'])\r\nconst emit = defineEmits(['update:modelValue'])\r\n<\/script>\r\n\r\n<template>\r\n  <input\r\n    :value=\"props.modelValue\"\r\n    @input=\"emit('update:modelValue', $event.target.value)\"\r\n  />\r\n</template>\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"nexttick-\u5168\u5c40-api",children:"nextTick() \u5168\u5c40 API"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);