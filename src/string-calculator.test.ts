import { add } from './string-calculator';

test('should support different delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
});
