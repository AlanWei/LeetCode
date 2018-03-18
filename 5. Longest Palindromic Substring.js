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
// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// var longestPalindrome = function(s) {
//   const map = {};
//   return s.split("").reduce((max, char, idx) => {
//     if (map[char] === undefined) {
//       map[char] = [idx];
//       const substr = s.substring(idx, idx + 1);
//       if (substr.length > max.length) {
//         return substr;
//       }
//       return max;
//     }
//     const matchArr = map[char];
//     for (let i = 0; i < matchArr.length; i++) {
//       const substr = s.substring(matchArr[i], idx + 1);
//       if (substr.length > max.length) {
//         if (isPalindrome(substr)) {
//           matchArr.push(idx);
//           return substr;
//         }
//       }
//     }
//     matchArr.push(idx);
//     return max;
//   }, "");
// };