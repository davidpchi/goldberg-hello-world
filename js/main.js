var str=[                                                                                                                                                                                       
"                                                                                                                                                                                dddddddd",
"HHHHHHHHH     HHHHHHHHH                   lllllll lllllll                       WWWWWWWW                           WWWWWWWW                                 lllllll             d::::::d",
"H:::::::H     H:::::::H                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d::::::d",
"H:::::::H     H:::::::H                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d::::::d",
"HH::::::H     H::::::HH                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d:::::d", 
"  H:::::H     H:::::H      eeeeeeeeeeee    l::::l  l::::l    ooooooooooo         W:::::W           WWWWW           W:::::W ooooooooooo   rrrrr   rrrrrrrrr   l::::l     ddddddddd:::::d", 
"  H:::::H     H:::::H    ee::::::::::::ee  l::::l  l::::l  oo:::::::::::oo        W:::::W         W:::::W         W:::::Woo:::::::::::oo r::::rrr:::::::::r  l::::l   dd::::::::::::::d", 
"  H::::::HHHHH::::::H   e::::::eeeee:::::eel::::l  l::::l o:::::::::::::::o        W:::::W       W:::::::W       W:::::Wo:::::::::::::::or:::::::::::::::::r l::::l  d::::::::::::::::d", 
"  H:::::::::::::::::H  e::::::e     e:::::el::::l  l::::l o:::::ooooo:::::o         W:::::W     W:::::::::W     W:::::W o:::::ooooo:::::orr::::::rrrrr::::::rl::::l d:::::::ddddd:::::d", 
"  H:::::::::::::::::H  e:::::::eeeee::::::el::::l  l::::l o::::o     o::::o          W:::::W   W:::::W:::::W   W:::::W  o::::o     o::::o r:::::r     r:::::rl::::l d::::::d    d:::::d", 
"  H::::::HHHHH::::::H  e:::::::::::::::::e l::::l  l::::l o::::o     o::::o           W:::::W W:::::W W:::::W W:::::W   o::::o     o::::o r:::::r     rrrrrrrl::::l d:::::d     d:::::d", 
"  H:::::H     H:::::H  e::::::eeeeeeeeeee  l::::l  l::::l o::::o     o::::o            W:::::W:::::W   W:::::W:::::W    o::::o     o::::o r:::::r            l::::l d:::::d     d:::::d", 
"  H:::::H     H:::::H  e:::::::e           l::::l  l::::l o::::o     o::::o             W:::::::::W     W:::::::::W     o::::o     o::::o r:::::r            l::::l d:::::d     d:::::d", 
"HH::::::H     H::::::HHe::::::::e         l::::::ll::::::lo:::::ooooo:::::o              W:::::::W       W:::::::W      o:::::ooooo:::::o r:::::r           l::::::ld::::::ddddd::::::dd",
"H:::::::H     H:::::::H e::::::::eeeeeeee l::::::ll::::::lo:::::::::::::::o               W:::::W         W:::::W       o:::::::::::::::o r:::::r           l::::::l d:::::::::::::::::d",
"H:::::::H     H:::::::H  ee:::::::::::::e l::::::ll::::::l oo:::::::::::oo                 W:::W           W:::W         oo:::::::::::oo  r:::::r           l::::::l  d:::::::::ddd::::d",
"HHHHHHHHH     HHHHHHHHH    eeeeeeeeeeeeee llllllllllllllll   ooooooooooo                    WWW             WWW            ooooooooooo    rrrrrrr           llllllll   ddddddddd   ddddd"];

var str2 = "Hello World";
var index = 0;

var svg;
var imgDict = {};
var imgSearchObj

function init() {
	svg = d3.select("#vis").append('svg')
		.attr('width', 1000)
		.attr('height', 800);

	for (var a = 0; a < str2.length; a++) {
		var searchTerm = str2.charAt(a);
		
		//if (searchTerm = " ")
		//	searchTerm = "white";
		runSearch(searchTerm);
	}
}

function runSearch(searchTerm) {
	var dumbFunction = function() {
	    if (imageSearch.results && imageSearch.results.length > 0) {
			var myRes = null;
			console.log(imageSearch.results);
			var searchTerm = "<b>";
			var charIndex = imageSearch.results[0].content.indexOf(searchTerm);
			var letter = imageSearch.results[0].content.charAt(charIndex+3);
			myRes = imageSearch.results[0].url;
			imgDict[letter] = myRes;
			index++;
			
			console.log(index);
			if (index == str2.length-1) 
				finish();
		}
	}
	

	var imageSearch = new google.search.ImageSearch();
	imageSearch.setSearchCompleteCallback(this, dumbFunction, null);
	imageSearch.execute(searchTerm);
}

function finish() {
	console.log("running finish");
	var xA = 0;
	var yA = 0;
	
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < str[i].length; j++) {
			var searchKey = str[i][j];
			var myImageURL = imgDict[searchKey];
			var image = svg.append("image")
				.attr("xlink:href", myImageURL)
				.attr('x', xA)
				.attr('y', yA)
				.attr('width', 10)
				.attr('height', 10)
				.attr('stroke', "green");
			xA+=10;
		}
		yA += 10;
	}
}