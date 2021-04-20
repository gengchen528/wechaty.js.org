(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),c=(t(0),t(246)),i=t(250),o=t(251),l={title:"Making friends"},s={unversionedId:"howto/friendship",id:"howto/friendship",isDocsHomePage:!1,title:"Making friends",description:"Sending Request",source:"@site/docs/howto/friendship.md",sourceDirName:"howto",slug:"/howto/friendship",permalink:"/docs/howto/friendship",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/friendship.md",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{title:"Making friends"},sidebar:"docs",previous:{title:"Managing rooms",permalink:"/docs/howto/room"},next:{title:"Processing files",permalink:"/docs/howto/file-box"}},u=[{value:"Sending Request",id:"sending-request",children:[]},{value:"Receiving Request",id:"receiving-request",children:[]}],p={toc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"sending-request"},"Sending Request"),Object(c.b)(i.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"async function onReady () {\n  const weixin  = 'FridayBOT' // weixin id\n  const contact = await bot.Friendship.search({ weixin })\n\n  if (contact) {\n    console.info('Sending friend request...')\n    await bot.Friendship.add(contact)\n  } else {\n    console.info('Friendship.search: not found')\n  }\n}\n\nbot.on('ready', onReady)\n"))),Object(c.b)(o.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"async function onReady () {\n  const weixin  = 'FridayBOT' // weixin id\n  const contact = await bot.Friendship.search({ weixin })\n\n  if (contact) {\n    console.info('Sending friend request...')\n    await bot.Friendship.add(contact)\n  } else {\n    console.info('Friendship.search: not found')\n  }\n}\n\nbot.on('ready', onReady)\n"))),Object(c.b)(o.a,{value:"py",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"from typing import Optional\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contact: Optional[Contact] = await self.Friendship.search(phone='phone-of-someone')\n        if contact:\n            self.Friendship.add(contact)\n"))),Object(c.b)(o.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"scala",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"rust",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(c.b)("h2",{id:"receiving-request"},"Receiving Request"),Object(c.b)(i.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import { Friendship } from 'wechaty'\n\nasync function onFriendship (friendship: Friendship) {\n  if (friendship.type() === Friendship.Type.Receive) {\n    console.info('New requrest from', friendship.contact())\n    console.info('Hello message:', friendship.hello())\n    await friendship.accept()\n  } else if (friendship.type() === Friendship.Type.Confirm) {\n    console.info('New request confirmed with', friendship.contact().name())\n  }\n}\n\nbot.on('friendship', onFriendship)\n"))),Object(c.b)(o.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { Friendship } from 'wechaty'\n\nasync function onFriendship (friendship) {\n  if (friendship.type() === Friendship.Type.Receive) {\n    console.info('New requrest from', friendship.contact())\n    console.info('Hello message:', friendship.hello())\n    await friendship.accept()\n  } else if (friendship.type() === Friendship.Type.Confirm) {\n    console.info('New request confirmed with', friendship.contact().name())\n  }\n}\n\nbot.on('friendship', onFriendship)\n"))),Object(c.b)(o.a,{value:"py",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty, Friendship, FriendshipType\n\nclass MyBot(Wechaty):\n    async def on_friendship(self, friendship: Friendship):\n        if friendship.type() == FriendshipType.FRIENDSHIP_TYPE_RECEIVE:\n            await friendship.accept()\n"))),Object(c.b)(o.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"scala",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(c.b)(o.a,{value:"rust",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}b.isMDXComponent=!0},246:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return t?r.a.createElement(m,o(o({ref:n},s),{},{components:t})):r.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},247:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},248:function(e,n,t){"use strict";var a=t(0),r=t(249);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},250:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(248),i=t(247),o=t(61),l=t.n(o);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(c.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(o),v=O[0],y=O[1],g=a.Children.toArray(e.children),j=[];if(null!=b){var T=f[b];null!=T&&T!==v&&p.some((function(e){return e.value===T}))&&y(T)}var w=function(e){var n=e.currentTarget,t=j.indexOf(n),a=p[t].value;y(a),null!=b&&(h(b,a),setTimeout((function(){var e,t,a,r,c,i,o,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,c=e.right,i=window,o=i.innerHeight,s=i.innerWidth,t>=0&&c<=s&&r<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;t=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;t=j[r]||j[j.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:w,onClick:w},t)}))),n?Object(a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},251:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);