// var binary_search = function (nums, l, r, x) {
//   while (r >= l && r < nums.length) {
//     var mid = (l + r) / 2;
//     if (nums[mid] >= x) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }

//   return l;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  var count = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      var a = nums[i];
      var b = nums[j];
      var max = a + b;
      var min = Math.abs(a - b);
      for (var k = j + 1; k < nums.length; k++) {
        if (nums[k] < max && nums[k] > min) {
          count++;
        }
      }
    }
  }

  return count;
};

console.log(triangleNumber([2, 2, 3, 4]));
console.log(triangleNumber([1, 1, 3, 4]));
