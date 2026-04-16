# 🚀 Java Spring Boot Interview & Coding Prep README

### 📘 Quick Reference (LeetCode + Microservices + REST APIs)

This guide helps you **switch fast between coding problems and real-world backend design**, just like interviewers expect.

---

# 🧠 0. Mental Model (Always Start Here)

```
Input → Controller → Service → Repository → DB
              ↓
        Exception / Validation / Security (Cross-cutting)
```

💡 **Interview Insight**

* Think in **layers + separation of concerns**
* Always mention:

  * **Time Complexity (O(n))**
  * **Transaction boundaries (`@Transactional`)**

---

# ⚡ 1. Java Core (LeetCode / HackerRank)

## 🔑 Collections → When to Use

| Structure       | Use Case               | Complexity |
| --------------- | ---------------------- | ---------- |
| `HashMap`       | Fast lookup            | O(1)       |
| `HashSet`       | Unique elements        | O(1)       |
| `ArrayList`     | Index-based access     | O(1) read  |
| `LinkedList`    | Frequent insert/delete | O(1) head  |
| `PriorityQueue` | Top K / Heap problems  | O(log n)   |
| `TreeMap`       | Sorted keys            | O(log n)   |

---

## 🔥 Patterns (HIGH PROBABILITY)

| Problem Type    | Keywords                |
| --------------- | ----------------------- |
| Two Sum         | `HashMap`               |
| Sliding Window  | `Deque`, `two pointers` |
| Top K           | `PriorityQueue`         |
| DFS/BFS         | `Stack`, `Queue`        |
| Merge Intervals | `sort + iterate`        |

---

## ⚡ Strings & Optimization

* `StringBuilder` → avoid immutability cost
* `char[]` → in-place ops
* `BigDecimal` → financial precision

---

## Streams (Modern Java)

```java
import java.util.*;
import java.util.stream.*;

list.stream()
    .filter(x -> x > 10)
    .map(x -> x * 2)
    .collect(Collectors.toList());

// concat two lists with distinct elements
List<Integer> list1 = Arrays.asList(1, 2, 3, 4);
List<Integer> list2 = Arrays.asList(3, 4, 5, 6);

List<Integer> result =        Stream.concat(list1.stream(),      list2.stream())
.distinct()
.collect(Collectors.toList());
System.out.println(result); // Output: [1, 2, 3, 4, 5, 6]

//OR collect to a Set

Set<Integer> uniqueResult = Stream.concat(list1.stream(), list2.stream())
     .collect(Collectors.toSet());

// for custom objects
List<Employee> result = Stream.of(list1, list2)
.flatMap(List::stream)
.collect(Collectors.toMap(Employee::getId, 
     emp -> emp, 
   (existing, replacement) -> existing // Merge function
    )).values().stream()
.collect(Collectors.toList());

```

💡 Say: **"functional + readable but avoid in tight loops"**

---

# 🏗️ 2. Spring Boot Architecture (Core)

## 🔑 Stereotypes (DI)

* `@RestController` → API layer
* `@Service` → business logic
* `@Repository` → DB access
* `@Component` → generic bean

---

## ⚙️ Dependency Injection

* `@Autowired` (constructor preferred)
* `@Qualifier` → multiple beans
* `@Primary` → default bean

💡 **Interview Tip**

> Prefer **constructor injection** → testability + immutability

---

# 🌐 3. REST API Design

## 🔑 Mappings

* `@GetMapping`
* `@PostMapping`
* `@PutMapping`
* `@DeleteMapping`

---

## 🎯 Best Practice Pattern

```java
@GetMapping("/{id}")
public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
    return ResponseEntity.ok(service.getUser(id));
}
```

💡 Say:

* **DTO layer (never expose entity)**
* **Proper HTTP status codes**

---

# 🧩 4. JPA & Database (CRITICAL)

## 🔑 Entity Basics

```java
@Entity
@Table(name = "users")
class User {
    @Id @GeneratedValue
    private Long id;
}
```

---

## 🔗 Relationships (Clue-Based)

### `@ManyToOne` (VERY COMMON)

```java
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_id")
private User user;
```

💡 **Clues Interviewers Expect**

* Many orders → one user
* Default = **EAGER (danger)** → say **use LAZY**
* Avoid **N+1 problem** → use `fetch join`

---

## 📦 Repositories

```java
interface UserRepo extends JpaRepository<User, Long> {
    List<User> findByName(String name);
}
```

---

## 🔥 Custom Query (Must Know)

```java
@Query("SELECT u FROM User u WHERE u.email = :email")
Optional<User> findByEmail(@Param("email") String email);
```

💡 Say:

* JPQL vs Native
* Use when **derived query is insufficient**

---

# 🔐 5. Global Authentication (Clue Version)

## 🎯 What to Say in Interviews

**Keywords:**

* Spring Security
* JWT (stateless auth)
* Filter chain

---

## 🔥 Flow (IMPORTANT)

```
Request → JWT Filter → SecurityContext → Controller
```

---

## 🧩 Minimal Clue Code

```java
@EnableWebSecurity
class SecurityConfig {

    protected void configure(HttpSecurity http) throws Exception {
        http
          .csrf().disable()
          .authorizeRequests()
          .anyRequest().authenticated();
    }
}
```

💡 Add:

* Use **JWT instead of session**
* Store user in **SecurityContextHolder**

---

# 🚨 6. Global Exception Handling (VERY HIGH SIGNAL)

## 🔑 Pattern

```java
@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleNotFound() {
        return ResponseEntity.status(404).body("Not found");
    }
}
```

---

## 🎯 What to Say

* Centralized error handling
* Clean controllers
* Custom error response structure

---

# ✅ 7. Validation Layer

```java
public ResponseEntity<?> create(@Valid @RequestBody UserDto dto)
```

DTO:

```java
@NotNull
@Size(min = 3)
private String name;
```

💡 Say:

* Validation happens **before controller logic**
* Combine with `@ControllerAdvice`

---

# ⚡ 8. Concurrency & Async

## 🔑 Core Java

* `ExecutorService`
* `CompletableFuture`
* `synchronized`, `volatile`

---

## Spring Async

```java
@Async
public CompletableFuture<String> process() {
    return CompletableFuture.completedFuture("done");
}
```

💡 Say:

* Non-blocking APIs
* Improves throughput

---

# 🌍 9. Microservices Concepts

## 🔑 Must-Say Keywords

* API Gateway
* Service Discovery (Eureka)
* Circuit Breaker (Resilience4j)
* Config Server

---

## 🔥 Feign Client

```java
@FeignClient(name = "user-service")
interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable Long id);
}
```

---

# 🧠 10. High-Probability Scenarios

## 🧩 Scenario → Answer Pattern

**"Slow DB calls?"**
→ Use **pagination + indexing**

---

**"Too many queries?"**
→ **N+1 problem → fetch join**

---

**"Secure APIs?"**
→ **JWT + Spring Security filter**

---

**"Handle all exceptions?"**
→ `@ControllerAdvice`

---

**"Complex query?"**
→ `@Query` or **Specification API**

---

# 📎 Appendix: Rapid Recall Cheat Sheet

## ⚡ Java

```
HashMap → O(1)
Heap → PriorityQueue
String → StringBuilder
Streams → map/filter/reduce
```

---

## ⚡ Spring Boot

```
@Controller → API
@Service → logic
@Repository → DB
@Autowired → DI
```

---

## ⚡ JPA

```
@Entity → table
@ManyToOne → foreign key
LAZY → performance
@Query → custom logic
```

---

## ⚡ REST

```
GET → read
POST → create
PUT → update
DELETE → remove
```

---

## ⚡ Exception + Validation

```
@ControllerAdvice → global errors
@ExceptionHandler → specific error
@Valid → input validation
```

---

## ⚡ Security

```
JWT → stateless auth
Filter → request interception
SecurityContext → user info
```
---

# 📎 Appendix: .NET vs Java (Spring Ecosystem) Design & Architecture Patterns

## 🔹 A. Top Design Patterns (GoF)

| Pattern       | .NET Implementation                                    | Java (Spring) Implementation                          | Key Idea                                    |
| ------------- | ------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------- |
| **Singleton** | Built-in DI (`AddSingleton`)                           | Spring Beans (`@Bean`, `@Scope("singleton")`)         | One shared instance (e.g., logging, config) |
| **Factory**   | Interfaces + DI / factory delegates                    | Factory classes / `BeanFactory`, `ApplicationContext` | Encapsulate object creation                 |
| **Strategy**  | Inject multiple implementations via DI                 | `@Qualifier`, `@Primary`                              | Swap algorithms dynamically                 |
| **Observer**  | `event`, delegates, Reactive Extensions                | Event listeners, `ApplicationEventPublisher`          | Publish–subscribe model                     |
| **Decorator** | Middleware, service wrappers (logging, caching)        | Wrappers, Spring AOP proxies                          | Add behavior dynamically                    |
| **Builder**   | Fluent APIs (`StringBuilder`, `WebApplicationBuilder`) | Builder classes / Lombok `@Builder`                   | Step-by-step object construction            |

---

## 🔹 B. Essential Architectural Patterns

| Pattern                        | .NET Approach                            | Java (Spring) Approach                | Goal                                  |
| ------------------------------ | ---------------------------------------- | ------------------------------------- | ------------------------------------- |
| **Dependency Injection (DI)**  | Built-in container (core feature)        | Spring IoC container                  | Loose coupling, testability           |
| **Repository + Unit of Work**  | Entity Framework Core                    | Spring Data JPA / Hibernate           | Abstract data access + transactions   |
| **CQRS**                       | MediatR + separation of commands/queries | Spring Boot + messaging (e.g., Kafka) | Scale reads vs writes independently   |
| **Mediator**                   | MediatR                                  | Service layer / messaging brokers     | Reduce component coupling             |
| **Clean / Onion Architecture** | Widely adopted in enterprise apps        | Modular Spring Boot design            | Domain-centric, framework-independent |

---

## 🔹 C. Specialized & Emerging Patterns

| Pattern                         | .NET Approach                            | Java (Spring) Approach                     | Goal                     |
| ------------------------------- | ---------------------------------------- | ------------------------------------------ | ------------------------ |
| **Result Pattern**              | `Result<T>` (custom, avoids exceptions)  | `Optional`, Vavr `Either`, custom wrappers | Explicit error handling  |
| **Options / Configuration**     | `IOptions<T>` (strongly typed config)    | `@ConfigurationProperties`                 | Structured configuration |
| **Vertical Slice Architecture** | Feature-based structure (CQRS + MediatR) | Feature modules in Spring Boot             | Organize by feature      |

---

## 🔹 D. Pattern Mapping Cheat Sheet

| Concept                   | .NET Equivalent              | Java Equivalent                |
| ------------------------- | ---------------------------- | ------------------------------ |
| DI Container              | Built-in                     | Spring IoC                     |
| ORM                       | Entity Framework Core        | Hibernate / JPA                |
| Messaging / Events        | MediatR / Azure Service Bus  | Kafka / RabbitMQ               |
| Config Management         | `appsettings.json` + Options | `application.yml` / properties |
| Middleware / Interceptors | ASP.NET Middleware           | Spring AOP / Filters           |

---

## 🔹 E. Modern Development Shift

```text
Traditional:
Manual Pattern Implementation (Factories, Singletons, etc.)

Modern:
Framework-Integrated Patterns (DI container, AOP, annotations)
```

---

## 🔹 F. Architectural Priorities Today

* **Separation of Concerns**

  * Clean Architecture / Onion Architecture
* **Scalability**

  * CQRS + Event-driven systems
* **Maintainability**

  * Dependency Injection + modular design
* **Observability**

  * Logging, tracing, metrics integrated via middleware/AOP
* **Cloud-Native Readiness**

  * Microservices, containers, service meshes

---

## 🔹 G. Summary Insight

> Both .NET and Java converge on the same architectural principles, but differ in **developer experience**:

* **.NET**

  * Opinionated, batteries-included
  * Faster setup, less boilerplate

* **Java (Spring)**

  * Highly flexible, ecosystem-driven
  * More configuration, but extremely extensible

---

# 🎯 Final Interview One-Liner

> “I design Spring Boot applications using layered architecture, secure APIs with JWT-based Spring Security, handle errors via `@ControllerAdvice`, optimize JPA with LAZY loading and custom queries, and solve performance issues like N+1 using fetch joins.”

