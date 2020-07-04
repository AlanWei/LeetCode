/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  const ro = [];

  const iterate = function(nums, current) {
    if (nums.length === 0) {
      ro.push(current);
    }
    for (var i = 0; i < nums.length; i++) {
      var newArr = nums.slice(0, i).concat(nums.slice(i + 1));
      iterate(newArr, current.concat(nums[i]));
    }
  }

  iterate(nums, []);

  return ro;
};

console.log(permute([1, 2, 3]));
