/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var l = nums.length;
  var r = 0;

  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        r = Math.max(r, j);
        l = Math.min(l, i);
      }
    }
  }

  return r - l < 0 ? 0 : r - l + 1;
};

var findUnsortedSubarray = function (nums) {
  var l = nums.length - 1;
  var r = 0;
  var stack = [nums[0]];

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > stack[stack.length - 1]) {
      stack.push(nums[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
        stack.pop();
      }
      l = Math.min(l, stack.length);
    }
  }

  stack = [nums[nums.length - 1]];

  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] <= stack[stack.length - 1]) {
      stack.push(nums[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
        stack.pop();
      }
      r = Math.max(r, nums.length - stack.length);                                                                                                                                                  
    }
  }

  return r - l < 0 ? 0 : r - l;
};
