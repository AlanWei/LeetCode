/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSubArr = nums[0];
  let maxSubArr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];

    currentSubArr = Math.max(cur, currentSubArr + cur);
    maxSubArr = Math.max(currentSubArr, maxSubArr);
  }

  return maxSubArr;
};
