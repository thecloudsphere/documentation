"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:100},o="Release notes",l={unversionedId:"release-notes",id:"release-notes",title:"Release notes",description:"The release notes were launched on 11.10.2022. At this point, the",source:"@site/docs/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/docs/release-notes",draft:!1,editUrl:"https://github.com/thecloudsphere/documentation/tree/main/docs/release-notes.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/docs/permissions"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},s={},p=[{value:"1.0.0 (Nighthawk)",id:"100-nighthawk",level:2},{value:"Other",id:"other",level:3},{value:"Blueprint: environment overrides",id:"blueprint-environment-overrides",level:3},{value:"Blueprint/Environment/Template: use of template strings",id:"blueprintenvironmenttemplate-use-of-template-strings",level:3},{value:"API: deployment states endpoint",id:"api-deployment-states-endpoint",level:3},{value:"Template: overwrite the environment",id:"template-overwrite-the-environment",level:3},{value:"New feature: Flows",id:"new-feature-flows",level:3},{value:"New CLI feature: Specify the column(s) to include",id:"new-cli-feature-specify-the-columns-to-include",level:3},{value:"New CLI feature: Write outpus to file instead of stdout",id:"new-cli-feature-write-outpus-to-file-instead-of-stdout",level:3},{value:"New CLI feature: Control of deployments",id:"new-cli-feature-control-of-deployments",level:3},{value:"Blueprint: Control of deployments",id:"blueprint-control-of-deployments",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release notes"),(0,r.kt)("p",null,"The release notes were launched on 11.10.2022. At this point, the\nminimum functionality of The Cloudsphere was achieved. The MVP was\nusable both via API itself and via the CLI (",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl"),"). A UI was not\nyet available at that time."),(0,r.kt)("h2",{id:"100-nighthawk"},"1.0.0 (Nighthawk)"),(0,r.kt)("p",null,"Version 1.0.0 is currently in progress and not yet published."),(0,r.kt)("p",null,"Version 1.0.0 contains the status of the MVP as well as all enhancements\nalready identified and implemented during the evaluation phase of the\nMVP."),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python 3.11 is now used as standard in the service container image"),(0,r.kt)("li",{parentName:"ul"},'This project was initially developed under the internal development\nname Timon. In preparation for the first release, it was renamed\n"The Cloudsphere" (TCS for short).'),(0,r.kt)("li",{parentName:"ul"},"The documentation has been switched from Sphinx to Docusaurus and\nis now published on ",(0,r.kt)("a",{parentName:"li",href:"https://thecloudsphere.io"},"thecloudsphere.io"),"."),(0,r.kt)("li",{parentName:"ul"},"The Getting Started Guide from the README of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/thecloudsphere/tcsctl"},"thecloudsphere/tcsctl"),"\nhas been integrated into the documentation.")),(0,r.kt)("h3",{id:"blueprint-environment-overrides"},"Blueprint: environment overrides"),(0,r.kt)("p",null,"With environment overrides it is possible to customise certain\npredefined properties in a blueprint when executing an environment on a\nblueprint."),(0,r.kt)("p",null,"The following properties can be adjusted (if supported by the\nenvironment used)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint_source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint_source_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint_version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"working_directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs_directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"makefile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"makefile_pre_processing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"makefile_processing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"makefile_post_processing"))),(0,r.kt)("p",null,"The following sample snippet is from the ",(0,r.kt)("inlineCode",{parentName:"p"},"osism/testbed")," blueprint."),(0,r.kt)("p",null,"There, the blueprint is not imported from the registry but from the\nexternal repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/osism/testbed.git"},"https://github.com/osism/testbed.git"),". The\ndirectory for the execution of Terraform in this case is\n",(0,r.kt)("inlineCode",{parentName:"p"},"/processing/terraform")," (instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"/processing"),"). The outputs are not\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"/outputs")," but in ",(0,r.kt)("inlineCode",{parentName:"p"},"/processing/terraform"),". For the execution of\nTerraform, ",(0,r.kt)("inlineCode",{parentName:"p"},"/processing/terraform/Makefile")," is used instead of\n",(0,r.kt)("inlineCode",{parentName:"p"},"/processing/Makefile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"environment:\n  repository: timontech/registry\n  name: terraform/openstack\n  version: 1.3.2\n  overrides:\n    blueprint_source: https://github.com/osism/testbed.git\n    # blueprint_source_key:\n    # blueprint_version:\n    working_directory: /processing/terraform\n    outputs_directory: /processing/terraform\n    # makefile:\n    # makefile_pre_processing:\n    makefile_processing: /processing/terraform/Makefile\n    # makefile_post_processing:\n")),(0,r.kt)("p",null,"The overrides supported by an environment can be defined via the\nparameter ",(0,r.kt)("inlineCode",{parentName:"p"},"supported_overrides")," at the environment. If\n",(0,r.kt)("inlineCode",{parentName:"p"},"supported_overrides")," is not set, no overrides are supported. All\nsupported overrides must be explicitly listed. If overrides are set that\nare not supported by an environment, a ",(0,r.kt)("inlineCode",{parentName:"p"},"WARNING")," is issued and the\noverride is ignored."),(0,r.kt)("h3",{id:"blueprintenvironmenttemplate-use-of-template-strings"},"Blueprint/Environment/Template: use of template strings"),(0,r.kt)("p",null,"When executing a deployment, certain variables are set that always can\nbe used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timon.id"),": the UUID of a deployment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timon.name"),": the name of a deployment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timon.created_at"),": the timestamp when a deployment was initially\nrequested")),(0,r.kt)("p",null,"These variables can now be accessed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," by\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/"},"Jinja2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'inputs:\n  prefix: "{{ timon.id }}"\n')),(0,r.kt)("p",null,"Additional variables are available in the output. In addition to the\nstandard ",(0,r.kt)("inlineCode",{parentName:"p"},"timon.*")," templates, inputs can also be accessed there.\nHowever, it is only possible to access inputs of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"environment"),"."),(0,r.kt)("p",null,"For example, if the following input is defined for a blueprint, it can\nbe accessed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs.environment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'inputs:\n  - name: environment\n    destination:\n      path: ENVIRONMENT\n      type: environment\n    default: betacloud\n    required: false\n    description: |\n      Environment to use.\n\noutputs:\n  - name: private_key\n    source:\n      path: ".id_rsa.{{ inputs.environment }}"\n      type: ssh\n    description: |\n      Private SSH key to access the manager instance\n    visibility: private\n')),(0,r.kt)("h3",{id:"api-deployment-states-endpoint"},"API: deployment states endpoint"),(0,r.kt)("p",null,"The deployment states endpoint can be used to list all existing states\nin a deployment or to download a specific state."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/deployments/{project_id}/{deployment_id}/states")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/deployments/{project_id}/{deployment_id}/states/{version_id}"))),(0,r.kt)("p",null,"The command in the CLI is ",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl deployment states"),". For the listing of\nall states, only the name or the ID of the deployment is given."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment states hello-world\n+--------------------------------------+----------------------------------+\n| version_id                           | last_modified                    |\n|--------------------------------------+----------------------------------|\n| adad1499-8aca-4b54-ba30-86fb7dfc9412 | 2022-10-16T16:08:26.746000+00:00 |\n| 24962ce5-92dc-4a87-a27e-487859f840e4 | 2022-10-16T15:45:04.028000+00:00 |\n| 4c9ef664-f89b-460d-97eb-be0c951e838d | 2022-10-16T15:31:24.197000+00:00 |\n| aafcf490-d782-4c7d-80b1-38a9ce063147 | 2022-10-16T15:28:30.014000+00:00 |\n+--------------------------------------+----------------------------------+\n")),(0,r.kt)("p",null,"To download a specific state, the ID of the state is also specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment states hello-world adad1499-8aca-4b54-ba30-86fb7dfc9412\n")),(0,r.kt)("p",null,"The status is then stored on the local file system in the working\ndirectory in a file with the name\n",(0,r.kt)("inlineCode",{parentName:"p"},"adad1499-8aca-4b54-ba30-86fb7dfc9412.tar"),"."),(0,r.kt)("h3",{id:"template-overwrite-the-environment"},"Template: overwrite the environment"),(0,r.kt)("p",null,"With the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"environment_version"),", it is\npossible to overwrite the environment set via the selected blueprint and\nits version during a template."),(0,r.kt)("p",null,"In blueprint ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform/openstack/hello-world"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform/opentack"),"\nenvironment is actually used. In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"python/base"),"\nenvironment version ",(0,r.kt)("inlineCode",{parentName:"p"},"3.10")," is used instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'python-sample:\n  blueprint: terraform/openstack/hello-world\n  blueprint_version: main\n  environment: python/base\n  environment_version: "3.10"\n')),(0,r.kt)("h3",{id:"new-feature-flows"},"New feature: Flows"),(0,r.kt)("p",null,"The purpose of flows is to use the output of a deployment as input for\nanother deployment."),(0,r.kt)("p",null,"For example, it is possible to first create an infrastructure with a\nblueprint for Terraform and then deploy on the created infrastructure\nwith a blueprint for Ansible. Finally, everything can be registered to a\nlocal asset management with a script executed in a Python environment."),(0,r.kt)("p",null,"Any number of deployments can be linked together via flows. It is\npossible to create new deployments when starting a flow or to use\nexisting deployments. Or both."),(0,r.kt)("p",null,"A flow is executed only once. Deployments created by the flow remain\nafter completion and are not removed. When a flow is destroyed, all\ndeployments are destroyed independently of each other at the moment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"flow-sample:\n  name: Sample for a flow\n  description: |\n    This is a simple sample for a flow.\n  steps:\n    - name: first step\n      description: |\n        This is the first step.\n      template: python-sample\n    - name: second step\n      description: |\n        This is the second step.\n      template: python-sample\n      depends_on: first step\n      outputs_from: first step\n      state_from: first step\n")),(0,r.kt)("h3",{id:"new-cli-feature-specify-the-columns-to-include"},"New CLI feature: Specify the column(s) to include"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," command, the columns can now be filtered using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--column")," parameter. The parameter can be repeated to show multiple\ncolumns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment list --column name --column status\n+----+-------------+----------+\n|    | name        | status   |\n|----+-------------+----------|\n|  0 | hello-world | CREATED  |\n+----+-------------+----------+\n")),(0,r.kt)("h3",{id:"new-cli-feature-write-outpus-to-file-instead-of-stdout"},"New CLI feature: Write outpus to file instead of stdout"),(0,r.kt)("p",null,"With the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--file"),", the output of a deployment can be written\ndirectly to a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment outputs hello-world private_key --file id_rsa.hello-world\nOutput private_key from deployment hello-world was written to file id_rsa.hello-world.\n")),(0,r.kt)("h3",{id:"new-cli-feature-control-of-deployments"},"New CLI feature: Control of deployments"),(0,r.kt)("p",null,"There are blueprints that support a console, for example SSH, for\ncontrol. This console can be called up with the command\n",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl deployment control"),". A deployment must be in status ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"RECONCILED")," for the control feature to be usable."),(0,r.kt)("p",null,"Currently, only SSH is supported. In the future, other tools such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," will be added."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tcsctl deployment control hello-world\nWelcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-52-generic x86_64)\n[...]\nubuntu@hello-world-instance:~$\n")),(0,r.kt)("h3",{id:"blueprint-control-of-deployments"},"Blueprint: Control of deployments"),(0,r.kt)("p",null,"The control object can be used to define the necessary values for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"tcsctl deployment control")," command in a blueprint. The use of outputs\nof the created deployments is possible via templates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'control:\n  type: ssh\n  arguments:\n    - name: destination\n      value: "{{ outputs.address }}"\n      type: string\n    - name: identity_file\n      value: "{{ outputs.private_key }}"\n      type: file\n    - name: user\n      value: ubuntu\n      type: string\n')))}u.isMDXComponent=!0}}]);