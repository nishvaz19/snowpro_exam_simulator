/* ======================================================
ENTERPRISE DATA ARCHITECTURE & DATA WAREHOUSE
====================================================== */

const questionBank = [
{
id:1,
difficulty:"easy",
category:"architecture",
question:"What is the primary goal of an Enterprise Data Warehouse?",
options:[
"Serve transactional workloads",
"Support analytics and reporting",
"Replace operational databases",
"Store application configuration"
],
answer:1,
explanation:"Enterprise Data Warehouses are designed for analytics, BI reporting, and decision support rather than operational transaction processing."
},

{
id:2,
difficulty:"easy",
category:"architecture",
question:"Which architecture separates compute and storage for scalability?",
options:[
"On-Prem Data Warehouse",
"Cloud Data Warehouse",
"Flat File Architecture",
"Client Server Model"
],
answer:1,
explanation:"Cloud warehouses like Snowflake and BigQuery separate storage and compute for elastic scalability."
},

{
id:3,
difficulty:"medium",
category:"data-modelling",
question:"Who popularized dimensional modelling used in data warehouses?",
options:[
"Edgar Codd",
"Ralph Kimball",
"Bill Inmon",
"Michael Stonebraker"
],
answer:1,
explanation:"Ralph Kimball introduced dimensional modelling using star schemas for analytics systems."
},

{
id:4,
difficulty:"easy",
category:"data-modelling",
question:"Which schema is most commonly used in analytics data warehouses?",
options:[
"Star Schema",
"Network Schema",
"Hierarchical Schema",
"Graph Schema"
],
answer:0,
explanation:"Star schema is widely used because it simplifies analytical queries."
},

{
id:5,
difficulty:"medium",
category:"data-modelling",
question:"What is the grain of a fact table?",
options:[
"Number of columns in a table",
"Level of detail stored in each row",
"Number of indexes",
"Data compression level"
],
answer:1,
explanation:"Grain defines the lowest level of detail represented in the fact table."
},

{
id:6,
difficulty:"medium",
category:"data-modelling",
question:"Which fact table type records every individual event?",
options:[
"Snapshot Fact",
"Transaction Fact",
"Accumulating Fact",
"Aggregate Fact"
],
answer:1,
explanation:"Transaction fact tables store each event such as purchases or financial transactions."
},

{
id:7,
difficulty:"medium",
category:"data-modelling",
question:"Which Slowly Changing Dimension preserves full historical data?",
options:[
"SCD Type 1",
"SCD Type 2",
"SCD Type 3",
"SCD Type 0"
],
answer:1,
explanation:"SCD Type 2 stores history by creating new rows for each change."
},

{
id:8,
difficulty:"medium",
category:"data-engineering",
question:"Which ingestion technique captures database changes from transaction logs?",
options:[
"Snapshot replication",
"Change Data Capture",
"Manual batch export",
"Data scraping"
],
answer:1,
explanation:"Log-based Change Data Capture captures changes directly from database transaction logs."
},

{
id:9,
difficulty:"medium",
category:"data-engineering",
question:"Which architecture layer stores raw unprocessed data in a lakehouse?",
options:[
"Gold Layer",
"Silver Layer",
"Bronze Layer",
"Diamond Layer"
],
answer:2,
explanation:"Bronze layer stores raw ingested data before transformation."
},

{
id:10,
difficulty:"medium",
category:"lakehouse",
question:"Which architecture combines data lakes and warehouses?",
options:[
"Lambda Architecture",
"Lakehouse Architecture",
"Service Mesh",
"OLTP Architecture"
],
answer:1,
explanation:"Lakehouse architecture merges lake flexibility with warehouse performance."
},

{
id:11,
difficulty:"medium",
category:"streaming",
question:"What is the main purpose of an event streaming platform?",
options:[
"Store relational data",
"Process real-time data streams",
"Replace databases",
"Provide BI dashboards"
],
answer:1,
explanation:"Streaming platforms process high-volume real-time event streams."
},

{
id:12,
difficulty:"hard",
category:"architecture",
question:"Which architecture layer defines business metrics like revenue or churn?",
options:[
"Data Lake",
"Streaming Layer",
"Semantic Layer",
"ETL Layer"
],
answer:2,
explanation:"Semantic layers standardize business metrics used across analytics tools."
},

{
id:13,
difficulty:"medium",
category:"governance",
question:"Which concept tracks how data flows from source systems to dashboards?",
options:[
"Data replication",
"Data lineage",
"Data indexing",
"Data caching"
],
answer:1,
explanation:"Data lineage shows how data moves across pipelines and systems."
},

{
id:14,
difficulty:"medium",
category:"security",
question:"Which security model assigns permissions based on roles?",
options:[
"RBAC",
"ABAC",
"MAC",
"DAC"
],
answer:0,
explanation:"Role-Based Access Control assigns permissions via roles."
},

{
id:15,
difficulty:"hard",
category:"ml-platform",
question:"What is the primary function of a Feature Store?",
options:[
"Store images",
"Manage ML features for training and inference",
"Store SQL queries",
"Replace data warehouses"
],
answer:1,
explanation:"Feature stores store ML features for model training and real-time inference."
},

{
id:16,
difficulty:"medium",
category:"performance",
question:"Which technique improves query performance by splitting large tables?",
options:[
"Partitioning",
"Encryption",
"Masking",
"Normalization"
],
answer:0,
explanation:"Partitioning divides large tables into smaller segments to improve query performance."
},

{
id:17,
difficulty:"hard",
category:"data-fabric",
question:"What is the primary purpose of a Data Fabric architecture?",
options:[
"Centralized OLTP processing",
"Unified data access across distributed systems",
"Replace data lakes",
"Store machine learning models"
],
answer:1,
explanation:"Data Fabric provides unified data access across distributed data sources."
},

{
id:18,
difficulty:"hard",
category:"big-data",
question:"Which modeling approach separates Hubs, Links, and Satellites?",
options:[
"Dimensional Modeling",
"Data Vault Modeling",
"Graph Modeling",
"Columnar Modeling"
],
answer:1,
explanation:"Data Vault uses Hubs, Links, and Satellites to enable scalable data warehouse modeling."
},

{
id:19,
difficulty:"hard",
category:"event-architecture",
question:"Which modeling pattern records every user interaction as an event?",
options:[
"Activity Schema",
"Snowflake Schema",
"Network Model",
"Hierarchical Model"
],
answer:0,
explanation:"Activity schemas store all user interactions as events."
},

{
id:20,
difficulty:"hard",
category:"scale",
question:"Which architecture supports 100B+ events per day systems?",
options:[
"Single-node database",
"Distributed streaming architecture",
"Excel spreadsheets",
"Manual ETL processing"
],
answer:1,
explanation:"Petabyte-scale architectures rely on distributed event streaming platforms."
},
  {
    id: 21,
    difficulty: "medium",
    category: "architecture",
    question: "Which Medallion Architecture layer is used for 'cleansed' and 'filtered' data?",
    options: ["Bronze", "Silver", "Gold", "Platinum"],
    answer: 1,
    explanation: "The Silver layer represents validated, cleansed, and enriched data ready for downstream use."
  },
  {
    id: 22,
    difficulty: "easy",
    category: "architecture",
    question: "What is the primary benefit of a Lakehouse architecture?",
    options: ["Eliminating the need for storage", "Providing warehouse performance on lake storage", "Replacing all BI tools", "Running only on local servers"],
    answer: 1,
    explanation: "Lakehouse architecture brings ACID transactions and warehouse-like performance directly to low-cost cloud object storage."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "architecture",
    question: "In a Data Fabric, what is the 'Active Metadata' used for?",
    options: ["Manual documentation", "Automating data discovery and orchestration", "Storing user passwords", "Compressed backup storage"],
    answer: 1,
    explanation: "Data Fabric uses AI-driven active metadata to automate data integration and governance across distributed environments."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "streaming",
    question: "Which concept defines an architecture that reacts to state changes in real-time?",
    options: ["Batch-Driven", "Event-Driven", "Manual-Entry", "Static-Schema"],
    answer: 1,
    explanation: "Event-Driven architectures process data as a continuous stream of events rather than periodic batches."
  },
  {
    id: 25,
    difficulty: "medium",
    category: "ingestion",
    question: "Why is log-based CDC preferred over query-based CDC?",
    options: ["It is slower", "It puts zero load on the source database", "It cannot capture deletions", "It captures every change without impacting source performance"],
    answer: 3,
    explanation: "Log-based Change Data Capture reads database logs directly, capturing all changes (including deletes) without putting high query load on the database."
  },
  {
    id: 26,
    difficulty: "medium",
    category: "modelling",
    question: "In Kimball's Dimensional Modelling, what is a 'Conformed Dimension'?",
    options: ["A dimension used only once", "A dimension shared across multiple fact tables", "A dimension with no attributes", "A dimension stored in a CSV"],
    answer: 1,
    explanation: "Conformed dimensions ensure consistency by using the same reference data across different business processes."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "modelling",
    question: "In Data Vault modeling, which component stores the descriptive attributes of a business key?",
    options: ["Hub", "Link", "Satellite", "Fact"],
    answer: 2,
    explanation: "Satellites store the time-variant descriptive information for Hubs or Links."
  },
  {
    id: 28,
    difficulty: "easy",
    category: "modelling",
    question: "What does the 'S' in SCD Type 2 stand for?",
    options: ["Static", "Slowly", "System", "Schema"],
    answer: 1,
    explanation: "SCD stands for Slowly Changing Dimension, which tracks historical changes over time."
  },
  {
    id: 29,
    difficulty: "hard",
    category: "ml",
    question: "What problem does a Feature Store solve for ML Engineers?",
    options: ["Data visualization", "Training-serving skew", "SQL syntax errors", "Operating system updates"],
    answer: 1,
    explanation: "Feature Stores ensure that the same feature logic is used during model training and real-time production inference."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "analytics",
    question: "How does an Activity Schema differ from a Star Schema?",
    options: ["It has more tables", "It uses a single wide table for all events", "It requires complex joins", "It is only for Excel"],
    answer: 1,
    explanation: "Activity schemas simplify modeling by using a single table for all entity-related events, reducing the need for complex multi-table joins."
  },
  {
    id: 31,
    difficulty: "medium",
    category: "analytics",
    question: "What is the end goal of a Customer 360 initiative?",
    options: ["Storing customer emails", "A unified, single view of the customer across all touchpoints", "Deleting customer data", "Sending 360 emails per day"],
    answer: 1,
    explanation: "Customer 360 aims to provide a consolidated, holistic view of a customer by integrating data from silos."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "analytics",
    question: "Which layer allows business users to interact with data using 'Revenue' instead of complex SQL formulas?",
    options: ["Storage Layer", "Semantic Layer", "Ingestion Layer", "Network Layer"],
    answer: 1,
    explanation: "The Semantic Layer abstracts technical complexity into business-friendly terms."
  },
  {
    id: 33,
    difficulty: "easy",
    category: "governance",
    question: "Which tool acts as a search engine for an organization's data assets?",
    options: ["Data Lineage", "Data Catalog", "Firewall", "RAM"],
    answer: 1,
    explanation: "Data Catalogs help users discover, understand, and trust data through metadata and documentation."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "performance",
    question: "How does Columnar Storage speed up analytical queries?",
    options: ["It reads every row", "It only reads the specific columns required for the query", "It disables all security", "It uses more storage space"],
    answer: 1,
    explanation: "Columnar storage minimizes I/O by only reading the data for specific columns needed for aggregation/filtering."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "scale",
    question: "At Petabyte Scale, what is the main drawback of vertical scaling (scaling up)?",
    options: ["It is too cheap", "Hardware limits and extreme cost", "It is too fast", "It requires no configuration"],
    answer: 1,
    explanation: "Scaling up (bigger RAM/CPU) hits a physical ceiling and becomes exponentially expensive compared to horizontal scaling."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "architecture",
    question: "In Medallion architecture, which layer is best for 'Power BI' or 'Tableau' dashboards?",
    options: ["Bronze", "Silver", "Gold", "Raw"],
    answer: 2,
    explanation: "The Gold layer contains consumption-ready, business-level aggregates ideal for BI reporting."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "streaming",
    question: "What is 'Latent data' in a real-time analytics system?",
    options: ["Data that arrives late", "Fast data", "Encrypted data", "Temporary data"],
    answer: 0,
    explanation: "Latency refers to the delay between data generation and the data being available for query."
  },
  {
    id: 38,
    difficulty: "medium",
    category: "modelling",
    question: "In a Star Schema, which table usually contains the foreign keys?",
    options: ["Dimension Table", "Fact Table", "Look-up Table", "Config Table"],
    answer: 1,
    explanation: "The Fact table contains foreign keys that link it to various Dimension tables."
  },
  {
    id: 39,
    difficulty: "hard",
    category: "modelling",
    question: "In Data Vault, which table connects two or more Hubs to represent a business process?",
    options: ["Satellite", "Link", "Reference", "Schema"],
    answer: 1,
    explanation: "Link tables represent the relationships/interactions between business keys (Hubs)."
  },
  {
    id: 40,
    difficulty: "medium",
    category: "governance",
    question: "What is the primary use of Data Lineage during a system migration?",
    options: ["Calculating CPU usage", "Performing impact analysis of changes", "Changing passwords", "Cleaning the server room"],
    answer: 1,
    explanation: "Data Lineage helps engineers understand which downstream systems will break if an upstream source is modified."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "performance",
    question: "Which technique is used to skip reading data files based on filter conditions?",
    options: ["Encryption", "Partition Pruning", "Compression", "Normalization"],
    answer: 1,
    explanation: "Partition pruning allows the query engine to ignore files that don't match the filter (e.g., skipping all months except 'January')."
  },
  {
    id: 42,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Virtualization' approach in a Data Fabric?",
    options: ["Copying all data to one place", "Accessing data where it lives without moving it", "Deleting all source data", "Using VR headsets for DBAs"],
    answer: 1,
    explanation: "Data virtualization allows querying data from multiple sources without needing to move it to a central repository."
  },
  {
    id: 43,
    difficulty: "easy",
    category: "ingestion",
    question: "What does the 'C' in CDC stand for?",
    options: ["Control", "Change", "Column", "Cloud"],
    answer: 1,
    explanation: "CDC stands for Change Data Capture."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "streaming",
    question: "Which of the following is a distributed event streaming platform?",
    options: ["Apache Kafka", "Microsoft Excel", "Notepad++", "Postgres"],
    answer: 0,
    explanation: "Apache Kafka is a widely used distributed event streaming platform."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "analytics",
    question: "A 'Headless BI' architecture is primarily built on top of which keyword?",
    options: ["Data Lake", "Semantic Layer", "Bronze Layer", "CSV file"],
    answer: 1,
    explanation: "Headless BI decouples the semantic layer (metrics) from the visualization tool, allowing any tool to use the same definitions."
  },
  {
    id: 46,
    difficulty: "easy",
    category: "governance",
    question: "Who is the primary user of a Data Catalog?",
    options: ["Data Analysts and Scientists", "Front-end Developers", "Office Janitors", "HR Managers"],
    answer: 0,
    explanation: "Data Analysts and Scientists use catalogs to find the right datasets for their work."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "modelling",
    question: "In SCD Type 2, what column is typically added to track current records?",
    options: ["Record_ID", "Is_Current or Active_Flag", "Username", "Price"],
    answer: 1,
    explanation: "A flag or an end-date is used to distinguish the active record from historical records."
  },
  {
    id: 48,
    difficulty: "medium",
    category: "performance",
    question: "Why is Parquet storage better than CSV for analytics?",
    options: ["It is human readable in Notepad", "It supports columnar storage and compression", "It is older", "It doesn't support schemas"],
    answer: 1,
    explanation: "Parquet is a binary columnar format that is highly optimized for analytical read patterns."
  },
  {
    id: 49,
    difficulty: "hard",
    category: "analytics",
    question: "In Customer 360, what is 'Identity Resolution'?",
    options: ["Changing a user's password", "Linking records from different systems to the same person", "Deleting duplicate emails", "Scanning a driver's license"],
    answer: 1,
    explanation: "Identity resolution matches and merges various data fragments into a single unique customer profile."
  },
  {
    id: 50,
    difficulty: "easy",
    category: "architecture",
    question: "The 'Bronze' layer in Medallion architecture is also known as:",
    options: ["Raw Layer", "Aggregate Layer", "Report Layer", "Metric Layer"],
    answer: 0,
    explanation: "The Bronze layer stores raw data as it arrives from the source system."
  },
  {
    id: 51,
    difficulty: "medium",
    category: "ml",
    question: "Offline feature stores are typically used for what purpose?",
    options: ["Real-time predictions", "Batch model training", "Sending emails", "Storing source code"],
    answer: 1,
    explanation: "Offline stores hold massive historical data used for model training and experimentation."
  },
  {
    id: 52,
    difficulty: "medium",
    category: "streaming",
    question: "What is 'Backpressure' in a streaming system?",
    options: ["Data flowing too slowly", "The receiver signalling the sender to slow down", "A hardware failure", "The cooling fan speed"],
    answer: 1,
    explanation: "Backpressure occurs when the consumer cannot keep up with the producer, requiring flow control."
  },
  {
    id: 53,
    difficulty: "hard",
    category: "analytics",
    question: "Which schema uses 'Activity ID', 'Timestamp', and 'Entity' as its core columns?",
    options: ["Star Schema", "Snowflake Schema", "Activity Schema", "Relational Schema"],
    answer: 2,
    explanation: "The Activity Schema uses a simplified, standardized column structure for all event data."
  },
  {
    id: 54,
    difficulty: "medium",
    category: "performance",
    question: "What does 'Data Skew' refer to in a distributed system?",
    options: ["Data is too clean", "Uneven distribution of data across nodes", "Data is missing", "Data is perfectly balanced"],
    answer: 1,
    explanation: "Data skew happens when one partition/node holds significantly more data than others, causing performance bottlenecks."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "governance",
    question: "Technical Metadata in a Data Catalog includes which of the following?",
    options: ["Table names and Data types", "Business ROI of the table", "The CEO's home address", "Employee coffee preferences"],
    answer: 0,
    explanation: "Technical metadata covers structural information like schemas, column names, and types."
  },
  {
    id: 56,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Semantic Gap'?",
    options: ["A hard drive failure", "The difference between technical data storage and business meaning", "A slow internet connection", "A missing database index"],
    answer: 1,
    explanation: "The Semantic Gap is the distance between how data is stored (complex tables) and how it is understood by business users."
  },
  {
    id: 57,
    difficulty: "easy",
    category: "modelling",
    question: "Which Kimball model resembles a 'star' shape?",
    options: ["Star Schema", "Hub Schema", "Circle Schema", "Linear Schema"],
    answer: 0,
    explanation: "The Star Schema consists of a central fact table surrounded by dimension tables."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "ingestion",
    question: "In CDC, what happens when a record is UPDATED in the source?",
    options: ["The CDC tool ignores it", "The CDC tool captures the change and sends it to the target", "The source database crashes", "The network is reset"],
    answer: 1,
    explanation: "CDC is designed to capture Inserts, Updates, and Deletes in near real-time."
  },
  {
    id: 59,
    difficulty: "medium",
    category: "performance",
    question: "Which storage format is most efficient for 'SELECT SUM(Sales) FROM Table'?",
    options: ["Row-based", "Column-based", "Text file", "XML"],
    answer: 1,
    explanation: "Column-based storage is highly efficient for aggregations on specific columns."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "architecture",
    question: "A 'Data Mesh' differs from a 'Data Fabric' primarily by focusing on:",
    options: ["Technology", "Organizational and Decentralized Ownership", "Centralization", "Manual entry"],
    answer: 1,
    explanation: "Data Mesh is an organizational shift toward decentralized data ownership by business domains."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "scale",
    question: "Horizontal scaling is also known as:",
    options: ["Scaling Up", "Scaling Out", "Scaling Down", "Scaling In"],
    answer: 1,
    explanation: "Scaling out involves adding more machines to a cluster to handle increased load."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "analytics",
    question: "Real-time analytics often requires an 'OLAP' engine. What does OLAP stand for?",
    options: ["Online Analytical Processing", "Only Local Access Point", "Open Layer Architecture Pattern", "Off-site Analytical Power"],
    answer: 0,
    explanation: "OLAP engines are optimized for complex analytical queries and aggregations."
  },
  {
    id: 63,
    difficulty: "hard",
    category: "modelling",
    question: "In Data Vault, which component is used to track business keys that are unique across the enterprise?",
    options: ["Hub", "Satellite", "Link", "Pit"],
    answer: 0,
    explanation: "Hubs contain a list of unique business keys (like CustomerID or OrderID)."
  },
  {
    id: 64,
    difficulty: "medium",
    category: "governance",
    question: "What is a 'Data Steward'?",
    options: ["A person responsible for data quality and definitions", "A database server", "A security firewall", "A cloud storage provider"],
    answer: 0,
    explanation: "Data Stewards are roles within an organization responsible for managing data assets and ensuring they are fit for use."
  },
  {
    id: 65,
    difficulty: "easy",
    category: "architecture",
    question: "What storage technology is commonly used for the 'Lake' in Lakehouse?",
    options: ["Object Storage (e.g., S3, ADLS)", "Floppy Disks", "Tape Drives", "RAM"],
    answer: 0,
    explanation: "Cloud object storage provides the scalable, low-cost foundation for modern data lakes."
  },
  {
    id: 66,
    difficulty: "medium",
    category: "streaming",
    question: "In a stream processing pipeline, what is 'Windowing'?",
    options: ["Closing the computer window", "Grouping data into time-based buckets for analysis", "Looking through a glass pane", "Limiting the number of users"],
    answer: 1,
    explanation: "Windowing allows you to perform aggregations (like SUM or AVG) over specific time intervals (e.g., every 5 minutes)."
  },
  {
    id: 67,
    difficulty: "hard",
    category: "analytics",
    question: "Which technology is often used to build a Semantic Layer for 'Headless BI'?",
    options: ["dbt Semantic Layer / Cube", "PostgreSQL", "Apache Spark", "Excel Macros"],
    answer: 0,
    explanation: "Tools like Cube or dbt Semantic Layer provide a centralized definition of metrics for multiple consumers."
  },
  {
    id: 68,
    difficulty: "medium",
    category: "performance",
    question: "What is a 'Z-Order' index used for in Lakehouse storage?",
    options: ["Alphabetizing files", "Optimizing multi-dimensional data clustering", "Deleting old files", "Hiding data"],
    answer: 1,
    explanation: "Z-Ordering improves query performance by co-locating related information in the same files."
  },
  {
    id: 69,
    difficulty: "hard",
    category: "ingestion",
    question: "Which CDC method is most likely to miss 'DELETE' operations if not carefully implemented?",
    options: ["Log-based", "Timestamp-based (Query-based)", "Trigger-based", "None of the above"],
    answer: 1,
    explanation: "Timestamp-based CDC only sees rows that exist; if a row is deleted, the query won't find it to update the target."
  },
  {
    id: 70,
    difficulty: "easy",
    category: "scale",
    question: "Petabyte scale data platforms are most commonly hosted where?",
    options: ["Local Laptops", "Public Cloud (AWS/GCP/Azure)", "USB Drives", "Desktop PCs"],
    answer: 1,
    explanation: "The elastic resources of the public cloud are essential for handling petabytes of data efficiently."
  },  
  /* ======================================================
ADVANCED DATA ARCHITECTURE MIGRATION & MODERNIZATION
====================================================== */
  {
    id: 71,
    difficulty: "hard",
    category: "migration",
    question: "When migrating from Apache Hive to Apache Iceberg, which 'in-place' mechanism creates a new table without rewriting data files?",
    options: [
      "Iceberg 'Snapshot' procedure",
      "Iceberg 'Migrate' procedure",
      "Hive Metastore 'Sync' command",
      "Iceberg 'Import' function"
    ],
    answer: 1,
    explanation: "The 'Migrate' procedure replaces the Hive table with an Iceberg table by mapping existing data files into a new Iceberg manifest list without data duplication."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "architecture",
    question: "In a Data Mesh architecture, what is the 'Architectural Quantum' used to define a Data Product?",
    options: [
      "A single SQL view",
      "A centralized data warehouse cluster",
      "An autonomous unit containing data, code, and infrastructure",
      "A shared metadata repository"
    ],
    answer: 2,
    explanation: "Data Mesh defines a Data Product as an encapsulated unit (quantum) that includes its own data, the code to process it, and the infrastructure needed to serve it."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "performance",
    question: "Which factor most heavily influences the physical design of an Apache HBase Row Key for high-throughput streaming?",
    options: [
      "Third Normal Form (3NF) requirements",
      "The number of Kafka partitions",
      "Prevention of region server 'hotspotting'",
      "The size of the Java Heap"
    ],
    answer: 2,
    explanation: "HBase stores data lexicographically; row keys must be designed (often using hashing or salting) to distribute writes evenly across region servers and avoid hotspotting."
  },
  {
    id: 74,
    difficulty: "medium",
    category: "mlops",
    question: "In an MLOps pipeline, what is the primary cause of 'Training-Serving Skew'?",
    options: [
      "Slow network latency",
      "Inconsistent feature logic between batch training and real-time inference",
      "Low GPU utilization",
      "Using different versions of Python"
    ],
    answer: 1,
    explanation: "Skew occurs when the data preprocessing logic used for model training differs from the logic applied during real-time scoring in production."
  },
  {
    id: 75,
    difficulty: "hard",
    category: "data-modelling",
    question: "Which step is critical when translating a Logical Data Model into a Physical Model for a NoSQL database like HBase or Cassandra?",
    options: [
      "Ensuring all tables are in 5th Normal Form",
      "Modelling tables based on specific query access patterns",
      "Eliminating all data redundancy",
      "Using only integer-based primary keys"
    ],
    answer: 1,
    explanation: "Unlike relational databases, NoSQL physical models are 'query-first,' meaning tables are structured specifically to optimize for the exact queries the application will run."
  },
  {
    id: 76,
    difficulty: "medium",
    category: "streaming",
    question: "What is the role of the 'Lily HBase Indexer' in an architecture using Apache Solr?",
    options: [
      "Compressing HBase HFiles",
      "Managing Kafka offsets",
      "Asynchronously updating Solr indices based on HBase Write-Ahead Logs (WAL)",
      "Translating SQL into HBase Get operations"
    ],
    answer: 2,
    explanation: "The Lily Indexer provides near real-time search capabilities by listening to HBase replication logs and automatically updating Solr collections."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "lakehouse",
    question: "Which Apache Iceberg feature allows users to query a table as it existed at a specific point in time?",
    options: [
      "Schema Evolution",
      "Partition Pruning",
      "Time Travel (Snapshot Reads)",
      "File Compaction"
    ],
    answer: 2,
    explanation: "Iceberg maintains immutable snapshots of the table state, allowing users to query 'as of' a specific timestamp or snapshot ID."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "dataops",
    question: "In DataOps, what is the 'Strangler Fig' pattern used for during legacy migrations?",
    options: [
      "Deleting all legacy data immediately",
      "Gradually replacing legacy system components with new services until the old system is retired",
      "Increasing the compression ratio of Parquet files",
      "Automatically fixing data quality errors"
    ],
    answer: 1,
    explanation: "The Strangler Fig pattern reduces migration risk by incrementally moving traffic/functionality to the new architecture while keeping the legacy system operational."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "governance",
    question: "In a decentralized Data Mesh, who is responsible for the 'Quality' of a specific Data Product?",
    options: [
      "The Central IT Team",
      "The Data Platform Team",
      "The Domain Data Product Owner",
      "The Chief Security Officer"
    ],
    answer: 2,
    explanation: "Data Mesh shifts accountability to the domain; the business unit producing the data owns the quality and SLA of that specific data product."
  },
  {
    id: 80,
    difficulty: "medium",
    category: "streaming",
    question: "How does Apache Kafka ensure 'Idempotency' for producers during a network retry?",
    options: [
      "By deleting duplicate messages in the consumer",
      "By assigning unique Producer IDs and Sequence Numbers to every batch of messages",
      "By increasing the number of replicas",
      "By using SSL encryption"
    ],
    answer: 1,
    explanation: "Kafka brokers use Producer IDs and sequence numbers to identify and discard duplicate requests caused by producer retries after a network error."
  },
/* ======================================================
    EXTENDED DATA ENGINEERING & ARCHITECTURE BANK
   ====================================================== */
  {
    id: 81,
    difficulty: "medium",
    category: "architecture",
    question: "Which pattern is used to handle 'Late Arriving Data' in a Medallion Architecture?",
    options: ["Drop the late records", "In-place updates in the Silver layer using Delta/Iceberg MERGE", "Blocking the pipeline until data arrives", "Manual SQL inserts"],
    answer: 1,
    explanation: "Modern table formats like Iceberg and Delta Lake support ACID MERGE operations, allowing late-arriving data to be integrated into existing partitions without full table rewrites."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Write Amplification' in the context of Apache Iceberg?",
    options: ["Increasing the volume of incoming Kafka messages", "The overhead of updating metadata and rewriting data files during small updates", "The speed of disk writes", "Using multiple threads for ingestion"],
    answer: 1,
    explanation: "Write amplification occurs when a small data change requires rewriting a large underlying file or significant metadata updates, a common challenge in Copy-on-Write (CoW) strategies."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "governance",
    question: "In Apache Atlas, what is a 'Glossary' used for?",
    options: ["Storing database passwords", "Defining business concepts and terms independently of the physical technical metadata", "Indexing log files", "Managing Kafka offsets"],
    answer: 1,
    explanation: "The Atlas Glossary provides a business-friendly vocabulary to categorize and find technical assets based on organizational terminology."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "data-modelling",
    question: "When mapping a Logical Model to an HBase Physical Model, what is the primary purpose of 'Salting' a Row Key?",
    options: ["Encrypting the data", "Improving data compression", "Distributing writes across multiple RegionServers to avoid hotspots", "Sorting data alphabetically"],
    answer: 2,
    explanation: "Salting adds a prefix to the row key to ensure that sequentially generated keys (like timestamps) are distributed across the cluster rather than hitting a single server."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "streaming",
    question: "In Kafka, what does the 'Compact' cleanup policy do?",
    options: ["Deletes messages after 7 days", "Only retains the latest value for a specific message key", "Compresses the data using Gzip", "Moves data to S3 storage"],
    answer: 1,
    explanation: "Log compaction ensures that Kafka retains at least the last known value for each message key within a partition, ideal for restoring state in 'KTable' scenarios."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "mlops",
    question: "What is the role of 'Human-in-the-loop' (HITL) in a Banking AI Risk pipeline?",
    options: ["Replacing all AI models with manual labor", "Providing manual verification for low-confidence model predictions before a final decision", "Teaching employees how to code in Python", "Managing the data center cooling"],
    answer: 1,
    explanation: "HITL is a requirement in highly regulated industries (like Banking) where a human must review edge cases or high-risk AI decisions to ensure compliance and accuracy."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "lakehouse",
    question: "How does Apache Iceberg handle 'Schema Evolution' differently than traditional Hive?",
    options: ["It requires a full table rewrite", "It uses unique ID-based column mapping instead of column names or positions", "It doesn't support adding new columns", "It only supports CSV files"],
    answer: 1,
    explanation: "Iceberg tracks columns by ID. This allows for renaming or reordering columns without the risk of data corruption, as the mapping is not dependent on the column's position in the file."
  },
  {
    id: 88,
    difficulty: "medium",
    category: "security",
    question: "What is 'Column-Level Encryption' (CLE) in a PCI-DSS compliant data platform?",
    options: ["Encrypting the entire hard drive", "Encrypting sensitive fields like Credit Card numbers before they are stored in the Lake", "Password-protecting the Excel export", "Hiding the column from the UI"],
    answer: 1,
    explanation: "CLE ensures that sensitive data is unreadable at the storage layer, requiring specific keys to decrypt even if a user has access to the physical file."
  },
  {
    id: 89,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Saga Pattern' used for in distributed data systems?",
    options: ["Data visualization", "Managing long-running transactions and data consistency across multiple microservices", "Indexing Solr collections", "Scaling Kafka brokers"],
    answer: 1,
    explanation: "Sagas manage distributed transactions by using a sequence of local transactions and compensations to ensure eventual consistency if one step fails."
  },
  {
    id: 90,
    difficulty: "medium",
    category: "dataops",
    question: "In a CI/CD pipeline, what is a 'Quality Gate'?",
    options: ["A physical door to the server room", "An automated check that stops the pipeline if data quality or code tests fail", "A manual spreadsheet of bugs", "The login page of the Data Catalog"],
    answer: 1,
    explanation: "Quality Gates ensure that only code or data that meets predefined standards (e.g., SonarQube scores or Great Expectations tests) moves to production."
  },
  {
    id: 91,
    difficulty: "hard",
    category: "streaming",
    question: "In Kafka, what is a 'Zombie Instance' in the context of Transactions?",
    options: ["A broker that has crashed", "A producer instance that was thought to be dead but continues to send messages", "An empty topic", "A message that cannot be deleted"],
    answer: 1,
    explanation: "Zombie instances occur when a producer times out and is replaced, but the original producer recovers and attempts to send data. Kafka uses 'Epochs' to fence these out."
  },
  {
    id: 92,
    difficulty: "medium",
    category: "architecture",
    question: "Which architecture is optimized for sub-second 'Points Lookups' on billions of rows?",
    options: ["Batch-based Hive", "HBase (NoSQL)", "S3 Object Storage", "Standard Python Lists"],
    answer: 1,
    explanation: "HBase is a wide-column store designed for low-latency, random access (point lookups) by primary key, even at massive scales."
  },
  {
    id: 93,
    difficulty: "hard",
    category: "migration",
    question: "During a Hive-to-Iceberg migration, what is 'Shadow Ingestion'?",
    options: ["Ingesting data at night", "Running the new Iceberg pipeline in parallel with the legacy Hive pipeline to validate data parity", "Hiding the data from users", "Encrypting the source files"],
    answer: 1,
    explanation: "Shadow ingestion (or Dual Writing) allows teams to compare the output of the new system against the old 'Source of Truth' before the final cutover."
  },
  {
    id: 94,
    difficulty: "medium",
    category: "governance",
    question: "What is the primary benefit of 'Data Lineage' for a Data Engineer?",
    options: ["Increasing storage speed", "Conducting impact analysis to see what downstream reports will break if a table changes", "Choosing a color for a dashboard", "Managing employee payroll"],
    answer: 1,
    explanation: "Lineage provides a map of data dependencies, allowing engineers to prevent breaking downstream BI tools when modifying upstream pipelines."
  },
  {
    id: 95,
    difficulty: "hard",
    category: "performance",
    question: "What does 'Predicate Pushdown' do in a Spark-Iceberg query?",
    options: ["It moves the data to the user's laptop", "It filters data at the storage level so only relevant rows are read into memory", "It renames columns automatically", "It deletes old snapshots"],
    answer: 1,
    explanation: "Predicate pushdown improves performance by 'pushing' the SQL 'WHERE' clause filters down to the file level, reducing I/O and memory overhead."
  },
  {
    id: 96,
    difficulty: "medium",
    category: "analytics",
    question: "What is 'Near Real-Time' (NRT) latency usually defined as in Banking?",
    options: ["Seconds to minutes", "Hours to days", "Nanoseconds", "Once a month"],
    answer: 0,
    explanation: "NRT typically refers to processing that happens within a few seconds to a few minutes of the event occurring."
  },
  {
    id: 97,
    difficulty: "hard",
    category: "mlops",
    question: "Which tool is commonly used to manage the lifecycle (versioning, tracking) of ML models?",
    options: ["Apache Hive", "MLflow", "Apache Solr", "Microsoft Word"],
    answer: 1,
    explanation: "MLflow is an open-source platform used to manage the ML lifecycle, including experimentation, reproducibility, and deployment."
  },
  {
    id: 98,
    difficulty: "medium",
    category: "performance",
    question: "In Solr, what is 'Sharding' used for?",
    options: ["Deleting data", "Splitting a large index across multiple servers for horizontal scaling", "Backing up data to tape", "Changing the font of search results"],
    answer: 1,
    explanation: "Sharding allows Solr to handle massive document collections by distributing the search load across multiple nodes."
  },
  {
    id: 99,
    difficulty: "hard",
    category: "architecture",
    question: "In a 'Hub and Spoke' data architecture, what is the 'Hub'?",
    options: ["A centralized data repository or master data store", "A remote office location", "A type of network cable", "A specific Kafka topic"],
    answer: 0,
    explanation: "The Hub serves as the central integration point for data, which is then distributed to various 'Spokes' (department-specific data marts)."
  },
  {
    id: 100,
    difficulty: "medium",
    category: "data-modelling",
    question: "What is a 'Bridge Table' used for in Dimensional Modelling?",
    options: ["Connecting two different databases", "Handling many-to-many relationships between dimensions and facts", "Storing image files", "Speeding up network traffic"],
    answer: 1,
    explanation: "A bridge table allows you to resolve complex many-to-many relationships (e.g., one bank account having multiple owners)."
  },
  {
    id: 101,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Hidden Partitioning' in Apache Iceberg?",
    options: ["Encryption of partitions", "The ability to derive partition values automatically from columns without adding extra 'partition' columns", "Hiding data from auditors", "Using secret folder names"],
    answer: 1,
    explanation: "Iceberg handles the relationship between a column (like a timestamp) and its partition (like a day) internally, so users don't have to manually specify partition filters."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "streaming",
    question: "What is the 'Exact-Once' (EOS) semantic in Kafka?",
    options: ["Data is sent at least once", "Data is guaranteed to be processed exactly once, even if producers or consumers fail", "Data is sent only on Tuesdays", "Data is never lost but can be duplicated"],
    answer: 1,
    explanation: "EOS uses transactional producers and idempotent writes to ensure that duplicate data is never committed to the log, ensuring total data integrity."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "governance",
    question: "Which regulation primarily governs data privacy for EU citizens and impacts data engineering design?",
    options: ["PCI-DSS", "GDPR", "HIPAA", "SOX"],
    answer: 1,
    explanation: "GDPR (General Data Protection Regulation) requires features like the 'Right to be Forgotten,' which necessitates efficient record-level deletion in data lakes."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "architecture",
    question: "In Data Mesh, what is 'Federated Computational Governance'?",
    options: ["A central team that makes all decisions", "Global standards enforced automatically through the platform's code and policies", "A type of government election", "Manual audits once a year"],
    answer: 1,
    explanation: "It is the practice of embedding governance (security, quality, compliance) directly into the automated platform used by all domain teams."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "dataops",
    question: "What is the purpose of 'Data Observability'?",
    options: ["Watching people work", "Monitoring the health, performance, and quality of data pipelines in real-time", "Storing data in a transparent box", "Checking the server's physical temperature"],
    answer: 1,
    explanation: "Observability tools (like Monte Carlo or DataDog) help teams detect 'silent' failures like data drift or empty tables before they impact business users."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "lakehouse",
    question: "What is a 'Manifest File' in the Iceberg architecture?",
    options: ["A list of all users", "A file that tracks a subset of data files and their associated metadata/statistics", "An installation script", "A document for shipping hardware"],
    answer: 1,
    explanation: "Manifest files are the middle layer of Iceberg's metadata, providing the query engine with information on which data files to read and which to skip."
  },
  {
    id: 107,
    difficulty: "medium",
    category: "security",
    question: "In an IAM 'Least Privilege' model, what access should a service account have?",
    options: ["Full Admin access to everything", "Only the specific permissions required to perform its task", "Read-only access to all databases", "No access at all"],
    answer: 1,
    explanation: "Least Privilege reduces the 'blast radius' of a security breach by ensuring accounts only have the minimum access needed for their specific function."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Compaction' in a Log-Structured Merge (LSM) tree database like HBase?",
    options: ["Deleting old data", "Merging small sorted files into larger ones to reduce read I/O", "Compressing the CPU cache", "Shrinking the physical size of the server"],
    answer: 1,
    explanation: "Compaction in HBase (Major and Minor) cleans up deleted records and merges files to keep search performance efficient."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "analytics",
    question: "What is a 'Metric Store'?",
    options: ["A place to buy rulers", "A centralized repository for standardized business logic (e.g., 'Gross Margin')", "A folder for log files", "A type of data warehouse"],
    answer: 1,
    explanation: "A Metric Store (or Semantic Layer) ensures that 'Revenue' is calculated the same way across every dashboard and application in the company."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Data Gravity'?",
    options: ["The speed at which data falls", "The concept that as datasets grow, they attract more applications and services to them", "A physics experiment", "The cost of storage"],
    answer: 1,
    explanation: "Data Gravity implies that moving massive datasets is hard, so it's more efficient to move the 'compute' (applications) to the 'data'."
  },
/* ======================================================
    HBASE DEEP-DIVE & ARCHITECTURAL PATTERNS
   ====================================================== */
  {
    id: 111,
    difficulty: "medium",
    category: "no-sql",
    question: "How does HBase optimize storage for 'Sparse' datasets compared to traditional RDBMS?",
    options: [
      "By using advanced bitmask compression", 
      "By simply not storing null values or empty columns on disk", 
      "By storing all nulls in a separate metadata file", 
      "By using a fixed-width row format"
    ],
    answer: 1,
    explanation: "HBase is designed for sparse data; if a row does not have a value for a specific column, no space is consumed, unlike RDBMS which often reserves space for null fields."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "architecture",
    question: "In the CAP theorem, which two characteristics does HBase prioritize?",
    options: [
      "Availability and Partition Tolerance (AP)", 
      "Consistency and Availability (CA)", 
      "Consistency and Partition Tolerance (CP)", 
      "Latency and Durability (LD)"
    ],
    answer: 2,
    explanation: "HBase is a CP system, prioritizing strict data consistency over availability during certain network or node failures."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "data-modelling",
    question: "Which HBase component must be defined at table creation time because it determines physical storage on disk?",
    options: [
      "Column Qualifiers", 
      "Column Families", 
      "Timestamps", 
      "Row Key Salts"
    ],
    answer: 1,
    explanation: "Column Families are logical groupings of related columns that must be defined upfront as they dictate how data is physically partitioned on the filesystem."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "performance",
    question: "Why does HBase store Row Keys in lexicographical order?",
    options: [
      "To make the data human-readable in HDFS", 
      "To optimize for range scans across related keys", 
      "To ensure data is encrypted alphabetically", 
      "To prevent any duplicate keys from being written"
    ],
    answer: 1,
    explanation: "Lexicographical ordering allows HBase to perform highly efficient range scans, as logically related data (based on the key) is physically stored close together."
  },
  {
    id: 115,
    difficulty: "medium",
    category: "no-sql",
    question: "What functionality do 'Column Qualifiers' provide in an HBase schema?",
    options: [
      "They define the data type of the row", 
      "They act as flexible sub-labels that can be added dynamically without a predefined schema", 
      "They determine the replication factor of the region", 
      "They are used to salt the row keys"
    ],
    answer: 1,
    explanation: "Unlike Column Families, Column Qualifiers are flexible and can be added to any row at write-time, supporting a dynamic 'schema-on-write' approach."
  },
  {
    id: 116,
    difficulty: "hard",
    category: "architecture",
    question: "HBase achieves horizontal scalability by partitioning tables into which distributed units?",
    options: [
      "Shards", 
      "Buckets", 
      "Regions", 
      "Blocks"
    ],
    answer: 2,
    explanation: "HBase partitions tables into Regions, which are then distributed across a cluster of RegionServers to balance the load."
  },
  {
    id: 117,
    difficulty: "medium",
    category: "no-sql",
    question: "Which underlying storage system does HBase typically leverage for its data persistence?",
    options: [
      "Amazon S3", 
      "Hadoop Distributed File System (HDFS)", 
      "Local Linux EXT4 partitions", 
      "In-memory Redis clusters"
    ],
    answer: 1,
    explanation: "HBase is designed to run on top of HDFS, providing real-time random access to data that is physically stored in the Hadoop ecosystem."
  },
  {
    id: 118,
    difficulty: "hard",
    category: "data-modelling",
    question: "How does HBase handle multiple versions of the same cell (row/column intersection)?",
    options: [
      "By overwriting the previous value immediately", 
      "By using Timestamps to distinguish between different versions", 
      "By creating a new Row Key for every change", 
      "By storing changes in a separate delta-table"
    ],
    answer: 1,
    explanation: "HBase supports multi-versioning by assigning a timestamp to each cell, allowing the system to store and retrieve historical states of data."
  },
  {
    id: 119,
    difficulty: "medium",
    category: "architecture",
    question: "Which tool would a developer use to execute SQL-style queries against an HBase cluster?",
    options: [
      "Apache Hive", 
      "Apache Phoenix", 
      "Apache Spark SQL", 
      "PrestoDB"
    ],
    answer: 1,
    explanation: "Apache Phoenix provides a relational layer and JDBC driver, allowing users to query HBase using standard SQL syntax."
  },
  {
    id: 120,
    difficulty: "hard",
    category: "data-engineering",
    question: "HBase is primarily optimized for which type of workload?",
    options: [
      "Complex multi-table JOINs", 
      "Write-heavy workloads with high-throughput", 
      "Small datasets under 10GB", 
      "Ad-hoc reporting on unindexed columns"
    ],
    answer: 1,
    explanation: "HBase is optimized for massive volumes (billions of rows) and high-throughput, write-heavy workloads where random access is required."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "architecture",
    question: "In HBase, what happens to data when a 'Delete' command is issued?",
    options:[
      "The data is immediately erased from HDFS",
      "A 'Tombstone' marker is written to the MemStore",
      "The Row Key is renamed to 'deleted'",
      "The RegionServer is rebooted"
    ],
    answer: 1,
    explanation: "HBase uses an LSM-tree architecture. Deletes are handled by writing a 'Tombstone' marker; the data is only physically removed during a Major Compaction."
   },
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Note: As the bank currently has 70 questions, all are prioritized for complete domain coverage.
const hotsQuestions = [
    // Core Architecture & Modeling (Indices 0-19)
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,           // DW Goals, Cloud Scalability, Kimball, Star Schema, Grain, SCD Type 2, CDC, Lakehouse
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, // Streaming, Semantic Layer, Lineage, RBAC, Feature Stores, Partitioning, Data Fabric, Data Vault

    // Advanced Patterns & Medallion (Indices 20-39)
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, // Silver Layer, Active Metadata, Event-Driven, Conformed Dimensions, Training-Serving Skew
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, // Customer 360, Data Catalog, Columnar Storage, Vertical vs Horizontal Scaling, Gold Layer

    // Performance & Governance (Indices 40-59)
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, // Impact Analysis, Partition Pruning, Virtualization, Kafka, Headless BI, Parquet, Identity Resolution
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59, // Offline Feature Stores, Backpressure, Activity Schema, Data Skew, Semantic Gap, Column-based

    // Specialized Scale & Strategy (Indices 60-69)
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,  // Data Mesh, OLAP, Hubs, Data Stewards, S3/ADLS, Windowing, Cube/dbt, Z-Order, Petabyte Scale

    // Advanced data architecture - migration and modernization 
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
    110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
];
