/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     const chars = s.split('');
//     let longest = [];
//     if (chars.length === 0) {
//         return 0;
//     }
//     let tempLongest = [];
//     for (let i = 0; i < chars.length; i++) {
//         longest = [chars[i]];
//         for (let j = i + 1; j < chars.length; j++) {
//             if (longest.indexOf(chars[j]) === -1) {
//                 longest.push(chars[j]);
//             } else {
//                 break;
//             }
//         }
//         if (longest.length > tempLongest.length) {
//             tempLongest = longest;
//         }
//         longest = [];
//         const remain = chars.length - (i + 1);
//         if (tempLongest.length >= remain) {
//             break;
//         }
//     }

//     return tempLongest.length;
// };

var lengthOfLongestSubstring = function(s) {
    const map = {};
    let left = 0;
    return s.split('').reduce((max, num, idx) => {
        left = map[num] >= left ? map[num] + 1: left;
        map[num] = idx;

        return Math.max(max, idx - left + 1);
    }, 0);
};