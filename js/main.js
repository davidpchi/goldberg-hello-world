var str=[                                                                                                                                                                                       
"                                                                                                                                                                                DDDDDDDD",
"HHHHHHHHH     HHHHHHHHH                   LLLLLLL LLLLLLL                       WWWWWWWW                           WWWWWWWW                                 LLLLLLL             D111111D",
"H1111111H     H1111111H                   L11111L L11111L                       W111111W                           W111111W                                 L11111L             D111111D",
"H1111111H     H1111111H                   L11111L L11111L                       W111111W                           W111111W                                 L11111L             D111111D",
"HH111111H     H111111HH                   L11111L L11111L                       W111111W                           W111111W                                 L11111L             D11111D", 
"  H11111H     H11111H      EEEEEEEEEEEE    L1111L  L1111L    OOOOOOOOOOO         W11111W           WWWWW           W11111W OOOOOOOOOOO   RRRRR   RRRRRRRRR   L1111L     DDDDDDDDD11111D", 
"  H11111H     H11111H    EE111111111111EE  L1111L  L1111L  OO11111111111OO        W11111W         W11111W         W11111WOO11111111111OO R1111RRR111111111R  L1111L   DD11111111111111D", 
"  H111111HHHHH111111H   E111111EEEEE11111EEL1111L  L1111L O111111111111111O        W11111W       W1111111W       W11111WO111111111111111OR11111111111111111R L1111L  D1111111111111111D", 
"  H11111111111111111H  E111111E     E11111EL1111L  L1111L O11111OOOOO11111O         W11111W     W111111111W     W11111W O11111OOOOO11111ORR111111RRRRR111111RL1111L D1111111DDDDD11111D", 
"  H11111111111111111H  E1111111EEEEE111111EL1111L  L1111L O1111O     O1111O          W11111W   W11111W11111W   W11111W  O1111O     O1111O R11111R     R11111RL1111L D111111D    D11111D", 
"  H111111HHHHH111111H  E11111111111111111E L1111L  L1111L O1111O     O1111O           W11111W W11111W W11111W W11111W   O1111O     O1111O R11111R     RRRRRRRL1111L D11111D     D11111D", 
"  H11111H     H11111H  E111111EEEEEEEEEEE  L1111L  L1111L O1111O     O1111O            W11111W11111W   W11111W11111W    O1111O     O1111O R11111R            L1111L D11111D     D11111D", 
"  H11111H     H11111H  E1111111E           L1111L  L1111L O1111O     O1111O             W111111111W     W111111111W     O1111O     O1111O R11111R            L1111L D11111D     D11111D", 
"HH111111H     H111111HHE11111111E         L111111LL111111LO11111OOOOO11111O              W1111111W       W1111111W      O11111OOOOO11111O R11111R           L111111LD111111DDDDD111111DD",
"H1111111H     H1111111H E11111111EEEEEEEE L111111LL111111LO111111111111111O               W11111W         W11111W       O111111111111111O R11111R           L111111L D11111111111111111D",
"H1111111H     H1111111H  EE1111111111111E L111111LL111111L OO11111111111OO                 W111W           W111W         OO11111111111OO  R11111R           L111111L  D111111111DDD1111D",
"HHHHHHHHH     HHHHHHHHH    EEEEEEEEEEEEEE LLLLLLLLLLLLLLLL   OOOOOOOOOOO                    WWW             WWW            OOOOOOOOOOO    RRRRRRR           LLLLLLLL   DDDDDDDDD   DDDDD"];

var str2 = "Hello World";
var index = 0;

var svg;
var imgDict = {};
var imgSearchObj;

var colorArray = [
"http://img2.findthebest.com/sites/default/files/2307/media/images/t2/Pastel_Red_430031_i0.png",
"http://milestonepapercottage.com/wp-con,tent/uploads/2011/06/Cardstock-AC-Pastel-blue-dark-1280x1280.jpg",
"http://img2.findthebest.com/sites/default/files/2307/media/images/Pastel_Green_429789_i0.png",
"http://img2.findthebest.com/sites/default/files/2307/media/images/Pastel_Yellow_429865_i0.png"];


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
			var searchTerm = "<b>";
			var charIndex = imageSearch.results[0].content.indexOf(searchTerm);
			var letter = imageSearch.results[0].content.charAt(charIndex+3);
			myRes = imageSearch.results[0].url;
			imgDict[letter] = myRes;
			index++;
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
			var myImageURL;
			if (searchKey != "1") {
				myImageURL = imgDict[searchKey];
			}
			else {
				console.log("HIT ELSE!");
				myImageUrl = colorArray[Math.floor((Math.random()*10))];
			}
			var image = svg.append("image")
				.attr("xlink:href", myImageURL)
				.attr('x', xA)
				.attr('y', yA)
				.attr('width', 5)
				.attr('height', 5)
				.attr('stroke', "green");
			xA+=5;
		}
		xA = 0;
		yA += 5;
	}
}