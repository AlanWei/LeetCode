/**
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(nums, i, j) {
  const temp = nums[i];

  nums[i] = nums[j];
  nums[j] = temp;
}

var sortColors = function(nums) {
  let start = 0;
  let end = nums.length - 1;

  for (let i = 0; i <= end; i++) {
    while (nums[i] === 2 && i < end) {
      swap(nums, i, end);
      end--;
    }
    while (nums[i] === 0 && i > start) {
      swap(nums, start, i);
      start++;
    }
  }
};