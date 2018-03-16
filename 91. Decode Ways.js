/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
  if (!s || s[0] === '0') {
    return 0;
  }
 
  let nums = [1, 1];
  
  for (let i = 2; i <= s.length; i++) {
    let tmp;
    
    tmp = parseInt(s.substring(i - 1, i));
    
    if (tmp === 0) {
      nums[i] = 0;
    } else {
      nums[i] = nums[i - 1];
    }
    
    if (s[i - 2] !== '0') {
      tmp = parseInt(s.substring(i - 2, i));
      if(0 < tmp && tmp <= 26) {
        nums[i] += nums[i - 2];
      }
    }
  }
  
  return nums[s.length];
};

// recursion
// var numDecodings2 = function(s) {
//   let count = 0;

//   const traverse = function(str, start, end) {
//     if (end > str.length) {
//       return;
//     }
//     if (str.charAt(start) === "0") {
//       return;
//     }
//     const temp = parseInt(str.substring(start, end));
//     if (temp === 0 || temp > 26) {
//       return;
//     }

//     if (end === str.length) {
//       count++;
//       return;
//     }

//     traverse(str, end, end + 1);
//     traverse(str, end, end + 2);
//   }

//   traverse(s, 0, 1);
//   traverse(s, 0, 2);

//   return count;
// };