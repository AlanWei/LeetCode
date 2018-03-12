/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const merged = merge(nums1, nums2);

  if (merged.length === 0) {
    return 0;
  }
  if (merged.length === 1) {
    return merged[0];
  }

  const reminder = merged.length % 2;
  if (reminder === 0) {
    return (merged[parseInt(merged.length / 2) - 1] + merged[parseInt(merged.length / 2)]) / 2;
  }

  return merged[parseInt(merged.length / 2)];
};

var merge = function(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const merged = new Array(arr1.length + arr2.length);

  for (let i = 0; i < merged.length; i++) {
    if (arr1.length === 0) {
      merged[i] = arr2.shift();
    } else if (arr2.length === 0) {
      merged[i] = arr1.shift();
    } else {
      if (arr1[0] <= arr2[0]) {
        merged[i] = arr1.shift();
      } else {
        merged[i] = arr2.shift();
      }
    }
  }

  return merged;
}