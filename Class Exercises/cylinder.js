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

cylinder.radius = prompt("Enter radius: ");
cylinder.height = prompt("Enter height: ");

var cArea = cylinder.calculateSurfaceArea();
var cVolume = cylinder.calculateVolume();
var radius = cylinder.radius;
var height = cylinder.height;

alert("Radius is " + radius + " Height is " + height + "\nVolume is " + cVolume + "\nSurface Area is " + cArea);
