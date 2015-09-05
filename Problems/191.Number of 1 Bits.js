//Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

//For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

    var s = (n >>> 0).toString(2);

    s = s.toString();

    var result = 0;

    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === "1") {
            result++;
        }
    }

    return result;
};