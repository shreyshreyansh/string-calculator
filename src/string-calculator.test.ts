import { add } from './string-calculator';

test('should return 1 for the string "1"', () => {
  expect(add('1')).toBe(1);
});
