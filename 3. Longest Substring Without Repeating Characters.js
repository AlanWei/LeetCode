/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * Hints:
 * Two pointer to record the current longest non-repeating substring.
 * If there is a duplicate char, move left pointer to the nearest non-repeating position.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let leftPointer = 0;
  let rightPointer = 0;
  let longest = 0;
  let tempIdx = 0;

  for (let i = 0; i < s.length; i++) {
    const substr = s.substring(leftPointer, rightPointer);
    const prevIdx = substr.indexOf(s.charAt(i));
    if (prevIdx !== -1) {
      longest = Math.max(longest, rightPointer - leftPointer);
      leftPointer += (prevIdx + 1);
    }
    rightPointer++;
  }

  return Math.max(longest, rightPointer - leftPointer);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring("dvdf"));