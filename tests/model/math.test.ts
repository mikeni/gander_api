import { sum } from '../../src/model/math';
 
describe('sum', () => {
  test('should add two numbers and return the sum', () => {
    expect(sum(2,3)).toBe(5);
  });
});