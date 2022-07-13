"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Creating default values for entities",l={unversionedId:"tutorial-basics/default-values",id:"tutorial-basics/default-values",title:"Creating default values for entities",description:"So far we had to manually set all the values of our entities when inserting them, eg:",source:"@site/docs/tutorial-basics/default-values.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/default-values",permalink:"/tutorial-basics/default-values",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Relationships between entities",permalink:"/tutorial-basics/relationships"},next:{title:"Enchance entity view",permalink:"/tutorial-basics/custom-view-values"}},s={},d=[],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-default-values-for-entities"},"Creating default values for entities"),(0,r.kt)("p",null,"So far we had to manually set all the values of our entities when inserting them, eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.add(todoEntity, {\n  id: "todo-1",\n  title: "Buy milk",\n  doneAt: null,\n  listId: list.id,\n});\n')),(0,r.kt)("p",null,"In this case, both ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"doneAt")," could have some default values. ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," would be some auto-generated string, and ",(0,r.kt)("inlineCode",{parentName:"p"},"doneAt")," could be ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," by default."),(0,r.kt)("p",null,"Let's modify our todo entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Some simple function to generate random id. Could be uuid or anything similar as well\n */\nfunction generateId() {\n  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";\n  let id = "";\n  for (let i = 0; i < 10; i++) {\n    id += alphabet[Math.floor(Math.random() * alphabet.length)];\n  }\n  return id;\n}\n\nconst todoEntity = defineEntity<Todo>({\n  name: "todo",\n  fields: ["id", "title", "doneAt", "listId"],\n  // highlight-start\n  getDefaultValues() {\n    return {\n      id: generateId(),\n      doneAt: null,\n    };\n  },\n  // highlight-end\n}).addView((todo, { db }) => {\n  // ...\n});\n')),(0,r.kt)("p",null,"Now we can also include default id to ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," entity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const listEntity = defineEntity<List>({\n  name: "list",\n  fields: ["id", "name"],\n  // highlight-start\n  getDefaultValues() {\n    return {\n      id: generateId(),\n    };\n  },\n  // highlight-end\n}).addView((list, { db }) => {\n  // ...\n});\n')),(0,r.kt)("p",null,"With that, we can create new entities without manually setting ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for both list and todo or ",(0,r.kt)("inlineCode",{parentName:"p"},"doneAt")," for todos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const list = db.add(listEntity, {\n  name: "Groceries",\n});\n\nlist.id; // "89qnxvnt57"\n\nconst todo = db.add(todoEntity, {\n  title: "Buy milk",\n  listId: list.id,\n});\n\ntodo.id; // "jemsfhysjk"\ntodo.list.name; // "Groceries"\n')))}c.isMDXComponent=!0}}]);