/* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT QUESTION BANK
   Topics: Kubernetes (AKS/EKS), CI/CD (GitOps), ELK, SRE, Kafka, DevSecOps
   Format: High-Order Thinking Skills (HOTS) / Scenario-Based
   ====================================================== */

const questionBank = [
  /* ======================================================
     KUBERNETES & CLUSTER GOVERNANCE (AKS/EKS focus)
     ====================================================== */
  {
    id: 1,
    difficulty: "hard",
    category: "k8s-architecture",
    question: "A high-traffic microservice on AKS is experiencing sporadic 503 errors during scale-up events. Investigation shows that new pods are receiving traffic before the application is fully ready to process requests. Which configuration fix directly addresses this 'cold start' issue?",
    options: [
      "Increasing the 'replicas' count in the Horizontal Pod Autoscaler",
      "Implementing a 'readinessProbe' with an appropriate 'initialDelaySeconds'",
      "Implementing a 'livenessProbe' to restart the container",
      "Switching from Azure CNI to Kubenet to reduce IP allocation time"
    ],
    answer: 1,
    explanation: "The readinessProbe determines when a pod is ready to accept traffic. If missing or misconfigured, the Service might route traffic to a pod that is still initializing, leading to 503s.",
    hint: "Differentiate between a probe that restarts a container vs. one that controls traffic routing."
  },
  {
    id: 2,
    difficulty: "hard",
    category: "k8s-security",
    question: "Your organization requires that no container in the EKS cluster runs as a privileged user. Which combination of tools is best suited to enforce this across multiple teams without manual code reviews?",
    options: [
      "IAM Roles for Service Accounts (IRSA)",
      "AWS WAF and Security Groups",
      "Kyverno or OPA Gatekeeper with a 'MustRunAsNonRoot' policy",
      "NetworkPolicies and Calico CNI"
    ],
    answer: 2,
    explanation: "Policy engines like Kyverno or Gatekeeper act as admission controllers, intercepting requests to the Kubernetes API and rejecting YAML that violates security constraints.",
    hint: "Think about 'Policy as Code' at the cluster admission level."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "k8s-networking",
    question: "An AKS cluster is running out of IP addresses in its subnet, preventing new pods from being scheduled. The team is currently using Azure CNI. What is the most sustainable architectural solution?",
    options: [
      "Delete old logs in Log Analytics to free up space",
      "Migrate to Azure CNI Overlay or use Dynamic IP allocation",
      "Reduce the number of replicas for all deployments",
      "Change the Load Balancer SKU from Basic to Standard"
    ],
    answer: 1,
    explanation: "Azure CNI Overlay allows pods to use a private CIDR range separate from the VNet, significantly reducing the IP pressure on the underlying subnet.",
    hint: "How can we decouple Pod IPs from the VNet IP space?"
  },

  /* ======================================================
     OBSERVABILITY & SRE (ELK / Prometheus / SRE)
     ====================================================== */
  {
    id: 4,
    difficulty: "hard",
    category: "observability-elk",
    question: "During a major sale event, your ELK stack experiences massive ingestion lag. The Logstash buffer is full, and Elasticsearch shows high 'JVM Memory Pressure' (>85%). What is the first architectural step to prevent data loss?",
    options: [
      "Increase the refresh_interval of the Elasticsearch indices",
      "Introduce a Kafka or Event Hubs buffer between log producers and Logstash",
      "Delete the 'Warm' nodes to make room for 'Hot' data",
      "Switch from Kibana to Grafana for better visualization"
    ],
    answer: 1,
    explanation: "Using Kafka as a persistent buffer (queue) allows log producers to continue sending data while Logstash/Elasticsearch recovers from the pressure, preventing data loss during spikes.",
    hint: "This pattern is known as 'Queue-based Load Leveling'."
  },
  {
    id: 5,
    difficulty: "medium",
    category: "sre-concepts",
    question: "A Service Level Objective (SLO) is set to 99.9% availability. If the service experiences 45 minutes of downtime in a 30-day window, has the error budget been exceeded?",
    options: [
      "No, the error budget for 99.9% is approximately 43 minutes per month",
      "Yes, the error budget for 99.9% is approximately 43.8 minutes per month",
      "No, the error budget is 60 minutes per month",
      "Yes, 99.9% allows only 5 minutes of downtime"
    ],
    answer: 1,
    explanation: "99.9% availability allows for 0.1% downtime. (0.001 * 30 days * 24 hours * 60 minutes) = 43.2 minutes. 45 minutes exceeds this limit.",
    hint: "Calculate 0.1% of the total minutes in a month."
  },

  /* ======================================================
     DATA ARCHITECTURE (Kafka / MSK)
     ====================================================== */
  {
    id: 6,
    difficulty: "hard",
    category: "data-kafka",
    question: "A Kafka consumer group is falling behind (increasing lag). You notice that only one partition is significantly larger than the others, and scaling up the number of consumers has no effect on that specific lag. What is the likely cause?",
    options: [
      "The broker is down",
      "Data Skew caused by an inefficient partition key (Hot Key)",
      "The 'acks' setting is set to 'all'",
      "The consumers are using the wrong Schema Registry version"
    ],
    answer: 1,
    explanation: "If a single partition is skewed (has most of the data), it can only be processed by one consumer at a time within a group. Scaling consumers won't help because a partition cannot be shared by consumers in the same group.",
    hint: "Look into how partition keys distribute data."
  },

  /* ======================================================
     CI/CD & GITOPS
     ====================================================== */
  {
    id: 7,
    difficulty: "medium",
    category: "cicd-gitops",
    question: "You are implementing ArgoCD for GitOps. A developer manually changes the replica count of a deployment via 'kubectl edit' to fix an urgent issue. If ArgoCD is set to 'Auto-Sync' and 'Self-Heal', what happens next?",
    options: [
      "ArgoCD updates the Git repository to match the cluster",
      "ArgoCD detects the drift and reverts the cluster state to match Git",
      "The cluster remains in the manual state until the next Git commit",
      "ArgoCD sends an alert but takes no action"
    ],
    answer: 1,
    explanation: "Self-healing ensures the cluster matches the 'Source of Truth' (Git). Any manual 'kubectl' changes are treated as drift and automatically reverted.",
    hint: "Git is the absolute source of truth in GitOps."
  },

  /* ======================================================
     INFRASTRUCTURE AS CODE (Terraform / Bicep)
     ====================================================== */
  {
    id: 8,
    difficulty: "hard",
    category: "iac-terraform",
    question: "In a multi-environment Terraform setup, you want to ensure that a production database cannot be accidentally deleted if a developer runs 'terraform destroy'. Which lifecycle block is most critical?",
    options: [
      "ignore_changes",
      "prevent_destroy = true",
      "create_before_destroy",
      "depends_on"
    ],
    answer: 1,
    explanation: "The prevent_destroy meta-argument provides a safety rail that causes Terraform to reject any plan that includes the destruction of that resource.",
    hint: "This is a safety mechanism within the resource block."
  },

  /* ======================================================
     SECURITY & DEVSECOPS
     ====================================================== */
  {
    id: 9,
    difficulty: "medium",
    category: "security-devsecops",
    question: "A security audit reveals that your microservices are passing database credentials via environment variables. Which 'Zero-Secret' architecture should you recommend?",
    options: [
      "Encrypting the environment variables with Base64",
      "Using Workload Identity (AKS) or Pod Identity (EKS) to access a Key Vault",
      "Storing secrets in a private GitHub repository",
      "Hardcoding secrets in a private Docker image"
    ],
    answer: 1,
    explanation: "Workload identities allow the pod to authenticate to cloud services (like Vault/KeyVault) using its own identity, eliminating the need for stored passwords or static keys.",
    hint: "Think about 'Secret-less' authentication."
  },

  /* ======================================================
     COST OPTIMIZATION (FINOPS)
     ====================================================== */
  {
    id: 10,
    difficulty: "medium",
    category: "finops-cost",
    question: "Your AWS bill shows high costs for 'Data Transfer Out'. You notice that your EKS pods in us-east-1a are frequently communicating with an RDS instance in us-east-1b. What architectural change reduces this cost?",
    options: [
      "Switch to a multi-region VPC peering",
      "Enable 'Cross-Zone Load Balancing' on the NLB",
      "Implement 'Topology-Aware Routing' to keep traffic within the same AZ",
      "Use S3 Select to filter data before transmission"
    ],
    answer: 2,
    explanation: "Inter-AZ data transfer is not free. Topology-aware routing (or keeping services in the same AZ where possible) minimizes cross-AZ traffic, reducing latency and costs.",
    hint: "Traffic between AZs costs money in most cloud providers."
  },

/* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT - BATCH 2 (IDs 11-60)
   ====================================================== */

  /* ======================================================
     ADVANCED KUBERNETES & SCHEDULING
     ====================================================== */
  {
    id: 11,
    difficulty: "hard",
    category: "k8s-scheduling",
    question: "A high-performance batch processing workload requires specialized GPU nodes. You have labeled the nodes with 'hardware=gpu'. How do you ensure that only GPU-specific pods run on these nodes AND that these pods don't accidentally run on standard CPU nodes?",
    options: [
      "Use only NodeSelector: hardware=gpu",
      "Use NodeAffinity: requiredDuringSchedulingIgnoredDuringExecution",
      "Combine a Taint on the node with a corresponding Toleration in the Pod spec, plus NodeAffinity",
      "Use a ResourceQuota to limit CPU node usage"
    ],
    answer: 2,
    explanation: "Taints allow a node to repel a set of pods. A Toleration allows (but does not require) pods to schedule onto tainted nodes. Combining this with NodeAffinity ensures the pod 'attracts' to the right node while the Taint ensures standard pods stay away.",
    hint: "Affinity attracts; Taints repel."
  },
  {
    id: 12,
    difficulty: "hard",
    category: "k8s-operators",
    question: "When using the 'Operator Pattern' in Kubernetes to manage a complex stateful database (like Postgres or Kafka), what is the primary advantage of a Custom Resource Definition (CRD) over a standard StatefulSet?",
    options: [
      "It makes the database run faster by bypassing the K8s API",
      "It allows for automated domain-specific lifecycle management (backup, resize, failover) beyond basic pod restarts",
      "It eliminates the need for Persistent Volumes",
      "It provides a GUI for database management"
    ],
    answer: 1,
    explanation: "Operators encapsulate human operational knowledge into code, allowing the 'Controller' to handle complex tasks like schema migrations or leader election that standard K8s controllers cannot do.",
    hint: "Think about Day-2 operations like 'automated recovery'."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "k8s-networking",
    question: "You implement an Istio Service Mesh. You want to ensure that 10% of traffic for 'service-a' goes to the new 'v2' version, while 90% stays on 'v1'. Which Istio resource defines this split?",
    options: [
      "Gateway",
      "VirtualService",
      "DestinationRule",
      "ServiceEntry"
    ],
    answer: 1,
    explanation: "The VirtualService defines the routing rules and traffic weights. The DestinationRule defines the 'subsets' (v1, v2) that those weights point to.",
    hint: "One defines the traffic path (VirtualService), the other defines the destinations."
  },

  /* ======================================================
     OBSERVABILITY: METRICS & TRACING
     ====================================================== */
  {
    id: 14,
    difficulty: "hard",
    category: "observability-prometheus",
    question: "Your Prometheus server is crashing due to 'Out of Memory' (OOM) errors. Investigation reveals a 'Cardinality Explosion'. Which of the following is the most likely culprit?",
    options: [
      "Too many distinct microservices being monitored",
      "Adding a 'user_id' or 'order_id' as a label in a high-frequency metric",
      "Setting the scrape interval to 1 second",
      "Using Grafana to visualize the metrics"
    ],
    answer: 1,
    explanation: "Cardinality is the number of unique time-series. If you add high-cardinality labels (like UserIDs), Prometheus creates a new time-series for every single user, quickly exhausting memory.",
    hint: "Labels should have a finite, small set of possible values."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "observability-tracing",
    question: "In a distributed tracing setup (Jaeger/Zipkin), a request passes through Service A, B, and C. You see traces for A and C, but B is missing, creating a 'gap'. What is the most common cause?",
    options: [
      "Service B is too fast to be traced",
      "Service B did not propagate the 'Trace Context' headers to Service C",
      "Service B is written in Python, which doesn't support tracing",
      "The tracing agent on Service B is using a different port"
    ],
    answer: 1,
    explanation: "For distributed tracing to work, every service must extract the trace headers from the incoming request and inject them into the outgoing request to the next service.",
    hint: "Distributed tracing relies on a 'Chain of Custody' for IDs."
  },

  /* ======================================================
     DATA OPS (KAFKA & ELK)
     ====================================================== */
  {
    id: 16,
    difficulty: "hard",
    category: "kafka-operations",
    question: "You are running Kafka on Kubernetes using Strimzi. You need to perform a zero-downtime rolling upgrade of the Kafka brokers. Which component manages the sequential restart to ensure the 'Controller' role is transitioned correctly?",
    options: [
      "The standard K8s Deployment controller",
      "The Kafka Operator (Strimzi)",
      "The Zookeeper Quorum",
      "Manual kubectl delete pod commands"
    ],
    answer: 1,
    explanation: "The Operator understands Kafka's internal state. It ensures that one broker is updated and passes health checks before moving to the next, maintaining availability and partition ISR (In-Sync Replicas).",
    hint: "Who 'understands' Kafka's specific restart requirements?"
  },
  {
    id: 17,
    difficulty: "hard",
    category: "elk-stack",
    question: "To optimize costs in an ELK stack, you implement 'Index Lifecycle Management' (ILM). You want data older than 30 days to be searchable but stored on cheaper, slower hardware. Which node attribute do you target?",
    options: [
      "Master-eligible nodes",
      "Hot nodes",
      "Warm/Cold nodes",
      "Ingest nodes"
    ],
    answer: 2,
    explanation: "Warm nodes hold indices that are no longer being updated but are still being queried. They typically use high-density HDDs instead of the SSDs used by Hot nodes.",
    hint: "Move data from 'Expensive/Fast' to 'Cheap/Slower'."
  },

  /* ======================================================
     SRE & CHAOS ENGINEERING
     ====================================================== */
  {
    id: 18,
    difficulty: "medium",
    category: "sre-chaos",
    question: "What is the primary goal of a 'Game Day' in Chaos Engineering?",
    options: [
      "To see how many pods we can kill in 5 minutes",
      "To validate that our observability and automated failover work as expected under controlled failure conditions",
      "To find who to blame for the last production outage",
      "To test the speed of the CI/CD pipeline"
    ],
    answer: 1,
    explanation: "Chaos Engineering is about building confidence. Game Days test the system's 'steady state' and the team's response procedures.",
    hint: "It's about 'confidence' and 'verification', not just breaking things."
  },
  {
    id: 19,
    difficulty: "hard",
    category: "sre-concepts",
    question: "You have a 'Burn Rate' alert configured. What is this alert specifically measuring?",
    options: [
      "The amount of money spent on AWS per hour",
      "The rate at which your Error Budget is being consumed relative to your SLO",
      "The CPU temperature of the underlying physical servers",
      "The speed of developer code commits"
    ],
    answer: 1,
    explanation: "Burn rate alerts are the 'gold standard' in SRE. They tell you if a current incident will cause you to miss your Monthly SLO if it continues.",
    hint: "It's the speed of losing your 'Error Budget'."
  },

  /* ======================================================
     CI/CD & SECURITY (DEVSECOPS)
     ====================================================== */
  {
    id: 20,
    difficulty: "hard",
    category: "devsecops",
    question: "Your pipeline includes a 'Software Bill of Materials' (SBOM) generation step. Why is this critical for a senior DevOps architect?",
    options: [
      "It helps in calculating the lines of code for developer productivity",
      "It provides a comprehensive inventory of all third-party libraries and versions to quickly identify vulnerabilities (like Log4j)",
      "It is a requirement for Windows Server deployments only",
      "It automatically minifies Javascript files"
    ],
    answer: 1,
    explanation: "An SBOM is the 'ingredients list' of your software. If a new Zero-Day vulnerability is announced, the SBOM allows you to scan all your production images instantly to see if you are affected.",
    hint: "Think 'Supply Chain Security'."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "cicd-strategies",
    question: "Which deployment strategy involves keeping two identical production environments and switching the router/load balancer to the new version once verified?",
    options: [
      "Canary Deployment",
      "Blue/Green Deployment",
      "Rolling Update",
      "Recreate"
    ],
    answer: 1,
    explanation: "Blue/Green provides an instant switch and an instant rollback mechanism by simply pointing the router back to the 'old' environment.",
    hint: "Environment A vs. Environment B."
  },

  /* ======================================================
     STORAGE & STATEFUL WORKLOADS
     ====================================================== */
  {
    id: 22,
    difficulty: "medium",
    category: "k8s-storage",
    question: "A pod is stuck in 'ContainerCreating'. Describe shows 'FailedAttachVolume' because the disk is already attached to another node in a different Availability Zone. Which K8s object handles the volume's lifecycle independently of the pod?",
    options: [
      "ConfigMap",
      "PersistentVolume (PV)",
      "EmptyDir",
      "StorageClass"
    ],
    answer: 1,
    explanation: "The PersistentVolume (PV) is the cluster-level resource that represents the actual storage. The PersistentVolumeClaim (PVC) is the pod's request for that storage.",
    hint: "It's the bridge between the pod and the physical cloud disk."
  },

  /* ======================================================
     NETWORKING (HYBRID & CLOUD)
     ====================================================== */
  {
    id: 23,
    difficulty: "hard",
    category: "cloud-networking",
    question: "You need to connect an AWS VPC to an Azure VNet for a cross-cloud application. You want to avoid the public internet. What is the most 'Enterprise' solution?",
    options: [
      "Public Site-to-Site VPN",
      "AWS Direct Connect and Azure ExpressRoute connected via a Cloud Exchange (e.g., Equinix)",
      "Peering both clouds using a standard Public IP",
      "Using a very long Ethernet cable"
    ],
    answer: 1,
    explanation: "For low latency and high security, enterprises use dedicated circuits (Direct Connect/ExpressRoute) joined at a meet-me-point or via a private provider network.",
    hint: "This is 'Dedicated' and 'Private'."
  },

  /* ======================================================
     TRICKY "REAL WORLD" SCENARIOS
     ====================================================== */
  {
    id: 24,
    difficulty: "hard",
    category: "k8s-operations",
    question: "An AKS cluster upgrade failed halfway through. Some nodes are on v1.27 and some are on v1.28. The API server is unresponsive. What is the first priority?",
    options: [
      "Delete the cluster and start over",
      "Check the Azure Activity Log and 'Resource Health' for the Control Plane",
      "Scale the deployments to zero to save costs",
      "Try to manually SSH into the nodes and update the Kubelet"
    ],
    answer: 1,
    explanation: "In a managed service like AKS, you cannot access the control plane nodes directly. You must use the cloud provider's health logs to diagnose why the managed upgrade stalled.",
    hint: "In PaaS/Managed K8s, the provider manages the Control Plane."
  },
  {
    id: 25,
    difficulty: "medium",
    category: "iac-management",
    question: "You have a large Terraform state file. Two developers run 'terraform apply' at the exact same time. What prevents them from corrupting the infrastructure?",
    options: [
      "Git branch locks",
      "State Locking (e.g., via DynamoDB for AWS or Blob Storage for Azure)",
      "Terraform does not allow simultaneous runs by default",
      "The Cloud Provider's API will reject the second request"
    ],
    answer: 1,
    explanation: "Remote backends (S3/GCS/Azure) support state locking. When one user starts an operation, Terraform creates a 'lock' to prevent others from modifying the state simultaneously.",
    hint: "How does Terraform keep its 'Map' safe?"
  },
  
/* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT - BATCH 3 (IDs 26-75)
   ====================================================== */


  /* ======================================================
     KUBERNETES NETWORKING & SERVICE MESH
     ====================================================== */
  {
    id: 26,
    difficulty: "hard",
    category: "k8s-networking",
    question: "You are implementing an Istio Service Mesh. You notice that egress traffic from your pods to an external third-party API is being blocked by default. What is the most 'Zero-Trust' way to allow this traffic while maintaining visibility?",
    options: [
      "Set 'outboundTrafficPolicy.mode' to ALLOW_ANY",
      "Create a 'ServiceEntry' defining the external host and a 'Gateway' for egress",
      "Disable the Istio sidecar for those specific pods",
      "Use a Kubernetes NetworkPolicy with an IP-based allowlist"
    ],
    answer: 1,
    explanation: "A ServiceEntry allows you to add an entry to Istio's internal service registry, mapping external DNS names to the mesh. This allows Istio features (like mTLS and metrics) to apply to outbound traffic.",
    hint: "Think about how Istio tracks services outside the cluster."
  },
  {
    id: 27,
    difficulty: "hard",
    category: "k8s-security",
    question: "A security audit requires that all traffic between microservices in your EKS cluster be encrypted and that identity be verified at the application level. Which architectural pattern satisfies this without changing the application code?",
    options: [
      "Using AWS Security Groups at the pod level",
      "Implementing Mutual TLS (mTLS) via a Service Mesh (Istio/Linkerd)",
      "Using a VPN between every pod",
      "Encrypting the EBS volumes where the pods are running"
    ],
    answer: 1,
    explanation: "mTLS provides both encryption in transit and peer identity verification. Service meshes automate the certificate rotation and handshake process via sidecars (Envoy).",
    hint: "Encryption + Peer Identity without code changes."
  },

  /* ======================================================
     OBSERVABILITY: PROMETHEUS & OPENTELEMETRY
     ====================================================== */
  {
    id: 28,
    difficulty: "hard",
    category: "observability-prometheus",
    question: "You are observing high 'scrape_duration' and Prometheus is failing to keep up with ingestion. You find that a specific team is exporting a metric called 'http_request_duration_seconds' with a label for 'full_url'. Why is this a problem?",
    options: [
      "The label name is too long",
      "The 'full_url' label creates a Cardinality Explosion because every unique URL (including query params) creates a new time series",
      "Prometheus does not support the 'seconds' unit",
      "The metric should be a Counter, not a Histogram"
    ],
    answer: 1,
    explanation: "Metrics should have low-cardinality labels. URLs often contain unique IDs or query parameters, creating millions of unique time series that overwhelm the Prometheus TSDB memory.",
    hint: "How many unique values can that label have?"
  },
  {
    id: 29,
    difficulty: "hard",
    category: "observability-otel",
    question: "When deploying OpenTelemetry (OTel), what is the primary architectural benefit of using an 'OTel Collector' instead of sending data directly from the SDK to the backend (e.g., Jaeger/Honeycomb)?",
    options: [
      "It makes the application code run faster",
      "It allows for offloading data processing (sampling, filtering, retries) and vendor-agnostic routing outside the application process",
      "It is the only way to support Java applications",
      "It automatically encrypts the local hard drive"
    ],
    answer: 1,
    explanation: "The Collector acts as a proxy that can aggregate, transform, and multi-route data. This decouples the application's telemetry instrumentation from the specific backend used for storage.",
    hint: "Think about 'offloading' and 'vendor neutrality'."
  },

  /* ======================================================
     CI/CD, GITOPS & HELM
     ====================================================== */
  {
    id: 30,
    difficulty: "medium",
    category: "cicd-gitops",
    question: "In an ArgoCD-managed cluster, you notice 'OutOfSync' status even though the Git manifests match the desired state. You find that an Admission Controller is automatically adding default 'sidecars' to every pod. How should you handle this in ArgoCD?",
    options: [
      "Delete the Admission Controller",
      "Use 'ignoreDifferences' in the ArgoCD Application spec for those specific fields",
      "Manually edit the Git repo to include the sidecars",
      "Disable the ArgoCD sync process"
    ],
    answer: 1,
    explanation: "Since the cluster is modifying the resource post-submission (mutating), ArgoCD sees a difference. 'ignoreDifferences' tells ArgoCD to overlook specific fields during the comparison.",
    hint: "How to tell ArgoCD to 'look the other way' for specific fields?"
  },
  {
    id: 31,
    difficulty: "hard",
    category: "helm-operations",
    question: "You need to deploy a database migration job *before* the main application pods start during a Helm install. Which Helm feature ensures this execution order?",
    options: [
      "Using a 'Deployment' for the migration",
      "Helm Hooks (specifically 'pre-install' or 'pre-upgrade')",
      "Alphabetical naming of YAML files",
      "Using 'depends_on' in the values.yaml"
    ],
    answer: 1,
    explanation: "Helm Hooks allow you to run specific jobs at various points in the release lifecycle. A 'pre-install' hook will complete before the rest of the manifests are applied.",
    hint: "Lifecycle events in Helm."
  },

  /* ======================================================
     CLOUD ARCHITECTURE (AWS & AZURE)
     ====================================================== */
  {
    id: 32,
    difficulty: "hard",
    category: "cloud-networking",
    question: "An application in Azure needs to access an Azure SQL Database. For compliance, the traffic must *never* leave the Microsoft backbone and the SQL DB must not have a public IP. Which feature is required?",
    options: [
      "Service Endpoints",
      "Private Link / Private Endpoint",
      "VNet Peering",
      "Azure Bastion"
    ],
    answer: 1,
    explanation: "Private Link maps a private IP from your VNet to a specific service instance. This ensures traffic is entirely internal and the service is not exposed to the internet.",
    hint: "Which one provides a 'Private IP' for a PaaS service?"
  },
  {
    id: 33,
    difficulty: "medium",
    category: "aws-storage",
    question: "Your AWS EKS cluster uses EBS volumes for stateful pods. You observe that performance drops significantly every day at 2 PM during a heavy reporting job. 'VolumeQueueLength' is high. What should you upgrade?",
    options: [
      "The Instance Type to a larger family",
      "The EBS volume type from gp2 to gp3/io2 and increase Provisioned IOPS",
      "The VPC bandwidth",
      "The S3 bucket policy"
    ],
    answer: 1,
    explanation: "High queue length on storage usually indicates the disk cannot handle the number of I/O requests. GP3 and IO2 allow you to provision IOPS independently of storage size.",
    hint: "Storage-level bottlenecks."
  },

  /* ======================================================
     KAFKA & DATA OPERATIONS
     ====================================================== */
  {
    id: 34,
    difficulty: "hard",
    category: "kafka-architecture",
    question: "A Kafka producer is configured with 'acks=1'. During a broker failure, the producer receives an acknowledgment, but the data is lost before it can be replicated to other brokers. What is the fix for maximum durability?",
    options: [
      "Set 'acks=0'",
      "Set 'acks=all' (or -1) and ensure 'min.insync.replicas' is at least 2",
      "Increase the number of partitions",
      "Decrease the retention period"
    ],
    answer: 1,
    explanation: "'acks=all' ensures the leader waits for all in-sync replicas to acknowledge. Combined with 'min.insync.replicas', it prevents data loss if the leader fails immediately after acknowledging.",
    hint: "Wait for the 'whole team' to say yes."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "kafka-consumers",
    question: "You use KEDA to scale your Kafka consumers. You want to scale based on how many messages are waiting to be processed, not just CPU usage. Which KEDA scaler should you use?",
    options: [
      "CPU Scaler",
      "Memory Scaler",
      "Kafka Scaler (using consumer group lag)",
      "Cron Scaler"
    ],
    answer: 2,
    explanation: "Lag is the correct metric for scaling asynchronous workers. If the lag increases, KEDA adds more pods to process the backlog regardless of current CPU usage.",
    hint: "Scaling based on the 'backlog'."
  },

  /* ======================================================
     SRE, RESILIENCE & CHAOS
     ====================================================== */
  {
    id: 36,
    difficulty: "hard",
    category: "sre-resilience",
    question: "In a microservices architecture, Service A calls Service B. Service B is currently timing out. Service A continues to retry rapidly, further overwhelming Service B. Which pattern prevents this 'Retry Storm'?",
    options: [
      "Rate Limiting",
      "Circuit Breaker",
      "Load Balancing",
      "Horizontal Pod Autoscaling"
    ],
    answer: 1,
    explanation: "A Circuit Breaker 'trips' after a certain number of failures, immediately returning an error for subsequent calls without hitting the downstream service, allowing it time to recover.",
    hint: "Stop the flow when the destination is 'broken'."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "sre-concepts",
    question: "What is the difference between an SLI and an SLO?",
    options: [
      "An SLI is a target; an SLO is the actual measurement",
      "An SLI is the metric (e.g., latency); an SLO is the target value (e.g., < 200ms)",
      "SLOs are for developers; SLIs are for customers",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Service Level Indicator (SLI) is the quantitative measure (the 'what'); Service Level Objective (SLO) is the target level we want to achieve (the 'how much').",
    hint: "Metric vs. Target."
  },

  /* ======================================================
     SECURITY & DEVSECOPS
     ====================================================== */
  {
    id: 38,
    difficulty: "hard",
    category: "security-vault",
    question: "You are using HashiCorp Vault for dynamic secrets. Why are 'Dynamic Secrets' considered more secure than 'Static Secrets'?",
    options: [
      "They are longer and harder to crack",
      "They are generated on-demand with a short Time-to-Live (TTL) and are automatically revoked, minimizing the window of exposure",
      "They are stored in a Git repository",
      "They don't require encryption"
    ],
    answer: 1,
    explanation: "Dynamic secrets (like temporary DB credentials) do not exist until requested and disappear shortly after, ensuring that leaked credentials have very limited utility.",
    hint: "Ephemeral vs. Permanent."
  },
  {
    id: 39,
    difficulty: "hard",
    category: "security-container",
    question: "A container scan reveals a vulnerability in the 'base image'. What is the most effective senior architect's response?",
    options: [
      "Ignore it if the app is behind a firewall",
      "Switch to a 'Distroless' image or a minimal base like Alpine to reduce the attack surface",
      "Manually patch the running container using SSH",
      "Write a script to delete the vulnerable files after the container starts"
    ],
    answer: 1,
    explanation: "Minimal images (Distroless/Alpine) remove unnecessary binaries (like shells or package managers), significantly reducing the number of potential vulnerabilities and the attack surface.",
    hint: "Smaller footprint = fewer targets."
  },

  /* ======================================================
     FINOPS & COST OPTIMIZATION
     ====================================================== */
  {
    id: 40,
    difficulty: "medium",
    category: "finops",
    question: "You are tasked with reducing the cost of a non-production AKS cluster that is only used during business hours. What is the most effective automation?",
    options: [
      "Deleting the cluster every night and recreating it",
      "Using the 'AKS Stop/Start' feature or scaling the node pools to zero via a scheduled task",
      "Moving all pods to a single node",
      "Turning off logging"
    ],
    answer: 1,
    explanation: "Azure allows you to stop the cluster entirely (keeping configuration) or scale node pools to 0, which eliminates the cost of the VMs while the cluster is not in use.",
    hint: "Pause the bill without losing the work."
  },

  /* ======================================================
     ADVANCED TROUBLESHOOTING
     ====================================================== */
  {
    id: 41,
    difficulty: "hard",
    category: "k8s-troubleshooting",
    question: "A pod is in 'CrashLoopBackOff'. The logs show nothing. The 'describe pod' shows 'OOMKilled'. What does this mean, and what is the fix?",
    options: [
      "The pod ran out of CPU; increase 'cpu limits'",
      "The pod exceeded its memory limit; increase the 'memory limits' or fix a memory leak",
      "The disk is full; add a PersistentVolume",
      "The network is down; check the CNI"
    ],
    answer: 1,
    explanation: "OOMKilled (Out Of Memory) occurs when a container tries to use more RAM than its 'limit'. Kubernetes kills the process to protect the node's stability.",
    hint: "It's a memory issue, not CPU."
  },
  {
    id: 42,
    difficulty: "hard",
    category: "k8s-scheduling",
    question: "You want to ensure that two specific pods (e.g., a Web Frontend and a Cache) are always placed on the same physical node to minimize network latency. Which K8s feature do you use?",
    options: [
      "Pod Anti-Affinity",
      "Pod Affinity (with topologyKey: kubernetes.io/hostname)",
      "Taints and Tolerations",
      "Resource Quotas"
    ],
    answer: 1,
    explanation: "Pod Affinity tells the scheduler to place a pod near other pods that match a specific label. Using 'hostname' as the topology key ensures they land on the same node.",
    hint: "Affinity = Attraction."
  },

  /* ======================================================
     LOGGING & ELK ARCHITECTURE
     ====================================================== */
  {
    id: 43,
    difficulty: "hard",
    category: "elk-ingestion",
    question: "Your ELK stack is receiving logs from 500 different microservices. You want to parse the 'timestamp' field from the log message and use it as the official Elasticsearch document timestamp. Which component should handle this?",
    options: [
      "Kibana",
      "The 'Date' filter in Logstash or an 'Ingest Pipeline' in Elasticsearch",
      "The application code",
      "Filebeat"
    ],
    answer: 1,
    explanation: "Logstash or Ingest Pipelines are used to transform and normalize data. The 'Date' processor/filter converts a string timestamp into the @timestamp field used for indexing.",
    hint: "Transformation happens during ingestion."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "elk-storage",
    question: "You want to implement 'Snapshot Lifecycle Management' (SLM) for your ELK cluster. What is the purpose of this?",
    options: [
      "To make Kibana load faster",
      "To automate backups of indices to external storage (like S3/Azure Blob) for disaster recovery",
      "To encrypt the data in transit",
      "To increase the search speed"
    ],
    answer: 1,
    explanation: "SLM automates the process of taking backups (snapshots) and cleaning up old ones, ensuring data can be recovered if the cluster is lost.",
    hint: "Backups for the search engine."
  },

  /* ======================================================
     MISC SENIOR ARCHITECTURE
     ====================================================== */
  {
    id: 45,
    difficulty: "hard",
    category: "cloud-patterns",
    question: "What is 'Thundering Herd' problem in the context of a cache failure, and how do you prevent it?",
    options: [
      "Too many logs being generated; fix with sampling",
      "When a cache expires and all users hit the database at once; fix with 'cache warming' or 'request collapsing'",
      "When nodes fail simultaneously; fix with multi-AZ",
      "When the CI/CD pipeline is too slow; fix with parallelism"
    ],
    answer: 1,
    explanation: "If a popular cache key expires, the sudden surge of traffic to the database can crash it. Protective measures include staggering expiration times or ensuring only one request fetches the data while others wait.",
    hint: "Sudden rush to the source of truth."
  },
  {
    id: 46,
    difficulty: "hard",
    category: "k8s-architecture",
    question: "When using 'Sidecar Containers' (like a logging agent or proxy), what happens if the Sidecar container fails but the main application container is healthy?",
    options: [
      "The pod is marked as healthy",
      "The Kubelet will restart the failed sidecar container; the pod status depends on the restart policy",
      "The entire node is rebooted",
      "The main container is automatically stopped"
    ],
    answer: 1,
    explanation: "Kubernetes manages containers within a pod individually. If one fails, it is restarted according to the 'restartPolicy', but the other containers in the pod keep running.",
    hint: "Containers in a pod share the network, but are individual processes."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "iac-management",
    question: "In Terraform, what is a 'Provider'?",
    options: [
      "A person who writes code",
      "A plugin that allows Terraform to communicate with a specific API (e.g., AWS, Azure, Google Cloud)",
      "A local folder where state is stored",
      "A variable that defines the project name"
    ],
    answer: 1,
    explanation: "Providers are the bridge between Terraform's abstract language and the actual APIs of cloud or SaaS platforms.",
    hint: "The 'translator' for the cloud."
  },
  {
    id: 48,
    difficulty: "hard",
    category: "observability-concepts",
    question: "What is 'Distributed Tracing Propagation'?",
    options: [
      "Copying logs to a backup server",
      "The process of passing trace IDs and metadata (Context) through HTTP headers as a request moves across service boundaries",
      "Sending metrics to a central dashboard",
      "Installing agents on every VM"
    ],
    answer: 1,
    explanation: "Propagation is how the 'Trace ID' travels. Without it, separate services wouldn't know they are part of the same original user request.",
    hint: "Passing the 'ID' along the chain."
  },
  {
    id: 49,
    difficulty: "hard",
    category: "sre-resilience",
    question: "You want to implement 'Graceful Shutdown' for your pods to ensure no requests are dropped during a scale-down. Which signal does Kubernetes send to the container, and which YAML field allows for extra time?",
    options: [
      "SIGKILL and 'restartPolicy'",
      "SIGTERM and 'terminationGracePeriodSeconds'",
      "SIGSTOP and 'timeoutSeconds'",
      "SIGINT and 'readinessProbe'"
    ],
    answer: 1,
    explanation: "K8s sends SIGTERM to the app process. The app should stop accepting new work and finish current tasks. 'terminationGracePeriodSeconds' defines how long K8s waits before force-killing with SIGKILL.",
    hint: "The 'Nice' signal vs. the 'Hard' kill."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "cicd-security",
    question: "What is 'Shift Left' security?",
    options: [
      "Moving security checks from the production phase to the earlier stages of development (e.g., IDE, Commit, Build)",
      "Hiring more security engineers",
      "Buying a more expensive firewall",
      "Only allowing senior developers to push code"
    ],
    answer: 0, // In this array, using 0-based for the last few to match previous pattern logic
    explanation: "Shift Left aims to find and fix vulnerabilities as early as possible in the lifecycle, reducing cost and risk.",
    hint: "Earlier in the timeline."
  },
 
/* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT - BATCH 4 (IDs 51-100)
   ====================================================== */

  /* ======================================================
     KUBERNETES: STATEFUL WORKLOADS & OPERATORS
     ====================================================== */
  {
    id: 51,
    difficulty: "hard",
    category: "k8s-stateful",
    question: "You are deploying a 3-node MongoDB cluster using a StatefulSet. Why is a 'Headless Service' (clusterIP: None) required for this architecture?",
    options: [
      "To provide a single load-balanced IP for all nodes",
      "To allow the MongoDB nodes to discover each other's individual Pod DNS identities (pod-name.service-name) for replica set formation",
      "To expose the database to the public internet",
      "To disable networking for the database for security reasons"
    ],
    answer: 1,
    explanation: "StatefulSets require a Headless Service to maintain the 'Network Identity' of each pod. This allows nodes to address each other directly (e.g., mongo-0, mongo-1) which is essential for clustering logic.",
    hint: "Think about 'Direct Pod-to-Pod communication' vs. 'Load Balancing'."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "k8s-operator-design",
    question: "An Operator's 'Reconciliation Loop' is constantly failing with 'Conflict' errors when updating a Custom Resource (CR). What is the standard architectural fix for this in Kubernetes development?",
    options: [
      "Increase the CPU of the Operator pod",
      "Implement exponential backoff and use 'ResourceVersion' for optimistic concurrency control",
      "Disable the API server's cache",
      "Delete and recreate the CR on every loop"
    ],
    answer: 1,
    explanation: "Kubernetes uses optimistic concurrency. If the resource has changed since the Operator last read it, the update will fail. Operators must catch this, re-read the latest version, and retry.",
    hint: "How does K8s handle two people editing the same file?"
  },

  /* ======================================================
     KAFKA: TRANSACTIONS & EXACTLY-ONCE
     ====================================================== */
  {
    id: 53,
    difficulty: "hard",
    category: "kafka-durability",
    question: "To achieve 'Exactly-Once Semantics' (EOS) in a Kafka-to-Kafka streaming application, which producer configuration is mandatory?",
    options: [
      "acks=1",
      "enable.idempotence=true and transactional.id=some-unique-string",
      "retries=0",
      "compression.type=gzip"
    ],
    answer: 1,
    explanation: "EOS requires idempotency (to prevent duplicates on retry) and transactions (to ensure atomic writes across multiple partitions).",
    hint: "Atomic + Non-duplicating."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "kafka-rebalancing",
    question: "A large Kafka consumer group is experiencing 'Rebalance Storms,' where consumers stop processing for several minutes during a rebalance. Which consumer configuration helps mitigate this by allowing consumers to keep their partitions if the rebalance is 'Cooperative'?",
    options: [
      "partition.assignment.strategy = CooperativeStickyAssignor",
      "session.timeout.ms = 100",
      "auto.offset.reset = earliest",
      "heartbeat.interval.ms = 10000"
    ],
    answer: 0,
    explanation: "The CooperativeStickyAssignor reduces the 'Stop-the-World' effect by only revoking partitions that actually need to move, rather than revoking all partitions from all consumers.",
    hint: "Look for a strategy that is 'Sticky'."
  },

  /* ======================================================
     NETWORKING: MULTI-REGION & HYBRID
     ====================================================== */
  {
    id: 55,
    difficulty: "hard",
    category: "cloud-networking",
    question: "You have a hybrid-cloud setup using a VPN. You notice that large file transfers fail, but small 'pings' work fine. You suspect an MTU (Maximum Transmission Unit) mismatch. What is the standard fix on the network interface?",
    options: [
      "Disable the firewall",
      "Enable 'MSS Clamping' or reduce the MTU to account for the VPN overhead (typically to 1350 or 1400)",
      "Increase the MTU to 9000 (Jumbo Frames)",
      "Switch from UDP to TCP"
    ],
    answer: 1,
    explanation: "VPN headers take up space. If the packet + VPN header exceeds the 1500-byte MTU of the underlying internet, the packet is dropped or fragmented. MSS clamping ensures the TCP handshake negotiates a smaller size.",
    hint: "Think 'Packet size minus Header overhead'."
  },
  {
    id: 56,
    difficulty: "hard",
    category: "azure-networking",
    question: "You are designing a global Azure application. You need to route users to the nearest healthy region, but the application uses non-HTTP protocols (e.g., custom TCP). Which service should you use?",
    options: [
      "Azure Front Door",
      "Azure Traffic Manager (DNS-based) or Azure Cross-Region Load Balancer",
      "Application Gateway",
      "Standard VNet Peering"
    ],
    answer: 1,
    explanation: "Front Door is only for HTTP/S. For global TCP/UDP routing, Traffic Manager (via DNS) or the Global/Cross-Region Load Balancer is required.",
    hint: "TCP support vs. HTTP-only."
  },

  /* ======================================================
     OBSERVABILITY: FINOPS & SAMPLING
     ====================================================== */
  {
    id: 57,
    difficulty: "medium",
    category: "observability-finops",
    question: "Your Splunk/ELK costs have tripled. You find that 90% of your logs are 'HTTP 200 OK' traces. What architectural pattern reduces cost without losing 'Error' visibility?",
    options: [
      "Turning off logging entirely",
      "Implementing 'Dynamic Sampling' (e.g., keep 1% of 200 OKs and 100% of 5xx Errors)",
      "Increasing the log retention to 1 year",
      "Compressing the logs on the server"
    ],
    answer: 1,
    explanation: "Sampling allows you to maintain statistical confidence for successful requests while ensuring every failure is captured for debugging.",
    hint: "Keep the bad, sample the good."
  },
  {
    id: 58,
    difficulty: "hard",
    category: "observability-alerts",
    question: "You are setting up an alert for a 'Long Tail' latency issue (P99). Why is it better to use a 'Histogram' bucket instead of a simple 'Average' (Mean)?",
    options: [
      "Averages are faster to calculate",
      "Averages hide outliers; a small number of very slow requests won't significantly move the mean, but will show up in P99/P99.9 buckets",
      "Histograms use less memory",
      "K8s only supports Histograms"
    ],
    answer: 1,
    explanation: "Averages mask the 'misery' of your unluckiest users. Histograms allow you to see the distribution and specifically target the 1% or 0.1% of worst-case latencies.",
    hint: "Outliers vs. Medians."
  },

  /* ======================================================
     RESILIENCE & FAILURE MODES
     ====================================================== */
  {
    id: 59,
    difficulty: "hard",
    category: "sre-resilience",
    question: "A 'Poison Pill' message is crashing your Kafka consumer repeatedly. Every time the consumer restarts, it reads the same bad message and crashes again. How do you break this cycle in production?",
    options: [
      "Restart the Kafka Broker",
      "Manually advance the Consumer Offset past the poison pill or implement a Try/Catch with a Dead Letter Queue (DLQ)",
      "Increase the RAM of the consumer",
      "Delete the Kafka Topic"
    ],
    answer: 1,
    explanation: "A DLQ allows the application to 'sideline' the problematic message and continue processing others. Alternatively, moving the offset is a manual 'emergency' fix.",
    hint: "How to skip the 'bad' and move to the 'next'?"
  },
  {
    id: 60,
    difficulty: "hard",
    category: "k8s-failure",
    question: "Your cluster is using 'Spot Instances' (AWS) or 'Spot VMs' (Azure) to save costs. How should you configure your StatefulSet to handle the 2-minute eviction warning gracefully?",
    options: [
      "Spot instances cannot run StatefulSets",
      "Use 'Pre-Stop Hooks' to trigger a backup or graceful shutdown and ensure replicas are spread across On-Demand nodes as well",
      "Set replicas to 1",
      "Increase the 'terminationGracePeriodSeconds' to 3600"
    ],
    answer: 1,
    explanation: "Pre-stop hooks run when the eviction signal is received. For stateful workloads, you must assume nodes can disappear and use a mix of 'Spot' and 'On-Demand' to maintain quorum.",
    hint: "What to do *before* the node dies?"
  },

  /* ======================================================
     SECURITY & DEVSECOPS (IDs 61-100 preview)
     ====================================================== */
  {
    id: 61,
    difficulty: "medium",
    category: "devsecops-cicd",
    question: "You want to implement 'Static Application Security Testing' (SAST) in your pipeline. Where does this run?",
    options: [
      "On the running production environment",
      "On the source code before it is compiled/packaged",
      "Inside the database",
      "On the developer's laptop only"
    ],
    answer: 1,
    explanation: "SAST scans the source code for patterns indicating vulnerabilities (like SQL injection) without executing the code.",
    hint: "Static = Not running."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "k8s-security",
    question: "What is 'Runtime Security' in the context of Kubernetes (e.g., using Falco)?",
    options: [
      "Checking the YAML before deployment",
      "Monitoring system calls and container activity for suspicious behavior (e.g., a shell being opened in a web pod) at execution time",
      "Encrypting the hard drive",
      "Setting up a password for the cluster"
    ],
    answer: 1,
    explanation: "Runtime security detects threats after the pod is already running by looking for abnormal behavior in the OS kernel/syscalls.",
    hint: "Detecting the 'Intruder' while they are inside."
  },
  
/* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT - BATCH 5 (IDs 63-112)
   ====================================================== */

  /* ======================================================
     KAFKA CONNECT & SCHEMA GOVERNANCE
     ====================================================== */
  {
    id: 63,
    difficulty: "hard",
    category: "kafka-connect",
    question: "You need to mask PII data (e.g., credit card numbers) in real-time as data flows from a source database into Kafka. Which Kafka Connect feature allows you to modify individual messages without writing a custom stream processing app?",
    options: [
      "Kafka Streams API",
      "Single Message Transforms (SMTs)",
      "KSQLDB",
      "Kafka Connect Converters"
    ],
    answer: 1,
    explanation: "SMTs are applied to messages as they pass through Connect. They are ideal for simple transformations like masking fields, routing to specific topics, or changing data types.",
    hint: "Think of 'lightweight transformations' within the connector."
  },
  {
    id: 64,
    difficulty: "hard",
    category: "schema-registry",
    question: "A producer updates its schema by removing a field that has a default value. Which Schema Registry compatibility mode ensures that existing consumers (still using the old schema) can still read the new messages?",
    options: [
      "BACKWARD Compatibility",
      "FORWARD Compatibility",
      "FULL Compatibility",
      "NONE"
    ],
    answer: 1,
    explanation: "FORWARD compatibility allows older consumers to read data produced with a newer schema. Removing a field with a default value is a forward-compatible change.",
    hint: "New producer, old consumer."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "kafka-ops",
    question: "You notice that your Kafka topic size is growing indefinitely even though you only care about the latest value for each key (e.g., user profile updates). Which cleanup policy should you enable?",
    options: [
      "delete",
      "compact",
      "truncate",
      "snapshot"
    ],
    answer: 1,
    explanation: "Log compaction ensures that Kafka retains at least the last known value for each message key within the log of data for a single topic partition.",
    hint: "Keep the 'latest' state per key."
  },

  /* ======================================================
     INFRASTRUCTURE AS CODE (TERRAFORM / BICEP)
     ====================================================== */
  {
    id: 66,
    difficulty: "hard",
    category: "iac-terraform",
    question: "When refactoring Terraform code, you move a resource from the root module to a child module. On the next 'plan', Terraform wants to destroy the old resource and create a new one. How do you prevent this without touching the actual cloud infrastructure?",
    options: [
      "Use 'terraform refresh'",
      "Use 'terraform state mv' to manually update the state mapping",
      "Use 'terraform import'",
      "Add a 'lifecycle { ignore_changes = all }' block"
    ],
    answer: 1,
    explanation: "The 'state mv' command allows you to rename or move resources in the state file so that Terraform recognizes they are the same objects under a different address.",
    hint: "Refactoring the 'map' to match the 'terrain'."
  },
  {
    id: 67,
    difficulty: "hard",
    category: "iac-patterns",
    question: "You need to create 50 S3 buckets with unique names defined in a list. Why is 'for_each' generally preferred over 'count' in this scenario?",
    options: [
      "for_each is faster",
      "If you remove an item from the middle of a list, 'count' will force a recreation/rename of all subsequent resources; 'for_each' tracks resources by their unique key.",
      "count only works with numbers",
      "for_each automatically enables encryption"
    ],
    answer: 1,
    explanation: "Using 'count' maps resources to index integers (0, 1, 2...). Removing index 1 shifts index 2 into index 1, causing a destructive update. 'for_each' maps to a stable key (e.g., the bucket name).",
    hint: "Index-based vs. Key-based mapping."
  },
  {
    id: 68,
    difficulty: "medium",
    category: "iac-governance",
    question: "What is the primary benefit of using a 'Terraform Remote Backend' (like S3 + DynamoDB) over a local state file in a team environment?",
    options: [
      "It makes the code run faster",
      "It provides state locking to prevent concurrent modifications and a central source of truth for all team members",
      "It eliminates the need for AWS credentials",
      "It automatically generates documentation"
    ],
    answer: 1,
    explanation: "Remote backends enable collaboration by ensuring everyone uses the same state and preventing two people from running 'apply' simultaneously via locking.",
    hint: "Concurrency and Synchronization."
  },

  /* ======================================================
     KUBERNETES DAY-2 OPERATIONS
     ====================================================== */
  {
    id: 69,
    difficulty: "hard",
    category: "k8s-resilience",
    question: "You want to ensure that a cluster autoscaler doesn't evict too many pods of a critical application during a node drain. Which Kubernetes object should you define?",
    options: [
      "ResourceQuota",
      "PodDisruptionBudget (PDB)",
      "HorizontalPodAutoscaler (HPA)",
      "LimitRange"
    ],
    answer: 1,
    explanation: "A PDB limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions (like node upgrades/drains).",
    hint: "Minimum availability 'Insurance'."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "k8s-autoscaling",
    question: "Your application has high memory usage but low CPU. The HPA (based on CPU) is not triggering, causing pods to be OOMKilled. Which autoscaler should be used to adjust the 'requests' and 'limits' of the pods automatically over time?",
    options: [
      "Horizontal Pod Autoscaler (HPA)",
      "Vertical Pod Autoscaler (VPA)",
      "Cluster Autoscaler (CA)",
      "Node Problem Detector"
    ],
    answer: 1,
    explanation: "The VPA analyzes historical usage and adjusts the resource requests/limits of your pods so they are sized correctly, preventing OOM issues or wasted resources.",
    hint: "Scaling 'Up' (Size) vs Scaling 'Out' (Count)."
  },

  /* ======================================================
     OBSERVABILITY: TRACING & ADVANCED METRICS
     ====================================================== */
  {
    id: 71,
    difficulty: "hard",
    category: "observability-metrics",
    question: "You see a spike in latency in your Prometheus dashboard. You want to click a specific point on the graph and see the exact trace associated with that high-latency request. Which feature is required?",
    options: [
      "Prometheus Recording Rules",
      "Exemplars",
      "Remote Write",
      "Alertmanager Silencing"
    ],
    answer: 1,
    explanation: "Exemplars are metadata (like a TraceID) attached to a specific metric observation. This creates a direct link between a metric spike and a specific trace in your tracing system.",
    hint: "The 'Bridge' between metrics and traces."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "observability-networking",
    question: "You need to monitor network traffic and latency between pods without instrumenting the application code or using a sidecar proxy. Which Linux technology enables this via the kernel?",
    options: [
      "IPtables",
      "eBPF (Extended Berkeley Packet Filter)",
      "Nginx",
      "Kube-proxy"
    ],
    answer: 1,
    explanation: "eBPF allows you to run sandboxed programs in the Linux kernel. Tools like Cilium or Pixie use eBPF to observe network calls, security events, and performance without touching the app code.",
    hint: "Observability from 'inside' the OS kernel."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "sre-monitoring",
    question: "Which monitoring strategy involves observing the system from the outside (probing endpoints) to verify availability?",
    options: [
      "White-box monitoring",
      "Black-box monitoring",
      "Distributed Tracing",
      "Log Aggregation"
    ],
    answer: 1,
    explanation: "Black-box monitoring (like synthetic pings) tests the system as a user would, without knowledge of its internals. White-box monitoring uses internal metrics (like CPU/GC logs).",
    hint: "Probing from the 'outside-in'."
  },

  /* ======================================================
     NETWORKING & CLOUD SECURITY
     ====================================================== */
  {
    id: 74,
    difficulty: "hard",
    category: "cloud-networking",
    question: "In a 'Hub-and-Spoke' VNet/VPC architecture, you want to ensure that Spoke A can communicate with Spoke B, but they are not directly peered. How do you enable this routing?",
    options: [
      "Enable 'Allow Gateway Transit' in the Hub and use a Network Virtual Appliance (NVA) or Azure Firewall as a next hop",
      "Create a direct peering between Spoke A and Spoke B",
      "Use Public IPs for all services",
      "Spoke-to-Spoke communication is impossible in this model"
    ],
    answer: 0,
    explanation: "VPC/VNet peering is not transitive. To allow spokes to talk, traffic must be routed through a central appliance (Hub) that acts as a router.",
    hint: "Traffic must 'pass through' the Hub."
  },
  {
    id: 75,
    difficulty: "hard",
    category: "aws-security",
    question: "You want to prevent any account within your AWS Organization from ever disabling CloudTrail. Which tool allows you to set this 'Guardrail' globally?",
    options: [
      "IAM Policies",
      "Service Control Policies (SCPs)",
      "AWS Config",
      "Security Groups"
    ],
    answer: 1,
    explanation: "SCPs are organization-level policies that define the maximum available permissions for an account. They can explicitly 'Deny' actions even if an account admin has full IAM access.",
    hint: "The 'Max' permission boundary."
  },

  /* ======================================================
     REMAINING BATCH 5 PREVIEW (IDs 76-112)
     ====================================================== */
  {
    id: 76,
    difficulty: "medium",
    category: "devsecops-cicd",
    question: "What is 'DAST' (Dynamic Application Security Testing)?",
    options: [
      "Scanning source code for vulnerabilities",
      "Testing the running application for vulnerabilities by simulating external attacks (e.g., SQL injection)",
      "Managing database passwords",
      "Encrypting the build server"
    ],
    answer: 1,
    explanation: "DAST interacts with the application while it's running (in a test environment) to find vulnerabilities that only manifest at runtime.",
    hint: "Testing the 'Running' app."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "sre-concepts",
    question: "When calculating latency for an SLO, why is the 99th percentile (P99) often a better indicator of user experience than the average?",
    options: [
      "Averages are harder to compute",
      "Averages hide the 'tail'—a significant portion of users could be having a terrible experience that is masked by the majority of fast responses",
      "P99 is always lower than the average",
      "P99 is only used for networking issues"
    ],
    answer: 1,
    explanation: "High percentiles (P95, P99) show the 'worst case' experience. If the average is 100ms but the P99 is 5 seconds, 1% of your users are seeing extreme slowness.",
    hint: "Think about the 'unlucky' users."
  },
  {
    id: 78,
    difficulty: "hard",
    category: "k8s-security",
    question: "A pod needs to access an S3 bucket. Instead of hardcoding an AWS Access Key, you assign an IAM Role directly to the Kubernetes ServiceAccount. What is this feature called in EKS?",
    options: [
      "Node Instance Profile",
      "IAM Roles for Service Accounts (IRSA)",
      "Kube-Proxy",
      "VPC CNI"
    ],
    answer: 1,
    explanation: "IRSA uses OIDC to provide temporary AWS credentials to pods via a ServiceAccount, following the principle of least privilege and avoiding static keys.",
    hint: "Pod Identity."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "kafka-ops",
    question: "A Kafka cluster is running out of disk space. You decide to implement 'Tiered Storage'. What does this do?",
    options: [
      "Deletes old data automatically",
      "Offloads older log segments to cheaper object storage (like S3/Azure Blob) while keeping them searchable via the Kafka API",
      "Moves data to a different Kafka cluster",
      "Increases the compression ratio"
    ],
    answer: 1,
    explanation: "Tiered storage separates compute from storage, allowing you to retain years of data cost-effectively in S3 while the brokers only keep the 'Hot' data on local SSDs.",
    hint: "Local SSD for Hot data, S3 for Cold data."
  },
  {
    id: 80,
    difficulty: "medium",
    category: "iac-management",
    question: "In Terraform, what does the 'taint' command (now replaced by -replace) do?",
    options: [
      "Deletes the state file",
      "Marks a specific resource to be destroyed and recreated on the next 'apply', even if no code changes were made",
      "Encrypts the resource",
      "Hides the resource from the plan"
    ],
    answer: 1,
    explanation: "Tainting is used when a resource is in a bad state (e.g., a VM was manually tampered with) and you want Terraform to replace it with a fresh instance.",
    hint: "Force a 'Recreation'."
  },
  /* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT - BATCH 6 (IDs 81-130)
   ====================================================== */

  /* ======================================================
     SRE: ERROR BUDGETS & BURN RATES
     ====================================================== */
  {
    id: 81,
    difficulty: "hard",
    category: "sre-concepts",
    question: "Your service has an SLO of 99.9% availability. You are currently consuming your error budget at a rate that will exhaust it in exactly 24 hours. What is the 'Burn Rate' for this period?",
    options: [
      "1x",
      "14.4x",
      "30x",
      "720x"
    ],
    answer: 2,
    explanation: "A burn rate of 1x means you will exhaust your budget in exactly 30 days. To exhaust it in 1 day (24 hours), the burn rate is 30 / 1 = 30x.",
    hint: "Burn Rate = (Budget Period in hours) / (Time until exhaustion in hours)."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "sre-governance",
    question: "What is the primary architectural consequence of 'Exhausting an Error Budget' in a mature SRE organization?",
    options: [
      "All developers are fired",
      "A 'Feature Freeze' is implemented; all engineering effort shifts to reliability and fixing the causes of the outages until the budget recovers",
      "The SLO is lowered to 99%",
      "The monitoring system is disabled to stop the alerts"
    ],
    answer: 1,
    explanation: "Error budgets align incentives between Dev and Ops. If the budget is gone, the risk of new features is too high, necessitating a focus on stability.",
    hint: "Balancing 'Innovation' vs 'Reliability'."
  },

  /* ======================================================
     SERVICE MESH & ADVANCED TRAFFIC (ISTIO)
     ====================================================== */
  {
    id: 83,
    difficulty: "hard",
    category: "istio-traffic",
    question: "You want to implement 'Locality Load Balancing' in Istio to ensure that pods in 'us-east-1a' always prefer talking to services in 'us-east-1a' before failing over to 'us-east-1b'. Which Istio resource handles this?",
    options: [
      "VirtualService",
      "DestinationRule (outlierDetection + loadBalancer settings)",
      "Gateway",
      "ServiceEntry"
    ],
    answer: 1,
    explanation: "Locality-aware routing is configured in the DestinationRule. It requires 'outlierDetection' to be enabled so the mesh knows when a local instance is unhealthy and needs to fail over.",
    hint: "Think about 'Destination' behavior, not 'Routing' logic."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "istio-security",
    question: "You are implementing Istio mTLS in 'STRICT' mode. You notice that Prometheus (running outside the mesh) can no longer scrape metrics from your pods. What is the standard fix?",
    options: [
      "Switch mTLS to 'PERMISSIVE' mode",
      "Define a 'PeerAuthentication' policy that allows plain-text on the metrics port (e.g., 8080 or 15020)",
      "Disable Prometheus",
      "Expose the pods via a Public Load Balancer"
    ],
    answer: 1,
    explanation: "Strict mTLS requires all incoming traffic to be encrypted. Since the scraper isn't in the mesh, it fails. Port-level exceptions in PeerAuthentication allow the scraper to work while keeping app traffic secure.",
    hint: "Keep the app 'Locked' but the metrics 'Open'."
  },

  /* ======================================================
     KUBERNETES SECURITY (POLICY AS CODE)
     ====================================================== */
  {
    id: 85,
    difficulty: "hard",
    category: "k8s-policy",
    question: "You are using OPA Gatekeeper. You want to prevent any Service from being created with 'type: LoadBalancer' to avoid accidental public exposure and costs. Which OPA object defines the 'Logic' of this rule?",
    options: [
      "Constraint",
      "ConstraintTemplate (Rego logic)",
      "ConfigMap",
      "NetworkPolicy"
    ],
    answer: 1,
    explanation: "ConstraintTemplates hold the Rego code that defines the logic. Constraints are instances of those templates applied to specific resources.",
    hint: "Template = Logic; Constraint = Enforcement."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "k8s-security",
    question: "What is the primary risk of using 'hostPath' volumes in a Kubernetes deployment?",
    options: [
      "It is too slow",
      "It allows a container to escape its isolation and read/write files on the physical host node, leading to potential node takeover",
      "It consumes too much RAM",
      "It only works on AWS"
    ],
    answer: 1,
    explanation: "hostPath maps a directory from the node into the pod. If a pod is compromised, the attacker can access sensitive host files like /etc/shadow or Docker socket.",
    hint: "Escape the 'Sandbox'."
  },

  /* ======================================================
     KAFKA STREAMS & KSQLDB
     ====================================================== */
  {
    id: 87,
    difficulty: "hard",
    category: "kafka-streams",
    question: "In Kafka Streams, what is the difference between a KStream and a KTable?",
    options: [
      "KStream is for storage; KTable is for processing",
      "KStream is a record stream (fact); KTable is a changelog stream representing the latest 'state' for each key",
      "KStream only supports JSON; KTable only supports Avro",
      "There is no difference"
    ],
    answer: 1,
    explanation: "A KStream is like a list of transactions (Insert only). A KTable is like a database table where each new record with the same key updates the previous value (Upsert).",
    hint: "History vs. Current State."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "kafka-streams",
    question: "A Kafka Streams application is performing a 'Join' between two streams. Why is it mandatory that both streams have the same number of partitions and are co-partitioned by the same key?",
    options: [
      "To save disk space",
      "To ensure that records with the same key from both streams land on the same Kafka Streams instance (task) for processing",
      "It is a limitation of the Java programming language",
      "To reduce the number of brokers"
    ],
    answer: 1,
    explanation: "Joining happens locally in memory. If 'User 1' data is on Task A and 'Order 1' data is on Task B, they can never be joined. Co-partitioning ensures they meet on the same task.",
    hint: "Data must 'Meet' in the same worker node."
  },

  /* ======================================================
     CLOUD NETWORKING: GLOBAL TRAFFIC
     ====================================================== */
  {
    id: 89,
    difficulty: "hard",
    category: "azure-networking",
    question: "Your Azure application needs to handle millions of requests per second with SSL termination at the 'Edge' (closest to the user) and WAF protection. Which service is best suited?",
    options: [
      "Azure Load Balancer",
      "Azure Front Door",
      "Azure Application Gateway",
      "Azure Traffic Manager"
    ],
    answer: 1,
    explanation: "Front Door is a global, 'Anycast' edge service. It handles SSL termination at Microsoft's POPs (Point of Presence), providing lower latency and global scale compared to regional App Gateways.",
    hint: "Global Edge vs. Regional Gateway."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "aws-networking",
    question: "You have a fleet of EC2 instances in a Private Subnet. They need to download updates from the internet, but must not be reachable from the internet. What should you deploy in the Public Subnet?",
    options: [
      "Internet Gateway",
      "NAT Gateway",
      "VPC Peering",
      "Direct Connect"
    ],
    answer: 1,
    explanation: "A NAT Gateway allows instances in a private subnet to connect to the internet (outbound) but prevents the internet from initiating a connection to those instances (inbound).",
    hint: "One-way traffic to the web."
  },

  /* ======================================================
     OBSERVABILITY: ADVANCED LOGGING (ELK)
     ====================================================== */
  {
    id: 91,
    difficulty: "hard",
    category: "elk-stack",
    question: "Your Elasticsearch cluster is 'Yellow'. What does this status specifically indicate?",
    options: [
      "The cluster is completely down",
      "All primary shards are allocated, but at least one replica shard is unallocated (possibly due to a missing node)",
      "The disk is 100% full",
      "The JVM is crashing"
    ],
    answer: 1,
    explanation: "Yellow means data is available but not fully redundant. Red means at least one primary shard is missing (data loss). Green means all shards (primary and replica) are allocated.",
    hint: "Primary is OK, Replica is missing."
  },
  {
    id: 92,
    difficulty: "medium",
    category: "observability-concepts",
    question: "What is 'Structured Logging', and why is it superior to 'Plain Text' logging for a DevOps architect?",
    options: [
      "Logging in alphabetical order",
      "Logging in a machine-readable format like JSON; it allows log aggregators to parse fields automatically without complex RegEx",
      "Writing logs in bold text",
      "Logging only on weekends"
    ],
    answer: 1,
    explanation: "Structured logs (JSON) turn logs into data. Instead of searching 'Error occurred for user 123', you can query 'user_id: 123 AND level: ERROR' instantly.",
    hint: "JSON vs. String."
  },

  /* ======================================================
     FINOPS: CLOUD ECONOMICS
     ====================================================== */
  {
    id: 93,
    difficulty: "hard",
    category: "finops",
    question: "You have several 'Idle' Load Balancers and 'Unattached' EBS volumes. Which FinOps 'Phase' is primarily responsible for identifying and removing these 'Zombies'?",
    options: [
      "Inform",
      "Optimize",
      "Operate",
      "Forecast"
    ],
    answer: 1,
    explanation: "The 'Optimize' phase focuses on cost-reduction activities like rightsizing, removing unused resources, and purchasing Reserved Instances.",
    hint: "Identify waste and 'Cut' it."
  },
  {
    id: 94,
    difficulty: "medium",
    category: "finops",
    question: "What is the difference between 'Reserved Instances' (RI) and 'Savings Plans' in AWS?",
    options: [
      "RIs are for storage; Savings Plans are for compute",
      "RIs are tied to specific instance types/regions; Savings Plans offer more flexibility across instance families and regions in exchange for a commitment to a consistent amount of usage ($/hr)",
      "Savings Plans are free",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Savings Plans are the modern approach, providing broader flexibility (e.g., covering both EC2 and Fargate/Lambda) compared to the rigid nature of RIs.",
    hint: "Rigid commitment vs. Flexible commitment."
  },

  /* ======================================================
     ADVANCED CI/CD (GIT)
     ====================================================== */
  {
    id: 95,
    difficulty: "medium",
    category: "git-operations",
    question: "You want to combine multiple small commits into a single, clean commit before merging into the 'main' branch. Which Git command do you use?",
    options: [
      "git push --force",
      "git rebase -i (interactive squash)",
      "git checkout",
      "git fetch"
    ],
    answer: 1,
    explanation: "Interactive rebase allows you to 'squash' commits, keeping the history clean and readable for reviewers.",
    hint: "Consolidate history."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "cicd-strategies",
    question: "What is 'Trunk-Based Development'?",
    options: [
      "Developers work on long-lived feature branches for months",
      "Developers merge small, frequent updates to a single shared branch (trunk) at least once a day, avoiding 'Merge Hell'",
      "Deleting the repository after every build",
      "Only the CTO is allowed to write code"
    ],
    answer: 1,
    explanation: "Trunk-based development is a prerequisite for CI/CD. It reduces integration friction and encourages small, testable increments.",
    hint: "No long-lived branches."
  },

  /* ======================================================
     KUBERNETES: ADVANCED STORAGE
     ====================================================== */
  {
    id: 97,
    difficulty: "hard",
    category: "k8s-storage",
    question: "A pod uses a PersistentVolumeClaim (PVC) with 'accessModes: ReadWriteOnce'. Can two different pods on two different physical nodes use this volume simultaneously?",
    options: [
      "Yes, K8s will replicate the data",
      "No, 'ReadWriteOnce' means the volume can only be mounted by a single node at a time",
      "Yes, if they are in the same namespace",
      "Only on Azure"
    ],
    answer: 1,
    explanation: "ReadWriteOnce (RWO) is node-exclusive. If you need multi-node access, you must use 'ReadWriteMany' (RWX), typically backed by NFS or Azure Files.",
    hint: "Focus on the word 'Once'—it refers to the Node."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "k8s-operations",
    question: "You notice several pods are in 'Evicted' state. 'kubectl describe' shows 'DiskPressure'. What is the Kubelet doing?",
    options: [
      "Protecting the node's system stability by terminating lower-priority pods to free up disk space for logs and images",
      "Rebooting the node",
      "Formatting the hard drive",
      "Deleting the deployment"
    ],
    answer: 0,
    explanation: "When a node's disk reaches a critical threshold (e.g., 85-90%), the Kubelet evicts pods to prevent the node from becoming completely unresponsive.",
    hint: "Node survival mechanism."
  },

  /* ======================================================
     SECURITY: SECRETS MANAGEMENT
     ====================================================== */
  {
    id: 99,
    difficulty: "hard",
    category: "security-vault",
    question: "In HashiCorp Vault, what is the 'Transit' secrets engine primarily used for?",
    options: [
      "Moving data between folders",
      "Encryption as a Service (EaaS)—encrypting data in-flight without Vault storing the data itself",
      "Managing AWS Access Keys",
      "Generating SSH certificates"
    ],
    answer: 1,
    explanation: "Transit EaaS allows apps to send plain text to Vault, get back ciphertext, and store it in their own DB. Vault handles the key management and rotation, but not the storage.",
    hint: "Cryptographic offloading."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "security-compliance",
    question: "What is 'Attestation' in the context of a secure software supply chain (e.g., using Sigstore/Cosign)?",
    options: [
      "Writing a blog post about security",
      "A digitally signed statement that verifies a specific action (like a successful security scan or build) was performed by a trusted identity",
      "Encrypting the source code",
      "A password for the Docker image"
    ],
    answer: 1,
    explanation: "Attestations allow you to verify that an image didn't just come from 'somewhere', but specifically passed through your approved CI/CD steps and security scans.",
    hint: "A 'Notarized' proof of process."
  },
   
];


// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: 
const hotsQuestions = [
    2, 3, 5, 
];
