/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

var findKthLargest = function (nums, k) {
  var helper = function (nums) {
    if (nums.length === 0) {
      return [];
    }
    var pivot = nums[0];
    var left = [];
    var right = [];
    for (var i = 1; i <= nums.length; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i]);
      }
      if (nums[i] > pivot) {
        right.push(nums[i]);
      }
    }

    return helper(left).concat(nums[0]).concat(helper(right));
  };

  var sort = helper(nums);

  return sort[sort.length - k];
};

var findKthLargest = function (nums, k) {
  // quickSelect 
}