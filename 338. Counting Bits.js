/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var result = [0];
  var pow = 0;
  for (var i = 1; i <= num; i++) {
    if (i === 1 || Math.log(i) / Math.log(2) % 1 === 0) {
      result.push(1);
      pow = i;
    } else {
      result.push(1 + result[i - pow]);
    }
  }

  return result;
};
