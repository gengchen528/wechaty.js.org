(window.webpackJsonp=window.webpackJsonp||[]).push([[56,10,20,42,65,78,92,117,126,145,156],{246:function(t,e,o){"use strict";o.d(e,"a",(function(){return p})),o.d(e,"b",(function(){return b}));var n=o(0),s=o.n(n);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,s=function(t,e){if(null==t)return{};var o,n,s={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(s[o]=t[o]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}var i=s.a.createContext({}),u=function(t){var e=s.a.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):c(c({},e),t)),o},p=function(t){var e=u(t.components);return s.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.a.createElement(s.a.Fragment,{},e)}},h=s.a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,r=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),p=u(o),h=n,b=p["".concat(r,".").concat(h)]||p[h]||d[h]||a;return o?s.a.createElement(b,c(c({ref:e},i),{},{components:o})):s.a.createElement(b,c({ref:e},i))}));function b(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,r=new Array(a);r[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,r[1]=c;for(var i=2;i<a;i++)r[i]=o[i];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},247:function(t,e,o){"use strict";function n(t){var e,o,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=n(t[e]))&&(s&&(s+=" "),s+=o);else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}e.a=function(){for(var t,e,o=0,s="";o<arguments.length;)(t=arguments[o++])&&(e=n(t))&&(s&&(s+=" "),s+=e);return s}},248:function(t,e,o){"use strict";var n=o(0),s=o(249);e.a=function(){var t=Object(n.useContext)(s.a);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},249:function(t,e,o){"use strict";var n=o(0),s=Object(n.createContext)(void 0);e.a=s},250:function(t,e,o){"use strict";var n=o(0),s=o.n(n),a=o(248),r=o(247),c=o(61),l=o.n(c);var i=37,u=39;e.a=function(t){var e=t.lazy,o=t.block,c=t.defaultValue,p=t.values,d=t.groupId,h=t.className,b=Object(a.a)(),m=b.tabGroupChoices,g=b.setTabGroupChoices,y=Object(n.useState)(c),f=y[0],j=y[1],v=n.Children.toArray(t.children),O=[];if(null!=d){var w=m[d];null!=w&&w!==f&&p.some((function(t){return t.value===w}))&&j(w)}var x=function(t){var e=t.currentTarget,o=O.indexOf(e),n=p[o].value;j(n),null!=d&&(g(d,n),setTimeout((function(){var t,o,n,s,a,r,c,i;(t=e.getBoundingClientRect(),o=t.top,n=t.left,s=t.bottom,a=t.right,r=window,c=r.innerHeight,i=r.innerWidth,o>=0&&a<=i&&s<=c&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l.a.tabItemActive),setTimeout((function(){return e.classList.remove(l.a.tabItemActive)}),2e3))}),150))},T=function(t){var e,o;switch(t.keyCode){case u:var n=O.indexOf(t.target)+1;o=O[n]||O[0];break;case i:var s=O.indexOf(t.target)-1;o=O[s]||O[O.length-1]}null===(e=o)||void 0===e||e.focus()};return s.a.createElement("div",{className:"tabs-container"},s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":o},h)},p.map((function(t){var e=t.value,o=t.label;return s.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:function(t){return O.push(t)},onKeyDown:T,onFocus:x,onClick:x},o)}))),e?Object(n.cloneElement)(v.filter((function(t){return t.props.value===f}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return Object(n.cloneElement)(t,{key:e,hidden:t.props.value!==f})}))))}},251:function(t,e,o){"use strict";var n=o(0),s=o.n(n);e.a=function(t){var e=t.children,o=t.hidden,n=t.className;return s.a.createElement("div",{role:"tabpanel",hidden:o,className:n},e)}},62:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}u.isMDXComponent=!0},63:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}u.isMDXComponent=!0},64:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  conswt bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}u.isMDXComponent=!0},65:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  conswt bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}u.isMDXComponent=!0},66:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}u.isMDXComponent=!0},67:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}u.isMDXComponent=!0},68:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}u.isMDXComponent=!0},69:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}u.isMDXComponent=!0},70:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}u.isMDXComponent=!0},71:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),s=o(7),a=(o(0),o(246)),r={},c={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},l=[],i={toc:l};function u(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}u.isMDXComponent=!0},74:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return f})),o.d(e,"metadata",(function(){return j})),o.d(e,"toc",(function(){return v})),o.d(e,"default",(function(){return w}));var n=o(3),s=o(7),a=(o(0),o(246)),r=o(250),c=o(251),l=o(64),i=o(63),u=o(65),p=o(66),d=o(67),h=o(68),b=o(69),m=o(62),g=o(70),y=o(71),f={},j={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{}},v=[],O={toc:v};function w(t){var e=t.components,o=Object(s.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},O,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)(r.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"openapi",mdxType:"TabItem"},Object(a.b)(i.default,{mdxType:"ShortestChatbotOpenApi"})),Object(a.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(a.b)(l.default,{mdxType:"ShortestChatbotTypeScript"})),Object(a.b)(c.a,{value:"js",mdxType:"TabItem"},Object(a.b)(u.default,{mdxType:"ShortestChatbotJavaScript"})),Object(a.b)(c.a,{value:"py",mdxType:"TabItem"},Object(a.b)(p.default,{mdxType:"ShortestChatbotPython"})),Object(a.b)(c.a,{value:"go",mdxType:"TabItem"},Object(a.b)(d.default,{mdxType:"ShortestChatbotGo"})),Object(a.b)(c.a,{value:"java",mdxType:"TabItem"},Object(a.b)(h.default,{mdxType:"ShortestChatbotJava"})),Object(a.b)(c.a,{value:"php",mdxType:"TabItem"},Object(a.b)(b.default,{mdxType:"ShortestChatbotPhp"})),Object(a.b)(c.a,{value:"scala",mdxType:"TabItem"},Object(a.b)(m.default,{mdxType:"ShortestChatbotScala"})),Object(a.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(a.b)(g.default,{mdxType:"ShortestChatbotDotnet"})),Object(a.b)(c.a,{value:"rust",mdxType:"TabItem"},Object(a.b)(y.default,{mdxType:"ShortestChatbotRust"}))))}w.isMDXComponent=!0}}]);