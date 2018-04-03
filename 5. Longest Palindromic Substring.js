/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 */

/**
 * Example:
 * Input: "babad"
 *  Output: "bab"
 * Note: "aba" is also a valid answer.
 */

/**
 * Hints:
 * Palindrome question could be transfered to find the middle point of a palindrome string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  let longest = 0;
  let substr = '';
  const extend = (i, j) => {
    while (i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
      i--;
      j++;
    }
    if (longest < j - i - 1) {
      longest = j - i - 1;
      substr = s.substring(i + 1, j);
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    extend(i, i);
    extend(i, i + 1);
  }

  return substr;
}

console.log(longestPalindrome("a"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("babab"));