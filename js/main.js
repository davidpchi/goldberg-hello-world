var str=[                                                                                                                                                                                       
"HHHHHHHHH     HHHHHHHHH                   LLLLLLL LLLLLLL                                               ",
"H1111111H     H1111111H                   L11111L L11111L                                               ",
"H1111111H     H1111111H                   L11111L L11111L                                               ",
"HH111111H     H111111HH                   L11111L L11111L                                               ",
"  H11111H     H11111H      EEEEEEEEEEEE    L1111L  L1111L    OOOOOOOOOOO                                ",
"  H11111H     H11111H    EE111111111111EE  L1111L  L1111L  OO11111111111OO                              ",
"  H111111HHHHH111111H   E111111EEEEE11111EEL1111L  L1111L O111111111111111O                             ",
"  H11111111111111111H  E111111E     E11111EL1111L  L1111L O11111OOOOO11111O                             ",
"  H11111111111111111H  E1111111EEEEE111111EL1111L  L1111L O1111O     O1111O                             ",
"  H111111HHHHH111111H  E11111111111111111E L1111L  L1111L O1111O     O1111O                             ",
"  H11111H     H11111H  E111111EEEEEEEEEEE  L1111L  L1111L O1111O     O1111O                             ",
"  H11111H     H11111H  E1111111E           L1111L  L1111L O1111O     O1111O                             ",
"HH111111H     H111111HHE11111111E         L111111LL111111LO11111OOOOO11111O                             ",
"H1111111H     H1111111H E11111111EEEEEEEE L111111LL111111LO111111111111111O                             ",
"H1111111H     H1111111H  EE1111111111111E L111111LL111111L OO11111111111OO                              ",
"HHHHHHHHH     HHHHHHHHH    EEEEEEEEEEEEEE LLLLLLLLLLLLLLLL   OOOOOOOOOOO                                ",
"                                                                                                        ",
"                                                                                                DDDDDDDD",
"WWWWWWWW                           WWWWWWWW                                 LLLLLLL             D111111D",
"W111111W                           W111111W                                 L11111L             D111111D",
"W111111W                           W111111W                                 L11111L             D111111D",
"W111111W                           W111111W                                 L11111L             D11111D", 
" W11111W           WWWWW           W11111W OOOOOOOOOOO   RRRRR   RRRRRRRRR   L1111L     DDDDDDDDD11111D", 
"  W11111W         W11111W         W11111WOO11111111111OO R1111RRR111111111R  L1111L   DD11111111111111D", 
"   W11111W       W1111111W       W11111WO111111111111111OR11111111111111111R L1111L  D1111111111111111D", 
"    W11111W     W111111111W     W11111W O11111OOOOO11111ORR111111RRRRR111111RL1111L D1111111DDDDD11111D", 
"     W11111W   W11111W11111W   W11111W  O1111O     O1111O R11111R     R11111RL1111L D111111D    D11111D", 
"      W11111W W11111W W11111W W11111W   O1111O     O1111O R11111R     RRRRRRRL1111L D11111D     D11111D",
"       W11111W11111W   W11111W11111W    O1111O     O1111O R11111R            L1111L D11111D     D11111D", 
"        W111111111W     W111111111W     O1111O     O1111O R11111R            L1111L D11111D     D11111D",
"         W1111111W       W1111111W      O11111OOOOO11111O R11111R           L111111LD111111DDDDD111111DD",
"          W11111W         W11111W       O111111111111111O R11111R           L111111L D11111111111111111D",
"           W111W           W111W         OO11111111111OO  R11111R           L111111L  D111111111DDD1111D",
"            WWW             WWW            OOOOOOOOOOO    RRRRRRR           LLLLLLLL   DDDDDDDDD   DDDDD"];
                                                                                                        
var str2 = "Hello World";
var index = 0;

var svg;
var imgDict = {};
var imgSearchObj;

function init() {
	svg = d3.select("#vis").append('svg')
		.attr('width', 1100)
		.attr('height', 600)
		.attr('id', "harhar");

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
			var searchTerm = "<b>";
			var charIndex = imageSearch.results[0].content.indexOf(searchTerm);
			var letter = imageSearch.results[0].content.charAt(charIndex+3);
			myRes = imageSearch.results[0].url;
			imgDict[letter] = myRes;
			index++;
			if (index == str2.length-1) {
				window.setInterval(finish,500);
			}
		}
	}
		
	var imageSearch = new google.search.ImageSearch();
	imageSearch.setSearchCompleteCallback(this, dumbFunction, null);
	imageSearch.execute(searchTerm);
}

function finish() {
	$("#harhar").empty();
	
	console.log("running finish");
	var xA = 0;
	var yA = 200;
	
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < str[i].length; j++) {
			var searchKey = str[i][j];
			var myImageURL;
			if (searchKey != "1") {
				myImageURL = imgDict[searchKey];
				var image = svg.append("image")
					.attr("xlink:href", myImageURL)
					.attr('x', xA)
					.attr('y', yA)
					.attr('width', 10)
					.attr('height', 10)
					.attr('stroke', "green");
			}
			if (searchKey == "1") {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
				svg.append("rect")
					.attr('x', xA)
					.attr('y', yA)
					.attr('width', 10)
					.attr('height', 10)
					.attr('fill', 'rgb(' + r + ',' + g + ',' + b +')' );
			}
			xA+=10;
		}
		xA = 0;
		yA += 10;
	}
}