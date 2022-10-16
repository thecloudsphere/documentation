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
       prefix: "{{ timon.name }}"
       "public network": public

.. code-block:: console

   timonctl environment import ansible/base
   timonctl blueprint import ansible/openstack/minimal
   timonctl template import sample.yaml ansible-sample
   timonctl deployment create ansible ansible-sample

Terraform
=========

.. code-block:: yaml

   terraform-sample:
     environment:
       name: terraform/openstack
       repository: timontech/registry
       repository_server: https://github.com
     blueprint:
       name: terraform/openstack/minimal
       repository: timontech/registry
       repository_server: https://github.com
     blueprint_version: main
     inputs:
       clouds.yaml:
         type: file
         path: clouds.yaml
       "cloud name": openstack
       flavor: "SCS-1V:1:10"
       prefix: "{{ timon.name }}"
       "public network": public

.. code-block:: console

   timonctl template import sample.yaml terraform-sample
   timonctl deployment create terraform terraform-sample
