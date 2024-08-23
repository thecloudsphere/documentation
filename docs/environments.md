---
sidebar_position: 30
---

# Environments

An environment is a container image that provides defined tools, volumes and
scripts.

The following tools must always be usable in an environment:

* dumb-init
* git
* make
* openssh-client
* rsync

The following volumes must always be defined in an environment:

* ``/blueprint``
* ``/cache``
* ``/export``
* ``/input``
* ``/output``
* ``/processing``

The entry point into an environment is always a ``/run.sh`` script. This performs
preparations (e.g. retrieving the blueprint) and then executes a processing script
to which all arguments are passed. In the ``base``environment, ``make`` and a
``Makefile`` are used for this.

The ``Makefile`` has defined targets with which the actions are executed. If no
``Makefile`` is used for processing, then the first argument must be used. For example,
if the entry point is a script ``/entrypoint.sh`` then the call ``/entrypoint.sh create``
must start the action to create a deployment.

The following actions must be available:

* check
* create
* destroy
* export
* import
* init
* reconcile
* refresh
* status
* validate

## Configuration

### General information

```yaml
---
environment:
  author: Christian Berendt
  repository_server: https://github.com
  repository: thecloudsphere/registry
  name: base
  image: harbor.services.thecloudsphere.io/thecloudsphere/base
  command: /environment/run.sh
  versions:
    - version: latest
  description: Base environment
```

### Inputs & Outputs

See [Inputs & Outputs](inputs-outputs) for details.

```yaml
inputs: []
outputs: []
```

## Samples

### Base

The ``base`` environment is a minimal environment that can be used as a basis for
creating useful environments. The container image can be found at
[thecloudsphere/registry/environments/base](https://github.com/thecloudsphere/registry/tree/main/environments/base)
and is published on our container image registry
(``harbor.services.thecloudsphere.io/thecloudsphere/base:latest``).

#### Containerfile

```
ARG UBUNTU_VERSION=22.04
FROM ubuntu:${UBUNTU_VERSION}

ENV DEBIAN_FRONTEND=noninteractive
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY files/Makefile /environment/Makefile
COPY files/run.sh /environment/run.sh

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        dumb-init \
        git \
        make \
        openssh-client \
        rsync \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /blueprint /input /output /processing /export /cache /environment

WORKDIR /environment

VOLUME /blueprint /input /output /processing /export /cache

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
```

#### run.sh

```
#!/usr/bin/env bash

if [[ ! -e /blueprint/.git ]]; then
    if [[ -e /input/id_rsa.git ]]; then
	GIT_SSH_COMMAND='ssh -i /input/id_rsa.git -oStrictHostKeyChecking=no' git clone -b ${BLUEPRINT_VERSION} ${BLUEPRINT_SOURCE} /blueprint
    else
        git clone -b ${BLUEPRINT_VERSION} ${BLUEPRINT_SOURCE} /blueprint
    fi
fi

if [[ ! -e /environment/blueprint.env ]]; then
    echo "export BLUEPRINT=${BLUEPRINT_NAME}" >> /environment/blueprint.env
    echo "export BLUEPRINT_PATH=${BLUEPRINT_PATH}" >> /environment/blueprint.env
fi

source /environment/blueprint.env

pushd /environment > /dev/null
make "$@"
popd > /dev/null
```

#### Makefile

```
import:
	@rsync -av /blueprint/$(BLUEPRINT_PATH)/ /processing/
	@rsync -av /export/ /processing/
	@rsync -av /input/ /processing/

init:
	@echo NOT IMPLEMENTED

validate:
	@echo NOT IMPLEMENTED

check:
	@echo NOT IMPLEMENTED

create:
	@echo NOT IMPLEMENTED

reconcile:
	@echo NOT IMPLEMENTED

destroy:
	@echo NOT IMPLEMENTED

refresh:
	@echo NOT IMPLEMENTED

status:
	@echo NOT IMPLEMENTED

export:
	@cp -r /processing/* /export

PHONY: import init validate prepare create reconcile destroy refresh status export
```

#### .tcs.yaml

```yaml
---
environment:
  author: Christian Berendt
  repository_server: https://github.com
  repository: thecloudsphere/registry
  name: base
  image: harbor.services.thecloudsphere.io/thecloudsphere/base
  command: /environment/run.sh
  versions:
    - version: latest
  description: Base environment
  inputs: []
  outputs: []
```
