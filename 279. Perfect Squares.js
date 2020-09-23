/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  var dp = new Array(n);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    var min = 1 + dp[i - 1];
    for (let j = 2; j * j <= i; j++) {
      min = Math.min(min, 1 + dp[i - j * j]);
    }
    dp[i] = min;
  }

  return dp[n];
};
