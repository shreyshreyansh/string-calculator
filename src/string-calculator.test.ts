import { add } from './string-calculator';

test('should return 3 for the string "1,2"', () => {
  expect(add('1,2')).toBe(3);
});
