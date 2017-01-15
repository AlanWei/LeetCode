/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (var i=0; i<nums.length; i++) {
    if (nums[i] === 0) {
      var nextIndex = findNext(nums.slice(i, nums.length));
      nums[i] = nums[nextIndex + i];
      nums[nextIndex + i] = 0;
    }
  }

  return nums;
};

function findNext(array) {
  for (var i=0; i<array.length; i++) {
    if (array[i] !== 0) {
      return i;
    }
  }

  return 0;
}

console.log(moveZeroes([0,1,0,3,12]));