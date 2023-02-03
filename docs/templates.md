---
sidebar_position: 32
---

# Templates

## Configuration

### Environment

```yaml
environment:
  name: terraform/openstack
  repository: thecloudsphere/registry
  repository_server: https://github.com
```

### Blueprint

```yaml
blueprint:
  name: terraform/openstack/hello-world
  repository: thecloudsphere/registry
  repository_server: https://github.com
blueprint_version: main
```

### Inputs

See [Inputs & Outputs](inputs-outputs) for details.

```yaml
inputs:
  clouds.yaml:
    type: file
    path: clouds.yaml
  "cloud name": openstack
  flavor: "SCS-1V:1:10"
  prefix: "{{ tcs.name }}"
  "public network": public
```

# Samples

## Ansible

``` yaml
---
ansible-hello-world:
  environment: ansible/base
  blueprint: ansible/openstack/hello-world
  blueprint_version: main
  inputs:
    clouds.yaml:
      type: file
      path: clouds.yaml
    "cloud name": openstack
    flavor: "SCS-1V:1:10"
    prefix: "{{ tcs.name }}"
    "public network": public
```

``` console
tcsctl environment import ansible/base
tcsctl blueprint import ansible/openstack/hello-world
tcsctl template import hello-world.yaml ansible-hello-world
tcsctl deployment create ansible ansible-hello-world
```

## Terraform

``` yaml
terraform-hello-world:
  environment:
    name: terraform/openstack
    repository: thecloudsphere/registry
    repository_server: https://github.com
  blueprint:
    name: terraform/openstack/hello-world
    repository: thecloudsphere/registry
    repository_server: https://github.com
  blueprint_version: main
  inputs:
    clouds.yaml:
      type: file
      path: clouds.yaml
    "cloud name": openstack
    flavor: "SCS-1V:1:10"
    prefix: "{{ tcs.name }}"
    "public network": public
```

``` console
tcsctl template import hello-world.yaml terraform-hello-world
tcsctl deployment create terraform terraform-hello-world
```
