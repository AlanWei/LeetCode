/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxProduct = nums[0];
  let max = maxProduct;
  let min = maxProduct;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      const temp = max;
      max = min;
      min = temp;
    }
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    maxProduct = Math.max(max, maxProduct);
  }

  return maxProduct;
};

console.log(maxProduct([2, 3, -2, -2]));