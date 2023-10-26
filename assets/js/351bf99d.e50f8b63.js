"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[5466],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>p});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){return function(r){var n=d(r.components);return t.createElement(e,a({},r,{components:n}))}},d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||f[u]||a;return n?t.createElement(m,l(l({ref:r},s),{},{components:n})):t.createElement(m,l({ref:r},s))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70734:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const a={sidebar_position:14},i="W0014 - Cross Node Evaluation Not Allowed",l={unversionedId:"erlang-error-index/w/W0014",id:"erlang-error-index/w/W0014",title:"W0014 - Cross Node Evaluation Not Allowed",description:"Error",source:"@site/docs/erlang-error-index/w/W0014.md",sourceDirName:"erlang-error-index/w",slug:"/erlang-error-index/w/W0014",permalink:"/erlang-language-platform/docs/erlang-error-index/w/W0014",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"W0013 - Misspelled Attribute",permalink:"/erlang-language-platform/docs/erlang-error-index/w/W0013"},next:{title:"W0015 - Dependent Header",permalink:"/erlang-language-platform/docs/erlang-error-index/w/W0015"}},c={},s=[{value:"Error",id:"error",level:2},{value:"Explanation",id:"explanation",level:2}],p={toc:s},d="wrapper";function u(e){let{components:r,...n}=e;return(0,o.mdx)(d,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"w0014---cross-node-evaluation-not-allowed"},"W0014 - Cross Node Evaluation Not Allowed"),(0,o.mdx)("h2",{id:"error"},"Error"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-erlang"},"  do(Node) ->\n    erlang:spawn_link(Node, fun() -> ok end).\n%%  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ error: Production code must not use cross node eval (e.g. `rpc:call()`)\n")),(0,o.mdx)("h2",{id:"explanation"},"Explanation"),(0,o.mdx)("p",null,"The error is indicating that remote execution is happening between two nodes, in an environment where this is not allowed."),(0,o.mdx)("p",null,"To fix the error either remove the invocation or ignore the problem via ",(0,o.mdx)("a",{parentName:"p",href:"/erlang-language-platform/docs/erlang-error-index/#ignoring-diagnostics"},"the standard ",(0,o.mdx)("inlineCode",{parentName:"a"},"elp:ignore")," mechanism"),"."))}u.isMDXComponent=!0}}]);