function init() {
	svg = d3.select("#vis").append('svg')
		.attr('width', 1000)
		.attr('height', 800);
	
	var dumbFunction = function() {
		var myRes = null;
		if (imageSearch.results.length != 0) {
			myRes = imageSearch.results[0].url;
				
			var image = svg.append("image")
				.attr("xlink:href", myRes)
				.attr('x', 0)
				.attr('y', 0)
				.attr('width', 50)
				.attr('height', 50)
				.attr('stroke', "green");
		}
	}
	
	var imageSearch = new google.search.ImageSearch();
	imageSearch.setSearchCompleteCallback(this, dumbFunction, null);
	imageSearch.execute("H");
}