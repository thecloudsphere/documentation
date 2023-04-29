from diagrams import Cluster, Diagram
from diagrams.aws.general import User
from diagrams.aws.management import SystemsManagerAutomation
from diagrams.aws.storage import S3
from diagrams.azure.identity import ActiveDirectory
from diagrams.custom import Custom
from diagrams.k8s.compute import Cronjob
from diagrams.k8s.ecosystem import Helm
from diagrams.onprem.database import Mariadb
from diagrams.onprem.iac import Ansible, Terraform
from diagrams.onprem.inmemory import Redis
from diagrams.onprem.network import Traefik
from diagrams.onprem.registry import Harbor
from diagrams.onprem.vcs import Git
from diagrams.programming.framework import Fastapi


with Diagram(filename="overview-on-premise"):

    with Cluster("Provided services"):
        user = User("Consumer")
        git = Git("Git server")
        harbor = Harbor("Container registry")
        directory = ActiveDirectory("Directory")

    with Cluster("Internal services"):
        beat = Cronjob("Beat service")
        orchestrator = SystemsManagerAutomation("Orchestrator service")

    with Cluster("Infrastructure services"):
        mariadb = Mariadb("MariaDB")
        # phpmyadmin = Custom("phpMyAdmin", "logos/phpmyadmin.png")
        # phpredisadmin = Custom("phpRedisAdmin", "logos/phpredisadmin.png")
        redis = Redis("Redis")

    with Cluster("External services"):
        api = Fastapi("API service")
        keycloak = Custom("Keycloak", "logos/keycloak.png")
        traefik = Traefik("Traefik")
        storage = S3("MinIO")

    with Cluster("Infrastructure As Code"):
        ansible = Ansible("Ansible")
        helm = Helm("Helm")
        terraform = Terraform("Terraform")

    with Cluster("Cloud Infrastructure"):
        azure = Custom("Azure", "logos/azure.png")
        k8s = Custom("Kubernetes", "logos/k8s.png")
        openstack = Custom("OpenStack", "logos/openstack.png")

    with Cluster("Workload"):
        infrastructure_1 = Custom("", "logos/diagrams.png")
        infrastructure_2 = Custom("", "logos/diagrams.png")
        infrastructure_3 = Custom("", "logos/diagrams.png")

    # phpredisadmin >> redis
    # phpmyadmin >> mariadb

    traefik - api
    traefik - keycloak
    traefik - storage

    directory - keycloak
    keycloak - api

    redis - api

    api - redis
    api - mariadb
    api - storage

    beat - redis
    beat - mariadb

    orchestrator - redis
    orchestrator - mariadb

    user - traefik

    orchestrator >> ansible
    orchestrator >> helm
    orchestrator >> terraform
    orchestrator - storage

    git >> orchestrator
    harbor >> orchestrator

    ansible >> azure
    ansible >> k8s
    ansible >> openstack
    helm >> k8s
    terraform >> azure
    terraform >> openstack

    azure >> infrastructure_1
    k8s >> infrastructure_2
    openstack >> infrastructure_3
