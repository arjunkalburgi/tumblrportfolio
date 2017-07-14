var projdict = {
	"encmp100": 'linear-gradient(to bottom right, #0042FF, #FFBF19) fixed !important;',
	"hacktime": 'linear-gradient(to bottom right, #112188, #16703D) fixed !important;',
	"eceweekhacked2017": 'linear-gradient(to bottom right, #A319FF, #16703D) fixed !important;',
	"AUcourses": 'linear-gradient(to bottom right, #D4B890, #6C233D) fixed !important',
	"reactlessons": 'linear-gradient(to bottom right,  #3D8599, #FF4940) fixed !important',
	"makeover": 'linear-gradient(to bottom right,  #ED4F67, #EFD281) fixed !important',
	"testingproj": 'linear-gradient(to bottom right,  #993622, #3D7299) fixed !important',
	"dbhospitalapp": 'linear-gradient(to bottom right,  #18B0AF, #CAAD1B) fixed !important',
	"howtocompe": 'linear-gradient(to bottom right,  #E4E6E5, #1B4610) fixed !important',
	"dbnormalizerapp": 'linear-gradient(to bottom right,  #8e8e8e, #09FDFB) fixed !important',
	"cloudycar": 'linear-gradient(to bottom right,  #135FAB, #fffccc) fixed !important',
	"d3tutorial": 'linear-gradient(to bottom right,  #7f3ea5, #f5844b) fixed !important',
	"C301as1": 'linear-gradient(to bottom right,  #B0BEC5, #B0AB18) fixed !important',
	"ECEW17": 'linear-gradient(to bottom right,  #112188, #040B3B) fixed !important',
	"CEClub": 'linear-gradient(to bottom right,  #1A450F, #1A450F) fixed !important',
	"pkb": 'linear-gradient(to bottom right,  #222222, #1b1b1b) fixed !important',
	"shoutbox2": 'linear-gradient(to bottom right,  #e3dacf, #e3dacf) fixed !important',
	"dra": 'linear-gradient(to bottom right,  black, #323232) fixed !important',
	"fire": 'linear-gradient(to bottom right,  #b3afae, #8f8c8b) fixed !important',
	"eceweekhacked2015": 'linear-gradient(to bottom right,  #237E7C, #0a1351) fixed !important;',
	"ciao": 'linear-gradient(to bottom right,  #374ca5, #374ca5) fixed !important',
	"rdf": 'linear-gradient(to bottom right,  black, #323232) fixed !important',
	"reviews": 'linear-gradient(to bottom right,  #2c3e50, #1e2b38) fixed !important',
	"senti": 'linear-gradient(to bottom right,  #222222, #3BB873) fixed !important',
	"conn4": 'linear-gradient(to bottom right,  #0088ff, #0088ff) fixed !important',
	"shoutbox": 'linear-gradient(to bottom right,  #283e50, #283e50) fixed !important',
	"tetris": 'linear-gradient(to bottom right,  black, black) fixed !important',
	"resnet": 'linear-gradient(to bottom right,  #b7703c, #b7703c) fixed !important',
	"runner": 'linear-gradient(to bottom right,  #9ec2f4, #9ec2f4) fixed !important'
}

var projs;
var blocksize; 

$( document ).ready(function(){
	projs = $(".block").map(function() { return this.id; }).toArray();
	var j = 0; 
	for (var i = projs.length - 1; i >= 0; i--) {
		j += $("#"+projs[i]).height(); 
		// console.log($("#"+projs[i]).height())
	}
	blocksize = j/projs.length; 

	// $("#background").addClass("start")
})

$(window).scroll(function() {
	var offset = $(window).height()*0.25; // size of window from top to when you want the first switch to be
	console.log("blocksize: " + blocksize + ", projs: " + projs.length); 
	// var blocksize = $(window).height()*0.9;  // this is programmed in 
	// var projs = $(".block").map(function() { return this.id; }).toArray();
	var scroll = $(window).scrollTop(); 
	var projectname = ""; 

	var currprojectnum = Math.floor((scroll-offset)/blocksize); 
	projectname = projs[currprojectnum]; 
	if (currprojectnum >= projs.length) {
		console.log("hey"); 
		projectname = projs[currprojectnum-1]; 
	}
	// if (currprojectnum == -1) {
	// 	projectname = "start"
	// }
	// console.log("scroll: "+ scroll + ", currprojectnum: " + currprojectnum); 

	// $("#background").animate({background: projdict[projectname]}, 1000); 
	$("#background").removeClass()
	$("#background").addClass(projectname).fadeIn("slow");
});
