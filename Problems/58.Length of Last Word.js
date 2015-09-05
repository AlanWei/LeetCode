/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

	s = s.trim();

	var length = s.length;

	for (var i = length - 1; i >= 0; i--) {
		if (s.charAt(i) === " ") {
			return length - 1 - i;
		}
	}

	return length;
};