/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function binary(nums, target, start, end) {
  const middle = Math.floor((end + start) / 2);
  const step = Math.ceil((end - start) / 2);
  if (nums[middle] === target) {
    return middle;
  }
  if (nums[middle] > target && end - start > 0) {
    return binary(nums, target, start, end - step);
  }
  if (nums[middle] < target && end - start > 0) {
    return binary(nums, target, start + step, end);
  }
  return -1;
}

var searchRange = function(nums, target) {
  const len = nums.length;
  if (len === 0) {
    return [-1, -1];
  }

  const index = binary(nums, target, 0, len - 1);
  if (index === -1) {
    return [-1, -1];
  }
  let start = index;
  let end = index;
  while (nums[start] === target) {
    start--;
  }
  while (nums[end] === target) {
    end++;
  }

  return [start + 1, end - 1];
};