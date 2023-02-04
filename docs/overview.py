from diagrams import Cluster, Diagram
from diagrams.aws.general import User
from diagrams.aws.compute import ECR
from diagrams.aws.management import SystemsManagerAutomation
from diagrams.aws.network import APIGateway
from diagrams.aws.storage import S3
from diagrams.custom import Custom
from diagrams.k8s.ecosystem import Helm
from diagrams.onprem.iac import Ansible, Terraform


with Diagram(filename="overview"):
    user = User()

    with Cluster("Workload"):
        infrastructure_1 = Custom("", "logos/diagrams.png")
        infrastructure_2 = Custom("", "logos/diagrams.png")
        infrastructure_3 = Custom("", "logos/diagrams.png")


    with Cluster("The Cloudsphere"):
        api = APIGateway("API")
        orchestrator = SystemsManagerAutomation("Orchestrator")
        storage = S3("Storage")
        registry = ECR("Registry")

    with Cluster("Infrastructure As Code"):
        ansible = Ansible("Ansible")
        helm = Helm("")
        terraform = Terraform("")

    with Cluster("Cloud Infrastructure"):
        azure = Custom("Azure", "logos/azure.png")
        k8s = Custom("Kubernetes", "logos/k8s.png")
        openstack = Custom("OpenStack", "logos/openstack.png")

    user >> api

    api >> orchestrator

    orchestrator >> ansible
    orchestrator >> helm
    orchestrator >> terraform
    orchestrator >> storage

    registry >> orchestrator

    ansible >> azure
    ansible >> k8s
    ansible >> openstack
    helm >> k8s
    terraform >> azure
    terraform >> openstack

    azure >> infrastructure_1
    k8s >> infrastructure_2
    openstack >> infrastructure_3
