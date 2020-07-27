/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
};

var findDuplicate = function (nums) {
  var t = nums[0];
  var h = nums[0];

  do {
    t = nums[t];
    h = nums[nums[h]];
  } while (t !== h);
  
  t = nums[0];

  while (t !== h) {
    t = nums[t];
    h = nums[h];
  }

  return t;
};
