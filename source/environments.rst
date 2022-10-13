============
Environments
============

ABI
===

* blueprint
* input
* output
* processing
* export
* cache

Containerfile
=============

.. code-block:: none

   WORKDIR /environment

.. code-block:: none

   VOLUME /blueprint /input /output /processing /export /cache

.. code-block:: none

   ENTRYPOINT ["/usr/bin/dumb-init", "--"]

.. code-block:: none

   LABEL "org.opencontainers.image.documentation"="https://docs.timon.tech" \
         "org.opencontainers.image.licenses"="ASL 2.0" \
         "org.opencontainers.image.source"="https://github.com/timontech/environments" \
         "org.opencontainers.image.url"="https://www.osism.tech" \
         "org.opencontainers.image.vendor"="OSISM GmbH"

Schema
======

.. literalinclude:: schemas/schema.environment.yaml
   :language: yaml
   :linenos:
