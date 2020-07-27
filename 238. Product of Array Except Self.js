/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var product = 1;
  var zeroCount = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      product *= nums[i];
    } else {
      zeroCount++;
    }
  }

  var res = new Array(nums.length).fill(0);
  if (zeroCount > 1) {
    return res;
  }
  if (zeroCount === 1) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        res[i] = product;
      }
    }
  }
  if (zeroCount === 0) {
    for (var i = 0; i < nums.length; i++) {
        res[i] = product / nums[i];
    }
  }

  return res;
};
