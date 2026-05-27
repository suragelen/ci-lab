import { describe, it, expect } from 'vitest';
import { add, reverseString, isPalindrome } from '../src/utils';

describe('utils', () => {
  it('add: складывает два числа', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('reverseString: переворачивает строку', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('isPalindrome: определяет палиндром', () => {
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });
});
