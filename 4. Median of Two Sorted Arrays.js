/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const l1 = nums1.length;
  const l2 = nums2.length;
  const median = Math.floor((l1 + l2) / 2);

  let newArr = [];
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] <= nums2[0]) {
      newArr.push(nums1.shift());
    } else {
      newArr.push(nums2.shift());
    }
    if (newArr.length === median + 1) {
      if ((l1 + l2) % 2 === 0) {
        return ((newArr[median] + newArr[median - 1]) / 2);
      }
      return newArr[median];
    }
  }
  newArr = newArr.concat(nums1);
  newArr = newArr.concat(nums2);
  if ((l1 + l2) % 2 === 0) {
    return ((newArr[median] + newArr[median - 1]) / 2);
  }
  return newArr[median];
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));