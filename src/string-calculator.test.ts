import { add } from './string-calculator';

test('should throw an exception for negative numbers', () => {
  expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
});

test('should show all negative numbers in the exception message', () => {
  expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
});
