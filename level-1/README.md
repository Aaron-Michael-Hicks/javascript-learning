# Level 1 — Employee Report Generator

## Overview

This was my first practical JavaScript project using **Node.js** and my first exercise working with the filesystem from JavaScript.

The goal was to build a small program that reads employee data from a text file, processes that data, calculates basic statistics, and generates a formatted employee report.

This project represents the starting point of my JavaScript progression and establishes the foundational concepts that I build upon in subsequent projects.

## What It Does

The program:

1. Reads employee data from `input.txt`
2. Parses each line into an employee object
3. Converts salary values from strings to numbers
4. Calculates the total number of employees
5. Calculates the average salary
6. Determines the highest-paid employee
7. Determines the lowest-paid employee
8. Generates a formatted report
9. Writes the report to `output.txt`

The input data follows a simple comma-separated format:

```text
Name,Job,Salary
```

The parsed data is converted into JavaScript objects containing:

```text
{
  name,
  job,
  salary
}
```

## Concepts Practiced

This project gave me practical experience with:

* JavaScript fundamentals
* Node.js
* The Node.js `fs` module
* File system operations
* Reading text files
* Writing text files
* The Node.js `path` module
* Parsing delimited data
* Arrays and objects
* `for...of` loops
* Arrow functions
* Array methods such as `map()` and `findIndex()`
* Basic data aggregation and calculations
* Template literals
* Generating formatted text output
* Asynchronous programming using callbacks

## What I Learned

This was my first experience using Node.js to interact with files rather than simply executing JavaScript in a browser environment.

One of the primary goals was learning how data moves through a simple processing pipeline:

**Input → Parse → Transform → Analyze → Generate Output**

The project also introduced me to thinking about data as JavaScript objects rather than manipulating the raw text directly.

## Looking Ahead

As my JavaScript experience develops, I expect to revisit many of these concepts using more advanced patterns and approaches.

Future projects will build on this foundation with greater emphasis on:

* More robust input validation and error handling
* Improved separation of responsibilities
* Modern asynchronous patterns such as Promises and `async`/`await`
* Automated testing
* More sophisticated data processing
* TypeScript
