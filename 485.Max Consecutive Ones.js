/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var max = 0;
  var cur = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur++;
    } else {
      if (cur > max) {
        max = cur;
      }
      cur = 0;
    }
  }

  if (max < cur) {
    max = cur;
  }

  return max;
};