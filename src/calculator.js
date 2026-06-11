#!/usr/bin/env node

/**
 * CLI Calculator
 * Supported operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (*)
 *  - Division (/)
 *  - Modulo (%)
 *  - Exponentiation (pow, ^)
 *  - Square root (sqrt)
 *
 * Exports a reusable module API and also provides a simple CLI entrypoint.
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

function mod(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function pow(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  if (a < 0) throw new Error('Square root of negative number');
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, mod, pow, sqrt };

// CLI entrypoint
if (require.main === module) {
  const argv = process.argv.slice(2);
  const op = argv[0];

  if (!op) {
    console.error('Usage: node src/calculator.js <operation> <args...>');
    console.error('Operations: add | +, subtract | -, multiply | *, divide | /, mod | %, pow | ^, sqrt');
    process.exit(1);
  }

  try {
    let result;
    switch (op) {
      case 'add':
      case '+': {
        if (argv.length < 3) throw new Error('add requires two arguments');
        const a = toNumber(argv[1]);
        const b = toNumber(argv[2]);
        result = add(a, b);
        break;
      }
      case 'subtract':
      case '-': {
        if (argv.length < 3) throw new Error('subtract requires two arguments');
        const a = toNumber(argv[1]);
        const b = toNumber(argv[2]);
        result = subtract(a, b);
        break;
      }
      case 'multiply':
      case '*':
      case 'x':
      case 'X': {
        if (argv.length < 3) throw new Error('multiply requires two arguments');
        const a = toNumber(argv[1]);
        const b = toNumber(argv[2]);
        result = multiply(a, b);
        break;
      }
      case 'divide':
      case '/':
      case '÷': {
        if (argv.length < 3) throw new Error('divide requires two arguments');
        const a = toNumber(argv[1]);
        const b = toNumber(argv[2]);
        result = divide(a, b);
        break;
      }
      case 'mod':
      case '%': {
        if (argv.length < 3) throw new Error('mod requires two arguments');
        const a = toNumber(argv[1]);
        const b = toNumber(argv[2]);
        result = mod(a, b);
        break;
      }
      case 'pow':
      case '^': {
        if (argv.length < 3) throw new Error('pow requires two arguments');
        const a = toNumber(argv[1]);
        const b = toNumber(argv[2]);
        result = pow(a, b);
        break;
      }
      case 'sqrt':
      case '√': {
        if (argv.length < 2) throw new Error('sqrt requires one argument');
        const a = toNumber(argv[1]);
        result = sqrt(a);
        break;
      }
      default:
        throw new Error(`Unknown operation: ${op}`);
    }

    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}
