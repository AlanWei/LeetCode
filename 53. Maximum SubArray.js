/**
 * @param {number[]} nums
 * @return {number}
 */

// quick
var maxSubArray = function (nums) {
	var max = nums[0];
	var sum = 0;
	
	for (var i = 0; i<nums.length; i++){
		if (sum >= 0){
			sum += nums[i];
		}
		else{
			sum = nums[i];
		}
		
		if (sum > max){
			max = sum;
		}
	}
	
	return max;
}


// enumeration
var maxSubArray = function (nums) {
    var max = nums[0];

	for (var i = 1; i < nums.length + 1; i++) {

		var sum = arraySum(nums, i);

		if (sum > max) {
			max = sum;
		}
	}

	return max;
};

var arraySum = function (array, digits) {
    var max = array[0];

	for (var i = 0; i <= array.length - digits; i++) {

		var sum = 0;

		for (var j = 0; j < digits; j++) {
			sum += array[i + j];
		}

		if (sum > max) {
			max = sum;
		}
	}

	return max;
}