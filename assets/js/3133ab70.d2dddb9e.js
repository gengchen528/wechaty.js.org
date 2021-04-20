(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),c=a(7),r=(a(0),a(246)),o=a(250),i=a(251),l={title:"Puppet Service: DIY"},p={unversionedId:"puppet-services/diy",id:"puppet-services/diy",isDocsHomePage:!1,title:"Puppet Service: DIY",description:"Wechaty Puppet Service DIY",source:"@site/docs/puppet-services/diy.md",sourceDirName:"puppet-services",slug:"/puppet-services/diy",permalink:"/docs/puppet-services/diy",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-services/diy.md",version:"current",lastUpdatedBy:"padlocal",lastUpdatedAt:1618904182,formattedLastUpdatedAt:"4/20/2021",frontMatter:{title:"Puppet Service: DIY"},sidebar:"docs",previous:{title:"Puppet Service Compatibility",permalink:"/docs/puppet-services/compatibility"},next:{title:"Wechaty specs overview",permalink:"/docs/specs/"}},s=[{value:"Steps",id:"steps",children:[{value:"1. Pull the latest Wechaty Docker Image",id:"1-pull-the-latest-wechaty-docker-image",children:[]},{value:"2. Config Wechaty Puppet Provider",id:"2-config-wechaty-puppet-provider",children:[]},{value:"3. Set Wechaty Puppet Service TOKEN",id:"3-set-wechaty-puppet-service-token",children:[]},{value:"4. Set Wechaty Puppet Service Port",id:"4-set-wechaty-puppet-service-port",children:[]},{value:"5. Set Wechaty Log Level",id:"5-set-wechaty-log-level",children:[]},{value:"6. Start your Wechaty Token Gate Server",id:"6-start-your-wechaty-token-gate-server",children:[]},{value:"7. Check your TOKEN service",id:"7-check-your-token-service",children:[]},{value:"\ud83c\udf89 Congratulations! You are all set",id:"-congratulations-you-are-all-set",children:[]}]},{value:"All in One Command",id:"all-in-one-command",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Support",id:"support",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/puppet-services/diy"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-DIY-blue",alt:"Wechaty Puppet Service DIY"}))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Do It Yourself")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can make a Wechaty Puppet Service easily from any Wechaty Puppet Providers."))),Object(r.b)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),Object(r.b)("h2",{id:"steps"},"Steps"),Object(r.b)("p",null,"We have a easy to use docker image which works out-of-the-box."),Object(r.b)("h3",{id:"1-pull-the-latest-wechaty-docker-image"},"1. Pull the latest Wechaty Docker Image"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker pull wechaty/wechaty\n")),Object(r.b)("h3",{id:"2-config-wechaty-puppet-provider"},"2. Config Wechaty Puppet Provider"),Object(r.b)("p",null,"We need to choice which ",Object(r.b)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Provider")," we want to use by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable."),Object(r.b)("p",null,"For example, you can choose ",Object(r.b)("a",{parentName:"p",href:"/docs/puppet-providers/padlocal"},"wechaty-puppet-padlocal")," by setting ",Object(r.b)("inlineCode",{parentName:"p"},"WECHATY_PUPPET=wechaty-puppet-padlocal"),", add an additional PadLocal token ",Object(r.b)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__")," which is required by PadLocal."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Wechaty Puppet Providers")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Learn all ",Object(r.b)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Providers")),Object(r.b)("p",{parentName:"div"},"You need to set all environment variables which requires from a specific provider."))),Object(r.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-padlocal"\nexport WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"\n'))),Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-padlocal"\nexport WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"\n'))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET="wechaty-puppet-padlocal"\nset WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"\n')))),Object(r.b)("h3",{id:"3-set-wechaty-puppet-service-token"},"3. Set Wechaty Puppet Service TOKEN"),Object(r.b)("p",null,"In order to provide ",Object(r.b)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service"),", you need to specify a ",Object(r.b)("a",{parentName:"p",href:"/docs/specs/token"},"TOKEN")," for authorization."),Object(r.b)("p",null,"You can ",Object(r.b)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version4"},"Generate a new UUIDv4")," online, use this new UUIDv4 as your token."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TOKEN uniqueness")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Your new token ",Object(r.b)("strong",{parentName:"p"},"MUST")," different to any existing tokens in our system. (or they will conflict!)"))),Object(r.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'# TODO: use script to get UUIDv4 automatically like Linux/Mac\nset WECHATY_TOKEN="__UUIDv4__"\n')))),Object(r.b)("h3",{id:"4-set-wechaty-puppet-service-port"},"4. Set Wechaty Puppet Service Port"),Object(r.b)("p",null,"The port for your ",Object(r.b)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service")," need to be specified. Make sure it's free on your server."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"port availablility")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"The server IP must be public on the internet"),Object(r.b)("li",{parentName:"ol"},"the port must be public accessible on the internet")))),Object(r.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET_SERVER_PORT="8788"\n')))),Object(r.b)("h3",{id:"5-set-wechaty-log-level"},"5. Set Wechaty Log Level"),Object(r.b)("p",null,"Enable ",Object(r.b)("inlineCode",{parentName:"p"},"verbose")," log message output for easy debugging."),Object(r.b)("p",null,"More options are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"silly"),": all debug messages will be outputed"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"verbose"),": recommended debug level"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"info"),": disable debug messages"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"warning"),": only warning message"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"silence"),": no log message")),Object(r.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_LOG="verbose"\n')))),Object(r.b)("h3",{id:"6-start-your-wechaty-token-gate-server"},"6. Start your Wechaty Token Gate Server"),Object(r.b)("p",null,"After finish config all the above settings, start the token gate server with the following docker command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker run -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"privileged mode")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Privileged mode is for using host networking to simplify the docker arguments."),Object(r.b)("p",{parentName:"div"},"If you want to remove the ",Object(r.b)("inlineCode",{parentName:"p"},"--privileged"),", you need to add:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT")," for Linux & Mac"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%")," for Windows")))),Object(r.b)("h3",{id:"7-check-your-token-service"},"7. Check your TOKEN service"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"wait for token gateway getting full started")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The docker command in the previous step might need some time to getting fully started."),Object(r.b)("p",{parentName:"div"},"Wait and read the docker container log messages carefully to make sure the server has been started before continue this step."))),Object(r.b)("p",null,"Check your TOKEN availability by visiting ",Object(r.b)("inlineCode",{parentName:"p"},"https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}")),Object(r.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n# TODO: add windows version. (Pull Request is welcome!)\n")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Succ: ",Object(r.b)("inlineCode",{parentName:"li"},"HTTP/200")," means you are good, the TOKEN is ready to use."),Object(r.b)("li",{parentName:"ol"},"Fail: ",Object(r.b)("inlineCode",{parentName:"li"},"HTTP/404")," means the TOKEN is not registered successfully.")),Object(r.b)("p",null,"If you get ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP/404"),", then you need to check the previous steps and troubleshoot which part has problems. If you find anything need to be reported, please feel free to submit an issue at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues"},"here")),Object(r.b)("p",null,"Learn more about the TOKEN from ",Object(r.b)("a",{parentName:"p",href:"/docs/specs/token"},"Wechaty Puppet Service TOKEN Specification"),"."),Object(r.b)("h3",{id:"-congratulations-you-are-all-set"},"\ud83c\udf89 Congratulations! You are all set"),Object(r.b)("p",null,"Your Wechaty Puppet Service will be ready to service for ",Object(r.b)("a",{parentName:"p",href:"/docs/polyglot/"},"Polyglot Wechaty"),"!"),Object(r.b)("h2",{id:"all-in-one-command"},"All in One Command"),Object(r.b)("p",null,"For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"modify before use")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We are using PadLocal as the example. Remember to modify ",Object(r.b)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN")," by replacing ",Object(r.b)("inlineCode",{parentName:"p"},"puppet_padlocal__TOKEN__")," with yours."))),Object(r.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using padlocal for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n'))),Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using padlocal for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n'))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# To be add\n")))),Object(r.b)("p",null,"I hope you enjoy it!"),Object(r.b)("h2",{id:"blogs"},"Blogs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021"))),Object(r.b)("h2",{id:"history"},"History"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Using your Puppet PadLocal token with Python, Java, and Go Wechaty ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1985"},"wechaty/wechaty#1985")),Object(r.b)("li",{parentName:"ol"},"How to create your own Wechaty Puppet Service Token with the Web Protocol ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1986"},"wechaty/wechaty#1986")),Object(r.b)("li",{parentName:"ol"},"Using PadLocal Token with Polyglot Wechaty via Token Gateway ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/84"},"wechaty/puppet-services#84")),Object(r.b)("li",{parentName:"ol"},"Wechaty is All You Need: Python, Go, and Java Translation Project ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1927"},"wechaty/wechaty#1927"))),Object(r.b)("h2",{id:"support"},"Support"),Object(r.b)("p",null,"You can ",Object(r.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}u.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return a?c.a.createElement(m,i(i({ref:t},p),{},{components:a})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},247:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},248:function(e,t,a){"use strict";var n=a(0),c=a(249);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},250:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(248),o=a(247),i=a(61),l=a.n(i);var p=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,v=Object(n.useState)(i),y=v[0],T=v[1],N=n.Children.toArray(e.children),j=[];if(null!=u){var g=h[u];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&T(g)}var w=function(e){var t=e.currentTarget,a=j.indexOf(t),n=b[a].value;T(n),null!=u&&(O(u,n),setTimeout((function(){var e,a,n,c,r,o,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,c=e.bottom,r=e.right,o=window,i=o.innerHeight,p=o.innerWidth,a>=0&&r<=p&&c<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},E=function(e){var t,a;switch(e.keyCode){case s:var n=j.indexOf(e.target)+1;a=j[n]||j[0];break;case p:var c=j.indexOf(e.target)-1;a=j[c]||j[j.length-1]}null===(t=a)||void 0===t||t.focus()};return c.a.createElement("div",{className:"tabs-container"},c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(N.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},251:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);