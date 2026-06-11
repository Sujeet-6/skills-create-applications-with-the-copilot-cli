// Simple test runner for src/calculator.js
const { add, subtract, multiply, divide } = require('./calculator');

const cases = [
  { expr: '2 + 3', result: add(2, 3) },
  { expr: '10 - 4', result: subtract(10, 4) },
  { expr: '45 * 2', result: multiply(45, 2) },
  { expr: '20 / 5', result: divide(20, 5) },
];

console.log('Running calculator tests:');
for (const c of cases) {
  console.log(`${c.expr} = ${c.result}`);
}
