/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

	if (s.length !== t.length) {
		return false;
	}

	var ss = processData(s);
	var tt = processData(t);

	for (var i = 0; i < ss.length; i++) {
		if (ss[i].char !== tt[i].char || ss[i].times !== tt[i].times) {
			return false;
		}
	}

	return true;
};

function processData(value) {
	var containChar = [];

	for (var i = 0; i < value.length; i++) {
		var temp = value[i];
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