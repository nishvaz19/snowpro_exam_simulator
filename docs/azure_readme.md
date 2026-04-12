# ☁️ Azure Cloud Interview & Architecture README

### 📘 Quick Reference (Enterprise Integration + Identity + Hybrid Cloud)

```text
Entra ID (Identity) → Management Group → Subscription → Resource Group → Resource
```

## ⚙️ 1. Infrastructure & Governance
* **Regions & Availability Zones:** 3 separate physical locations within a region for high availability.
* **Resource Groups:** Logical containers; critical for lifecycle management and cost tracking.
* **Azure Policy:** Enforces "Guardrails" (e.g., "Only allow resources in East US").

## 🔐 2. Identity & Security (The Backbone)
* **Microsoft Entra ID (formerly AAD):** The central identity provider for SSO and RBAC.
* **Managed Identities:** Best practice; allows resources (like a VM) to access Key Vault without storing credentials in code.
* **Private Link / Private Endpoint:** Ensures traffic to services (SQL, Storage) stays on the private Microsoft backbone, never hitting the public internet.

## ⚡ 3. Compute & Scaling
* **App Service:** PaaS for web apps; use **Deployment Slots** for zero-downtime blue/green deployments.
* **AKS (Azure Kubernetes Service):** Managed K8s; integrate with Azure CNI for high-performance networking.
* **Azure Functions:** Event-driven serverless; use **Durable Functions** for stateful workflows.

## 🚨 4. Azure Failure Scenarios
* **Symptom: Identity "Token Bloat":** Users in too many groups fail to authenticate. **Fix:** Use nested groups or claims transformation.
* **Symptom: SNAT Port Exhaustion:** Outbound connections from App Service fail. **Fix:** Use VNet Integration + NAT Gateway.

---

### 📎 Clipboard Sections (Quick Preparation)

#### **Azure Buzzwords**
```markdown
- Entra ID → Identity backbone; use for RBAC and SSO
- Private Link → Secure service access without public IPs
- App Service Slots → Zero-downtime deployments
- Managed Identity → Secret-less resource authentication
- Bicep / ARM → Azure native Infrastructure as Code (IaC)
```
#### **Failure Debugging**
```markdown
- Regional Outage → Implement Multi-Region Failover (Traffic Manager / Route 53)
- Cost Spikes → Use Cost Management/Budgets + Tagging enforcement
- Security Breach → Rotate keys, check CloudTrail/Activity Logs, isolate resources
```
#### Code Snippet

**Azure Bicep (Infrastucture as Code)**
```bicep
resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: 'stinterviewgold001'
  location: resourceGroup().location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
  properties: { supportsHttpsTrafficOnly: true }
}
```

