---
sidebar_position: 20
---

# Getting started

The objective of the Getting Started Guide is to demonstrate all available
commands and necessary configuration files as well as concepts in a
Hello World example, or better Hello Cloudsphere example.

## Requirements

The example used in the guide deploy a small infrastructure to an OpenStack
cloud. Accordingly, access to an OpenStack account is required.

Actually, a router with an internal IPv4 network is created and an
instance is started in it. The router is assigned to an external network.
The instance is assigned a keypair, a floating IP address and a security group.

This guide uses a ``clouds.yaml`` file, which is located in the same directory
as the ``hello-world.yaml`` file. The content of this file depends very much on the
OpenStack environment used. Refer to the documentation of the operator of the
OpenStack environment accordingly.

For reference, here is a possible ``clouds.yaml``.

```yaml
---
clouds:
  openstack:
    auth:
      auth_url: https://keystone.services.a.thecloudsphere.io
      username: default-sandbox
      password: password
      project_name: default-sandbox
      project_domain_name: default
      user_domain_name: default
    region_name: RegionA
    identity_api_version: 3
```

An account on our public **The Cloudsphere** service or an account on a local Enterprise
installation is required.

## Preparations

Clone the ``hello-world`` repository.

```console
git clone https://github.com/thecloudsphere/hello-world
cd hello-world
```

Install the CLI for **The Cloudsphere** with ``pip3 install tcsctl``.
[pipenv](https://pipenv.pypa.io/en/latest/) can be used for this as well and is the
preferred way.

```console
pipenv install
pipenv shell
```

Create the file ``tcs.yaml`` which contains the details of the API and
the authentication details. If ``password`` is not present in the file, it will be
requested when using ``tcsctl login``.

```yaml
# log_level: DEBUG
profiles:
  default:
    api_url: https://api.demo.thecloudsphere.io/api/
    api_version: v1
    insecure: false
    auth:
      username: client1@thecloudsphere.io
      password: password
```

To be sure, check that the configuration is valid.

```console
tcsctl validate config tcs.yaml
Config tcs.yaml is valid.
```

Before you can use the CLI, you have to log in.

```console
tcsctl login
Logged in successfully.
```

The list of usable projects allows you to check whether the login was
successful.

```console
tcsctl project list
+----+--------------------------------+--------------------------------------+---------------------+
|    | name                           | id                                   | created_at          |
|----+--------------------------------+--------------------------------------+---------------------|
|  0 | client1@demo.thecloudsphere.io | 64ed6e39-0c05-42aa-a0ac-2267a7be5223 | 2023-01-30 16:18:22 |
+----+--------------------------------+--------------------------------------+---------------------+
```

## Template creation & import

Create the file ``hello-world.yaml`` which contains a hello-world template for a
deployment with Terraform on an OpenStack environment.

Flavor, public network or the image to be used must be adapted accordingly depending
on the OpenStack Cloud.

```yaml
terraform-hello-world:
  blueprint:
    name: terraform/openstack/hello-world
    repository: thecloudsphere/hello-world
    repository_server: https://github.com
  blueprint_version: main
  inputs:
    prefix: terraform
    clouds.yaml:
      type: file
      path: clouds.yaml
    "cloud name": openstack
    flavor: "SCS-1V-1-10"
    image: "Ubuntu 22.04"
    "public network": public
```

To be sure, check that the template is valid.

```console
tcsctl validate template hello-world.yaml
Template hello-world.yaml is valid.
```

Import the template ``terraform-hello-world`` defined in the previously created
``hello-world.yaml`` file.

```console
tcsctl template import hello-world.yaml terraform-hello-world
+---------------------+--------------------------------------+
| Field               | Value                                |
|---------------------+--------------------------------------|
| blueprint_id        | 803f3163-66b7-4c21-9c42-ef92fdb96fa6 |
| blueprint_version   | main                                 |
| environment_id      |                                      |
| environment_version |                                      |
| name                | terraform-hello-world                |
| id                  | 05aa4b88-50ed-4dd1-8006-64772ae3f0f9 |
| created_at          | 2023-01-28 22:26:02                  |
+---------------------+--------------------------------------+
```

Blueprints and environments can be listed to verify the import.

```console
tcsctl blueprint list --column name --column repository
+----+---------------------------------+----------------------------+
|    | name                            | repository                 |
|----+---------------------------------+----------------------------|
|  0 | terraform/openstack/hello-world | thecloudsphere/hello-world |
+----+---------------------------------+----------------------------+
```

If an environment has not been explicitly defined in a template, the environment
defined in the Blueprint is used and provided.

```console
tcsctl environment list --column name --column repository
+----+---------------------+-------------------------+
|    | name                | repository              |
|----+---------------------+-------------------------|
|  0 | terraform/openstack | thecloudsphere/registry |
+----+---------------------+-------------------------+
```

## Deployment creation

A deployment ``hello-world`` can now be created from the template
``terraform-hello-world``.

```console
tcsctl deployment create hello-world terraform-hello-world
+-----------------+--------------------------------------+
| Field           | Value                                |
|-----------------+--------------------------------------|
| name            | hello-world                          |
| template_id     | 05aa4b88-50ed-4dd1-8006-64772ae3f0f9 |
| id              | 5fe18e39-1b5a-4d0e-8760-448b6cf2ab19 |
| created_at      | 2023-01-28 22:35:54                  |
| action          | CREATE                               |
| deployment_type | ENVIRONMENT                          |
| status          | NONE                                 |
+-----------------+--------------------------------------+
```

When the orchestrator selects the deployment for execution, the status is changed
from ``NONE`` to ``CREATE``.

```console
tcsctl deployment list --column name --column status
+----+-------------+----------+
|    | name        | status   |
|----+-------------+----------|
|  0 | hello-world | CREATE   |
+----+-------------+----------+
```

Once the deployment has been created the status changes to ``CREATED``.

```console
tcsctl deployment list --column name --column status
+----+-------------+----------+
|    | name        | status   |
|----+-------------+----------|
|  0 | hello-world | CREATED  |
+----+-------------+----------+
```

## Outputs & control

The public IP address and the SSH keypair for the login can then be retrieved via
the ``outputs`` command.

```console
tcsctl deployment outputs hello-world address
10.100.3.41
```

```console
tcsctl deployment outputs hello-world private_key
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1aiAph+QxP0dp18b04b24oE8+e4FFdxULeKiT4vZssuVRrFy
[...]
```

With ``tcsctl deployment outputs hello-world`` it is possible to output all
available outputs.

With the parameter ``--file``, the output can be written directly to a file.

```console
tcsctl deployment outputs hello-world private_key --file id_rsa.hello-world
Output private_key from deployment hello-world was written to file id_rsa.hello-world.
```

There are blueprints that support a console, for example SSH, for control.
This console can be called up with the command ``tcsctl deployment control``.
The blueprints used in this Getting Started Guide support the control feature.
A deployment must be in status ``CREATED`` or ``RECONCILED`` for the control
feature to be usable.

```console
tcsctl deployment control hello-world
Welcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-52-generic x86_64)
[...]
ubuntu@hello-world-instance:~$
```

## Logs

The logs that were printed during the creation of the deployment can
be displayed using the ``tcsctl deployments logs`` command.

```console
tcsctl deployment logs --show hello-world create
data.openstack_networking_network_v2.public: Reading...
data.openstack_networking_network_v2.public: Read complete after 1s [id=665eea18-2b85-427c-b0bf-a6fd040cc0fc]

Terraform used the selected providers to generate the following execution
plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # local_sensitive_file.address will be created
[...]
```

All logs from a specific period for a deployment can also be displayed.

```console
tcsctl deployment logs hello-world '15 minutes ago'
+------------+--------------------------------------+---------------------+
| category   | id                                   | created_at          |
|------------+--------------------------------------+---------------------|
| import     | af7cd606-5e7b-4d34-9bd7-89d43efc2f29 | 2022-10-09 17:30:01 |
| export     | 3d10733e-670f-45b0-865c-851171982670 | 2022-10-09 17:30:04 |
| reconcile  | 7cd79e0f-a56e-436a-be08-cdf0529febe5 | 2022-10-09 17:30:04 |
| import     | 1b2d5c04-2860-45f2-a6ce-bdd6b851d896 | 2022-10-09 17:31:20 |
| destroy    | b0765dac-2f1b-4d7b-84fc-85e328bfa018 | 2022-10-09 17:31:51 |
| export     | f774401e-5b23-4c86-bc10-34ca840f155c | 2022-10-09 17:31:51 |
+------------+--------------------------------------+---------------------+
```

The ID of a log entry can be used to display a specific log entry.

```console
tcsctl deployment logs hello-world b0765dac-2f1b-4d7b-84fc-85e328bfa018
openstack_compute_keypair_v2.tcs: Refreshing state... [id=terraform-keypair]
data.openstack_networking_network_v2.public: Reading...
openstack_networking_network_v2.tcs: Refreshing state... [id=23b0a0e1-e560-4b50-9bd8-4b7ca9cfc203]
openstack_compute_secgroup_v2.tcs: Refreshing state... [id=3db448c1-9a3c-495b-aec8-514fd774fdf8]
local_sensitive_file.private_key: Refreshing state... [id=14070ff949339f2a7eb97690cd4f3f7a0c13e2a3]
openstack_networking_subnet_v2.tcs: Refreshing state... [id=acfb2765-e522-41c1-9178-fab084611a1c]
[...]
```

## States

Various IaC tools, for example Terraform, generate a state. This state is
stored on an object storage and can be downloaded.

```console
tcsctl deployment states hello-world
+--------------------------------------+----------------------------------+
| version_id                           | last_modified                    |
|--------------------------------------+----------------------------------|
| 1a381eec-14af-4016-820a-611232833e2b | 2023-02-01T21:00:08.904000+00:00 |
| e2172cad-1bd6-486f-800a-ab14fd781781 | 2023-02-01T20:59:23.626000+00:00 |
+--------------------------------------+----------------------------------+
```

```console
tcsctl deployment states hello-world e2172cad-1bd6-486f-800a-ab14fd781781
State downloaded and saved to e2172cad-1bd6-486f-800a-ab14fd781781.tar
```

## Deployment destruction

If the deployment is no longer needed, it can be destroyed.

```console
tcsctl deployment destroy hello-world
```

After a deployment has been destroyed, it can be deleted. All associated logs
are then also deleted. Before the deployment can be deleted, it must be destroyed.
Otherwise, an error ``423: Locked`` is issued.

```console
tcsctl deployment delete hello-world
```

If you no longer need to use the CLI, you can log out.

```console
tcsctl logout
Logged out successfully.
```

## Different IaC tool, same result

Previously, we created a simple environment with a blueprint for Terraform.
Here is a summary of the necessary commands

```console
tcsctl template import hello-world.yaml terraform-hello-world
tcsctl deployment create hello-world terraform-hello-world
tcsctl deployment outputs hello-world address
tcsctl deployment outputs hello-world private_key
tcsctl deployment detroy hello-world
tcsctl deployment delete hello-world
```

The same result as in the previous example with the blueprint for Terraform
can also be produced with a different Infrastructure-as-Code tool, for example
with Ansible.

Add the following definition to the ``hello-world.yaml`` file.

Flavor, public network or the image to be used must be adapted accordingly depending
on the OpenStack Cloud.

```yaml
ansible-hello-world:
  blueprint:
    name: ansible/openstack/hello-world
    repository: thecloudsphere/hello-world
    repository_server: https://github.com
  blueprint_version: main
  inputs:
    clouds.yaml:
      type: file
      path: clouds.yaml
    "cloud name": openstack
    flavor: "SCS-1V-1-10"
    image: "Ubuntu 22.04"
    prefix: "{{ tcs.name }}"
    "public network": public
```

The following commands import the blueprint for Ansible
and then create the same environment as before with Terraform.

```console
tcsctl template import hello-world.yaml ansible-hello-world
tcsctl deployment create hello-ansible ansible-hello-world
tcsctl deployment outputs hello-ansible address
tcsctl deployment outputs hello-ansible private_key
tcsctl deployment detroy hello-ansible
tcsctl deployment delete hello-ansible
```
