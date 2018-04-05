/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
  if (nums.length < 2) {
    return;
  }
  let k = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      k = i;
      break;
    }
  }
  if (k === -1) {
    nums.reverse();
    return;
  }
  let l = -1;
  for (let i = nums.length - 1; i > k; i--) {
    if (nums[i] > nums[k]) {
      l = i;
      break;
    }
  }
  const temp = nums[k];
  nums[k] = nums[l];
  nums[l] = temp;
  const remain = nums.splice(k + 1);
  nums.push(...remain.reverse());
};

nextPermutation([1, 3, 2]);
nextPermutation([2, 3, 1]);
nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([1, 1, 5]);
nextPermutation([1, 1, 5, 4, 3]);