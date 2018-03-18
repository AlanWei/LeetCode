/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * Hints:
 * Keep a map to record largest index of each number.
 * Keep a pointer to record current non-repeating index on the left.
 * Use Array.reduce to record temp longest substring length.
 * Compare the length between current number and non-repeating index on the left and temp longest substring length.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let left = 0;
  return s.split('').reduce((max, num, idx) => {
    left = map[num] >= left ? map[num] + 1 : left;
    map[num] = idx;

    return Math.max(max, idx - left + 1);
  }, 0);
};

// var lengthOfLongestSubstring = function(s) {
//     const chars = s.split('');
//     let longest = [];
//     if (chars.length === 0) {
//         return 0;
//     }
//     let tempLongest = [];
//     for (let i = 0; i < chars.length; i++) {
//         longest = [chars[i]];
//         for (let j = i + 1; j < chars.length; j++) {
//             if (longest.indexOf(chars[j]) === -1) {
//                 longest.push(chars[j]);
//             } else {
//                 break;
//             }
//         }
//         if (longest.length > tempLongest.length) {
//             tempLongest = longest;
//         }
//         longest = [];
//         const remain = chars.length - (i + 1);
//         if (tempLongest.length >= remain) {
//             break;
//         }
//     }

//     return tempLongest.length;
// };