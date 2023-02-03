---
sidebar_position: 33
---

# Flows

## Configuration

```yaml
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
