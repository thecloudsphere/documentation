---
sidebar_position: 75
---

# On-premise

This section describes how **The Cloudsphere** can be operated as an on-premise service.

For deployment, Docker Compose is currently used. In the future, it will be possible to
deploy the API and control services on Kubernetes.

## Overview

![Overview on-premise](overview-on-premise.png "Overview on-premise")

## Prerequisites

A service account is required to access harbor.services.thecloudsphere.io in order
to download the necessary container image of the Enterprise Edition of The
Cloudsphere.

```
$ docker login harbor.services.thecloudsphere.io
Username: robot$REPLACE_THIS_WITH_YOUR_SERVICE_ACCOUNT_NAME
Password:
Login Succeeded
```

## Requirements

To use **The Cloudsphere** on-premise service, a virtual instance with the following
parameters is required.

* 8 vCPUs
* 32 GByte memory
* 100 GByte storage

DNS entries on the publicly accessible IP address of the virtual system are required
for access to the individual services. The following DNS entries are used by default.

* api.demo.thecloudsphere.io
* minio.demo.thecloudsphere.io
* keycloak.demo.thecloudsphere.io

TLS certificates are also required for these DNS entries. Self-signed certificates
are possible.

Download Let's Encrypt/ACME client:

```
wget https://github.com/go-acme/lego/releases/download/v4.9.1/lego_v4.9.1_linux_amd64.tar.gz
tar xvzf lego_v4.9.1_linux_amd64.tar.gz
rm CHANGELOG.md LICENSE lego_v4.9.1_linux_amd64.tar.gz
```

Request Let's Encrypt certificates with HTTP-01:

```
# api.demo.thecloudsphere.io
./lego \
  --email info@b42labs.com \
  --http \
  -d api.demo.thecloudsphere.io \
  run

# keycloak.demo.thecloudsphere.io
./lego \
  --email info@b42labs.com \
  --http \
  -d keycloak.demo.thecloudsphere.io \
  run

# minio.demo.thecloudsphere.io
./lego \
  --email info@b42labs.com \
  --http \
  -d minio.demo.thecloudsphere.io \
  run
```

Store certificates in ``files/traefik/certificates``:

```
files/traefik/certificates/key/keycloak.demo.thecloudsphere.io.pem
files/traefik/certificates/key/api.demo.thecloudsphere.io.pem
files/traefik/certificates/key/minio.demo.thecloudsphere.io.pem
files/traefik/certificates/cert/keycloak.demo.thecloudsphere.io.pem
files/traefik/certificates/cert/api.demo.thecloudsphere.io.pem
files/traefik/certificates/cert/minio.demo.thecloudsphere.io.pem
```

Edit ``files/traefik/certificates.yml``:

```
---
tls:
  certificates:
    - certFile: /etc/traefik/certificates/cert/keycloak.demo.thecloudsphere.io.pem
      keyFile: /etc/traefik/certificates/key/keycloak.demo.thecloudsphere.io.pem
    - certFile: /etc/traefik/certificates/cert/api.demo.thecloudsphere.io.pem
      keyFile: /etc/traefik/certificates/key/api.demo.thecloudsphere.io.pem
    - certFile: /etc/traefik/certificates/cert/minio.demo.thecloudsphere.io.pem
      keyFile: /etc/traefik/certificates/key/minio.demo.thecloudsphere.io.pem
```

Access to all services is via port 443/TCP (HTTPS).

## Docker Compose

## Preparations

Docker and the Docker Compose Plugin for Docker must be installed and usable on the
virtual system in a current version. In a reasonably recent version. Doesn't have to
be the last version.

The installation of this is documented on docs.docker.com: https://docs.docker.com/engine/install/

It basically doesn't matter what operating system it is. It must be Docker usable
with Docker Compose.

### Service repository

```
git clone https://github.com/thecloudsphere/service
cd service
```

### API service

In the ``.env`` file in this repository, various parameters must be customised
to the local conditions.

| parameter                                | default value                                        | description |
| :--------------------------------------- | :--------------------------------------------------- | :---------- |
| ``TCS_DATABASE_PASSWORD``                | ``password``                                         |             |
| ``TCS_DATABASE_ROOT_PASSWORD``           | ``password``                                         |             |
| ``TCS_DOMAIN_API``                       | ``api.demo.thecloudsphere.io``                       |             |
| ``TCS_DOMAIN_KEYCLOAK``                  | ``keycloak.demo.thecloudsphere.io``                  |             |
| ``TCS_DOMAIN_MINIO``                     | ``minio.demo.thecloudsphere.io``                     |             |
| ``TCS_IMAGE``                            | ``harbor.services.thecloudsphere.io/tcs/tcs:latest`` |             |
| ``TCS_IMAGE_KEYCLOAK``                   | ``quay.io/keycloak/keycloak:20.0``                   |             |
| ``TCS_IMAGE_MARIADB``                    | ``mariadb``                                          |             |
| ``TCS_IMAGE_MINIO``                      | ``minio/minio``                                      |             |
| ``TCS_IMAGE_REDIS``                      | ``redis``                                            |             |
| ``TCS_IMAGE_TRAEFIK``                    | ``traefik``                                          |             |
| ``TCS_KEYCLOAK_ADMIN_PASSWORD``          | ``password``                                         |             |
| ``TCS_LISTEN_ADDRESS``                   | ``0.0.0.0``                                          |             |
| ``TCS_LISTEN_ADDRESS_INTERNAL_SERVICES`` | ``0.0.0.0``                                          |             |

```
docker compose up -d
```

### Worker service

In the ``.worker.env`` file in this repository, various parameters must be customised
to the local conditions.

| parameter                     | default value                                              | description |
| :---------------------------- | :--------------------------------------------------------- | :---------- |
| ``TCS_REDIS_URL``             | ``redis://localhost:6379``                                 |             |
| ``TCS_CELERY_BROKER_URL``     | ``redis://localhost:6379``                                 |             |
| ``TCS_CELERY_RESULT_BACKEND`` | ``redis://localhost:6379``                                 |             |
| ``TCS_MINIO_ACCESS_KEY``      | ``minioadmin``                                             |             |
| ``TCS_MINIO_BUCKET_NAME``     | ``tcs``                                                    |             |
| ``TCS_MINIO_SECRET_KEY``      | ``minioadmin``                                             |             |
| ``TCS_MINIO_SERVER``          | ``minio.demo.thecloudsphere.io``                           |             |
| ``TCS_SQLMODEL_DATABSE_URL``  | ``mysql+mysqlconnector://tcs:password@localhost:3306/tcs`` |             |

```
docker compose -f docker-compose.worker.yml -p tcsworker up -d
```
