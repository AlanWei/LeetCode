/**
 * @param {number} num
 * @return {string}
 */
var single = function (str, index) {
  var int = parseInt(str);
  var one = "";
  var five = "";
  var next = "";

  switch (index) {
    case 4:
      one = "M";
      break;
    case 3:
      one = "C";
      five = "D";
      next = "M";
      break;
    case 2:
      one = "X";
      five = "L";
      next = "C";
      break;
    case 1:
      one = "I";
      five = "V";
      next = "X";
      break;
    default:
      break;
  }

  if (int === 0) {
    return "";
  }

  if (int < 4) {
    var str = "";
    for (var i = 0; i < int; i++) {
      str += one;
    }
    return str;
  }

  if (int === 4) {
    return `${one}${five}`;
  }

  if (int === 5) {
    return five;
  }

  if (int < 9) {
    var str = "";
    for (var i = 5; i < int; i++) {
      str += one;
    }
    return `${five}${str}`;
  }

  if (int === 9) {
    return `${one}${next}`;
  }
};

var intToRoman = function (num) {
  var roman = "";
  var strNum = num.toString();

  for (var i = 0; i < strNum.length; i++) {
    roman += single(strNum[i], strNum.length - i);
  }

  return roman;
};
