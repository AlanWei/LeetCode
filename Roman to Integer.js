// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var length = s.length;
    var i = 0;
    var result = 0;
    
    if (length === 1){
        return roman(s);
    }
    else{
        while (i < length){
            if ( i === (length - 1)){
                result += roman(s.charAt(i));
                break;
            }
            else{
                var c1 = roman(s.charAt(i));
                var c2 = roman(s.charAt(i+1));
                
                if (compare(c1, c2)){
                    result += c1;
                    i++;
                }
                else{
                    result += (c1 - c2);
                    i = i+2;
                }
            }
        }
    }
    
    return result;
};

var roman = function(roman){
    
    switch (roman){
        
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return "Error";
    }
}

var compare = function(i1, i2){
    if (i1 >= i2){
        return true;
    }
    else{
        return false;
    }
}