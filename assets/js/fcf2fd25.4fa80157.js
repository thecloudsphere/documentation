"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:25},o="Inputs & Outputs",p={unversionedId:"inputs-outputs",id:"inputs-outputs",title:"Inputs & Outputs",description:"Inputs and outputs can be defined for environments and blueprints to enable inputs",source:"@site/docs/inputs-outputs.md",sourceDirName:".",slug:"/inputs-outputs",permalink:"/docs/inputs-outputs",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/inputs-outputs.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Environments",permalink:"/docs/environments"}},l={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Types",id:"types",level:3},{value:"Environment",id:"environment",level:4},{value:"File",id:"file",level:4},{value:"Outputs",id:"outputs",level:2},{value:"Types",id:"types-1",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inputs--outputs"},"Inputs & Outputs"),(0,i.kt)("p",null,"Inputs and outputs can be defined for environments and blueprints to enable inputs\nand outputs."),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"An input makes contents available via files or environment variables. All currently usable\ntypes are listed under ",(0,i.kt)("a",{parentName:"p",href:"#types"},"Types"),"."),(0,i.kt)("p",null,"It is possible to define the visibility of the input via the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility"),"\nargument. Possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," argument can be used to specify whether an input is mandatory or not.\nPossible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"If an input is not required, an optional default value can be set with the ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"\nargument. This will be used if no input is given."),(0,i.kt)("p",null,"If an input is not required and no default has been set and the input is not passed,\nthe corresponding file or environment variable is not created."),(0,i.kt)("p",null,"The input can be described via ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),". This argument is not optional. A description\nmust be given for each input. Markdown can be used to format the descriptions in the UI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: clouds.yaml\n    destination:\n      path: clouds.yaml\n      type: file\n    required: true\n    description: |\n      clouds.yaml is a configuration file that contains everything needed to connect\n      to one or more clouds. It may contain private information and is generally\n      considered private to a user.\n    visibility: private\n")),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("h4",{id:"environment"},"Environment"),(0,i.kt)("p",null,"Input is provided via an environment variable. The value set for ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," is used for the\nname of the environment variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: cloud name\n  destination:\n    path: ANSIBLE_VAR_provider_cloud\n    type: environment\n  default: openstack\n  required: false\n  description: |\n    Entry from the clouds.yaml to be used.\n")),(0,i.kt)("p",null,"The input is available in the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"ANSIBLE_VAR_provider_cloud")," in the\ndeployment."),(0,i.kt)("h4",{id:"file"},"File"),(0,i.kt)("p",null,"Write an input to a file on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/input")," volume. The ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," argument is always\nrelative to ",(0,i.kt)("inlineCode",{parentName:"p"},"/input"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: clouds.yaml\n  destination:\n    path: clouds.yaml\n    type: file\n  required: true\n  description: |\n    clouds.yaml is a configuration file that contains everything needed to connect\n    to one or more clouds. It may contain private information and is generally\n    considered private to a user.\n  visibility: private\n")),(0,i.kt)("p",null,"The input is available in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/inputs/clouds.yaml")," in the\ndeployment. From there it is copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"/processing")," when the deployment is initialised."),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"An output makes contents of files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/output")," volume accessible after execution\nof a deployment. In order for defined outputs to be usable, the corresponding file must\nbe created by the deployment beforehand."),(0,i.kt)("p",null,"Here is an example of an Ansible based deployment that writes a public IP address to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"/output")," volume in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Write floating ip address to /output/address\n  ansible.builtin.copy:\n    dest: /output/address\n    content: \"{{ result.openstack_servers[0].public_v4 }}\"\n  when: state == 'present'\n")),(0,i.kt)("p",null,"The content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," file can now be read out and made available via an output.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," argument is always relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"/output"),"."),(0,i.kt)("p",null,"It is possible to define the visibility of the output via the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility"),"\nargument. Possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,i.kt)("p",null,"The expected content can be specified for the source via the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," argument.\nBefore the output is made available, it is checked whether it is an IPv4 address, for example.\nAll currently usable types are listed under ",(0,i.kt)("a",{parentName:"p",href:"#types"},"Types"),"."),(0,i.kt)("p",null,"The output can be described via ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),". This argument is not optional. A description\nmust be given for each output. Markdown can be used to format the descriptions in the UI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"outputs:\n  - name: address\n    source:\n      path: address\n      type: ipv4address\n    description: |\n      IP address to access the instance\n    visibility: public\n")),(0,i.kt)("h3",{id:"types-1"},"Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ipv4address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"IPv4 address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ssh"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Private SSH key")))))}d.isMDXComponent=!0}}]);