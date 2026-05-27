export function add(a: number, b: number): number {
  return a + b;
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '');
  return cleaned === cleaned.split('').reverse().join('');
}
