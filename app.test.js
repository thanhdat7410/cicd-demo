// app.test.js
const sum = require('./app');

test('cộng 1 + 2 phải bằng 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('cộng -5 + 10 phải bằng 5', () => {
  expect(sum(-5, 10)).toBe(5);
});