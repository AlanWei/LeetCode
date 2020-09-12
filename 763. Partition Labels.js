/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const last = [];

  for (var i = 0; i < S.length; i++) {
    last[S.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  var j = 0;
  var anchor = 0;
  var res = [];

  for (var i = 0; i < S.length; i++) {
    j = Math.max(j, last[S.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === j) {
      res.push(i - anchor + 1);
      anchor = i + 1;
    }
  }

  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));
console.log(partitionLabels("caedbdedda"));
