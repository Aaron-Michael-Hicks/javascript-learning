# Level 2 — Employee Data Analysis

## Overview

Level 2 builds on the file-processing and report-generation concepts introduced in Level 1 while increasing the complexity of both the data analysis and the program structure.

The project processes an employee data file and generates a more comprehensive report containing duplicate detection, department-based employee grouping, department salary averages, and identification of the highest-paid employee.

This project represents a significant step forward from Level 1 by moving toward **functional decomposition**, more deliberate use of data structures, and multiple stages of data analysis.

## What It Does

The program:

1. Reads employee data from `employees.txt`
2. Parses the input into employee objects
3. Detects duplicate employee records
4. Groups employees by department
5. Calculates average salary by department
6. Identifies the highest-paid employee
7. Generates a multi-section employee report
8. Writes the report to `employee_report.txt`

Each employee is represented as an object containing:

```text
{
  name,
  department,
  salary
}
```

The generated report includes:

* Duplicate employee warnings
* Highest-paid employee
* Employees grouped by department
* Department salary averages

## Program Structure

One of the primary differences between Level 1 and Level 2 is how the problem is broken down.

Instead of performing most of the processing within a single function, Level 2 separates the work into several focused functions.

### `processData()`

Transforms the raw file contents into an array of employee objects.

### `detectDuplicates()`

Uses a `Map` to identify employees with identical name, department, and salary combinations.

### `groupEmployeesByDepartment()`

Groups employees by department and creates a structure containing the employees and their salaries for each department.

### `calculateDepartmentAverageSalaries()`

Uses a `Map` to accumulate salary totals and employee counts for each department before calculating the average.

### `findHighestPaidEmployee()`

Iterates through the processed employees to identify the employee with the highest salary.

### `generateReport()`

Combines the results of the previous processing stages into a formatted report.

This separation of responsibilities was a significant change from Level 1 and helped reinforce the value of breaking a larger problem into smaller, independently understandable pieces.

## Concepts Practiced

Compared with Level 1, this project introduced several additional JavaScript concepts and patterns:

* Functional decomposition
* Arrow functions
* `Map`
* Objects used as lookup and grouping structures
* `Object.entries()`
* Nullish coalescing (`??`)
* Template literals
* Iteration over arrays, objects, and Maps
* Data aggregation
* Duplicate detection
* Department-based grouping
* Calculating grouped averages
* Returning processed data from functions
* Passing data between focused functions
* Multi-stage data processing
* Generating multi-section reports

## Level 1 → Level 2 Progression

Level 1 focused primarily on learning the mechanics of reading, processing, and writing data with Node.js.

Level 2 takes those same fundamental concepts and introduces additional complexity:

| Level 1                    | Level 2                                         |
| -------------------------- | ----------------------------------------------- |
| Basic employee parsing     | More structured data processing                 |
| Simple statistics          | Department-level analysis                       |
| Highest/lowest salary      | Highest salary plus grouped averages            |
| Single processing function | Multiple focused functions                      |
| Basic arrays and objects   | Arrays, objects, and `Map`                      |
| Simple report              | Multi-section report                            |
| Basic file I/O             | File I/O combined with multiple analysis stages |

The progression is intentional. Both projects are preserved so that the development of my JavaScript skills can be seen over time rather than only showing the most recent implementation.

## What I Learned

The biggest lesson from this project was the value of **decomposing a problem into smaller functions with clearly defined responsibilities**.

I also gained practical experience choosing different data structures based on the problem being solved. For example, `Map` was useful for maintaining department salary calculations and tracking duplicate records, while objects worked well for grouping employees by department.

This project also gave me more exposure to modern JavaScript syntax and features that I will build upon as I transition into TypeScript.

## Looking Ahead

The next stages of this learning progression will build on these concepts while introducing increasingly sophisticated application design, testing, and tooling.

Areas I expect to explore include:

* More robust input validation and error handling
* Promises and `async`/`await`
* Automated unit and integration testing
* TypeScript
* More complex application architecture
* Browser automation with Playwright