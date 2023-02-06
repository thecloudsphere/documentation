"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?l.createElement(h,r(r({ref:t},p),{},{components:n})):l.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=n(7462),a=(n(7294),n(3905));const o={sidebar_position:20},r="Getting started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"The objective of the Getting Started Guide is to demonstrate all available",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Inputs & Outputs",permalink:"/docs/inputs-outputs"}},i={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Preparations",id:"preparations",level:2},{value:"Template creation &amp; import",id:"template-creation--import",level:2},{value:"Deployment creation",id:"deployment-creation",level:2},{value:"Outputs &amp; control",id:"outputs--control",level:2},{value:"Logs",id:"logs",level:2},{value:"States",id:"states",level:2},{value:"Deployment destruction",id:"deployment-destruction",level:2},{value:"Different IaC tool, same result",id:"different-iac-tool-same-result",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"The objective of the Getting Started Guide is to demonstrate all available\ncommands and necessary configuration files as well as concepts in a\nHello World example, or better Hello Cloudsphere example."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The example used in the guide deploy a small infrastructure to an OpenStack\ncloud. Accordingly, access to an OpenStack account is required."),(0,a.kt)("p",null,"Actually, a router with an internal IPv4 network is created and an\ninstance is started in it. The router is assigned to an external network.\nThe instance is assigned a keypair, a floating IP address and a security group."),(0,a.kt)("p",null,"This guide uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," file, which is located in the same directory\nas the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," file. The content of this file depends very much on the\nOpenStack environment used. Refer to the documentation of the operator of the\nOpenStack environment accordingly."),(0,a.kt)("p",null,"For reference, here is a possible ",(0,a.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nclouds:\n  openstack:\n    auth:\n      auth_url: https://keystone.services.a.thecloudsphere.io\n      username: default-sandbox\n      password: password\n      project_name: default-sandbox\n      project_domain_name: default\n      user_domain_name: default\n    region_name: RegionA\n    identity_api_version: 3\n")),(0,a.kt)("p",null,"An account on our public The Cloudsphere service or an account on a local Enterprise\ninstallation is required."),(0,a.kt)("h2",{id:"preparations"},"Preparations"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/thecloudsphere/hello-world\ncd hello-world\n")),(0,a.kt)("p",null,"Install the CLI for The Cloudsphere with ",(0,a.kt)("inlineCode",{parentName:"p"},"pip3 install tcsctl"),".\n",(0,a.kt)("a",{parentName:"p",href:"https://pipenv.pypa.io/en/latest/"},"pipenv")," can be used for this as well and is the\npreferred way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"pipenv install\npipenv shell\n")),(0,a.kt)("p",null,"Create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"tcs.yaml")," which contains the details of the API and\nthe authentication details. If ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," is not present in the file, it will be\nrequested when using ",(0,a.kt)("inlineCode",{parentName:"p"},"tcsctl login"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# log_level: DEBUG\nprofiles:\n  default:\n    api_url: https://api.demo.thecloudsphere.io/api/\n    api_version: v1\n    insecure: false\n    auth:\n      username: client1@thecloudsphere.io\n      password: password\n")),(0,a.kt)("p",null,"To be sure, check that the configuration is valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl validate config tcs.yaml\nConfig tcs.yaml is valid.\n")),(0,a.kt)("p",null,"Before you can use the CLI, you have to log in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl login\nLogged in successfully.\n")),(0,a.kt)("p",null,"The list of usable projects allows you to check whether the login was\nsuccessful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl project list\n+----+--------------------------------+--------------------------------------+---------------------+\n|    | name                           | id                                   | created_at          |\n|----+--------------------------------+--------------------------------------+---------------------|\n|  0 | client1@demo.thecloudsphere.io | 64ed6e39-0c05-42aa-a0ac-2267a7be5223 | 2023-01-30 16:18:22 |\n+----+--------------------------------+--------------------------------------+---------------------+\n")),(0,a.kt)("h2",{id:"template-creation--import"},"Template creation & import"),(0,a.kt)("p",null,"Create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," which contains a hello-world template for a\ndeployment with Terraform on an OpenStack environment."),(0,a.kt)("p",null,"Flavor, public network or the image to be used must be adapted accordingly depending\non the OpenStack Cloud."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'terraform-hello-world:\n  blueprint:\n    name: terraform/openstack/hello-world\n    repository: thecloudsphere/hello-world\n    repository_server: https://github.com\n  blueprint_version: main\n  inputs:\n    prefix: terraform\n    clouds.yaml:\n      type: file\n      path: clouds.yaml\n    "cloud name": openstack\n    flavor: "SCS-1V:1:10"\n    image: "Ubuntu 22.04"\n    "public network": public\n')),(0,a.kt)("p",null,"To be sure, check that the template is valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl validate template hello-world.yaml\nTemplate hello-world.yaml is valid.\n")),(0,a.kt)("p",null,"Import the template ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform-hello-world")," defined in the previously created\n",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl template import hello-world.yaml terraform-hello-world\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n|---------------------+--------------------------------------|\n| blueprint_id        | 803f3163-66b7-4c21-9c42-ef92fdb96fa6 |\n| blueprint_version   | main                                 |\n| environment_id      |                                      |\n| environment_version |                                      |\n| name                | terraform-hello-world                |\n| id                  | 05aa4b88-50ed-4dd1-8006-64772ae3f0f9 |\n| created_at          | 2023-01-28 22:26:02                  |\n+---------------------+--------------------------------------+\n")),(0,a.kt)("p",null,"Blueprints and environments can be listed to verify the import."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl blueprint list --column name --column repository\n+----+---------------------------------+----------------------------+\n|    | name                            | repository                 |\n|----+---------------------------------+----------------------------|\n|  0 | terraform/openstack/hello-world | thecloudsphere/hello-world |\n+----+---------------------------------+----------------------------+\n")),(0,a.kt)("p",null,"If an environment has not been explicitly defined in a template, the environment\ndefined in the Blueprint is used and provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl environment list --column name --column repository\n+----+---------------------+-------------------------+\n|    | name                | repository              |\n|----+---------------------+-------------------------|\n|  0 | terraform/openstack | thecloudsphere/registry |\n+----+---------------------+-------------------------+\n")),(0,a.kt)("h2",{id:"deployment-creation"},"Deployment creation"),(0,a.kt)("p",null,"A deployment ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," can now be created from the template\n",(0,a.kt)("inlineCode",{parentName:"p"},"terraform-hello-world"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment create hello-world terraform-hello-world\n+-----------------+--------------------------------------+\n| Field           | Value                                |\n|-----------------+--------------------------------------|\n| name            | hello-world                          |\n| template_id     | 05aa4b88-50ed-4dd1-8006-64772ae3f0f9 |\n| id              | 5fe18e39-1b5a-4d0e-8760-448b6cf2ab19 |\n| created_at      | 2023-01-28 22:35:54                  |\n| action          | CREATE                               |\n| deployment_type | ENVIRONMENT                          |\n| status          | NONE                                 |\n+-----------------+--------------------------------------+\n")),(0,a.kt)("p",null,"When the orchestrator selects the deployment for execution, the status is changed\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment list --column name --column status\n+----+-------------+----------+\n|    | name        | status   |\n|----+-------------+----------|\n|  0 | hello-world | CREATE   |\n+----+-------------+----------+\n")),(0,a.kt)("p",null,"Once the deployment has been created the status changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment list --column name --column status\n+----+-------------+----------+\n|    | name        | status   |\n|----+-------------+----------|\n|  0 | hello-world | CREATED  |\n+----+-------------+----------+\n")),(0,a.kt)("h2",{id:"outputs--control"},"Outputs & control"),(0,a.kt)("p",null,"The public IP address and the SSH keypair for the login can then be retrieved via\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment outputs hello-world address\n10.100.3.41\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment outputs hello-world private_key\n-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA1aiAph+QxP0dp18b04b24oE8+e4FFdxULeKiT4vZssuVRrFy\n[...]\n")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"tcsctl deployment outputs hello-world")," it is possible to output all\navailable outputs."),(0,a.kt)("p",null,"With the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"--file"),", the output can be written directly to a file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment outputs hello-world private_key --file id_rsa.hello-world\nOutput private_key from deployment hello-world was written to file id_rsa.hello-world.\n")),(0,a.kt)("p",null,"There are blueprints that support a console, for example SSH, for control.\nThis console can be called up with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"tcsctl deployment control"),".\nThe blueprints used in this Getting Started Guide support the control feature.\nA deployment must be in status ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATED")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RECONCILED")," for the control\nfeature to be usable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment control hello-world\nWelcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-52-generic x86_64)\n[...]\nubuntu@hello-world-instance:~$\n")),(0,a.kt)("h2",{id:"logs"},"Logs"),(0,a.kt)("p",null,"The logs that were printed during the creation of the deployment can\nbe displayed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"tcsctl deployments logs")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment logs --show hello-world create\ndata.openstack_networking_network_v2.public: Reading...\ndata.openstack_networking_network_v2.public: Read complete after 1s [id=665eea18-2b85-427c-b0bf-a6fd040cc0fc]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n  + create\n\nTerraform will perform the following actions:\n\n  # local_sensitive_file.address will be created\n[...]\n")),(0,a.kt)("p",null,"All logs from a specific period for a deployment can also be displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment logs hello-world '15 minutes ago'\n+------------+--------------------------------------+---------------------+\n| category   | id                                   | created_at          |\n|------------+--------------------------------------+---------------------|\n| import     | af7cd606-5e7b-4d34-9bd7-89d43efc2f29 | 2022-10-09 17:30:01 |\n| export     | 3d10733e-670f-45b0-865c-851171982670 | 2022-10-09 17:30:04 |\n| reconcile  | 7cd79e0f-a56e-436a-be08-cdf0529febe5 | 2022-10-09 17:30:04 |\n| import     | 1b2d5c04-2860-45f2-a6ce-bdd6b851d896 | 2022-10-09 17:31:20 |\n| destroy    | b0765dac-2f1b-4d7b-84fc-85e328bfa018 | 2022-10-09 17:31:51 |\n| export     | f774401e-5b23-4c86-bc10-34ca840f155c | 2022-10-09 17:31:51 |\n+------------+--------------------------------------+---------------------+\n")),(0,a.kt)("p",null,"The ID of a log entry can be used to display a specific log entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment logs hello-world b0765dac-2f1b-4d7b-84fc-85e328bfa018\nopenstack_compute_keypair_v2.tcs: Refreshing state... [id=terraform-keypair]\ndata.openstack_networking_network_v2.public: Reading...\nopenstack_networking_network_v2.tcs: Refreshing state... [id=23b0a0e1-e560-4b50-9bd8-4b7ca9cfc203]\nopenstack_compute_secgroup_v2.tcs: Refreshing state... [id=3db448c1-9a3c-495b-aec8-514fd774fdf8]\nlocal_sensitive_file.private_key: Refreshing state... [id=14070ff949339f2a7eb97690cd4f3f7a0c13e2a3]\nopenstack_networking_subnet_v2.tcs: Refreshing state... [id=acfb2765-e522-41c1-9178-fab084611a1c]\n[...]\n")),(0,a.kt)("h2",{id:"states"},"States"),(0,a.kt)("p",null,"Various IaC tools, for example Terraform, generate a state. This state is\nstored on an object storage and can be downloaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment states hello-world\n+--------------------------------------+----------------------------------+\n| version_id                           | last_modified                    |\n|--------------------------------------+----------------------------------|\n| 1a381eec-14af-4016-820a-611232833e2b | 2023-02-01T21:00:08.904000+00:00 |\n| e2172cad-1bd6-486f-800a-ab14fd781781 | 2023-02-01T20:59:23.626000+00:00 |\n+--------------------------------------+----------------------------------+\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment states hello-world e2172cad-1bd6-486f-800a-ab14fd781781\nState downloaded and saved to e2172cad-1bd6-486f-800a-ab14fd781781.tar\n")),(0,a.kt)("h2",{id:"deployment-destruction"},"Deployment destruction"),(0,a.kt)("p",null,"If the deployment is no longer needed, it can be destroyed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment destroy hello-world\n")),(0,a.kt)("p",null,"After a deployment has been destroyed, it can be deleted. All associated logs\nare then also deleted. Before the deployment can be deleted, it must be destroyed.\nOtherwise, an error ",(0,a.kt)("inlineCode",{parentName:"p"},"423: Locked")," is issued."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment delete hello-world\n")),(0,a.kt)("p",null,"If you no longer need to use the CLI, you can log out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl logout\nLogged out successfully.\n")),(0,a.kt)("h2",{id:"different-iac-tool-same-result"},"Different IaC tool, same result"),(0,a.kt)("p",null,"Previously, we created a simple environment with a blueprint for Terraform.\nHere is a summary of the necessary commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl template import hello-world.yaml terraform-hello-world\ntcsctl deployment create hello-world terraform-hello-world\ntcsctl deployment outputs hello-world address\ntcsctl deployment outputs hello-world private_key\ntcsctl deployment detroy hello-world\ntcsctl deployment delete hello-world\n")),(0,a.kt)("p",null,"The same result as in the previous example with the blueprint for Terraform\ncan also be produced with a different Infrastructure-as-Code tool, for example\nwith Ansible."),(0,a.kt)("p",null,"Add the following definition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," file."),(0,a.kt)("p",null,"Flavor, public network or the image to be used must be adapted accordingly depending\non the OpenStack Cloud."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'ansible-hello-world:\n  blueprint:\n    name: ansible/openstack/hello-world\n    repository: thecloudsphere/hello-world\n    repository_server: https://github.com\n  blueprint_version: main\n  inputs:\n    clouds.yaml:\n      type: file\n      path: clouds.yaml\n    "cloud name": openstack\n    flavor: "SCS-1V:1:10"\n    image: "Ubuntu 22.04"\n    prefix: "{{ tcs.name }}"\n    "public network": public\n')),(0,a.kt)("p",null,"The following commands import the blueprint for Ansible\nand then create the same environment as before with Terraform."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl template import hello-world.yaml ansible-hello-world\ntcsctl deployment create hello-ansible ansible-hello-world\ntcsctl deployment outputs hello-ansible address\ntcsctl deployment outputs hello-ansible private_key\ntcsctl deployment detroy hello-ansible\ntcsctl deployment delete hello-ansible\n")))}u.isMDXComponent=!0}}]);