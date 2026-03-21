/* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 1/7)
   Topics: C# Language, .NET Core, Performance, Memory
   ====================================================== */
const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "C# Language",
    question: "Which keyword is used in C# to prevent a class from being inherited by other classes?",
    options: ["static", "readonly", "sealed", "private"],
    answer: 2,
    explanation: "The 'sealed' keyword prevents other classes from inheriting from the class. It is the C# equivalent of 'final' in Java."
  },
  {
    id: 2,
    difficulty: "medium",
    category: ".NET Core",
    question: "In ASP.NET Core Dependency Injection, which lifetime creates a new instance every time a service is requested from the container?",
    options: ["Singleton", "Scoped", "Transient", "Instance"],
    answer: 2,
    explanation: "Transient services are created each time they are requested. Scoped services are created once per client request, and Singleton services are created once for the lifetime of the application."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the primary difference between 'String' and 'StringBuilder' in C#?",
    options: [
      "String is mutable; StringBuilder is immutable",
      "String is immutable; StringBuilder is mutable",
      "String is a value type; StringBuilder is a reference type",
      "There is no difference in memory management"
    ],
    answer: 1,
    explanation: "Strings are immutable (every change creates a new string in memory). StringBuilder is mutable, making it much more efficient for intensive string manipulation."
  },
  {
    id: 4,
    difficulty: "hard",
    category: "Performance",
    question: "Which feature introduced in .NET Core allows for high-performance memory manipulation without heap allocation by representing a contiguous region of arbitrary memory?",
    options: ["MemoryCache", "Span<T>", "ArraySegment", "Stack<T>"],
    answer: 1,
    explanation: "Span<T> is a ref struct that allows you to point to contiguous memory (on the stack or heap) without the overhead of additional allocations, significantly improving performance for slicing and buffer management."
  },
  {
    id: 5,
    difficulty: "medium",
    category: ".NET Core",
    question: "In the ASP.NET Core middleware pipeline, what is the purpose of the 'next' delegate?",
    options: [
      "To restart the request processing",
      "To call the next middleware component in the pipeline",
      "To terminate the connection",
      "To return the response to the client immediately"
    ],
    answer: 1,
    explanation: "Each middleware component receives a 'RequestDelegate' (next) which it must invoke to pass control to the next component in the pipeline."
  },
  {
    id: 6,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "You observe high CPU usage and 'GC Overhead Limit Exceeded' equivalents in a .NET application. Which tool would you use to analyze 'Managed Heap' allocations to find a memory leak?",
    options: ["Event Viewer", "dotnet-counters", "dotMemory or Visual Studio Profiler", "Ping"],
    answer: 2,
    explanation: "dotMemory and the Visual Studio Memory Profiler allow you to take snapshots of the heap to identify objects that are staying alive unexpectedly and roots preventing Garbage Collection."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "C# Language",
    question: "Which C# feature allows you to execute code when a variable goes out of scope, typically used for unmanaged resource cleanup?",
    options: ["The 'using' statement and IDisposable", "Finalizers", "Static Constructors", "The 'delete' keyword"],
    answer: 0,
    explanation: "The 'using' statement ensures that Dispose() is called on an IDisposable object as soon as the block is exited, even if an exception occurs."
  },
  {
    id: 8,
    difficulty: "hard",
    category: "Performance",
    question: "How does the 'Tiered Compilation' feature in .NET Core 3.0+ improve performance?",
    options: [
      "It compiles the whole app to native code before startup",
      "It starts with quickly generated low-quality code and later recompiles 'hot' methods with higher optimization",
      "It disables the JIT compiler to save memory",
      "It runs code on both the CPU and GPU simultaneously"
    ],
    answer: 1,
    explanation: "Tiered compilation allows the app to start fast using 'Tier 0' code (unoptimized JIT) and promotes frequently called methods to 'Tier 1' (highly optimized JIT) later."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Where should you store sensitive data like API Keys or Database Connection Strings during local development in ASP.NET Core?",
    options: ["appsettings.json", "In a static class", "Secret Manager (Secrets.json)", "Environment Variables in source control"],
    answer: 2,
    explanation: "The Secret Manager tool is used to store sensitive data during development. Unlike appsettings.json, the secrets.json file is stored outside the project folder and isn't checked into source control."
  },
  {
    id: 10,
    difficulty: "medium",
    category: "C# Language",
    question: "What is 'Boxing' in C#?",
    options: [
      "Encapsulating a class in a namespace",
      "Converting a value type to a reference type (object)",
      "Wrapping an exception in a try-catch block",
      "Moving data from a hard drive to RAM"
    ],
    answer: 1,
    explanation: "Boxing is the process of converting a value type (like int) to the type object. Unboxing is the reverse. Both operations have a performance cost due to heap allocation."
  },
  // Questions 11-50 continued...
  {
    id: 11,
    difficulty: "hard",
    category: "Microservices",
    question: "Which pattern is typically used in Microservices to ensure that a service can handle failure of a downstream dependency without crashing the entire system?",
    options: ["Singleton Pattern", "Circuit Breaker Pattern", "Factory Pattern", "Observer Pattern"],
    answer: 1,
    explanation: "The Circuit Breaker pattern (often implemented with the Polly library in .NET) prevents an application from repeatedly trying to execute an operation that's likely to fail."
  },
  {
    id: 12,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "In Entity Framework Core, what is 'Eager Loading'?",
    options: [
      "Loading data only when it is accessed for the first time",
      "Loading related data as part of the initial query using the .Include() method",
      "Loading all tables in the database at startup",
      "Loading data directly into the UI without a controller"
    ],
    answer: 1,
    explanation: "Eager loading uses the .Include() extension method to specify related data to be included in the query results, reducing the 'N+1' query problem."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "REST Services",
    question: "Which HTTP status code should a REST API return when a request is successful and a new resource has been created?",
    options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
    answer: 1,
    explanation: "HTTP 201 Created is the standard response for a successful POST request that results in a new resource."
  },
  {
    id: 14,
    difficulty: "hard",
    category: "Security (JWT)",
    question: "What are the three parts of a JSON Web Token (JWT)?",
    options: [
      "User, Password, Role",
      "Header, Payload, Signature",
      "ID, Token, Expiry",
      "Key, IV, Data"
    ],
    answer: 1,
    explanation: "A JWT consists of a Header (algorithm info), Payload (claims), and a Signature (to verify the token's integrity)."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "C# Language",
    question: "What does the 'async' keyword do to a method in C#?",
    options: [
      "It makes the method run on a background thread automatically",
      "It allows the use of the 'await' keyword inside the method",
      "It locks the method so only one user can access it",
      "It makes the method execute faster"
    ],
    answer: 1,
    explanation: "The 'async' keyword enables the 'await' keyword and transforms the method into a state machine, allowing the thread to be released to the pool while waiting for I/O tasks."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "Quality (SonarQube)",
    question: "In a SonarQube Quality Gate, what does 'Cognitive Complexity' measure?",
    options: [
      "How many lines of code are in a file",
      "How difficult the code is for a human to understand (nested loops, switches, etc.)",
      "The number of mathematical operations",
      "The speed of the algorithm"
    ],
    answer: 1,
    explanation: "Cognitive Complexity measures how hard the flow of a method is to follow, penalizing deep nesting and complex logic more heavily than standard cyclomatic complexity."
  },
  {
    id: 17,
    difficulty: "hard",
    category: "Optimizations",
    question: "To optimize an ASP.NET Core API for high-throughput, which approach is best for database context usage?",
    options: [
      "Create one DbContext and share it as a Singleton",
      "Use DbContext Pooling via services.AddDbContextPool<MyDbContext>(...)",
      "Always create a new DbContext using 'new' in every method",
      "Disable the database completely"
    ],
    answer: 1,
    explanation: "DbContext Pooling allows the application to reuse DbContext instances, reducing the overhead of setup and teardown for every request."
  },
  {
    id: 18,
    difficulty: "medium",
    category: "Swagger",
    question: "Which tool is commonly used in ASP.NET Core to automatically generate interactive API documentation (OpenAPI)?",
    options: ["Postman", "Swagger (Swashbuckle)", "NuGet", "Entity Framework"],
    answer: 1,
    explanation: "Swashbuckle is the standard NuGet package used to integrate Swagger into ASP.NET Core, providing a UI to test and document API endpoints."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the result of using the 'var' keyword in C#?",
    options: [
      "The variable becomes dynamic and its type can change at runtime",
      "The compiler determines the type at compile time based on the assignment",
      "The variable is assigned to the 'Object' type",
      "It makes the variable global"
    ],
    answer: 1,
    explanation: "In C#, 'var' is statically typed. The compiler infers the specific type at compile time. Once assigned, the type cannot be changed."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "Microservices",
    question: "In a Microservices architecture, what is an 'API Gateway' used for?",
    options: [
      "To store the application's database",
      "As a single entry point for clients to route requests to multiple internal services",
      "To host the frontend HTML files",
      "To compile the C# code"
    ],
    answer: 1,
    explanation: "An API Gateway acts as a reverse proxy to route requests, aggregate results, and handle cross-cutting concerns like authentication and rate limiting for microservices."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is the purpose of 'app.UseRouting()' and 'app.UseEndpoints()' in ASP.NET Core 3.0+?",
    options: [
      "To connect to the database",
      "To implement Endpoint Routing which separates route matching from endpoint execution",
      "To manage CSS and JS files",
      "To enable JWT authentication"
    ],
    answer: 1,
    explanation: "Endpoint Routing allows the middleware pipeline to know which endpoint will be executed early in the process, allowing other middleware (like Auth) to make decisions based on that endpoint."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "C# Language",
    question: "Which C# operator is used to check if an object is compatible with a given type and returns null if it is not?",
    options: ["is", "as", "cast", "typecheck"],
    answer: 1,
    explanation: "The 'as' operator performs a conversion. If the conversion is not possible, it returns null instead of throwing an exception."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "If an ASP.NET Core application throws a 'TaskCanceledException' during a database call, what is the most likely cause?",
    options: [
      "The database server is down",
      "The client disconnected or the CancellationToken was triggered due to a timeout",
      "The code has a syntax error",
      "The hard drive is full"
    ],
    answer: 1,
    explanation: "TaskCanceledException usually occurs when a CancellationToken is cancelled, often because a user navigated away from a page or an HttpClient timeout was reached."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "How do you apply pending database changes to a database using EF Core Migrations?",
    options: [
      "Run 'dotnet ef database update'",
      "Restart the IIS server",
      "Delete the database and recreate it",
      "Use the 'Update-Package' command"
    ],
    answer: 0,
    explanation: "'dotnet ef database update' applies any migrations that have been created but not yet applied to the target database."
  },
  {
    id: 25,
    difficulty: "medium",
    category: "Security (OAuth)",
    question: "In OAuth 2.0, what is the 'Client ID'?",
    options: [
      "The user's password",
      "A public identifier for the application requesting access",
      "The IP address of the server",
      "A secret key that should never be shared"
    ],
    answer: 1,
    explanation: "The Client ID is a public identifier for the application. The Client Secret, however, must be kept confidential."
  },
  {
    id: 26,
    difficulty: "hard",
    category: "C# Language",
    question: "What is a 'ValueTask<T>' and when should it be used instead of 'Task<T>'?",
    options: [
      "It is used for multi-threading only",
      "It is a value type that can reduce allocations when a method often returns synchronously",
      "It is a mandatory keyword for all async methods in .NET 6",
      "It is used for storing data in the database"
    ],
    answer: 1,
    explanation: "ValueTask<T> is a struct. If an async method returns a result immediately (synchronously) most of the time, using ValueTask can prevent the allocation of a Task object on the heap."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "Web Services",
    question: "What is gRPC?",
    options: [
      "A type of SQL database",
      "A high-performance Remote Procedure Call (RPC) framework using Protocol Buffers and HTTP/2",
      "A JavaScript library for frontend development",
      "A tool for managing Git repositories"
    ],
    answer: 1,
    explanation: "gRPC is an open-source RPC framework. It uses Protobuf for serialization and HTTP/2 for transport, making it faster than traditional REST/JSON for service-to-service communication."
  },
  {
    id: 28,
    difficulty: "medium",
    category: "Validation",
    question: "Which library is the most popular choice for building 'Fluent' validation rules in .NET instead of using Data Annotations?",
    options: ["Entity Framework", "FluentValidation", "Newtonsoft.Json", "AutoMapper"],
    answer: 1,
    explanation: "FluentValidation allows you to separate validation logic from your model classes by creating dedicated validator classes using a fluent interface."
  },
  {
    id: 29,
    difficulty: "hard",
    category: "Performance",
    question: "What is the 'Large Object Heap' (LOH) in .NET?",
    options: [
      "A special memory area for objects larger than 85,000 bytes",
      "A cache for database queries",
      "The memory used by the Operating System",
      "A part of the CPU"
    ],
    answer: 0,
    explanation: "Objects larger than 85,000 bytes go to the LOH. Unlike the small object heap, the LOH is not compacted by default during Garbage Collection, which can lead to memory fragmentation."
  },
  {
    id: 30,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Dockerization' of a .NET application?",
    options: [
      "Converting the code to Java",
      "Packaging the application and its dependencies into a container",
      "Moving the database to a cloud provider",
      "Adding a login screen"
    ],
    answer: 1,
    explanation: "Dockerization involves creating a Dockerfile to package the .NET runtime and application into an image that runs consistently across environments."
  },
  {
    id: 31,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "You receive a '415 Unsupported Media Type' error from your ASP.NET Core API. What is the most likely cause?",
    options: [
      "The server is missing a required file",
      "The Content-Type header in the request (e.g., text/plain) does not match what the API expects (e.g., application/json)",
      "The user is not authorized",
      "The API has crashed"
    ],
    answer: 1,
    explanation: "Error 415 occurs when the server refuses to service the request because the payload is in a format not supported by the requested resource for the specified method."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'Null-Coalescing Operator' (??) in C#?",
    options: [
      "An operator to divide two nullable numbers",
      "An operator that returns the left-hand operand if it isn't null; otherwise, it returns the right-hand operand",
      "An operator to delete null objects",
      "An operator to check if two strings are equal"
    ],
    answer: 1,
    explanation: "Example: string name = inputName ?? 'Guest'; if inputName is null, name will be 'Guest'."
  },
  {
    id: 33,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "How do you enable CORS (Cross-Origin Resource Sharing) in an ASP.NET Core application?",
    options: [
      "It is enabled by default",
      "By using app.UseCors() in the middleware pipeline and configuring policies",
      "By changing the server's IP address",
      "By encrypting the response"
    ],
    answer: 1,
    explanation: "CORS must be configured in Program.cs/Startup.cs to allow frontend applications hosted on different domains to access the API."
  },
  {
    id: 34,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is the 'N+1 Query' problem in Entity Framework?",
    options: [
      "Creating too many tables",
      "Executing one query for the main list and then an additional query for each item in the list to load related data",
      "A math error in the C# compiler",
      "Using the wrong primary key"
    ],
    answer: 1,
    explanation: "This happens when you iterate through a list and access a navigation property that wasn't eagerly loaded, causing EF to hit the database for every single loop iteration."
  },
  {
    id: 35,
    difficulty: "medium",
    category: "C# Language",
    question: "What is a 'Record' in C# 9.0+?",
    options: [
      "A database table",
      "A reference type that provides built-in functionality for encapsulating data and provides value-based equality",
      "A log file on the server",
      "An array of strings"
    ],
    answer: 1,
    explanation: "Records are designed for immutable data models. Unlike classes, two records are considered equal if all their property values match."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "Web Services (SOAP)",
    question: "In the context of SOAP web services, what does 'WSDL' stand for?",
    options: [
      "Web Service Description Language",
      "Windows Service Data Link",
      "Web Site Design Layer",
      "World Service Discovery Language"
    ],
    answer: 0,
    explanation: "WSDL is an XML-based language used for describing the functionality offered by a SOAP web service."
  },
  {
    id: 37,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the difference between 'IEnumerable' and 'IQueryable' in C#?",
    options: [
      "There is no difference",
      "IEnumerable executes filtering in memory; IQueryable executes filtering on the database provider",
      "IEnumerable is faster for large databases",
      "IQueryable can only be used with XML"
    ],
    answer: 1,
    explanation: "IEnumerable is best for in-memory collections (LINQ to Objects). IQueryable is designed for out-of-memory data (LINQ to SQL/EF) as it translates expressions into SQL."
  },
  {
    id: 38,
    difficulty: "medium",
    category: "JWT",
    question: "Why is the JWT Signature important?",
    options: [
      "It makes the token smaller",
      "It allows the server to verify that the token has not been tampered with",
      "It contains the user's password",
      "It encrypts the entire token"
    ],
    answer: 1,
    explanation: "The signature is created by taking the encoded header and payload and signing them with a secret key. If a single character in the payload is changed, the signature will no longer match."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Which file is the entry point of a .NET 6+ application where the WebApplication builder is configured?",
    options: ["Startup.cs", "Program.cs", "App.config", "Web.config"],
    answer: 1,
    explanation: "In .NET 6 and later, the Startup.cs is typically merged into Program.cs using the Minimal Hosting model."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Deadlock' in a multi-threaded C# application?",
    options: [
      "The computer running out of battery",
      "A situation where two threads are each waiting for the other to release a lock, causing both to stop",
      "The application closing unexpectedly",
      "When a loop runs forever"
    ],
    answer: 1,
    explanation: "Deadlocks occur when thread A locks resource 1 and wants resource 2, while thread B locks resource 2 and wants resource 1."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Docker Compose'?",
    options: [
      "A C# library for strings",
      "A tool for defining and running multi-container Docker applications",
      "A way to write CSS",
      "A database engine"
    ],
    answer: 1,
    explanation: "Docker Compose uses a YAML file to configure application services, allowing you to start an entire stack (API, DB, Cache) with one command."
  },
  {
    id: 42,
    difficulty: "medium",
    category: "Validation",
    question: "In ASP.NET Core Controllers, how do you check if the submitted model passed the Data Annotation validation rules?",
    options: [
      "Check the 'ModelState.IsValid' property",
      "Use a try-catch block",
      "The framework checks it automatically and you can't access it",
      "Check the 'HttpContext.Error' list"
    ],
    answer: 0,
    explanation: "ModelState.IsValid returns false if any of the attributes (like [Required] or [EmailAddress]) on the model were violated."
  },
  {
    id: 43,
    difficulty: "hard",
    category: "Security (OAuth)",
    question: "In the OAuth 2.0 Authorization Code Flow, what is the 'Exchange' step?",
    options: [
      "Exchanging US dollars for Euros",
      "The client app exchanging an Authorization Code for an Access Token at the Token Endpoint",
      "Exchanging a password for a username",
      "The server exchanging data with the user"
    ],
    answer: 1,
    explanation: "This is a security measure. The app first gets a temporary code from the browser, then swaps it securely on the server-side for the actual token."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "C# Language",
    question: "Which of these is a 'Reference Type' in C#?",
    options: ["int", "bool", "string", "struct"],
    answer: 2,
    explanation: "In C#, strings and classes are reference types (stored on the heap). int, bool, and structs are value types (stored on the stack)."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What is an 'AggregateException' in .NET?",
    options: [
      "An exception that only happens in SQL",
      "An exception that wraps one or more child exceptions, typically thrown by Task.Wait() or Parallel.For",
      "A bug in the C# language",
      "An exception related to file system permissions"
    ],
    answer: 1,
    explanation: "Because tasks can run in parallel, multiple operations can fail at once. AggregateException collects all of them into a single object."
  },
  {
    id: 46,
    difficulty: "medium",
    category: "Web Services (REST)",
    question: "What does 'Idempotency' mean in the context of HTTP methods like PUT or DELETE?",
    options: [
      "The method is faster than others",
      "The method can be called multiple times with the same effect as calling it once",
      "The method requires a password",
      "The method returns encrypted data"
    ],
    answer: 1,
    explanation: "PUT is idempotent: if you update a resource with the same data twice, the end state is the same. POST is generally NOT idempotent."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "Quality Gate",
    question: "Which SonarQube metric tracks code that exists but is never executed by unit tests?",
    options: ["Complexity", "Code Coverage", "Technical Debt", "Duplications"],
    answer: 1,
    explanation: "Code Coverage percentage tells you how much of your business logic is being exercised by your test suite."
  },
  {
    id: 48,
    difficulty: "hard",
    category: "Optimizations",
    question: "Which approach is most efficient for reading a massive JSON file in .NET without consuming huge amounts of RAM?",
    options: [
      "Use 'File.ReadAllText()' to load it all into a string",
      "Use 'System.Text.Json' with a 'Stream' and deserializing piece by piece",
      "Convert it to XML first",
      "Use an 'ArrayList'"
    ],
    answer: 1,
    explanation: "Streaming allows the processor to handle data in chunks, keeping the memory footprint low regardless of the file size."
  },
  {
    id: 49,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'Yield' keyword used for in C#?",
    options: [
      "To stop the program",
      "To create an iterator block to return elements of a collection one at a time (lazy evaluation)",
      "To increase the speed of a loop",
      "To wait for a task to finish"
    ],
    answer: 1,
    explanation: "Yield allows you to return items as they are requested rather than building a full list in memory first."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Service Discovery' in a Microservices cluster?",
    options: [
      "A way for developers to find new APIs",
      "A mechanism where services automatically detect the network location (IP/Port) of other services",
      "Using Google to find documentation",
      "Installing Windows updates"
    ],
    answer: 1,
    explanation: "In dynamic environments (like Kubernetes), instances come and go. Service Discovery (e.g., Consul or K8s DNS) allows Service A to find Service B without hardcoded IPs."
  },
  /* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 2/7)
   Topics: Advanced EF Core, Security, API Validation, Microservices
   ====================================================== */
  {
    id: 51,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "In EF Core, what are 'Shadow Properties'?",
    options: [
      "Properties that exist in the database but are not defined in the C# entity class",
      "Properties that are encrypted in the database",
      "Properties that are only used for UI rendering",
      "Private fields that cannot be accessed by LINQ"
    ],
    answer: 0,
    explanation: "Shadow properties are properties that are not defined in your .NET entity class but are defined for that entity type in the EF Core model. They are often used for metadata like 'LastUpdated' or 'ForeignKey' IDs.",
    hint: "They 'shadow' the entity without being part of its class definition."
  },
  {
    id: 52,
    difficulty: "medium",
    category: "Security (JWT)",
    question: "What is the purpose of a 'Refresh Token' in a JWT-based authentication system?",
    options: [
      "To encrypt the password",
      "To obtain a new Access Token without requiring the user to re-enter credentials",
      "To change the user's role",
      "To speed up the database connection"
    ],
    answer: 1,
    explanation: "Access tokens are short-lived for security. A refresh token is long-lived and allows the client to securely request a new access token when the old one expires.",
    hint: "It helps maintain a session without repeated logins."
  },
  {
    id: 53,
    difficulty: "hard",
    category: "Microservices",
    question: "In the 'Saga Pattern' for Microservices, what is a 'Compensating Transaction'?",
    options: [
      "A transaction that calculates taxes",
      "A transaction that undoes the changes of a previous successful step if a later step in the sequence fails",
      "A transaction that runs in parallel with others",
      "A backup of the database"
    ],
    answer: 1,
    explanation: "Sagas manage distributed transactions. If one service fails, compensating transactions are triggered to revert the changes made by previous services to maintain data consistency.",
    hint: "It's the 'Undo' button for distributed systems."
  },
  {
    id: 54,
    difficulty: "medium",
    category: "Swagger",
    question: "How do you specify that an ASP.NET Core API parameter is required and should be validated by Swagger UI using Data Annotations?",
    options: [
      "[Required]",
      "[MustHave]",
      "[NotNull]",
      "[Validate]"
    ],
    answer: 0,
    explanation: "The [Required] attribute from System.ComponentModel.DataAnnotations is recognized by both the ASP.NET Core validator and the Swagger generator to mark fields as mandatory.",
    hint: "Standard .NET attribute for mandatory fields."
  },
  {
    id: 55,
    difficulty: "hard",
    category: "Performance",
    question: "What is the impact of calling '.ToList()' or '.ToArray()' inside a LINQ query connected to an IQueryable database source?",
    options: [
      "It makes the query run faster on the database",
      "It triggers immediate execution and loads all resulting data into the application's memory (Client-side evaluation)",
      "It compresses the data",
      "It creates a database index"
    ],
    answer: 1,
    explanation: "Calling .ToList() terminates the 'deferred execution' of IQueryable. Any subsequent filtering or logic happens in RAM, which can lead to performance issues if the dataset is large.",
    hint: "It 'materializes' the query results."
  },
  {
    id: 56,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Which middleware is responsible for converting an incoming JSON request body into a C# object in a Controller action?",
    options: [
      "UseRouting",
      "Model Binding (via System.Text.Json or Newtonsoft.Json)",
      "UseAuthentication",
      "UseStaticFiles"
    ],
    answer: 1,
    explanation: "Model Binding is the process that maps data from HTTP requests (query strings, route data, or bodies) to action parameters.",
    hint: "Mapping request data to C# parameters."
  },
  {
    id: 57,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the 'init' keyword used for in C# 9.0+ property declarations?",
    options: [
      "To initialize a static variable",
      "To allow the property to be set only during object creation (Immutable after creation)",
      "To make the property private",
      "To connect the property to a database"
    ],
    answer: 1,
    explanation: "An 'init-only' setter allows a property to be assigned a value during object initialization (e.g., in a constructor or object initializer) but makes it read-only thereafter.",
    hint: "Useful for creating immutable objects with clean syntax."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "Web Services (REST)",
    question: "Which HTTP method is considered 'Safe' according to RFC standards because it should not modify the state of the server?",
    options: ["POST", "PUT", "GET", "PATCH"],
    answer: 2,
    explanation: "GET and HEAD are 'Safe' methods because they are intended for retrieval only and should not have side effects on the server data.",
    hint: "Read-only operation."
  },
  {
    id: 59,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is the purpose of 'Global Query Filters' in Entity Framework Core?",
    options: [
      "To filter the entire internet",
      "To automatically apply a WHERE clause (like IsDeleted == false) to every query for a specific entity type",
      "To hide tables from certain users",
      "To speed up database migrations"
    ],
    answer: 1,
    explanation: "Global query filters are applied automatically to any LINQ query for an entity. They are commonly used for Soft Delete or Multi-tenancy (filtering by TenantId).",
    hint: "Automatic filtering at the model level."
  },
  {
    id: 60,
    difficulty: "medium",
    category: "Security (OAuth)",
    question: "In OAuth 2.0, what is a 'Scope'?",
    options: [
      "The physical location of the server",
      "A way to limit the application's access to a user's account (e.g., read-only vs read-write)",
      "The duration the token is valid",
      "A debugging tool"
    ],
    answer: 1,
    explanation: "Scopes are used to grant limited access to the user's data. For example, an app might ask for 'openid' (identity) and 'profile' scopes but not 'mail.send'.",
    hint: "Permissions requested by the client."
  },
  {
    id: 61,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "When an ASP.NET Core app fails to start with 'System.IO.IOException: Failed to bind to address...', what is the most likely reason?",
    options: [
      "The database is full",
      "Another process is already using the configured Port (e.g., 5000 or 443)",
      "The C# code has a typo",
      "The user is not logged in"
    ],
    answer: 1,
    explanation: "This error usually means the port the application is trying to listen on is already occupied by another application or instance.",
    hint: "Check for port conflicts."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "C# Language",
    question: "What is 'String Interpolation' in C#?",
    options: [
      "Breaking a string into characters",
      "A syntax using '$' that allows embedding expressions directly inside a string literal",
      "Converting a string to an integer",
      "Encrypting a string"
    ],
    answer: 1,
    explanation: "Example: $\"Hello {name}\". It provides a more readable and convenient way to concatenate strings compared to String.Format().",
    hint: "Uses the dollar sign prefix."
  },
  {
    id: 63,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Eventual Consistency' in a distributed microservices environment?",
    options: [
      "The database never saves data",
      "A guarantee that, if no new updates are made, all accesses will eventually return the last updated value, though not necessarily immediately",
      "When the server is always in sync with the client",
      "A bug in the network protocol"
    ],
    answer: 1,
    explanation: "Due to network latency and distributed data, it takes time for an update in Service A to reflect in Service B. The system is 'eventually' consistent rather than 'strongly' consistent.",
    hint: "Consistency over time, not in real-time."
  },
  {
    id: 64,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "In EF Core, what does '.AsNoTracking()' do?",
    options: [
      "It disables the database",
      "It tells EF not to track changes for the returned entities, improving performance for read-only queries",
      "It hides the user's activity",
      "It prevents the entity from being deleted"
    ],
    answer: 1,
    explanation: "Tracking consumes memory and CPU to detect changes. For read-only scenarios, disabling tracking reduces overhead significantly.",
    hint: "Use it for read-only data."
  },
  {
    id: 65,
    difficulty: "hard",
    category: "Security (JWT)",
    question: "What is the 'iss' claim in a JWT payload?",
    options: [
      "Issue ID",
      "Issuer (The identity of the server that generated the token)",
      "Issue Date",
      "Is Secure (Boolean)"
    ],
    answer: 1,
    explanation: "The 'iss' (issuer) claim identifies the principal that issued the JWT, helping the client/server verify the source of the token.",
    hint: "Who issued the token?"
  },
  {
    id: 66,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is the purpose of 'Action Filters' in ASP.NET Core?",
    options: [
      "To filter images",
      "To execute code before or after a specific controller action executes",
      "To route the request to a different server",
      "To minify CSS files"
    ],
    answer: 1,
    explanation: "Action filters allow you to perform cross-cutting concerns like logging, validation, or modifying results for specific methods.",
    hint: "Think of [Authorize] or [LogAction]."
  },
  {
    id: 67,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Object Pooling' in the context of high-performance .NET development?",
    options: [
      "Deleting objects regularly",
      "A pattern that keeps a set of objects ready for use instead of creating and destroying them repeatedly",
      "Putting all objects in a single list",
      "Sharing objects between users"
    ],
    answer: 1,
    explanation: "Object pooling (e.g., using Microsoft.Extensions.ObjectPool) reduces Garbage Collection pressure by reusing objects like StringBuilder or large buffers.",
    hint: "Recycle instead of dispose."
  },
  {
    id: 68,
    difficulty: "medium",
    category: "Quality (SonarQube)",
    question: "In SonarQube, what is a 'Code Smell'?",
    options: [
      "An error that stops the build",
      "A maintainability issue that doesn't necessarily break the code but makes it harder to read or maintain",
      "A security vulnerability",
      "A virus in the source code"
    ],
    answer: 1,
    explanation: "Code smells indicate deeper problems in the design or structure that can lead to bugs or high technical debt over time.",
    hint: "It 'smells' like bad design."
  },
  {
    id: 69,
    difficulty: "hard",
    category: "Web Services (REST)",
    question: "What is the difference between 'PUT' and 'PATCH' in REST APIs?",
    options: [
      "There is no difference",
      "PUT replaces the entire resource; PATCH performs a partial update",
      "PUT is for creation; PATCH is for deletion",
      "PATCH is faster than PUT"
    ],
    answer: 1,
    explanation: "PUT is idempotent and expects the full object. PATCH is used to update only specific fields (e.g., just changing the 'Email' field).",
    hint: "Full replacement vs. partial update."
  },
  {
    id: 70,
    difficulty: "medium",
    category: "C# Language",
    question: "What is an 'Extension Method' in C#?",
    options: [
      "A method that runs in a separate process",
      "A static method that can be called as if it were an instance method of an existing type",
      "A method that extends the timeout of a request",
      "A method that can only be used in inheritance"
    ],
    answer: 1,
    explanation: "Extension methods allow you to 'add' methods to existing types (like string or int) without modifying the original source code.",
    hint: "Defined in a static class with the 'this' keyword."
  },
  {
    id: 71,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Distributed Tracing' in a microservices architecture?",
    options: [
      "Drawing a diagram of the services",
      "Tracking a single request as it moves through various services using a Correlation ID",
      "Recording the GPS location of the servers",
      "A way to debug C# code locally"
    ],
    answer: 1,
    explanation: "Tools like Jaeger or OpenTelemetry allow developers to see the latency and path of a request across service boundaries.",
    hint: "Following the path of a request."
  },
  {
    id: 72,
    difficulty: "medium",
    category: "Swagger",
    question: "Which C# attribute can be used to provide a description for an API endpoint in the Swagger UI?",
    options: [
      "[Description]",
      "[Summary]",
      "[SwaggerOperation]",
      "[Help]"
    ],
    answer: 2,
    explanation: "While XML comments are standard, the [SwaggerOperation] attribute (from Swashbuckle.AspNetCore.Annotations) allows detailed metadata like Summary and Description.",
    hint: "Part of the Swashbuckle Annotations package."
  },
  {
    id: 73,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the 'Ref struct' introduced in modern C#?",
    options: [
      "A struct that can only live on the stack and cannot be boxed",
      "A struct that is passed by reference automatically",
      "A struct used for database references",
      "A struct that can be converted to a class"
    ],
    answer: 0,
    explanation: "Ref structs (like Span<T>) are stack-only types. They cannot be members of a class, boxed, or used in async methods because they must stay on the stack for memory safety.",
    hint: "Stack-bound for high performance."
  },
  {
    id: 74,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is the purpose of the 'appsettings.json' file?",
    options: [
      "To store C# code",
      "To store application configuration settings like connection strings and logging levels",
      "To store user passwords",
      "To manage the project's NuGet packages"
    ],
    answer: 1,
    explanation: "It is a JSON file used to store hierarchical configuration that can be accessed via the IConfiguration interface.",
    hint: "Standard config file."
  },
  {
    id: 75,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What is a 'Memory Leak' in a .NET application?",
    options: [
      "Data being stolen by a hacker",
      "Objects being kept in memory by a root (like a static list) even when they are no longer needed, preventing GC from collecting them",
      "The hard drive running out of space",
      "The RAM being too slow"
    ],
    answer: 1,
    explanation: "Even with Garbage Collection, if your code maintains a reference (root) to an object, the GC cannot reclaim that memory.",
    hint: "References preventing cleanup."
  },
  {
    id: 76,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "How do you define a 'One-to-Many' relationship in EF Core code-first?",
    options: [
      "By using a List<T> or ICollection<T> navigation property on one side and a single reference on the other",
      "By naming both tables the same",
      "By using the [ManyToOne] attribute",
      "EF Core does not support relationships"
    ],
    answer: 0,
    explanation: "Typically, the 'Parent' has a collection of 'Children', and the 'Child' has a reference back to the 'Parent'.",
    hint: "Collection on one side, single object on the other."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "Security (OAuth)",
    question: "What is a 'Proof Key for Code Exchange' (PKCE)?",
    options: [
      "A password for the database",
      "An extension to OAuth 2.0 to prevent authorization code injection attacks, primarily for public clients like SPAs or Mobile apps",
      "A physical security key (YubiKey)",
      "A way to encrypt JWTs"
    ],
    answer: 1,
    explanation: "PKCE adds a dynamically created secret (code_verifier) to the exchange process, ensuring the client that requested the code is the same one that swaps it for a token.",
    hint: "Secures the Authorization Code flow for public apps."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "Web Services (REST)",
    question: "What does the 'Accept' HTTP header tell the server?",
    options: [
      "The language the user speaks",
      "The media types (e.g., application/json, application/xml) that the client is willing to receive in the response",
      "The user's password",
      "The server's IP address"
    ],
    answer: 1,
    explanation: "The 'Accept' header allows for Content Negotiation, where a client can request a specific format from the API.",
    hint: "Format the client wants to see."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "C# Language",
    question: "In C#, what is the difference between 'Task.Run' and 'Task.Factory.StartNew'?",
    options: [
      "They are identical",
      "Task.Run is a shorthand for StartNew with default parameters and handles async/await inside better",
      "StartNew is only for old versions of .NET",
      "Task.Run is only for console apps"
    ],
    answer: 1,
    explanation: "Task.Run is the modern standard for offloading work to the thread pool. StartNew is more complex and can lead to issues if not used with 'Unwrap()' when calling async methods.",
    hint: "Task.Run is the safer, recommended default."
  },
  {
    id: 80,
    difficulty: "medium",
    category: "Microservices",
    question: "What is a 'Dead Letter Queue' (DLQ) in message-based systems like RabbitMQ or Azure Service Bus?",
    options: [
      "A queue that deletes all messages",
      "A separate queue where messages that cannot be processed successfully after multiple attempts are sent for investigation",
      "A queue for users who have left the company",
      "A way to speed up the network"
    ],
    answer: 1,
    explanation: "DLQs allow developers to isolate and debug failing messages without blocking the main processing flow.",
    hint: "Storage for failed messages."
  },
  {
    id: 81,
    difficulty: "hard",
    category: "Optimizations",
    question: "Why should you prefer 'StringValues' over 'string' when reading HTTP headers in high-performance ASP.NET Core apps?",
    options: [
      "StringValues is easier to read",
      "StringValues can represent zero, one, or many strings without extra allocation, reducing memory pressure",
      "string is deprecated",
      "StringValues is always encrypted"
    ],
    answer: 1,
    explanation: "Headers can have multiple values. StringValues is a struct optimized to handle these cases with minimal heap allocation.",
    hint: "Optimized for 0, 1, or many strings."
  },
  {
    id: 82,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the result of '10 / 3' in C# if both numbers are integers?",
    options: ["3.33", "3", "4", "Error"],
    answer: 1,
    explanation: "Integer division in C# truncates the decimal. To get a float, at least one number must be a float (e.g., 10.0 / 3).",
    hint: "Integers don't have decimals."
  },
  {
    id: 83,
    difficulty: "hard",
    category: "Microservices",
    question: "Which pattern is used to aggregate data from multiple microservices to provide a unified view for the UI?",
    options: [
      "API Gateway / Backend for Frontend (BFF)",
      "Database Per Service",
      "Circuit Breaker",
      "Singleton"
    ],
    answer: 0,
    explanation: "An API Gateway or BFF can call multiple services in parallel and combine their data into a single response for the client.",
    hint: "A 'Frontend' for your 'Backends'."
  },
  {
    id: 84,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Kestrel'?",
    options: [
      "A C# compiler",
      "The cross-platform, high-performance web server for ASP.NET Core",
      "A database engine",
      "A logging library"
    ],
    answer: 1,
    explanation: "Kestrel is the default web server used by ASP.NET Core to handle HTTP requests.",
    hint: "The .NET default web server."
  },
  {
    id: 85,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is 'Optimistic Concurrency' in EF Core?",
    options: [
      "Hoping that no two people edit the same row",
      "A strategy where the database checks if a row has changed (usually via a RowVersion/Timestamp) before allowing an update",
      "Ignoring all database errors",
      "Locking the entire table during an update"
    ],
    answer: 1,
    explanation: "Optimistic concurrency assumes conflicts are rare. It uses a version token to ensure that a user doesn't overwrite someone else's changes without knowing.",
    hint: "Uses a RowVersion or Timestamp."
  },
  {
    id: 86,
    difficulty: "medium",
    category: "Security (JWT)",
    question: "What does it mean if a JWT is 'Expired'?",
    options: [
      "The token is too big",
      "The 'exp' claim's timestamp is in the past, and the server should no longer accept the token",
      "The user has changed their password",
      "The server has been restarted"
    ],
    answer: 1,
    explanation: "Expiration is a core security feature of JWTs. Once the 'exp' time passes, the token is invalid.",
    hint: "Past its 'Best Before' date."
  },
  {
    id: 87,
    difficulty: "hard",
    category: "C# Language",
    question: "What is a 'Closure' in C#?",
    options: [
      "Closing a file stream",
      "A lambda expression or anonymous method that 'captures' variables from its surrounding scope",
      "The end of a program",
      "A private class"
    ],
    answer: 1,
    explanation: "When a lambda uses a variable defined outside of it, the compiler creates a hidden class to hold that variable so it stays alive as long as the lambda does.",
    hint: "Capturing local variables in a lambda."
  },
  {
    id: 88,
    difficulty: "medium",
    category: "Swagger",
    question: "In Swagger UI, what is the 'Try it out' button used for?",
    options: [
      "To download the source code",
      "To execute a live API call directly from the browser to the server",
      "To run unit tests",
      "To format the JSON"
    ],
    answer: 1,
    explanation: "Swagger UI allows interactive testing of the API endpoints without needing tools like Postman.",
    hint: "Interactive API testing."
  },
  {
    id: 89,
    difficulty: "hard",
    category: "Performance",
    question: "How does 'ArrayPool<T>' help improve performance in .NET applications?",
    options: [
      "It makes arrays larger",
      "It reduces Garbage Collection overhead by renting and returning arrays instead of allocating new ones",
      "It sorts arrays automatically",
      "It stores arrays on the hard drive"
    ],
    answer: 1,
    explanation: "For short-lived, large buffers, renting from ArrayPool.Shared prevents frequent Large Object Heap (LOH) allocations.",
    hint: "Renting buffers instead of buying (allocating) them."
  },
  {
    id: 90,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the primary benefit of 'Containerization' (Docker) for .NET Developers?",
    options: [
      "It makes the code run faster",
      "It ensures 'It works on my machine' works everywhere by bundling dependencies and the OS environment",
      "It replaces the need for C#",
      "It makes the UI look better"
    ],
    answer: 1,
    explanation: "Docker containers provide consistency across dev, staging, and production environments.",
    hint: "Environment consistency."
  },
  {
    id: 91,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What is the '502 Bad Gateway' error usually indicating in an ASP.NET Core deployment?",
    options: [
      "The user's password is wrong",
      "A proxy server (like Nginx or IIS) received an invalid response or cannot connect to the backend Kestrel service",
      "The database query is too slow",
      "The file was not found"
    ],
    answer: 1,
    explanation: "502 means the edge server acting as a gateway couldn't get a valid response from the actual application server.",
    hint: "Gateway communication failure."
  },
  {
    id: 92,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the purpose of the 'finally' block in a try-catch-finally statement?",
    options: [
      "To execute code only if an exception occurred",
      "To execute code regardless of whether an exception was thrown or not",
      "To stop the program",
      "To log errors to the database"
    ],
    answer: 1,
    explanation: "Finally is typically used for resource cleanup (like closing database connections or file streams) that must happen no matter what.",
    hint: "The 'always runs' block."
  },
  {
    id: 93,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "Which EF Core feature allows you to map a single C# entity to multiple database tables?",
    options: [
      "Table Splitting",
      "Entity Splitting",
      "Database Sharding",
      "Table-per-Hierarchy (TPH)"
    ],
    answer: 1,
    explanation: "Entity splitting allows you to spread the properties of a single entity across two or more tables that share the same primary key.",
    hint: "Splitting one entity into many tables."
  },
  {
    id: 94,
    difficulty: "medium",
    category: "Security (JWT)",
    question: "Why should you never store sensitive data like passwords in a JWT payload?",
    options: [
      "Because it makes the token too large",
      "Because the payload is only Base64 encoded and can be easily read by anyone who has the token",
      "Because JWTs are only for numbers",
      "Because the database cannot read it"
    ],
    answer: 1,
    explanation: "JWTs are signed to prevent tampering, but the payload is NOT encrypted by default. Anyone can decode the Base64 string.",
    hint: "Base64 is not encryption."
  },
  {
    id: 95,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'SIMD' (Single Instruction, Multiple Data) in .NET?",
    options: [
      "A way to run many apps at once",
      "A hardware feature that allows performing the same operation on multiple data points simultaneously (Vectorization)",
      "A type of database index",
      "A multi-threading library"
    ],
    answer: 1,
    explanation: "Modern .NET provides Vector<T> types that allow you to use CPU-level parallelization for mathematical operations.",
    hint: "CPU-level vectorization."
  },
  {
    id: 96,
    difficulty: "medium",
    category: "Validation",
    question: "What is the purpose of 'Fluent API' in EF Core?",
    options: [
      "To write C# faster",
      "To configure the model and its mappings (like primary keys and relationships) using code instead of attributes",
      "To translate the code into French",
      "To validate user input in the UI"
    ],
    answer: 1,
    explanation: "The Fluent API in OnModelCreating provides more flexibility and control over database mapping than Data Annotation attributes.",
    hint: "Model configuration in code."
  },
  {
    id: 97,
    difficulty: "hard",
    category: "Microservices",
    question: "What is an 'Idempotent Consumer' in messaging systems?",
    options: [
      "A service that consumes only one message per day",
      "A consumer that can safely process the same message multiple times without changing the system state beyond the first time",
      "A service that never fails",
      "A way to delete duplicate messages"
    ],
    answer: 1,
    explanation: "Because networks fail, a message might be delivered twice. An idempotent consumer checks if it has already processed that specific MessageId.",
    hint: "Safely handling duplicate messages."
  },
  {
    id: 98,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the difference between 'const' and 'readonly' in C#?",
    options: [
      "They are the same",
      "const is a compile-time constant; readonly is a run-time constant",
      "readonly is faster",
      "const can be changed later"
    ],
    answer: 1,
    explanation: "const must be assigned at declaration and its value is 'baked' into the code. readonly can be assigned in a constructor and its value can vary per instance.",
    hint: "Compile-time vs. Runtime initialization."
  },
  {
    id: 99,
    difficulty: "hard",
    category: "Quality Gate",
    question: "Which SonarQube category does a 'Hardcoded IP Address' usually fall into?",
    options: [
      "Code Smell",
      "Vulnerability",
      "Security Hotspot",
      "Bug"
    ],
    answer: 2,
    explanation: "Hardcoded IPs are Security Hotspots because they might be fine during development but pose a security or configuration risk in production.",
    hint: "Potential security risk that needs review."
  },
  {
    id: 100,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Dependency Injection' (DI) commonly used for in .NET?",
    options: [
      "To inject viruses into the app",
      "To achieve Inversion of Control (IoC) between classes and their dependencies",
      "To speed up the internet",
      "To connect to the database manually"
    ],
    answer: 1,
    explanation: "DI allows you to write decoupled code by passing dependencies (like services or repositories) into constructors rather than creating them inside the class.",
    hint: "Passing dependencies via constructors."
  },
  /* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 3/7)
   Topics: Web API, Security, Messaging, CI/CD, Quality
   ====================================================== */
  {
    id: 101,
    difficulty: "medium",
    category: "Web API",
    question: "Which approach is considered the most standard for versioning a REST API in ASP.NET Core without changing the URL structure?",
    options: [
      "URL Path Versioning (/v1/products)",
      "Query String Versioning (?api-version=1.0)",
      "Header Versioning (X-Api-Version: 1.0)",
      "Media Type Versioning (Accept header)"
    ],
    answer: 2,
    explanation: "Header versioning keeps URLs clean and is often preferred in enterprise environments to avoid breaking bookmarks or hardcoded paths.",
    hint: "Uses a custom HTTP header."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "Web API",
    question: "In ASP.NET Core, what is 'Content Negotiation'?",
    options: [
      "The process of deciding the price of the software",
      "The mechanism where the server selects the best representation for a response based on the client's 'Accept' header",
      "A way to encrypt the request body",
      "The process of merging two different databases"
    ],
    answer: 1,
    explanation: "If a client sends 'Accept: application/xml', ASP.NET Core will attempt to return XML instead of the default JSON if the XML formatter is configured.",
    hint: "Server selects format based on client preference."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "Security",
    question: "What is the difference between '401 Unauthorized' and '403 Forbidden'?",
    options: [
      "They are identical",
      "401 means 'I don't know who you are'; 403 means 'I know who you are, but you don't have permission'",
      "401 is for databases; 403 is for files",
      "403 is for expired tokens; 401 is for wrong passwords"
    ],
    answer: 1,
    explanation: "401 indicates authentication failure (missing or invalid token). 403 indicates authorization failure (the user is logged in but lacks the required role/claim).",
    hint: "Identity vs. Permission."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "Security",
    question: "In ASP.NET Core Identity, what is a 'Claim'?",
    options: [
      "A bug report from a user",
      "A piece of information about the user (e.g., Email, DateOfBirth, Role) issued by a trusted authority",
      "A request for a refund",
      "A database primary key"
    ],
    answer: 1,
    explanation: "Claims are key-value pairs that describe the user. For example, a claim could be 'Department: Sales'. Policies can then be built around these claims.",
    hint: "An assertion about the user's identity."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "Troubleshooting",
    question: "Which tool is built into .NET to help diagnose performance issues by collecting runtime events like GC, CPU, and Exceptions without a debugger?",
    options: ["Notepad", "dotnet-counters", "Postman", "Calculator"],
    answer: 1,
    explanation: "'dotnet-counters' is a performance monitoring tool for ad-hoc health monitoring and first-level performance investigation.",
    hint: "Command-line tool for runtime metrics."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "Performance",
    question: "Why should you use 'IHttpClientFactory' instead of instantiating 'HttpClient' with the 'new' keyword in a loop?",
    options: [
      "It is faster to type",
      "To prevent 'Socket Exhaustion' by managing the underlying HttpClientHandler lifetimes",
      "Because 'new HttpClient()' does not work in .NET Core",
      "To encrypt the traffic automatically"
    ],
    answer: 1,
    explanation: "While HttpClient is disposable, disposing it doesn't immediately release the socket. IHttpClientFactory pools handlers to avoid running out of available network sockets.",
    hint: "Manages the lifetime of the underlying handler."
  },
  {
    id: 107,
    difficulty: "medium",
    category: "Microservices",
    question: "Which library is the industry standard for implementing the 'Circuit Breaker' and 'Retry' patterns in .NET?",
    options: ["AutoMapper", "Polly", "Newtonsoft", "SignalR"],
    answer: 1,
    explanation: "Polly is a .NET resilience and transient-fault-handling library that allows developers to express policies such as Retry, Circuit Breaker, and Timeout.",
    hint: "Named after a parrot that repeats things."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "Messaging",
    question: "What is the 'Transactional Outbox Pattern' used for in Microservices?",
    options: [
      "To delete emails",
      "To ensure that a database update and a message publication happen atomically (either both succeed or both fail)",
      "To speed up the internet",
      "To archive old records"
    ],
    answer: 1,
    explanation: "It involves saving the message to an 'Outbox' table in the same transaction as the business data, then a separate process sends it to the message broker.",
    hint: "Solves the 'Dual Write' problem."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "In EF Core, what is the 'Shadow State'?",
    options: [
      "A database that is offline",
      "Data stored in the ChangeTracker that doesn't exist in the C# entity class",
      "A deleted record",
      "The dark mode for Visual Studio"
    ],
    answer: 1,
    explanation: "Shadow properties are part of the EF model but not the C# class. EF maintains their state in the 'ChangeTracker' while the entity is being tracked.",
    hint: "Properties defined only in the model."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "Quality Gate",
    question: "In SonarQube, what is the 'Quality Gate' status 'Failed' typically indicating?",
    options: [
      "The code did not compile",
      "The code failed to meet specific thresholds (e.g., Coverage < 80% or too many Critical bugs)",
      "The server is down",
      "The license has expired"
    ],
    answer: 1,
    explanation: "A Quality Gate is a set of boolean conditions that must be met before a project can be considered 'releasable'.",
    hint: "Thresholds for code health."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'Null-forgiving operator' (!) in C# 8.0+?",
    options: [
      "It makes a variable null",
      "It tells the compiler that an expression is definitely not null, suppressing nullability warnings",
      "It deletes a variable",
      "It checks if a variable is null"
    ],
    answer: 1,
    explanation: "The '!' operator (bang) tells the compiler: 'I know this might look null, but trust me, it's not at this point.'",
    hint: "Suppresses warnings about nulls."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "Optimizations",
    question: "When should you use 'StringBuilder' over string concatenation (+)?",
    options: [
      "Always",
      "When you are performing a large number of modifications to a string in a loop",
      "Only for database names",
      "When you want to save the string to a file"
    ],
    answer: 1,
    explanation: "Strings are immutable. Every 'plus' creates a new string object. StringBuilder uses a buffer and is much more efficient for intensive building.",
    hint: "Used for intensive string manipulation."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "JWT",
    question: "What is the 'nbf' claim in a JWT?",
    options: [
      "No Bad Files",
      "Not Before (The time before which the token must NOT be accepted)",
      "New Binary Format",
      "Next Backup File"
    ],
    answer: 1,
    explanation: "The 'nbf' (not before) claim identifies the time before which the JWT must not be accepted for processing.",
    hint: "The opposite of expiration."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Sidecar Pattern' in container orchestration?",
    options: [
      "A container that runs on a separate server",
      "A helper container that runs in the same Pod/Instance as the main application to provide supporting features (like logging or a proxy)",
      "A way to share a database",
      "A specific type of C# class"
    ],
    answer: 1,
    explanation: "The sidecar extends the functionality of the main container without the main container needing to know about it (e.g., Envoy proxy in a service mesh).",
    hint: "A container 'attached' to the main one."
  },
  {
    id: 115,
    difficulty: "medium",
    category: "Swagger",
    question: "How do you enable XML comments to appear as descriptions in Swagger UI?",
    options: [
      "It happens automatically",
      "By configuring 'IncludeXmlComments' in the SwaggerGen options in Program.cs",
      "By renaming the file to Swagger.xml",
      "By using the [Description] attribute"
    ],
    answer: 1,
    explanation: "You must tell Swashbuckle to read the generated XML documentation file from the build output to populate descriptions.",
    hint: "Needs configuration in SwaggerGen."
  },
  {
    id: 116,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What is 'Thread Starvation' in an ASP.NET Core application?",
    options: [
      "When the CPU is too slow",
      "A condition where all ThreadPool threads are blocked, usually by sync-over-async code, preventing new requests from being handled",
      "When the server runs out of RAM",
      "A bug in the C# compiler"
    ],
    answer: 1,
    explanation: "If you call '.Result' or '.Wait()' on an async task, you block a thread. If done enough times, the ThreadPool cannot create new threads fast enough to handle load.",
    hint: "Usually caused by sync-over-async logic."
  },
  {
    id: 117,
    difficulty: "medium",
    category: "C# Language",
    question: "What does the 'params' keyword do in a method signature?",
    options: [
      "It makes the parameters private",
      "It allows a method to accept a variable number of arguments of a specified type",
      "It encrypts the parameters",
      "It makes parameters optional with a default value of null"
    ],
    answer: 1,
    explanation: "Example: 'void Log(params string[] messages)'. You can call it as Log('A'), Log('A', 'B'), etc.",
    hint: "Variable number of arguments."
  },
  {
    id: 118,
    difficulty: "hard",
    category: "Security (OAuth)",
    question: "What is an 'Identity Token' in OpenID Connect?",
    options: [
      "A token used to access the database",
      "A JWT that contains information about the authenticated user to be consumed by the client application",
      "A password reset link",
      "A token that is only used by the server"
    ],
    answer: 1,
    explanation: "While the Access Token is for the API, the ID Token is for the client (UI) to know who the user is (name, email, etc.).",
    hint: "Information for the Client application."
  },
  {
    id: 119,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "What is 'Lazy Loading' in EF Core?",
    options: [
      "A developer who doesn't write code",
      "Loading related data only at the moment it is accessed in code",
      "Loading all data at application startup",
      "A bug that makes queries slow"
    ],
    answer: 1,
    explanation: "Lazy loading (via proxies) delays the loading of related entities until the navigation property is accessed. It can lead to the N+1 problem.",
    hint: "On-demand data loading."
  },
  {
    id: 120,
    difficulty: "hard",
    category: "Messaging",
    question: "In RabbitMQ, what is an 'Exchange'?",
    options: [
      "A place where developers trade code",
      "The routing engine that receives messages and decides which queues they should go to",
      "A type of database table",
      "The part of the code that handles exceptions"
    ],
    answer: 1,
    explanation: "Producers don't send messages directly to queues. They send them to exchanges, which route them based on 'Binding Keys' and 'Routing Keys'.",
    hint: "The router for messages."
  },
  {
    id: 121,
    difficulty: "medium",
    category: "Validation",
    question: "Which attribute is used to validate that a property matches a specific Regular Expression?",
    options: ["[Regex]", "[RegularExpression]", "[Match]", "[Pattern]"],
    answer: 1,
    explanation: "The [RegularExpression] attribute allows you to provide a regex string and an error message for validation.",
    hint: "Standard Data Annotation attribute."
  },
  {
    id: 122,
    difficulty: "hard",
    category: "Quality Gate",
    question: "What is 'Technical Debt' in the context of SonarQube?",
    options: [
      "Money owed to Microsoft",
      "The estimated effort required to fix all Code Smells and maintainability issues in the codebase",
      "The cost of the servers",
      "The number of users on the system"
    ],
    answer: 1,
    explanation: "SonarQube calculates 'Debt' in minutes/hours/days based on the complexity and number of issues found in the code.",
    hint: "Cost of fixing maintainability issues."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "C# Language",
    question: "What is an 'Anonymous Type' in C#?",
    options: [
      "A type that has no name",
      "A type created on the fly using 'new { ... }' primarily for local read-only data storage",
      "A type used for hackers",
      "A type that cannot be seen by the debugger"
    ],
    answer: 1,
    explanation: "Anonymous types provide a convenient way to encapsulate a set of read-only properties into a single object without having to explicitly define a class.",
    hint: "Uses 'new { }' syntax."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Response Caching' middleware in ASP.NET Core?",
    options: [
      "Caching database results",
      "Middleware that determines when responses are cacheable and stores them to serve subsequent requests from the cache",
      "Saving logs to a file",
      "Minifying JavaScript"
    ],
    answer: 1,
    explanation: "Response caching adds headers like 'Cache-Control' and can store responses in memory to avoid re-executing controller logic.",
    hint: "Caching at the HTTP level."
  },
  {
    id: 125,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the 'Backends for Frontends' (BFF) pattern?",
    options: [
      "A database for every developer",
      "Creating a separate gateway/API service tailored specifically for a particular frontend (e.g., Mobile vs Web)",
      "Having two backup servers for every main server",
      "A type of unit test"
    ],
    answer: 1,
    explanation: "BFF allows you to optimize the API response size and structure specifically for the needs of a single client type.",
    hint: "Customized APIs for specific UIs."
  },
  {
    id: 126,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the difference between 'as' and a direct cast (Type)?",
    options: [
      "Direct cast is safer",
      "The 'as' operator returns null on failure; a direct cast throws an InvalidCastException",
      "There is no difference",
      "Direct cast can only be used with numbers"
    ],
    answer: 1,
    explanation: "Use 'as' when you are not sure if the type matches and want to handle the null. Use a cast when you are certain and want the app to crash/fail if it's wrong.",
    hint: "Null return vs. Exception throwing."
  },
  {
    id: 127,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Distributed Caching'?",
    options: [
      "Caching data on every user's computer",
      "A cache shared by multiple app servers (e.g., Redis or SQL Server), ensuring data is consistent across a web farm",
      "Saving data to a USB drive",
      "Using the local RAM for all users"
    ],
    answer: 1,
    explanation: "In a multi-server environment, local memory cache (IMemoryCache) is not shared. IDistributedCache allows all servers to see the same cached data.",
    hint: "Shared cache for multiple servers."
  },
  {
    id: 128,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is a 'Value Converter' in EF Core?",
    options: [
      "A tool to convert USD to EUR",
      "A feature that allows you to transform data when it is read from or written to the database (e.g., Enums to Strings)",
      "A way to change an integer to a float",
      "A database migration tool"
    ],
    answer: 1,
    explanation: "Value converters let you define how a property should be stored (e.g., storing a C# Enum as a string in the DB but treating it as an Enum in code).",
    hint: "Transforming data during DB I/O."
  },
  {
    id: 129,
    difficulty: "medium",
    category: "Web Services (SOAP)",
    question: "In SOAP services, what is the 'Envelope'?",
    options: [
      "The physical paper the code is printed on",
      "The root element of a SOAP message that defines the XML document as a SOAP message",
      "A password protected file",
      "The server's IP address"
    ],
    answer: 1,
    explanation: "Every SOAP message is contained within an Envelope, which consists of an optional Header and a mandatory Body.",
    hint: "The root XML element in SOAP."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Command Query Responsibility Segregation' (CQRS)?",
    options: [
      "Dividing the team into two groups",
      "A pattern that separates read operations (queries) from write operations (commands) to allow independent scaling and optimization",
      "A way to write SQL queries faster",
      "A security protocol for microservices"
    ],
    answer: 1,
    explanation: "CQRS often uses different data models or even different databases for reading and writing to handle high-scale requirements.",
    hint: "Separate models for Read and Write."
  },
  {
    id: 131,
    difficulty: "medium",
    category: "Troubleshooting",
    question: "Which HTTP status code is returned by default if a model validation fails in an [ApiController] in ASP.NET Core?",
    options: ["200 OK", "400 Bad Request", "404 Not Found", "500 Internal Server Error"],
    answer: 1,
    explanation: "The [ApiController] attribute automatically triggers a 400 Bad Request response with details if ModelState is invalid.",
    hint: "Standard error for invalid input."
  },
  {
    id: 132,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Covariance' in C# generics?",
    options: [
      "The ability to use a more derived type than originally specified (e.g., IEnumerable<string> as IEnumerable<object>)",
      "Changing a variable's type at runtime",
      "A type of virus",
      "Storing data in a static variable"
    ],
    answer: 0,
    explanation: "Covariance allows you to treat a collection of a specific type as a collection of a more general type. It is enabled using the 'out' keyword in interfaces.",
    hint: "Using 'out' in generic interfaces."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'JIT' (Just-In-Time) compilation in .NET?",
    options: [
      "Compiling the code only when the developer clicks 'Save'",
      "The process where the .NET runtime compiles IL (Intermediate Language) into machine code at runtime",
      "Compiling the code before it is even written",
      "A way to speed up the hard drive"
    ],
    answer: 1,
    explanation: "When a method is called for the first time, the JIT compiler converts the IL into code the specific CPU can understand.",
    hint: "Runtime compilation of IL."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "Microservices",
    question: "In a microservices environment, what is 'Service Mesh' (e.g., Istio or Linkerd)?",
    options: [
      "A faster type of Wi-Fi",
      "An infrastructure layer that handles service-to-service communication, providing security, observability, and reliability",
      "A collection of database tables",
      "A way to organize C# namespaces"
    ],
    answer: 1,
    explanation: "Service Mesh typically uses sidecar proxies to manage traffic, retries, and encryption between microservices automatically.",
    hint: "Infrastructure for service communication."
  },
  {
    id: 135,
    difficulty: "medium",
    category: "Security (JWT)",
    question: "What is the purpose of the 'aud' (Audience) claim in a JWT?",
    options: [
      "To list who is listening to the token",
      "To identify the intended recipients (APIs) of the token",
      "To store the user's name",
      "To check if the user has a microphone"
    ],
    answer: 1,
    explanation: "The 'aud' claim ensures that a token issued for 'API-A' cannot be maliciously used to access 'API-B'.",
    hint: "Intended recipient of the token."
  },
  {
    id: 136,
    difficulty: "hard",
    category: "Performance",
    question: "What does the 'GCSettings.IsServerGC' property indicate?",
    options: [
      "Whether the computer is a server",
      "Whether the runtime is using 'Server' Garbage Collection (parallel/multi-core) vs 'Workstation' GC",
      "Whether the database is connected",
      "Whether the app is running in the cloud"
    ],
    answer: 1,
    explanation: "Server GC is designed for high-throughput server applications and uses a separate heap and GC thread for each logical processor.",
    hint: "Determines the GC flavor being used."
  },
  {
    id: 137,
    difficulty: "medium",
    category: "Web Services (REST)",
    question: "What is 'HATEOAS' in the context of REST maturity?",
    options: [
      "A security protocol",
      "Hypermedia as the Engine of Application State (Providing links in the response to guide the client to next possible actions)",
      "A way to compress JSON",
      "A type of SQL index"
    ],
    answer: 1,
    explanation: "A HATEOAS-compliant API returns not just data, but links (like 'self', 'edit', 'delete') that tell the client what it can do next.",
    hint: "Providing links in the response."
  },
  {
    id: 138,
    difficulty: "hard",
    category: "C# Language",
    question: "What is a 'Native AOT' (Ahead-of-Time) compilation in .NET 7/8?",
    options: [
      "Compiling C# to Java",
      "Compiling the application into a standalone native executable that doesn't require the .NET runtime installed",
      "A way to run code on a GPU",
      "A new type of async method"
    ],
    answer: 1,
    explanation: "Native AOT improves startup time and reduces memory footprint, which is ideal for cloud-native and serverless environments.",
    hint: "Runtime-free native binaries."
  },
  {
    id: 139,
    difficulty: "medium",
    category: "Optimizations",
    question: "Why should you use 'Enumerables.Any()' instead of 'Enumerables.Count() > 0' to check if a collection has items?",
    options: [
      "It is shorter to write",
      "Any() can return true as soon as it finds one item; Count() must iterate through the entire collection",
      "Count() is deprecated",
      "Any() works only with strings"
    ],
    answer: 1,
    explanation: "For large or database-backed collections, Any() is much more efficient because it stops immediately upon finding the first match.",
    hint: "Stops after the first item."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "Microservices",
    question: "In the 'Database per Service' pattern, how do you handle joins between data owned by two different services?",
    options: [
      "Use a global SQL join across servers",
      "Perform the 'join' in the application layer (API Gateway) or use a materialized view updated via events",
      "Put both services in one database",
      "It is impossible to join data in microservices"
    ],
    answer: 1,
    explanation: "Direct database joins are prohibited in true microservices to maintain decoupling. Data must be aggregated via APIs or event-driven synchronization.",
    hint: "Aggregate data via API or Events."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Middleware' in the context of ASP.NET Core?",
    options: [
      "A piece of software between the hardware and the OS",
      "Software components assembled into an application pipeline to handle requests and responses",
      "The part of the code that writes SQL",
      "A tool to manage NuGet packages"
    ],
    answer: 1,
    explanation: "Middleware components are executed in order. Examples include Authentication, Routing, and Static Files middleware.",
    hint: "The request processing pipeline."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "If you see 'System.InvalidOperationException: A second operation started on this context before a previous operation completed', what is the cause?",
    options: [
      "The database is too slow",
      "Attempting to use the same 'DbContext' instance across multiple threads simultaneously (DbContext is NOT thread-safe)",
      "The computer has two CPUs",
      "You are trying to save two different files"
    ],
    answer: 1,
    explanation: "DbContext is designed for a single logical thread of execution. This error usually happens when forgetting to 'await' an async call or sharing a context in a multi-threaded loop.",
    hint: "Caused by non-thread-safe use of DbContext."
  },
  {
    id: 143,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'yield return' statement used for?",
    options: [
      "To stop a method",
      "To provide the next value in an iterator without building a full list in memory",
      "To return a value to the database",
      "To pause a thread"
    ],
    answer: 1,
    explanation: "It allows for 'Lazy Evaluation'. The code only executes far enough to return the next item when requested by a 'foreach' loop.",
    hint: "Enables lazy collection iteration."
  },
  {
    id: 144,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Strangler Fig' pattern?",
    options: [
      "A way to delete code",
      "A strategy for migrating a legacy monolithic system to microservices by gradually replacing functionality with new services",
      "A type of security encryption",
      "A way to compress Docker images"
    ],
    answer: 1,
    explanation: "New features are built as microservices. Legacy features are slowly moved over until the original monolith 'dies' (is strangled).",
    hint: "Gradual migration from Monolith to Microservices."
  },
  {
    id: 145,
    difficulty: "medium",
    category: "Swagger",
    question: "What is 'OpenAPI'?",
    options: [
      "An open source operating system",
      "The formal specification (formerly Swagger) for describing RESTful APIs",
      "A type of database",
      "A way to write C# in the browser"
    ],
    answer: 1,
    explanation: "OpenAPI is the specification; Swagger is the set of tools (UI, Editor, Codegen) that implement that specification.",
    hint: "The specification behind Swagger."
  },
  {
    id: 146,
    difficulty: "hard",
    category: "Security (OAuth)",
    question: "What is 'Token Introspection' in OAuth 2.0?",
    options: [
      "Looking at the token with a debugger",
      "An endpoint that allows an API to check if an opaque access token is still valid and what metadata it contains",
      "Changing the user's password",
      "Converting a token to XML"
    ],
    answer: 1,
    explanation: "If a token is 'opaque' (not a JWT), the API must call the Identity Server's introspection endpoint to verify it.",
    hint: "Checking token validity at the source."
  },
  {
    id: 147,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "What is 'TPH' (Table Per Hierarchy) in EF Core inheritance mapping?",
    options: [
      "One table for every user",
      "Mapping an entire inheritance hierarchy (Base and Derived classes) to a single database table using a 'Discriminator' column",
      "Deleting tables regularly",
      "A way to speed up SQL queries"
    ],
    answer: 1,
    explanation: "TPH is the default. It uses one table and a column (Discriminator) to identify if the row is a 'Manager', 'Employee', etc.",
    hint: "Single table for multiple inherited classes."
  },
  {
    id: 148,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'ArrayPool.Shared.Rent()' used for?",
    options: [
      "Paying for cloud storage",
      "Acquiring a buffer from a shared pool to reduce heap allocations and GC pressure for temporary arrays",
      "Renting a server",
      "A way to share arrays between users"
    ],
    answer: 1,
    explanation: "Instead of 'new byte[1024]', you rent one. This is crucial in high-performance apps to avoid frequent Small Object Heap allocations.",
    hint: "Renting temporary buffers."
  },
  {
    id: 149,
    difficulty: "medium",
    category: "Quality Gate",
    question: "In SonarQube, what is 'Cyclomatic Complexity'?",
    options: [
      "The number of lines of code",
      "A measure of the number of linearly independent paths through a program's source code (if/else, loops, etc.)",
      "The speed of the program",
      "The amount of RAM used"
    ],
    answer: 1,
    explanation: "Higher complexity means the code is harder to test and more likely to contain bugs.",
    hint: "Number of paths through the code."
  },
  {
    id: 150,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What does the 'ERR_CONNECTION_REFUSED' error usually mean for a local .NET API?",
    options: [
      "The user's password is wrong",
      "The application is not running or is not listening on the port the client is trying to reach",
      "The database has crashed",
      "The C# code is too complex"
    ],
    answer: 1,
    explanation: "This is a network-level error. Either the app isn't started, or it's listening on localhost:5001 while you are hitting localhost:5000.",
    hint: "Server not listening on that port."
  },
  /* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 4/7)
   Topics: Advanced Async, .NET 8, DDD, Containers, CI/CD
   ====================================================== */
  {
    id: 151,
    difficulty: "hard",
    category: "Asynchronous Programming",
    question: "What is the primary benefit of using 'IAsyncEnumerable<T>' over 'Task<IEnumerable<T>>'?",
    options: [
      "It is faster to compile",
      "It allows the consumer to process items as they are produced, rather than waiting for the entire collection to be ready",
      "It automatically encrypts the data",
      "It can only be used with databases"
    ],
    answer: 1,
    explanation: "IAsyncEnumerable enables 'streaming' results. The consumer can start processing the first item as soon as it's available while the producer is still working on the second item.",
    hint: "Think 'Streaming' vs 'Buffering'."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "C# Language",
    question: "In C# 12, what is a 'Primary Constructor' for a class?",
    options: [
      "A constructor that runs first",
      "A syntax that allows defining constructor parameters directly in the class declaration line",
      "A constructor that cannot be overloaded",
      "A special constructor for static classes"
    ],
    answer: 1,
    explanation: "Primary constructors allow you to define parameters for the whole class body, reducing boilerplate code for initializing fields and properties.",
    hint: "Parameters defined next to the class name."
  },
  {
    id: 153,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Circuit Breaker' state 'Half-Open'?",
    options: [
      "The service is half-broken",
      "A trial state where the system allows a limited number of requests to pass through to see if the underlying fault has been resolved",
      "The state when the user is logging in",
      "When the database is in read-only mode"
    ],
    answer: 1,
    explanation: "After a 'Open' period (timeout), the breaker enters 'Half-Open'. If these trial requests succeed, it closes; if they fail, it re-opens.",
    hint: "The testing phase after a failure."
  },
  {
    id: 154,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Which middleware should usually be placed FIRST in the request pipeline for security reasons?",
    options: [
      "UseRouting",
      "UseExceptionHandler",
      "UseAuthentication",
      "UseEndpoints"
    ],
    answer: 1,
    explanation: "UseExceptionHandler (or UseDeveloperExceptionPage) should be near the top so it can catch and handle exceptions thrown by any subsequent middleware.",
    hint: "The global try-catch for your app."
  },
  {
    id: 155,
    difficulty: "hard",
    category: "Performance",
    question: "What is the 'Large Object Heap' (LOH) threshold in .NET?",
    options: [
      "10 KB",
      "85,000 bytes",
      "1 MB",
      "10 MB"
    ],
    answer: 1,
    explanation: "Objects larger than 85,000 bytes are allocated on the LOH. The LOH is not compacted as frequently as other heaps, which can lead to memory fragmentation.",
    hint: "Approximately 85KB."
  },
  {
    id: 156,
    difficulty: "medium",
    category: "C# Language",
    question: "What does the 'is' operator do in modern C# pattern matching?",
    options: [
      "It creates a new object",
      "It checks if an object is compatible with a given type and can optionally bind it to a new variable",
      "It deletes an object",
      "It checks if two strings are equal"
    ],
    answer: 1,
    explanation: "Example: 'if (obj is string s)' checks the type and declares 's' in one step.",
    hint: "Type checking and pattern matching."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Event Sourcing'?",
    options: [
      "Searching for events on Google",
      "An architectural pattern where state changes are stored as a sequence of immutable events rather than just the current state",
      "A way to debug JavaScript",
      "A type of database index"
    ],
    answer: 1,
    explanation: "Instead of storing 'Balance = 100', you store 'Added 50', 'Added 50'. You can reconstruct any point in time by replaying events.",
    hint: "Storing the history of changes, not just the result."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "Architecture",
    question: "In Clean Architecture, which layer contains the Domain Entities and Business Logic?",
    options: [
      "Infrastructure",
      "Web API / Presentation",
      "Core / Domain",
      "Persistence"
    ],
    answer: 2,
    explanation: "The Core (Domain) layer is the center of the application and should have no dependencies on external layers like Infrastructure or UI.",
    hint: "The innermost circle."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "C# Language",
    question: "What are 'Source Generators' in .NET?",
    options: [
      "Tools that generate power for servers",
      "A C# compiler feature that lets developers inspect user code and generate new C# source files during compilation",
      "A way to generate random numbers",
      "A type of unit test"
    ],
    answer: 1,
    explanation: "Source Generators allow for compile-time metaprogramming, replacing things like Reflection to improve performance (e.g., System.Text.Json source generation).",
    hint: "Code that writes code during compilation."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "Security",
    question: "What is a 'Salt' in the context of password hashing?",
    options: [
      "A way to make the database taste better",
      "A unique, random string added to a password before hashing to protect against Rainbow Table attacks",
      "An encryption key",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "Even if two users have the same password, their hashes will be different because their salts are different.",
    hint: "Prevents pre-computed hash attacks."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "DevOps / Containers",
    question: "What is a 'Multi-stage build' in a Dockerfile for a .NET app?",
    options: [
      "Building on multiple computers",
      "Using one container image to compile the code and another smaller image (runtime only) to run it, reducing the final image size",
      "A build that has many steps",
      "A way to run Docker on Windows"
    ],
    answer: 1,
    explanation: "The first stage (SDK) builds the app, and the second stage (Runtime) only contains the binaries, keeping the production image lightweight and secure.",
    hint: "Build in SDK, run in Runtime."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "What is the purpose of 'EF Core Power Tools'?",
    options: [
      "To make the database run faster",
      "A Visual Studio extension providing a GUI for Reverse Engineering (Database First), model visualization, and migrations",
      "A way to pay for EF Core",
      "A type of C# compiler"
    ],
    answer: 1,
    explanation: "It is a popular community-driven tool that simplifies working with existing databases and EF Core models.",
    hint: "Visual tool for Reverse Engineering."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "ASP.NET Core",
    question: "What is 'Minimal APIs' introduced in .NET 6?",
    options: [
      "APIs with very little code",
      "An architecturally 'thin' way to create HTTP APIs with lambda expressions, bypassing the traditional Controller structure",
      "APIs that can only return integers",
      "APIs for small screens"
    ],
    answer: 1,
    explanation: "Minimal APIs reduce boilerplate by allowing you to define routes directly in Program.cs using 'app.MapGet(...)'.",
    hint: "No Controllers needed."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "SignalR",
    question: "In SignalR, what is a 'Hub'?",
    options: [
      "A physical network device",
      "A high-level pipeline that allows the client and server to call methods on each other",
      "A type of database",
      "A logging service"
    ],
    answer: 1,
    explanation: "The Hub is the central point in the ASP.NET Core application that handles real-time communication with connected clients.",
    hint: "The 'controller' for real-time web."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Static Virtual Members in Interfaces' (C# 11)?",
    options: [
      "A bug in the compiler",
      "A feature allowing interfaces to define static methods that must be implemented by the derived class, enabling generic math",
      "A way to make interfaces private",
      "Static variables that never change"
    ],
    answer: 1,
    explanation: "This allows for 'Generic Math' (e.g., adding two objects of type T where T is constrained to an interface defining a '+' operator).",
    hint: "Enables generic mathematical operators."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "Unit Testing",
    question: "In xUnit, what is the difference between '[Fact]' and '[Theory]'?",
    options: [
      "There is no difference",
      "Fact is for a single test; Theory is for data-driven tests with multiple inputs",
      "Fact is faster",
      "Theory is only for math tests"
    ],
    answer: 1,
    explanation: "Use [Fact] for a test that is always true. Use [Theory] with [InlineData] to run the same test logic with different parameters.",
    hint: "Single test vs Parameterized test."
  },
  {
    id: 167,
    difficulty: "hard",
    category: "Distributed Systems",
    question: "What is 'Distributed Locking' (e.g., via RedLock or SQL)?",
    options: [
      "Locking your computer remotely",
      "A mechanism to ensure that only one instance of a microservice processes a specific piece of data at a time across a cluster",
      "Encrypting all files on a network",
      "A way to stop users from logging in"
    ],
    answer: 1,
    explanation: "In a multi-node environment, standard C# 'lock' only works on one machine. Distributed locks use a shared store (like Redis) to coordinate across servers.",
    hint: "Cross-server synchronization."
  },
  {
    id: 168,
    difficulty: "medium",
    category: "C# Language",
    question: "What is a 'Record' in C# 9.0+?",
    options: [
      "A row in a database",
      "A reference type that provides built-in functionality for encapsulating data and features 'value-based equality'",
      "A way to record audio",
      "A list of objects"
    ],
    answer: 1,
    explanation: "Records are ideal for DTOs. Unlike classes, two different record instances with the same values are considered equal.",
    hint: "Value-based equality for reference types."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "Performance",
    question: "What is the purpose of the 'ValueTask<T>' type?",
    options: [
      "To store values in a task",
      "To reduce heap allocations in async methods where the result is often already available synchronously",
      "To make tasks faster on the database",
      "To replace 'int' in async methods"
    ],
    answer: 1,
    explanation: "Task is a class (heap allocation). ValueTask is a struct. If a method returns immediately (e.g., from a cache), ValueTask avoids the allocation cost.",
    hint: "Struct-based alternative to Task."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "Web API",
    question: "What is 'CORS' (Cross-Origin Resource Sharing)?",
    options: [
      "A way to share hard drives",
      "A security feature that allows/restricts web browsers from making requests to a different domain than the one that served the web page",
      "A type of database join",
      "A .NET compiler setting"
    ],
    answer: 1,
    explanation: "Without CORS configuration, a browser will block a JavaScript request from 'app.com' to 'api.com'.",
    hint: "Security for cross-domain requests."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is 'Interceptors' in EF Core?",
    options: [
      "A way to stop hackers",
      "Classes that allow you to hook into and modify EF Core operations, such as changing SQL before it is executed",
      "A type of database primary key",
      "A tool to delete old migrations"
    ],
    answer: 1,
    explanation: "Interceptors are useful for logging, auditing, or automatically setting 'LastUpdated' timestamps when saving changes.",
    hint: "Hooking into the EF execution pipeline."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Output Caching' in .NET 7+?",
    options: [
      "Caching the output of a printer",
      "A new middleware that caches the full HTTP response on the server to serve it to subsequent identical requests",
      "Saving logs to a file",
      "Minifying CSS"
    ],
    answer: 1,
    explanation: "Unlike Response Caching (which relies on headers), Output Caching gives the server full control over how and when the response is stored and invalidated.",
    hint: "Server-side HTTP response caching."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Backpressure' in a message-based system?",
    options: [
      "When the server is physically pushed",
      "A strategy where a consumer signals the producer to slow down because it cannot keep up with the volume of messages",
      "The weight of the database files",
      "A bug in the network cable"
    ],
    answer: 1,
    explanation: "Backpressure prevents the consumer from being overwhelmed and crashing when the producer is too fast.",
    hint: "Slowing down the producer."
  },
  {
    id: 174,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'using' declaration (not statement) introduced in C# 8?",
    options: [
      "A way to import namespaces",
      "A simplified syntax: 'using var x = ...' where the object is disposed at the end of the current scope/block",
      "A way to use a different database",
      "A tool for documentation"
    ],
    answer: 1,
    explanation: "It removes the need for curly braces. The variable is disposed when the method or block it was declared in finishes.",
    hint: "using without the curly braces."
  },
  {
    id: 175,
    difficulty: "hard",
    category: "Security (OAuth)",
    question: "What is 'Grant Type' in OAuth 2.0?",
    options: [
      "The amount of money granted to a developer",
      "The method/flow used by an application to acquire an access token (e.g., Client Credentials, Authorization Code)",
      "The type of database used",
      "A permission level in Windows"
    ],
    answer: 1,
    explanation: "Different grant types are used for different scenarios (e.g., a Mobile app uses Authorization Code + PKCE, while a Background Service uses Client Credentials).",
    hint: "The 'flow' to get a token."
  },
  {
    id: 176,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the purpose of the 'default' keyword when used with a type (e.g., default(int))?",
    options: [
      "To set a variable to 1",
      "To get the default value for that type (0 for numeric, null for reference types)",
      "To delete a variable",
      "To reset the computer"
    ],
    answer: 1,
    explanation: "It returns the 'zero' state for value types and 'null' for reference types. C# 7.1+ allows just using the word 'default' if the type is inferred.",
    hint: "The initial value of a variable."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'PGO' (Profile-Guided Optimization) in .NET?",
    options: [
      "A way to optimize user profiles",
      "A JIT compiler technique that uses information about the program's execution at runtime to generate even more optimized machine code",
      "A type of database indexing",
      "A tool to check for memory leaks"
    ],
    answer: 1,
    explanation: "Dynamic PGO (enabled by default in .NET 8) allows the JIT to re-compile 'hot' methods based on actual usage patterns.",
    hint: "Optimizing code based on runtime behavior."
  },
  {
    id: 178,
    difficulty: "medium",
    category: "Architecture",
    question: "What is the 'Repository Pattern'?",
    options: [
      "A place to store physical documents",
      "An abstraction layer between the domain/business logic and the data mapping layer (database)",
      "A way to backup the code",
      "A type of version control like Git"
    ],
    answer: 1,
    explanation: "It allows you to perform data operations without the business logic knowing about the specific database technology being used.",
    hint: "Abstraction for data access."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "C# Language",
    question: "What does the 'unmanaged' constraint do in C# generics?",
    options: [
      "Allows the code to be unmanaged by a manager",
      "Restricts a type parameter to be a type that doesn't contain reference type fields at any level (suitable for pointers)",
      "Makes the code run faster",
      "Allows the class to bypass Garbage Collection"
    ],
    answer: 1,
    explanation: "Unmanaged types include primitives (int, bool) and structs that contain only other unmanaged types. They can be used in low-level pointer logic.",
    hint: "Constraint for types safe for pointer operations."
  },
  {
    id: 180,
    difficulty: "medium",
    category: "DevOps",
    question: "What is a 'Deployment Slot' in Azure App Service?",
    options: [
      "A physical slot in a server rack",
      "A live app with its own hostname that allows you to swap with production for zero-downtime deployments",
      "A way to schedule backups",
      "A type of database"
    ],
    answer: 1,
    explanation: "Slots allow you to test a new version in 'staging' before swapping it into 'production' instantly.",
    hint: "Staging environments for swapping."
  },
  {
    id: 181,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Saga' Orchestration approach?",
    options: [
      "A long story about microservices",
      "A centralized service (Orchestrator) that tells each participant which transaction to perform next",
      "When every service talks to every other service",
      "A way to delete data"
    ],
    answer: 1,
    explanation: "In orchestration, one service acts as the 'brain'. In choreography (the alternative), services react to events from each other without a central controller.",
    hint: "Centralized control of a distributed transaction."
  },
  {
    id: 182,
    difficulty: "medium",
    category: "Quality Gate",
    question: "In SonarQube, what is 'Code Coverage'?",
    options: [
      "Covering the computer with a cloth",
      "The percentage of your source code that is executed when your automated test suite runs",
      "How many lines of code you have written",
      "The security of your code"
    ],
    answer: 1,
    explanation: "Higher coverage generally means fewer untested paths, though 100% coverage does not guarantee bug-free code.",
    hint: "How much of your code is tested."
  },
  {
    id: 183,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the 'interceptors' experimental feature in C# 12?",
    options: [
      "A way to catch hackers",
      "A feature allowing the compiler to substitute a call to a specific method with a call to a different method at compile time",
      "A new type of try-catch block",
      "A way to stop a program"
    ],
    answer: 1,
    explanation: "Used primarily by Source Generators to 'redirect' specific method calls to more optimized, generated versions of the code.",
    hint: "Redirecting method calls at compile-time."
  },
  {
    id: 184,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Hot Reload' in Visual Studio?",
    options: [
      "Heating up the CPU",
      "The ability to apply code changes to a running app without manually pausing or restarting it",
      "A way to reload the page in the browser",
      "A type of database migration"
    ],
    answer: 1,
    explanation: "Hot Reload significantly speeds up development by instantly applying changes to C#, CSS, and XAML while the app is running.",
    hint: "Code updates without restarting."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "Architecture",
    question: "What is a 'Value Object' in Domain Driven Design (DDD)?",
    options: [
      "An object with a high price",
      "An object that has no identity and is defined only by its attributes (e.g., an Address or Money amount)",
      "A database primary key",
      "A type of global variable"
    ],
    answer: 1,
    explanation: "Two Value Objects are equal if their properties are equal. They are usually immutable. Contrast this with 'Entities', which have a unique ID.",
    hint: "Identity-less objects defined by data."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "Web Services (gRPC)",
    question: "What is 'Protocol Buffers' (Protobuf)?",
    options: [
      "A way to wash your computer",
      "The language-neutral, binary serialization format used by gRPC for efficient communication",
      "A type of network cable",
      "A logging framework"
    ],
    answer: 1,
    explanation: "Protobuf is much smaller and faster than JSON/XML because it is binary and requires a schema (.proto file).",
    hint: "Binary serialization for gRPC."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What is a 'Dump File' (.dmp)?",
    options: [
      "A file you should throw away",
      "A snapshot of an application's memory and state at a specific moment, used for post-mortem debugging of crashes",
      "A list of deleted records",
      "A backup of the source code"
    ],
    answer: 1,
    explanation: "Dumps are critical for analyzing production issues like memory leaks or deadlocks that cannot be reproduced locally.",
    hint: "Memory snapshot for debugging."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "Security",
    question: "What is 'SQL Injection'?",
    options: [
      "Inserting a needle into a hard drive",
      "A vulnerability where an attacker can execute malicious SQL statements by manipulating input fields",
      "A way to speed up the database",
      "A type of database backup"
    ],
    answer: 1,
    explanation: "Always use parameterized queries or an ORM like EF Core to prevent attackers from 'escaping' input and running their own commands.",
    hint: "Malicious SQL in input fields."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Duck Typing' in C# when using the 'dynamic' keyword?",
    options: [
      "Naming variables after birds",
      "A concept where the compiler doesn't check the type; if an object has the required method, it will be called at runtime",
      "Converting a class to a struct",
      "A way to make the code more readable"
    ],
    answer: 1,
    explanation: "With 'dynamic', the check happens at runtime. If it 'walks like a duck and quacks like a duck', C# treats it as a duck.",
    hint: "Runtime method resolution."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Health Checks' in ASP.NET Core?",
    options: [
      "A medical app for developers",
      "Middleware that exposes an endpoint (e.g., /health) to report the status of the app and its dependencies (DB, Redis)",
      "A tool to check the CPU temperature",
      "A way to monitor user activity"
    ],
    answer: 1,
    explanation: "Health checks are used by load balancers and Kubernetes to determine if an instance should receive traffic or be restarted.",
    hint: "Endpoint for monitoring app status."
  },
  {
    id: 191,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'API Gateway' pattern?",
    options: [
      "A physical gate for the server room",
      "A single entry point for all clients that routes requests to appropriate microservices and can handle cross-cutting concerns (Auth, Rate Limiting)",
      "A type of internet connection",
      "A tool to document APIs"
    ],
    answer: 1,
    explanation: "The gateway acts as a facade, hiding the complexity of the internal microservices from the client.",
    hint: "Single entry point for microservices."
  },
  {
    id: 192,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'Null Coalescing Assignment' operator (??=)?",
    options: [
      "It deletes a null variable",
      "It assigns a value to a variable only if that variable is currently null",
      "It checks if two variables are both null",
      "It makes a variable nullable"
    ],
    answer: 1,
    explanation: "Example: 'list ??= new List<string>();' only creates the list if it doesn't already exist.",
    hint: "Assign if null."
  },
  {
    id: 193,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Span<T>' designed to solve?",
    options: [
      "It makes the code span across multiple files",
      "It provides a type-safe and memory-safe way to represent a contiguous region of arbitrary memory without unnecessary allocations",
      "It is a new type of list",
      "It helps with database connections"
    ],
    answer: 1,
    explanation: "Span allows you to work with parts of arrays, strings, or unmanaged memory without creating new copies (slicing without allocating).",
    hint: "Zero-allocation memory slicing."
  },
  {
    id: 194,
    difficulty: "medium",
    category: "Architecture",
    question: "What is a 'DTO' (Data Transfer Object)?",
    options: [
      "A tool for database optimization",
      "An object that carries data between processes or layers to reduce the number of method calls",
      "A type of primary key",
      "A security token"
    ],
    answer: 1,
    explanation: "DTOs are used to 'shape' the data for the UI or another service, preventing the exposure of internal database entities.",
    hint: "Object for carrying data across layers."
  },
  {
    id: 195,
    difficulty: "hard",
    category: "Security (JWT)",
    question: "What is 'JWE' (JSON Web Encryption)?",
    options: [
      "A way to write JSON in C#",
      "A standard for representing encrypted content in a JSON-based data structure (Unlike JWS which is only signed)",
      "A type of web server",
      "A JavaScript framework"
    ],
    answer: 1,
    explanation: "While standard JWTs (JWS) are readable by anyone, JWEs are encrypted so that only the intended recipient can see the payload.",
    hint: "Encrypted (hidden) JWT payload."
  },
  {
    id: 196,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the purpose of the 'yield break' statement?",
    options: [
      "To pause the program",
      "To signal the end of an iterator (foreach) loop early",
      "To break the database connection",
      "To crash the program on purpose"
    ],
    answer: 1,
    explanation: "It stops a 'yield return' method from producing any more items.",
    hint: "Stops an iterator."
  },
  {
    id: 197,
    difficulty: "hard",
    category: "Troubleshooting",
    question: "What does the error 'CS0103: The name 'xyz' does not exist in the current context' mean?",
    options: [
      "The computer is out of memory",
      "The compiler cannot find a variable or method with that name because it's not declared or is out of scope",
      "The database table is missing",
      "The user is not logged in"
    ],
    answer: 1,
    explanation: "This is a basic compiler error usually caused by a typo, a missing 'using' statement, or declaring a variable in a different block.",
    hint: "Variable or method not found."
  },
  {
    id: 198,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'AutoMapper' commonly used for?",
    options: [
      "Mapping roads for GPS",
      "Automatically copying data from one object type to another (e.g., Entity to DTO)",
      "Writing SQL queries automatically",
      "Managing NuGet packages"
    ],
    answer: 1,
    explanation: "It removes the 'left-to-right' manual assignment code (dto.Name = entity.Name) which is error-prone and tedious.",
    hint: "Object-to-object mapping."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Materialized View' pattern in CQRS?",
    options: [
      "A physical view of the server room",
      "A pre-calculated and stored data view optimized for specific queries, often updated via events from the write-side",
      "A way to see through the code",
      "A type of SQL index"
    ],
    answer: 1,
    explanation: "Instead of joining 10 tables on every read, you store the final 'joined' result in a separate table for instant access.",
    hint: "Pre-joined data for fast reads."
  },
  {
    id: 200,
    difficulty: "medium",
    category: "C# Language",
    question: "What is 'String.Empty' vs '\"\"' in C#?",
    options: [
      "Empty is faster",
      "They are effectively the same in modern .NET, but String.Empty is often preferred for clarity",
      "\"\" uses more memory",
      "Empty is only for reference types"
    ],
    answer: 1,
    explanation: "In old versions of .NET, String.Empty avoided a temporary allocation, but modern compilers treat them identically.",
    hint: "Functional equivalents for empty strings."
  },
  /* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 5/7)
   Topics: Design Patterns, DI Deep-Dive, Identity, Testing
   ====================================================== */
  {
    id: 201,
    difficulty: "medium",
    category: "Design Patterns",
    question: "Which design pattern is used to provide a unified interface to a set of interfaces in a subsystem, making it easier to use?",
    options: ["Strategy", "Facade", "Adapter", "Decorator"],
    answer: 1,
    explanation: "The Facade pattern provides a simplified, high-level interface to a complex library or system of classes.",
    hint: "Think of a single 'entry point' for a complex system."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "Design Patterns",
    question: "In C#, what is the most recommended way to implement a thread-safe Singleton using 'Lazy initialization'?",
    options: [
      "Using a public static variable",
      "Using the 'Lazy<T>' class",
      "Using a 'lock' inside the property every time it is accessed",
      "Using a 'Thread.Sleep' call"
    ],
    answer: 1,
    explanation: "Lazy<T> is thread-safe by default and ensures the instance is created only when first accessed, handling all concurrency concerns internally.",
    hint: "Uses the .NET 'Lazy' type."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "Design Patterns",
    question: "Which pattern is used to 'wrap' an existing object to provide additional functionality without changing its structure?",
    options: ["Decorator", "Proxy", "Bridge", "Flyweight"],
    answer: 0,
    explanation: "The Decorator pattern attaches new responsibilities to an object dynamically. ASP.NET Core Middleware is a common example of this.",
    hint: "Commonly used for cross-cutting concerns like logging."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "Design Patterns",
    question: "What is the primary difference between the 'Strategy' and 'State' patterns?",
    options: [
      "There is no difference",
      "Strategy is chosen by the client; State transitions are usually handled by the object itself based on internal changes",
      "Strategy is for databases; State is for UI",
      "State uses more memory than Strategy"
    ],
    answer: 1,
    explanation: "While they look similar, Strategy is about 'how' something is done (client chooses), while State is about 'what' happens based on the current condition.",
    hint: "Client-controlled vs Object-controlled."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "SOLID Principles",
    question: "Which SOLID principle states that 'Software entities should be open for extension, but closed for modification'?",
    options: ["SRP", "OCP", "LSP", "ISP"],
    answer: 1,
    explanation: "The Open/Closed Principle (OCP) encourages using inheritance or interfaces so you can add new features without changing existing, tested code.",
    hint: "The second letter in SOLID."
  },
  {
    id: 206,
    difficulty: "hard",
    category: "SOLID Principles",
    question: "The 'Liskov Substitution Principle' (LSP) suggests that:",
    options: [
      "You can replace any class with a string",
      "Objects of a superclass should be replaceable with objects of its subclasses without breaking the application",
      "You should never use inheritance",
      "Every class should have its own interface"
    ],
    answer: 1,
    explanation: "LSP ensures that a subclass correctly implements the behavior of the base class. Breaking this often leads to unexpected 'NotImplementedException' errors.",
    hint: "Focus on inheritance reliability."
  },
  {
    id: 207,
    difficulty: "medium",
    category: "Dependency Injection",
    question: "In ASP.NET Core, what happens if you inject a 'Scoped' service into a 'Singleton' service?",
    options: [
      "The app will crash at startup (Dependency Integrity check)",
      "It works perfectly",
      "The Scoped service effectively becomes a Singleton, which is usually a bug (Captive Dependency)",
      "The Scoped service is ignored"
    ],
    answer: 2,
    explanation: "This is known as a 'Captive Dependency'. Since the Singleton lives forever, it will hold onto the specific Scoped instance forever, ignoring its intended lifecycle.",
    hint: "A longer-lived service 'capturing' a shorter-lived one."
  },
  {
    id: 208,
    difficulty: "hard",
    category: "Dependency Injection",
    question: "What is 'Keyed Services' introduced in .NET 8?",
    options: [
      "Services that require a password to run",
      "A feature allowing multiple implementations of the same interface to be registered and retrieved using a specific key/name",
      "A way to encrypt the DI container",
      "A way to use the keyboard in DI"
    ],
    answer: 1,
    explanation: "Previously, you had to resolve an IEnumerable. Now, you can use [FromKeyedServices('myKey')] to get a specific implementation directly.",
    hint: "Named service registration."
  },
  {
    id: 209,
    difficulty: "medium",
    category: "Dependency Injection",
    question: "Which interface is used to access configuration in a way that detects changes to 'appsettings.json' without restarting the app?",
    options: ["IOptions", "IOptionsSnapshot", "IConfiguration", "IEnvironment"],
    answer: 1,
    explanation: "IOptionsSnapshot is re-evaluated per request, allowing it to reflect changes made to the configuration file while the app is running.",
    hint: "Scoped configuration access."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "Dependency Injection",
    question: "What is the purpose of the 'Scrutor' NuGet library in .NET?",
    options: [
      "To perform database backups",
      "To provide 'Assembly Scanning' for automatic registration of services in the DI container",
      "To encrypt JSON files",
      "To manage CSS files"
    ],
    answer: 1,
    explanation: "Scrutor allows you to say 'Register all classes that implement IService in this assembly' rather than adding them manually one by one.",
    hint: "Automatic DI registration."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "Security",
    question: "What is the 'Refresh Token' used for in OAuth 2.0?",
    options: [
      "To refresh the web page",
      "To obtain a new Access Token without requiring the user to log in again with credentials",
      "To delete the user's account",
      "To change the user's password"
    ],
    answer: 1,
    explanation: "Access tokens are short-lived for security. Refresh tokens are long-lived and used to swap for new access tokens.",
    hint: "Silent token renewal."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "Security",
    question: "What is 'PKCE' (Proof Key for Code Exchange) designed to protect against?",
    options: [
      "SQL Injection",
      "Authorization code interception attacks, especially in public clients like Mobile or SPA apps",
      "Brute force passwords",
      "DDoS attacks"
    ],
    answer: 1,
    explanation: "PKCE adds a secret 'verifier' that proves the app requesting the token is the same one that requested the code.",
    hint: "Security for SPAs and Mobile apps."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "Security",
    question: "In ASP.NET Core, what is 'Policy-based Authorization'?",
    options: [
      "A set of rules for the office",
      "A flexible approach where authorization is based on a set of requirements (claims, age, etc.) rather than just simple roles",
      "A way to write faster code",
      "A type of database encryption"
    ],
    answer: 1,
    explanation: "Policies can combine multiple claims. For example, a 'SeniorStaff' policy might require 'Role: Employee' AND 'YearsWorked > 5'.",
    hint: "Advanced rule-based access."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Object Pooling' in .NET (e.g., DefaultObjectPool)?",
    options: [
      "A swimming pool for developers",
      "A technique to reuse expensive-to-create objects instead of letting the GC collect and recreate them",
      "A way to share objects on the internet",
      "A type of database index"
    ],
    answer: 1,
    explanation: "By keeping a 'pool' of objects, you reduce the overhead of allocations and Garbage Collection, common in high-performance network scenarios.",
    hint: "Reusing objects to reduce GC."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "C# Language",
    question: "What is a 'Collection Expression' introduced in C# 12?",
    options: [
      "A way to calculate math",
      "A new syntax using brackets: 'int[] x = [1, 2, 3];' to simplify collection initialization",
      "A way to search a list",
      "A new type of loop"
    ],
    answer: 1,
    explanation: "Collection expressions provide a unified, cleaner syntax for creating arrays, lists, and spans.",
    hint: "Uses square brackets []."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the 'Spread' operator (..) in C# 12 collection expressions?",
    options: [
      "It doubles the size of a list",
      "It allows including elements from one collection into another (e.g., [..list1, ..list2])",
      "It is a way to skip items",
      "It deletes a range of items"
    ],
    answer: 1,
    explanation: "The spread operator 'unpacks' the elements of a collection into the new collection expression.",
    hint: "Used to concatenate collections easily."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "Architecture",
    question: "What is the 'Mediator Pattern' (commonly used with the MediatR library)?",
    options: [
      "A pattern to handle legal disputes",
      "A pattern that reduces direct dependencies between objects by making them communicate through a central mediator",
      "A way to connect to two databases",
      "A logging framework"
    ],
    answer: 1,
    explanation: "Instead of Class A calling Class B, Class A sends a 'Request' to MediatR, which finds the correct 'Handler'. Great for decoupling.",
    hint: "Centralized communication hub."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Vertical Slice Architecture'?",
    options: [
      "Cutting the server in half",
      "An approach where code is organized by features (slices) rather than layers (Controllers, Services, Repositories)",
      "A type of UI design",
      "A way to optimize database rows"
    ],
    answer: 1,
    explanation: "In Vertical Slices, everything needed for a feature (e.g., 'CreateUser') stays together, reducing the need to jump between layers to understand a feature.",
    hint: "Organization by feature, not layer."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "Testing",
    question: "In unit testing, what is a 'Mock' object?",
    options: [
      "An object that makes fun of the developer",
      "A fake object used to simulate the behavior of a real dependency and verify interactions (e.g., 'Was this method called?')",
      "A copy of the database",
      "A bug in the test code"
    ],
    answer: 1,
    explanation: "Mocks (using libraries like Moq or NSubstitute) allow you to test your logic in isolation from external services or databases.",
    hint: "Simulating dependencies."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "Testing",
    question: "What is 'Mutation Testing' (e.g., using Stryker.NET)?",
    options: [
      "Testing if the code can change itself",
      "A technique that introduces small bugs into your code to see if your unit tests actually catch them (failing tests)",
      "Testing the app on different OS versions",
      "A way to test multi-threaded code"
    ],
    answer: 1,
    explanation: "Mutation testing measures the effectiveness of your tests. If a 'mutant' (bug) survives, your test suite is missing a scenario.",
    hint: "Testing the quality of the tests."
  },
  {
    id: 221,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Which class is used to write Integration Tests by hosting the API in-memory?",
    options: ["HttpClient", "WebApplicationFactory", "TestServer", "ApiTester"],
    answer: 1,
    explanation: "WebApplicationFactory handles the bootstrapping of your app in memory, allowing you to run full end-to-end tests against your real Startup/Program logic.",
    hint: "Part of Microsoft.AspNetCore.Mvc.Testing."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "C# Language",
    question: "What is a 'Function Pointer' in C# 9.0+ (delegate*)?",
    options: [
      "A way to point at a function with a mouse",
      "An efficient way to call methods directly via memory addresses, bypassing some delegate overhead (used in interop/low-level code)",
      "A comment that explains a function",
      "A variable that stores the name of a function"
    ],
    answer: 1,
    explanation: "Function pointers (delegate*) are for advanced scenarios where performance is critical and safe code can be bypassed for speed.",
    hint: "Low-level pointer to code."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'BenchmarkDotNet'?",
    options: [
      "A website to buy .NET software",
      "A popular library used to accurately measure and compare the performance of C# code snippets",
      "A tool to check for viruses",
      "A database performance tool"
    ],
    answer: 1,
    explanation: "It handles 'warm-up', multiple runs, and statistical analysis to ensure you are getting real performance numbers.",
    hint: "The gold standard for .NET micro-benchmarking."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Idempotency' in the context of an API?",
    options: [
      "When an API is always offline",
      "The property where making the same request multiple times has the same effect as making it once",
      "A way to encrypt passwords",
      "When the API is very fast"
    ],
    answer: 1,
    explanation: "A 'DELETE' or a 'PUT' is typically idempotent. A 'POST' is usually NOT (it would create multiple records).",
    hint: "Multiple requests, same result."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Rate Limiting' middleware (.NET 7+)?",
    options: [
      "Limiting the speed of the internet",
      "Middleware that limits the number of requests a user can make in a specific timeframe to prevent abuse",
      "A way to limit the CPU usage of the app",
      "A tool to check the quality of the code"
    ],
    answer: 1,
    explanation: ".NET 7 introduced built-in support for Fixed Window, Sliding Window, and Token Bucket rate limiting strategies.",
    hint: "Restricting request frequency."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the 'Ref' keyword in a method parameter?",
    options: [
      "It makes the variable read-only",
      "It passes the variable by reference, allowing the method to modify the original variable's value",
      "It creates a copy of the variable",
      "It is used for reflection"
    ],
    answer: 1,
    explanation: "Unlike 'out', a 'ref' variable must be initialized before it is passed to the method.",
    hint: "Pass by reference."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "Design Patterns",
    question: "Which pattern uses a 'State' object to change the behavior of its 'Context' when its internal state changes?",
    options: ["State Pattern", "Observer Pattern", "Command Pattern", "Factory Pattern"],
    answer: 0,
    explanation: "The State pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.",
    hint: "The name is in the question."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is 'HiLo' (High-Low) algorithm in EF Core?",
    options: [
      "A type of card game",
      "An ID generation strategy where the client reserves a block of IDs from the database to reduce round-trips",
      "A way to optimize image sizes",
      "A search algorithm"
    ],
    answer: 1,
    explanation: "It is more efficient than standard IDENTITY for high-volume inserts because the application doesn't have to ask the DB for the ID of every single row.",
    hint: "Client-side ID pre-allocation."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "Web API",
    question: "What is 'Patch' (HTTP PATCH) used for?",
    options: [
      "Updating a computer",
      "A partial update to a resource (e.g., changing only the 'Email' field of a User)",
      "Deleting a record",
      "Creating a new record"
    ],
    answer: 1,
    explanation: "While PUT replaces the entire resource, PATCH only modifies specific fields provided in the request.",
    hint: "Partial resource update."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "Dependency Injection",
    question: "What is the 'Dependency Inversion Principle' (DIP)?",
    options: [
      "Inverting the order of the code",
      "High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces)",
      "Turning the database upside down",
      "Using static methods everywhere"
    ],
    answer: 1,
    explanation: "DIP is the 'D' in SOLID. It prevents your business logic from being tightly coupled to a specific database or framework.",
    hint: "Depend on abstractions, not concretions."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "Unit Testing",
    question: "What is 'TDD' (Test-Driven Development)?",
    options: [
      "Testing the developer's data",
      "A workflow where you write a failing test first, then write the code to make it pass, then refactor",
      "Testing the database daily",
      "Writing tests only after the project is finished"
    ],
    answer: 1,
    explanation: "The cycle is: Red (fail), Green (pass), Refactor (clean up).",
    hint: "Red-Green-Refactor."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "Security",
    question: "In JWT, what is 'Algorithm Substitution Attack'?",
    options: [
      "Using a different C# loop",
      "When an attacker changes the 'alg' header to 'none' or 'HS256' to trick the server into accepting a forged token",
      "A bug in the math library",
      "A way to crack passwords"
    ],
    answer: 1,
    explanation: "Secure libraries must ensure that the expected signing algorithm is enforced and not taken blindly from the token header.",
    hint: "Changing the 'alg' header."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "Architecture",
    question: "What is an 'Aggregate Root' in Domain Driven Design (DDD)?",
    options: [
      "The boss of the company",
      "The primary entity that acts as a gateway to a cluster of related objects (Aggregate) to ensure data consistency",
      "The root folder of the project",
      "The SQL database"
    ],
    answer: 1,
    explanation: "You should only interact with the Aggregate through the root (e.g., an Order object is the root for its OrderItems).",
    hint: "Entry point for a group of entities."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the purpose of the 'scoped' keyword in C# 11 ref variables?",
    options: [
      "To make the variable private",
      "To restrict the lifetime of a 'ref' or 'Span' to the current method, preventing it from 'escaping'",
      "A way to define a Scoped DI service",
      "To delete a variable"
    ],
    answer: 1,
    explanation: "It ensures memory safety by telling the compiler that the reference will not live longer than the scope it was created in.",
    hint: "Prevents references from escaping the method."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Which tool allows you to view and manage background tasks in a .NET application via a web dashboard?",
    options: ["Swagger", "Hangfire", "LogViewer", "TaskManager"],
    answer: 1,
    explanation: "Hangfire is a popular library for background job processing with a built-in UI for monitoring.",
    hint: "Background job dashboard."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Anemic Domain Model'?",
    options: [
      "A domain model that is very fast",
      "A model where entities are just data containers (getters/setters) with no business logic inside them",
      "A domain model with too much code",
      "A type of database schema"
    ],
    answer: 1,
    explanation: "In DDD, this is considered an anti-pattern. Logic should usually live inside the entities rather than just in external services.",
    hint: "Entities without behavior."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "C# Language",
    question: "What is 'Duck Typing' in the context of the C# 'foreach' loop?",
    options: [
      "Naming variables 'duck'",
      "A class can be iterated in 'foreach' without implementing IEnumerable, as long as it has a 'GetEnumerator' method",
      "A way to use multiple types in a loop",
      "A bug in the loop logic"
    ],
    answer: 1,
    explanation: "C# 'foreach' doesn't strictly require the interface; it looks for the method pattern.",
    hint: "Pattern-based iteration."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "Testing",
    question: "What is a 'Flaky Test'?",
    options: [
      "A test that fails because the code is bad",
      "A test that sometimes passes and sometimes fails without any changes to the code or environment",
      "A test that is very slow",
      "A test that hasn't been written yet"
    ],
    answer: 1,
    explanation: "Flaky tests are often caused by race conditions, timing issues, or shared state and are the 'poison' of CI/CD pipelines.",
    hint: "Non-deterministic test result."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "Security",
    question: "What is 'XSS' (Cross-Site Scripting)?",
    options: [
      "A type of CSS",
      "An attack where a malicious script is injected into a web page viewed by other users",
      "A way to speed up JavaScript",
      "A database security feature"
    ],
    answer: 1,
    explanation: "ASP.NET Core Razor handles this by default by encoding all output strings to prevent script execution.",
    hint: "Malicious script injection."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Ambassador Pattern'?",
    options: [
      "A way to name variables",
      "A helper service (sidecar) that acts as a proxy for the main application to handle networking tasks like logging and retries",
      "A way to translate code",
      "A type of unit test"
    ],
    answer: 1,
    explanation: "It offloads common tasks (like service discovery or monitoring) from the main application to a secondary container.",
    hint: "A networking proxy sidecar."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "Troubleshooting",
    question: "What does the 'DebuggerStepThrough' attribute do?",
    options: [
      "Stops the debugger",
      "Tells the debugger to skip over the marked method/class without stopping inside it",
      "Speeds up the code",
      "Generates a log file"
    ],
    answer: 1,
    explanation: "Useful for boilerplate code (like auto-generated properties) that you don't want to step into every time while debugging.",
    hint: "Instructs the debugger to skip a method."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'SIMD' (Single Instruction, Multiple Data) in .NET?",
    options: [
      "A way to write one line of code",
      "Hardware-level acceleration where the CPU performs the same operation on multiple values at once (using Vector<T>)",
      "A type of internet connection",
      "A multi-threaded loop"
    ],
    answer: 1,
    explanation: ".NET exposes SIMD through intrinsic types like Vector<T>, allowing for massive performance gains in mathematical calculations.",
    hint: "Parallel processing at the CPU instruction level."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the '??' (Null-coalescing) operator?",
    options: [
      "It makes a variable null",
      "It returns the left-hand operand if it is not null; otherwise, it returns the right-hand operand",
      "It is used for math",
      "It is a way to comment code"
    ],
    answer: 1,
    explanation: "Example: 'var name = inputName ?? \"Guest\";'",
    hint: "Provide a default for null."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Blue-Green Deployment'?",
    options: [
      "Using two different colors for the UI",
      "A strategy where you have two identical production environments; only one is live at a time, allowing zero-downtime swaps",
      "A way to monitor memory usage",
      "A bug in the deployment script"
    ],
    answer: 1,
    explanation: "You deploy to the 'Green' environment, test it, and then switch the router to point at it instead of the 'Blue' (current) one.",
    hint: "Two production environments for safe swapping."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "Testing",
    question: "What is the 'AAA' pattern in unit testing?",
    options: [
      "A car insurance company",
      "Arrange, Act, Assert",
      "Always Ask Anyone",
      "A way to name variables"
    ],
    answer: 1,
    explanation: "Arrange (setup), Act (execute), Assert (check results).",
    hint: "The three steps of a test."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Expression Trees' in C#?",
    options: [
      "A visual way to see the code",
      "Data structures that represent code in a tree-like format, allowing code to be inspected or executed at runtime (used by EF Core)",
      "A list of math formulas",
      "A way to name files"
    ],
    answer: 1,
    explanation: "EF Core uses expression trees to translate your C# LINQ queries into SQL statements.",
    hint: "Code represented as data."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is the purpose of 'LibMan' (Library Manager) in Visual Studio?",
    options: [
      "To manage books",
      "A lightweight tool to acquire client-side libraries (like jQuery or Bootstrap) from a CDN or file system",
      "A tool to manage C# classes",
      "A way to backup the database"
    ],
    answer: 1,
    explanation: "LibMan is simpler than npm or yarn for small projects that only need a few client-side files.",
    hint: "Simple client-side library manager."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "Security",
    question: "What is 'Role-Based Access Control' (RBAC)?",
    options: [
      "Controlling the computer with a controller",
      "An authorization model where permissions are assigned to roles, and users are assigned to those roles",
      "A way to manage the database",
      "A security feature for Wi-Fi"
    ],
    answer: 1,
    explanation: "If a user has the 'Admin' role, they inherit all permissions defined for that role.",
    hint: "Permissions based on user roles."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'extern' keyword used for in C#?",
    options: [
      "To make a variable public",
      "To indicate that a method is implemented externally, typically in a DLL using P/Invoke",
      "To exit the program",
      "To call a different C# file"
    ],
    answer: 1,
    explanation: "Commonly used when calling Windows API functions from a C# application.",
    hint: "Calls native C/C++ libraries."
  },
  {
    id: 250,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Shared Kernel' in DDD?",
    options: [
      "A piece of popcorn shared by the team",
      "A common part of the model and associated code that is shared between two or more bounded contexts",
      "A type of database",
      "A way to write comments"
    ],
    answer: 1,
    explanation: "The Shared Kernel must be carefully managed because any change to it affects all services that depend on it.",
    hint: "Shared library between microservices."
  },
  /* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 6/7)
   Topics: Azure, Advanced Internals, Blazor, Security
   ====================================================== */
  {
    id: 251,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Kestrel' in the context of ASP.NET Core?",
    options: [
      "A type of bird used in Microsoft logos",
      "A cross-platform, open-source HTTP server implementation used by default in ASP.NET Core",
      "A database engine for small apps",
      "A JavaScript framework for the backend"
    ],
    answer: 1,
    explanation: "Kestrel is a high-performance web server based on libuv (and later a managed socket layer) designed to run .NET applications on any OS.",
    hint: "The default internal web server."
  },
  {
    id: 252,
    difficulty: "hard",
    category: "C# Language",
    question: "What are 'Inline Arrays' introduced in C# 12?",
    options: [
      "Arrays defined in a single line of code",
      "A way for a struct to create a fixed-size array of a primitive type without using the 'unsafe' keyword",
      "Arrays that are automatically resized",
      "A way to put JavaScript arrays inside C#"
    ],
    answer: 1,
    explanation: "Inline arrays allow developers to create fixed-size buffers in a struct, primarily used by the runtime team to improve performance without requiring unsafe blocks.",
    hint: "Fixed-size buffers in safe code."
  },
  {
    id: 253,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Bulkhead Pattern'?",
    options: [
      "Building a wall in the server room",
      "An isolation pattern where resources (like thread pools or CPU) are partitioned to prevent a failure in one service from taking down the entire system",
      "A way to store heavy files in the database",
      "A type of unit test for massive data"
    ],
    answer: 1,
    explanation: "Like the compartments in a ship's hull (bulkheads), if one 'compartment' of your app fails or hangs, the others remain functional.",
    hint: "Preventing failure propagation through resource isolation."
  },
  {
    id: 254,
    difficulty: "medium",
    category: "ORM (EF Core)",
    question: "What is the primary use of 'Global Query Filters' in EF Core?",
    options: [
      "To filter the entire internet",
      "To automatically apply a filter (like 'IsDeleted == false') to every query for a specific entity type",
      "To speed up the database connection",
      "To prevent users from seeing any data"
    ],
    answer: 1,
    explanation: "Commonly used for Soft Delete or Multi-tenancy logic, ensuring you don't forget to filter out 'deleted' records in every single LINQ query.",
    hint: "Automated 'Where' clauses."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "Azure",
    question: "What is 'Azure Managed Identity'?",
    options: [
      "A username and password for the Azure portal",
      "A feature that provides an identity for applications to use when connecting to resources that support Microsoft Entra authentication, without managing secrets",
      "A way to identify users by their face",
      "A type of security certificate"
    ],
    answer: 1,
    explanation: "Managed Identity eliminates the need for developers to store credentials (like connection strings) in appsettings.json or Environment Variables.",
    hint: "Passwordless authentication between Azure services."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "C# Language",
    question: "What does the 'unsafe' keyword allow you to do in C#?",
    options: [
      "Delete files without permission",
      "Use pointer arithmetic and direct memory manipulation",
      "Run code without a license",
      "Bypass all try-catch blocks"
    ],
    answer: 1,
    explanation: "Unsafe code allows you to work with pointers (like C++), which is necessary for some high-performance scenarios or interacting with native APIs.",
    hint: "Pointer usage."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "Blazor",
    question: "In .NET 8 Blazor, what is 'Interactive Auto' render mode?",
    options: [
      "A mode that automatically writes the code",
      "A mode that uses Blazor Server for the initial load and then switches to WebAssembly for subsequent visits after the runtime is downloaded",
      "A mode for building mobile apps",
      "A way to render pages using only HTML/CSS"
    ],
    answer: 1,
    explanation: "It provides the 'best of both worlds': fast initial load (Server) and offline/client-side performance (WASM) once ready.",
    hint: "Server first, then WASM."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "Performance",
    question: "Why is calling 'GC.Collect()' manually generally discouraged in .NET?",
    options: [
      "It costs money to run",
      "The Garbage Collector is self-tuning and manual calls can interfere with its optimization logic, often causing performance degradation",
      "It deletes the entire memory",
      "It stops the computer from working"
    ],
    answer: 1,
    explanation: "Manual collection forces the GC to work even if it's not the most efficient time, often moving objects into older generations prematurely.",
    hint: "Don't second-guess the self-tuning engine."
  },
  {
    id: 259,
    difficulty: "hard",
    category: "Design Patterns",
    question: "What is the 'Memento' design pattern used for?",
    options: [
      "To remember the names of variables",
      "To capture and externalize an object's internal state so that the object can be restored to this state later (Undo/Redo functionality)",
      "To speed up the database",
      "To create a copy of a class"
    ],
    answer: 1,
    explanation: "The Memento pattern provides the ability to restore an object to its previous state without violating encapsulation.",
    hint: "The 'Undo' pattern."
  },
  {
    id: 260,
    difficulty: "medium",
    category: "Security",
    question: "What is a 'Content Security Policy' (CSP)?",
    options: [
      "A legal document for website content",
      "An HTTP response header that tells the browser which sources of content (scripts, images) are trusted, helping prevent XSS",
      "A way to block users from certain countries",
      "A password policy"
    ],
    answer: 1,
    explanation: "By defining a CSP, you can prevent the browser from executing scripts from untrusted external domains.",
    hint: "Browser-side security header."
  },
  {
    id: 261,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Sidecar Pattern'?",
    options: [
      "Running a service on a motorcycle",
      "Deploying a helper container (like a logger or proxy) alongside each instance of the main application container",
      "A way to share memory between services",
      "A type of load balancer"
    ],
    answer: 1,
    explanation: "The sidecar shares the same lifecycle and network as the main app, providing peripheral features without polluting the main app's code.",
    hint: "A 'buddy' container."
  },
  {
    id: 262,
    difficulty: "medium",
    category: "C# Language",
    question: "What are 'File-scoped types' in C# 11?",
    options: [
      "Types that can only be used in the 'C:' drive",
      "The 'file' access modifier, which restricts a type's visibility to the specific source file it is declared in",
      "A way to name files automatically",
      "Types that are deleted when the file is closed"
    ],
    answer: 1,
    explanation: "This is particularly useful for Source Generators to avoid naming conflicts between generated and user-written code.",
    hint: "Visibility restricted to one .cs file."
  },
  {
    id: 263,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What are 'Shadow Properties' in EF Core?",
    options: [
      "Properties that appear only at night",
      "Properties that are not defined in your C# class but are defined in the EF Core model and the database table",
      "Hidden variables in the OS",
      "A way to make the database smaller"
    ],
    answer: 1,
    explanation: "Shadow properties (like 'LastUpdatedBy') can be used to track metadata without cluttering your clean domain model classes.",
    hint: "Data in the DB, but not in the Class."
  },
  {
    id: 264,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Output Formatting' in Web API?",
    options: [
      "The process of making the code look pretty",
      "The process of selecting a formatter (like JSON or XML) to write the response based on the 'Accept' header from the client",
      "A way to print documents",
      "The layout of the website"
    ],
    answer: 1,
    explanation: "This is part of 'Content Negotiation'. The client asks for a specific format, and the API provides it if a suitable formatter exists.",
    hint: "JSON vs XML negotiation."
  },
  {
    id: 265,
    difficulty: "hard",
    category: "Azure",
    question: "In Azure Service Bus, what is a 'Dead-letter Queue' (DLQ)?",
    options: [
      "A queue for emails from deceased people",
      "A secondary sub-queue where messages that cannot be delivered or processed successfully are automatically moved",
      "A queue that is being deleted",
      "A way to stop the server"
    ],
    answer: 1,
    explanation: "Messages go here for troubleshooting when they exceed the maximum delivery count or fail specific validation rules.",
    hint: "Storage for failed messages."
  },
  {
    id: 266,
    difficulty: "medium",
    category: "C# Language",
    question: "What is 'Constant Interpolated Strings' (C# 10)?",
    options: [
      "Strings that never change",
      "The ability to use string interpolation (e.g., $\"{CONST_A} {CONST_B}\") to define a 'const' string, provided the inputs are also const",
      "A faster way to print text",
      "A way to combine strings in the database"
    ],
    answer: 1,
    explanation: "Before C# 10, you had to use '+' to concatenate constant strings. Now interpolation is supported for constants.",
    hint: "Interpolation for 'const' variables."
  },
  {
    id: 267,
    difficulty: "hard",
    category: "Blazor",
    question: "What is the benefit of 'EventCallback' over 'Action' when passing callbacks from Parent to Child components?",
    options: [
      "It is faster to write",
      "It automatically triggers 'StateHasChanged' on the parent component after the event is handled",
      "It is safer for the database",
      "It allows passing integers"
    ],
    answer: 1,
    explanation: "Using Action requires manual calls to StateHasChanged. EventCallback is 'Blazor-aware' and handles UI refreshing automatically.",
    hint: "Automatic UI re-rendering."
  },
  {
    id: 268,
    difficulty: "medium",
    category: "Performance",
    question: "What is the purpose of 'ArrayPool<T>'?",
    options: [
      "A swimming pool for arrays",
      "A mechanism to rent and return arrays to reduce the frequency of allocations and Garbage Collection for temporary buffers",
      "A way to store arrays in the cloud",
      "A tool to resize arrays"
    ],
    answer: 1,
    explanation: "Renting an array from a pool is much cheaper than creating a 'new T[]' when you only need it for a short time.",
    hint: "Renting vs Creating buffers."
  },
  {
    id: 269,
    difficulty: "hard",
    category: "Architecture",
    question: "In CQRS, why is the 'Read Model' often different from the 'Write Model'?",
    options: [
      "To make the code more confusing",
      "The Write model is optimized for consistency/validation, while the Read model is optimized for fast, denormalized retrieval",
      "Because they use different programming languages",
      "Because one is for the client and one for the server"
    ],
    answer: 1,
    explanation: "A Read model might be a flat table or even a search index (Elasticsearch) to avoid complex joins required by the normalized Write model.",
    hint: "Optimization for different purposes."
  },
  {
    id: 270,
    difficulty: "medium",
    category: "Security",
    question: "What is the 'SameSite' cookie attribute designed to prevent?",
    options: [
      "SQL Injection",
      "CSRF (Cross-Site Request Forgery) attacks",
      "XSS (Cross-Site Scripting)",
      "Brute force attacks"
    ],
    answer: 1,
    explanation: "By setting SameSite to 'Strict' or 'Lax', browsers will not send the cookie during cross-site requests, preventing attackers from hijacking the session.",
    hint: "Cookie security for CSRF."
  },
  {
    id: 271,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Strangler Fig Pattern'?",
    options: [
      "A botanical way to grow code",
      "Incrementally migrating a legacy system by replacing specific functional slices with new microservices until the old system is completely replaced",
      "A way to delete the database",
      "A security pattern for encrypting files"
    ],
    answer: 1,
    explanation: "The name comes from the fig tree that grows around another tree, eventually replacing it. It allows for low-risk, gradual migration.",
    hint: "Incremental legacy replacement."
  },
  {
    id: 272,
    difficulty: "medium",
    category: "C# Language",
    question: "What is a 'ref readonly' parameter?",
    options: [
      "A variable that cannot be read",
      "A way to pass a large struct by reference for performance while ensuring the method cannot modify its contents",
      "A way to read files faster",
      "A variable that is deleted after use"
    ],
    answer: 1,
    explanation: "It combines the performance of passing by reference (no copying) with the safety of a readonly constraint.",
    hint: "Pass by reference, but no modification."
  },
  {
    id: 273,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is 'Split Queries' in EF Core?",
    options: [
      "Breaking a query in half",
      "A feature that executes multiple SQL queries instead of one large query with many JOINs to avoid 'Cartesian Explosion'",
      "A way to use two different databases",
      "A way to run queries in parallel"
    ],
    answer: 1,
    explanation: "When joining many 'collection' navigations, the result set can become massive. Split queries (using '.AsSplitQuery()') keep the data volume manageable.",
    hint: "Avoiding 'Cartesian Explosion' from Joins."
  },
  {
    id: 274,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "Why should you use 'IHttpClientFactory' instead of 'new HttpClient()'?",
    options: [
      "It is easier to type",
      "It manages the underlying HttpMessageHandler lifecycle to prevent socket exhaustion and handle DNS changes correctly",
      "It makes the internet faster",
      "It is required by Azure"
    ],
    answer: 1,
    explanation: "Regularly creating and disposing HttpClient can lead to socket exhaustion, while keeping a singleton HttpClient can ignore DNS updates. The factory solves both.",
    hint: "Managing the lifecycle of HTTP connections."
  },
  {
    id: 275,
    difficulty: "hard",
    category: "Azure",
    question: "When should you use 'Azure App Configuration' instead of just 'Azure Key Vault'?",
    options: [
      "Key Vault is only for developers",
      "Use App Configuration for non-sensitive feature flags and settings; use Key Vault specifically for secrets and certificates",
      "App Configuration is for the database",
      "Key Vault is free, App Configuration is not"
    ],
    answer: 1,
    explanation: "App Configuration provides advanced management for settings (labels, snapshots, feature toggles) that Key Vault isn't designed for.",
    hint: "Secrets vs General settings."
  },
  {
    id: 276,
    difficulty: "medium",
    category: "C# Language",
    question: "What is an 'init-only' setter in C# 9?",
    options: [
      "A setter that runs first",
      "A property that can only be assigned during object initialization (e.g., using an object initializer)",
      "A setter for private variables",
      "A way to reset a variable"
    ],
    answer: 1,
    explanation: "Example: 'public string Name { get; init; }'. This allows for immutability while still supporting clean object initializer syntax.",
    hint: "Immutable but initializer-friendly."
  },
  {
    id: 277,
    difficulty: "hard",
    category: "Blazor",
    question: "What is 'JS Interop' in Blazor?",
    options: [
      "A way to convert C# to JavaScript",
      "The mechanism that allows C# code to call JavaScript functions and vice versa",
      "A security bug in Blazor",
      "A tool for CSS"
    ],
    answer: 1,
    explanation: "IJSRuntime is used to access browser APIs or libraries (like Chart.js) that are only available in JavaScript.",
    hint: "Calling JS from C#."
  },
  {
    id: 278,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'stackalloc' used for in C#?",
    options: [
      "Allocating memory on the Stack instead of the Heap for small, temporary buffers to improve performance",
      "Allocating memory for a stack data structure",
      "A way to stop a memory leak",
      "A way to use more RAM"
    ],
    answer: 1,
    explanation: "Stack allocation is extremely fast and requires no Garbage Collection. It should only be used for small amounts of data.",
    hint: "Fast, temporary memory allocation."
  },
  {
    id: 279,
    difficulty: "hard",
    category: "Architecture",
    question: "What is the 'Onion Architecture'?",
    options: [
      "An architecture that makes developers cry",
      "An architectural pattern that places the Domain Model at the center, with dependencies pointing inward from the Infrastructure/UI",
      "A way to layer the database",
      "A type of CSS framework"
    ],
    answer: 1,
    explanation: "Similar to Clean Architecture, it ensures that the business logic (Core) is independent of the database and external frameworks.",
    hint: "Dependencies point toward the core."
  },
  {
    id: 280,
    difficulty: "medium",
    category: "Security",
    question: "What is an 'Anti-forgery Token' (CSRF Token)?",
    options: [
      "A fake coin",
      "A secret value included in requests to ensure that the form submission came from the actual user and not a malicious site",
      "A way to encrypt passwords",
      "A security certificate for the server"
    ],
    answer: 1,
    explanation: "ASP.NET Core MVC/Razor Pages use these automatically to protect 'POST' actions from being triggered by 3rd-party sites.",
    hint: "Preventing cross-site request forgery."
  },
  {
    id: 281,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Distributed Tracing' (e.g., OpenTelemetry)?",
    options: [
      "Tracing a drawing across multiple papers",
      "A method of monitoring applications where a single request is tracked as it moves through various microservices",
      "A way to see who logged in",
      "A type of database log"
    ],
    answer: 1,
    explanation: "It uses a 'Trace ID' to correlate logs from Service A, Service B, and Service C into a single timeline for debugging.",
    hint: "Following a request across services."
  },
  {
    id: 282,
    difficulty: "medium",
    category: "C# Language",
    question: "What are 'Default Interface Methods' (C# 8)?",
    options: [
      "Methods that are always there",
      "The ability for an interface to provide a default implementation for a method, allowing interfaces to evolve without breaking existing implementations",
      "A way to make methods public",
      "Static methods in a class"
    ],
    answer: 1,
    explanation: "If a class implements the interface but doesn't implement the method, it will use the default one provided in the interface.",
    hint: "Implementation inside an interface."
  },
  {
    id: 283,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is 'Explicit Loading' in EF Core?",
    options: [
      "Loading data very clearly",
      "Manually loading a navigation property for an entity that is already in memory using the '.Load()' method",
      "Loading all data at startup",
      "A type of lazy loading"
    ],
    answer: 1,
    explanation: "Example: 'context.Entry(user).Collection(u => u.Posts).Load();'. Useful when you decide you need related data after the initial query.",
    hint: "Manually loading related data later."
  },
  {
    id: 284,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Response Compression'?",
    options: [
      "Compressing the code to make it smaller",
      "A middleware that reduces the size of the HTTP response (e.g., using Gzip or Brotli) to save bandwidth",
      "A way to zip files for download",
      "A tool to minify JavaScript"
    ],
    answer: 1,
    explanation: "Smaller responses mean faster transfers and better performance for users on slow connections.",
    hint: "Zipping HTTP data."
  },
  {
    id: 285,
    difficulty: "hard",
    category: "Azure",
    question: "What are 'Azure Durable Functions'?",
    options: [
      "Functions that never crash",
      "An extension of Azure Functions that allows you to write stateful workflows and orchestrate long-running tasks in code",
      "A way to store data in the cloud",
      "A type of virtual machine"
    ],
    answer: 1,
    explanation: "Durable functions handle 'check-pointing' and state management automatically, which is hard to do in standard 'stateless' serverless functions.",
    hint: "Stateful serverless workflows."
  },
  {
    id: 286,
    difficulty: "medium",
    category: "C# Language",
    question: "What are 'Raw String Literals' in C# 11?",
    options: [
      "Strings that contain uncooked data",
      "Strings starting with at least three double quotes (\"\"\") that allow for multi-line text and quotes without escaping",
      "A way to write SQL directly",
      "A new way to name variables"
    ],
    answer: 1,
    explanation: "They make it much easier to embed JSON or XML directly in C# code without using backslashes to escape every quote.",
    hint: "Three quotes \"\"\" for literal text."
  },
  {
    id: 287,
    difficulty: "hard",
    category: "Blazor",
    question: "What is the recommended way to manage shared state across many Blazor components?",
    options: [
      "Using Global Variables",
      "Creating a Scoped 'State Container' service and injecting it into components",
      "Saving everything to the database",
      "Using the browser's local storage only"
    ],
    answer: 1,
    explanation: "A State Container service (a simple class with properties and an event to notify of changes) is the standard pattern for cross-component communication.",
    hint: "Injectable State service."
  },
  {
    id: 288,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'P/Invoke' (Platform Invocation Services)?",
    options: [
      "Calling a phone number from C#",
      "A technology that allows managed .NET code to call unmanaged functions in native DLLs (like Windows APIs or C++ libraries)",
      "A way to invite people to use the app",
      "A type of multi-threading"
    ],
    answer: 1,
    explanation: "It uses the [DllImport] attribute to map C# method signatures to native functions.",
    hint: "Calling native code from .NET."
  },
  {
    id: 289,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Event-Driven Architecture' (EDA)?",
    options: [
      "Building apps that only work when an event happens",
      "An architectural style where decoupled services communicate by publishing and consuming asynchronous events",
      "A way to manage calendar events",
      "A type of UI design"
    ],
    answer: 1,
    explanation: "EDA allows for highly scalable and resilient systems because services don't need to wait for each other to finish tasks.",
    hint: "Communication via Pub/Sub."
  },
  {
    id: 290,
    difficulty: "medium",
    category: "Security",
    question: "What is 'HSTS' (HTTP Strict Transport Security)?",
    options: [
      "A high-speed internet connection",
      "A security header that tells the browser to always use HTTPS for a site, even if the user types http://",
      "A way to encrypt hard drives",
      "A policy for strong passwords"
    ],
    answer: 1,
    explanation: "HSTS helps protect against 'man-in-the-middle' attacks that try to downgrade the connection to insecure HTTP.",
    hint: "Enforcing HTTPS in the browser."
  },
  {
    id: 291,
    difficulty: "hard",
    category: "Microservices",
    question: "What is a 'Compensating Transaction'?",
    options: [
      "Paying the developer more money",
      "A transaction that undoes the effects of a previous committed transaction when a later part of a distributed workflow fails",
      "A way to calculate taxes",
      "A backup of the database"
    ],
    answer: 1,
    explanation: "In a Saga pattern, if the 'Payment' succeeds but 'Shipping' fails, you run a 'Compensating' transaction to 'Refund' the payment.",
    hint: "Undoing a step in a distributed process."
  },
  {
    id: 292,
    difficulty: "medium",
    category: "C# Language",
    question: "What are 'File-scoped Namespaces' (C# 10)?",
    options: [
      "Namespaces that only work in one folder",
      "A simplified syntax: 'namespace MyName;' that applies to the whole file and removes a set of curly braces and indentation",
      "A way to hide namespaces",
      "A tool to rename files"
    ],
    answer: 1,
    explanation: "It reduces horizontal whitespace and makes the code cleaner by removing unnecessary nesting.",
    hint: "Namespace without curly braces."
  },
  {
    id: 293,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What are 'Owned Entity Types' in EF Core?",
    options: [
      "Entities that have a physical owner",
      "Entities that do not have their own identity and only appear as properties of other entity types (Value Objects in DDD)",
      "Entities that cannot be deleted",
      "Entities owned by the database"
    ],
    answer: 1,
    explanation: "Commonly used for Address or Money objects. In the database, their columns are usually flattened into the same table as the owner.",
    hint: "EF Core implementation of Value Objects."
  },
  {
    id: 294,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Endpoint Routing'?",
    options: [
      "Routing the internet to the server",
      "The system introduced in ASP.NET Core 3.0 that decouples route matching from the execution of the final action (like a Controller method)",
      "A way to name APIs",
      "A hardware setting for the router"
    ],
    answer: 1,
    explanation: "It allows middleware (like Authorization or CORS) to know which endpoint will be executed before the actual execution happens.",
    hint: "Modern routing system."
  },
  {
    id: 295,
    difficulty: "hard",
    category: "Azure",
    question: "Which Azure Cosmos DB Consistency Level offers the lowest latency but the weakest consistency?",
    options: ["Strong", "Bounded Staleness", "Session", "Eventual"],
    answer: 3,
    explanation: "Eventual consistency allows for the fastest performance because it doesn't wait for all replicas to be synchronized.",
    hint: "Fastest, least accurate."
  },
  {
    id: 296,
    difficulty: "medium",
    category: "C# Language",
    question: "What are 'List Patterns' in C# 11?",
    options: [
      "A way to draw patterns on a list",
      "The ability to match an array or list against a pattern of elements (e.g., 'if (numbers is [1, 2, ..])')",
      "A new type of loop",
      "A way to sort lists"
    ],
    answer: 1,
    explanation: "List patterns allow you to easily check the length and specific elements of a collection using pattern matching syntax.",
    hint: "Pattern matching for collections."
  },
  {
    id: 297,
    difficulty: "hard",
    category: "Blazor",
    question: "Which Blazor lifecycle method is the correct place to perform JavaScript Interop calls that require a rendered DOM?",
    options: ["OnInitialized", "OnParametersSet", "OnAfterRender", "Dispose"],
    answer: 2,
    explanation: "OnAfterRender (or OnAfterRenderAsync) is the only method guaranteed to run after the HTML has been generated and the browser has the elements.",
    hint: "Runs after the UI is visible."
  },
  {
    id: 298,
    difficulty: "medium",
    category: "Performance",
    question: "What is a 'WeakReference' in .NET?",
    options: [
      "A reference that is not very strong",
      "A reference that allows the Garbage Collector to collect the object even if the reference still exists",
      "A reference to a deleted object",
      "A way to name variables"
    ],
    answer: 1,
    explanation: "Useful for caches where you want to keep an object if memory is plentiful, but you don't want to prevent it from being cleaned up if memory is low.",
    hint: "Reference that doesn't block GC."
  },
  {
    id: 299,
    difficulty: "hard",
    category: "Architecture",
    question: "What is an 'Anti-Corruption Layer' (ACL)?",
    options: [
      "A layer that stops code from rotting",
      "A translation layer between a new system and a legacy/external system to prevent the legacy model from 'polluting' the new domain",
      "A security firewall",
      "A way to encrypt the database"
    ],
    answer: 1,
    explanation: "The ACL ensures that the new system's clean model doesn't have to change because of the quirks of an old, 'corrupt' system.",
    hint: "Translation layer for clean domains."
  },
  {
    id: 300,
    difficulty: "medium",
    category: "Security",
    question: "What are 'OAuth 2.0 Scopes'?",
    options: [
      "A type of telescope",
      "Permissions that define the specific resources and operations an application is allowed to access on behalf of a user",
      "The range of a variable",
      "A way to see who is logged in"
    ],
    answer: 1,
    explanation: "Common examples include 'openid', 'profile', and 'email'. They limit the 'scope' of what the token can be used for.",
    hint: "Granular token permissions."
  },
  /* ======================================================
   .NET & C# MASTER QUESTION BANK (Batch 7/7)
   Topics: Runtime Internals, Distributed Systems, C# 12+
   ====================================================== */
  {
    id: 301,
    difficulty: "hard",
    category: "C# Language",
    question: "What is the 'Primary Constructor' feature introduced for regular classes in C# 12?",
    options: [
      "The first constructor written in the file",
      "Syntax allowing parameters to be defined directly in the class declaration, available throughout the class body",
      "A constructor that cannot be overloaded",
      "A way to initialize static fields only"
    ],
    answer: 1,
    explanation: "Primary constructors allow you to capture parameters at the class level, reducing boilerplate for dependency injection and property initialization.",
    hint: "Parameters defined next to the class name."
  },
  {
    id: 302,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is the purpose of 'Minimal APIs' in ASP.NET Core?",
    options: [
      "To write as little code as possible",
      "A streamlined approach to building HTTP APIs with less ceremony than traditional Controller-based approaches",
      "APIs that only work on small mobile devices",
      "APIs that have no security"
    ],
    answer: 1,
    explanation: "Minimal APIs use 'MapGet', 'MapPost', etc., in Program.cs, making them ideal for microservices and small, focused endpoints.",
    hint: "MapGet instead of Controllers."
  },
  {
    id: 303,
    difficulty: "hard",
    category: "Architecture",
    question: "What is the 'Saga Pattern' used for in Distributed Systems?",
    options: [
      "To tell a long story about the code",
      "To manage data consistency across multiple microservices in a distributed transaction without using 2PC (Two-Phase Commit)",
      "A type of database indexing",
      "A way to design user interfaces"
    ],
    answer: 1,
    explanation: "A Saga is a sequence of local transactions. If one fails, the Saga executes compensating transactions to undo the preceding successful ones.",
    hint: "Distributed transaction management."
  },
  {
    id: 304,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'Native AOT' (Ahead-Of-Time) compilation in .NET 7/8?",
    options: [
      "Compiling code while it is running",
      "Compiling C# code directly into a self-contained native executable that doesn't require a separate .NET runtime installed",
      "A way to run C# on a calculator",
      "A type of JIT compiler"
    ],
    answer: 1,
    explanation: "Native AOT results in faster startup times and lower memory footprint, which is excellent for serverless and containerized workloads.",
    hint: "No JIT, just native machine code."
  },
  {
    id: 305,
    difficulty: "hard",
    category: "C# Language",
    question: "What does the 'unmanaged' constraint do in a generic type definition?",
    options: [
      "Allows the class to be deleted by anyone",
      "Restricts the type to be a non-nullable value type that does not contain any reference types at any level of nesting",
      "Allows the use of pointers in safe code",
      "Forces the user to manage memory manually"
    ],
    answer: 1,
    explanation: "Unmanaged types are compatible with 'stackalloc' and can be directly manipulated as blocks of bytes in memory.",
    hint: "Deeply nested value types only."
  },
  {
    id: 306,
    difficulty: "medium",
    category: "Security",
    question: "What is 'Data Protection API' (DPAPI) in ASP.NET Core?",
    options: [
      "A way to lock the computer",
      "A cryptographic API used to protect data at rest, such as session cookies and CSRF tokens",
      "A tool to hide source code",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "It provides a simple way to encrypt and decrypt data without requiring the developer to be a cryptography expert.",
    hint: "Cookie and Token encryption."
  },
  {
    id: 307,
    difficulty: "hard",
    category: "Internals",
    question: "What is 'Tiered Compilation' in the .NET JIT?",
    options: [
      "A way to organize code into tiers",
      "The process where the JIT first compiles code quickly (Tier 0) and then re-optimizes 'hot' methods later (Tier 1)",
      "A way to run code on different servers",
      "A type of multi-threading"
    ],
    answer: 1,
    explanation: "Tiered compilation balances startup speed with long-term execution performance by identifying which methods benefit most from deep optimization.",
    hint: "Quick JIT followed by Deep JIT."
  },
  {
    id: 308,
    difficulty: "medium",
    category: "Azure",
    question: "What is the primary benefit of 'Azure SignalR Service' over self-hosting SignalR?",
    options: [
      "It makes the UI look better",
      "It offloads the management of persistent WebSocket connections to a fully managed service, allowing the app to scale more easily",
      "It is cheaper for small apps",
      "It provides a database"
    ],
    answer: 1,
    explanation: "Self-hosting SignalR requires sticky sessions and consumes many server resources for maintaining open connections; the Azure service handles this externally.",
    hint: "Managed real-time scaling."
  },
  {
    id: 309,
    difficulty: "hard",
    category: "Design Patterns",
    question: "Which pattern uses a 'Registry' to keep track of all available objects of a certain type, often to avoid re-creating them?",
    options: ["Flyweight", "Prototype", "Multiton", "Object Pool"],
    answer: 2,
    explanation: "The Multiton pattern is like a Singleton, but it maintains a map of instances (one per key) rather than just a single instance.",
    hint: "Singleton with multiple named instances."
  },
  {
    id: 310,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Health Checks' middleware?",
    options: [
      "A way to check the health of the developer",
      "An endpoint (/health) that reports the status of the application and its dependencies (DB, Redis) to monitoring tools",
      "A tool to find bugs in the code",
      "A type of unit test"
    ],
    answer: 1,
    explanation: "Orchestrators like Kubernetes use these endpoints to determine if a container should be restarted or if it is ready to receive traffic.",
    hint: "App status reporting."
  },
  {
    id: 311,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'CQRS' with 'Event Sourcing'?",
    options: [
      "A way to write SQL queries",
      "A pattern where state is not stored as a single row, but as a sequence of all events that have ever happened to that object",
      "A type of database backup",
      "A way to sync two different databases"
    ],
    answer: 1,
    explanation: "Instead of storing 'Balance = 100', you store 'Deposited 50', 'Deposited 50'. This provides a perfect audit log and the ability to reconstruct state at any point in time.",
    hint: "State as a stream of events."
  },
  {
    id: 312,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'as' operator used for?",
    options: [
      "To name a variable",
      "To perform a safe type conversion; it returns null if the conversion fails instead of throwing an exception",
      "To create a copy of a class",
      "To compare two strings"
    ],
    answer: 1,
    explanation: "Example: 'var user = obj as User;'. If obj is not a User, 'user' becomes null.",
    hint: "Safe casting."
  },
  {
    id: 313,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'ArrayPool<T>.Shared.Rent(int minimumLength)'?",
    options: [
      "Buying an array from a store",
      "A way to obtain a reusable array buffer from the system-wide shared pool to avoid heap allocations",
      "A way to share arrays between users",
      "A way to lock an array"
    ],
    answer: 1,
    explanation: "After using the array, you must call 'Return()' so the buffer can be reused by other parts of the application.",
    hint: "Buffer recycling."
  },
  {
    id: 314,
    difficulty: "medium",
    category: "Security",
    question: "What is 'IdentityServer'?",
    options: [
      "A server that checks your ID card",
      "An OpenID Connect and OAuth 2.0 framework for ASP.NET Core used to implement Single Sign-On (SSO) and API security",
      "A database of user names",
      "A way to name your servers"
    ],
    answer: 1,
    explanation: "It allows you to centralize authentication logic for multiple applications (Web, Mobile, API).",
    hint: "SSO framework for .NET."
  },
  {
    id: 315,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Circuit Breaker' pattern?",
    options: [
      "A physical switch in the server room",
      "A pattern that stops requests to a failing service for a period of time to allow it to recover and prevent cascading failures",
      "A way to turn off the computer",
      "A type of network cable"
    ],
    answer: 1,
    explanation: "If a downstream service is slow or failing, the 'circuit' opens and immediate errors are returned to the caller without stressing the failing service further.",
    hint: "Failing fast to allow recovery."
  },
  {
    id: 316,
    difficulty: "medium",
    category: "C# Language",
    question: "What is a 'Global Using' directive (C# 10)?",
    options: [
      "A way to use the internet everywhere",
      "A 'using' statement that applies to every file in the project, typically placed in a single file",
      "A way to share variables between projects",
      "A way to use a library without installing it"
    ],
    answer: 1,
    explanation: "Example: 'global using System.Text;'. It removes the need to repeat common namespaces in every single .cs file.",
    hint: "Project-wide namespace import."
  },
  {
    id: 317,
    difficulty: "hard",
    category: "ORM (EF Core)",
    question: "What is 'Compiled Queries' in EF Core?",
    options: [
      "Queries that are pre-written in SQL",
      "A feature that allows you to pre-compile the translation from LINQ to SQL once and reuse it for better performance",
      "Queries that only work on Windows",
      "A way to encrypt queries"
    ],
    answer: 1,
    explanation: "Useful for frequently executed queries where the overhead of LINQ-to-SQL translation is noticeable.",
    hint: "Cached LINQ-to-SQL translation."
  },
  {
    id: 318,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Hot Reload' in Visual Studio?",
    options: [
      "The computer getting too warm",
      "A feature that allows you to see code changes in the running app immediately without restarting the debugging session",
      "A way to reload a web page",
      "A tool to update the OS"
    ],
    answer: 1,
    explanation: "Hot Reload modifies the running binary in memory, significantly speeding up the development feedback loop.",
    hint: "Code updates without restarts."
  },
  {
    id: 319,
    difficulty: "hard",
    category: "Internals",
    question: "What is the 'Large Object Heap' (LOH) threshold?",
    options: ["1 MB", "85,000 bytes", "10,000 bytes", "Unlimited"],
    answer: 1,
    explanation: "Objects larger than 85,000 bytes are typically placed on the LOH, which is not compacted as often as the small object heap, potentially causing fragmentation.",
    hint: "The 85k limit."
  },
  {
    id: 320,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'is' operator used for (Pattern Matching)?",
    options: [
      "To check if a variable exists",
      "To check if an object is compatible with a given type and optionally assign it to a new variable",
      "To compare two numbers",
      "To delete an object"
    ],
    answer: 1,
    explanation: "Example: 'if (obj is string s) { Console.WriteLine(s.Length); }'.",
    hint: "Type checking and pattern matching."
  },
  {
    id: 321,
    difficulty: "hard",
    category: "Security",
    question: "What is 'Cross-Origin Resource Sharing' (CORS)?",
    options: [
      "Sharing a computer with a friend",
      "A browser security feature that restricts web pages from making requests to a different domain than the one that served the web page",
      "A way to share files on the internet",
      "A type of database encryption"
    ],
    answer: 1,
    explanation: "Servers must explicitly allow 'Origins' via headers to permit a browser-based client (like React) to call an API on a different domain.",
    hint: "Browser-level cross-domain security."
  },
  {
    id: 322,
    difficulty: "medium",
    category: "Architecture",
    question: "What is 'Dependency Injection' (DI) container?",
    options: [
      "A box to store dependencies",
      "A framework that manages the creation and lifetime of objects and their dependencies automatically",
      "A way to connect to a database",
      "A type of unit test"
    ],
    answer: 1,
    explanation: "ASP.NET Core has a built-in container that supports Transient, Scoped, and Singleton lifetimes.",
    hint: "Object lifecycle manager."
  },
  {
    id: 323,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Backends for Frontends' (BFF) pattern?",
    options: [
      "A pattern for matching clothes",
      "An architecture where separate backend services are created specifically for different client types (e.g., one for Mobile, one for Web)",
      "A way to connect two databases",
      "A type of UI design"
    ],
    answer: 1,
    explanation: "The BFF acts as an aggregator tailored to the specific needs of a UI, reducing the number of calls the mobile app has to make.",
    hint: "Custom API for specific clients."
  },
  {
    id: 324,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'CompressionLevel.Optimal' in .NET?",
    options: [
      "A setting for the computer's speed",
      "A setting for Gzip/Brotli that prioritizes maximum compression size over the speed of the compression process",
      "A way to compress images",
      "A type of database index"
    ],
    answer: 1,
    explanation: "Use this when bandwidth is expensive or limited, and you don't mind spending extra CPU cycles to get the smallest file possible.",
    hint: "Size over speed."
  },
  {
    id: 325,
    difficulty: "hard",
    category: "C# Language",
    question: "What is a 'Function Pointer' in C#?",
    options: [
      "A cursor that points at a function",
      "A low-level C#-compatible way to store the memory address of a function, used for extreme performance or native interop",
      "A comment that explains a function",
      "A way to name a function"
    ],
    answer: 1,
    explanation: "Introduced in C# 9, function pointers (using the 'delegate*' syntax) allow for indirect method calls without the overhead of a delegate object.",
    hint: "Raw memory address of code."
  },
  {
    id: 326,
    difficulty: "medium",
    category: "Testing",
    question: "What is the difference between a 'Unit Test' and an 'Integration Test'?",
    options: [
      "Unit tests are for one person; Integration tests are for a team",
      "Unit tests test small parts of code in isolation; Integration tests test how multiple parts or external systems work together",
      "Unit tests are written in C#; Integration tests are written in SQL",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Unit tests are fast and use mocks; Integration tests are slower and usually involve real databases or APIs.",
    hint: "Isolation vs Collaboration."
  },
  {
    id: 327,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Inversion of Control' (IoC)?",
    options: [
      "Turning the computer upside down",
      "A design principle where the control of object creation and program flow is transferred to a framework or container",
      "A way to write faster code",
      "A security feature"
    ],
    answer: 1,
    explanation: "DI is a specific implementation of the broader IoC principle. It 'inverts' who is responsible for creating a class's dependencies.",
    hint: "Don't call us, we'll call you."
  },
  {
    id: 328,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'var' keyword?",
    options: [
      "A way to create a dynamic variable",
      "Implicit typing where the compiler determines the type of the variable based on the value assigned to it",
      "A way to name a variable 'var'",
      "A tool to change types at runtime"
    ],
    answer: 1,
    explanation: "It is still strongly typed; the compiler just 'fills in' the type for you at compile-time.",
    hint: "Implicit typing."
  },
  {
    id: 329,
    difficulty: "hard",
    category: "Internals",
    question: "What is 'ReadyToRun' (R2R) deployment?",
    options: [
      "Code that is ready to be deleted",
      "A form of AOT compilation that speeds up application startup by pre-compiling assemblies into native code for a specific platform",
      "A way to run code on a phone",
      "A tool for deployment scripts"
    ],
    answer: 1,
    explanation: "R2R assemblies contain both the IL code and a native version, allowing the app to start quickly while maintaining cross-version compatibility.",
    hint: "Pre-compiled native code in DLLs."
  },
  {
    id: 330,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'Middleware' in ASP.NET Core?",
    options: [
      "Software that is in the middle of the computer",
      "Components that are assembled into an application pipeline to handle requests and responses",
      "A way to connect to a database",
      "A type of CSS framework"
    ],
    answer: 1,
    explanation: "Each component can choose to pass the request to the next component in the pipeline or return a response immediately (short-circuiting).",
    hint: "The request/response pipeline."
  },
  {
    id: 331,
    difficulty: "hard",
    category: "Security",
    question: "What is 'OAuth 2.0 Client Credentials Grant'?",
    options: [
      "A way to log in with a username",
      "A flow used for machine-to-machine communication where there is no 'user' involved, only two services communicating",
      "A way to share passwords",
      "A security feature for Wi-Fi"
    ],
    answer: 1,
    explanation: "A service provides its Client ID and Secret to an identity provider to get a token to call another API.",
    hint: "Machine-to-Machine auth."
  },
  {
    id: 332,
    difficulty: "medium",
    category: "C# Language",
    question: "What is 'Pattern Matching' in a switch statement?",
    options: [
      "Matching colors in the UI",
      "The ability to test variables against types and specific values in a concise way (e.g., case int i when i > 0)",
      "A way to find text in a file",
      "A type of loop"
    ],
    answer: 1,
    explanation: "Modern C# (7.0+) allows switching on types and using logical conditions within case labels.",
    hint: "Advanced 'switch' logic."
  },
  {
    id: 333,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Data Sharding'?",
    options: [
      "Breaking a database into small pieces",
      "A horizontal scaling strategy where data is distributed across multiple independent database instances based on a shard key",
      "A way to encrypt data",
      "A type of database backup"
    ],
    answer: 1,
    explanation: "This allows you to scale the database beyond the limits of a single server by spreading the load.",
    hint: "Horizontal database partitioning."
  },
  {
    id: 334,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'Inlining' by the JIT compiler?",
    options: [
      "Putting code in a single line",
      "A performance optimization where the JIT replaces a method call with the actual body of the method to reduce overhead",
      "A way to write faster loops",
      "A type of database indexing"
    ],
    answer: 1,
    explanation: "Inlining removes the cost of pushing arguments onto the stack and jumping to a new memory address.",
    hint: "Removing method call overhead."
  },
  {
    id: 335,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Duck Typing' in C# 'await'?",
    options: [
      "Waiting for a duck to fly",
      "The compiler allows you to 'await' any object that has a 'GetAwaiter' method, even if it doesn't implement a specific interface",
      "A way to name variables",
      "A type of async loop"
    ],
    answer: 1,
    explanation: "This is why you can await 'Task', 'ValueTask', or even your own custom types if you provide the GetAwaiter pattern.",
    hint: "Pattern-based 'await'."
  },
  {
    id: 336,
    difficulty: "medium",
    category: "Testing",
    question: "What is 'Snapshot Testing' (e.g., using Verify or Snapper)?",
    options: [
      "Taking a photo of the code",
      "A testing technique where you compare the current output of a component/API against a 'gold standard' saved file",
      "A way to test the UI",
      "A type of performance test"
    ],
    answer: 1,
    explanation: "If the output changes, the test fails, and you must either fix the bug or update the 'snapshot'. Great for large JSON or HTML responses.",
    hint: "Comparing output against a file."
  },
  {
    id: 337,
    difficulty: "hard",
    category: "Internals",
    question: "What is 'Write Barrier' in the .NET GC?",
    options: [
      "A wall that stops writing",
      "A small piece of code executed when an object reference is updated, used to help the GC track cross-generational references",
      "A security feature for files",
      "A way to stop memory leaks"
    ],
    answer: 1,
    explanation: "Write barriers are essential for Generational GC to know if a Gen 2 object now points to a Gen 0 object.",
    hint: "Tracking object reference updates."
  },
  {
    id: 338,
    difficulty: "medium",
    category: "C# Language",
    question: "What is the 'yield' keyword used for?",
    options: [
      "To stop the program",
      "To create an iterator block, allowing you to return elements of a collection one at a time (lazy evaluation)",
      "To wait for a task",
      "To yield to another thread"
    ],
    answer: 1,
    explanation: "It allows for stateful iteration without creating a temporary list in memory.",
    hint: "Lazy collection generation."
  },
  {
    id: 339,
    difficulty: "hard",
    category: "Microservices",
    question: "What is a 'Service Mesh' (e.g., Istio, Linkerd)?",
    options: [
      "A net for catching services",
      "A dedicated infrastructure layer for handling service-to-service communication, including security, traffic management, and observability",
      "A type of database",
      "A way to name microservices"
    ],
    answer: 1,
    explanation: "It usually uses 'sidecar' proxies to manage networking logic outside of the application code.",
    hint: "Infrastructure for service networking."
  },
  {
    id: 340,
    difficulty: "medium",
    category: "Security",
    question: "What is 'Salt' in password hashing?",
    options: [
      "A seasoning for food",
      "A unique, random string added to a password before hashing to prevent rainbow table attacks",
      "A way to encrypt passwords",
      "A security certificate"
    ],
    answer: 1,
    explanation: "Even if two users have the same password, their hashes will be different if they have different salts.",
    hint: "Randomizing password hashes."
  },
  {
    id: 341,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Covariance' in C# generics (out T)?",
    options: [
      "A type of virus",
      "The ability to use a more derived type than originally specified (e.g., assigning IEnumerable<string> to IEnumerable<object>)",
      "A way to share variables",
      "A type of database index"
    ],
    answer: 1,
    explanation: "Covariance is safe for 'read-only' interfaces because you can always treat a String as an Object.",
    hint: "Using a child type as a parent type."
  },
  {
    id: 342,
    difficulty: "medium",
    category: "Architecture",
    question: "What is 'Statelessness' in REST APIs?",
    options: [
      "An API that has no states",
      "The principle that each request from a client must contain all the information needed to process it, and the server stores no session data",
      "An API that is always offline",
      "A type of database design"
    ],
    answer: 1,
    explanation: "Statelessness makes APIs easier to scale because any server can handle any request.",
    hint: "No server-side session memory."
  },
  {
    id: 343,
    difficulty: "hard",
    category: "Performance",
    question: "What is the 'Pinned Object Heap' (POH)?",
    options: [
      "A heap for pins",
      "A specialized heap introduced in .NET 5 for objects that are pinned (unmovable) to prevent fragmentation in other heaps",
      "A way to lock variables",
      "A tool for debugging"
    ],
    answer: 1,
    explanation: "Pinned objects (used in interop) prevent the GC from compacting memory. Placing them in the POH keeps the regular heaps efficient.",
    hint: "Heap for unmovable objects."
  },
  {
    id: 344,
    difficulty: "medium",
    category: "C# Language",
    question: "What is a 'Tuple' in C#?",
    options: [
      "A type of instrument",
      "A lightweight data structure that provides an easy way to group multiple data elements (e.g., (int, string))",
      "A way to name a class",
      "A type of loop"
    ],
    answer: 1,
    explanation: "ValueTuples (introduced in C# 7) are efficient and allow for returning multiple values from a method without an 'out' parameter.",
    hint: "Grouping data without a class."
  },
  {
    id: 345,
    difficulty: "hard",
    category: "Internals",
    question: "What is the 'Method Table' in the .NET runtime?",
    options: [
      "A table of methods in a file",
      "A data structure in memory that contains information about a type's methods, used for virtual method dispatch",
      "A way to name methods",
      "A type of database table"
    ],
    answer: 1,
    explanation: "Every object in .NET has a pointer to its Method Table, which is how the runtime knows which code to execute for a virtual call.",
    hint: "Runtime type information."
  },
  {
    id: 346,
    difficulty: "medium",
    category: "ASP.NET Core",
    question: "What is 'AutoMapper'?",
    options: [
      "A tool to map the world",
      "A popular library used to automatically copy data from one object type to another (e.g., from an Entity to a DTO)",
      "A way to map database tables",
      "A tool for GPS"
    ],
    answer: 1,
    explanation: "It reduces the amount of 'manual mapping' code (e.g., dto.Name = entity.Name).",
    hint: "Object-to-Object mapping."
  },
  {
    id: 347,
    difficulty: "hard",
    category: "Architecture",
    question: "What is 'Domain-Driven Design' (DDD)?",
    options: [
      "Designing domains for websites",
      "An approach to software development that focuses on complex business logic and creating a model that matches the real-world business 'domain'",
      "A way to name files",
      "A type of database schema"
    ],
    answer: 1,
    explanation: "DDD introduces concepts like Bounded Contexts, Aggregates, and Ubiquitous Language to help developers and business experts communicate.",
    hint: "Business-centric software design."
  },
  {
    id: 348,
    difficulty: "medium",
    category: "Security",
    question: "What is 'Brute Force' protection?",
    options: [
      "A physical shield for the server",
      "Mechanisms like account lockout or rate limiting that prevent attackers from guessing passwords by trying many combinations",
      "A way to encrypt hard drives",
      "A type of unit test"
    ],
    answer: 1,
    explanation: "It stops an attacker from making 10,000 login attempts per minute.",
    hint: "Stopping automated password guessing."
  },
  {
    id: 349,
    difficulty: "hard",
    category: "C# Language",
    question: "What is 'Contravariance' in C# generics (in T)?",
    options: [
      "A way to share variables",
      "The ability to use a less derived (parent) type than originally specified (e.g., assigning IComparer<object> to IComparer<string>)",
      "A type of virus",
      "A way to rename classes"
    ],
    answer: 1,
    explanation: "Contravariance is safe for 'input' parameters because if a method can compare any two Objects, it can certainly compare two Strings.",
    hint: "Using a parent type as a child type."
  },
  {
    id: 350,
    difficulty: "hard",
    category: "Architecture",
    question: "What is the 'Clean Architecture' (by Robert C. Martin)?",
    options: [
      "Architecture that is easy to read",
      "A design pattern that emphasizes the separation of concerns by keeping business rules at the center and making them independent of frameworks and UI",
      "A way to clean the server",
      "A type of CSS framework"
    ],
    answer: 1,
    explanation: "It uses 'dependency inversion' to ensure that the core logic never depends on the database or the web framework.",
    hint: "Business logic is the center of the universe."
  },
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Practical .NET Core Middleware, C# Memory Management, and EF Core Performance.
const hotsQuestions = [
    // 1. C# Language & Memory Management (Value vs Ref, Span<T>, GC) - 20 indices
    0, 2, 4, 10, 15, 20, 25, 45, 50, 55, 
    60, 65, 70, 75, 80, 85, 301, 325, 348, 349,

    // 2. .NET Core & ASP.NET Core (DI, Middleware, Options Pattern) - 20 indices
    1, 3, 5, 8, 9, 12, 13, 14, 110, 115, 
    120, 125, 130, 135, 140, 145, 150, 155, 160, 165,

    // 3. Concurrency & Asynchronous Programming (Async/Await, TPL) - 15 indices
    21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 
    170, 175, 180, 185, 190,

    // 4. Data Access & EF Core (Tracking, Migrations, Interceptors) - 15 indices
    33, 34, 36, 37, 38, 39, 41, 42, 200, 210, 
    220, 230, 240, 250, 260,

    // 5. Performance, Security & Web API (JWT, CORS, Rate Limiting) - 15 indices
    43, 44, 46, 47, 48, 49, 270, 275, 280, 285, 
    290, 295, 300, 310, 315,

    // 6. Architecture & Patterns (Clean Arch, SOLID, Microservices) - 15 indices
    350, 330, 335, 340, 345, 100, 105, 90, 95, 51, 
    52, 53, 54, 56, 57
];
