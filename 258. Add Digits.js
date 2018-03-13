//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//For example:

//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	var s = num.toString();
	
	var sum = sumDigits(s);

	while (sum >= 10) {
		s = sum.toString();
		sum = sumDigits(s);
	}

	return sum;
};

var sumDigits = function (value) {

	var sum = 0;
	for (var i = 0; i < value.length; i++) {
		sum += parseInt((value.charAt(i)));
	}
	
	return sum;
}