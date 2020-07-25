/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  var f = new Array(nums.length);

  f[0] = nums[0];
  f[1] = Math.max(nums[0], nums[1]);

  for (var i = 2; i < nums.length; i++) {
    f[i] = Math.max(f[i - 2] + nums[i], f[i - 1]);
  }

  return f[nums.length - 1];
};
