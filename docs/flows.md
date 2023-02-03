---
sidebar_position: 33
---

# Flows

## Configuration

```yaml
hello-world:
  name: Hello world example for a flow
  description: |
    This is a simple hello world example for a flow.
  control: Create infrastructure with terraform
  steps:
    - name: Create infrastructure with terraform
      description: |
        This is the first step of the flow. It creates the necessary
        infrastructure with Terraform on an OpenStack Cloud.
      template: terraform-hello-world
    - name: Deploy jupyterhub with Ansible
      description: |
        This is the second step of the flow. Docker is installed on the
        previously created infrastructure and then Jupyterhub is started
        as a service.
      template: ansible-jupyterhub
      depends_on: Create infrastructure with terraform
      outputs_from: Create infrastructure with terraform
      state_from: Create infrastructure with terraform
```
