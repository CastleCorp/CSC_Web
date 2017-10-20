function jq() {
	$("a").css("color", "green");
	$("a").text("Joel");
	$("a").attr("href", "https://www.elon.edu/compsci");
};

function js() {
	var links = document.getElementsByTagName("a");
	console.log(links);
	for(var i = 0; i < links.length; i++) {
		links[i].style.color = "yellow";
		links[i].textContent = "Joel";
		links[i].setAttribute("href", "https://www.elon.edu/compsci");
	};
};