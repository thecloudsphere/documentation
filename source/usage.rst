=====
Usage
=====

Installation
============

.. code-block:: console

   pip3 install timonctl

Configuration
=============

The configuration is stored in a file ``timon.yaml`` which is located in the
same directory in which ``timonctl`` is called.

Logging
-------

.. code-block:: yaml

   log_level: DEBUG

Profiles
--------

.. code-block:: yaml

   profiles:
     default:
       api_url: http://api.timon.osism.tech/api/
       api_version: 1
       auth:
         username:
         organisation_name:
         project_name:
         password:
         # token_id:
         # token_secret:

Authentication
==============

Log in to a Timon service:

.. code-block:: console

   timonctl login

Log out from a Timon service:

.. code-block:: console

   timonctl logout
