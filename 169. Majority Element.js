/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var existingNumbers = [];
  var result = {};
  for (var i = 0; i < nums.length; i++) {
      var cur = nums[i];
      if (existingNumbers.indexOf(nums[i]) === -1) {
          existingNumbers.push(nums[i]);
          result[nums[i]] = 1;
      } else {
          result[nums[i]] = result[nums[i]] + 1;
      }
  }
  
  var keys = Object.keys(result);
  var max = 0;
  var maxNum = 0;
  for (var j = 0; j < keys.length; j++) {
      var cur = keys[j];
      var value = result[cur];
      if (value > max) {
          max = value;
          maxNum = cur;
      }
  }
  
  return maxNum;
};