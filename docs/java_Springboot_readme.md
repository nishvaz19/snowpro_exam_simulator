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
list.stream()
    .filter(x -> x > 10)
    .map(x -> x * 2)
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

# 🎯 Final Interview One-Liner

> “I design Spring Boot applications using layered architecture, secure APIs with JWT-based Spring Security, handle errors via `@ControllerAdvice`, optimize JPA with LAZY loading and custom queries, and solve performance issues like N+1 using fetch joins.”

