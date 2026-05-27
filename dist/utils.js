export function add(a, b) {
    return a + b;
}
export function reverseString(str) {
    return str.split('').reverse().join('');
}
export function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '');
    return cleaned === cleaned.split('').reverse().join('');
}
