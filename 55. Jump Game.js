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
    numLeft = Math.max(nums[i], numLeft);
  }

  return numLeft >= 0;
};

var canJump = function(nums) {
  var max = 0;
  for (var i = 0; i <nums.length; i++) {
    if (max >= nums.length - 1) {
      return true;
    }
    if (i <= max) {
      var temp = i + nums[i];
      if (temp > max) {
        max = temp;
      }
    }
  }
  
  return false;
};

var canJump = function(nums) {
  var target = nums.length - 1;
  if (target <= 0 || nums[0] >= target) {
    return true;
  }
  if (nums[0] > 0) {
    for (var j = 1; j <= nums[0]; j++) {
      var res = canJump(nums.slice(j));
      if (res) {
        return true;
      }
      continue;
    }
  }
  
  return false;
};