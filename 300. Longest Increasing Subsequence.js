/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  var len = nums.length;
  var memo = new Array(len)
    .fill(0)
    .map(() => new Array(len).fill(-1));

  var helper = function(nums, prev, cur) {
    if (cur === len) {
      return 0;
    }

    if (memo[prev + 1][cur] >= 0) {
      return memo[prev + 1][cur];
    }

    var taken = 0;
    if (prev < 0 || nums[cur] > nums[prev]) {
      taken = helper(nums, cur, cur + 1) + 1;
    }
    var notTaken = helper(nums, prev, cur + 1);

    memo[prev + 1][cur] = Math.max(taken, notTaken);

    return memo[prev + 1][cur];
  }

  return helper(nums, -1, 0);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));
