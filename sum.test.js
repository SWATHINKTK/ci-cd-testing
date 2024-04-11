const calculations = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(calculations.sum(1, 2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
  expect(calculations.multiply(2,2)).toBe(4)
})

test('subscribe 3 - 1 to equal 2', () => {
  expect(calculations.subtraction(3,1)).toBe(2)
})