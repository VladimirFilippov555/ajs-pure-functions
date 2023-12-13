import levelHealth from '../level';

test.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 51, 'healthy'],
  ['Маг', 50, 'wounded'],
  ['Маг', 10, 'critical'],
])('testing levelHealth function with name %s, %i health', (name, health, expected) => {
  const result = levelHealth({ name, health });
  expect(result).toBe(expected);
});
