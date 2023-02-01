"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:32},i="Templates",l={unversionedId:"templates",id:"templates",title:"Templates",description:"Configuration",source:"@site/docs/templates.md",sourceDirName:".",slug:"/templates",permalink:"/docs/templates",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/templates.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Blueprints",permalink:"/docs/blueprints"},next:{title:"Flows",permalink:"/docs/flows"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"Blueprint",id:"blueprint",level:3},{value:"Inputs",id:"inputs",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"templates"},"Templates"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"environment:\n  name: terraform/openstack\n  repository: thecloudsphere/registry\n  repository_server: https://github.com\n")),(0,o.kt)("h3",{id:"blueprint"},"Blueprint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"blueprint:\n  name: terraform/openstack/hello-world\n  repository: thecloudsphere/registry\n  repository_server: https://github.com\nblueprint_version: main\n")),(0,o.kt)("h3",{id:"inputs"},"Inputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'inputs:\n  clouds.yaml:\n    type: file\n    path: clouds.yaml\n  "cloud name": openstack\n  flavor: "SCS-1V:1:10"\n  prefix: "{{ tcs.name }}"\n  "public network": public\n')))}u.isMDXComponent=!0}}]);