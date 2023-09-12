"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[691],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){return function(r){var t=u(r.components);return n.createElement(e,o({},r,{components:t}))}},u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89164:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:5},i="W0005 - Mutable Variable Bug",l={unversionedId:"erlang-error-index/w/W0005",id:"erlang-error-index/w/W0005",title:"W0005 - Mutable Variable Bug",description:"Error",source:"@site/docs/erlang-error-index/w/W0005.md",sourceDirName:"erlang-error-index/w",slug:"/erlang-error-index/w/W0005",permalink:"/erlang-language-platform/docs/erlang-error-index/w/W0005",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"W0004 - Syntactic Element Missing",permalink:"/erlang-language-platform/docs/erlang-error-index/w/W0004"},next:{title:"W0006 - Statement Has No Effect",permalink:"/erlang-language-platform/docs/erlang-error-index/w/W0006"}},c={},p=[{value:"Error",id:"error",level:2},{value:"Explanation",id:"explanation",level:2}],s={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.mdx)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"w0005---mutable-variable-bug"},"W0005 - Mutable Variable Bug"),(0,a.mdx)("h2",{id:"error"},"Error"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-erlang"},'-module(main).\n-export([test/0]).\ntest() ->\n    Zero = 0,\n    One = 1,\n\n    Result = One = Zero,\n%%  ^^^^^^^^^^^^^^^^^^^ error: Possible mutable variable bug\n\n    io:format("~p ~p~n", [Zero, One]),\n    Result.\n')),(0,a.mdx)("h2",{id:"explanation"},"Explanation"),(0,a.mdx)("p",null,"The error message indicates that this specific pattern could trigger a ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/erlang/otp/issues/6873"},"known bug")," with certain OTP releases. Earlier (i.e. < OTP 26) Erlang releases were affected by a subtle bug which caused the ",(0,a.mdx)("em",{parentName:"p"},"pattern matching")," operator to incorrectly mutate variables."),(0,a.mdx)("p",null,"By compiling the above snippet on one of the problematic releases you'd get:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-erlang"},"1> test:test().\n0 0\n0\n")),(0,a.mdx)("p",null,"The code should have crashed with a ",(0,a.mdx)("em",{parentName:"p"},"pattern match")," error. Instead, the variable ",(0,a.mdx)("inlineCode",{parentName:"p"},"One")," mutated from the original value ",(0,a.mdx)("inlineCode",{parentName:"p"},"1")," to the value ",(0,a.mdx)("inlineCode",{parentName:"p"},"0"),"."))}m.isMDXComponent=!0}}]);