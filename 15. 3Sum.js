/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ro = [];
  const len = nums.length;
  if (len < 3) {
    return ro;
  }
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      const target = 0 - nums[i];
      let j = i + 1;
      let k = len - 1;

      while (j < k) {
        const sum = nums[j] + nums[k];
        if (sum === target) {
          ro.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k + 1]) {
            k--;
          }
        } else if (sum < target) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return ro;
};
