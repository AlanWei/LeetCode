/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  var map = {
    '0': 0,
  };
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    map[`${i + 1}`] = sum;
  }
  this.map = map;
  return;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.map[j + 1] - this.map[i]; 
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
