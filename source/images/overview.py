from diagrams import Cluster, Diagram
from diagrams.aws.general import User
from diagrams.aws.compute import ECR
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
        timon = APIGateway("Cloudsphere orchestrator")
        storage = S3("Cloudsphere storage")
        registry = ECR("Cloudsphere registry")

    with Cluster("Infrastructure As Code"):
        ansible = Ansible("Ansible")
        helm = Helm("")
        terraform = Terraform("")

    with Cluster("Cloud Infrastructure"):
        azure = Custom("Azure", "logos/azure.png")
        k8s = Custom("Kubernetes", "logos/k8s.png")
        openstack = Custom("OpenStack", "logos/openstack.png")

    user >> timon

    timon >> ansible
    timon >> helm
    timon >> terraform
    timon >> storage

    registry >> timon

    ansible >> azure
    ansible >> k8s
    ansible >> openstack
    helm >> k8s
    terraform >> azure
    terraform >> openstack

    azure >> infrastructure_1
    k8s >> infrastructure_2
    openstack >> infrastructure_3
