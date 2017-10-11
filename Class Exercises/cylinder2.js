var cylinder = {
	radius: 0, 
	height: 0,
	calculateSurfaceArea: function() {
		var area = 2 * Math.PI * this.radius * this.height + 2 * Math.PI * Math.pow(this.radius, 2);
		return area.toFixed(4);
	},
	calculateVolume: function() {
		var volume = Math.PI * Math.pow(this.radius, 2) * this.height;
		return volume.toFixed(4);
	}
}

var form = document.getElementById("form");

form.onsubmit = function(event) {
	event.preventDefault();
	return false;
}

var radiusInput = document.getElementById("radiusInput");
var heightInput = document.getElementById("heightInput");

var calculateButton = document.getElementById("calculateButton");
var resetButton = document.getElementById("resetButton");

var volumeInput = document.getElementById("volumeInput");
var surfaceAreaInput = document.getElementById("surfaceAreaInput");

var error = document.getElementById("errorMessage");

function validateForm() {
	if(radiusInput.value === "0" || heightInput.value === "0") {
		error.classList.remove("hidden");
		return false;
	} else {
		if(!error.classList.contains("hidden")) {
			error.classList.add("hidden");
			return true;
		}
	}
}

calculateButton.addEventListener("click", function() {
	if(!validateForm()) {
		return false;
	}
	cylinder.radius = radiusInput.value;
	cylinder.height = heightInput.value;

	volumeInput.value = cylinder.calculateVolume();
	surfaceAreaInput.value = cylinder.calculateSurfaceArea();
});

resetButton.addEventListener("click", function() {
	cylinder.radius = 0;
	cylinder.height = 0;

	radiusInput.value = 0;
	heightInput.value = 0;

	volumeInput.value = "";
	surfaceAreaInput.value = "";
});