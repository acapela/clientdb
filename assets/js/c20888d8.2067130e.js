"use strict";(self.webpackChunk_clientdb_docs=self.webpackChunk_clientdb_docs||[]).push([[766],{5318:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=i.createContext({}),s=function(t){var e=i.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=s(t.components);return i.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(y,r(r({ref:e},p),{},{components:n})):i.createElement(y,r({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2562:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(5773),o=(n(7378),n(5318));const a={sidebar_position:2},r="Relationships between entities",l={unversionedId:"tutorial-basics/relationships",id:"tutorial-basics/relationships",title:"Relationships between entities",description:"In the previous section, we created todo entity.",source:"@site/docs/tutorial-basics/relationships.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/relationships",permalink:"/tutorial-basics/relationships",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating a simple client database",permalink:"/tutorial-basics/create-simple-database"},next:{title:"Creating default values for entities",permalink:"/tutorial-basics/default-values"}},d={},s=[{value:"Add <code>todo.list</code> relation",id:"add-todolist-relation",level:2},{value:"Adding <code>list.todos</code> property",id:"adding-listtodos-property",level:2},{value:"Recap",id:"recap",level:2}],p={toc:s};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relationships-between-entities"},"Relationships between entities"),(0,o.kt)("p",null,"In the previous section, we created ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," entity."),(0,o.kt)("p",null,"In this section we'll create ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," entity and create relationships between ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"todo.list")," will create a reference to the corresponding list entity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"list.todos")," will return an array of todos belonging to the given list")),(0,o.kt)("p",null,"Ok, let's start by defining ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," entity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'interface List {\n  id: string;\n  name: string;\n}\n\nconst listEntity = defineEntity<List>({\n  name: "list",\n  fields: ["id", "name"],\n});\n')),(0,o.kt)("p",null,"Let's add a ",(0,o.kt)("inlineCode",{parentName:"p"},"listId")," field to the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," entity we created before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { defineEntity } from "@clientdb/core";\n\ninterface Todo {\n  id: string;\n  title: string;\n  doneAt: Date;\n  // highlight-next-line\n  listId: string;\n}\n\nconst todoEntity = defineEntity<Todo>({\n  name: "todo",\n  // highlight-next-line\n  fields: ["id", "title", "doneAt", "listId"],\n});\n')),(0,o.kt)("p",null,"Great! Our entities now have all the data we need, but we still don't have relationships between them."),(0,o.kt)("p",null,"To do that, we'll create the so-called ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," on both our entities' definitions."),(0,o.kt)("p",null,"The view allows us to append custom-derived data to our entities."),(0,o.kt)("h2",{id:"add-todolist-relation"},"Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"todo.list")," relation"),(0,o.kt)("p",null,"We'll call ",(0,o.kt)("inlineCode",{parentName:"p"},".addView")," on our ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," entity definition. This will add custom data to every ",(0,o.kt)("inlineCode",{parentName:"p"},"todo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { defineEntity } from "@clientdb/core";\n\nconst todoEntity = defineEntity<Todo>({\n  // ...\n  // highlight-start\n}).addView((todo, { db }) => {\n  return {\n    get list() {\n      return db.entity(listEntity).findById(todo.listId);\n    },\n  };\n});\n// highlight-end\n')),(0,o.kt)("p",null,"The function we passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"addView")," is called with 2 arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"data of the entity (",(0,o.kt)("inlineCode",{parentName:"li"},"todo"),")"),(0,o.kt)("li",{parentName:"ul"},"helper object which includes the ",(0,o.kt)("inlineCode",{parentName:"li"},"db")," property. ",(0,o.kt)("inlineCode",{parentName:"li"},"db")," is the database given todo belongs to. We can use it to find other entities (todos or lists) in the same database.")),(0,o.kt)("p",null,"Using those, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," property getter that will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," with an id equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"todo.listId"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Data passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"addView")," (",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," variable in our case) is observable. This means that if you change the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo.listId")," property, the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," property will be updated.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"View properties should be getters. If we'd define view as:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"return {\n  // highlight-next-line\n  list: db.entity(listEntity).findById(todo.listId),\n};\n")),(0,o.kt)("p",{parentName:"admonition"},"instead of"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"return {\n  // highlight-next-line\n  get list() {\n    return db.entity(listEntity).findById(todo.listId);\n  },\n};\n")),(0,o.kt)("p",{parentName:"admonition"},"List property would not be observable as relation will be resolved at the moment when we create entity instead of when we read ",(0,o.kt)("inlineCode",{parentName:"p"},"todo.list")," property. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://mobx.js.org/understanding-reactivity.html"},"in mobx guide"),".")),(0,o.kt)("h2",{id:"adding-listtodos-property"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h2"},"list.todos")," property"),(0,o.kt)("p",null,"Ok, now we can also add a relation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," entity. It'll return an array of todos that are part of this list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const listEntity = defineEntity<List>({\n  // ...\n  // highlight-start\n}).addView((list, { db }) => {\n  return {\n    get todos() {\n      return db.entity(todoEntity).query({\n        listId: list.id,\n      }).all;\n    },\n  };\n});\n// highlight-end\n")),(0,o.kt)("p",null,"Our relations are ready."),(0,o.kt)("p",null,"The last thing we need to do is update our database to be aware of our new ",(0,o.kt)("inlineCode",{parentName:"p"},"listEntity")," entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createClientDb } from "@clientdb/core";\n\n// highlight-next-line\nconst db = createClientDb([todoEntity, listEntity]);\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We're ready to go."),(0,o.kt)("p",null,"Now let's populate our database with some todos and lists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const list = db.add(listEntity, {\n  id: "list-1",\n  name: "Groceries",\n});\n\nconst todo1 = db.add(todoEntity, {\n  id: "todo-1",\n  title: "Buy milk",\n  doneAt: null,\n  listId: list.id,\n});\n\nconst todo2 = db.add(todoEntity, {\n  id: "todo-2",\n  title: "Buy books",\n  doneAt: null,\n  listId: list.id,\n});\n')),(0,o.kt)("p",null,"Let's read data using newly created relations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'list.todos; // [todo1, todo2]\ntodo1.list.name; // "Groceries"\ntodo1.list === todo2.list; // true\n')),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("p",null,"Full code so far would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createClientDb } from "@clientdb/core";\nimport { defineEntity } from "@clientdb/core";\n\ninterface Todo {\n  id: string;\n  title: string;\n  doneAt: Date;\n  listId: string;\n}\n\nconst todoEntity = defineEntity<Todo>({\n  name: "todo",\n  fields: ["id", "title", "doneAt", "listId"],\n}).addView((todo, { db }) => {\n  return {\n    get list() {\n      return db.entity(listEntity).findById(todo.listId);\n    },\n  };\n});\n\ninterface List {\n  id: string;\n  name: string;\n}\n\nconst listEntity = defineEntity<List>({\n  name: "list",\n  fields: ["id", "name"],\n}).addView((list, { db }) => {\n  return {\n    get todos() {\n      return db.entity(todoEntity).query({\n        listId: list.id,\n      }).all;\n    },\n  };\n});\n\nconst db = createClientDb([todoEntity, listEntity]);\n')))}c.isMDXComponent=!0}}]);