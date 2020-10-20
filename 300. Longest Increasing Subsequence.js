/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  var len = nums.length;
  var memo = new Array(len).fill(0).map(() => new Array(len).fill(-1));

  var helper = function (nums, prev, cur) {
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
  };

  return helper(nums, -1, 0);
};

// dp solution
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  var dp = new Array(nums.length).fill(1);
  var maxAns = 1;

  for (let i = 0; i < dp.length; i++) {
    var longest = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        longest = Math.max(longest, dp[j]);
      }
      dp[i] = longest + 1;
      maxAns = Math.max(maxAns, dp[i]);
    }
  }

  return maxAns;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));
 