/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

var findTargetSumWays = function (nums, S) {
  var count = 0;
  var helper = function (sum, i) {
    if (i === nums.length) {
      if (sum === S) {
        count++;
      }
      return;
    }
    var cur = nums[i];
    helper(sum + cur, i + 1);
    helper(sum - cur, i + 1);
  };
  helper(0, 0);

  return count;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
console.log(
  findTargetSumWays(
    [39, 9, 40, 29, 1, 41, 14, 44, 31, 22, 49, 17, 36, 37, 6, 5, 33, 23, 6, 2],
    28
  )
);
console.log(
  findTargetSumWays(
    [0, 17, 5, 0, 0, 18, 18, 28, 36, 29, 42, 4, 32, 2, 5, 31, 24, 30, 8, 6],
    27
  )
);
