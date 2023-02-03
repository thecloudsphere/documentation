---
sidebar_position: 31
---

# Blueprints

## Configuration

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
reconcile_schedule: "*/15 * * * *"
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

### Inputs & Outputs

See [Inputs & Outputs](inputs-outputs) for details.

```yaml
inputs: []
outputs: []
```
