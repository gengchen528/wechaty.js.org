(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=l(a),d=r,h=s["".concat(u,".").concat(d)]||s[d]||b[d]||c;return a?n.a.createElement(h,i(i({ref:t},o),{},{components:a})):n.a.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,u=new Array(c);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var o=2;o<c;o++)u[o]=a[o];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},247:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},248:function(e,t,a){"use strict";var r=a(0),n=a(249);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},250:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(248),u=a(247),i=a(61),p=a.n(i);var o=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,s=e.values,b=e.groupId,d=e.className,h=Object(c.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,v=Object(r.useState)(i),y=v[0],w=v[1],O=r.Children.toArray(e.children),j=[];if(null!=b){var g=m[b];null!=g&&g!==y&&s.some((function(e){return e.value===g}))&&w(g)}var P=function(e){var t=e.currentTarget,a=j.indexOf(t),r=s[a].value;w(r),null!=b&&(f(b,r),setTimeout((function(){var e,a,r,n,c,u,i,o;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,c=e.right,u=window,i=u.innerHeight,o=u.innerWidth,a>=0&&c<=o&&n<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((function(){return t.classList.remove(p.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case l:var r=j.indexOf(e.target)+1;a=j[r]||j[0];break;case o:var n=j.indexOf(e.target)-1;a=j[n]||j[j.length-1]}null===(t=a)||void 0===t||t.focus()};return n.a.createElement("div",{className:"tabs-container"},n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":a},d)},s.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(u.a)("tabs__item",p.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:P,onClick:P},a)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},251:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(246)),u=a(250),i=a(251),p={title:"Puppet Provider: WeChat4U",sidebar_label:"WeChat4U"},o={unversionedId:"puppet-providers/wechat4u",id:"puppet-providers/wechat4u",isDocsHomePage:!1,title:"Puppet Provider: WeChat4U",description:"Wechaty Puppet WeChat4U",source:"@site/docs/puppet-providers/wechat4u.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/wechat4u",permalink:"/docs/puppet-providers/wechat4u",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/wechat4u.md",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",sidebar_label:"WeChat4U",frontMatter:{title:"Puppet Provider: WeChat4U",sidebar_label:"WeChat4U"},sidebar:"docs",previous:{title:"Puppet Provider: PadLocal",permalink:"/docs/puppet-providers/padlocal"},next:{title:"Puppet Provider: Service",permalink:"/docs/puppet-providers/service"}},l=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"wechat4u"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-WeChat4U-blueviolet",alt:"Wechaty Puppet WeChat4U"}))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-wechat4u/HEAD/docs/images/wechat4u-logo.png",alt:"Wechaty Puppet WeChat4U"})),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-wechat4u"},Object(c.b)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-wechat4u.svg",alt:"NPM Version"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-wechat4u?activeTab=versions"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-wechat4u/next.svg",alt:"npm (tag)"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Repo: ",Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat4u"},"https://github.com/wechaty/wechaty-puppet-wechat4u")),Object(c.b)("li",{parentName:"ul"},"Support & Feedback: ",Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat4u/issues"},"https://github.com/wechaty/wechaty-puppet-wechat4u/issues"))),Object(c.b)("h2",{id:"features"},"Features"),Object(c.b)("p",null,"This is a full-featured Wechaty Puppet."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)(u.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nexport WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n"))),Object(c.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nexport WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n"))),Object(c.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nset WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n")))),Object(c.b)("h2",{id:"roadmap"},"Roadmap"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"to be added")),Object(c.b)("h2",{id:"history"},"History"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/"},"Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018"))),Object(c.b)("h2",{id:"maintainers"},"Maintainers"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}b.isMDXComponent=!0}}]);