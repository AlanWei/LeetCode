/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var g = new Array(n + 1).fill(0);
  g[0] = 1;
  g[1] = 1;

  for (var i = 2; i < n + 1; i++) {
    for (var j = 1; j < i + 1; j++) {
      g[i] += g[j - 1] * g[i - j];
    }
  }

  return g[n];
};
