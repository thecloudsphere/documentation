=====
Usage
=====

Installation
============

* https://github.com/thecloudsphere/tcsctl
* https://pypi.org/project/tcsctl/

.. code-block:: console

   pip3 install tcsctl

Configuration
=============

The configuration is stored in a file ``tcs.yaml`` which is located in the
same directory in which ``tcsctl`` is called.

Logging
-------

.. code-block:: yaml

   log_level: DEBUG

Profiles
--------

.. code-block:: yaml

   profiles:
     default:
       api_url: https://api.demo.thecloudsphere.io/api/
       api_version: v1
       # insecure: false
       auth:
         username:
         organisation_name:
         project_name:
         # password:

Validation
----------

A configuration can be validated with the ``validate`` command of ``tcsctl``
and the following Yamale schema. If ``tcsctl`` is used with an invalid configuration,
an ``ERROR`` message is displayed.

.. code-block:: console

   tcsctl validate config tcs.yaml
   Config tcs.yaml is valid.

The scheme for validating the configuration was written for `Yamale <https://github.com/23andMe/Yamale>`_.

.. literalinclude:: schemas/schema.config.yaml
   :language: yaml
   :linenos:

Authentication
==============

Log in to a Cloudshere service:

.. code-block:: console

   tcsctl login
   Password:
   Logged in successfully.

If you try to log in and there is already an access token, you will not be
able to log in again.

.. code-block:: console

   tcsctl login
   Already logged in.

To force the login, the parameter ``--force`` can be used. This means that
a login is performed in any case, even if an access token already exists
locally. This is useful, for example, when an access token has expired.
You would then actually have to log out first and then log in. The
``--force`` parameter saves the logout step.

.. code-block:: console

   tcsctl login --force
   Password:
   Logged in successfully.

Log out from a Cloudsphere service:

.. code-block:: console

   tcsctl logout
   Logged out successfully.

If the log in expires once when using the CLI, a message is displayed.
A new log in is then necessary.

.. code-block:: console

   New log in required. Token for default expired
