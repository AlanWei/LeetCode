/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var results = {};
  var arr = [];
  for (var i = 1; i <= nums.length; i++) {
    results[i] = false;
  }
  for (var i = 0; i < nums.length; i++) {
    var cur = nums[i];
    results[cur] = true;
  }
  var keys = Object.keys(results);
  for (var i = 0; i < keys.length; i++) {
    if (!results[keys[i]]) {
      arr.push(keys[i]);
    }
  }

  return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var ro = [];
  for (var i = 0; i < nums.length; i++) {
    var index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ro.push(i + 1);
    }
  }

  return ro;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
