/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var isAnagram = function(a, b) {
  for (var i = 0; i < a.length; i++) {
    var idx = b.indexOf(a.charAt(i));
    if (idx === -1) {
      return false;
    }
    b = b.substring(0, idx).concat(b.substring(idx + 1));
  }

  return true;
}

var findAnagrams = function (s, p) {
  var res = [];
  var cache = [];
  var sLength = s.length;
  var pLength = p.length;
  for (var i = 0; i <= sLength - pLength; i++) {
    var cur = s.charAt(i);
    if (p.indexOf(cur) !== - 1) {
      var subStr = s.substr(i, pLength);
      if (cache.indexOf(subStr) === -1) {
        if (isAnagram(subStr, p)) {
          res.push(i);
          cache.push(subStr);
        }
      } else {
        res.push(i);
      }
    }
  }

  return res;
};
