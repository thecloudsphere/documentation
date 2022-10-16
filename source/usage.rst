=====
Usage
=====

Installation
============

* https://github.com/timontech/timonctl
* https://pypi.org/project/timonctl/

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
       api_url: https://api.timon.osism.tech/api/
       api_version: v1
       # insecure: false
       auth:
         username:
         organisation_name:
         project_name:
         # password:

Validation
----------

A configuration can be validated with the ``validate`` command of ``timonctl``
and the following Yamale schema. If ``timonctl`` is used with an invalid configuration,
an ``ERROR`` message is displayed.

.. code-block:: console

   timonctl validate config timon.yaml
   Config timon.yaml is valid.

The scheme for validating the configuration was written for `Yamale <https://github.com/23andMe/Yamale>`_.

.. literalinclude:: schemas/schema.config.yaml
   :language: yaml
   :linenos:

Authentication
==============

Log in to a Timon service:

.. code-block:: console

   timonctl login
   Password:
   Logged in successfully.

If you try to log in and there is already an access token, you will not be
able to log in again.

.. code-block:: console

   timonctl login
   Already logged in.

To force the login, the parameter ``--force`` can be used. This means that
a login is performed in any case, even if an access token already exists
locally. This is useful, for example, when an access token has expired.
You would then actually have to log out first and then log in. The
``--force`` parameter saves the logout step.

.. code-block:: console

   timonctl login --force
   Password:
   Logged in successfully.

Log out from a Timon service:

.. code-block:: console

   timonctl logout
   Logged out successfully.
