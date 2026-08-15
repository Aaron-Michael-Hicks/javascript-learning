const fs = require('fs');
const path = require('path');

const processedData = [];
let numberOfEmployees, averageSalary, highestPaid, lowestPaid, report;

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) throw err;

  const splitData = data.split(/\r?\n/);

  for (const str of splitData) {
    tempData = str.split(',');
    processedData.push({
      name: tempData[0],
      job: tempData[1],
      salary: parseInt(tempData[2])
    });
  }

  console.log(processedData);
  
  processEmployees(processedData);

  fs.writeFile(path.join(__dirname, 'output.txt'), report, (err) => {
    if (err) throw err;
    console.log('Write complete.');
  });
});

function processEmployees(processedData) {

  numberOfEmployees = processedData.length;
  
  let totalSalary = 0;
  for (const emp of processedData) {
    totalSalary += emp.salary;
  }
  averageSalary = totalSalary / numberOfEmployees;
  console.log(numberOfEmployees);
  console.log(averageSalary);

  highestPaid = {
    name: processedData[processedData.findIndex(s => s.salary === Math.max(...processedData.map(person => person.salary)))].name,
    salary: Math.max(...processedData.map(person => person.salary))
  };
  console.log(highestPaid)

  lowestPaid = {
    name: processedData[processedData.findIndex(s => s.salary === Math.min(...processedData.map(person => person.salary)))].name,
    salary: Math.min(...processedData.map(person => person.salary))
  };
  console.log(lowestPaid)

  report = `
  Employee Report
  ==========================\n
  Total Employees: ${numberOfEmployees}
  Average Salary: ${averageSalary}\n
  Highest Paid:
  ${highestPaid.name} - ${highestPaid.salary}\n
  Lowest Paid:
  ${lowestPaid.name} - ${lowestPaid.salary}`
}
