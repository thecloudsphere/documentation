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
