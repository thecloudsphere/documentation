============
Environments
============

ABI
===

* blueprint
* cache
* export
* input
* output
* processing

run.sh
======

.. literalinclude:: samples/environment/run.sh
   :linenos:

Makefile
========

.. literalinclude:: samples/environment/Makefile
   :linenos:

Containerfile
=============

.. code-block:: none

   COPY files/Makefile /environment/Makefile
   COPY files/run.sh /environment/run.sh

.. code-block:: none

   RUN mkdir -p /blueprint /cache /export /input /output /processing

.. code-block:: none

   WORKDIR /environment

.. code-block:: none

   VOLUME /blueprint /cache /export /input /output /processing

.. code-block:: none

   ENTRYPOINT ["/usr/bin/dumb-init", "--"]

.. code-block:: none

   LABEL "org.opencontainers.image.documentation"="https://timontech.github.io/documentation/" \
         "org.opencontainers.image.licenses"="ASL 2.0" \
         "org.opencontainers.image.source"="https://github.com/timontech/registry" \
         "org.opencontainers.image.url"="https://www.osism.tech" \
         "org.opencontainers.image.vendor"="OSISM GmbH"

Schema
======

.. literalinclude:: schemas/schema.environment.yaml
   :language: yaml
   :linenos:
