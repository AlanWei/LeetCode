/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  var mod = n % 4;
  if (mod !== 0) {
    return true;
  }
  return false;
};