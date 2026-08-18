# Challenge 3 — Log Analyzer

## Difficulty

**Level 2.5 — Intermediate Node.js / JavaScript**

## Objective

Build a Node.js program that reads a server log file, analyzes the requests contained within it, and generates a summary report.

This challenge is intended to build upon previous experience with:

* Node.js file handling
* Arrays
* Objects
* Maps and Sets
* Loops
* Functions
* Data parsing
* Data validation
* Error handling
* Dynamic report generation

The program should be designed to work with different log files rather than relying on hard-coded results.

---

# Input

Create a file named:

```text
server.log
```

Each line represents one HTTP request.

The format of each valid record is:

```text
timestamp method endpoint status responseSize
```

For example:

```text
2026-08-17T10:15:23Z GET /api/users 200 143
2026-08-17T10:15:25Z GET /api/products 200 892
2026-08-17T10:15:27Z POST /api/users 201 231
2026-08-17T10:15:31Z GET /api/users/42 404 87
2026-08-17T10:15:32Z GET /api/products 500 1204
2026-08-17T10:15:35Z DELETE /api/users/15 204 0
2026-08-17T10:15:41Z GET /api/users 200 152
```

### Fields

| Field          | Description             |
| -------------- | ----------------------- |
| `timestamp`    | ISO-formatted timestamp |
| `method`       | HTTP request method     |
| `endpoint`     | Requested URL/path      |
| `status`       | HTTP status code        |
| `responseSize` | Response size in bytes  |

---

# Requirements

Create a Node.js program named:

```text
analyzeLogs.js
```

The program must read `server.log` and generate a report containing the following information.

## 1. Total Requests

Determine the total number of valid requests in the log.

Example:

```text
Total requests: 7
```

---

## 2. Requests by HTTP Method

Count how many requests were made using each HTTP method.

Example:

```text
GET: 5
POST: 1
DELETE: 1
```

The program must work regardless of which HTTP methods appear in the input file.

Do not hard-code the expected methods or counts.

---

## 3. Requests by Status Category

Group valid HTTP status codes into the following categories:

* `2xx`
* `3xx`
* `4xx`
* `5xx`

Example:

```text
2xx: 5
3xx: 0
4xx: 1
5xx: 1
```

The counts must be calculated dynamically from the input data.

---

## 4. Error Rate

Calculate the percentage of valid requests that resulted in either a `4xx` or `5xx` status.

Example:

```text
Error rate: 28.57%
```

Round the result to **two decimal places**.

---

## 5. Most Requested Endpoint

Determine which endpoint appeared most frequently in the log.

Example:

```text
Most requested endpoint: /api/users
Requests: 2
```

If multiple endpoints are tied for the highest number of requests, returning any one of the tied endpoints is acceptable.

---

## 6. Largest Response

Determine which request had the largest response size.

Example:

```text
Largest response:
Endpoint: /api/products
Size: 1204 bytes
```

---

## 7. Average Response Size

Calculate the average response size across all valid requests.

Round the result to **two decimal places**.

Example:

```text
Average response size: 386.71 bytes
```

---

# Input Validation and Error Handling

The program must be able to encounter malformed records without crashing.

For example:

```text
2026-08-17T10:15:23Z GET /api/users 200 143
INVALID LINE
2026-08-17T10:15:25Z GET /api/products 200 892
2026-08-17T10:15:27Z POST /api/users INVALID 231
2026-08-17T10:15:31Z GET /api/users/42 404 87
```

The program should:

1. Identify malformed records.
2. Skip invalid records.
3. Continue processing valid records.
4. Report how many invalid records were skipped.

Example:

```text
Invalid records skipped: 2
```

You must determine what constitutes a valid or invalid record based on the requirements.

The program should not terminate simply because one record is malformed.

---

# Dynamic Data

The program must calculate all results from the contents of `server.log`.

Do **not** hard-code expected results.

For example, this is not acceptable:

```javascript
console.log("GET: 5");
console.log("POST: 1");
console.log("DELETE: 1");
```

Instead, those values must be calculated from the input file.

The contents of `server.log` may be changed during testing, and the program should continue to produce correct results.

---

# Program Structure

Do not implement the entire application inside one large function.

Break the program into logical functions with clear responsibilities.

Possible responsibilities might include:

* Reading the log file
* Parsing individual records
* Validating records
* Analyzing the requests
* Generating the final report

The exact function names and structure are up to you.

The goal is to create a program that is reasonably easy for another developer to understand and maintain.

---

# Allowed Tools and Features

You may use:

* Node.js
* `fs`
* `path`
* Arrays
* Objects
* `Map`
* `Set`
* Loops
* Functions
* Array methods such as:

  * `map()`
  * `filter()`
  * `reduce()`
  * `find()`
  * `some()`
  * `every()`
  * etc.

You may use normal JavaScript language features as appropriate.

---

# Restrictions

Do **not** use:

* External npm packages
* Third-party log parsing libraries
* Libraries that perform the analysis for you
* Hard-coded results
* A single large function containing the entire application

The purpose of the challenge is to demonstrate your ability to design and implement the solution yourself.

---

# Additional Challenge — Efficiency

After the basic program is working, examine your solution and consider:

> **Where am I doing work that I don't actually need to do?**

For example, consider whether multiple statistics can be calculated during a single pass through the valid records instead of repeatedly iterating over the same data.

You do **not** have to produce the most optimized solution possible.

The purpose of this requirement is to begin developing an awareness of:

* Algorithmic efficiency
* Repeated work
* Time complexity
* Data structure selection
* Single-pass vs. multiple-pass approaches

Document any meaningful optimization decisions you make.

---

# Testing Requirements

Test your program with more than the original sample data.

At minimum, test scenarios involving:

* A normal log file
* An empty log file
* A single valid record
* Multiple HTTP methods
* Multiple status categories
* `4xx` and `5xx` errors
* Duplicate endpoints
* Tied most-requested endpoints
* A response size of `0`
* Malformed records
* A mixture of valid and invalid records

The program should continue operating correctly when the input changes.

---

# Deliverables

The completed project should contain at least:

```text
challenge-3/
├── analyzeLogs.js
├── server.log
├── challenge-instructions.md
└── README.md
```

Additional files may be added if they improve the project.

---

# Portfolio Goal

This project is intended to demonstrate the ability to build a small, practical Node.js application rather than simply solve an isolated syntax exercise.

A reviewer should be able to see evidence of:

* JavaScript fundamentals
* Node.js file handling
* Data parsing
* Data validation
* Error handling
* Data aggregation
* Appropriate use of data structures
* Functional decomposition
* Dynamic report generation
* Edge-case awareness
* Basic algorithmic reasoning
* Consideration of efficiency

The final implementation should be your own work and should demonstrate your current JavaScript abilities.

---

# Success Criteria

The challenge is complete when:

* [ ] `server.log` is read successfully.
* [ ] Valid records are parsed correctly.
* [ ] Invalid records do not crash the program.
* [ ] Invalid records are counted.
* [ ] Total valid requests are calculated.
* [ ] Requests are grouped by HTTP method.
* [ ] Status codes are grouped into `2xx`, `3xx`, `4xx`, and `5xx`.
* [ ] Error rate is calculated correctly.
* [ ] The most requested endpoint is identified.
* [ ] The largest response is identified.
* [ ] Average response size is calculated.
* [ ] Results are generated dynamically from the input.
* [ ] The program is divided into logical functions.
* [ ] The program has been tested against multiple input scenarios.
* [ ] The solution has been reviewed for unnecessary repeated work.
* [ ] The project includes this `challenge-instructions.md` file.
* [ ] The project includes a README explaining the implementation and any notable design decisions.

---

## Final Reminder

The objective is **not** to create the most sophisticated log analyzer possible.

The objective is to demonstrate that you can take a written specification, break it into smaller problems, choose appropriate JavaScript tools and data structures, implement the solution, test it against unexpected input, and explain the decisions you made.

Build the solution yourself. If you get stuck, document the problem and work through it rather than immediately replacing the problem-solving process with a pre-written solution.
