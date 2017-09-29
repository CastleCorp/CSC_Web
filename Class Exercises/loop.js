var number = prompt("Enter a number or Q to quit")
var values = []

while(true) {
	if(number.toLowerCase() == "q") {
		if(values.length > 0) {
			alert("Smallest number is " + Math.min.apply(null, values) + " Largest number is " + Math.max.apply(null, values))
		} else {
			alert("No values entered")
		}
		break
	}
	if(!isNaN(number)) {
		values.push(number)
	} else {
		alert("Unrecognized input: " + number)
	}
	number = prompt("Enter a number or Q to quit")
}