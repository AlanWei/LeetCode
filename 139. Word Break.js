/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1);
  dp.fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

// console.log(wordBreak("a", []));
console.log(wordBreak("aaaaaaa", ["aaaa","aa"]));