/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
  let numLeft = nums[0];
  for (let i = 1; i < nums.length; i++) {
    numLeft--;
    if (numLeft < 0) {
      return false;
    }
    // if (nums[i] + i >= nums.length - 1) {
    //   return true;
    // }
    numLeft = Math.max(nums[i], numLeft);
  }

  return numLeft >= 0;
};