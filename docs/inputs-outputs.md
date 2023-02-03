---
sidebar_position: 25
---

# Inputs & Outputs

Inputs and outputs can be defined for environments and blueprints to enable inputs
and outputs.

## Inputs

An input makes contents available via files or environment variables. All currently usable
types are listed under [Types](#types).

It is possible to define the visibility of the input via the optional ``visibility``
argument. Possible values are ``public`` and ``private``.

The ``required`` argument can be used to specify whether an input is mandatory or not. 
Possible values are ``true`` and ``false``.

If an input is not required, an optional default value can be set with the ``default``
argument. This will be used if no input is given.

If an input is not required and no default has been set and the input is not passed,
the corresponding file or environment variable is not created.

The input can be described via ``description``. This argument is not optional. A description
must be given for each input. Markdown can be used to format the descriptions in the UI.

```yaml
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
```

### Types

#### Environment

Input is provided via an environment variable. The value set for ``path`` is used for the
name of the environment variable.

```yaml
- name: cloud name
  destination:
    path: ANSIBLE_VAR_provider_cloud
    type: environment
  default: openstack
  required: false
  description: |
    Entry from the clouds.yaml to be used.
```

The input is available in the environment variable ``ANSIBLE_VAR_provider_cloud`` in the
deployment.

#### File

Write an input to a file on the ``/input`` volume. The ``path`` argument is always
relative to ``/input``.

```yaml
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
```

The input is available in the file ``/inputs/clouds.yaml`` in the
deployment. From there it is copied to ``/processing`` when the deployment is initialised.

## Outputs

An output makes contents of files in the ``/output`` volume accessible after execution
of a deployment. In order for defined outputs to be usable, the corresponding file must
be created by the deployment beforehand.

Here is an example of an Ansible based deployment that writes a public IP address to the
``/output`` volume in the file ``address``.

```yaml
- name: Write floating ip address to /output/address
  ansible.builtin.copy:
    dest: /output/address
    content: "{{ result.openstack_servers[0].public_v4 }}"
  when: state == 'present'
```

The content of the ``address`` file can now be read out and made available via an output.
The ``path`` argument is always relative to ``/output``.

It is possible to define the visibility of the output via the optional ``visibility``
argument. Possible values are ``public`` and ``private``.

The expected content can be specified for the source via the optional ``type`` argument.
Before the output is made available, it is checked whether it is an IPv4 address, for example.
All currently usable types are listed under [Types](#types).

The output can be described via ``description``. This argument is not optional. A description
must be given for each output. Markdown can be used to format the descriptions in the UI.


```yaml
outputs:
  - name: address
    source:
      path: address
      type: ipv4address
    description: |
      IP address to access the instance
    visibility: public
```

### Types

| Name        | Description     |
| :---------- | :-------------- |
| ipv4address | IPv4 address    |
| ssh         | Private SSH key |
