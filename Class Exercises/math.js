var numbers = [1.9, 2.5, 3.7, 2, 1, 6, 3, 4, 5, 2];

function mean(arr) {
	var sum = 0;
	arr.forEach(function(num) {
		sum += num;
	});
	return sum / arr.length;
}

function standardDeviation(arr) {
	var arrMean = mean(arr);
	var sum = 0;
	arr.forEach(function(num, i) {
		sum += Math.pow((num - arrMean), 2);
	});

	//var squaredMean = mean(squared);
	var result = Math.sqrt(sum/(arr.length - 1));
	return result;
}

var meanResult = mean(numbers);
var deviationResult = standardDeviation(numbers);
alert(meanResult + " " + deviationResult);