/**
 * @param {number[]} nums
 * @return {boolean}
 */
var helper = function (nums, idx, subSetSum, memo) {
  if (subSetSum === 0) {
    return true;
  }
  if (idx < 0 || subSetSum < 0) {
    return false;
  }

  if (memo[idx][subSetSum] !== undefined) {
    return memo[idx][subSetSum];
  }

  var result =
    helper(nums, idx - 1, subSetSum - nums[idx], memo) ||
    helper(nums, idx - 1, subSetSum, memo);

  memo[idx][subSetSum] = result;

  return result;
};

var canPartition = function (nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum % 2 !== 0) {
    return false;
  }

  var subSetSum = sum / 2;

  var sub = new Array(subSetSum + 1);
  var memo = [];

  for (var i = 0; i < nums.length + 1; i++) {
    memo[i] = sub;
  }

  return helper(nums, nums.length - 1, subSetSum, memo);
};

console.log(canPartition([1, 5, 11, 5]));
