/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    return 1 / (myPow(x, -n))
  }
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n === 2) {
    return x * x;
  }
  if (n % 2 === 0) {
    return myPow(myPow(x, n / 2), 2);
  }
  return x * myPow(myPow(x, (n - 1) / 2), 2);
};