===============
Getting started
===============

Install the CLI for Timon with ``pip3 install timonctl``.

Create the file ``sample.yaml`` which contains a sample template for a
deployment with Terraform on an OpenStack environment.

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
       prefix: terraform
       clouds.yaml:
         type: file
         path: clouds.yaml
       "cloud name": openstack
       flavor: "SCS-1V:1:10"
       "public network": public

Import the template ``terraform-sample`` defined in the previously created
``sample.yaml`` file.

.. code-block:: console

   timonctl template import sample.yaml terraform-sample

A deployment ``hello-world`` can now be created from the template
``terraform-sample``.

.. code-block:: console

   timonctl deployment create hello-world terraform-sample
