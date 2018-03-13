/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}

var letterCombinations = function(digits) {
  const arr = digits.split("");
  const arrays = [];
  for (let i = 0; i < arr.length; i++) {
    arrays.push(map[arr[i]]);
  }

  return merge(arrays, []);
};

function merge(arrs, merged) {
  if (arrs.length === 0) {
    return merged;
  }
  merged = combine(merged, arrs[0]);
  arrs.shift();
  return merge(arrs, merged);
}

function combine(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  const ro = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      ro.push(`${arr1[i]}${arr2[j]}`);
    }
  }

  return ro;
}