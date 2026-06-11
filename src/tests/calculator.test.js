const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator functions', () => {
  describe('Basic operations from image', () => {
    test('2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Edge cases', () => {
    test('division by zero throws', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });

    test('works with negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(subtract(-5, -5)).toBe(0);
      expect(multiply(-3, 3)).toBe(-9);
      expect(divide(-10, 2)).toBe(-5);
    });

    test('works with floating point numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.30000000000000004);
      expect(divide(1, 4)).toBeCloseTo(0.25);
    });
  });
});
