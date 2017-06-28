/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function equal(first, second, target) {
  return first + second === target;
}

var twoSum = function(nums, target) {
  const length = nums.length;
  for (let i=0; i<length; i++) {
    const remain = length - i;
    for (let j=1; j<remain; j++) {
      if (equal(nums[i], nums[i+j], target)) {
        return [i, i+j];
      }
    }
  }
};
