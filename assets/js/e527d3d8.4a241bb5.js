"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),y=o,m=c["".concat(d,".").concat(y)]||c[y]||p[y]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},r="Creating simple client database",l={unversionedId:"tutorial-basics/create-simple-database",id:"tutorial-basics/create-simple-database",title:"Creating simple client database",description:"Define our first entity",source:"@site/docs/tutorial-basics/create-simple-database.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-simple-database",permalink:"/tutorial-basics/create-simple-database",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/tutorial-basics/intro"},next:{title:"Relationships between entities",permalink:"/tutorial-basics/relationships"}},d={},s=[{value:"Define our first entity",id:"define-our-first-entity",level:2},{value:"Creating a data store",id:"creating-a-data-store",level:2},{value:"Creating new entities",id:"creating-new-entities",level:2},{value:"Your data is observable",id:"your-data-is-observable",level:2},{value:"Updating entity data",id:"updating-entity-data",level:2},{value:"Deleting entities",id:"deleting-entities",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-simple-client-database"},"Creating simple client database"),(0,o.kt)("h2",{id:"define-our-first-entity"},"Define our first entity"),(0,o.kt)("p",null,"First thing we need to do is to define what type of data will your entity hold. You can think of entities like database tables."),(0,o.kt)("p",null,"Let's start with our Todo entity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { defineEntity } from "@clientdb/store";\n\ninterface Todo {\n  id: string;\n  title: string;\n  doneAt: Date;\n}\n\nconst todoEntity = defineEntity<Todo>({\n  name: "todo",\n  fields: ["id", "title", "doneAt"],\n});\n')),(0,o.kt)("p",null,"This is the minimal definition of an entity. There are way more powerful features we'll go trough later."),(0,o.kt)("p",null,"In the previous example we defined data interface of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," entity. These were the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the entity (which should usually be the same as the table's name), the ",(0,o.kt)("inlineCode",{parentName:"p"},"idField")," that is used to point to id of the entity, and what ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," are allowed (should list all fields of your data interface)."),(0,o.kt)("p",null,"Note: You can also set ",(0,o.kt)("inlineCode",{parentName:"p"},"idField")," when defining new entity. If you don't define it, it will be automatically set to ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,o.kt)("h2",{id:"creating-a-data-store"},"Creating a data store"),(0,o.kt)("p",null,"Now as we have our first entity, we can already create local database with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createClientDb } from "@clientdb/store";\n\nconst db = createClientDb([todoEntity]);\n')),(0,o.kt)("p",null,"To create db, we need to pass array of entities that will be avaliable in it."),(0,o.kt)("h2",{id:"creating-new-entities"},"Creating new entities"),(0,o.kt)("p",null,"Now we can add first todo to our database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.add(todoEntity, {\n  id: "todo-0",\n  title: "Buy milk",\n  doneAt: null,\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"db.add")," return our newly created todo. We can instantly read from it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'todo.title; // "Buy milk"\n')),(0,o.kt)("p",null,"We can now get our todo directly from database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'db.entity(todoEntity).count; // count of all todos - 1\n\nconst allTodos = db.entity(todoEntity).all;\nconst [firstTodo] = allTodos;\nfirstTodo.title; // "Buy milk"\n')),(0,o.kt)("p",null,"We can also query our database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const todoQuery = db.entity(todoEntity).query({\n  title: "Buy milk",\n});\n\ntodoQuery.count; // 1\ntodoQuery.first.title; // "Buy milk"\ntodoQuery.all; // [todoWeCreated]\n')),(0,o.kt)("h2",{id:"your-data-is-observable"},"Your data is observable"),(0,o.kt)("p",null,"Before we continue to other parts (eg. updating data), it'd be good to know that all of our data is observable with mobx."),(0,o.kt)("p",null,"This means that we can subscribe to any piece of data from the database and always have up to date results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { autorun } from "mobx";\n\nautorun(() => {\n  console.log(db.entity(todoEntity).count);\n});\n\ndb.add(todoEntity, {\n  id: "todo-1",\n  title: "Buy milk",\n  doneAt: null,\n});\n\ndb.add(todoEntity, {\n  id: "todo-2",\n  title: "Buy books",\n  doneAt: null,\n});\n\n// prints:\n// 0\n// 1\n// 2\n')),(0,o.kt)("h2",{id:"updating-entity-data"},"Updating entity data"),(0,o.kt)("p",null,"Every entity can be updated with ",(0,o.kt)("inlineCode",{parentName:"p"},".update")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.entity(todoEntity).findById("todo-1");\n\ntodo.doneAt; // null\n\nconst now = new Date();\n\ntodo.update({\n  doneAt: now,\n});\n\ntodo.doneAt; // now\n')),(0,o.kt)("h2",{id:"deleting-entities"},"Deleting entities"),(0,o.kt)("p",null,"Each entity can be removed with ",(0,o.kt)("inlineCode",{parentName:"p"},".remove")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.entity(todoEntity).findById("todo-1");\n\ntodo.remove();\n\ndb.entity(todoEntity).findById("todo-1"); // null\n')),(0,o.kt)("p",null,"Great! We now have our database with ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," entity. Let's move forward by creating our ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," entity and connecting it with ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," entity."))}p.isMDXComponent=!0}}]);