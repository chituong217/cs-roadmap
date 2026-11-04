# CS Roadmap Prototype — Test Infrastructure & Methodology (`TEST_INFRA.md`)

## 1. Overview & Principles

This document defines the comprehensive End-to-End (E2E) testing infrastructure, validation architecture, and test suite design for the **CS Roadmap Prototype** (specifically tailored for Year 2 Computer Science students at HCMUS preparing for the CS specialization selection).

### Guiding Principles:
1. **Opaque-Box Requirement-Driven Testing**: Tests are designed directly against functional requirements in `ORIGINAL_REQUEST.md`, architectural specifications in `PROJECT.md`, and academic standards of HCMUS Faculty of Information Technology (FIT) and international CS benchmarks (OSSU, TeachYourselfCS, CS50, MIT OCW).
2. **Progressive Testability & Graceful Transitions**: The test suite can run at any stage of project evolution (pre-M1, post-M1, post-M2), strictly validating implemented interfaces while testing transitional contracts and forward-compatible schemas.
3. **Zero Cheating & High Integrity**: No mock facades, hardcoded answers, or superficial assertions. Real curriculum graph traversals, cycle detection algorithms, JSON schema validations, and export script verifications are executed.
4. **Pedagogical Fidelity**: Ensures every learning node preserves actionable checklists, authentic free learning resources, check-for-understanding gates, and proper prerequisite order.

---

## 2. The 4-Tier Testing Methodology

The test suite in `tests/e2e-roadmap.test.mjs` is structured into 4 hierarchical testing tiers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TIER 4: REAL-WORLD SCENARIOS                    │
│   Student Journey Simulation · Resume Next Task · Prompt Generator ·   │
│                   Dual-Export Pipeline Consistency                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│              TIER 3: CROSS-TRACK PREREQUISITE DAG VALIDATION            │
│   Cycle Detection (Acyclic Graph) · Referential Integrity ·            │
│              Contiguity & Strict Topological Ordering                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                 TIER 2: BOUNDARY & CORNER CASES                        │
│   Empty State · LocalStorage Migration v1->v2 · Corrupted / Missing    │
│            Task IDs · Invalid Filter & Malicious Key Defenses          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                       TIER 1: FEATURE COVERAGE                         │
│   7 Tracks · C++ Memory/RAII Remediation · DSA Sort/Tree/Graph/DP ·    │
│   Tooling (Git/GDB/Valgrind/Linux) · HCMUS Y2S1 Courses · 5 Projects   │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Tier 1: Feature Coverage (Core Capabilities & Knowledge Base)

Tier 1 validates that the curriculum repository contains exhaustive, high-quality, and structurally sound coverage of all mandated curriculum domains:

1. **7 Tracks Architecture (Track 0 to Track 6)**:
   - When exported from `src/curriculum.js`, validates all 7 tracks (`track-0` through `track-6`), verifying metadata: `id`, `trackNumber` (0..6), `slug`, `title`, `shortTitle`, `description`, `icon`, `colorAccent`, `hcmusAlignment`, and `totalEstimatedHours > 0`.
   - Content domain verification: Confirms that curriculum tasks comprehensively cover each of the 7 thematic tracks:
     * **Track 0**: Foundations & Gap Remediation (C++ syntax, memory layout, pointers, stack/heap, RAII, rule of 0/3/5, smart pointers, STL).
     * **Track 1**: Programming & OOP (HCMUS Y2S1 OOP: 4 principles, dynamic polymorphism, vtable/vptr, virtual destructor, operator overloading, SOLID, GoF design patterns).
     * **Track 2**: Algorithms & Data Structures (DSA Core: Quicksort, Mergesort, Heapsort, BST, AVL with 4 rotations, Binary Heap, Graphs: BFS/DFS, Topo sort, Dijkstra, MST with DSU, DP: Knapsack, LIS, LCS, Edit Distance).
     * **Track 3**: Computer Systems & Networking (HCMUS Y2S1 MMT: TCP/IP 5 layers, TCP 3-way handshake, flow control, congestion control, sockets programming, message framing, CIDR subnetting, Wireshark, DNS, HTTP/1.1 vs 2 vs 3).
     * **Track 4**: Mathematical Foundations (HCMUS Y2S1 XSTK + Toán rời rạc & tổ hợp: Propositional/predicate logic, mathematical induction, recurrences, generating functions, Pigeonhole, Inclusion-Exclusion, Bayes theorem, distributions, Central Limit Theorem, MLE, hypothesis testing).
     * **Track 5**: Developer Tooling & Engineering Practice (Git CLI, branch, merge conflict, interactive rebase, stash, cherry-pick, PR workflow, GDB/LLDB, VS Code debug, ASan, Valgrind, Linux shell, POSIX pipes, CMake, CI/CD).
     * **Track 6**: CS Specialization Readiness (Database/SQL/ACID/3NF, Backend RESTful API, Machine Learning foundations, Theory of computation, Capstone project portfolio, GPA optimization strategy).

2. **C++ Memory & RAII Gap Remediation**:
   - Pointers, references, address-of operator, NULL vs nullptr vs dangling pointers.
   - Stack vs Heap memory allocations, `new`/`delete` manual management and leak risks.
   - Resource Acquisition Is Initialization (RAII) and resource lifecycle binding.
   - Smart pointers: `std::unique_ptr`, `std::make_unique`, `std::shared_ptr`, `std::move` semantics.
   - Copy semantics and Rule of Zero / Three / Five.
   - Standard Library containers: `std::vector`, `std::string`, iterators.

3. **DSA Core Gap Remediation**:
   - **Sorting Algorithms**:
     * Quicksort (partitioning, pivot selection, O(n log n) expected vs O(n²) worst-case).
     * Mergesort (divide-and-conquer, merge subroutine, stable sort guarantee).
     * Heapsort (max-heap construction, sift-down, in-place O(n log n)).
     * Elementary sorts (insertion sort invariants, selection sort, bubble sort with early exit).
   - **Tree Structures**:
     * Binary Search Tree (BST) operations: find, insert, delete (0, 1, 2 child cases).
     * Self-balancing trees: AVL tree with 4 rotations (LL, RR, LR, RL) and balance factor calculation.
     * Binary Heap / Priority Queue: sift-up, sift-down, array representation.
     * Trie: prefix retrieval, word end marking, string index optimization.
     * Traversals: Preorder, Inorder, Postorder recursive and iterative mechanisms.
   - **Graph Algorithms**:
     * Representation: Adjacency list and adjacency matrix trade-offs.
     * Traversals: BFS (shortest unweighted path via queue), DFS (connected components via stack/recursion).
     * Shortest Path: Dijkstra with priority queue on non-negative weighted graphs.
     * Cycle detection: Directed graphs (3-color DFS) and undirected graphs (parent edge tracking).
     * Minimum Spanning Tree (MST): Kruskal with Disjoint Set Union (DSU / Union-Find) and Prim.
     * Bipartite graph verification (2-coloring BFS/DFS).
   - **Dynamic Programming (DP)**:
     * Overlapping subproblems, optimal substructure, memoization (top-down) vs tabulation (bottom-up).
     * Classic problems: 0/1 Knapsack, Coin Change, Longest Common Subsequence (LCS), Edit Distance, Longest Increasing Subsequence (LIS).

4. **Practical Engineering Tooling**:
   - Git CLI: init, status, diff, commit, branch, merge, merge conflict resolution, rebase, stash, reflog, revert, pull request workflows.
   - Debuggers: GDB / LLDB / VS Code debugger, breakpoints, step into/over/out, variable watches, call stacks.
   - Memory analysis tools: AddressSanitizer (`-fsanitize=address`), UndefinedBehaviorSanitizer (`-fsanitize=undefined`), Valgrind.
   - Linux and automation: POSIX shell, pipes, redirection, process control, signals, CMake build automation.

5. **HCMUS Year 2 Semester 1 Course Alignment**:
   - OOP (CSC10003): Encapsulation, inheritance, polymorphism, virtual functions, vtable/vptr, virtual destructors, abstract classes/interfaces, operator overloading, SOLID design principles, GoF design patterns (Singleton, Factory, Strategy, Observer).
   - MMT (CSC10008): TCP/IP 5-layer model vs OSI 7 layers, TCP 3-way handshake & 4-way termination, sliding window flow control, congestion control (Slow Start, AIMD), socket programming (message framing, concurrency), CIDR subnet calculations, DNS, HTTP/1.1 vs HTTP/2, TLS/HTTPS.
   - XSTK (MTH00041): Sample spaces, conditional probability, Bayes theorem, random variables, PMF/PDF/CDF, standard distributions (Bernoulli, Binomial, Poisson, Normal), expectation/variance, Central Limit Theorem (CLT), Law of Large Numbers (LLN), hypothesis testing ($p$-value, type I/II errors).
   - Discrete Math & Combinatorics (MTH00040): Propositional and predicate logic, truth tables, proof techniques (direct, contradiction, mathematical induction), sets, relations, equivalence relations, combinatorics (permutations, combinations, Pigeonhole principle, Inclusion-Exclusion), recurrence relations, graph theory fundamentals.

6. **5 Practical Capstone Mini-Projects**:
   - Project 1: C++ Core / Library Management / Space Invaders C++ Project.
   - Project 2: Multi-threaded Web Server / POSIX Shell.
   - Project 3: Graph Routing Engine (Dijkstra / Map Router).
   - Project 4: Naive Bayes Spam Classifier / ML Pipeline.
   - Project 5: C++ DevOps Scaffold (CMake + Unit Tests + CI/CD).
   - Every project specifies concrete deliverables, unit/integration test requirements, and actionable setup steps.

7. **Automated Markdown Compiler (`scripts/export-roadmap.mjs`)**:
   - Script runs deterministically without error.
   - Emits valid, formatted `public/ROADMAP.md`.
   - Contains table of contents, edition info, all chapters, all tasks, todos, sources, and access policies.

---

### Tier 2: Boundary & Corner Cases (Defensive Robustness)

Tier 2 tests edge cases, corrupt data, security boundaries, and schema migrations:

1. **Empty Progress State**:
   - `emptyProgress()` produces clean schema: `{ version: 1, roadmapId: 'hcmus-cs', statuses: {}, lastTask: null }` (or v2 equivalent).
   - Validating empty state preserves empty statuses and null lastTask without errors.
   - Completion calculations on empty progress yield `0` done and `0%` progress.

2. **LocalStorage Migration (v1 -> v2)**:
   - Migration of existing v1 data (`khmt-roadmap.progress.v1`) to v2 (`khmt-roadmap.progress.v2`):
     * Preserves all valid task statuses (`todo`, `learning`, `done`, `deferred`).
     * Preserves `lastTask` pointer.
     * Populates v2 fields (`checkedTodos: {}`, `confidenceLevels: {}`, `activeTrackId: 'all'`).
     * Ignores obsolete/unknown task IDs without crashing.
   - Handles corrupted v1 data, non-JSON strings, nulls, and missing fields gracefully.

3. **Missing & Invalid Task IDs**:
   - `validateProgress` filters out IDs not present in curriculum `ids` list, incrementing `ignored` count and preventing state pollution.
   - `nextTask` handles situations where `lastTask` or statuses reference deleted or unknown IDs.
   - Prototype pollution defense: status keys such as `__proto__`, `constructor`, `toString` are safely handled without mutating `Object.prototype`.
   - Invalid status values (e.g. `"almost"`, `"done!"`, numbers, booleans) trigger strict validation errors.

4. **Invalid Track & Status Filters**:
   - Filtering tasks by non-existent track ID (`track-999`, `null`, `undefined`) returns an empty list without throwing runtime exceptions.
   - Search query normalization handles accented Vietnamese characters, mixed case, and regex special characters (`[`, `*`, `?`, `\`, `(`, `)`) safely.

---

### Tier 3: Cross-Track Prerequisite DAG Validation (Graph Invariants)

Tier 3 executes formal graph-theoretic algorithms on the entire curriculum network:

1. **Cycle Detection (Zero Circular Dependencies)**:
   - Evaluates all task prerequisite relationships.
   - Executes Depth-First Search with 3-color tagging (White = unvisited, Gray = visiting/in-flight, Black = visited):
     * If a Gray node is encountered during traversal, a cycle exists, and the exact cycle sequence is reported.
   - Strictly asserts: **Curriculum graph is a Directed Acyclic Graph (DAG) with 0 cycles**.

2. **Referential Integrity of Prerequisites**:
   - For every task `T` with a `prerequisites` list, every prerequisite ID `P` must exist in `tasks`.
   - Self-referencing prerequisites (`P === T.id`) are strictly forbidden.
   - Duplicate prerequisite declarations in the same task are strictly forbidden.
   - For diagnostic tasks with `reviewTargets`, all target IDs must resolve to valid tasks.

3. **Strict Topological Ordering**:
   - For every defined dependency pair `(before, after)`, `indexOf(before) < indexOf(after)` in the linear sequence.
   - Contiguity: Tasks belonging to the same chapter must be stored consecutively.
   - Global numbering: Task numbers must be sequential 3-digit strings (`001`, `002`, ..., `N`) without skips or duplications.

---

### Tier 4: Real-World Scenarios (End-to-End Workflows)

Tier 4 simulates real student usage and deployment workflows:

1. **Full Student Journey Simulation**:
   - Models a student progressing through Year 2 Semester 1:
     1. Starts with C++ memory gap remediation (`cpp-pointers`, `cpp-copy`, `cpp-smart`).
     2. Masters OOP concepts (`oop-class`, `oop-virtual`, `oop-resource`).
     3. Remedials Git and Tooling (`git-first`, `git-branch`, `tools-memory`).
     4. Conquers DSA sorting, trees, and graphs (`algo-merge`, `dsa-bst`, `graph-dijkstra`).
     5. Tackles HCMUS Y2S1 courses (MMT, XSTK, Discrete Math).
     6. Delivers capstone mini-projects.
   - Verifies state transitions, completion counts, and percent completion formulas across the journey.

2. **Resume Next Task Decision Engine**:
   - Priority 1: If an active task is marked `learning`, `nextTask` must return that specific task immediately.
   - Priority 2: If no task is `learning`, `nextTask` must return the first unfinished non-deferred task.
   - Priority 3: If an optional task is marked `deferred`, `nextTask` skips it in favor of the next required task.
   - Priority 4: When all tasks are completed (`done`), `nextTask` gracefully returns the first task or completion indicator without crashing.

3. **Pedagogical Prompt Generator (`src/learning-prompt.mjs`)**:
   - Generates customized AI tutoring prompts adhering to the `chituongedu` pedagogical specification:
     * Includes `teachingPlugin` reference (`[@chituongedu](plugin://chituongedu@workspace-shared-with-me)`).
     * Formats chat title as `Node <number>: <title>`.
     * Embeds student persona (HCMUS Year 2 CS, C++ knowledge, OOP student, DSA refresher).
     * Formats actionable todos with `+ ` prefixes.
     * Injects legal free reading materials with scope and access instructions.
     * Enforces pedagogical guidelines (check-for-understanding, step-by-step guidance, no instant code dumps).

4. **Dual-Export Pipeline Consistency**:
   - Verifies that `scripts/export-roadmap.mjs` generates `public/ROADMAP.md` matching the in-memory curriculum:
     * Task count in markdown matches `tasks.length`.
     * Chapter count in markdown matches `chapters.length`.
     * Key task headers are present and properly formatted.

---

## 3. Test Runner & Execution Guide

The test suite uses Node.js native test runner (`node:test` and `node:assert/strict`) requiring no external heavy testing frameworks.

### Running the Entire Suite:
```bash
npm test
```
*Equivalent command:*
```bash
node --test tests/*.test.mjs
```

### Running the E2E Test Suite Specifically:
```bash
node --test tests/e2e-roadmap.test.mjs
```

---

## 4. Maintenance & Extension Guidelines

1. **Adding New Tasks**:
   - Ensure the new task has a unique stable ID, at least 3 actionable `todos`, valid `kind` (`Học`, `Luyện`, `Áp dụng`), and verified free sources (HTTPS only).
   - If adding prerequisites, verify that the prerequisite tasks precede the new task in curriculum order to maintain topological validity.
2. **Updating Tracks**:
   - Always verify that all 7 tracks are preserved and track IDs match across tasks, chapters, and UI filters.
3. **Modifying Progress Schema**:
   - Update `migrateProgressV1ToV2` to ensure backward compatibility with older student backups.
