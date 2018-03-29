/**
 * @param {number[]} nums
 * @return {string}
 */

function helper(str1, str2, idx1, idx2) {
  if (str1 === str2) {
    return {
      str: str2,
      idx: idx2,
    };
  }
  if (parseInt(`${str1}${str2}`) >= parseInt(`${str2}${str1}`)) {
    return {
      str: str1,
      idx: idx1,
    };
  }
  return {
    str: str2,
    idx: idx2,
  };
}

var largestNumber = function(nums) {
  let ro = "";
  while (nums.length > 0) {
    let max = "0";
    let maxIdx = -1;
    for (let i = 0; i < nums.length; i++) {
      const { str, idx } = helper(max, nums[i].toString(), maxIdx, i);
      max = str;
      maxIdx = idx;
    }
    if (parseInt(max) === 0) {
      if (ro.charAt(0) !== "0") {
        ro += max;
      }
    } else {
      ro += max;
    }
    nums = nums.slice(0, maxIdx).concat(nums.slice(maxIdx + 1));
  }

  return ro;
};

console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([1,1,1]));
console.log(largestNumber([1,2,3,4,5,6,7,8,9, 0]));
console.log(largestNumber([0, 0]));