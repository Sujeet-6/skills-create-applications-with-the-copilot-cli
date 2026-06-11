#!/usr/bin/env node

/**
 * CLI Calculator
 * Supported operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (*)
 *  - Division (/)
 *
 * Exports a reusable module API and also provides a simple CLI entrypoint.
 *
 * Examples (CLI):
 *  node src/calculator.js add 2 3
 *  node src/calculator.js + 5 4
 *
 * Examples (module):
 *  const { add } = require('./src/calculator');
 *  add(1, 2) // 3
 */

function toNumber(value) {
  const n = Number(value);
  if (!isFinite(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entrypoint
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  if (!op || aRaw === undefined || bRaw === undefined) {
    console.error('Usage: node src/calculator.js <operation> <a> <b>');
    console.error('Operations: add | +, subtract | -, multiply | *, divide | /');
    process.exit(1);
  }

  let a, b;
  try {
    a = toNumber(aRaw);
    b = toNumber(bRaw);
  } catch (err) {
    console.error(err.message);
    process.exit(2);
  }

  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case '*':
      case 'x':
      case 'X':
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
      case '÷':
        result = divide(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        console.error('Supported: add | +, subtract | -, multiply | *, divide | /');
        process.exit(3);
    }

    // Print result (integer if whole, otherwise floating)
    if (Number.isInteger(result)) console.log(result);
    else console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(4);
  }
}
