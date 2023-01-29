=======
Samples
=======

Ansible
=======

.. code-block:: yaml

   ---
   ansible-sample:
     environment: ansible/base
     blueprint: ansible/openstack/minimal
     blueprint_version: main
     inputs:
       clouds.yaml:
         type: file
         path: clouds.yaml
       "cloud name": openstack
       flavor: "SCS-1V:1:10"
       prefix: "{{ tcs.name }}"
       "public network": public

.. code-block:: console

   tcsctl environment import ansible/base
   tcsctl blueprint import ansible/openstack/minimal
   tcsctl template import sample.yaml ansible-sample
   tcsctl deployment create ansible ansible-sample

Terraform
=========

.. code-block:: yaml

   terraform-sample:
     environment:
       name: terraform/openstack
       repository: thecloudsphere/registry
       repository_server: https://github.com
     blueprint:
       name: terraform/openstack/minimal
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

.. code-block:: console

   tcsctl template import sample.yaml terraform-sample
   tcsctl deployment create terraform terraform-sample
