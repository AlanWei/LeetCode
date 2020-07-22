/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var count = 0;
  var curSum = 0;
  var prefixSum = {};
  for (var i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum === k) {
      count++;
    }
    if (prefixSum[curSum - k]) {
      count += prefixSum[curSum - k];
    }
    if (prefixSum[curSum]) {
      prefixSum[curSum] += 1;
    } else {
      prefixSum[curSum] = 1;
    }
  }

  return count;
};
