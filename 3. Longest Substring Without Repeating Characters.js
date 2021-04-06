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

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let right = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = s.charAt(i);
    const substr = s.substring(left, right);
    const leftIndex = substr.indexOf(cur);
    if (leftIndex !== -1) {
      longest = Math.max(right - left, longest);
      left += leftIndex + 1;
    }
    right++;
  }

  return Math.max(right - left, longest);
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("aab"));
