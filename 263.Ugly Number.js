//Write a program to check whether a given number is an ugly number.

//Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

//Note that 1 is typically treated as an ugly number.

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {

    if (num === 1) {
        return true;
    }
    else {
        if (num <= 0) {
            return false;
        }

        if (Math.pow(2, prime(num, 2)) * Math.pow(3, prime(num, 3)) * Math.pow(5, prime(num, 5)) === num) {
            return true;
        }
        else {
            return false;
        }
    }

};

function prime(value, num) {
    var result = 0;

    while (value >= num) {
        var remain = value % num;
        if (remain === 0) {
            value = value / num;
            result++;
        }
        else{
            break;
        }
    }
    
    return result;
}