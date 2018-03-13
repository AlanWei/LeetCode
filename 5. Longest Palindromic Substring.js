/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  s = s.split("");
  if (s.length < 2) {
    return s.join("");
  }

  let max = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i - j] !== s[i + j]) {
        const part = s.slice(i - j + 1, i + j);
        if (part.length > max.length) {
          max = part;
        }
        break;
      }
      if (i - j === 0) {
        const part = s.slice(0, i + j + 1);
        if (part.length > max.length) {
          max = part;
        }
      }
    }
    for (let j = 0; j <= i; j++) {
      if (s[i - j] !== s[i + j + 1]) {
        const part = s.slice(i - j + 1, i + j + 1);
        if (part.length > max.length) {
          max = part;
        }
        break;
      }
      if (i - j === 0) {
        const part = s.slice(0, i + j + 2);
        if (part.length > max.length) {
          max = part;
        }
      }
    }
  }

  return max.join("");
};