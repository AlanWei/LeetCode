/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  const ro = [];
  const merge = function(nums, start, end, current) {
    ro.push(current);
  
    for (let i = start; i <= end; i++) {
      current.push(nums[i]);
      merge(nums, i + 1, end, current.concat());
      current.pop();
    }
  }

  merge(nums, 0, nums.length - 1, []);

  return ro;
};