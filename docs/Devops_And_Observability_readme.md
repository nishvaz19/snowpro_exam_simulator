# 🚨 **Sr. DevOps + Observability Architect — Real Failure Scenarios**

This is structured like:
👉 **Symptom → Signals → Root Cause → Fix → Prevention (Architect answer)**

---

# **1. “Everything is Slow” (The Classic False Signal)**

### 🔥 Symptom

* Latency spike across all services
* CPU/Memory look “fine”
* No obvious errors

### 🔍 Signals to Check

* Distributed traces (via OpenTelemetry)
* P95 / P99 latency (NOT averages)
* Downstream dependency spans

### 💥 Root Cause

* Hidden dependency slowdown (DB / Kafka / external API)
* Tail latency amplification

> Example: One slow query → blocks thread pool → cascades latency

### ✅ Fix

* Identify **longest span in trace**
* Apply:

  * Timeout + retries (bounded)
  * Circuit breaker

### 🧠 Architect Insight

* “Averages lie. Tail latency kills systems.”

---

# **2. Kafka Lag Explosion (But Consumers Are Running)**

### 🔥 Symptom

* Consumer lag increasing rapidly in Apache Kafka
* Consumers appear “healthy”

### 🔍 Signals

* Consumer lag metrics
* Partition distribution
* CPU per consumer

### 💥 Root Cause

* Partition skew (hot partition)
* Slow processing logic (e.g., DB calls inside loop)
* Rebalance thrashing

### ✅ Fix

* Scale consumers **only if partitions allow**
* Fix:

  * Key distribution (salting)
  * Batch processing
  * Async IO

### 🧠 Architect Insight

* “You don’t scale consumers—you scale partitions.”

---

# **3. Elasticsearch Cluster Red (Panic Scenario)**

### 🔥 Symptom

* Cluster status = RED in Elasticsearch
* Queries failing

### 🔍 Signals

* `_cat/shards`
* Unassigned shards
* Disk watermark alerts

### 💥 Root Cause

* Disk full (most common)
* Node loss
* Shard allocation blocked

### ✅ Fix

* Free disk OR increase volume
* Temporarily:

```bash
PUT _cluster/settings
{ "transient": { "cluster.routing.allocation.enable": "none" } }
```

### 🧠 Architect Insight

* “Disk is your real SLA in ELK—not CPU.”

---

# **4. “Logs Stopped Coming” (Silent Data Loss Risk)**

### 🔥 Symptom

* No logs in dashboards
* Systems still running

### 🔍 Signals

* Logstash / agent pipeline stats
* Kafka topic lag (if used)
* Ingestion error logs

### 💥 Root Cause

* Pipeline backpressure
* Output blocked (ES slow)
* Buffer overflow (no persistence)

### ✅ Fix

* Check:

  * Persistent Queue (Logstash)
  * Kafka buffer
* Restart ingestion safely

### 🧠 Architect Insight

* “No logs ≠ no problems. It’s usually worse.”

---

# **5. Retry Storm (Self-Inflicted DDoS)**

### 🔥 Symptom

* Traffic spike after minor failure
* System collapses completely

### 🔍 Signals

* Request rate suddenly spikes
* Same endpoints repeated

### 💥 Root Cause

* Unbounded retries
* No exponential backoff

### ✅ Fix

* Add:

  * Exponential backoff + jitter
  * Circuit breaker

### 🧠 Architect Insight

* “Retries multiply failure—they don’t fix it.”

---

# **6. Kubernetes Pods Restarting Randomly**

### 🔥 Symptom

* Pods in CrashLoopBackOff in Kubernetes

### 🔍 Signals

* `kubectl describe pod`
* OOMKilled events
* Liveness probe failures

### 💥 Root Cause

* Memory limits too low
* Bad health checks
* Startup time > probe threshold

### ✅ Fix

* Tune:

  * `resources.limits`
  * `livenessProbe` vs `readinessProbe`
  * JVM heap vs container memory

### 🧠 Architect Insight

* “Most ‘random restarts’ are deterministic misconfigurations.”

---

# **7. Traces Missing (Observability Blind Spot)**

### 🔥 Symptom

* Logs exist, metrics exist
* Traces missing or incomplete

### 🔍 Signals

* Sampling config
* Collector logs
* Missing trace IDs

### 💥 Root Cause

* Head-based sampling too aggressive
* Context propagation broken

### ✅ Fix

* Switch to:

  * Tail-based sampling
  * Ensure trace headers propagate

### 🧠 Architect Insight

* “If you can’t trace it, you can’t fix it.”

---

# **8. High CPU but Low Throughput**

### 🔥 Symptom

* CPU 90%+
* Throughput dropping

### 🔍 Signals

* Thread pools
* GC logs
* Context switching

### 💥 Root Cause

* Too many threads
* Lock contention
* Inefficient queries

### ✅ Fix

* Reduce concurrency
* Optimize workload
* Profile application

### 🧠 Architect Insight

* “More threads ≠ more performance.”

---

# **9. Deployment Caused Latency Spike**

### 🔥 Symptom

* After deploy → latency ↑
* No errors

### 🔍 Signals

* Version-based metrics
* Canary vs baseline comparison

### 💥 Root Cause

* Inefficient code path
* N+1 queries
* Serialization overhead

### ✅ Fix

* Rollback immediately
* Compare traces between versions

### 🧠 Architect Insight

* “Every deploy is a hypothesis—verify it.”

---

# **10. Alert Fatigue (The Hidden Failure)**

### 🔥 Symptom

* Engineers ignoring alerts
* Incidents missed

### 🔍 Signals

* Alert volume vs actionable alerts
* MTTR increasing

### 💥 Root Cause

* Noisy thresholds
* Lack of SLO-based alerting

### ✅ Fix

* Move to:

  * SLO-based alerts (error budget burn)
  * Deduplication
  * Alert grouping

### 🧠 Architect Insight

* “Too many alerts = zero alerts.”

---

# 🧠 **Ultimate Interview Framing (Senior Level Answer)**

When asked:

👉 *“How do you debug production issues?”*

Answer like this:

> “I follow a structured approach:
>
> 1. Identify **user impact (SLO breach)**
> 2. Correlate **metrics → logs → traces**
> 3. Isolate the **bottleneck or failing dependency**
> 4. Apply **fail-safe mechanisms (circuit breaker, throttling)**
> 5. Stabilize first, optimize later
> 6. Add observability to prevent recurrence”

---

# ⚡ **Golden Signals You ALWAYS Check**

* **Latency (P95/P99)**
* **Traffic**
* **Errors**
* **Saturation (CPU, Memory, Queue lag)**

---
