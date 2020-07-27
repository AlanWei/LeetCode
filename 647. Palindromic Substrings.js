/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    count += 1;
    var ind = 1;
    while (i - ind >= 0 && i + ind < s.length) {
      if (s.charAt(i - ind) === s.charAt(i + ind)) {
        count += 1;
      } else {
        break;
      }
      ind++;
    }
    var ind = 1;
    if (i < s.length - 1 && s.charAt(i) === s.charAt(i + 1)) {
      count += 1;
      while (i - ind >= 0 && i + 1 + ind < s.length) {
        if (s.charAt(i - ind) === s.charAt(i + 1 + ind)) {
          count += 1;
        } else {
          break;
        }
        ind++;
      }
    }
  }

  return count;
};
