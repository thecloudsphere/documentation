=============
Release notes
=============

The release notes were launched on 11.10.2022. At this point, the
minimum functionality of Timon was achieved. The MVP was usable both
via API itself and via the CLI (``timonctl``). A UI was not yet
available at that time.

1.0.0 (Nighthawk)
=================

.. note::

   Version 1.0.0 is currently in progress and not yet published.

Version 1.0.0 contains the status of the MVP as well as all enhancements
already identified and implemented during the evaluation phase of the MVP.

Blueprint: environment overrides
--------------------------------

With environment overrides it is possible to customise certain
predefined properties in a blueprint when executing an environment
on a blueprint.

The following properties can be adjusted (if supported by the
environment used).

* ``blueprint_source``
* ``blueprint_source_key``
* ``blueprint_version``
* ``working_directory``
* ``outputs_directory``
* ``makefile``
* ``makefile_pre_processing``
* ``makefile_processing``
* ``makefile_post_processing``

The following sample snippet is from the ``osism/testbed`` blueprint.

There, the blueprint is not imported from the registry but from the
external repository https://github.com/osism/testbed.git. The directory
for the execution of Terraform in this case is ``/processing/terraform``
(instead of ``/processing``). The outputs are not in ``/outputs``
but in ``/processing/terraform``. For the execution of Terraform,
``/processing/terraform/Makefile`` is used instead of ``/processing/Makefile``.

.. code-block:: yaml

   environment:
     repository: timontech/registry
     name: terraform/openstack
     version: 1.3.2
     overrides:
       blueprint_source: https://github.com/osism/testbed.git
       # blueprint_source_key:
       # blueprint_version:
       working_directory: /processing/terraform
       outputs_directory: /processing/terraform
       # makefile:
       # makefile_pre_processing:
       makefile_processing: /processing/terraform/Makefile
       # makefile_post_processing:

The overrides supported by an environment can be defined via the
parameter ``supported_overrides`` at the environment. If ``supported_overrides``
is not set, no overrides are supported. All supported overrides must be
explicitly listed. If overrides are set that are not supported by an environment,
a ``WARNING`` is issued and the override is ignored.
