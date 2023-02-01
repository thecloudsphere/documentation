---
sidebar_position: 31
---

# Blueprints

## Configuration (.tcs.yaml)

### General information

```yaml
author: Christian Berendt
repository_server: https://github.com
repository: thecloudsphere/registry
name: ansible/openstack/hello-world
versions:
  - version: main
description: |
  Start a single instance on an OpenStack environment
schedule: "*/15 * * * *"
```

### Environment

```yaml
environment:
  repository: thecloudsphere/registry
  name: ansible/base
  version: 7.1.0
```

### Control

```yaml
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

### Inputs

```yaml
inputs:
  - name: clouds.yaml
    destination:
      path: clouds.yaml
      type: file
    required: true
    description: |
      clouds.yaml is a configuration file that contains everything needed to connect
      to one or more clouds. It may contain private information and is generally
      considered private to a user.
    visibility: private

  - name: cloud name
    destination:
      path: ANSIBLE_VAR_provider_cloud
      type: environment
    default: openstack
    required: false
    description: |
      Entry from the clouds.yaml to be used.
```

### Outputs

```yaml
outputs:
  - name: private_key
    source:
      path: private_key
      type: ssh
    description: |
      Private SSH key to access the instance
    visibility: private

  - name: address
    source:
      path: address
      type: ipv4address
    description: |
      IP address to access the instance
```
