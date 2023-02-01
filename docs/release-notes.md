---
sidebar_position: 100
---

# Release notes

The release notes were launched on 11.10.2022. At this point, the
minimum functionality of The Cloudsphere was achieved. The MVP was
usable both via API itself and via the CLI (`tcsctl`).

A UI was not yet available at that time.

## 1.0.0 (Nighthawk)

Version 1.0.0 is currently in progress and not yet published.

Version 1.0.0 contains the status of the MVP as well as all enhancements
already identified and implemented during the evaluation phase of the
MVP.

### Other

-   Python 3.11 is now used as standard in the service container image
-   This project was initially developed under the internal development
    name Timon. In preparation for the first release, it was renamed
    "The Cloudsphere" (TCS for short).

### Blueprint: environment overrides

With environment overrides it is possible to customise certain
predefined properties in a blueprint when executing an environment on a
blueprint.

The following properties can be adjusted (if supported by the
environment used).

-   `blueprint_source`
-   `blueprint_source_key`
-   `blueprint_version`
-   `working_directory`
-   `outputs_directory`
-   `makefile`
-   `makefile_pre_processing`
-   `makefile_processing`
-   `makefile_post_processing`

The following sample snippet is from the `osism/testbed` blueprint.

There, the blueprint is not imported from the registry but from the
external repository <https://github.com/osism/testbed.git>. The
directory for the execution of Terraform in this case is
`/processing/terraform` (instead of `/processing`). The outputs are not
in `/outputs` but in `/processing/terraform`. For the execution of
Terraform, `/processing/terraform/Makefile` is used instead of
`/processing/Makefile`.

``` yaml
environment:
  repository: timontech/registry
  name: terraform/openstack
  version: 1.3.2
  overrides:
    blueprint_source: https://github.com/osism/testbed.git
    # blueprint_source_key:
    # blueprint_version:
    working_directory: /processing/terraform
    outputs_directory: /processing/terraform
    # makefile:
    # makefile_pre_processing:
    makefile_processing: /processing/terraform/Makefile
    # makefile_post_processing:
```

The overrides supported by an environment can be defined via the
parameter `supported_overrides` at the environment. If
`supported_overrides` is not set, no overrides are supported. All
supported overrides must be explicitly listed. If overrides are set that
are not supported by an environment, a `WARNING` is issued and the
override is ignored.

### Blueprint/Environment/Template: use of template strings

When executing a deployment, certain variables are set that always can
be used.

-   `timon.id`: the UUID of a deployment
-   `timon.name`: the name of a deployment
-   `timon.created_at`: the timestamp when a deployment was initially
    requested

These variables can now be accessed within the `inputs` and `outputs` by
using [Jinja2](https://jinja.palletsprojects.com/en/3.1.x/).

``` yaml
inputs:
  prefix: "{{ timon.id }}"
```

Additional variables are available in the output. In addition to the
standard `timon.*` templates, inputs can also be accessed there.
However, it is only possible to access inputs of the type `environment`.

For example, if the following input is defined for a blueprint, it can
be accessed in the `outputs` via `inputs.environment`.

``` yaml
inputs:
  - name: environment
    destination:
      path: ENVIRONMENT
      type: environment
    default: betacloud
    required: false
    description: |
      Environment to use.

outputs:
  - name: private_key
    source:
      path: ".id_rsa.{{ inputs.environment }}"
      type: ssh
    description: |
      Private SSH key to access the manager instance
    visibility: private
```

### API: deployment states endpoint

The deployment states endpoint can be used to list all existing states
in a deployment or to download a specific state.

-   `/deployments/{project_id}/{deployment_id}/states`
-   `/deployments/{project_id}/{deployment_id}/states/{version_id}`

The command in the CLI is `tcsctl deployment states`. For the listing of
all states, only the name or the ID of the deployment is given.

``` console
tcsctl deployment states hello-world
+--------------------------------------+----------------------------------+
| version_id                           | last_modified                    |
|--------------------------------------+----------------------------------|
| adad1499-8aca-4b54-ba30-86fb7dfc9412 | 2022-10-16T16:08:26.746000+00:00 |
| 24962ce5-92dc-4a87-a27e-487859f840e4 | 2022-10-16T15:45:04.028000+00:00 |
| 4c9ef664-f89b-460d-97eb-be0c951e838d | 2022-10-16T15:31:24.197000+00:00 |
| aafcf490-d782-4c7d-80b1-38a9ce063147 | 2022-10-16T15:28:30.014000+00:00 |
+--------------------------------------+----------------------------------+
```

To download a specific state, the ID of the state is also specified.

``` console
tcsctl deployment states hello-world adad1499-8aca-4b54-ba30-86fb7dfc9412
```

The status is then stored on the local file system in the working
directory in a file with the name
`adad1499-8aca-4b54-ba30-86fb7dfc9412.tar`.

### Template: overwrite the environment

With the parameters `environment` and `environment_version`, it is
possible to overwrite the environment set via the selected blueprint and
its version during a template.

In blueprint `terraform/openstack/hello-world`, the `terraform/opentack`
environment is actually used. In this case, the `python/base`
environment version `3.10` is used instead.

``` yaml
python-sample:
  blueprint: terraform/openstack/hello-world
  blueprint_version: main
  environment: python/base
  environment_version: "3.10"
```

### New feature: Flows

The purpose of flows is to use the output of a deployment as input for
another deployment.

For example, it is possible to first create an infrastructure with a
blueprint for Terraform and then deploy on the created infrastructure
with a blueprint for Ansible. Finally, everything can be registered to a
local asset management with a script executed in a Python environment.

Any number of deployments can be linked together via flows. It is
possible to create new deployments when starting a flow or to use
existing deployments. Or both.

A flow is executed only once. Deployments created by the flow remain
after completion and are not removed. When a flow is destroyed, all
deployments are destroyed independently of each other at the moment.

``` yaml
flow-sample:
  name: Sample for a flow
  description: |
    This is a simple sample for a flow.
  steps:
    - name: first step
      description: |
        This is the first step.
      template: python-sample
    - name: second step
      description: |
        This is the second step.
      template: python-sample
      depends_on: first step
      outputs_from: first step
      state_from: first step
```

### New CLI feature: Specify the column(s) to include

With the `list` command, the columns can now be filtered using the
`--column` parameter. The parameter can be repeated to show multiple
columns

``` console
tcsctl deployment list --column name --column status
+----+-------------+----------+
|    | name        | status   |
|----+-------------+----------|
|  0 | hello-world | CREATED  |
+----+-------------+----------+
```

### New CLI feature: Write outpus to file instead of stdout

With the parameter `--file`, the output of a deployment can be written
directly to a file.

``` console
tcsctl deployment outputs hello-world private_key --file id_rsa.hello-world
Output private_key from deployment hello-world was written to file id_rsa.hello-world.
```

### New CLI feature: Control of deployments

There are blueprints that support a console, for example SSH, for
control. This console can be called up with the command
`tcsctl deployment control`. A deployment must be in status CREATED or
RECONCILED for the control feature to be usable.

Currently, only SSH is supported. In the future, other tools such as
`kubectl` will be added.

``` console
tcsctl deployment control hello-world
Welcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-52-generic x86_64)
[...]
ubuntu@hello-world-instance:~$
```

### Blueprint: Control of deployments

The control object can be used to define the necessary values for the
`tcsctl deployment control` command in a blueprint. The use of outputs
of the created deployments is possible via templates.

``` yaml
control:
  type: ssh
  arguments:
    - name: destination
      value: "{{ outputs.address }}"
      type: string
    - name: identity_file
      value: "{{ outputs.private_key }}"
      type: file
    - name: user
      value: ubuntu
      type: string
```
