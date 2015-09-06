/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

	var ss = decide(s);
	var tt = decide(t);

	if (ss.length !== tt.length) {
		return false;
	}
	else {
		for (var i = 0; i < ss.length; i++) {
			if (ss[i].char !== tt[i].char) {
				return false;
			}
			else if (ss[i].times !== tt[i].times) {
				return false;
			}
		}
	}

	return true;
};

function decide(s) {
	var containChar = [];

	for (var i = 0; i < s.length; i++) {
		var temp = s[i];
		var sss = false;

		for (var k = 0; k < containChar.length; k++) {
			if (containChar[k]) {
				if (containChar[k].char === temp) {
					containChar[k].times++;
					sss = true;
				}
			}
		}

        if (!sss) {
			var newIChar = {
				char: temp,
				times: 1,
			}
			containChar.push(newIChar);
        }

	}

	containChar.sort(function (a, b) {
		if (a.char > b.char) {
			return 1;
		}
		if (a.char < b.char) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});

	return containChar;
}