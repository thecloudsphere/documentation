"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:101},i="Roadmap",p={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Blueprint: Update schedule",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/roadmap.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101},sidebar:"tutorialSidebar",previous:{title:"Release notes",permalink:"/docs/release-notes"},next:{title:"Appendix",permalink:"/docs/appendix"}},c={},l=[{value:"Blueprint: Update schedule",id:"blueprint-update-schedule",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("h2",{id:"blueprint-update-schedule"},"Blueprint: Update schedule"),(0,o.kt)("p",null,"The reconciliation process, configurable via the ",(0,o.kt)("inlineCode",{parentName:"p"},"reconcile_schedule")," argument\nof a blueprint, ensures that a deployment is in the right state. However, this\ndoes not take into account changes to the blueprint itself."),(0,o.kt)("p",null,"Via ",(0,o.kt)("inlineCode",{parentName:"p"},"update_schedule")," it is now possible to check for changes to a blueprint or\nthe availability of a new version."),(0,o.kt)("p",null,"When changes are identified, the new version is updated if necessary, depending\non the configuration of the template, and changes are applied by performing a\nreconciliation."))}d.isMDXComponent=!0}}]);