const { count } = require('console');
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'employees.txt'), 'utf8', (err, data) => {
  console.log('Begin reading file...');
  if (err) throw err;

  console.log('Processing data...');
  const processedEmployees = processData(data);

  console.log('Detecting duplicates...');
  const duplicateEmployees = detectDuplicates(processedEmployees);

  console.log('Analyzing departments...');
  const departmentEmployees = groupEmployeesByDepartment(processedEmployees);

  console.log('Calculating average salaries...');
  const departmentAverageSalaries = calculateDepartmentAverageSalaries(processedEmployees);

  console.log('Determining highest paid employee...');
  const highestPaidEmployee = findHighestPaidEmployee(processedEmployees);

  console.log('Generating report...');
  const report = generateReport(
    departmentEmployees,
    departmentAverageSalaries,
    highestPaidEmployee,
    duplicateEmployees
  );

  fs.writeFile(path.join(__dirname, 'files', 'employee_report.txt'), report, (err) => {
    if (err) throw err;
    console.log('Finished writing file.');
  });
});

function processData(data) {
  const splitData = data.split(/\r?\n/);
  const employees = [];

  for (const line of splitData) {
    const lineArr = line.trim().split(',');
    employees.push(
      {
        'name': lineArr[0],
        'department': lineArr[1],
        'salary': parseInt(lineArr[2])
      }
    );
  }

  return employees;
}

const detectDuplicates = processedEmployees => {
  const empByKeys = new Map();
  const duplicates = [];

  for (const emp of processedEmployees) {
    const key = `${emp.name}|${emp.department}|${emp.salary}`;

    if (empByKeys.has(key)) {
      empByKeys.get(key).count++;
    } else {
      empByKeys.set(key, { employee: emp, count: 1 });
    }
  }

  for (const { employee, count } of empByKeys.values()) {
    if (count > 1) {
      duplicates.push(employee);
    }
  }

  return duplicates;
}

const groupEmployeesByDepartment = (data) => {
  const departmentEmployees = {};

  for (const emp of data) {
    (departmentEmployees[emp.department] ??= []).push({ name: emp.name, salary: emp.salary });
  }

  return departmentEmployees
}

const calculateDepartmentAverageSalaries = (data) => {
  const averageSalaries = new Map();

  for (const emp of data) {
    const current = averageSalaries.get(emp.department) ?? { salary: 0, count: 0 };
    averageSalaries.set(emp.department, {
      salary: current.salary + (emp.salary ?? 0), count: current.count + 1
    });
  }

  for (const [key, val] of averageSalaries) {
    averageSalaries.set(key, (val.salary / val.count).toFixed(2));
  }

  return averageSalaries;
}

const findHighestPaidEmployee = (data) => {
  const highestPaid = { name: '', salary: 0 };

  for (const emp of data) {
    if (emp.salary > highestPaid.salary) {
      highestPaid.name = emp.name;
      highestPaid.salary = emp.salary;
      highestPaid.department = emp.department;
    }
  }

  return highestPaid;
}

const generateReport = (depEmp, depAvgSal, highSal, dupEmp) => {
  let reportStr = `Employee Report

  ***WARNING***
  Duplicate employee found! Review data and re-run if necessary!
  --------------------------------------------------------------
  `;

  for (const emp of dupEmp) {
    reportStr += `${emp.name} - ${emp.department} - ${emp.salary}`;
  }

  reportStr += `\n
  Highest Paid Employee
  ---------------------
  ${highSal.name} - ${highSal.department} - ${highSal.salary}
  `;

  reportStr += `\n
  Employees by Department
  ---------------------`

  for (const [department, employee] of Object.entries(depEmp)) {
    reportStr += `\n  ${department}`
    for (const emp of employee) {
      reportStr += `\n  - ${emp.name}: ${emp.salary}`
    }
    reportStr += `\n`;
  }

  reportStr += `\n
  Department Salary Average
  -------------------------`
  for (const [key, val] of depAvgSal) {
    reportStr += `\n  ${key}: ${val}`
  }

  return reportStr;
}