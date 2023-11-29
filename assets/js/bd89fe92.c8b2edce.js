"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[6770],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){return function(n){var r=d(n.components);return t.createElement(e,a({},n,{components:r}))}},d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||a;return r?t.createElement(m,l(l({ref:n},s),{},{components:r})):t.createElement(m,l({ref:n},s))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},31642:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const a={sidebar_position:27},i="L1227 - Undefined Function",l={unversionedId:"erlang-error-index/l/L1227",id:"erlang-error-index/l/L1227",title:"L1227 - Undefined Function",description:"Error",source:"@site/docs/erlang-error-index/l/L1227.md",sourceDirName:"erlang-error-index/l",slug:"/erlang-error-index/l/L1227",permalink:"/erlang-language-platform/docs/erlang-error-index/l/L1227",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"L1201 - Undefined Module",permalink:"/erlang-language-platform/docs/erlang-error-index/l/L1201"},next:{title:"O0000 - Generic EDoc Error",permalink:"/erlang-language-platform/docs/erlang-error-index/o/O0000"}},c={},s=[{value:"Error",id:"error",level:2},{value:"Explanation",id:"explanation",level:2}],u={toc:s},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.mdx)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"l1227---undefined-function"},"L1227 - Undefined Function"),(0,o.mdx)("h2",{id:"error"},"Error"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-erlang"},"  main() ->\n    exists(),\n    not_exists().\n%%  ^^^^^^^^^^^^ \ud83d\udca1 warning: Function 'not_exists/0' is undefined.\n")),(0,o.mdx)("h2",{id:"explanation"},"Explanation"),(0,o.mdx)("p",null,"The warning message indicates that the invoked function cannot be found."),(0,o.mdx)("p",null,"The problem is usually due to misspelling, to the wrong number of arguments passed to the function, or to a recent removal of the target function."),(0,o.mdx)("p",null,"To fix the problem you should verify whether the invoked function actually exists and has the correct ",(0,o.mdx)("em",{parentName:"p"},"arity"),". Remember that in Erlang a function is identified by its name ",(0,o.mdx)("strong",{parentName:"p"},"and")," the number of arguments it takes."),(0,o.mdx)("p",null,"In case of false positives, the ",(0,o.mdx)("a",{parentName:"p",href:"/erlang-language-platform/docs/erlang-error-index/#ignoring-diagnostics"},"standard ",(0,o.mdx)("inlineCode",{parentName:"a"},"elp:ignore")," mechanism")," should be used. Please report this as a bug should this be the case."),(0,o.mdx)("p",null,"This diagnostic is limited to local function calls (i.e. function calls which do not specify the module name), since fully qualified (aka remote) calls to undefined functions are reported by ",(0,o.mdx)("a",{parentName:"p",href:"/erlang-language-platform/docs/erlang-error-index/w/W0017"},"W0017"),"."))}p.isMDXComponent=!0}}]);