"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?l.createElement(h,a(a({ref:t},c),{},{components:n})):l.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const o={sidebar_position:20},a="Getting started",i={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"The objective of the Getting Started Guide is to demonstrate all available",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Environments",permalink:"/docs/environments"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Preparations",id:"preparations",level:2},{value:"Template creation &amp; import",id:"template-creation--import",level:2},{value:"Deployment creation",id:"deployment-creation",level:2},{value:"Outputs &amp; control",id:"outputs--control",level:2},{value:"Logs",id:"logs",level:2},{value:"States",id:"states",level:2},{value:"Deployment destruction",id:"deployment-destruction",level:2},{value:"Different Infrastructure-as-Code tool, same result",id:"different-infrastructure-as-code-tool-same-result",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"The objective of the Getting Started Guide is to demonstrate all available\ncommands and necessary configuration files as well as concepts in a\nHello World example, or better Hello Cloudsphere example."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"The example used in the guide deploy a small infrastructure to an OpenStack\ncloud. Accordingly, access to an OpenStack account is required."),(0,r.kt)("p",null,"Actually, a router with an internal IPv4 network is created and an\ninstance is started in it. The router is assigned to an external network.\nThe instance is assigned a keypair, a floating IP address and a security group."),(0,r.kt)("p",null,"This guide uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," file, which is located in the same directory\nas the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," file. The content of this file depends very much on the\nOpenStack environment used. Refer to the documentation of the operator of the\nOpenStack environment accordingly."),(0,r.kt)("p",null,"For reference, here is a possible ",(0,r.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nclouds:\n  openstack:\n    auth:\n      auth_url: https://keystone.services.a.thecloudsphere.io\n      username: default-sandbox\n      password: password\n      project_name: default-sandbox\n      project_domain_name: default\n      user_domain_name: default\n    region_name: RegionA\n    identity_api_version: 3\n")),(0,r.kt)("p",null,"Prerequisite for the use is an account on our public service or on a\nlocal on-premise installation."),(0,r.kt)("p",null,"An account on our public The Cloudsphere service or an account on a local Enterprise\ninstallation is required."),(0,r.kt)("h2",{id:"preparations"},"Preparations"),(0,r.kt)("p",null,"Install the CLI for The Cloudsphere with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip3 install tcsctl"),"."),(0,r.kt)("p",null,"Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"tcs.yaml")," which contains the details of the API and\nthe authentication details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# log_level: DEBUG\nprofiles:\n  default:\n    api_url: https://api.demo.thecloudsphere.io/api/\n    api_version: v1\n    insecure: false\n    auth:\n      username: client1@thecloudsphere.io\n      password: password\n")),(0,r.kt)("p",null,"To be sure, check that the configuration is valid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl validate config tcs.yaml\nConfig tcs.yaml is valid.\n")),(0,r.kt)("p",null,"Before you can use the CLI, you have to log in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl login\nPassword:\nLogged in successfully.\n")),(0,r.kt)("p",null,"The list of visible projects allows you to check whether the login was\nsuccessful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl project list\n+----+--------------------------------+--------------------------------------+---------------------+\n|    | name                           | id                                   | created_at          |\n|----+--------------------------------+--------------------------------------+---------------------|\n|  0 | client1@demo.thecloudsphere.io | 64ed6e39-0c05-42aa-a0ac-2267a7be5223 | 2023-01-30 16:18:22 |\n+----+--------------------------------+--------------------------------------+---------------------+\n")),(0,r.kt)("h2",{id:"template-creation--import"},"Template creation & import"),(0,r.kt)("p",null,"Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," which contains a hello-world template for a\ndeployment with Terraform on an OpenStack environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'terraform-hello-world:\n  environment:\n    name: terraform/openstack\n    repository: thecloudsphere/registry\n    repository_server: https://github.com\n  blueprint:\n    name: terraform/openstack/hello-world\n    repository: thecloudsphere/registry\n    repository_server: https://github.com\n  blueprint_version: main\n  inputs:\n    prefix: terraform\n    clouds.yaml:\n      type: file\n      path: clouds.yaml\n    "cloud name": openstack\n    flavor: "SCS-1V:1:10"\n    "public network": public\n')),(0,r.kt)("p",null,"To be sure, check that the template is valid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl validate template hello-world.yaml\nTemplate hello-world.yaml is valid.\n")),(0,r.kt)("p",null,"Import the template ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-hello-world")," defined in the previously created\n",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl template import hello-world.yaml terraform-hello-world\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n|---------------------+--------------------------------------|\n| blueprint_id        | 803f3163-66b7-4c21-9c42-ef92fdb96fa6 |\n| blueprint_version   | main                                 |\n| environment_id      | d4135a7b-4eff-4e25-9f61-618b81b9a147 |\n| environment_version |                                      |\n| name                | terraform-hello-world                |\n| id                  | 05aa4b88-50ed-4dd1-8006-64772ae3f0f9 |\n| created_at          | 2023-01-28 22:26:02                  |\n+---------------------+--------------------------------------+\n")),(0,r.kt)("p",null,"Blueprints and environments can be listed to verify the import."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl environment list --column name --column repository\n+----+---------------------+-------------------------+\n|    | name                | repository              |\n|----+---------------------+-------------------------|\n|  0 | terraform/openstack | thecloudsphere/registry |\n+----+---------------------+-------------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl blueprint list --column name --column repository\n+----+---------------------------------+-------------------------+\n|    | name                            | repository              |\n|----+---------------------------------+-------------------------|\n|  0 | terraform/openstack/hello-world | thecloudsphere/registry |\n+----+---------------------------------+-------------------------+\n")),(0,r.kt)("h2",{id:"deployment-creation"},"Deployment creation"),(0,r.kt)("p",null,"A deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world")," can now be created from the template\n",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-hello-world"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment create hello-world terraform-hello-world\n+-----------------+--------------------------------------+\n| Field           | Value                                |\n|-----------------+--------------------------------------|\n| name            | hello-world                          |\n| template_id     | 05aa4b88-50ed-4dd1-8006-64772ae3f0f9 |\n| id              | 5fe18e39-1b5a-4d0e-8760-448b6cf2ab19 |\n| created_at      | 2023-01-28 22:35:54                  |\n| action          | CREATE                               |\n| deployment_type | ENVIRONMENT                          |\n| status          | NONE                                 |\n+-----------------+--------------------------------------+\n")),(0,r.kt)("p",null,"When the orchestrator selects the deployment for execution, the status is changed\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"NONE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment list --column name --column status\n+----+-------------+----------+\n|    | name        | status   |\n|----+-------------+----------|\n|  0 | hello-world | CREATE   |\n+----+-------------+----------+\n")),(0,r.kt)("p",null,"Once the deployment has been created the status changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment list --column name --column status\n+----+-------------+----------+\n|    | name        | status   |\n|----+-------------+----------|\n|  0 | hello-world | CREATED  |\n+----+-------------+----------+\n")),(0,r.kt)("h2",{id:"outputs--control"},"Outputs & control"),(0,r.kt)("p",null,"The public IP address and the SSH keypair for the login can then be retrieved via\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment outputs hello-world address\n10.100.3.41\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment outputs hello-world private_key\n-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA1aiAph+QxP0dp18b04b24oE8+e4FFdxULeKiT4vZssuVRrFy\n[...]\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl deployment outputs hello-world")," it is possible to output all\navailable outputs."),(0,r.kt)("p",null,"With the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--file"),", the output can be written directly to a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment outputs hello-world private_key --file id_rsa.hello-world\nOutput private_key from deployment hello-world was written to file id_rsa.hello-world.\n")),(0,r.kt)("p",null,"There are blueprints that support a console, for example SSH, for control.\nThis console can be called up with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl deployment control"),".\nThe blueprints used in this Getting Started Guide support the control feature.\nA deployment must be in status ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RECONCILED")," for the control\nfeature to be usable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment control hello-world\nWelcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-52-generic x86_64)\n[...]\nubuntu@hello-world-instance:~$\n")),(0,r.kt)("h2",{id:"logs"},"Logs"),(0,r.kt)("p",null,"The logs that were printed during the creation of the deployment can\nbe displayed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl deployments logs")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment logs --show hello-world create\ndata.openstack_networking_network_v2.public: Reading...\ndata.openstack_networking_network_v2.public: Read complete after 1s [id=665eea18-2b85-427c-b0bf-a6fd040cc0fc]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n  + create\n\nTerraform will perform the following actions:\n\n  # local_sensitive_file.address will be created\n[...]\n")),(0,r.kt)("p",null,"All logs from a specific period for a deployment can also be displayed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment logs hello-world '15 minutes ago'\n+------------+--------------------------------------+---------------------+\n| category   | id                                   | created_at          |\n|------------+--------------------------------------+---------------------|\n| import     | af7cd606-5e7b-4d34-9bd7-89d43efc2f29 | 2022-10-09 17:30:01 |\n| export     | 3d10733e-670f-45b0-865c-851171982670 | 2022-10-09 17:30:04 |\n| reconcile  | 7cd79e0f-a56e-436a-be08-cdf0529febe5 | 2022-10-09 17:30:04 |\n| import     | 1b2d5c04-2860-45f2-a6ce-bdd6b851d896 | 2022-10-09 17:31:20 |\n| destroy    | b0765dac-2f1b-4d7b-84fc-85e328bfa018 | 2022-10-09 17:31:51 |\n| export     | f774401e-5b23-4c86-bc10-34ca840f155c | 2022-10-09 17:31:51 |\n+------------+--------------------------------------+---------------------+\n")),(0,r.kt)("p",null,"The ID of a log entry can be used to display a specific log entry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment logs hello-world b0765dac-2f1b-4d7b-84fc-85e328bfa018\nopenstack_compute_keypair_v2.tcs: Refreshing state... [id=terraform-keypair]\ndata.openstack_networking_network_v2.public: Reading...\nopenstack_networking_network_v2.tcs: Refreshing state... [id=23b0a0e1-e560-4b50-9bd8-4b7ca9cfc203]\nopenstack_compute_secgroup_v2.tcs: Refreshing state... [id=3db448c1-9a3c-495b-aec8-514fd774fdf8]\nlocal_sensitive_file.private_key: Refreshing state... [id=14070ff949339f2a7eb97690cd4f3f7a0c13e2a3]\nopenstack_networking_subnet_v2.tcs: Refreshing state... [id=acfb2765-e522-41c1-9178-fab084611a1c]\n[...]\n")),(0,r.kt)("h2",{id:"states"},"States"),(0,r.kt)("p",null,"Various IaC tools, for example Terraform, generate a state. This state is\nstored on an object storage and can be downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment states hello-world\n+--------------------------------------+----------------------------------+\n| version_id                           | last_modified                    |\n|--------------------------------------+----------------------------------|\n| 1a381eec-14af-4016-820a-611232833e2b | 2023-02-01T21:00:08.904000+00:00 |\n| e2172cad-1bd6-486f-800a-ab14fd781781 | 2023-02-01T20:59:23.626000+00:00 |\n+--------------------------------------+----------------------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment states hello-world e2172cad-1bd6-486f-800a-ab14fd781781\nState downloaded and saved to e2172cad-1bd6-486f-800a-ab14fd781781.tar\n")),(0,r.kt)("h2",{id:"deployment-destruction"},"Deployment destruction"),(0,r.kt)("p",null,"If the deployment is no longer needed, it can be destroyed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment destroy hello-world\n")),(0,r.kt)("p",null,"After a deployment has been destroyed, it can be deleted. All associated logs\nare then also deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl deployment delete hello-world\n")),(0,r.kt)("p",null,"If you no longer need to use the CLI, you can log out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl logout\nLogged out successfully.\n")),(0,r.kt)("h2",{id:"different-infrastructure-as-code-tool-same-result"},"Different Infrastructure-as-Code tool, same result"),(0,r.kt)("p",null,"Previously, we created a simple environment with a blueprint for Terraform.\nHere is a summary of the necessary commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl template import hello-world.yaml terraform-hello-world\ntcsctl deployment create hello-world terraform-hello-world\ntcsctl deployment outputs hello-world address\ntcsctl deployment outputs hello-world private_key\ntcsctl deployment detroy hello-world\ntcsctl deployment delete hello-world\n")),(0,r.kt)("p",null,"The same result as in the previous example with the blueprint for Terraform\ncan also be produced with a different Infrastructure-as-Code tool For example\nwith Ansible. The following commands import a prepared blueprint for Ansible\nand then create the same environment as before with Terraform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tcsctl template import hello-world.yaml ansible-hello-world\ntcsctl deployment create hello-ansible ansible-hello-world\ntcsctl deployment outputs hello-ansible address\ntcsctl deployment outputs hello-ansible private_key\ntcsctl deployment detroy hello-ansible\ntcsctl deployment delete hello-ansible\n")))}d.isMDXComponent=!0}}]);