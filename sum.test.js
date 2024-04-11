const calculations = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(calculations.sum(1, 2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
  expect(calculations.multiply(2,2)).toBe(4)
})