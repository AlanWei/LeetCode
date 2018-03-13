/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
      return true;
  }
  n = n / 2;
  if (n === parseInt(n, 10)) {
      return isPowerOfTwo(n)
  }
  return false;
};
