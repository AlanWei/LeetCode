/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length < 1) {
    return -1;
  }
  let peak = nums[0];
  let peakIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > peak) {
      peak = nums[i];
      peakIndex = i;
    }
  }

  return peakIndex;
};

console.log(findPeakElement([1, 2, 3, 1]));