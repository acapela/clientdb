"use strict";(self.webpackChunk_clientdb_docs=self.webpackChunk_clientdb_docs||[]).push([[815],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(5773),i=(n(7378),n(5318));const o={sidebar_position:2},r="Creating a simple client database",l={unversionedId:"tutorial-basics/create-simple-database",id:"tutorial-basics/create-simple-database",title:"Creating a simple client database",description:"The best way to quickly learn how to use clientdb would be to write some code with it.",source:"@site/docs/tutorial-basics/create-simple-database.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-simple-database",permalink:"/tutorial-basics/create-simple-database",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/category/tutorial"},next:{title:"Relationships between entities",permalink:"/tutorial-basics/relationships"}},d={},s=[{value:"Define our first entity",id:"define-our-first-entity",level:2},{value:"Creating a data store",id:"creating-a-data-store",level:2},{value:"Inserting data",id:"inserting-data",level:2},{value:"Get all items from db",id:"get-all-items-from-db",level:2},{value:"Querying the database",id:"querying-the-database",level:2},{value:"Updating entity data",id:"updating-entity-data",level:2},{value:"Deleting entities",id:"deleting-entities",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-simple-client-database"},"Creating a simple client database"),(0,i.kt)("p",null,"The best way to quickly learn how to use clientdb would be to write some code with it."),(0,i.kt)("p",null,"We'll create a simple 'Todos' client database with ",(0,i.kt)("inlineCode",{parentName:"p"},"todo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," entities."),(0,i.kt)("p",null,"We'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"defining entities (aka tables) of our client database"),(0,i.kt)("li",{parentName:"ul"},"creating a database given our defined entities"),(0,i.kt)("li",{parentName:"ul"},"inserting into and reading from the database"),(0,i.kt)("li",{parentName:"ul"},"defining relationships between entities"),(0,i.kt)("li",{parentName:"ul"},"defining default values for entities")),(0,i.kt)("h2",{id:"define-our-first-entity"},"Define our first entity"),(0,i.kt)("p",null,"The first thing we need to do is to define what type of data will your entity hold. You can think of entities like database tables."),(0,i.kt)("p",null,"Let's start with our Todo entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { defineEntity } from "@clientdb/core";\n\ninterface Todo {\n  id: string;\n  title: string;\n  doneAt: Date;\n}\n\nconst todoEntity = defineEntity<Todo>({\n  name: "todo",\n  fields: ["id", "title", "doneAt"],\n});\n')),(0,i.kt)("p",null,"This is the minimal definition of an entity. There are way more powerful features we'll go through later."),(0,i.kt)("p",null,"We created a new entity definition ",(0,i.kt)("inlineCode",{parentName:"p"},"todoEntity")," using TypeScript interface to make it type-safe."),(0,i.kt)("p",null,"We also provided minimal required configuration which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the entity (aka. table name) and ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," array which is a list of allowed fields of this entity."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can also set ",(0,i.kt)("inlineCode",{parentName:"p"},"idField")," when defining a new entity. If you don't define it, it will be automatically set to ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,i.kt)("h2",{id:"creating-a-data-store"},"Creating a data store"),(0,i.kt)("p",null,"Now as we have our first entity, we can already create a local database with it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { createClientDb } from "@clientdb/core";\n\nconst db = createClientDb([todoEntity]);\n')),(0,i.kt)("p",null,"To create a new client db, we need to pass an array of entities that will be available in it."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"db")," we created will be an entry point for all the operations of our data like reading, inserting, querying, etc."),(0,i.kt)("h2",{id:"inserting-data"},"Inserting data"),(0,i.kt)("p",null,"Now we can add the first todo to our database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.add(todoEntity, {\n  id: "todo-0",\n  title: "Buy milk",\n  doneAt: null,\n});\n')),(0,i.kt)("p",null,"Call to ",(0,i.kt)("inlineCode",{parentName:"p"},"db.add")," returns our newly created todo. We can instantly read from it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'todo.title; // "Buy milk"\n')),(0,i.kt)("h2",{id:"get-all-items-from-db"},"Get all items from db"),(0,i.kt)("p",null,"We can now get all todos from our database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'db.entity(todoEntity).count; // count of all todos - 1\n\nconst allTodos = db.entity(todoEntity).all;\nconst [firstTodo] = allTodos;\nfirstTodo.title; // "Buy milk"\n')),(0,i.kt)("h2",{id:"querying-the-database"},"Querying the database"),(0,i.kt)("p",null,"We can also query our database with criteria of what we are looking for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const todoQuery = db.entity(todoEntity).query({\n  title: "Buy milk",\n});\n\ntodoQuery.count; // 1\ntodoQuery.first.title; // "Buy milk"\ntodoQuery.all; // [todoWeCreated]\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Query object can be way more advanced than shown in this example. Check out API reference to more informations")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"your-data-is-observable"},"Your data is observable"),(0,i.kt)("p",{parentName:"admonition"},"Before we continue to other parts (eg. updating data), it'd be good to know that all of our data is observable with mobx."),(0,i.kt)("p",{parentName:"admonition"},"This means that we can subscribe to any piece of data from the database and always have up to date results."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { autorun } from "mobx";\n\nautorun(() => {\n  console.log(db.entity(todoEntity).count);\n});\n\ndb.add(todoEntity, {\n  id: "todo-1",\n  title: "Buy milk",\n  doneAt: null,\n});\n\ndb.add(todoEntity, {\n  id: "todo-2",\n  title: "Buy books",\n  doneAt: null,\n});\n\n// prints:\n// 0\n// 1\n// 2\n'))),(0,i.kt)("h2",{id:"updating-entity-data"},"Updating entity data"),(0,i.kt)("p",null,"Every entity can be updated by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.update()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.entity(todoEntity).findById("todo-1");\n\ntodo.doneAt; // null\n\nconst now = new Date();\n\n// highlight-start\ntodo.update({\n  doneAt: now,\n});\n// highlight-end\n\ntodo.doneAt; // now\n')),(0,i.kt)("h2",{id:"deleting-entities"},"Deleting entities"),(0,i.kt)("p",null,"Each entity can be removed with ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.remove()")," call"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const todo = db.entity(todoEntity).findById("todo-1");\n\ntodo.remove();\n\ndb.entity(todoEntity).findById("todo-1"); // null\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},".update()")," on removed entity will throw an error."),(0,i.kt)("p",{parentName:"admonition"},"You can check if the entity is removed, by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.isRemoved()"))),(0,i.kt)("p",null,"Great! We now have our database with ",(0,i.kt)("inlineCode",{parentName:"p"},"todo")," entity. Let's move forward by creating our ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," entity and connecting it with ",(0,i.kt)("inlineCode",{parentName:"p"},"todo")," entity."))}u.isMDXComponent=!0}}]);