/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
  g = g.sort(function (a, b) {
    return a - b;
  });
  s = s.sort(function (a, b) {
    return a - b;
  });

  var gIndex = 0;
  var sIndex = 0;

  while (gIndex < g.length && sIndex < s.length) {
    if (g[gIndex] <= s[sIndex]) {
      gIndex++;
    }
    sIndex++;
  };

  return gIndex;
};

console.log(findContentChildren([1,2,3],[3]));