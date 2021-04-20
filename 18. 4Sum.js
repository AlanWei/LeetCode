/**
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var threeSum = function (nums, target) {
  let ro = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      const newTarget = target - nums[i];
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        if (nums[j] + nums[k] === newTarget) {
          ro.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k + 1]) {
            k--;
          }
        } else if (nums[j] + nums[k] < newTarget) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return ro;
};

var fourSum = function (nums, target) {
  let ro = [];
  if (nums.length < 4) {
    return ro;
  }

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      const newTarget = target - nums[i];
      const tempRo = threeSum(nums.slice(i + 1), newTarget);
      for (let j = 0; j < tempRo.length; j++) {
        ro.push([nums[i]].concat(...tempRo[j]));
      }
    }
  }

  return ro;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
