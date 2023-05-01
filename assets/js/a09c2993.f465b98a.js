"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"The Cloudsphere efficiently manages your cloud infrastructures \ud83d\ude80",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/getting-started"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"What is The Cloudsphere?",id:"what-is-the-cloudsphere",level:3},{value:"What is The Cloudsphere <u>not</u>?",id:"what-is-the-cloudsphere-not",level:3},{value:"Terminology",id:"terminology",level:2},{value:"Environment",id:"environment",level:3},{value:"Blueprint",id:"blueprint",level:3},{value:"Input",id:"input",level:3},{value:"Template",id:"template",level:3},{value:"Deployment",id:"deployment",level:3},{value:"State",id:"state",level:3},{value:"Log",id:"log",level:3},{value:"Output",id:"output",level:3},{value:"Actions, States, and Transitions",id:"actions-states-and-transitions",level:2},{value:"Comparison with other solutions",id:"comparison-with-other-solutions",level:2},{value:"Atlantis",id:"atlantis",level:3},{value:"CDK for Terraform",id:"cdk-for-terraform",level:3},{value:"Crossplane",id:"crossplane",level:3},{value:"HashiCorp Cloud Platform",id:"hashicorp-cloud-platform",level:3},{value:"Pulumi",id:"pulumi",level:3},{value:"Red Hat Ansible Automation Platform / AWX",id:"red-hat-ansible-automation-platform--awx",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Cloudsphere")," efficiently manages your cloud infrastructures \ud83d\ude80"),(0,o.kt)("p",null,"The Cloudsphere's mission statement is:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Automate infrastructure as code (IaC) provisioning at any scale,\nat any cloud or data center with any tool. Through a single central\nAPI. Freely definable cloud infrastructures at the push of a button\nas self-service.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overview",src:n(8157).Z,title:"Overview",width:"1601",height:"1603"})),(0,o.kt)("h3",{id:"what-is-the-cloudsphere"},"What is The Cloudsphere?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an attempt to realise a small code base for API, orchestrator and runner\nservices (less than 5000 SLOCs)")),(0,o.kt)("h3",{id:"what-is-the-cloudsphere-not"},"What is The Cloudsphere ",(0,o.kt)("u",null,"not"),"?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an alternative to Infrastructure as Code tool X")),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Terminology",src:n(4475).Z,width:"972",height:"834"})),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("p",null,"An environment contains all the necessary runtime components to\nexecute Infrastructure as Code contained in a Blueprint."),(0,o.kt)("h3",{id:"blueprint"},"Blueprint"),(0,o.kt)("p",null,"A Blueprint contains everything needed to create a cloud infrastructure\nin the form of Infrastructure as Code."),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("p",null,"Blueprints, environments, and deployments can be passed any inputs at runtime.\nThese inputs are assembled in templates and then assigned."),(0,o.kt)("h3",{id:"template"},"Template"),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"A deployment executes an environment in a blueprint with a given\nparameterization (template)."),(0,o.kt)("h3",{id:"state"},"State"),(0,o.kt)("h3",{id:"log"},"Log"),(0,o.kt)("p",null,"Individual executions generate logs. For example, a deployment or a reconcilation.\nThe generated STDOUT and STDERR as well as the exit code are stored in the database."),(0,o.kt)("p",null,"For example, this is the output of Terraform, which is currently performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"DESTROY")," action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'data.openstack_networking_network_v2.public: Reading...\nopenstack_networking_network_v2.tcs: Refreshing state... [id=8ecd512b-6a74-4a99-8b6f-92ba27eff59a]\nopenstack_compute_secgroup_v2.tcs: Refreshing state... [id=6736b7d0-d5e9-4eb3-8469-3bc00b8e8cf9]\ndata.openstack_networking_network_v2.public: Read complete after 1s [id=e6be7364-bfd8-4de7-8120-8f41c69a139a]\nopenstack_networking_router_v2.router: Refreshing state... [id=8e662300-829d-41d2-ac6d-2ed453dfc4ec]\nopenstack_networking_subnet_v2.tcs: Refreshing state... [id=a80a6aab-3b2c-408e-a07f-04e4f8eec6cb]\nopenstack_networking_router_interface_v2.router_interface: Refreshing state... [id=747fa009-5b17-408b-91d4-918269e4baa1]\nopenstack_networking_floatingip_v2.tcs: Refreshing state... [id=c9140688-d76a-4ab8-8d9e-0fdae43c1149]\nlocal_sensitive_file.address: Refreshing state... [id=d1db0a3767eb2585fcd53bb52df1081038e27ae7]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n  - destroy\n\nTerraform will perform the following actions:\n\n  # openstack_compute_secgroup_v2.tcs will be destroyed\n  - resource "openstack_compute_secgroup_v2" "tcs" {\n      - description = "hello-world security group" -> null\n[...]\n')),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("h2",{id:"actions-states-and-transitions"},"Actions, States, and Transitions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transitions",src:n(5131).Z,width:"468",height:"834"})),(0,o.kt)("h2",{id:"comparison-with-other-solutions"},"Comparison with other solutions"),(0,o.kt)("h3",{id:"atlantis"},"Atlantis"),(0,o.kt)("h3",{id:"cdk-for-terraform"},"CDK for Terraform"),(0,o.kt)("h3",{id:"crossplane"},"Crossplane"),(0,o.kt)("h3",{id:"hashicorp-cloud-platform"},"HashiCorp Cloud Platform"),(0,o.kt)("h3",{id:"pulumi"},"Pulumi"),(0,o.kt)("h3",{id:"red-hat-ansible-automation-platform--awx"},"Red Hat Ansible Automation Platform / AWX"))}p.isMDXComponent=!0},8157:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview-0eeab0537a2f6a2e8d42cf4be1523d67.png"},4475:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terminology-19f633bdac937b212ed1a5b20039973c.png"},5131:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/transitions-9734bc9940e6fbeb6b8749dac105e7bd.png"}}]);