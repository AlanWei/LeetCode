/**
 * Implement regular expression matching with support for '.' and '*'.
 */
/**
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s.length > 0 && p.length === 0) {
    return false;
  }
  const dp = [[true]];
  for (let i = 0; i < p.length; i++) {
    dp[0][i + 1] = p.charAt(i) === '*' && dp[0][i - 1];
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (dp[i + 1] === undefined) {
        dp[i + 1] = [];
      }
      if (p.charAt(j) === '.' || p.charAt(j) === s.charAt(i)) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p.charAt(j) === '*') {
        if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
        }
      }
    }
  }

  return dp[s.length][p.length] === undefined ? false : dp[s.length][p.length];
};

console.log(isMatch("a", ""));
console.log(isMatch("aa", "a"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("aaa", "aaaa"));
console.log(isMatch("", ".*"));
console.log(isMatch("", ""));